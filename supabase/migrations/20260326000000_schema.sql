-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Table for user roles (to identify admins)
create table user_roles (
  id uuid references auth.users on delete cascade primary key,
  role text check (role in ('admin', 'lab')) not null default 'lab',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Table for test results
create table test_results (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references auth.users on delete cascade not null,
  test_name text not null,
  result_value text not null,
  result_date date not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Table for PDF reports metadata
create table lab_reports (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references auth.users on delete cascade not null,
  title text not null,
  file_path text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- RLS POLICIES --
alter table user_roles enable row level security;
alter table test_results enable row level security;
alter table lab_reports enable row level security;

-- user_roles policies
create policy "Users can read own role" on user_roles for select using (auth.uid() = id);

-- test_results policies
create policy "Users can see their own test results" on test_results
  for select using (auth.uid() = user_id);

create policy "Admins can insert test results" on test_results
  for insert with check (
    exists (select 1 from user_roles where id = auth.uid() and role = 'admin')
  );

-- lab_reports policies
create policy "Users can see their own reports" on lab_reports
  for select using (auth.uid() = user_id);

create policy "Admins can insert reports" on lab_reports
  for insert with check (
    exists (select 1 from user_roles where id = auth.uid() and role = 'admin')
  );

-- Set up Storage for Reports
insert into storage.buckets (id, name, public) values ('lab_reports', 'lab_reports', false);

create policy "Users can view their own PDFs" on storage.objects
  for select using (
    bucket_id = 'lab_reports'
    and (storage.foldername(name))[1] = auth.uid()::text
  );

create policy "Admins can upload PDFs" on storage.objects
  for insert with check (
    bucket_id = 'lab_reports'
    and exists (select 1 from user_roles where id = auth.uid() and role = 'admin')
  );

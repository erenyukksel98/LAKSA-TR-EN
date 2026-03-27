alter table test_results add column file_path text;
alter table test_results alter column result_value drop not null;

-- Allow users to insert their own test results
create policy "Users can insert own test results" on test_results
  for insert with check (auth.uid() = user_id);

-- Storage bucket for lab_results
insert into storage.buckets (id, name, public) values ('lab_results', 'lab_results', false);

-- Storage policies for lab_results
create policy "Users can upload their own results" on storage.objects
  for insert with check (
    bucket_id = 'lab_results'
    and (storage.foldername(name))[1] = auth.uid()::text
  );

create policy "Users can view their own results" on storage.objects
  for select using (
    bucket_id = 'lab_results'
    and (storage.foldername(name))[1] = auth.uid()::text
  );

create policy "Admins can view all results" on storage.objects
  for select using (
    bucket_id = 'lab_results'
    and exists (select 1 from user_roles where id = auth.uid() and role = 'admin')
  );

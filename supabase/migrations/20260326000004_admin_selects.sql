-- Allow admins to read all test results
create policy "Admins can view all test results" on test_results
  for select using (exists (select 1 from user_roles where id = auth.uid() and role = 'admin'));

-- Allow admins to read all reports
create policy "Admins can view all reports" on lab_reports
  for select using (exists (select 1 from user_roles where id = auth.uid() and role = 'admin'));

-- Allow admins to read files from lab_reports bucket
create policy "Admins can view all lab_reports" on storage.objects
  for select using (
    bucket_id = 'lab_reports'
    and exists (select 1 from user_roles where id = auth.uid() and role = 'admin')
  );

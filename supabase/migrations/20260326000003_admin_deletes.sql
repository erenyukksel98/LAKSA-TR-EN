-- Allow admins to delete any test result
create policy "Admins can delete any test results" on test_results
  for delete using (exists (select 1 from user_roles where id = auth.uid() and role = 'admin'));

-- Allow admins to delete any report
create policy "Admins can delete any report" on lab_reports
  for delete using (exists (select 1 from user_roles where id = auth.uid() and role = 'admin'));

-- Allow admins to delete any file from lab_results
create policy "Admins can delete any file in lab_results" on storage.objects
  for delete using (
    bucket_id = 'lab_results'
    and exists (select 1 from user_roles where id = auth.uid() and role = 'admin')
  );

-- Allow admins to delete any file from lab_reports
create policy "Admins can delete any file in lab_reports" on storage.objects
  for delete using (
    bucket_id = 'lab_reports'
    and exists (select 1 from user_roles where id = auth.uid() and role = 'admin')
  );

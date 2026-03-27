alter table lab_reports add column participant_code text;

-- Allow users to delete their own test results from db and storage
create policy "Users can delete own test results" on test_results
  for delete using (auth.uid() = user_id);

create policy "Users can delete their own results files" on storage.objects
  for delete using (
    bucket_id = 'lab_results'
    and (storage.foldername(name))[1] = auth.uid()::text
  );

-- Allow admins to insert test results on behalf of labs into lab_results bucket
create policy "Admins can upload to any lab_results" on storage.objects
  for insert with check (
    bucket_id = 'lab_results'
    and exists (select 1 from user_roles where id = auth.uid() and role = 'admin')
  );

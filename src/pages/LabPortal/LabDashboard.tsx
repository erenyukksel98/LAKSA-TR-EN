import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useLanguage } from '../../context/LanguageContext';
import { supabase } from '../../lib/supabase';
import { FileText, Activity, LogOut, Download, Upload, CheckCircle, Trash2 } from 'lucide-react';

interface TestResult {
  id: string;
  test_name: string;
  result_value: string;
  file_path: string;
  result_date: string;
}

interface LabReport {
  id: string;
  title: string;
  file_path: string;
  created_at: string;
  participant_code: string;
}

export default function LabDashboard() {
  const { user, role, loading: authLoading, signOut } = useAuth();
  const { t } = useLanguage();
  const navigate = useNavigate();

  const [results, setResults] = useState<TestResult[]>([]);
  const [reports, setReports] = useState<LabReport[]>([]);
  const [loading, setLoading] = useState(true);

  // Upload State
  const [testName, setTestName] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [success, setSuccess] = useState('');

  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/lab-login');
    }
  }, [user, authLoading, navigate]);

  useEffect(() => {
    if (user) {
      fetchData();
    }
  }, [user]);

  const fetchData = async () => {
    setLoading(true);
    // Fetch test results
    const { data: resultsData } = await supabase
      .from('test_results')
      .select('*')
      .order('result_date', { ascending: false });
    
    // Fetch reports
    const { data: reportsData } = await supabase
      .from('lab_reports')
      .select('*')
      .order('created_at', { ascending: false });

    if (resultsData) setResults(resultsData);
    if (reportsData) setReports(reportsData);
    setLoading(false);
  };

  const handleLogout = async () => {
    await signOut();
    navigate('/lab-login');
  };

  const downloadReport = async (bucket: string, filePath: string, title: string) => {
    if (!filePath) {
      alert("Bu sonuç dosyalar desteklenmeden önce yüklenmişti / This result was uploaded before files were supported.");
      return;
    }

    const { data, error } = await supabase.storage
      .from(bucket)
      .download(filePath);
      
    if (error) {
      console.error(error);
      alert("Error downloading file");
      return;
    }

    const url = URL.createObjectURL(data);
    const a = document.createElement('a');
    a.href = url;
    const fileExt = filePath.split('.').pop() || 'pdf';
    a.download = `${title}.${fileExt}`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleUploadResult = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !file) return alert(t('lab.uploadFile'));

    setUploading(true);
    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random()}.${fileExt}`;
    const filePath = `${user.id}/${fileName}`;

    // Upload to lab_results bucket
    const { error: uploadError } = await supabase.storage
      .from('lab_results')
      .upload(filePath, file);

    if (uploadError) {
      alert(uploadError.message);
      setUploading(false);
      return;
    }

    // Insert to test_results table
    const { error: dbError } = await supabase.from('test_results').insert([
      {
        user_id: user.id,
        test_name: testName,
        file_path: filePath,
        result_date: new Date().toISOString(),
      }
    ]);

    if (!dbError) {
      setSuccess(t('admin.success') || 'Success');
      setTestName('');
      setFile(null);
      fetchData();
      setTimeout(() => setSuccess(''), 3000);
    } else {
      alert(dbError.message);
    }
    setUploading(false);
  };

  const handleDeleteResult = async (id: string, filePath: string) => {
    if (!window.confirm('Bu ölçüm sonucunu silmek istediğinize emin misiniz? / Are you sure you want to delete this result?')) return;

    // Delete from db
    const { error: dbError } = await supabase.from('test_results').delete().eq('id', id);
    if (!dbError) {
      if (filePath) {
        // Optionally delete from storage to save space, but not critical
        await supabase.storage.from('lab_results').remove([filePath]);
      }
      fetchData();
    } else {
      alert(dbError.message);
    }
  };

  if (authLoading || loading) {
    return <div className="min-h-screen pt-24 px-4 flex justify-center items-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">{t('lab.dashboardTitle')}</h1>
          <div className="flex items-center gap-4">
            {role === 'admin' && (
              <button 
                onClick={() => navigate('/admin')}
                className="text-sm bg-blue-100 text-blue-800 px-4 py-2 rounded-md font-medium"
              >
                {t('admin.title')}
              </button>
            )}
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-red-600 hover:text-red-700 font-medium"
            >
              <LogOut className="w-5 h-5" />
              {t('lab.logout')}
            </button>
          </div>
        </div>

        {success && (
          <div className="mb-6 bg-green-50 text-green-700 p-4 rounded-md flex items-center gap-2">
            <CheckCircle className="w-5 h-5" />
            {success}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="flex flex-col gap-8">
            {/* Upload Measurement Form */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center gap-3 mb-6">
                <Upload className="w-6 h-6 text-blue-950" />
                <h2 className="text-xl font-semibold text-gray-800">{t('lab.uploadResult') || 'Ölçüm Sonucu Yükle'}</h2>
              </div>
              
              <form onSubmit={handleUploadResult} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">{t('lab.testName') || 'Karşılaştırma Adı'}</label>
                  <input required type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-950 focus:border-blue-950 sm:text-sm" value={testName} onChange={e => setTestName(e.target.value)} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">{t('lab.uploadFile') || 'Dosya (PDF, Excel, JPG vb.)'}</label>
                  <input required type="file" className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-950 hover:file:bg-blue-100" onChange={e => setFile(e.target.files?.[0] || null)} />
                </div>
                <button disabled={uploading} type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-950 hover:bg-blue-900 disabled:opacity-50">
                  {uploading ? '...' : (t('lab.upload') || 'Yükle')}
                </button>
              </form>
            </div>

            {/* View Measurements List */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center gap-3 mb-6">
                <Activity className="w-6 h-6 text-blue-950" />
                <h2 className="text-xl font-semibold text-gray-800">{t('lab.resultsTitle') || 'Ölçüm Sonuçları'}</h2>
              </div>
              
              {results.length === 0 ? (
                <p className="text-gray-500 text-sm">{t('lab.noData')}</p>
              ) : (
                <ul className="divide-y divide-gray-200">
                  {results.map((r) => (
                    <li key={r.id} className="py-4 flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-900">{r.test_name}</p>
                        <p className="text-xs text-gray-500">{new Date(r.result_date).toLocaleDateString()}</p>
                      </div>
                      <div className="flex items-center gap-4 ml-4">
                        {r.file_path && (
                          <button
                            onClick={() => downloadReport('lab_results', r.file_path, r.test_name)}
                            className="flex items-center gap-1 text-sm text-blue-950 hover:text-blue-800 font-medium whitespace-nowrap"
                          >
                            <Download className="w-4 h-4 hidden sm:block" />
                            İndir
                          </button>
                        )}
                        <button
                          onClick={() => handleDeleteResult(r.id, r.file_path)}
                          className="flex items-center gap-1 text-sm text-red-500 hover:text-red-700 font-medium transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Admin Reports Section */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 h-fit">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-6 h-6 text-blue-950" />
              <h2 className="text-xl font-semibold text-gray-800">{t('lab.reportsTitle')}</h2>
            </div>

            {reports.length === 0 ? (
              <p className="text-gray-500 text-sm">{t('lab.noData')}</p>
            ) : (
              <ul className="divide-y divide-gray-200">
                {reports.map((report) => (
                  <li key={report.id} className="py-4 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-900">{report.title}</p>
                      <p className="text-xs text-gray-500">
                        {new Date(report.created_at).toLocaleDateString()}
                        {report.participant_code && ` • Katılımcı kodu: ${report.participant_code}`}
                      </p>
                    </div>
                    <button
                      onClick={() => downloadReport('lab_reports', report.file_path, report.title)}
                      className="flex items-center gap-2 text-sm text-red-600 hover:text-red-800 font-medium whitespace-nowrap ml-4"
                    >
                      <Download className="w-4 h-4 hidden sm:block" />
                      İndir
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

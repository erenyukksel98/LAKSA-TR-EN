import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useLanguage } from '../../context/LanguageContext';
import { supabase } from '../../lib/supabase';
import { Upload, Plus, CheckCircle, Activity, FileText, Download, Trash2 } from 'lucide-react';

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

export default function AdminPanel() {
  const { user, role, loading: authLoading } = useAuth();
  const { t } = useLanguage();
  const navigate = useNavigate();

  const [users, setUsers] = useState<{ id: string; lab_name: string }[]>([]);
  const [selectedUser, setSelectedUser] = useState('');
  
  // Test Result State
  const [testName, setTestName] = useState('');
  const [resultFile, setResultFile] = useState<File | null>(null);
  const [resultDate, setResultDate] = useState('');
  
  // Report State
  const [reportTitle, setReportTitle] = useState('');
  const [participantCode, setParticipantCode] = useState('');
  const [file, setFile] = useState<File | null>(null);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');

  // Selected User Data
  const [results, setResults] = useState<TestResult[]>([]);
  const [reports, setReports] = useState<LabReport[]>([]);

  useEffect(() => {
    if (!authLoading) {
      if (!user || role !== 'admin') {
        navigate('/lab-login');
      } else {
        fetchUsers();
      }
    }
  }, [user, role, authLoading, navigate]);

  useEffect(() => {
    if (selectedUser) {
      fetchUserData(selectedUser);
    } else {
      setResults([]);
      setReports([]);
    }
  }, [selectedUser]);

  const fetchUsers = async () => {
    const { data } = await supabase.from('user_roles').select('id, lab_name').eq('role', 'lab');
    if (data) setUsers(data as any);
  };

  const fetchUserData = async (userId: string) => {
    const { data: resultsData } = await supabase
      .from('test_results')
      .select('*')
      .eq('user_id', userId)
      .order('result_date', { ascending: false });
    
    const { data: reportsData } = await supabase
      .from('lab_reports')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    if (resultsData) setResults(resultsData);
    if (reportsData) setReports(reportsData);
  };

  const handleAddResult = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedUser || !resultFile) return alert(t('admin.selectUser'));
    
    setLoading(true);
    const fileExt = resultFile.name.split('.').pop();
    const fileName = `${Math.random()}.${fileExt}`;
    const filePath = `${selectedUser}/${fileName}`;

    // Upload to lab_results bucket
    const { error: uploadError } = await supabase.storage
      .from('lab_results')
      .upload(filePath, resultFile);

    if (uploadError) {
      alert(uploadError.message);
      setLoading(false);
      return;
    }

    const { error: dbError } = await supabase.from('test_results').insert([
      {
        user_id: selectedUser,
        test_name: testName,
        file_path: filePath,
        result_date: resultDate,
      }
    ]);

    if (!dbError) {
      setSuccess(t('admin.success') || 'Success');
      setTestName('');
      setResultFile(null);
      setResultDate('');
      fetchUserData(selectedUser);
      setTimeout(() => setSuccess(''), 3000);
    } else {
      alert(dbError.message);
    }
    setLoading(false);
  };

  const handleUploadReport = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedUser || !file) return alert(t('admin.selectUser'));

    setLoading(true);
    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random()}.${fileExt}`;
    const filePath = `${selectedUser}/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from('lab_reports')
      .upload(filePath, file);

    if (uploadError) {
      alert(uploadError.message);
      setLoading(false);
      return;
    }

    const { error: dbError } = await supabase.from('lab_reports').insert([
      {
        user_id: selectedUser,
        title: reportTitle,
        file_path: filePath,
        participant_code: participantCode,
      }
    ]);

    if (!dbError) {
      setSuccess(t('admin.success'));
      setReportTitle('');
      setParticipantCode(''); // reset
      setFile(null);
      fetchUserData(selectedUser);
      setTimeout(() => setSuccess(''), 3000);
    } else {
      alert(dbError.message);
    }
    setLoading(false);
  };

  const handleDeleteResult = async (id: string, filePath: string) => {
    if (!window.confirm('Bu ölçüm sonucunu silmek istediğinize emin misiniz? / Are you sure you want to delete this result?')) return;
    const { error: dbError } = await supabase.from('test_results').delete().eq('id', id);
    if (!dbError) {
      if (filePath) await supabase.storage.from('lab_results').remove([filePath]);
      fetchUserData(selectedUser);
    } else alert(dbError.message);
  };

  const handleDeleteReport = async (id: string, filePath: string) => {
    if (!window.confirm('Bu raporu silmek istediğinize emin misiniz? / Are you sure you want to delete this report?')) return;
    const { error: dbError } = await supabase.from('lab_reports').delete().eq('id', id);
    if (!dbError) {
      if (filePath) await supabase.storage.from('lab_reports').remove([filePath]);
      fetchUserData(selectedUser);
    } else alert(dbError.message);
  };

  const downloadReport = async (bucket: string, filePath: string, title: string) => {
    if (!filePath) return alert("Dosya yok / File not found.");
    const { data, error } = await supabase.storage.from(bucket).download(filePath);
    if (error) return alert("İndirme hatası / Download error");
    const url = URL.createObjectURL(data);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${title}.${filePath.split('.').pop() || 'pdf'}`;
    a.click();
    URL.revokeObjectURL(url);
  };

  if (authLoading || role !== 'admin') return <div className="min-h-screen pt-24 px-4 flex justify-center items-center">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">{t('admin.title')}</h1>

        {success && (
          <div className="mb-6 bg-green-50 text-green-700 p-4 rounded-md flex items-center gap-2">
            <CheckCircle className="w-5 h-5" />
            {success}
          </div>
        )}

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-2">{t('admin.selectUser')} (UUID / Lab Name)</label>
          <select 
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-950 focus:border-blue-950 sm:text-sm rounded-md border"
            value={selectedUser}
            onChange={(e) => setSelectedUser(e.target.value)}
          >
            <option value="">-- Select Lab --</option>
            {users.map(u => (
              <option key={u.id} value={u.id}>{u.lab_name || u.id}</option>
            ))}
          </select>
        </div>

        {selectedUser && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Left Column: Upload Forms */}
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-2 mb-6 text-gray-800">
                  <Plus className="w-5 h-5 text-blue-950" />
                  <h2 className="text-xl font-semibold">Ölçüm sonucu ekle</h2>
                </div>
                <form onSubmit={handleAddResult} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Karşılaştırma adı</label>
                    <input required type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-950 focus:border-blue-950 sm:text-sm" value={testName} onChange={e => setTestName(e.target.value)} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Dosya (PDF, Excel, JPG vb.)</label>
                    <input required type="file" className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-950 hover:file:bg-blue-100" onChange={e => setResultFile(e.target.files?.[0] || null)} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">{t('admin.date')}</label>
                    <input required type="date" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-950 focus:border-blue-950 sm:text-sm" value={resultDate} onChange={e => setResultDate(e.target.value)} />
                  </div>
                  <button disabled={loading} type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-950 hover:bg-blue-900 disabled:opacity-50">
                    {t('admin.save')}
                  </button>
                </form>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-2 mb-6 text-gray-800">
                  <Upload className="w-5 h-5 text-blue-950" />
                  <h2 className="text-xl font-semibold">{t('admin.uploadReport')}</h2>
                </div>
                <form onSubmit={handleUploadReport} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Rapor Başlığı / Report Title</label>
                    <input required type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-950 focus:border-blue-950 sm:text-sm" value={reportTitle} onChange={e => setReportTitle(e.target.value)} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Katılımcı Kodu (Participant Code)</label>
                    <input type="text" placeholder="Örn: A, D..." className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-950 focus:border-blue-950 sm:text-sm" value={participantCode} onChange={e => setParticipantCode(e.target.value)} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">PDF Dosyası / PDF File</label>
                    <input required type="file" accept=".pdf" className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-950 hover:file:bg-blue-100" onChange={e => setFile(e.target.files?.[0] || null)} />
                  </div>
                  <button disabled={loading} type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-950 hover:bg-blue-900 disabled:opacity-50">
                    {t('admin.upload')}
                  </button>
                </form>
              </div>
            </div>

            {/* Right Column: Lab Results & Reports */}
            <div className="space-y-8">
              {/* Lab's Measurements */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center gap-3 mb-6">
                  <Activity className="w-6 h-6 text-blue-950" />
                  <h2 className="text-xl font-semibold text-gray-800">Ölçüm Sonuçları</h2>
                </div>
                {results.length === 0 ? (
                  <p className="text-gray-500 text-sm">Veri bulunmamaktadır.</p>
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
                            <button onClick={() => downloadReport('lab_results', r.file_path, r.test_name)} className="text-blue-950 hover:text-blue-800"><Download className="w-4 h-4" /></button>
                          )}
                          <button onClick={() => handleDeleteResult(r.id, r.file_path)} className="text-red-500 hover:text-red-700"><Trash2 className="w-4 h-4" /></button>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Lab's Reports */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center gap-3 mb-6">
                  <FileText className="w-6 h-6 text-blue-950" />
                  <h2 className="text-xl font-semibold text-gray-800">Yüklenen Raporlar</h2>
                </div>
                {reports.length === 0 ? (
                  <p className="text-gray-500 text-sm">Veri bulunmamaktadır.</p>
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
                        <div className="flex items-center gap-4 ml-4">
                          <button onClick={() => downloadReport('lab_reports', report.file_path, report.title)} className="text-blue-950 hover:text-blue-800"><Download className="w-4 h-4" /></button>
                          <button onClick={() => handleDeleteReport(report.id, report.file_path)} className="text-red-500 hover:text-red-700"><Trash2 className="w-4 h-4" /></button>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

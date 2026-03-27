import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2, FileText, Target, Activity } from 'lucide-react';
import { useEffect } from 'react';

export default function ServiceDetail() {
  const { id } = useParams<{ id: string }>();
  const { t } = useLanguage();
  
  const categories = t('services.categories') || [];
  const category = categories.find((cat: any) => cat.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!category) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Category not found</h2>
          <Link to="/#services" className="text-blue-950 hover:underline flex items-center justify-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            {t('serviceDetail.backBtn')}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen pt-32 pb-24 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          to="/#services" 
          className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-950 font-medium mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          {t('serviceDetail.backBtn')}
        </Link>

        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-950 rounded-xl flex items-center justify-center shadow-lg shrink-0">
              <Activity className="w-6 h-6 text-white" />
            </div>
            {category.name} {t('serviceDetail.comparisonsTitle')}
          </h1>
          <p className="text-lg text-slate-600">
            {t('serviceDetail.categoryDesc').replace('{category}', category.name)}
          </p>
        </div>

        <div className="space-y-8">
          {category.comparisons.map((comp: any, index: number) => (
            <motion.div
              key={comp.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-700">
                      <CheckCircle2 className="w-4 h-4" />
                      {t('services.active')}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">
                    {comp.name}
                  </h2>
                </div>
                <div className="bg-slate-50 px-6 py-4 rounded-2xl border border-slate-100 text-center md:text-right shrink-0">
                  <div className="text-sm text-slate-500 font-medium mb-1">{t('services.priceLabel')}</div>
                  <div className="text-2xl font-bold text-blue-950">{comp.price}</div>
                </div>
              </div>

              {comp.detailedDesc && (
                <div className="prose prose-slate max-w-none mb-8">
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {comp.detailedDesc}
                  </p>
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-blue-950/5 rounded-2xl p-6 border border-blue-950/10">
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="w-6 h-6 text-blue-950" />
                    <h3 className="text-xl font-bold text-slate-900">{t('serviceDetail.scopeTitle')}</h3>
                  </div>
                  <p className="text-slate-700 font-medium leading-relaxed">
                    {comp.scope}
                  </p>
                </div>

                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                  <div className="flex items-center gap-3 mb-4">
                    <FileText className="w-6 h-6 text-slate-700" />
                    <h3 className="text-xl font-bold text-slate-900">{t('serviceDetail.stepsTitle')}</h3>
                  </div>
                  <ul className="space-y-3">
                    {comp.steps.map((step: string, i: number) => (
                      <li key={i} className="flex items-start gap-3 text-slate-600">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-950/10 text-blue-950 flex items-center justify-center text-sm font-bold mt-0.5">
                          {i + 1}
                        </span>
                        <span className="leading-relaxed">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="border-t border-slate-100 pt-6 flex justify-end">
                <Link
                  to={`/?comparison=${comp.id}#contact`}
                  className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white bg-blue-950 hover:bg-blue-900 rounded-xl shadow-md hover:shadow-lg transition-all gap-2"
                >
                  {t('serviceDetail.applyBtn')}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}

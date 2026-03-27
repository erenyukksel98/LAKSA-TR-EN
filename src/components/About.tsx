import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { ShieldCheck, Target, Eye } from 'lucide-react';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-6"
          >
            {t('about.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 leading-relaxed"
          >
            {t('about.description')}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-sm"
          >
            <div className="w-12 h-12 bg-blue-950/10 rounded-xl flex items-center justify-center mb-6">
              <Target className="w-6 h-6 text-blue-950" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">{t('about.missionTitle')}</h3>
            <p className="text-slate-600 leading-relaxed">
              {t('about.missionText')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-sm"
          >
            <div className="w-12 h-12 bg-blue-950/10 rounded-xl flex items-center justify-center mb-6">
              <Eye className="w-6 h-6 text-blue-950" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">{t('about.visionTitle')}</h3>
            <p className="text-slate-600 leading-relaxed">
              {t('about.visionText')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-sm"
          >
            <div className="w-12 h-12 bg-blue-950/10 rounded-xl flex items-center justify-center mb-6">
              <ShieldCheck className="w-6 h-6 text-blue-950" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">{t('about.whyTitle')}</h3>
            <p className="text-slate-600 leading-relaxed">
              {t('about.whyText')}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

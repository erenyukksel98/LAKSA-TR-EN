import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { Network, Users, FileCheck, GraduationCap, ShoppingCart } from 'lucide-react';

const icons = [Network, Users, FileCheck, GraduationCap, ShoppingCart];

export default function ServicesPage() {
  const { t } = useLanguage();
  const services = t('servicesPage.items') || [];

  return (
    <main className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            {t('servicesPage.title')}
          </motion.h1>
          <div className="h-1.5 w-24 bg-blue-950 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service: any, index: number) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all group flex flex-col"
              >
                <div className="w-14 h-14 bg-blue-950/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-950 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-blue-950 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <div className="text-slate-600 leading-relaxed whitespace-pre-line flex-grow">
                  {service.description}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </main>
  );
}

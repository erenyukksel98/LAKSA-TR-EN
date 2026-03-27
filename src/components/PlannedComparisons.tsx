import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Scale, FlaskConical, Thermometer, Ruler, 
  Wrench, Gauge, Waves, Settings, Zap, Clock, 
  FastForward, Activity, Lightbulb, Gem, Droplet, Layers,
  Weight, Dumbbell
} from 'lucide-react';

const categoryAssets: Record<string, { icon: any }> = {
  "kuvvet": { icon: Dumbbell },
  "hacim": { icon: FlaskConical },
  "sicaklik-nem": { icon: Thermometer },
  "boyut": { icon: Ruler },
  "tork": { icon: Wrench },
  "basinc": { icon: Gauge },
  "debi": { icon: Waves },
  "devir": { icon: Settings },
  "elektrik": { icon: Zap },
  "frekans-zaman": { icon: Clock },
  "hiz": { icon: FastForward },
  "ivme-titresim": { icon: Activity },
  "optik": { icon: Lightbulb },
  "sertlik": { icon: Gem },
  "viskozite": { icon: Droplet },
  "yogunluk": { icon: Layers },
  "kutle": { icon: Weight },
  "terazi": { icon: Scale },
};

export default function PlannedComparisons() {
  const { t, language } = useLanguage();
  const title = t('plannedComparisons.title') || "Planlanan karşılaştırmalar";
  const categories = t('services.categories') || [];
  const sortedCategories = [...categories].sort((a: any, b: any) => a.name.localeCompare(b.name, language));

  return (
    <section id="planned-comparisons" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
          >
            {title}
          </motion.h2>
          <div className="h-1 w-20 bg-blue-950 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedCategories.map((category: any, index: number) => {
            const asset = categoryAssets[category.id] || { icon: Activity };
            const Icon = asset.icon;

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.375 }}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4 border-b border-slate-200 pb-4">
                  <div className="w-10 h-10 bg-blue-950/10 rounded-lg flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-blue-950" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{category.name}</h3>
                </div>
                <ul className="space-y-3 flex-grow">
                  {category.comparisons.map((comp: any) => (
                    <li key={comp.id}>
                      <Link
                        to={`/services/${category.id}`}
                        className="flex items-start gap-3 text-slate-600 hover:text-blue-950 transition-colors group"
                      >
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-blue-950 shrink-0 transition-colors" />
                        <span className="font-medium leading-snug">{comp.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

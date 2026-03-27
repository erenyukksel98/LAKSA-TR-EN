import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Scale, FlaskConical, Thermometer, Ruler, 
  Wrench, Gauge, Waves, Settings, Zap, Clock, 
  FastForward, Activity, Lightbulb, Gem, Droplet, Layers,
  Weight, Dumbbell, CheckCircle2, Target, FileText
} from 'lucide-react';

const categoryAssets: Record<string, { icon: any, image: string }> = {
  "kuvvet": { icon: Dumbbell, image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" },
  "hacim": { icon: FlaskConical, image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=800" },
  "sicaklik-nem": { icon: Thermometer, image: "https://images.unsplash.com/photo-1563473213013-de2a0133c100?auto=format&fit=crop&q=80&w=800" },
  "boyut": { icon: Ruler, image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800" },
  "tork": { icon: Wrench, image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&q=80&w=800" },
  "basinc": { icon: Gauge, image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800" },
  "debi": { icon: Waves, image: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&q=80&w=800" },
  "devir": { icon: Settings, image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800" },
  "elektrik": { icon: Zap, image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&q=80&w=800" },
  "frekans-zaman": { icon: Clock, image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?auto=format&fit=crop&q=80&w=800" },
  "hiz": { icon: FastForward, image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800" },
  "ivme-titresim": { icon: Activity, image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=800" },
  "optik": { icon: Lightbulb, image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800" },
  "sertlik": { icon: Gem, image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=800" },
  "viskozite": { icon: Droplet, image: "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?auto=format&fit=crop&q=80&w=800" },
  "yogunluk": { icon: Layers, image: "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?auto=format&fit=crop&q=80&w=800" },
  "kutle": { icon: Weight, image: "https://images.unsplash.com/photo-1584286595398-a59f21d313f5?auto=format&fit=crop&q=80&w=800" },
  "terazi": { icon: Scale, image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&q=80&w=800" },
};

export default function Services() {
  const { t, language } = useLanguage();
  const categories = t('services.categories') || [];
  const sortedCategories = [...categories].sort((a: any, b: any) => a.name.localeCompare(b.name, language));
  const [showAllComparisons, setShowAllComparisons] = useState(false);

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
          >
            {t('services.title')}
          </motion.h2>
          <div className="h-1 w-20 bg-blue-950 mx-auto rounded-full"></div>
        </div>

        <div className="flex justify-end mb-8">
          <label className="flex items-center gap-3 cursor-pointer group">
            <div className="relative flex items-center justify-center">
              <input 
                type="checkbox" 
                className="peer sr-only"
                checked={showAllComparisons}
                onChange={(e) => setShowAllComparisons(e.target.checked)}
              />
              <div className="w-6 h-6 rounded-md border-2 border-slate-300 peer-checked:border-blue-950 peer-checked:bg-blue-950 transition-all flex items-center justify-center">
                <svg className={`w-4 h-4 text-white transition-transform duration-300 ${showAllComparisons ? 'scale-100' : 'scale-0'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <span className="text-slate-700 font-medium group-hover:text-slate-900 transition-colors select-none">
              {t('services.viewAllComparisons')}
            </span>
          </label>
        </div>

        {!showAllComparisons ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sortedCategories.map((category: any, index: number) => {
              const asset = categoryAssets[category.id] || { icon: Activity, image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800" };
              const Icon = asset.icon;

              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.375 }}
                  className="relative overflow-hidden rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all group h-full flex flex-col"
                >
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-[0.45] transition-opacity duration-300"
                    style={{ backgroundImage: `url(${asset.image})` }}
                  />
                  
                  {/* Content */}
                  <div className="relative p-6 flex flex-col items-center text-center h-full bg-white/80 backdrop-blur-[2px]">
                    <div className="w-14 h-14 bg-blue-950/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-blue-950 transition-colors duration-300 shadow-sm">
                      <Icon className="w-7 h-7 text-blue-950 group-hover:text-white transition-colors duration-300" />
                    </div>
                    
                    <h3 className="text-lg font-bold text-slate-900 mb-6 flex-grow">
                      {category.name}
                    </h3>
                    
                    <Link
                      to={`/services/${category.id}`}
                      className="w-full inline-flex justify-center items-center px-4 py-2.5 text-sm font-semibold text-blue-950 bg-blue-950/10 hover:bg-blue-950/20 rounded-xl transition-colors gap-2 backdrop-blur-sm mt-auto"
                    >
                      {t('services.viewComparisonsBtn')}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedCategories.map((category: any, index: number) => {
              const asset = categoryAssets[category.id] || { icon: Activity };
              const Icon = asset.icon;

              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.375 }}
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-4 border-b border-slate-100 pb-4">
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
        )}
      </div>
    </section>
  );
}

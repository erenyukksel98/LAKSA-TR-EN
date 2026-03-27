import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <Link to="/" className="flex items-center gap-2 md:gap-4" onClick={() => window.scrollTo(0, 0)}>
            <div className="font-bold text-3xl tracking-tight flex items-center">
              <span className="text-red-600">LAK</span>
              <span className="text-blue-950">SA</span>
            </div>
            <div className="hidden lg:block h-10 w-px bg-gray-200"></div>
            <span className="hidden lg:block text-xs font-medium text-gray-500 max-w-[220px] leading-tight">
              Laboratuvarlar Arası Karşılaştırma ve Yeterlilik Testleri Sağlayıcısı
            </span>
          </Link>
          
          <div className="text-slate-500 text-sm">
            &copy; {currentYear} LAKSA. {t('footer.rights')}
          </div>
        </div>
      </div>
    </footer>
  );
}

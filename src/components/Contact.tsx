import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { Send, MapPin, Mail, Phone, User } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Contact() {
  const { t } = useLanguage();
  const categories = t('services.categories') || [];
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedComparison, setSelectedComparison] = useState("");
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const comparisonParam = params.get('comparison');
    if (comparisonParam) {
      setSelectedComparison(comparisonParam);
    }
  }, [location]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                {t('contact.title')}
              </h2>
              <div className="h-1 w-20 bg-blue-950 rounded-full"></div>
            </div>

            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-sm space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-blue-950/10 p-3 rounded-xl shrink-0">
                  <User className="w-6 h-6 text-blue-950" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">{t('contact.organizerLabel')}</h3>
                  <p className="text-slate-600">{t('contact.organizer')}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-950/10 p-3 rounded-xl shrink-0">
                  <MapPin className="w-6 h-6 text-blue-950" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">{t('contact.addressLabel')}</h3>
                  <p className="text-slate-600 whitespace-pre-line">{t('contact.address')}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-950/10 p-3 rounded-xl shrink-0">
                  <Mail className="w-6 h-6 text-blue-950" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">{t('contact.emailLabel')}</h3>
                  <a href={`mailto:${t('contact.emailValue')}`} className="text-blue-950 hover:underline">
                    {t('contact.emailValue')}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-950/10 p-3 rounded-xl shrink-0">
                  <Phone className="w-6 h-6 text-blue-950" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">{t('contact.phoneLabel')}</h3>
                  <a href={`tel:${t('contact.phoneValue').replace(/\s/g, '')}`} className="text-blue-950 hover:underline">
                    {t('contact.phoneValue')}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Application Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                {t('contact.applicationTitle')}
              </h2>
              <div className="h-1 w-20 bg-blue-950 rounded-full"></div>
            </div>

            <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {t('contact.successMsg')}
                  </h3>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                        {t('contact.name')}
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-950 focus:border-transparent outline-none transition-all bg-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="labName" className="block text-sm font-medium text-slate-700 mb-2">
                        {t('contact.labName')}
                      </label>
                      <input
                        type="text"
                        id="labName"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-950 focus:border-transparent outline-none transition-all bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                        {t('contact.email')}
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-950 focus:border-transparent outline-none transition-all bg-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                        {t('contact.phone')}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-950 focus:border-transparent outline-none transition-all bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="test" className="block text-sm font-medium text-slate-700 mb-2">
                      {t('contact.testSelection')}
                    </label>
                    <select
                      id="test"
                      required
                      value={selectedComparison}
                      onChange={(e) => setSelectedComparison(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-950 focus:border-transparent outline-none transition-all bg-white"
                    >
                      <option value="">{t('contact.selectTest')}</option>
                      {categories.map((category: any) => (
                        <optgroup key={category.id} label={category.name}>
                          {category.comparisons.map((comp: any) => (
                            <option key={comp.id} value={comp.id}>
                              {comp.name}
                            </option>
                          ))}
                        </optgroup>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                      {t('contact.message')}
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-950 focus:border-transparent outline-none transition-all bg-white resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-6 text-white bg-blue-950 hover:bg-blue-900 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    {t('contact.submit')}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

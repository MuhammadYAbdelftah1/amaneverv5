
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const FAQ: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [activeTab, setActiveTab] = useState<'general' | 'cardholders'>('general');
  const [openIndex, setOpenIndex] = useState<string | null>(null);
  const isRtl = i18n.language === 'ar';

  const sections = {
    general: t('faq.sections.general', { returnObjects: true }) as { q: string, a: string }[],
    cardholders: t('faq.sections.cardholders', { returnObjects: true }) as { title: string, items: { q: string, a: string }[] }[],
  };

  const currentGeneralFaqs = sections.general || [];
  const cardholderSections = sections.cardholders || [];

  return (
    <section id="faq" className="py-24 bg-[#f8fcfc]">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">{t('faq.title')}</h2>
          <p className="text-teal-600 font-bold max-w-2xl mx-auto">{t('faq.subtitle')}</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12 p-1.5 bg-teal-50 rounded-2xl md:rounded-3xl max-w-lg mx-auto border border-teal-100/50">
          <button
            onClick={() => { setActiveTab('general'); setOpenIndex(null); }}
            className={`flex-1 py-3 md:py-4 px-4 rounded-xl md:rounded-2xl font-black transition-all text-sm md:text-base ${activeTab === 'general' ? 'bg-[#4d8080] text-white shadow-xl shadow-teal-900/10' : 'text-gray-500 hover:text-teal-600'}`}
          >
            {t('faq.tabs.general')}
          </button>
          <button
            onClick={() => { setActiveTab('cardholders'); setOpenIndex(null); }}
            className={`flex-1 py-3 md:py-4 px-4 rounded-xl md:rounded-2xl font-black transition-all text-sm md:text-base ${activeTab === 'cardholders' ? 'bg-[#4d8080] text-white shadow-xl shadow-teal-900/10' : 'text-gray-500 hover:text-teal-600'}`}
          >
            {t('faq.tabs.cardholders')}
          </button>
        </div>

        {activeTab === 'cardholders' && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* Premier Card */}
              <div className="bg-gradient-to-br from-[#2a4e4e] to-[#4d8080] p-8 rounded-[3rem] border border-teal-400/20 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-3xl">🛡️</div>
                    <h3 className="text-2xl font-black text-white">{t('faq.cardDetails.premier.title')}</h3>
                  </div>
                  <p className="text-teal-50 font-black text-base leading-relaxed mb-8">
                    {t('faq.cardDetails.premier.intro')}
                  </p>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-teal-200 font-black text-base mb-3 flex items-center gap-2">
                        <Plus size={18} /> {t('faq.cardDetails.premier.servicesTitle')}
                      </h4>
                      <p className="text-teal-50/70 text-sm font-black mb-3">{t('faq.cardDetails.premier.servicesDesc')}</p>
                      <ul className="grid grid-cols-1 gap-3">
                        {(t('faq.cardDetails.premier.services', { returnObjects: true }) as string[]).map((s, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm font-black text-white">
                            <span className="text-teal-300 mt-1">•</span>
                            <span>{s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-teal-200 font-black text-base mb-3 flex items-center gap-2">
                        <Plus size={18} /> {t('faq.cardDetails.premier.benefitsTitle')}
                      </h4>
                      <ul className="grid grid-cols-1 gap-3">
                        {(t('faq.cardDetails.premier.benefits', { returnObjects: true }) as string[]).map((b, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm font-black text-teal-50">
                            <span className="text-teal-300 mt-1">✓</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* VIP Card */}
              <div className="bg-[#1a2d2d] p-8 rounded-[3rem] border border-teal-900/50 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-900/20 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-yellow-400/10 rounded-2xl flex items-center justify-center text-3xl">🌟</div>
                    <h3 className="text-2xl font-black text-yellow-400">{t('faq.cardDetails.vip.title')}</h3>
                  </div>
                  <p className="text-teal-50/90 font-black text-base leading-relaxed mb-8">
                    {t('faq.cardDetails.vip.intro')}
                  </p>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-yellow-400 font-black text-base mb-3 flex items-center gap-2">
                        <Plus size={18} /> {t('faq.cardDetails.vip.servicesTitle')}
                      </h4>
                      <p className="text-teal-50/70 text-sm font-black mb-3">{t('faq.cardDetails.vip.servicesDesc')}</p>
                      <ul className="grid grid-cols-1 gap-3">
                        {(t('faq.cardDetails.vip.services', { returnObjects: true }) as string[]).map((s, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm font-black text-teal-50/80">
                            <span className="text-yellow-400 mt-1">•</span>
                            <span>{s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-yellow-400 font-black text-base mb-3 flex items-center gap-2">
                        <Plus size={18} /> {t('faq.cardDetails.vip.benefitsTitle')}
                      </h4>
                      <ul className="grid grid-cols-1 gap-3">
                        {(t('faq.cardDetails.vip.benefits', { returnObjects: true }) as string[]).map((b, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm font-black text-teal-50/80">
                            <span className="text-yellow-400 mt-1">✪</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-12">
              {cardholderSections.map((section, sIdx) => (
                <div key={sIdx} className="relative">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="h-8 w-1.5 bg-[#4d8080] rounded-full"></div>
                    <h3 className="text-2xl font-black text-gray-900">{section.title}</h3>
                  </div>
                  <div className="grid grid-cols-1 gap-4">
                    {section.items.map((faq, idx) => {
                      const itemKey = `ch-${sIdx}-${idx}`;
                      return (
                        <div 
                          key={itemKey} 
                          className={`bg-white rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border transition-all duration-300 ${openIndex === itemKey ? 'border-[#4d8080] shadow-xl shadow-teal-900/5' : 'border-teal-50 shadow-sm'}`}
                        >
                          <button 
                            onClick={() => setOpenIndex(openIndex === itemKey ? null : itemKey)}
                            className={`w-full px-6 md:px-8 py-5 md:py-6 flex items-center justify-between gap-4 ${isRtl ? 'text-right' : 'text-left'}`}
                          >
                            <span className={`text-base md:text-lg font-black leading-tight ${openIndex === itemKey ? 'text-[#4d8080]' : 'text-gray-800'}`}>
                               {faq.q}
                            </span>
                            <div className={`shrink-0 transition-transform ${openIndex === itemKey ? 'rotate-180 text-[#4d8080]' : 'text-teal-300'}`}>
                              {openIndex === itemKey ? <Minus size={20} /> : <Plus size={20} />}
                            </div>
                          </button>
                          
                          <div className={`transition-all duration-500 ease-in-out ${openIndex === itemKey ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                            <div className="px-6 md:px-8 pb-6 md:pb-8 pt-2">
                              <div className="h-px w-full bg-teal-50 mb-6"></div>
                              <p className={`text-gray-500 font-bold leading-relaxed whitespace-pre-line ${isRtl ? 'text-right' : 'text-left'}`}>
                                {faq.a}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {activeTab === 'general' && (
          <div className="grid grid-cols-1 gap-4">
            {currentGeneralFaqs.map((faq, idx) => {
              const itemKey = `gen-${idx}`;
              return (
                <div 
                  key={itemKey} 
                  className={`bg-white rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border transition-all duration-300 ${openIndex === itemKey ? 'border-[#4d8080] shadow-xl shadow-teal-900/5' : 'border-teal-50 shadow-sm'}`}
                >
                  <button 
                    onClick={() => setOpenIndex(openIndex === itemKey ? null : itemKey)}
                    className={`w-full px-6 md:px-8 py-5 md:py-6 flex items-center justify-between gap-4 ${isRtl ? 'text-right' : 'text-left'}`}
                  >
                    <span className={`text-base md:text-lg font-black leading-tight ${openIndex === itemKey ? 'text-[#4d8080]' : 'text-gray-800'}`}>
                       {faq.q}
                    </span>
                    <div className={`shrink-0 transition-transform ${openIndex === itemKey ? 'rotate-180 text-[#4d8080]' : 'text-teal-300'}`}>
                      {openIndex === itemKey ? <Minus size={20} /> : <Plus size={20} />}
                    </div>
                  </button>
                  
                  <div className={`transition-all duration-500 ease-in-out ${openIndex === itemKey ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                    <div className="px-6 md:px-8 pb-6 md:pb-8 pt-2">
                      <div className="h-px w-full bg-teal-50 mb-6"></div>
                      <p className={`text-gray-500 font-bold leading-relaxed whitespace-pre-line ${isRtl ? 'text-right' : 'text-left'}`}>
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <div className="mt-24 text-center bg-white p-8 md:p-12 rounded-[3.5rem] border border-teal-50 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-[#4d8080] to-transparent opacity-20"></div>
          <p className="text-gray-500 font-bold mb-8 text-xl">{t('faq.moreQuestions')}</p>
          <a 
            href="https://wa.me/966920018041"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 px-12 md:px-16 py-5 md:py-6 bg-[#4d8080] text-white rounded-[2rem] font-black hover:bg-[#3d6666] transition-all shadow-2xl shadow-teal-900/20 hover:scale-105 active:scale-95 group"
          >
            <span className="text-2xl">💬</span>
            {t('faq.contactSupport')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;


import React, { useState } from 'react';
import { 
  ShieldCheck, FileCheck, Wallet, 
  Activity, Zap, ShoppingCart, Video, Search, X, Users, Globe,
  Sparkles, HeartPulse, Store, CreditCard, MessageCircle, ArrowRight
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { FALLBACK_IMAGE } from '../constants';
import ServiceDetailModal from './ServiceDetailModal';

interface FeaturesServicesProps {
  onOpenBookings?: () => void;
  onOpenService?: (id: string) => void;
}

const FeaturesServices: React.FC<FeaturesServicesProps> = ({ onOpenBookings, onOpenService }) => {
  const { t, i18n } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [isResetting, setIsResetting] = useState(false);
  const isRtl = i18n.language === 'ar';

  const features = [
    { 
      title: t('features.items.0.title'), 
      desc: t('features.items.0.desc'), 
      icon: Users, 
      color: 'bg-blue-50 text-blue-600',
      image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=800"
    },
    { 
      title: t('features.items.1.title'), 
      desc: t('features.items.1.desc'), 
      icon: Globe, 
      color: 'bg-teal-50 text-teal-600',
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800"
    },
    { 
      title: t('features.items.2.title'), 
      desc: t('features.items.2.desc'), 
      icon: Zap, 
      color: 'bg-amber-50 text-amber-600',
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800"
    },
    { 
      title: t('features.items.4.title'), 
      desc: t('features.items.4.desc'), 
      icon: Activity, 
      color: 'bg-cyan-50 text-cyan-600',
      image: "https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?auto=format&fit=crop&q=80&w=800"
    },
    { 
      title: t('features.items.5.title'), 
      desc: t('features.items.5.desc'), 
      icon: HeartPulse, 
      color: 'bg-pink-50 text-pink-600',
      image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=800"
    },
    { 
      title: t('features.items.3.title'), 
      desc: t('features.items.3.desc'), 
      icon: MessageCircle, 
      color: 'bg-rose-50 text-rose-600',
      image: "https://images.unsplash.com/photo-1516584281358-8686704944a9?auto=format&fit=crop&q=80&w=800"
    },
    { 
      title: t('features.items.6.title'), 
      desc: t('features.items.6.desc'), 
      icon: Wallet, 
      color: 'bg-indigo-50 text-indigo-600',
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800"
    },
    { 
      title: t('features.items.7.title'), 
      desc: t('features.items.7.desc'), 
      icon: CreditCard, 
      color: 'bg-purple-50 text-purple-600',
      image: "https://images.unsplash.com/photo-1634733988138-bf2c3a2a13fa?auto=format&fit=crop&q=80&w=800"
    },
    { 
      title: t('features.items.8.title'), 
      desc: t('features.items.8.desc'), 
      icon: ShieldCheck, 
      color: 'bg-emerald-50 text-emerald-600',
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800"
    },
  ];

  const services = [
    { 
      id: 'membership',
      name: t('features.services.0.name'), 
      desc: t('features.services.0.desc'), 
      icon: FileCheck,
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
      color: "from-teal-500/20 to-teal-600/20",
      tag: isRtl ? "الأكثر طلباً" : "Most Popular"
    },
    { 
      id: 'cashback',
      name: t('features.services.1.name'), 
      desc: t('features.services.1.desc'), 
      icon: Wallet,
      image: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?auto=format&fit=crop&q=80&w=800",
      color: "from-amber-500/20 to-amber-600/20",
      tag: "Cashback"
    },
    { 
      id: 'points',
      name: t('features.services.2.name'), 
      desc: t('features.services.2.desc'), 
      icon: CreditCard,
      image: "https://images.unsplash.com/photo-1634733988138-bf2c3a2a13fa?auto=format&fit=crop&q=80&w=800",
      color: "from-indigo-500/20 to-indigo-600/20",
      tag: isRtl ? "محفظة نقاط" : "Points Wallet"
    },
    { 
      id: 'bookings',
      name: t('features.services.3.name'), 
      desc: t('features.services.3.desc'), 
      icon: Video,
      image: "https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?auto=format&fit=crop&q=80&w=800",
      color: "from-blue-500/20 to-blue-600/20",
      tag: isRtl ? "فوري" : "Instant"
    },
    { 
      id: 'homeCare',
      name: t('features.services.4.name'), 
      desc: t('features.services.4.desc'), 
      icon: HeartPulse,
      image: "https://images.unsplash.com/photo-1581578731522-aa782767223e?auto=format&fit=crop&q=80&w=800",
      color: "from-rose-500/20 to-rose-600/20",
      tag: isRtl ? "رعاية منزلية" : "Home Care"
    },
    { 
      id: 'store',
      name: t('features.services.5.name'), 
      desc: t('features.services.5.desc'), 
      icon: Store,
      image: "https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&q=80&w=800",
      color: "from-emerald-500/20 to-emerald-600/20",
      tag: isRtl ? "عروض حصرية" : "Exclusive"
    },
    { 
      id: 'medical-network',
      name: t('features.services.6.name'), 
      desc: t('features.services.6.desc'), 
      icon: Activity,
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
      color: "from-teal-500/20 to-teal-600/20",
      tag: isRtl ? "شبكة طبية" : "Medical Network"
    },
    { 
      id: 'health-network',
      name: t('features.services.7.name'), 
      desc: t('features.services.7.desc'), 
      icon: Globe,
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
      color: "from-emerald-500/20 to-emerald-600/20",
      tag: isRtl ? "شبكة صحية" : "Wellness Network"
    },
  ];

  const filteredServices = services.filter(service => 
    service.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    service.desc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleClear = () => {
    setIsResetting(true);
    setSearchTerm('');
    setTimeout(() => setIsResetting(false), 500);
  };

  return (
    <section id="features" className="py-12 md:py-24 bg-slate-50/50 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Services Package Section */}
        <div id="services-package" className={`transition-all duration-300 mb-16 md:mb-24 ${isResetting ? 'opacity-50 scale-[0.99]' : ''}`}>
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-5xl font-black text-gray-900 mb-4 md:mb-6">{t('features.servicesTitle')}</h2>
            <p className="text-gray-500 font-bold max-w-2xl mx-auto mb-8 md:mb-12 text-sm md:text-lg px-4">{t('features.servicesSubtitle')}</p>

            <div className={`max-w-2xl mx-auto relative group px-2 md:px-0 transition-transform ${isResetting ? 'animate-[shake_0.5s_ease-in-out]' : ''}`}>
              <div className={`absolute inset-y-0 ${isRtl ? 'right-4 md:right-0 pr-4 md:pr-6' : 'left-4 md:left-0 pl-4 md:pl-6'} flex items-center pointer-events-none transition-colors duration-300 group-focus-within:text-[#4d8080]`}>
                <Search size={20} className={searchTerm ? 'text-[#4d8080]' : 'text-gray-400'} />
              </div>
              <input 
                type="text" 
                placeholder={t('features.searchPlaceholder')}
                className={`w-full ${isRtl ? 'pr-12 md:pr-16 pl-12 md:pl-16' : 'pl-12 md:pl-16 pr-12 md:pr-16'} py-4 md:py-6 bg-white rounded-2xl md:rounded-[2rem] shadow-lg shadow-teal-900/5 border-2 border-transparent focus:border-[#4d8080] outline-none font-bold text-gray-800 text-sm md:text-lg transition-all`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className={`absolute inset-y-0 ${isRtl ? 'left-4 md:left-0 pl-4 md:pl-6' : 'right-4 md:right-0 pr-4 md:pr-6'} flex items-center transition-all duration-300 ${searchTerm ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none'}`}>
                <button 
                  onClick={handleClear}
                  className="p-1.5 md:p-2 rounded-full hover:bg-red-50 text-gray-400 hover:text-red-500 transition-colors"
                >
                  <X size={20} className="md:w-6 md:h-6" />
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {filteredServices.map((s) => (
              <div 
                key={s.id} 
                id={`service-${s.id}`}
                className="group relative bg-white rounded-3xl md:rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col h-full"
              >
                {/* Image Header */}
                <div className="relative h-48 md:h-64 overflow-hidden">
                  <img 
                    src={s.image} 
                    alt={s.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = FALLBACK_IMAGE;
                      e.currentTarget.onerror = null;
                    }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity`}></div>
                  
                  {/* Tag */}
                  {s.tag && (
                    <div className={`absolute top-4 md:top-6 ${isRtl ? 'left-4 md:left-6' : 'right-4 md:right-6'} z-10`}>
                      <span className="px-3 md:px-4 py-1 md:py-1.5 rounded-full bg-[#4d8080] text-white text-[10px] md:text-xs font-black uppercase tracking-wider shadow-lg">
                        {s.tag}
                      </span>
                    </div>
                  )}

                  {/* Icon Badge */}
                  <div className={`absolute bottom-4 md:bottom-6 ${isRtl ? 'right-4 md:right-6' : 'left-4 md:left-6'} p-3 md:p-4 rounded-xl md:rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-xl group-hover:bg-[#4d8080] group-hover:border-[#4d8080] transition-all duration-300`}>
                    <s.icon size={24} className="md:w-7 md:h-7" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <h5 className={`text-xl md:text-2xl font-black text-gray-900 mb-3 md:mb-4 leading-tight ${isRtl ? 'text-right' : 'text-left'}`}>
                    {s.name}
                  </h5>
                  <p className={`text-gray-500 font-bold text-sm md:text-base leading-relaxed mb-6 md:mb-8 flex-grow ${isRtl ? 'text-right' : 'text-left'}`}>
                    {s.desc}
                  </p>
                  
                  <div className={`pt-4 md:pt-6 border-t border-slate-50 flex items-center justify-between`}>
                    <button 
                      onClick={() => onOpenService?.(s.id)}
                      className="text-[#4d8080] font-black text-xs md:text-sm hover:underline flex items-center gap-2 group/btn"
                    >
                      {isRtl ? 'اكتشف المزيد' : 'Discover More'}
                      <span className={`transition-transform duration-300 ${isRtl ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`}>
                        {isRtl ? '←' : '→'}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
            
            {filteredServices.length === 0 && (
              <div className="col-span-full py-20 text-center">
                <div className="mb-6 inline-flex p-6 rounded-full bg-slate-100 text-slate-400">
                  <Search size={48} />
                </div>
                <p className="font-black text-2xl text-gray-400 mb-4">{t('features.noResults')}</p>
                <button 
                  onClick={handleClear} 
                  className="text-[#4d8080] font-black text-lg hover:underline decoration-2 underline-offset-8"
                >
                  {t('features.showAll')}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Competitive Advantages Section */}
        <div className="text-center mb-12 md:mb-20">
          <p className="text-[#4d8080] font-black tracking-[0.2em] uppercase text-xs md:text-sm mb-4">{t('features.subtitle')}</p>
          <h2 className="text-3xl md:text-6xl font-black text-gray-900 mb-6 md:mb-8 leading-tight">{t('features.title')}</h2>
          <div className="h-1.5 md:h-2 w-16 md:w-24 bg-[#4d8080] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group overflow-hidden flex flex-col">
              {/* Feature Image */}
              <div className="h-40 overflow-hidden relative">
                <img 
                  src={f.image} 
                  alt={f.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className={`absolute bottom-4 ${isRtl ? 'right-4' : 'left-4'} w-12 h-12 ${f.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                  <f.icon size={24} />
                </div>
              </div>

              {/* Feature Content */}
              <div className="p-8 flex-grow">
                <h4 className="text-xl font-black text-gray-900 mb-4">{f.title}</h4>
                <p className="text-gray-500 font-bold text-sm leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
          
          {/* CTA Card at the end of features */}
          <div className="bg-[#4d8080] rounded-[2.5rem] shadow-xl shadow-teal-900/20 flex flex-col group hover:-translate-y-2 transition-all duration-500 overflow-hidden">
            <div className="h-40 bg-teal-800/50 flex items-center justify-center relative">
               <Zap size={64} className="text-white/20 absolute" />
               <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center text-white relative z-10">
                 <Zap size={40} />
               </div>
            </div>
            <div className="p-8 flex flex-col justify-between flex-grow">
              <h4 className="text-xl font-black text-white mb-4 leading-tight">
                {t('features.cta')}
              </h4>
              <button 
                onClick={() => onOpenBookings?.()}
                className="w-full py-4 bg-white text-[#4d8080] rounded-2xl font-black flex items-center justify-center gap-2 hover:bg-teal-50 transition-colors"
              >
                {isRtl ? 'حمل التطبيق الآن' : 'Download App Now'}
                <ArrowRight size={20} className={isRtl ? 'rotate-180' : ''} />
              </button>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(5px); }
            75% { transform: translateX(-5px); }
          }
        `}</style>
      </div>
    </section>
  );
};

export default FeaturesServices;


import React from 'react';
import { Tag, Share2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { FALLBACK_IMAGE } from '../constants';
import { ToastType } from './Toast';

interface DiscountsProps {
  notify?: (message: string, type: ToastType) => void;
}

const Discounts: React.FC<DiscountsProps> = ({ notify }) => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';

  const offers = [
    { 
      title: isRtl ? 'علاجات الأسنان' : 'Dental Treatments', 
      discount: '50%', 
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600' 
    },
    { 
      title: isRtl ? 'الجلدية والليزر' : 'Dermatology & Laser', 
      discount: '30%', 
      image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=600' 
    },
    { 
      title: isRtl ? 'الفحص الشامل' : 'Full Checkup', 
      discount: '40%', 
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=600' 
    },
    { 
      title: isRtl ? 'النظارات الطبية' : 'Medical Glasses', 
      discount: '25%', 
      image: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&q=80&w=600' 
    },
    { 
      title: isRtl ? 'الولادة الطبيعية' : 'Natural Delivery', 
      discount: '20%', 
      image: 'https://images.unsplash.com/photo-1531983412531-1f49a365ffed?auto=format&fit=crop&q=80&w=600' 
    },
    { 
      title: isRtl ? 'التحاليل المخبرية' : 'Lab Analysis', 
      discount: '60%', 
      image: 'https://images.unsplash.com/photo-1579152123263-9a5c9adad4f9?auto=format&fit=crop&q=80&w=600' 
    },
    { 
      title: isRtl ? 'العلاج الطبيعي' : 'Physical Therapy', 
      discount: '35%', 
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600' 
    },
    { 
      title: isRtl ? 'النوادي الرياضية' : 'Fitness Clubs', 
      discount: '15%', 
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600' 
    },
  ];

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = FALLBACK_IMAGE;
    e.currentTarget.onerror = null;
  };

  const handleShare = async (e: React.MouseEvent, title: string, discount: string) => {
    e.stopPropagation();
    e.preventDefault();
    
    const shareData = {
      title: `${isRtl ? 'عرض أمان إيفر' : 'Aman Ever Offer'}: ${title}`,
      text: isRtl 
        ? `احصل على خصم ${discount} على ${title} مع تطبيق أمان إيفر!` 
        : `Get ${discount} discount on ${title} with Aman Ever app!`,
      url: window.location.origin,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        notify?.(t('discounts.shareSuccess'), 'success');
      } else {
        await navigator.clipboard.writeText(`${shareData.text} ${shareData.url}`);
        notify?.(t('discounts.copySuccess'), 'success');
      }
    } catch (err) {
      if ((err as Error).name !== 'AbortError') {
        console.error('Error sharing:', err);
        notify?.(t('discounts.shareError'), 'error');
      }
    }
  };

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-10 md:mb-16 gap-6">
          <div className={isRtl ? 'text-right' : 'text-left'}>
            <h2 className="text-3xl md:text-6xl font-black text-gray-900 mb-4 md:mb-6 leading-tight">{t('discounts.title')}</h2>
            <p className="text-gray-500 font-medium text-lg md:text-xl">{t('discounts.subtitle')}</p>
          </div>
          <button className="w-full md:w-auto px-10 py-4 md:py-3 bg-teal-50 text-[#4d8080] rounded-2xl font-black hover:bg-[#4d8080] hover:text-white transition-all shadow-sm">
            {t('discounts.viewAll')}
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {offers.map((offer, idx) => (
            <div key={idx} className="relative group overflow-hidden rounded-[2rem] shadow-lg bg-slate-100 h-64 sm:h-72">
              <img 
                src={offer.image} 
                alt={offer.title} 
                onError={handleImageError}
                loading="lazy"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-90 group-hover:scale-110 transition-all duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              
              <button 
                onClick={(e) => handleShare(e, offer.title, offer.discount)}
                className={`absolute top-4 ${isRtl ? 'left-4' : 'right-4'} z-20 p-3 rounded-full bg-white/10 hover:bg-white/30 text-white backdrop-blur-md border border-white/20 transition-all opacity-0 group-hover:opacity-100 hover:scale-110 active:scale-90`}
                title="Share Offer"
              >
                <Share2 size={18} />
              </button>

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-6 flex flex-col justify-end">
                <div className={`flex items-center gap-2 mb-2 ${isRtl ? 'justify-start' : 'justify-start'}`}>
                  <span className="bg-[#4d8080] text-white px-3 py-1 rounded-full text-[10px] md:text-xs font-black flex items-center gap-1 shadow-lg">
                    <Tag size={12} /> {t('discounts.discount')} {offer.discount}
                  </span>
                </div>
                <h3 className={`text-xl md:text-2xl font-black text-white ${isRtl ? 'text-right' : 'text-left'}`}>{offer.title}</h3>
                <p className={`text-gray-300 text-xs md:text-sm mt-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 ${isRtl ? 'text-right' : 'text-left'}`}>
                  {t('discounts.cta')}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Discounts;

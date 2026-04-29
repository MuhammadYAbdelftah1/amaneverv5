
import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Hospital, LayoutGrid, HeartPulse, Sparkles, Pill, Activity } from 'lucide-react';

interface Suggestion {
  id: number;
  name: string;
  nameEn: string;
  image: string;
  icon: any;
  color: string;
}

const suggestions: Suggestion[] = [
  {
    id: 1,
    name: "مستشفيات كبرى",
    nameEn: "Major Hospitals",
    image: "https://images.unsplash.com/photo-1586773860418-d3b97998c637?auto=format&fit=crop&q=80&w=600",
    icon: Hospital,
    color: "bg-blue-500"
  },
  {
    id: 2,
    name: "مجمعات وعيادات تخصصية",
    nameEn: "Specialized Clinics",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d3fd0d?auto=format&fit=crop&q=80&w=600",
    icon: HeartPulse,
    color: "bg-teal-500"
  },
  {
    id: 3,
    name: "مراكز طبية تخصصية",
    nameEn: "Medical Centers",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600",
    icon: Activity,
    color: "bg-amber-500"
  },
  {
    id: 4,
    name: "مراكز صحية ورشاقة",
    nameEn: "Health & Wellness",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecee?auto=format&fit=crop&q=80&w=600",
    icon: Sparkles,
    color: "bg-pink-500"
  },
  {
    id: 5,
    name: "صيدليات معتمدة",
    nameEn: "Certified Pharmacies",
    image: "https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&q=80&w=600",
    icon: Pill,
    color: "bg-purple-500"
  },
  {
    id: 6,
    name: "مراكز العناية بالبشرة",
    nameEn: "Skincare Centers",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc2069?auto=format&fit=crop&q=80&w=600",
    icon: LayoutGrid,
    color: "bg-rose-500"
  }
];

const SuggestedResults: React.FC = () => {
  const { i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';

  return (
    <section id="suggested-results" className="py-24 bg-[#f8fcfc] overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className={`${isRtl ? 'text-right' : 'text-left'}`}>
            <motion.h2 
              initial={{ opacity: 0, x: isRtl ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-black text-[#003d3d] mb-4 leading-tight"
            >
              {isRtl ? 'نتائج مقترحة لك' : 'Suggested For You'}
            </motion.h2>
            <p className="text-gray-500 font-bold text-lg">
              {isRtl ? 'اكتشف أفضل الخيارات الطبية والصحية بالقرب منك' : 'Discover the best medical and health options near you'}
            </p>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <motion.div 
            animate={{ x: isRtl ? ["50%", "0%"] : ["0%", "-50%"] }}
            transition={{ 
                duration: 25, 
                ease: "linear", 
                repeat: Infinity 
            }}
            className="flex gap-8 w-max whitespace-nowrap"
          >
            {[...suggestions, ...suggestions, ...suggestions].map((item, idx) => (
              <div 
                key={`${item.id}-${idx}`}
                className="w-[280px] md:w-[320px] bg-white rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col group shrink-0 border border-teal-50"
              >
                {/* Image */}
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={isRtl ? item.name : item.nameEn}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  
                  {/* Floating Icon */}
                  <div className={`absolute bottom-4 ${isRtl ? 'right-4' : 'left-4'} w-12 h-12 ${item.color} rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                    <item.icon size={24} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 text-center">
                  <h3 className="text-xl font-black text-gray-900 group-hover:text-[#4d8080] transition-colors">
                    {isRtl ? item.name : item.nameEn}
                  </h3>
                  <div className="mt-4 flex items-center justify-center gap-1.5 text-gray-400 text-xs font-bold uppercase tracking-widest">
                    <span>{isRtl ? 'اكتشف الآن' : 'Discover Now'}</span>
                    <div className="w-1.5 h-1.5 bg-[#4d8080] rounded-full" />
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SuggestedResults;

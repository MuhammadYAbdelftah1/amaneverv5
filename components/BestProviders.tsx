
import React from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Star, ShieldCheck } from 'lucide-react';
import { FALLBACK_IMAGE } from '../constants';

const BestProviders: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';

  const providers = [
    {
      name: isRtl ? 'مستشفى الدكتور سليمان الحبيب' : 'Dr. Sulaiman Al Habib Hospital',
      type: isRtl ? 'مستشفى' : 'Hospital',
      rating: 4.9,
      location: isRtl ? 'الرياض - جدة' : 'Riyadh - Jeddah',
      image: 'https://images.unsplash.com/photo-1586773860418-d3b9a8ec8c7e?auto=format&fit=crop&q=80&w=600'
    },
    {
      name: isRtl ? 'عيادات ديرما' : 'Derma Clinics',
      type: isRtl ? 'مركز تجميل وليزر' : 'Beauty & Laser Center',
      rating: 4.8,
      location: isRtl ? 'الرياض' : 'Riyadh',
      image: 'https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&q=80&w=600'
    },
    {
      name: isRtl ? 'صيدليات النهدي' : 'Nahdi Pharmacies',
      type: isRtl ? 'صيدلية' : 'Pharmacy',
      rating: 4.7,
      location: isRtl ? 'جميع أنحاء المملكة' : 'All over KSA',
      image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbbb88?auto=format&fit=crop&q=80&w=600'
    },
    {
      name: isRtl ? 'مركز مغربي للعيون' : 'Magrabi Eye Center',
      type: isRtl ? 'مركز طبي تخصصي' : 'Specialized Medical Center',
      rating: 4.9,
      location: isRtl ? 'جدة - الرياض' : 'Jeddah - Riyadh',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600'
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-[#f8fcfc]">
      <div className="container mx-auto px-4">
        <div className={isRtl ? 'text-right' : 'text-left' + ' mb-10 md:mb-16'}>
          <h2 className="text-3xl md:text-6xl font-black text-gray-900 mb-4 md:mb-6 leading-tight">
            {isRtl ? 'أفضل مقدمي الخدمات' : 'Best Service Providers'}
          </h2>
          <p className="text-gray-500 font-medium text-lg md:text-xl">
            {isRtl ? 'مستشفيات – عيادات – مراكز طبية – صيدليات – مراكز تجميل' : 'Hospitals – Clinics – Medical Centers – Pharmacies – Beauty Centers'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {providers.map((provider, idx) => (
            <div key={idx} className="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={provider.image} 
                  alt={provider.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => { e.currentTarget.src = FALLBACK_IMAGE; }}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                  <Star size={14} className="text-yellow-500 fill-yellow-500" />
                  <span className="text-xs font-black text-gray-800">{provider.rating}</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#4d8080] bg-teal-50 px-2 py-1 rounded-md">
                    {provider.type}
                  </span>
                  <ShieldCheck size={14} className="text-blue-500" />
                </div>
                <h3 className={`text-lg font-black text-gray-900 mb-3 line-clamp-1 ${isRtl ? 'text-right' : 'text-left'}`}>
                  {provider.name}
                </h3>
                <div className={`flex items-center gap-2 text-gray-400 text-sm ${isRtl ? 'justify-start' : 'justify-start'}`}>
                  <MapPin size={14} />
                  <span>{provider.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestProviders;


import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

const PartnersCarousel: React.FC = () => {
  const { i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';

  // Real famous partners in KSA
  const partners = [
    { name: 'Dr. Sulaiman Al Habib', logo: 'https://www.hmg.com/Style%20Library/HMG/images/logo.png' },
    { name: 'Mouwasat Hospital', logo: 'https://www.mouwasat.com/Content/images/logo.png' },
    { name: 'Dallah Hospital', logo: 'https://www.dallah-hospital.com/Content/images/logo.png' },
    { name: 'Saudi German Health', logo: 'https://sghhealth.com/wp-content/uploads/2021/10/SGH-Logo.png' },
    { name: 'Nahdi Pharmacy', logo: 'https://www.nahdi.sa/static/version1712128456/frontend/Nahdi/nahdi_desktop/en_US/images/logo.svg' },
    { name: 'Al-Dawaa Pharmacy', logo: 'https://www.al-dawaa.com/skin/frontend/aldawaa/default/images/logo.png' },
    { name: 'Fitness Time', logo: 'https://www.fitnesstime.com.sa/Content/images/logo-en.png' },
    { name: 'Bupa Arabia', logo: 'https://www.bupa.com.sa/Content/images/logo.png' },
    { name: 'Magrabi Hospitals', logo: 'https://www.magrabi.com.sa/wp-content/themes/magrabi/images/logo.png' },
    { name: 'Fakeeh Care', logo: 'https://www.fakeeh.care/assets/images/logo.png' },
  ];

  // Duplicate for seamless loop
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="py-16 md:py-24 bg-slate-50/50 overflow-hidden border-y border-gray-100">
      <div className="container mx-auto px-4 mb-12 md:mb-16">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-5xl font-black text-[#4d8080] mb-4 tracking-tight">
            {isRtl ? 'شركاء النجاح' : 'Success Partners'}
          </h2>
          <div className="w-24 h-1.5 bg-[#4d8080] rounded-full mb-6"></div>
          <p className="text-[#4d8080]/80 font-bold text-lg md:text-xl max-w-3xl">
            {isRtl 
              ? 'نفخر بشراكتنا مع نخبة من أكبر المستشفيات والمراكز الطبية والصحية والتجميلية في المملكة' 
              : 'Proudly partnering with elite hospitals, medical, health, and cosmetic centers across the Kingdom'}
          </p>
        </div>
      </div>
      
      <div className="relative flex overflow-x-hidden">
        {/* Side Fades for Polished Look */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>

        <motion.div 
          className="flex gap-16 md:gap-32 items-center whitespace-nowrap py-8"
          animate={{
            x: isRtl ? [0, 1500] : [0, -1500],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 50, // Even slower for a more premium feel
              ease: "linear",
            },
          }}
        >
          {duplicatedPartners.map((partner, idx) => (
            <div key={idx} className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 opacity-40 hover:opacity-100 px-4">
              <img 
                src={partner.logo} 
                alt={partner.name}
                className="h-12 md:h-20 w-auto object-contain filter drop-shadow-sm"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerHTML = `<span class="text-[#4d8080] font-black text-2xl md:text-3xl">${partner.name}</span>`;
                }}
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersCarousel;

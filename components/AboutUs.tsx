
import React, { useRef } from 'react';
import { Target, Eye, Fingerprint, Shield, Heart, Lightbulb, Lock, Users, Video, Home, ShoppingCart, Wallet, Zap, Building2, TrendingUp, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { FALLBACK_IMAGE } from '../constants';
import { motion, useScroll, useTransform, Variants } from 'motion/react';

const AboutUs: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const services = t('about.visionSection.services', { returnObjects: true }) as string[];
  const values = t('about.identitySection.values', { returnObjects: true }) as string[];

  const serviceIcons = [Video, Home, ShoppingCart, Wallet, Zap, Building2];
  const valueIcons = [Heart, Shield, Lightbulb, Lock, Users];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="about" ref={containerRef} className="py-20 md:py-32 bg-[#F9FBFA] overflow-hidden relative selection:bg-teal-100 italic-serif">
      {/* Background Decorative Elements */}
      <motion.div style={{ y: y1 }} className="absolute top-20 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-[120px] -z-0 pointer-events-none" />
      <motion.div style={{ y: y2 }} className="absolute bottom-20 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] -z-0 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="flex flex-col gap-12 md:gap-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          
          {/* 1. Main Hero & Mission: Split Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div 
              className={`space-y-8 ${isRtl ? 'order-1 lg:order-2 text-right' : 'order-1 lg:order-1 text-left'}`}
              variants={itemVariants}
            >
              <div>
                <motion.div 
                  initial={{ opacity: 0, x: isRtl ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 border border-teal-100 text-[#4d8080] font-bold text-xs md:text-sm mb-6 tracking-widest uppercase"
                >
                  <Sparkles size={14} className="animate-pulse" />
                  {t('about.subtitle')}
                </motion.div>
                <h2 className="text-4xl md:text-7xl font-black text-gray-900 mb-8 leading-[1.1] tracking-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-teal-900 to-gray-800">
                    {t('about.title')}
                  </span>
                </h2>
                <div className="relative">
                  <div className={`absolute top-0 ${isRtl ? 'right-0' : 'left-0'} w-1.5 h-full bg-gradient-to-b from-[#4d8080] to-transparent rounded-full opacity-30`}></div>
                  <p className={`text-gray-600 font-bold text-xl md:text-2xl leading-relaxed max-w-2xl ${isRtl ? 'pr-8' : 'pl-8'}`}>
                    {t('about.desc')}
                  </p>
                </div>
              </div>

              <motion.div 
                className="p-8 md:p-10 rounded-[2rem] bg-[#1a2d2d] text-white shadow-2xl relative overflow-hidden group"
                whileHover={{ y: -5 }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-teal-500/20 transition-colors"></div>
                <div className="flex items-center gap-5 mb-6 relative">
                  <div className="w-14 h-14 bg-white/10 text-teal-400 rounded-2xl flex items-center justify-center shadow-lg transform -rotate-3 group-hover:rotate-0 transition-transform border border-white/10">
                    <Target size={28} />
                  </div>
                  <h4 className="text-2xl md:text-3xl font-black text-white">{t('about.mission.title')}</h4>
                </div>
                <p className="text-teal-50/70 font-bold text-lg leading-relaxed relative">
                  "{t('about.mission.desc')}"
                </p>
              </motion.div>
            </motion.div>

            <motion.div 
              className={`relative ${isRtl ? 'order-2 lg:order-1' : 'order-2 lg:order-2'}`}
              variants={itemVariants}
            >
              <div className="relative z-10 rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-2xl group border-8 border-white">
                <motion.img 
                  src="https://images.unsplash.com/photo-1576091160550-2173599211d0?auto=format&fit=crop&q=80&w=1200" 
                  alt="Aman Ever Visionary Health" 
                  className="w-full h-[500px] md:h-[750px] object-cover transition-transform duration-1000 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.src = FALLBACK_IMAGE;
                    e.currentTarget.onerror = null;
                  }}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* Visual Overlay elements */}
                <div className={`absolute bottom-10 ${isRtl ? 'left-10' : 'right-10'} flex flex-col items-center gap-2`}>
                   <div className="bg-white/95 backdrop-blur-xl p-8 rounded-[2rem] shadow-2xl border border-white/40 text-center min-w-[180px]">
                    <div className="text-[#4d8080] font-black text-4xl mb-1">2030</div>
                    <div className="text-gray-500 text-[10px] uppercase font-bold tracking-[0.2em]">{isRtl ? 'رؤية ممتدة' : 'Future Vision'}</div>
                  </div>
                </div>

                <div className="absolute top-10 left-10 p-6 bg-teal-500/90 backdrop-blur-md rounded-2xl text-white font-black text-lg shadow-xl flex items-center gap-3">
                  <TrendingUp size={24} />
                  <span>{isRtl ? 'ابتكار مستمر' : 'Continuous Innovation'}</span>
                </div>
              </div>
              
              {/* Backglow Blur */}
              <div className="absolute -inset-10 bg-teal-200/20 blur-[100px] -z-10 rounded-full"></div>
            </motion.div>
          </div>

          {/* 2. Vision & Services: Unified Dark Template */}
          <motion.div 
            className="bg-[#1a2d2d] rounded-[2rem] p-6 md:p-12 text-white relative overflow-hidden shadow-2xl"
            variants={itemVariants}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="flex flex-col gap-6 relative z-10">
              <div className={`max-w-4xl ${isRtl ? 'text-right' : 'text-left'}`}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shadow-sm text-teal-400 border border-white/10">
                    <Eye size={20} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black leading-tight">
                    {t('about.visionSection.subtitle')}
                  </h3>
                </div>
                <p className="text-teal-50/70 font-bold text-base md:text-lg leading-snug mb-6">
                  {t('about.visionSection.desc')}
                </p>

                <div className="text-center mb-6">
                  <h4 className="text-xl md:text-2xl font-black text-teal-400 inline-block relative">
                    {isRtl ? 'ومن أبرز خدمات المنصة' : 'Our Most Prominent Services'}
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-teal-400/20 rounded-full"></span>
                  </h4>
                </div>

                {/* Simplified Text List for Services */}
                <div className="space-y-3 md:space-y-4">
                  {services.map((service, idx) => {
                    const [title, desc] = service.split(':');
                    return (
                      <div key={idx} className="flex gap-3 items-start group">
                        <div className="shrink-0 w-2 h-2 rounded-full bg-teal-400 mt-2"></div>
                        <div className="space-y-0.5">
                          <h5 className="text-lg md:text-xl font-black text-white leading-tight">
                            {title}
                          </h5>
                          {desc && (
                            <p className="text-teal-50/60 font-medium text-sm md:text-base leading-snug">
                              {desc}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>

          {/* 3. Identity & Values: Unified Simple Template with ordered text list */}
          <motion.div 
            className="bg-[#1a2d2d] rounded-[2rem] p-6 md:p-12 text-white relative overflow-hidden shadow-2xl"
            variants={itemVariants}
          >
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl -ml-32 -mb-32"></div>
            <div className="flex flex-col gap-6 relative z-10">
              <div className={`max-w-4xl ${isRtl ? 'text-right' : 'text-left'}`}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shadow-sm text-teal-400 border border-white/10">
                    <Fingerprint size={20} />
                  </div>
                  <h4 className="text-2xl md:text-3xl font-black">
                    {t('about.identitySection.subtitle')}
                  </h4>
                </div>
                <p className="text-teal-50/70 font-bold text-base md:text-lg leading-snug italic mb-6">
                  {t('about.identitySection.desc')}
                </p>

                {/* Simplified Text List for Values */}
                <div className="space-y-4 border-t border-white/5 pt-6">
                  {values.map((val, idx) => {
                    const [title, description] = val.split(':');
                    return (
                      <div key={idx} className="flex gap-3 items-start group">
                        <span className="shrink-0 text-lg font-black text-teal-400/50">0{idx + 1}</span>
                        <div className="space-y-0.5">
                          <h5 className="text-lg md:text-xl font-black text-teal-400 leading-tight">
                            {title}
                          </h5>
                          {description && (
                            <p className="text-teal-50/60 font-medium text-sm md:text-base leading-snug">
                              {description}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;

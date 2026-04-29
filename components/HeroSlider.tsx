
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronRight, ChevronLeft, Zap } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { FALLBACK_IMAGE } from '../constants';

interface HeroSliderProps {
  onOpenBookings?: () => void;
}

const HeroSlider: React.FC<HeroSliderProps> = ({ onOpenBookings }) => {
  const { t, i18n } = useTranslation();
  const [current, setCurrent] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const slides = [
    {
      title: t('hero.slides.0.title'),
      description: t('hero.slides.0.description'),
      message: t('hero.slides.0.message'),
      cta: t('hero.slides.0.cta'),
      image: "https://images.unsplash.com/photo-1631217818202-90ef4a851c9c?auto=format&fit=crop&q=80&w=1920",
      color: "from-[#001f1f]/95 via-[#001f1f]/70 to-transparent",
      alt: "Modern medical facility"
    },
    {
      title: t('hero.slides.1.title'),
      description: t('hero.slides.1.description'),
      message: t('hero.slides.1.message'),
      cta: t('hero.slides.1.cta'),
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1920",
      color: "from-[#001f1f]/95 via-[#001f1f]/70 to-transparent",
      alt: "Digital healthcare solutions"
    },
    {
      title: t('hero.slides.2.title'),
      description: t('hero.slides.2.description'),
      message: t('hero.slides.2.message'),
      cta: t('hero.slides.2.cta'),
      image: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=1920",
      color: "from-[#001f1f]/95 via-[#001f1f]/70 to-transparent",
      alt: "Medical consultation"
    },
    {
      title: t('hero.slides.9.title'),
      description: t('hero.slides.9.description'),
      message: t('hero.slides.9.message'),
      cta: t('hero.slides.9.cta'),
      image: "https://images.unsplash.com/photo-1504813184591-01552a9d3d3a?auto=format&fit=crop&q=80&w=1920",
      color: "from-[#001f1f]/95 via-[#2a4e4e]/70 to-transparent",
      alt: "Aman Ever Premier Card"
    },
    {
      title: t('hero.slides.10.title'),
      description: t('hero.slides.10.description'),
      message: t('hero.slides.10.message'),
      cta: t('hero.slides.10.cta'),
      image: "https://images.unsplash.com/photo-1512678080530-77a0849a27f3?auto=format&fit=crop&q=80&w=1920",
      color: "from-[#001f1f]/95 via-[#1a2d2d]/70 to-transparent",
      alt: "Aman Ever VIP Card"
    },
    {
      title: t('hero.slides.4.title'),
      description: t('hero.slides.4.description'),
      message: t('hero.slides.4.message'),
      cta: t('hero.slides.4.cta'),
      image: "https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?auto=format&fit=crop&q=80&w=1920",
      color: "from-[#001f1f]/95 via-[#001f1f]/70 to-transparent",
      alt: "Cashback rewards"
    },
    {
      title: t('hero.slides.5.title'),
      description: t('hero.slides.5.description'),
      message: t('hero.slides.5.message'),
      cta: t('hero.slides.5.cta'),
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1920",
      color: "from-[#001f1f]/95 via-[#001f1f]/70 to-transparent",
      alt: "Aman points wallet"
    },
    {
      title: t('hero.slides.6.title'),
      description: t('hero.slides.6.description'),
      message: t('hero.slides.6.message'),
      cta: t('hero.slides.6.cta'),
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=1920",
      color: "from-[#001f1f]/95 via-[#001f1f]/70 to-transparent",
      alt: "Aman electronic store"
    },
    {
      title: t('hero.slides.7.title'),
      description: t('hero.slides.7.description'),
      message: t('hero.slides.7.message'),
      cta: t('hero.slides.7.cta'),
      image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=1920",
      color: "from-[#001f1f]/95 via-[#001f1f]/70 to-transparent",
      alt: "Home Care Services"
    },
    {
      title: t('hero.slides.8.title'),
      description: t('hero.slides.8.description'),
      message: t('hero.slides.8.message'),
      cta: t('hero.slides.8.cta'),
      image: "https://images.unsplash.com/photo-1559839734-2b71f1e3c7e0?auto=format&fit=crop&q=80&w=1920",
      color: "from-[#001f1f]/95 via-[#001f1f]/70 to-transparent",
      alt: "Home Visit Doctors"
    }
  ];

  const isRtl = i18n.language === 'ar';

  // Parallax effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const next = useCallback(() => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  // Keyboard navigation removed as requested
  
  // Auto-slide only if multiple slides
  useEffect(() => {
    if (slides.length > 1) {
      const timer = setInterval(next, 8000);
      return () => clearInterval(timer);
    }
  }, [next, slides.length]);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = FALLBACK_IMAGE;
    e.currentTarget.onerror = null;
  };

  return (
    <section 
      ref={sectionRef}
      id="top"
      className="relative h-[600px] sm:h-[800px] lg:h-[900px] w-full overflow-hidden bg-[#001f1f] group" 
      aria-roledescription="carousel"
      aria-label={t('hero.badge')}
    >
      {/* Slides */}
      <div className="relative w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 z-10"
          >
            <motion.div 
              style={{ y }}
              className="absolute inset-0 overflow-hidden"
            >
               <motion.img
                src={slides[current].image}
                alt={slides[current].alt}
                onError={handleImageError}
                loading="eager"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 10, ease: "linear" }}
                className="w-full h-full object-cover will-change-transform"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            <div className={`absolute inset-0 bg-gradient-to-r ${slides[current].color} flex items-center`}>
              <div className="container mx-auto px-4 sm:px-6 md:px-12 text-white">
                <div className={`max-w-4xl ${isRtl ? 'text-right' : 'text-left'}`}>
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className={`flex items-center gap-2 md:gap-3 mb-4 md:mb-6 ${isRtl ? 'justify-start' : 'justify-start'}`}
                  >
                    <span className="inline-flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1 md:py-1.5 bg-white/10 backdrop-blur-md rounded-full text-[10px] md:text-xs font-black border border-white/20">
                      <Zap size={12} className="text-yellow-400 md:w-[14px] md:h-[14px]" />
                      {t('hero.badge')}
                    </span>
                    <span className="text-teal-400 font-black text-[10px] md:text-sm tracking-widest uppercase">
                      {t('hero.slogan')}
                    </span>
                  </motion.div>
                  
                  <motion.h1 
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-3xl sm:text-6xl lg:text-7xl font-black mb-4 md:mb-8 leading-snug drop-shadow-2xl"
                  >
                    {slides[current].title}
                  </motion.h1>
                  
                  <motion.p 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="text-base sm:text-2xl mb-4 md:mb-6 text-teal-50/90 font-medium leading-relaxed max-w-3xl drop-shadow-lg"
                  >
                    {slides[current].description}
                  </motion.p>

                  <motion.p 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                    className="text-sm sm:text-xl mb-8 md:mb-12 text-white/70 font-bold italic border-r-4 border-[#4d8080] pr-4 whitespace-pre-line"
                  >
                    {slides[current].message}
                  </motion.p>
                  
                  <div className="space-y-6 md:space-y-8">
                    <motion.div 
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.8, duration: 0.6 }}
                      className="flex flex-col sm:flex-row gap-4 md:gap-5"
                    >
                      <button 
                        onClick={() => onOpenBookings?.()}
                        className="px-8 md:px-10 py-4 md:py-5 bg-[#4d8080] text-white rounded-xl md:rounded-2xl font-black text-base md:text-lg hover:bg-[#3d6666] transition-all shadow-xl hover:scale-105 active:scale-95 flex items-center justify-center gap-3 group/btn"
                      >
                        {slides[current].cta}
                        {isRtl ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
                      </button>
                    </motion.div>

                    <motion.div 
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 1, duration: 0.6 }}
                      className="flex flex-wrap gap-3 md:gap-4 items-center"
                    >
                      <a href="#" className="transition-transform hover:scale-105 active:scale-95">
                        <img 
                          src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                          alt="App Store" 
                          className="h-8 md:h-12 w-auto" 
                          referrerPolicy="no-referrer"
                        />
                      </a>
                      <a href="#" className="transition-transform hover:scale-105 active:scale-95">
                        <img 
                          src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                          alt="Google Play" 
                          className="h-8 md:h-12 w-auto" 
                          referrerPolicy="no-referrer"
                        />
                      </a>
                      <a href="#" className="transition-transform hover:scale-105 active:scale-95">
                        <div className="bg-black text-white px-2 md:px-3 h-8 md:h-12 rounded-[4px] md:rounded-[6px] flex items-center gap-1.5 md:gap-2 border border-white/10">
                          <img 
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Huawei_AppGallery_logo.svg/512px-Huawei_AppGallery_logo.svg.png" 
                            alt="AppGallery" 
                            className="h-4 md:h-6 w-auto" 
                            referrerPolicy="no-referrer"
                          />
                          <div className="flex flex-col leading-tight">
                            <span className="text-[5px] md:text-[7px] uppercase font-bold opacity-80">Explore it on</span>
                            <span className="text-[10px] md:text-[13px] font-black tracking-tight">AppGallery</span>
                          </div>
                        </div>
                      </a>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation indicators removed as requested */}

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default HeroSlider;

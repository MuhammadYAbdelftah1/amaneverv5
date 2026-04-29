
import React from 'react';
import { X, CheckCircle2, Smartphone, ShieldCheck, Clock, MessageSquare, Users, Star, Calendar } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'motion/react';

interface BookingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingsModal: React.FC<BookingsModalProps> = ({ isOpen, onClose }) => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';

  const features = t('bookingsModal.features', { returnObjects: true }) as Array<{ title: string, desc: string }>;
  
  const featureIcons = [
    Calendar,
    Clock,
    MessageSquare,
    ShieldCheck,
    Star,
    Smartphone
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-teal-950/40 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-4xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-20 p-2 rounded-full bg-gray-100 text-gray-500 hover:bg-red-50 hover:text-red-500 transition-all duration-300"
            >
              <X size={24} />
            </button>

            {/* Left Side: Visual/Branding with Live Image */}
            <div className="hidden md:flex md:w-2/5 relative overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000" 
                alt="Doctor using tablet" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2d4d4d]/90 via-[#2d4d4d]/40 to-transparent" />
              
              <div className="relative z-10 p-12 flex flex-col justify-between h-full">
                <div>
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8 border border-white/30">
                    <Calendar className="text-white w-10 h-10" />
                  </div>
                  <h2 className="text-4xl font-black text-white leading-tight mb-4 drop-shadow-lg">
                    {t('bookingsModal.title')}
                  </h2>
                  <div className="w-16 h-2 bg-teal-400 rounded-full shadow-lg" />
                </div>
                
                <div className="p-6 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-2xl">
                  <p className="text-white text-sm font-black leading-relaxed">
                    {t('bookingsModal.cta')}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side: Content */}
            <div className="flex-1 p-8 md:p-12 overflow-y-auto custom-scrollbar bg-white">
              <div className="md:hidden mb-8">
                <div className="relative h-48 rounded-3xl overflow-hidden mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600" 
                    alt="Doctor using tablet" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2d4d4d] to-transparent opacity-60" />
                </div>
                <h2 className="text-3xl font-black text-[#4d8080] mb-3">
                  {t('bookingsModal.title')}
                </h2>
                <div className="w-12 h-1.5 bg-teal-500 rounded-full" />
              </div>

              <div className="mb-10">
                <p className="text-gray-600 font-bold leading-relaxed text-lg">
                  {t('bookingsModal.description')}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                {features.map((feature, idx) => {
                  const Icon = featureIcons[idx] || CheckCircle2;
                  return (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: isRtl ? 20 : -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex gap-4 group"
                    >
                      <div className="shrink-0 w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center text-[#4d8080] group-hover:bg-[#4d8080] group-hover:text-white transition-all duration-300 shadow-sm">
                        <Icon size={24} />
                      </div>
                      <div>
                        <h4 className="font-black text-gray-800 mb-1 group-hover:text-[#4d8080] transition-colors">
                          {feature.title}
                        </h4>
                        <p className="text-xs text-gray-500 font-bold leading-relaxed">
                          {feature.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* CTA Section */}
              <div className="bg-gray-50 rounded-[2rem] p-8 border border-gray-100">
                <p className="text-center text-gray-700 font-black mb-6">
                  {t('bookingsModal.mainBtn')}
                </p>
                
                <div className="flex flex-wrap justify-center gap-4">
                  {/* App Store */}
                  <a href="#" className="transition-transform hover:scale-105 active:scale-95">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                      alt="App Store" 
                      className="h-10 md:h-14 w-auto" 
                      referrerPolicy="no-referrer"
                    />
                  </a>

                  {/* Google Play */}
                  <a href="#" className="transition-transform hover:scale-105 active:scale-95">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                      alt="Google Play" 
                      className="h-10 md:h-14 w-auto" 
                      referrerPolicy="no-referrer"
                    />
                  </a>

                  {/* AppGallery */}
                  <a href="#" className="transition-transform hover:scale-105 active:scale-95">
                    <div className="bg-black text-white px-3 md:px-4 h-10 md:h-14 rounded-[6px] md:rounded-[8px] flex items-center gap-2 md:gap-3 border border-white/10 shadow-lg">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Huawei_AppGallery_logo.svg/512px-Huawei_AppGallery_logo.svg.png" 
                        alt="AppGallery" 
                        className="h-5 md:h-7 w-auto" 
                        referrerPolicy="no-referrer"
                      />
                      <div className="flex flex-col leading-tight">
                        <span className="text-[7px] md:text-[9px] uppercase font-bold opacity-80">Explore it on</span>
                        <span className="text-[12px] md:text-[16px] font-black tracking-tight">AppGallery</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BookingsModal;


import React from 'react';
import { X, CheckCircle2, Monitor, Users, ShieldCheck, TrendingUp, Wallet, Activity, Smartphone } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'motion/react';
import { FALLBACK_IMAGE } from '../constants';

interface DoctorPlatformModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DoctorPlatformModal: React.FC<DoctorPlatformModalProps> = ({ isOpen, onClose }) => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = FALLBACK_IMAGE;
    e.currentTarget.onerror = null;
  };

  const patientFeatures = t('doctorPlatform.patientColumn.features', { returnObjects: true }) as Array<{ title: string, desc: string }>;
  const doctorFeatures = t('doctorPlatform.doctorColumn.features', { returnObjects: true }) as Array<{ title: string, desc: string }>;

  const patientIcons = [Activity, ShieldCheck, Smartphone, TrendingUp];
  const doctorIcons = [Monitor, Users, Wallet, Activity];

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
            className="absolute inset-0 bg-teal-950/60 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-6xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-50 p-2 rounded-full bg-gray-100 text-gray-500 hover:bg-red-50 hover:text-red-500 transition-all duration-300"
            >
              <X size={24} />
            </button>

            {/* Header Section */}
            <div className="p-8 md:p-12 pb-16 md:pb-24 bg-gradient-to-r from-[#4d8080] to-[#2d4d4d] text-white text-center relative">
              <div className="relative z-10">
                <h2 className="text-xl md:text-3xl font-black mb-4 leading-relaxed break-words">
                  {t('doctorPlatform.title')}
                </h2>
                <p className="text-teal-50 text-sm md:text-lg max-w-3xl mx-auto font-bold opacity-90 leading-loose pb-2">
                  {t('doctorPlatform.intro')}
                </p>
              </div>
              {/* Decorative background elements */}
              <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-400/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />
            </div>

            <div className="flex-1 overflow-y-auto custom-scrollbar p-8 md:p-12">
              <div className="flex flex-col lg:flex-row gap-12 items-start">
                
                {/* Patient Column */}
                <div className="flex-1 space-y-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center text-[#4d8080]">
                      <Users size={28} />
                    </div>
                    <h3 className="text-2xl font-black text-gray-800">
                      {t('doctorPlatform.patientColumn.title')}
                    </h3>
                  </div>
                  
                  <div className="grid gap-6">
                    {patientFeatures.map((feature, idx) => {
                      const Icon = patientIcons[idx] || CheckCircle2;
                      return (
                        <motion.div 
                          key={idx}
                          initial={{ opacity: 0, x: isRtl ? 20 : -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="p-6 rounded-3xl bg-gray-50 border border-gray-100 hover:border-teal-200 hover:bg-teal-50/30 transition-all duration-300 group"
                        >
                          <div className="flex gap-4">
                            <div className="shrink-0 w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#4d8080] shadow-sm group-hover:scale-110 transition-transform">
                              <Icon size={20} />
                            </div>
                            <div>
                              <h4 className="font-black text-gray-800 mb-1 group-hover:text-[#4d8080] transition-colors">
                                {feature.title}
                              </h4>
                              <p className="text-sm text-gray-500 font-bold leading-relaxed">
                                {feature.desc}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>

                  <div className="pt-6">
                    <p className="text-gray-700 font-black mb-6 text-center lg:text-start">
                      {t('doctorPlatform.patientCta')}
                    </p>
                    <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                      <a href="#" className="transition-transform hover:scale-105">
                        <img 
                          src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                          alt="App Store" 
                          className="h-10 w-auto" 
                          referrerPolicy="no-referrer" 
                          onError={handleImageError}
                        />
                      </a>
                      <a href="#" className="transition-transform hover:scale-105">
                        <img 
                          src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                          alt="Google Play" 
                          className="h-10 w-auto" 
                          referrerPolicy="no-referrer" 
                          onError={handleImageError}
                        />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Doctor Column */}
                <div className="flex-1 space-y-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center text-[#4d8080]">
                      <Monitor size={28} />
                    </div>
                    <h3 className="text-2xl font-black text-gray-800">
                      {t('doctorPlatform.doctorColumn.title')}
                    </h3>
                  </div>

                  <div className="grid gap-6">
                    {doctorFeatures.map((feature, idx) => {
                      const Icon = doctorIcons[idx] || CheckCircle2;
                      return (
                        <motion.div 
                          key={idx}
                          initial={{ opacity: 0, x: isRtl ? -20 : 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="p-6 rounded-3xl bg-gray-50 border border-gray-100 hover:border-teal-200 hover:bg-teal-50/30 transition-all duration-300 group"
                        >
                          <div className="flex gap-4">
                            <div className="shrink-0 w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#4d8080] shadow-sm group-hover:scale-110 transition-transform">
                              <Icon size={20} />
                            </div>
                            <div>
                              <h4 className="font-black text-gray-800 mb-1 group-hover:text-[#4d8080] transition-colors">
                                {feature.title}
                              </h4>
                              <p className="text-sm text-gray-500 font-bold leading-relaxed">
                                {feature.desc}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>

                  <div className="pt-6">
                    <button className="w-full py-4 px-8 bg-teal-600 hover:bg-teal-700 text-white font-black rounded-2xl shadow-lg shadow-teal-200 transition-all duration-300 transform hover:-translate-y-1 active:scale-95">
                      {t('doctorPlatform.doctorCta')}
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default DoctorPlatformModal;

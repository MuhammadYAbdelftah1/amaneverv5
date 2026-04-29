
import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Smartphone, Apple, PlayCircle, CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface ServiceDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceId: string;
}

const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({ isOpen, onClose, serviceId }) => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';

  if (!serviceId) return null;

  const modalData = {
    title: t(`features.modals.${serviceId}.title`),
    content: t(`features.modals.${serviceId}.content`),
    mechanism: t(`features.modals.${serviceId}.mechanism`, { returnObjects: true, defaultValue: [] }) as string[],
    buttons: t(`features.modals.${serviceId}.buttons`, { returnObjects: true, defaultValue: [] }) as string[],
  };

  // Split content by newlines to handle paragraphs
  const paragraphs = modalData.content.split('\n').filter(p => p.trim() !== '');

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
          />

          {/* Modal Content */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden pointer-events-auto relative flex flex-col max-h-[90vh]"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className={`absolute top-6 ${isRtl ? 'left-6' : 'right-6'} p-2 rounded-full bg-slate-100 text-gray-400 hover:text-gray-900 transition-colors z-20 shadow-sm`}
              >
                <X size={24} />
              </button>

              {/* Scrollable Area */}
              <div className="overflow-y-auto custom-scrollbar flex-grow">
                <div className="p-8 md:p-12">
                  {/* Header */}
                  <div className={`mb-8 ${isRtl ? 'text-right' : 'text-left'}`}>
                    <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-4 leading-tight">
                      {modalData.title}
                    </h3>
                    <div className={`h-1.5 w-16 bg-[#4d8080] rounded-full ${isRtl ? 'mr-0' : 'ml-0'}`}></div>
                  </div>

                  {/* Content Body */}
                  <div className={`space-y-6 mb-10 ${isRtl ? 'text-right' : 'text-left'}`}>
                    {paragraphs.map((p, idx) => (
                      <p key={idx} className="text-gray-600 font-bold text-base md:text-lg leading-relaxed">
                        {p}
                      </p>
                    ))}

                    {/* Mechanism / Steps */}
                    {Array.isArray(modalData.mechanism) && modalData.mechanism.length > 0 && (
                      <div className="space-y-4 mt-8">
                        {modalData.mechanism.map((step, idx) => (
                          <div key={idx} className="flex items-start gap-4 p-5 rounded-2xl bg-teal-50 border border-teal-100 group hover:bg-teal-100/50 transition-colors">
                            <div className="bg-[#4d8080] text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-black text-sm">
                              {idx + 1}
                            </div>
                            <p className="text-[#4d8080] font-black text-sm md:text-base pt-1">
                              {step}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Custom Action Buttons */}
                    {Array.isArray(modalData.buttons) && modalData.buttons.length > 0 && (
                      <div className="flex flex-col gap-4 mt-10">
                        {modalData.buttons.map((btn, idx) => (
                          <button 
                            key={idx}
                            className="w-full py-4 px-6 bg-[#4d8080] text-white rounded-2xl font-black text-lg shadow-lg shadow-teal-900/10 hover:bg-[#3d6666] transition-all flex items-center justify-center gap-3 group"
                          >
                            {btn}
                            {isRtl ? <ArrowLeft className="group-hover:-translate-x-1 transition-transform" /> : <ArrowRight className="group-hover:translate-x-1 transition-transform" />}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Footer CTA */}
                  <div className="pt-8 border-t border-slate-100">
                    <p className="text-center font-black text-gray-900 mb-6">
                      {t('features.modals.cta')}
                    </p>
                    
                    <div className="flex flex-wrap justify-center gap-4">
                      <button className="flex items-center gap-3 px-6 py-3 bg-black text-white rounded-2xl font-bold hover:scale-105 transition-transform">
                        <Apple size={24} />
                        <div className="text-left">
                          <div className="text-[10px] opacity-60 leading-none">Download on the</div>
                          <div className="text-sm leading-none">App Store</div>
                        </div>
                      </button>
                      <button className="flex items-center gap-3 px-6 py-3 bg-black text-white rounded-2xl font-bold hover:scale-105 transition-transform">
                        <PlayCircle size={24} />
                        <div className="text-left">
                          <div className="text-[10px] opacity-60 leading-none">GET IT ON</div>
                          <div className="text-sm leading-none">Google Play</div>
                        </div>
                      </button>
                      <button className="flex items-center gap-3 px-6 py-3 bg-[#4d8080] text-white rounded-2xl font-bold hover:scale-105 transition-transform">
                        <Smartphone size={24} />
                        <div className="text-left">
                          <div className="text-[10px] opacity-60 leading-none">Direct Link</div>
                          <div className="text-sm leading-none">App Gallery</div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e2e8f0;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #cbd5e1;
        }
      `}</style>
    </AnimatePresence>
  );
};

export default ServiceDetailModal;


import React from 'react';
import { PhoneCall } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'motion/react';

interface FloatingUrgentConsultationProps {
  onClick: () => void;
}

const FloatingUrgentConsultation: React.FC<FloatingUrgentConsultationProps> = ({ onClick }) => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';

  return (
    <div 
      className={`fixed bottom-8 z-[60] flex flex-col items-center gap-2 ${
        isRtl ? 'left-8' : 'right-8'
      }`}
    >
      <motion.button
        onClick={onClick}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="relative group"
      >
        {/* Pulsing Effect */}
        <div className="absolute inset-0 bg-[#4d8080] rounded-full animate-ping opacity-25 group-hover:opacity-40" />
        
        {/* Main Button */}
        <div className="relative w-16 h-16 md:w-20 md:h-20 bg-[#4d8080] border-4 border-white shadow-2xl rounded-full flex flex-col items-center justify-center text-white overflow-hidden group-hover:bg-[#3d6b6b] transition-colors">
          <PhoneCall size={24} className="mb-0.5" />
          <span className="text-[8px] md:text-[10px] font-black text-center leading-tight px-2">
            {t('floating.urgentConsultation')}
          </span>
        </div>

        {/* Tooltip on hover */}
        <div className={`absolute bottom-full mb-4 whitespace-nowrap bg-gray-900 text-white text-[10px] font-bold py-2 px-4 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl ${
          isRtl ? 'left-0 origin-bottom-left' : 'right-0 origin-bottom-right'
        }`}>
          {isRtl ? 'تحدث مع طبيب الآن فوراً' : 'Talk to a doctor now'}
          <div className={`absolute top-full border-4 border-transparent border-t-gray-900 ${
            isRtl ? 'left-6' : 'right-6'
          }`} />
        </div>
      </motion.button>
    </div>
  );
};

export default FloatingUrgentConsultation;

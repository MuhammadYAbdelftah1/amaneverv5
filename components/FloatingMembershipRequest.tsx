
import React from 'react';
import { UserPlus } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';

interface FloatingMembershipRequestProps {
  onClick: () => void;
}

const FloatingMembershipRequest: React.FC<FloatingMembershipRequestProps> = ({ onClick }) => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';

  return (
    <div 
      className={`fixed bottom-8 z-[60] flex flex-col items-center gap-2 ${
        isRtl ? 'right-8' : 'left-8'
      }`}
    >
      <motion.button
        onClick={onClick}
        initial={{ scale: 0, opacity: 0, x: isRtl ? 50 : -50 }}
        animate={{ scale: 1, opacity: 1, x: 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="relative group"
      >
        {/* Pulsing Effect */}
        <div className="absolute inset-0 bg-teal-500 rounded-full animate-ping opacity-20 group-hover:opacity-30" />
        
        {/* Main Button */}
        <div className="relative w-16 h-16 md:w-20 md:h-20 bg-white border-4 border-[#4d8080] shadow-2xl rounded-full flex flex-col items-center justify-center text-[#4d8080] overflow-hidden group-hover:bg-teal-50 transition-colors">
          <UserPlus size={24} className="mb-0.5" />
          <span className="text-[8px] md:text-[10px] font-black text-center leading-tight px-2">
            {t('floating.membershipRequest')}
          </span>
        </div>

        {/* Tooltip on hover */}
        <div className={`absolute bottom-full mb-4 whitespace-nowrap bg-gray-900 text-white text-[10px] font-bold py-2 px-4 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl ${
          isRtl ? 'right-0 origin-bottom-right' : 'left-0 origin-bottom-left'
        }`}>
          {isRtl ? 'اطلب عضويتك الإلكترونية الآن' : 'Request your electronic membership now'}
          <div className={`absolute top-full border-4 border-transparent border-t-gray-900 ${
            isRtl ? 'right-6' : 'left-6'
          }`} />
        </div>
      </motion.button>
    </div>
  );
};

export default FloatingMembershipRequest;

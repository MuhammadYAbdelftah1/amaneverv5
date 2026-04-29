
import React from 'react';
import { Calendar, CreditCard, Home } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface ActionsBarProps {
  onOpenBookings?: () => void;
}

const ActionsBar: React.FC<ActionsBarProps> = ({ onOpenBookings }) => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';

  const actions = [
    { 
      id: 'booking',
      title: t('actions.booking.title'), 
      icon: Calendar, 
      color: 'bg-[#4d8080]', 
      description: t('actions.booking.desc'),
      hoverBorder: 'hover:border-teal-200'
    },
    { 
      id: 'card',
      title: t('actions.card.title'), 
      icon: CreditCard, 
      color: 'bg-[#3d6666]', 
      description: t('actions.card.desc'),
      hoverBorder: 'hover:border-teal-300'
    },
    { 
      id: 'homeCare',
      title: t('actions.homeCare.title'), 
      icon: Home, 
      color: 'bg-[#1d3333]', 
      description: t('actions.homeCare.desc'),
      hoverBorder: 'hover:border-teal-400'
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
      {actions.map((action, idx) => (
        <div 
          key={idx} 
          onClick={() => {
            if (action.id === 'booking' && onOpenBookings) {
              onOpenBookings();
            }
          }}
          className={`
            relative overflow-hidden bg-white p-4 md:p-6 rounded-2xl md:rounded-[2rem] shadow-lg flex items-center gap-4 md:gap-5 
            group transition-all duration-500 ease-out cursor-pointer 
            border border-gray-100 ${action.hoverBorder}
            hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-900/5
          `}
        >
          <div className={`
            relative z-10 ${action.color} p-3 md:p-4 rounded-xl md:rounded-2xl text-white shadow-md 
            transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3
          `}>
            <action.icon size={22} className="md:w-[26px] md:h-[26px]" strokeWidth={2.5} />
          </div>

          <div className="relative z-10 flex-1">
            <h3 className="text-base md:text-lg font-black text-gray-800 mb-0.5 md:mb-1 group-hover:text-[#4d8080] transition-colors">
              {action.title}
            </h3>
            <p className="text-[10px] md:text-xs text-gray-400 font-bold leading-tight">
              {action.description}
            </p>
          </div>

          <div className={`relative z-10 opacity-0 group-hover:opacity-100 transition-all duration-500 text-[#4d8080] ${isRtl ? 'group-hover:translate-x-0 -translate-x-4' : 'group-hover:translate-x-0 translate-x-4'}`}>
             <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={`${isRtl ? '' : 'rotate-180'} md:w-5 md:h-5`}>
               <path d="m15 18-6-6 6-6"/>
             </svg>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ActionsBar;

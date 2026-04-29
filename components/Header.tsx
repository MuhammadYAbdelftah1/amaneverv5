
import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Logo from './Logo';
import AuthModal from './AuthModal';

interface HeaderProps {
  onOpenBookings?: () => void;
  onOpenDoctorPlatform?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenBookings, onOpenDoctorPlatform }) => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'ar' ? 'en' : 'ar';
    i18n.changeLanguage(newLang);
  };

  const navLinks = [
    { name: t('header.home'), id: 'top' },
    { name: t('header.about'), id: 'about' },
    { name: t('header.services'), id: 'services-package' },
    { name: t('header.features'), id: 'features' },
    { name: t('header.myBookings'), id: 'bookings' },
    { name: t('header.amanDoctor'), id: 'doctor' },
    { name: t('header.merchantPlatform'), id: 'merchant' },
    { name: t('header.blog'), id: 'blog' },
    { name: t('header.contact'), id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsOpen(false);

    if (targetId === 'bookings' && onOpenBookings) {
      onOpenBookings();
      return;
    }

    if (targetId === 'doctor' && onOpenDoctorPlatform) {
      onOpenDoctorPlatform();
      return;
    }

    if (targetId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
  
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-md py-2' 
          : 'bg-white/95 backdrop-blur-xl shadow-sm py-3 md:py-4'
      }`}
    >
      <div className="w-full mx-auto px-3 sm:px-4 md:px-6 lg:px-8 max-w-[1400px]">
        <div className="flex justify-between items-center gap-1 sm:gap-2 md:gap-3">
          {/* Logo Section */}
          <div 
            className="flex items-center gap-1.5 sm:gap-2 md:gap-2.5 group cursor-pointer flex-shrink-0"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className={`relative transition-all duration-500 transform group-hover:scale-105 flex-shrink-0 ${
              isScrolled ? 'w-10 h-10 sm:w-12 sm:h-12' : 'w-12 h-12 sm:w-14 sm:h-14'
            }`}>
              <Logo className="w-full h-full drop-shadow-xl" />
              <div className="absolute inset-0 bg-[#4d8080]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="flex flex-col min-w-0 max-w-[140px] sm:max-w-[180px] md:max-w-[220px] lg:max-w-[280px]">
              <span className={`font-black text-[#4d8080] tracking-tight leading-tight transition-all duration-500 ${
                isScrolled ? 'text-[10px] sm:text-xs md:text-sm' : 'text-xs sm:text-sm md:text-base'
              }`}
              style={{ 
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                wordBreak: 'break-word'
              }}>
                {t('header.brandAr')}
              </span>
              <span className={`font-bold text-gray-400 uppercase tracking-tight transition-all duration-500 truncate ${
                isScrolled ? 'text-[7px] sm:text-[8px]' : 'text-[8px] sm:text-[9px]'
              }`}>
                {t('header.brandEn')}
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-x-1 lg:gap-x-1.5 xl:gap-x-2 flex-shrink">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className="font-black transition-all duration-300 text-[9px] lg:text-[10px] xl:text-[11px] hover:text-[#4d8080] relative group whitespace-nowrap text-gray-700 px-0.5"
              >
                {link.name}
                <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-[#4d8080] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden xl:flex items-center gap-1.5 lg:gap-2 flex-shrink-0">
            {/* Language Switcher */}
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2 lg:px-2.5 py-1.5 rounded-lg font-bold text-[10px] lg:text-[11px] transition-all text-gray-600 hover:bg-gray-100 whitespace-nowrap"
            >
              <Globe size={14} className="lg:w-4 lg:h-4" />
              <span className="hidden lg:inline">{i18n.language === 'ar' ? 'EN' : 'ع'}</span>
            </button>

            <button className="px-2.5 lg:px-3 xl:px-4 py-1.5 rounded-full border border-[#4d8080] text-[#4d8080] font-bold text-[10px] lg:text-[11px] transition-all whitespace-nowrap hover:bg-teal-50"
              onClick={() => {
                setAuthMode('login');
                setAuthModalOpen(true);
              }}
            >
              {t('header.login')}
            </button>
            <button className="px-3 lg:px-4 xl:px-5 py-1.5 rounded-full bg-[#4d8080] text-white font-bold text-[10px] lg:text-[11px] hover:bg-[#3d6666] transition-all shadow-lg shadow-teal-900/20 whitespace-nowrap"
              onClick={() => {
                setAuthMode('signup');
                setAuthModalOpen(true);
              }}
            >
              {t('header.subscribe')}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="xl:hidden flex items-center gap-2 sm:gap-3">
            <button 
              onClick={toggleLanguage}
              className="p-2 sm:p-2.5 rounded-xl transition-colors text-gray-600 bg-gray-50 hover:bg-gray-100"
            >
              <Globe size={20} className="sm:w-5 sm:h-5" />
            </button>
            <button 
              className="p-2 sm:p-2.5 rounded-xl transition-colors text-gray-600 bg-gray-50 hover:bg-gray-100"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={20} className="sm:w-5 sm:h-5" /> : <Menu size={20} className="sm:w-5 sm:h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="xl:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-gray-100 p-6 shadow-2xl animate-in slide-in-from-top-4 duration-300">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className="text-gray-700 hover:text-[#4d8080] font-black py-3 text-center text-lg border-b border-gray-50 last:border-0"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-6 border-t border-gray-100 flex flex-col gap-4">
                <button className="w-full py-4 rounded-xl border-2 border-[#4d8080] text-[#4d8080] font-black hover:bg-teal-50 transition-colors"
                  onClick={() => {
                    setAuthMode('login');
                    setAuthModalOpen(true);
                    setIsOpen(false);
                  }}
                >
                  {t('header.login')}
                </button>
                <button className="w-full py-4 rounded-xl bg-[#4d8080] text-white font-black shadow-xl active:scale-95 transition-transform"
                  onClick={() => {
                    setAuthMode('signup');
                    setAuthModalOpen(true);
                    setIsOpen(false);
                  }}
                >
                  {t('header.subscribe')}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Auth Modal */}
      <AuthModal 
        isOpen={authModalOpen} 
        onClose={() => setAuthModalOpen(false)}
        initialMode={authMode}
      />
    </header>
  );
};

export default Header;

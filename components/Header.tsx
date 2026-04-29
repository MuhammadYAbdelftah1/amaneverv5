
import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Logo from './Logo';

interface HeaderProps {
  onOpenBookings?: () => void;
  onOpenDoctorPlatform?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenBookings, onOpenDoctorPlatform }) => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-md py-2' 
          : 'bg-transparent py-4 md:py-8'
      }`}
    >
      <div className="container mx-auto px-2 sm:px-4">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div 
            className="flex items-center gap-4 group cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className={`relative transition-all duration-500 transform group-hover:scale-105 ${
              isScrolled ? 'w-14 h-14 md:w-16 md:h-16' : 'w-20 h-20 md:w-28 md:h-28'
            }`}>
              <Logo className="w-full h-full drop-shadow-xl" />
              <div className="absolute inset-0 bg-[#4d8080]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="flex flex-col flex-shrink min-w-0">
              <span className={`font-black text-[#4d8080] tracking-tight leading-[1.1] transition-all duration-500 break-words ${
                isScrolled ? 'text-sm sm:text-lg md:text-2xl' : 'text-base sm:text-2xl md:text-3xl'
              }`}>
                {t('header.brandAr')}
              </span>
              <span className={`font-bold text-gray-400 uppercase tracking-tight transition-all duration-500 truncate ${
                isScrolled ? 'text-[7px] sm:text-[9px] md:text-[11px]' : 'text-[8px] sm:text-[10px] md:text-[14px]'
              }`}>
                {t('header.brandEn')}
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-x-2 2xl:gap-x-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`font-black transition-all duration-300 text-[10px] 2xl:text-[12px] hover:text-[#4d8080] relative group whitespace-nowrap ${
                  isScrolled ? 'text-gray-600' : 'text-gray-800' 
                }`}
                style={{ 
                  color: !isScrolled && link.id === 'top' ? 'white' : undefined,
                  textShadow: !isScrolled && link.id === 'top' ? '0 2px 4px rgba(0,0,0,0.3)' : 'none'
                }}
              >
                {link.name}
                <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-[#4d8080] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden xl:flex items-center gap-2 2xl:gap-4 shrink-0">
            {/* Language Switcher */}
            <button 
              onClick={toggleLanguage}
              className={`flex items-center gap-2 px-3 py-2 rounded-xl font-bold text-xs transition-all ${
                isScrolled 
                  ? 'text-gray-600 hover:bg-gray-100' 
                  : 'text-white hover:bg-white/10'
              }`}
            >
              <Globe size={16} />
              {i18n.language === 'ar' ? 'English' : 'العربية'}
            </button>

            <button className={`px-4 2xl:px-6 py-2 rounded-full border font-bold text-[11px] 2xl:text-sm transition-all whitespace-nowrap ${
              isScrolled 
                ? 'border-[#4d8080] text-[#4d8080] hover:bg-teal-50' 
                : 'border-white/40 text-white hover:bg-white/10 backdrop-blur-sm'
            }`}>
              {t('header.login')}
            </button>
            <button className="px-5 2xl:px-8 py-2 rounded-full bg-[#4d8080] text-white font-bold text-[11px] 2xl:text-sm hover:bg-[#3d6666] transition-all shadow-lg shadow-teal-900/20 whitespace-nowrap">
              {t('header.subscribe')}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="xl:hidden flex items-center gap-1 sm:gap-2">
            <button 
              onClick={toggleLanguage}
              className={`p-1.5 sm:p-2 rounded-xl transition-colors ${
                isScrolled ? 'text-gray-600 bg-gray-50' : 'text-white bg-white/20 backdrop-blur-md'
              }`}
            >
              <Globe size={18} className="sm:w-5 sm:h-5" />
            </button>
            <button 
              className={`p-1.5 sm:p-2 rounded-xl transition-colors ${
                isScrolled ? 'text-gray-600 bg-gray-50' : 'text-white bg-white/20 backdrop-blur-md'
              }`}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={18} className="sm:w-5 sm:h-5" /> : <Menu size={18} className="sm:w-5 sm:h-5" />}
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
                <button className="w-full py-4 rounded-xl border-2 border-[#4d8080] text-[#4d8080] font-black hover:bg-teal-50 transition-colors">
                  {t('header.login')}
                </button>
                <button className="w-full py-4 rounded-xl bg-[#4d8080] text-white font-black shadow-xl active:scale-95 transition-transform">
                  {t('header.subscribe')}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

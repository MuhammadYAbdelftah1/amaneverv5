
import React from 'react';
import { MapPin, Phone, Mail, FileText, MessageCircle, PhoneCall } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Logo from './Logo';
import { FALLBACK_IMAGE } from '../constants';

// --- Official Brand Icons (SVGs) ---

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.494h2.039L6.486 3.24H4.298l13.311 17.407z" />
  </svg>
);

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.03 5.91-.05 8.81-.47 9.91-15.86 7.85-15.86-2.07 0-5.08 5.63-8.99 10.16-6.02v4.2c-2.86-.54-5.26 1.83-5.26 4.67 0 2.93 2.5 5.25 5.56 5.09 2.59-.14 4.88-2.4 4.88-5.32l.02-14.72c1.54-.36 3.09-.68 4.63-.98.05-.72.08-1.45.08-2.18-.5-.14-1-.29-1.51-.43-.73-.2-1.46-.4-2.2-.6z"/>
  </svg>
);

const SnapchatIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12.005 0C5.755 0 3.28 3.795 3.28 6.13c0 .245.03.495.04.725-1.57.44-3.32 1.66-3.32 3.65 0 1.71 1.255 2.58 2.27 2.87-.04.41-.07.825-.07 1.215 0 3.275 1.66 4.955 4.255 4.955.515 0 1.015-.13 1.505-.395.075-.045.165-.035.245.015.93.585 1.95 1.005 3.045 1.23.175.035.34.075.5.125-.49 1.455-1.925 1.76-2.585 1.825-.335.03-.54.385-.41.69.175.405.775 1.295 3.255 1.295 2.475 0 3.08-1.19 3.255-1.295.13-.18.065-.58-.335-.69-.66-.185-2.095-.37-2.585-1.825.16-.045.33-.085.5-.125 1.095-.225 2.115-.645 3.045-1.23.08-.05.17-.06.245-.015.495.265.99.395 1.505.395 2.595 0 4.255-1.68 4.255-4.955 0-.39-.03-.805-.07-1.215 1.015-.29 2.27-1.16 2.27-2.87 0-1.99-1.75-3.21-3.32-3.65.01-.23.04-.48.04-.725C20.73 3.795 18.255 0 12.005 0z" />
  </svg>
);

// --- Real App Store Badges (Constructed with SVGs) ---

const AppleLogo = () => (
  <svg viewBox="0 0 384 512" fill="currentColor" className="w-8 h-8">
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-52.5-19.7-80.4-19.7C69.3 141.1 12.8 206 12.8 286.6c0 63.6 24.5 137.9 66.5 198.8 21 30.2 46.1 55.4 78 55.1 32-.3 40.5-22.6 84-22.6 42.1 0 52.6 22.4 83.2 22.4 29.5 0 59-29.3 79.7-59.2 12.8-18.4 27.5-44.7 27.8-45.7-1.8-.7-52.2-22.4-53.3-66.7zM238.3 106.8c19-23.7 30.5-56.3 26.6-88.8-29.5 1.5-62 18.4-80.3 39.8-15.6 17.8-29.5 47-24.8 77.2 33 2.5 61.2-13.4 78.5-28.2z" />
  </svg>
);

const GooglePlayLogo = () => (
  <svg viewBox="0 0 512 512" className="w-7 h-7">
    <path fill="#4285F4" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1z" />
    <path fill="#34A853" d="M47.6 46.1L47 40.4v230.6l4.2 2.9 253.3 126.9-60.1-60.1-196.8-294.6z" />
    <path fill="#FBBC05" d="M325.3 234.3l60.1 60.1 101.5 59.1c11.5 6.7 19.9-1.5 15.6-19.8L325.3 234.3z" />
    <path fill="#EA4335" d="M325.3 234.3L385.4 334 104.6 465.3l220.7-231z" />
  </svg>
);

const YouTubeIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const AppGalleryLogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm-1 4v2h2V6h-2zm0 4v8h2v-8h-2z" />
    <path d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 2a6 6 0 1 1 0 12 6 6 0 0 1 0-12zm-1 3h2v2h-2V9zm0 3h2v4h-2v-4z" opacity=".3" />
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v2h-2V7zm0 3h2v7h-2v-7z" />
  </svg>
);

const Footer: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';

  const socialLinks = [
    { 
      Icon: FacebookIcon, 
      href: 'https://www.facebook.com/amanever.sa', 
      label: 'Facebook', 
      tooltip: t('footer.social.facebook'), 
      className: 'bg-[#1877F2] text-white hover:bg-[#1864c9]'
    },
    { 
      Icon: InstagramIcon, 
      href: 'https://www.instagram.com/amanever.sa/', 
      label: 'Instagram', 
      tooltip: t('footer.social.instagram'), 
      className: 'bg-gradient-to-tr from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] text-white hover:opacity-90'
    },
    { 
      Icon: SnapchatIcon, 
      href: 'https://www.snapchat.com/@aman.ever1', 
      label: 'Snapchat', 
      tooltip: t('footer.social.snapchat'), 
      className: 'bg-[#FFFC00] text-black drop-shadow-sm hover:brightness-95' 
    },
    { 
      Icon: TikTokIcon, 
      href: 'https://www.tiktok.com/@amanever.sa', 
      label: 'TikTok', 
      tooltip: t('footer.social.tiktok'), 
      className: 'bg-black text-white hover:bg-gray-800'
    },
    { 
      Icon: XIcon, 
      href: 'https://x.com/amanever_sa', 
      label: 'X', 
      tooltip: t('footer.social.x'), 
      className: 'bg-black text-white hover:bg-gray-800'
    },
    { 
      Icon: LinkedInIcon, 
      href: 'https://www.linkedin.com/in/aman-ever-sa', 
      label: 'LinkedIn', 
      tooltip: t('footer.social.linkedin'), 
      className: 'bg-[#0077B5] text-white hover:bg-[#006396]'
    },
    { 
      Icon: YouTubeIcon, 
      href: 'https://www.youtube.com/@amanever_sa', 
      label: 'YouTube', 
      tooltip: t('footer.social.youtube'), 
      className: 'bg-[#FF0000] text-white hover:bg-[#cc0000]'
    },
  ];

  const quickLinks = [
    { name: t('footer.links.about'), href: '#about' },
    { name: t('footer.links.features'), href: '#features' },
    { name: t('footer.links.myBookings'), href: '#my-bookings' },
    { name: t('footer.links.services'), href: '#services-package' },
    { name: t('footer.links.homeCare'), href: '#service-homeCare' },
    { name: t('footer.links.amanCards'), href: '#service-membership' },
    { name: t('footer.links.network'), href: '#network' },
    { name: t('footer.links.doctorPlatform'), href: '#doctor-platform' },
    { name: t('footer.links.merchantPlatform'), href: '#merchant-platform' },
    { name: t('footer.links.privacy'), href: '#privacy' },
  ];

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = FALLBACK_IMAGE;
    e.currentTarget.onerror = null;
  };

  return (
    <footer id="contact" className="relative bg-white pt-12 md:pt-24 pb-8 md:pb-12 border-t border-gray-100 overflow-hidden">
      {/* Subtle Medical Background Image */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none grayscale contrast-125"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1628595351029-c2bf17511435?auto=format&fit=crop&q=80&w=1920")',
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-12 md:mb-20">
          {/* Brand & Socials */}
          <div className={`space-y-6 md:space-y-8 ${isRtl ? 'text-right' : 'text-left'}`}>
            <div className={`flex flex-col sm:flex-row items-center sm:items-start gap-4 md:gap-6 ${isRtl ? 'sm:flex-row' : 'sm:flex-row'}`}>
              <div className="w-20 h-20 md:w-32 md:h-32 shrink-0 overflow-hidden rounded-full shadow-lg border-2 border-teal-50 transform hover:scale-105 transition-transform duration-300">
                <Logo className="w-full h-full" />
              </div>
              <div className="flex flex-col justify-center text-center sm:text-start max-w-full">
                <span className="text-base md:text-lg font-black text-[#4d8080] tracking-tighter leading-tight mb-1">{t('header.brandAr')}</span>
                <span className="text-[7px] md:text-[9px] font-bold text-gray-400 uppercase tracking-tight opacity-80">{t('header.brandEn')}</span>
              </div>
            </div>
            <p className="text-gray-500 font-bold text-sm md:text-base leading-relaxed">
              {t('footer.desc')}
            </p>
            <div className={`flex items-center gap-3 text-blue-600 font-black text-xs md:text-sm bg-blue-50 px-3 md:px-4 py-2 rounded-xl w-fit border border-blue-100 ${isRtl ? 'flex-row' : 'flex-row'}`}>
              <FileText size={16} className="md:w-[18px] md:h-[18px]" />
              <span>{t('footer.cr')}</span>
            </div>
            
            <div className={`flex flex-wrap gap-2 md:gap-3 ${isRtl ? 'justify-start' : 'justify-start'}`}>
              {socialLinks.map(({ Icon, href, label, tooltip, className }, i) => (
                <div key={i} className="group relative">
                  {/* Tooltip */}
                  <span className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 px-3 py-2 bg-gray-900 text-white text-[10px] font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 whitespace-nowrap pointer-events-none z-50 shadow-xl border border-gray-700">
                    {tooltip}
                    <span className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-gray-900"></span>
                  </span>
                  
                  <a 
                    href={href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`w-10 h-10 md:w-11 md:h-11 rounded-xl md:rounded-2xl flex items-center justify-center transition-all shadow-md hover:shadow-xl hover:-translate-y-1 ${className}`}
                  >
                    <Icon className="w-5 h-5 md:w-6 md:h-6" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className={isRtl ? 'text-right' : 'text-left'}>
            <h4 className="text-lg md:text-xl font-black text-gray-800 mb-6 md:mb-8">{t('footer.quickLinks')}</h4>
            <ul className="space-y-4 md:space-y-5 font-bold text-gray-500 text-sm md:text-base">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className={`hover:text-[#4d8080] transition-colors flex items-center gap-2 group ${isRtl ? 'flex-row' : 'flex-row'}`}>
                    <div className="w-5 h-5 flex items-center justify-center bg-teal-50 text-[#4d8080] rounded-lg group-hover:bg-[#4d8080] group-hover:text-white transition-all">
                      <FileText size={12} />
                    </div>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className={isRtl ? 'text-right' : 'text-left'}>
            <h4 className="text-lg md:text-xl font-black text-gray-800 mb-6 md:mb-8">{t('footer.contactUs')}</h4>
            <ul className="space-y-5 md:space-y-6 font-bold text-gray-500 text-sm md:text-base">
              <li className={`flex items-start gap-3 md:gap-4 ${isRtl ? 'flex-row' : 'flex-row'}`}>
                <div className="p-2.5 md:p-3 bg-teal-50 text-[#4d8080] rounded-xl shadow-sm"><MapPin size={18} className="md:w-5 md:h-5" /></div>
                <span>{t('footer.address')}</span>
              </li>
              <li className={`flex items-center gap-3 md:gap-4 ${isRtl ? 'flex-row' : 'flex-row'}`}>
                <a href="tel:920018041" className={`flex items-center gap-3 md:gap-4 group w-full ${isRtl ? 'flex-row' : 'flex-row'}`}>
                  <div className="p-2.5 md:p-3 bg-teal-50 text-[#4d8080] rounded-xl shadow-sm group-hover:bg-[#4d8080] group-hover:text-white transition-all"><Phone size={18} className="md:w-5 md:h-5" /></div>
                  <div className={`flex flex-col ${isRtl ? 'items-start' : 'items-start'}`}>
                     <span className="text-[10px] md:text-xs text-gray-400">{t('footer.customerService')}</span>
                     <span dir="ltr" className="text-base md:text-lg group-hover:text-[#4d8080] transition-colors">920018041</span>
                  </div>
                </a>
              </li>
              <li className={`flex items-center gap-3 md:gap-4 ${isRtl ? 'flex-row' : 'flex-row'}`}>
                <a href="https://wa.me/966544608220" target="_blank" rel="noopener noreferrer" className={`flex items-center gap-3 md:gap-4 group w-full ${isRtl ? 'flex-row' : 'flex-row'}`}>
                  <div className="p-2.5 md:p-3 bg-green-50 text-green-600 rounded-xl shadow-sm group-hover:bg-green-600 group-hover:text-white transition-all"><MessageCircle size={18} className="md:w-5 md:h-5" /></div>
                  <div className={`flex flex-col ${isRtl ? 'items-start' : 'items-start'}`}>
                     <span className="text-[10px] md:text-xs text-gray-400">{t('footer.whatsapp')}</span>
                     <span dir="ltr" className="text-base md:text-lg group-hover:text-green-600 transition-colors">0544608220</span>
                  </div>
                </a>
              </li>
              <li className={`flex items-center gap-3 md:gap-4 ${isRtl ? 'flex-row' : 'flex-row'}`}>
                <a href="tel:0126142206" className={`flex items-center gap-3 md:gap-4 group w-full ${isRtl ? 'flex-row' : 'flex-row'}`}>
                  <div className="p-2.5 md:p-3 bg-blue-50 text-blue-600 rounded-xl shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all"><PhoneCall size={18} className="md:w-5 md:h-5" /></div>
                  <div className={`flex flex-col ${isRtl ? 'items-start' : 'items-start'}`}>
                     <span className="text-[10px] md:text-xs text-gray-400">{t('footer.landline')}</span>
                     <span dir="ltr" className="text-base md:text-lg group-hover:text-blue-600 transition-colors">0126142206</span>
                  </div>
                </a>
              </li>
              <li className={`flex items-center gap-3 md:gap-4 ${isRtl ? 'flex-row' : 'flex-row'}`}>
                <a href="mailto:info@amanever.com" className={`flex items-center gap-3 md:gap-4 group w-full ${isRtl ? 'flex-row' : 'flex-row'}`}>
                  <div className="p-2.5 md:p-3 bg-teal-50 text-[#4d8080] rounded-xl shadow-sm group-hover:bg-[#4d8080] group-hover:text-white transition-all"><Mail size={18} className="md:w-5 md:h-5" /></div>
                  <span className="group-hover:text-[#4d8080] transition-colors">info@amanever.com</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Download Buttons - Realistic Style */}
          {/* Download Buttons - Matching Hero Section */}
          <div className={isRtl ? 'text-right' : 'text-left'}>
            <h4 className="text-lg md:text-xl font-black text-gray-800 mb-6 md:mb-8">{t('footer.downloadApp')}</h4>
            <div className="flex flex-col gap-4">
              <a href="#" className="transition-transform hover:scale-105 active:scale-95 w-fit">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                  alt="App Store" 
                  className="h-10 md:h-12 w-auto" 
                  referrerPolicy="no-referrer"
                  onError={handleImageError}
                />
              </a>
              <a href="#" className="transition-transform hover:scale-105 active:scale-95 w-fit">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                  alt="Google Play" 
                  className="h-10 md:h-12 w-auto" 
                  referrerPolicy="no-referrer"
                  onError={handleImageError}
                />
              </a>
              <a href="#" className="transition-transform hover:scale-105 active:scale-95 w-fit">
                <div className="bg-black text-white px-3 h-10 md:h-12 rounded-[6px] flex items-center gap-2 border border-white/10">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Huawei_AppGallery_logo.svg/512px-Huawei_AppGallery_logo.svg.png" 
                    alt="AppGallery" 
                    className="h-5 md:h-6 w-auto" 
                    referrerPolicy="no-referrer"
                    onError={handleImageError}
                  />
                  <div className="flex flex-col leading-tight">
                    <span className="text-[7px] md:text-[8px] uppercase font-bold opacity-80">Explore it on</span>
                    <span className="text-[12px] md:text-[14px] font-black tracking-tight">AppGallery</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className={`border-t border-gray-100 pt-8 md:pt-10 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 text-center ${isRtl ? 'md:text-right' : 'md:text-left'}`}>
          <p className="text-gray-400 font-bold text-xs md:text-sm">{t('footer.rights', { year: new Date().getFullYear() })}</p>
          <div className="flex gap-6 md:gap-8 text-xs md:text-sm text-gray-400 font-bold">
            <a href="#" className="hover:text-[#4d8080] transition-colors">{t('footer.terms')}</a>
            <a href="#" className="hover:text-[#4d8080] transition-colors">{t('footer.dataPolicy')}</a>
            <a href="#" className="hover:text-[#4d8080] transition-colors">{t('footer.privacy')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

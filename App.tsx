
import React, { useState, useCallback, useEffect, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import FeaturesServices from './components/FeaturesServices';
import AboutUs from './components/AboutUs';
import PartnersCarousel from './components/PartnersCarousel';
import MedicalNetwork from './components/MedicalNetwork';
import Discounts from './components/Discounts';
import BestProviders from './components/BestProviders';
import NearbyProviders from './components/NearbyProviders';
import NearbyServices from './components/NearbyServices';
import SuggestedResults from './components/SuggestedResults';
import AvailableDoctors from './components/AvailableDoctors';
import FAQ from './components/FAQ';
import Blog from './components/Blog';
import FloatingUrgentConsultation from './components/FloatingUrgentConsultation';
import FloatingMembershipRequest from './components/FloatingMembershipRequest';
import Footer from './components/Footer';
import BookingsModal from './components/BookingsModal';
import DoctorPlatformModal from './components/DoctorPlatformModal';
import ErrorBoundary from './components/ErrorBoundary';
import Toast, { ToastType } from './components/Toast';

import ServiceDetailModal from './components/ServiceDetailModal';

const AppContent: React.FC = () => {
  const { i18n } = useTranslation();
  const [notification, setNotification] = useState<{ message: string; type: ToastType } | null>(null);
  const [isBookingsModalOpen, setIsBookingsModalOpen] = useState(false);
  const [isDoctorPlatformModalOpen, setIsDoctorPlatformModalOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  useEffect(() => {
    const dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dir = dir;
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  const notify = useCallback((message: string, type: ToastType = 'info') => {
    setNotification({ message, type });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fcfc]">
      <Header 
        onOpenBookings={() => setIsBookingsModalOpen(true)} 
        onOpenDoctorPlatform={() => setIsDoctorPlatformModalOpen(true)}
      />
      <main className="flex-grow">
        <ErrorBoundary>
          <HeroSlider onOpenBookings={() => setIsBookingsModalOpen(true)} />
        </ErrorBoundary>

        <ErrorBoundary>
          <FeaturesServices 
            onOpenBookings={() => setIsBookingsModalOpen(true)} 
            onOpenService={setSelectedServiceId}
          />
        </ErrorBoundary>

        <ErrorBoundary>
          <PartnersCarousel />
        </ErrorBoundary>

        <ErrorBoundary>
          <AboutUs />
        </ErrorBoundary>

        <ErrorBoundary>
          <MedicalNetwork />
        </ErrorBoundary>

        <ErrorBoundary>
          <SuggestedResults />
        </ErrorBoundary>

        <ErrorBoundary>
          <AvailableDoctors />
        </ErrorBoundary>

        <ErrorBoundary>
          <Discounts notify={notify} />
        </ErrorBoundary>

        <ErrorBoundary>
          <BestProviders />
        </ErrorBoundary>

        <ErrorBoundary>
          <Blog />
        </ErrorBoundary>

        <ErrorBoundary>
          <NearbyProviders />
        </ErrorBoundary>

        <ErrorBoundary>
          <NearbyServices notify={notify} />
        </ErrorBoundary>

        <ErrorBoundary>
          <FAQ />
        </ErrorBoundary>
      </main>
      <Footer />

      <FloatingUrgentConsultation onClick={() => setIsBookingsModalOpen(true)} />
      <FloatingMembershipRequest onClick={() => setSelectedServiceId('membership')} />

      <BookingsModal 
        isOpen={isBookingsModalOpen} 
        onClose={() => setIsBookingsModalOpen(false)} 
      />

      <DoctorPlatformModal
        isOpen={isDoctorPlatformModalOpen}
        onClose={() => setIsDoctorPlatformModalOpen(false)}
      />

      <ServiceDetailModal 
        isOpen={!!selectedServiceId}
        onClose={() => setSelectedServiceId(null)}
        serviceId={selectedServiceId || ''}
      />


      {notification && (
        <Toast
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <AppContent />
    </Suspense>
  );
};

export default App;

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import SectionHeader from './components/SectionHeader';
import DoctorCard from './components/DoctorCard';
import ClinicCard from './components/ClinicCard';
import ProductCard from './components/ProductCard';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import DoctorProfile from './components/DoctorProfile';
import ClinicProfile from './components/ClinicProfile';
import DoctorRegistration from './components/DoctorRegistration';
import ClinicRegistration from './components/ClinicRegistration';
import DoctorDashboard from './components/DoctorDashboard';
import DoctorListing from './components/DoctorListing';
import AdminPanel from './components/AdminPanel';
import { CLINICS, DOCTORS, PRODUCTS } from './constants';

type ViewState = 'home' | 'doctor-profile' | 'clinic-profile' | 'doctor-registration' | 'clinic-registration' | 'doctor-dashboard' | 'doctor-listing' | 'admin-panel';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');

  // Helper to scroll to top when changing views
  const changeView = (view: ViewState) => {
    setCurrentView(view);
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex min-h-screen flex-col font-sans">
      {/* Hide main Navbar when in Registration, Dashboard or Admin mode */}
      {currentView !== 'doctor-registration' && currentView !== 'clinic-registration' && currentView !== 'doctor-dashboard' && currentView !== 'admin-panel' && (
        <Navbar 
          onNavigateHome={() => changeView('home')} 
          onNavigateRegister={() => changeView('doctor-registration')}
          onNavigateClinicRegister={() => changeView('clinic-registration')}
          onNavigateDoctors={() => changeView('doctor-listing')}
          onNavigateAdmin={() => changeView('admin-panel')}
        />
      )}
      
      <main className="flex-1">
        {currentView === 'home' ? (
          <div className="animate-in fade-in duration-300">
            <Hero />
            <Features />

            {/* Doctors Section */}
            <section className="py-8 md:py-10 px-4 md:px-6 lg:px-16 bg-white">
              <div className="max-w-7xl mx-auto">
                <SectionHeader 
                  title="Bác sĩ Chuyên khoa"
                  subtitle="Đội ngũ y bác sĩ đầu ngành"
                  linkText="Xem tất cả"
                  color="blue"
                  onClick={() => changeView('doctor-listing')}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {DOCTORS.map((doctor) => (
                    <DoctorCard 
                      key={doctor.id} 
                      doctor={doctor} 
                      onClick={() => changeView('doctor-profile')}
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* Clinics Section */}
            <section className="py-8 md:py-10 px-4 md:px-6 lg:px-16 bg-slate-50">
              <div className="max-w-7xl mx-auto">
                <SectionHeader 
                  title="Cơ sở Thẩm mỹ"
                  subtitle="Phòng khám, bệnh viện đạt chuẩn"
                  linkText="Xem tất cả"
                  color="blue"
                />
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {CLINICS.map((clinic) => (
                    <ClinicCard 
                      key={clinic.id} 
                      clinic={clinic} 
                      onClick={() => changeView('clinic-profile')}
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* Products Section */}
            <section className="py-8 md:py-10 px-4 md:px-6 lg:px-16 bg-white">
              <div className="max-w-7xl mx-auto">
                <SectionHeader 
                  title="Trang Thiết Bị Y Tế"
                  subtitle="Công nghệ cao, chính hãng"
                  linkText="Cửa hàng"
                  color="gold"
                />
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                  {PRODUCTS.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            </section>

            <Newsletter />
          </div>
        ) : currentView === 'doctor-listing' ? (
          <DoctorListing 
            onBack={() => changeView('home')} 
            onViewProfile={() => changeView('doctor-profile')}
          />
        ) : currentView === 'doctor-profile' ? (
          <DoctorProfile onBack={() => changeView('doctor-listing')} />
        ) : currentView === 'clinic-profile' ? (
          <ClinicProfile 
            onBack={() => changeView('home')} 
            onViewDoctors={() => changeView('doctor-listing')}
          />
        ) : currentView === 'doctor-registration' ? (
          <DoctorRegistration 
            onBack={() => changeView('home')} 
            onSuccess={() => changeView('doctor-dashboard')}
          />
        ) : currentView === 'clinic-registration' ? (
          <ClinicRegistration 
            onBack={() => changeView('home')} 
          />
        ) : currentView === 'admin-panel' ? (
          <AdminPanel onLogout={() => changeView('home')} />
        ) : (
          <DoctorDashboard onLogout={() => changeView('home')} />
        )}
      </main>

      {/* Hide main Footer when in Registration, Dashboard or Admin mode */}
      {currentView !== 'doctor-registration' && currentView !== 'clinic-registration' && currentView !== 'doctor-dashboard' && currentView !== 'admin-panel' && <Footer />}
    </div>
  );
};

export default App;
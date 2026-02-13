import React, { useState } from 'react';

interface NavbarProps {
  onNavigateHome?: () => void;
  onNavigateRegister?: () => void;
  onNavigateClinicRegister?: () => void;
  onNavigateDoctors?: () => void;
  onNavigateAdmin?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigateHome, onNavigateRegister, onNavigateClinicRegister, onNavigateDoctors, onNavigateAdmin }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigateHome) onNavigateHome();
  };

  const handleDoctorsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    if (onNavigateDoctors) onNavigateDoctors();
  };

  const handleRegisterClick = () => {
    setIsMobileMenuOpen(false);
    if (onNavigateRegister) onNavigateRegister();
  };

  const handleClinicRegisterClick = () => {
    setIsMobileMenuOpen(false);
    if (onNavigateClinicRegister) onNavigateClinicRegister();
  };

  const handleAdminClick = () => {
    setIsMobileMenuOpen(false);
    if (onNavigateAdmin) onNavigateAdmin();
  };

  return (
    <>
      <div className="hidden sm:block bg-slate-900 text-white text-[10px] py-1.5 px-4 text-center uppercase tracking-widest font-semibold border-b border-white/5">
        Hệ thống kết nối y khoa thẩm mỹ & trang thiết bị đạt chuẩn quốc tế
      </div>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border-light px-4 md:px-6 py-2.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <a href="#" onClick={handleLogoClick} className="flex items-center gap-2 relative z-50">
            <span className="material-symbols-outlined text-brand-blue text-2xl">clinical_notes</span>
            <span className="text-base font-bold tracking-tight text-slate-900 uppercase">
              Aesthetic<span className="text-brand-blue">Pro</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            <a href="#" onClick={handleDoctorsClick} className="text-[11px] font-bold text-secondary hover:text-brand-blue transition-colors uppercase tracking-tight">Tìm Bác Sĩ</a>
            <a href="#" className="text-[11px] font-bold text-secondary hover:text-brand-blue transition-colors uppercase tracking-tight">Cơ Sở Thẩm Mỹ</a>
            <a href="#" className="text-[11px] font-bold text-secondary hover:text-brand-blue transition-colors uppercase tracking-tight">Thiết Bị Y Tế</a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <button 
              onClick={handleAdminClick}
              className="text-[11px] font-bold text-slate-400 hover:text-slate-900 uppercase mr-2"
            >
              Admin
            </button>
            <button 
              onClick={handleClinicRegisterClick}
              className="text-brand-blue border border-brand-blue px-4 py-1.5 text-[11px] font-bold uppercase tracking-tight rounded hover:bg-blue-50 transition-all"
            >
              Đăng ký Cơ sở
            </button>
            <button 
              onClick={handleRegisterClick}
              className="bg-brand-blue text-white px-4 py-1.5 text-[11px] font-bold uppercase tracking-tight rounded hover:bg-blue-700 transition-all shadow-sm shadow-blue-200"
            >
              Dành Cho Bác Sĩ
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-slate-900 relative z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined">{isMobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 bg-white/98 backdrop-blur-xl z-40 transition-transform duration-300 ease-in-out lg:hidden flex flex-col pt-24 px-6 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <nav className="flex flex-col gap-6 text-center">
            <a href="#" onClick={handleDoctorsClick} className="text-sm font-bold text-slate-900 uppercase tracking-widest py-3 border-b border-slate-100">Tìm Bác Sĩ</a>
            <a href="#" className="text-sm font-bold text-slate-900 uppercase tracking-widest py-3 border-b border-slate-100" onClick={() => setIsMobileMenuOpen(false)}>Cơ Sở Thẩm Mỹ</a>
            <a href="#" className="text-sm font-bold text-slate-900 uppercase tracking-widest py-3 border-b border-slate-100" onClick={() => setIsMobileMenuOpen(false)}>Thiết Bị Y Tế</a>
            
            <div className="flex flex-col gap-3 mt-4">
              <button 
                onClick={handleAdminClick}
                className="w-full bg-slate-100 text-slate-900 px-4 py-3 text-xs font-bold uppercase rounded tracking-wider"
              >
                Admin Panel
              </button>
              <button 
                onClick={handleClinicRegisterClick}
                className="w-full border border-brand-blue text-brand-blue px-4 py-3 text-xs font-bold uppercase rounded tracking-wider"
              >
                Đăng ký Cơ sở
              </button>
              <button 
                onClick={handleRegisterClick}
                className="w-full bg-brand-blue text-white px-4 py-3 text-xs font-bold uppercase rounded shadow-lg shadow-blue-200 tracking-wider"
              >
                Dành Cho Bác Sĩ
              </button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
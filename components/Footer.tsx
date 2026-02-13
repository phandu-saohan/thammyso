import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 px-6 lg:px-16 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <span className="material-symbols-outlined text-brand-blue text-2xl">clinical_notes</span>
              <span className="text-sm font-bold tracking-tight text-white uppercase">
                Aesthetic<span className="text-brand-blue">Pro</span>
              </span>
            </div>
            <p className="text-[11px] leading-relaxed mb-6">
              Nền tảng thương mại điện tử và kết nối dịch vụ thẩm mỹ y khoa chuyên nghiệp hàng đầu Việt Nam. Minh bạch thông tin, cam kết chất lượng.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-blue transition-colors">
                <span className="material-symbols-outlined text-sm text-white">public</span>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-blue transition-colors">
                <span className="material-symbols-outlined text-sm text-white">share</span>
              </a>
            </div>
          </div>
          <div>
            <h5 className="text-white font-bold text-[10px] uppercase tracking-widest mb-6">Liên kết nhanh</h5>
            <ul className="space-y-3 text-[11px]">
              <li><a href="#" className="hover:text-brand-blue transition-colors">Danh sách bác sĩ</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Cơ sở thẩm mỹ</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Trang thiết bị y tế</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Tin tức y khoa</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-bold text-[10px] uppercase tracking-widest mb-6">Chính sách</h5>
            <ul className="space-y-3 text-[11px]">
              <li><a href="#" className="hover:text-brand-blue transition-colors">Bảo mật thông tin</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Điều khoản sử dụng</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Quy trình xác thực</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Liên hệ hợp tác</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-bold text-[10px] uppercase tracking-widest mb-6">Tổng đài hỗ trợ</h5>
            <p className="text-2xl font-bold text-white mb-2">1900 6789</p>
            <p className="text-[10px] mb-4">Hỗ trợ kỹ thuật và đặt lịch: 08:00 - 20:00</p>
            <div className="bg-slate-800 p-3 rounded-lg border border-slate-700">
              <p className="text-[10px] text-slate-400">Trụ sở chính: Tòa nhà Landmark 81, Quận Bình Thạnh, TP. HCM</p>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[9px] uppercase tracking-widest">© 2024 AESTHETIC PRO VIETNAM. All Rights Reserved.</p>
          <div className="flex gap-6 text-[9px] uppercase tracking-widest font-bold">
            <span className="text-slate-500">Đối tác:</span>
            <a href="#" className="hover:text-white">Samsung Medical</a>
            <a href="#" className="hover:text-white">Medytox</a>
            <a href="#" className="hover:text-white">Allergan</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
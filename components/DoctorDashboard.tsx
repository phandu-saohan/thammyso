import React from 'react';

interface DoctorDashboardProps {
  onLogout: () => void;
}

const DoctorDashboard: React.FC<DoctorDashboardProps> = ({ onLogout }) => {
  return (
    <div className="bg-slate-50 min-h-screen flex flex-col font-sans animate-in fade-in duration-300">
      {/* Header */}
      <header className="flex items-center justify-between border-b border-slate-200 bg-white px-4 md:px-8 py-3 sticky top-0 z-50">
        <div className="flex items-center gap-2 cursor-pointer" onClick={onLogout}>
          <div className="w-6 h-6 flex items-center justify-center">
            <span className="material-symbols-outlined text-brand-blue text-2xl">clinical_notes</span>
          </div>
          <h2 className="text-slate-900 text-lg font-extrabold tracking-tight hidden md:block">
            AestheticPro <span className="text-slate-400 font-normal text-sm ml-2">| Hệ thống Bác sĩ</span>
          </h2>
        </div>
        <div className="flex items-center gap-6">
          <div className="relative cursor-pointer hover:bg-slate-50 p-1 rounded-full transition-colors">
            <span className="material-symbols-outlined text-slate-400">notifications</span>
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
          </div>
          <div className="flex items-center gap-3 pl-6 border-l border-slate-100 cursor-pointer" onClick={onLogout} title="Đăng xuất">
            <div className="text-right hidden md:block">
              <p className="text-sm font-bold text-slate-900">BS. Julianne Moore</p>
              <p className="text-[10px] text-slate-500 uppercase font-medium">Chuyên khoa Da liễu</p>
            </div>
            <div 
              className="w-10 h-10 rounded-full bg-slate-200 bg-cover bg-center border border-slate-100" 
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBxfEB9BHEJX2TpG6SXJ_Ckj0j3hHwknpKJteOKDJD0mYirtV9VltQGf6Wzv6QJslJs15coYS35wqfAHcAvCfVVyG_gJjJTeZ4m68XmrzjRaLQOs9z-BlAoqfIPmJdaUMzr4_dlJTBWBLWQiXjcZTUWZqCyd0mW7NjcFMlH7cYEsv3XkOcGvT8tRtr9O4CHVOR02pL9UFTJPGzl4k-0LRy5aneNmS9UuMdmKN1BPOSTDn1H7QpP8Bwp05AsMbBDKVvdjOm4GhJNORFu")' }}
            ></div>
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 border-r border-slate-200 bg-white hidden lg:flex flex-col min-h-[calc(100vh-65px)]">
          <nav className="py-6 flex flex-col gap-1">
            <a className="text-brand-blue font-semibold bg-blue-50 border-r-4 border-brand-blue flex items-center gap-3 px-6 py-3.5 transition-all" href="#">
              <span className="material-symbols-outlined text-xl">dashboard</span>
              <span className="text-sm">Bảng điều khiển</span>
            </a>
            <a className="text-slate-500 hover:text-slate-900 hover:bg-slate-50 border-r-4 border-transparent flex items-center gap-3 px-6 py-3.5 transition-all" href="#">
              <span className="material-symbols-outlined text-xl">account_circle</span>
              <span className="text-sm">Quản lý hồ sơ</span>
            </a>
            <a className="text-slate-500 hover:text-slate-900 hover:bg-slate-50 border-r-4 border-transparent flex items-center gap-3 px-6 py-3.5 transition-all" href="#">
              <span className="material-symbols-outlined text-xl">chat_bubble</span>
              <span className="text-sm">Tin nhắn & Tư vấn</span>
            </a>
            <a className="text-slate-500 hover:text-slate-900 hover:bg-slate-50 border-r-4 border-transparent flex items-center gap-3 px-6 py-3.5 transition-all" href="#">
              <span className="material-symbols-outlined text-xl">analytics</span>
              <span className="text-sm">Thống kê</span>
            </a>
            <a className="text-slate-500 hover:text-slate-900 hover:bg-slate-50 border-r-4 border-transparent flex items-center gap-3 px-6 py-3.5 transition-all" href="#">
              <span className="material-symbols-outlined text-xl">settings</span>
              <span className="text-sm">Cài đặt</span>
            </a>
          </nav>
          <div className="mt-auto p-6">
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
              <p className="text-[11px] font-bold text-brand-blue uppercase mb-2">Gói thành viên</p>
              <p className="text-xs text-slate-700 font-semibold">Premium Partner</p>
              <p className="text-[10px] text-slate-500 mt-1">Hết hạn: 12/2024</p>
              <button className="mt-3 w-full py-1.5 bg-white border border-blue-200 text-[10px] font-bold text-brand-blue rounded uppercase tracking-wider hover:bg-blue-100 transition-colors">
                Nâng cấp
              </button>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-8 overflow-y-auto">
          <div className="max-w-6xl mx-auto space-y-8">
            {/* Page Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h1 className="text-2xl font-bold text-slate-900">Chào buổi sáng, Bác sĩ Moore</h1>
                <p className="text-sm text-slate-500">Đây là tổng quan hiệu quả hoạt động của hồ sơ trong 30 ngày qua.</p>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 bg-brand-blue text-white text-xs font-bold rounded-lg shadow-lg shadow-blue-500/20 hover:bg-blue-700 transition-all uppercase tracking-wide">
                <span className="material-symbols-outlined text-sm">edit</span>
                Cập nhật hồ sơ
              </button>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-5 border border-slate-200 rounded-xl shadow-sm hover:border-brand-blue/30 transition-colors">
                <div className="flex justify-between items-start">
                  <span className="p-2 bg-blue-50 text-brand-blue rounded-lg material-symbols-outlined">visibility</span>
                  <span className="text-[11px] font-bold text-emerald-500 bg-emerald-50 px-2 py-0.5 rounded-full">+12%</span>
                </div>
                <div className="mt-4">
                  <h3 className="text-slate-500 text-[11px] font-bold uppercase tracking-wider">Lượt xem hồ sơ</h3>
                  <p className="text-2xl font-extrabold text-slate-900 mt-1">1,284</p>
                </div>
              </div>
              <div className="bg-white p-5 border border-slate-200 rounded-xl shadow-sm hover:border-brand-blue/30 transition-colors">
                <div className="flex justify-between items-start">
                  <span className="p-2 bg-amber-50 text-amber-600 rounded-lg material-symbols-outlined">pending_actions</span>
                  <span className="text-[11px] font-bold text-amber-500 bg-amber-50 px-2 py-0.5 rounded-full">3 mới</span>
                </div>
                <div className="mt-4">
                  <h3 className="text-slate-500 text-[11px] font-bold uppercase tracking-wider">Yêu cầu tư vấn mới</h3>
                  <p className="text-2xl font-extrabold text-slate-900 mt-1">24</p>
                </div>
              </div>
              <div className="bg-white p-5 border border-slate-200 rounded-xl shadow-sm hover:border-brand-blue/30 transition-colors">
                <div className="flex justify-between items-start">
                  <span className="p-2 bg-emerald-50 text-emerald-600 rounded-lg material-symbols-outlined">star</span>
                  <span className="text-[11px] font-bold text-slate-400 px-2 py-0.5">Từ 156 đánh giá</span>
                </div>
                <div className="mt-4">
                  <h3 className="text-slate-500 text-[11px] font-bold uppercase tracking-wider">Đánh giá trung bình</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <p className="text-2xl font-extrabold text-slate-900">4.9</p>
                    <div className="flex text-amber-400">
                      {[1,2,3,4,5].map(i => (
                        <span key={i} className="material-symbols-outlined text-sm fill-1" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Activity Feed */}
              <div className="lg:col-span-2 bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
                <div className="p-5 border-b border-slate-100 flex justify-between items-center">
                  <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wide">Hoạt động gần đây</h2>
                  <a className="text-[11px] font-bold text-brand-blue hover:underline" href="#">Xem tất cả</a>
                </div>
                <div className="divide-y divide-slate-50">
                  <div className="p-4 flex items-center gap-4 hover:bg-slate-50 transition-colors cursor-pointer">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-brand-blue text-xl">mail</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-slate-900 font-medium">Bạn có tin nhắn mới từ <span className="font-bold">Lê Minh Anh</span></p>
                      <p className="text-xs text-slate-500">"Tôi muốn tư vấn về liệu trình nâng mũi cấu trúc..."</p>
                    </div>
                    <span className="text-[10px] text-slate-400 whitespace-nowrap">2 phút trước</span>
                  </div>
                  <div className="p-4 flex items-center gap-4 hover:bg-slate-50 transition-colors cursor-pointer">
                    <div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-pink-500 text-xl">favorite</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-slate-900 font-medium"><span className="font-bold">Nguyễn Thảo</span> đã thích hồ sơ của bạn</p>
                      <p className="text-xs text-slate-500">Thông qua tìm kiếm "Nâng mũi chuyên sâu"</p>
                    </div>
                    <span className="text-[10px] text-slate-400 whitespace-nowrap">1 giờ trước</span>
                  </div>
                  <div className="p-4 flex items-center gap-4 hover:bg-slate-50 transition-colors cursor-pointer">
                    <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-emerald-500 text-xl">rate_review</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-slate-900 font-medium"><span className="font-bold">Trần Hữu Nam</span> đã để lại đánh giá 5 sao</p>
                      <p className="text-xs text-slate-500">"Bác sĩ rất nhiệt tình và chuyên nghiệp."</p>
                    </div>
                    <span className="text-[10px] text-slate-400 whitespace-nowrap">Hôm qua</span>
                  </div>
                </div>
              </div>

              {/* Sidebar Widgets */}
              <div className="space-y-6">
                {/* Profile Status */}
                <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-5">
                  <h2 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4">Trạng thái hồ sơ</h2>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-bold text-slate-900">Đã duyệt (Công khai)</span>
                  </div>
                  <div className="mt-4 pt-4 border-t border-slate-100">
                    <div className="flex justify-between text-[11px] mb-1">
                      <span className="text-slate-500">Độ hoàn thiện hồ sơ</span>
                      <span className="text-brand-blue font-bold">85%</span>
                    </div>
                    <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-brand-blue h-full w-[85%] rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Tips */}
                <div className="bg-slate-900 text-white rounded-xl shadow-lg p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="material-symbols-outlined text-amber-400">auto_awesome</span>
                    <h2 className="text-[11px] font-bold uppercase tracking-widest">Mẹo tối ưu hồ sơ</h2>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex gap-3">
                      <span className="text-amber-400 text-xs font-bold">01.</span>
                      <p className="text-[11px] text-slate-300 leading-relaxed">Thêm hình ảnh "Trước/Sau" thực tế để tăng 60% tỷ lệ chuyển đổi khách hàng.</p>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-amber-400 text-xs font-bold">02.</span>
                      <p className="text-[11px] text-slate-300 leading-relaxed">Cập nhật chi tiết "Quy trình thực hiện" để khách hàng yên tâm hơn.</p>
                    </li>
                  </ul>
                  <button className="mt-5 w-full py-2 bg-white/10 hover:bg-white/20 text-[10px] font-bold rounded uppercase transition-colors tracking-wider">
                    Xem hướng dẫn chi tiết
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <footer className="bg-white border-t border-slate-200 py-6">
        <div className="max-w-[1200px] mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">© 2024 AestheticPro Vietnam - Bảng Điều Khiển Quản Lý Bác Sĩ</p>
          <div className="flex gap-8">
            <a className="text-[10px] text-slate-400 font-bold hover:text-brand-blue uppercase tracking-wider" href="#">Trợ giúp</a>
            <a className="text-[10px] text-slate-400 font-bold hover:text-brand-blue uppercase tracking-wider" href="#">Quy định cộng đồng</a>
            <a className="text-[10px] text-slate-400 font-bold hover:text-brand-blue uppercase tracking-wider" href="#">Liên hệ</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DoctorDashboard;
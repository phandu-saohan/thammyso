import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="hero-gradient py-12 md:py-16 border-b border-border-light relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
        <span className="material-symbols-outlined text-[200px] md:text-[300px] rotate-12 select-none">medical_services</span>
      </div>
      <div className="max-w-4xl mx-auto px-4 md:px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-6">
          <span className="material-symbols-outlined text-brand-blue text-sm">verified</span>
          <span className="text-[10px] font-bold text-brand-blue uppercase tracking-wider">Hệ thống thẩm mỹ y khoa tin cậy</span>
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
          Giải Pháp Thẩm Mỹ <br /> <span className="text-brand-blue">Toàn Diện & Chuyên Sâu</span>
        </h1>
        <p className="text-secondary text-sm md:text-base max-w-2xl mx-auto mb-8 md:mb-10 font-medium leading-relaxed">
          Nền tảng kết nối trực tiếp với đội ngũ chuyên gia đầu ngành, cơ sở y tế uy tín và cung ứng trang thiết bị thẩm mỹ công nghệ cao hàng đầu Việt Nam.
        </p>
        <div className="max-w-3xl mx-auto bg-white border border-border-light p-1.5 rounded-xl shadow-xl shadow-slate-200/50 flex flex-col md:flex-row items-center gap-1">
          <div className="flex-[1.5] flex items-center px-3 py-1 md:py-0 gap-3 w-full border-b md:border-b-0 md:border-r border-border-light">
            <span className="material-symbols-outlined text-brand-blue text-xl">search</span>
            <input 
              className="w-full border-none focus:ring-0 text-sm py-2 md:py-1.5 bg-transparent placeholder:text-slate-400 font-medium" 
              placeholder="Tìm bác sĩ, dịch vụ, sản phẩm..." 
            />
          </div>
          <div className="flex-1 flex items-center px-3 py-1 md:py-0 gap-3 w-full border-b md:border-b-0 md:border-r border-border-light">
            <span className="material-symbols-outlined text-slate-400 text-xl">map</span>
            <select className="w-full border-none focus:ring-0 text-sm py-2 md:py-1.5 bg-transparent text-slate-700 appearance-none font-medium cursor-pointer">
              <option>Toàn quốc</option>
              <option>Hà Nội</option>
              <option>TP. Hồ Chí Minh</option>
              <option>Đà Nẵng</option>
            </select>
          </div>
          <button className="w-full md:w-auto bg-brand-blue text-white px-10 py-3 text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shrink-0">
            Tìm kiếm
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
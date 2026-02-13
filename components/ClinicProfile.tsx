import React from 'react';

interface ClinicProfileProps {
  onBack: () => void;
  onViewDoctors?: () => void;
}

const ClinicProfile: React.FC<ClinicProfileProps> = ({ onBack, onViewDoctors }) => {
  return (
    <div className="bg-slate-50 min-h-screen animate-in fade-in duration-300 font-sans">
      <div className="relative flex w-full flex-col overflow-x-hidden">
        {/* Breadcrumb / Back Button */}
        <div className="max-w-[1200px] mx-auto w-full px-4 md:px-10 py-4">
          <button 
            onClick={onBack} 
            className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-secondary hover:text-brand-blue transition-colors"
          >
            <span className="material-symbols-outlined text-base">arrow_back</span>
            Quay lại danh sách
          </button>
        </div>

        <main className="flex-1 max-w-[1200px] mx-auto w-full px-4 md:px-10 pb-12">
          {/* Hero Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 h-[400px] mb-8 overflow-hidden rounded-xl">
            <div className="md:col-span-2 relative group cursor-pointer overflow-hidden rounded-l-xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCJ9SDs_SB8o0xs-rjZhkVTjfcfEI_9BHtfHK4FxtCeJAeZYCUJjSc54ypubgHgErRkWFHbE7FMHvV735uyS4MpIqJCHzcKFelxemmvHYARIUkilt-vjiFWSO5LEUeFvvZ6PRQGMaDbiSqSHe44cRF5PF-cNyfBAmLkBd7OmdFKdq5Zmzahs9KhzmLFFkOMdNeNO8sxSTQnr8WXTg-LWMz-DEAX9a3K6y8zILtmKsarbZKOkUADCo1IugaZIT_6rjayiDgiTy4u4WFC")' }}
              ></div>
              <div className="absolute bottom-6 left-6 z-20">
                <span className="bg-brand-gold text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded mb-2 inline-block">Premium Destination</span>
                <h1 className="text-white text-2xl md:text-4xl font-bold">Thẩm Mỹ Viện Cao Cấp Sài Gòn</h1>
              </div>
            </div>
            <div className="hidden md:flex flex-col gap-3">
              <div 
                className="flex-1 bg-cover bg-center rounded-tr-xl" 
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCBH62cRxQP1jkojgTV1x7qTQNPafMKZfl3a9Xt7ZePD46q_dn5lZHK0sMvpWVc3tfzIdkcjnupsJMUgdgcH9spGnJ9g2cA2svkKBlzdY0RAz5cudOZKg-5MnWze34FlbGZQOCoosQwLTvUQjllLXPfwMGdzBsOAmZv--yJhHOFg_rrs3c34sdYC_AEqM86U3WpZikiApvDUqyGAky-UQ2m91_jZ-15GzEattCHboG358VLAG_yLxy1ktUzO4ubEhpaYRwhCjnH2X4a")' }}
              ></div>
              <div 
                className="flex-1 bg-cover bg-center rounded-br-xl relative" 
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCELH_HMA5_K3YY-1rPgg2vClrQXzm1VUprJLVWyJG4GN6Svb3posmnr0BRMVSyhq-lJLfb_GYOej1DunGzB1IyH7sVVo-B7U7blZqebif_bUrKzS3J-tO3fKYPUMnWxYdo2gDiuipb-h2XQSWK-qY_20s5pZYLwueUKZome6LioxXm25em3L5jnaWjeK00wHlz8oxXCJs7tmpimOndtUhXR9MCZuysUgj1Mh42VW-pzLXtwuzqm9tDEwmkW8u1w2RNpzUMoCxR_JeK")' }}
              >
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white font-bold cursor-pointer hover:bg-black/50 transition-colors">
                  <span className="material-symbols-outlined mr-2">grid_view</span> Xem +15 ảnh
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content Left */}
            <div className="flex-1 flex flex-col gap-8">
              {/* Profile Header Stats */}
              <div className="bg-white border border-border-light rounded-xl p-6 flex flex-wrap items-center justify-between gap-6 shadow-sm">
                <div className="flex items-center gap-6">
                  <div className="size-24 rounded-xl border border-slate-100 bg-white p-2 flex items-center justify-center shadow-sm">
                    <span className="material-symbols-outlined text-brand-blue text-5xl">health_and_safety</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="material-symbols-outlined text-brand-gold fill-1" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="font-bold text-lg text-slate-900">4.9</span>
                      <span className="text-secondary text-sm">(1,248 đánh giá)</span>
                    </div>
                    <p className="text-secondary flex items-center gap-2 text-sm">
                      <span className="material-symbols-outlined text-sm">location_on</span>
                      120 Lê Lợi, Phường Bến Thành, Quận 1, TP. HCM
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button className="px-6 py-2.5 rounded-lg border border-slate-200 font-bold text-sm flex items-center gap-2 hover:bg-slate-50 text-slate-700">
                    <span className="material-symbols-outlined text-sm">bookmark</span> Lưu lại
                  </button>
                  <button className="px-6 py-2.5 rounded-lg bg-brand-blue text-white font-bold text-sm flex items-center gap-2 shadow-lg shadow-blue-500/20 hover:bg-blue-700">
                    <span className="material-symbols-outlined text-sm">share</span> Chia sẻ
                  </button>
                </div>
              </div>

              {/* Navigation Tabs */}
              <div className="border-b border-slate-200 flex gap-8 overflow-x-auto no-scrollbar">
                <a className="pb-4 border-b-2 border-brand-blue text-brand-blue font-bold text-sm whitespace-nowrap" href="#intro">Giới thiệu</a>
                <a className="pb-4 border-b-2 border-transparent text-secondary font-bold text-sm whitespace-nowrap hover:text-brand-blue" href="#doctors">Đội ngũ bác sĩ</a>
                <a className="pb-4 border-b-2 border-transparent text-secondary font-bold text-sm whitespace-nowrap hover:text-brand-blue" href="#services">Dịch vụ</a>
                <a className="pb-4 border-b-2 border-transparent text-secondary font-bold text-sm whitespace-nowrap hover:text-brand-blue" href="#reviews">Đánh giá</a>
              </div>

              {/* Intro Section */}
              <section className="scroll-mt-24" id="intro">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-slate-900">
                  <span className="w-1 h-6 bg-brand-blue rounded-full"></span>
                  Giới thiệu chung
                </h2>
                <div className="text-secondary leading-relaxed space-y-4 text-sm">
                  <p>Được thành lập từ năm 2010, <strong>Thẩm Mỹ Viện Cao Cấp Sài Gòn</strong> tự hào là đơn vị tiên phong trong lĩnh vực thẩm mỹ nội khoa và ngoại khoa tại Việt Nam. Với tiêu chuẩn 5 sao quốc tế, chúng tôi mang đến những giải pháp làm đẹp an toàn, cá nhân hóa cho từng khách hàng.</p>
                  <p>Chúng tôi sở hữu đội ngũ chuyên gia giàu kinh nghiệm, tu nghiệp tại Hàn Quốc và Hoa Kỳ, cùng hệ thống trang thiết bị hiện đại nhất thế giới được FDA chứng nhận.</p>
                </div>
              </section>

              {/* Doctors Section */}
              <section className="scroll-mt-24" id="doctors">
                <div className="flex justify-between items-end mb-6">
                  <h2 className="text-xl font-bold flex items-center gap-2 text-slate-900">
                    <span className="w-1 h-6 bg-brand-blue rounded-full"></span>
                    Đội ngũ bác sĩ
                  </h2>
                  <a 
                    className="text-brand-blue text-sm font-bold flex items-center gap-1 hover:underline cursor-pointer" 
                    onClick={(e) => {
                      e.preventDefault();
                      onViewDoctors?.();
                    }}
                  >
                    Xem tất cả <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </a>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="bg-white border border-slate-100 p-4 rounded-xl text-center group cursor-pointer hover:shadow-xl transition-all hover:border-brand-blue/30">
                    <div 
                      className="size-24 rounded-full mx-auto mb-4 bg-cover bg-center border-4 border-slate-50 group-hover:border-brand-blue/20 transition-colors" 
                      style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC-1Qbmk42L8CyswYzUNY7YI7j9kAfJhFzaF5xGRExk-2a59JVT7CPI2aAWzRk7euF7mVBkT_nNhISj9KK9DRRD_8tXSj5juLXy5-4XOMn7BL54hL8LoGeTfFJAbrTKasFP023I75UUfuDFFYQBvrF5W2unTwtXcrwIE4x7VWVNV4r_wlwKgNVEy9WXBib_mp35Lm9udzJBCLpagudTi4TGhqgYlhz0jA3hcx0YUFuvi7aD9lKIleKplMb5khO0Vv_79AGmFXfqfy6F")' }}
                    ></div>
                    <h3 className="font-bold text-slate-900 text-sm">BS. Trần Anh</h3>
                    <p className="text-[10px] text-brand-blue font-bold mb-2 uppercase tracking-tight">Trưởng khoa phẫu thuật</p>
                    <p className="text-[11px] text-secondary">15 năm kinh nghiệm chuyên sâu thẩm mỹ khuôn mặt.</p>
                  </div>
                  <div className="bg-white border border-slate-100 p-4 rounded-xl text-center group cursor-pointer hover:shadow-xl transition-all hover:border-brand-blue/30">
                    <div 
                      className="size-24 rounded-full mx-auto mb-4 bg-cover bg-center border-4 border-slate-50 group-hover:border-brand-blue/20 transition-colors" 
                      style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBY0LJgkDJzV5-3ZYUZE-5NpRR_Mg-sTcVk2Ub7OX67TeroPIpmZUyKKxlZbVtBqfhqMLNTqcYcnTqfF3lM-kkLtP8HS9aq_tMBbbcuqAotfd-Lc_Ec6WPmwzJZFbrDOzAG1YgaCuGFSHgZyAeUMTZuYFyQ35EATlS4BFDelsKezeTHzTbdSdniKL2ATX4psgELzTY8gF4-UZkWFLt37JhpJ8cQeAGvtFF_fWnDvA8nTJP6muCcDMZchQ9rMGSbpOLZgMbcco70NOUv")' }}
                    ></div>
                    <h3 className="font-bold text-slate-900 text-sm">ThS.BS Lê Thu</h3>
                    <p className="text-[10px] text-brand-blue font-bold mb-2 uppercase tracking-tight">Chuyên gia Da liễu</p>
                    <p className="text-[11px] text-secondary">Chuyên gia hàng đầu về Laser và trẻ hóa da công nghệ cao.</p>
                  </div>
                  <div className="bg-white border border-slate-100 p-4 rounded-xl text-center group cursor-pointer hover:shadow-xl transition-all hover:border-brand-blue/30">
                    <div 
                      className="size-24 rounded-full mx-auto mb-4 bg-cover bg-center border-4 border-slate-50 group-hover:border-brand-blue/20 transition-colors" 
                      style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA850Ew5I9Wbl-xLhIUZ_huwDuEkYfnf1tEDJIDDdeqeX_tNken1wwWiMKCFbTK08-x37LjXUabYvOaniLqaphNbUnm7x-9wsF572eeNDy3557RnY0e8cV48VPzjnnzIDdq3m5KgMXwSPiNaPKmat4iGCwT9-1uZxTs2WdkBZdKSgxV6rFo8CEYX20hwmFPkqF8Kme4y2CU7zgc3YO_GKKsyRl5RVe_a3ksZ-EjZzJMMMGXtvbh5Z0sDNfxFIrBbbz1sicxQDD14H6m")' }}
                    ></div>
                    <h3 className="font-bold text-slate-900 text-sm">BS. Hoàng Nam</h3>
                    <p className="text-[10px] text-brand-blue font-bold mb-2 uppercase tracking-tight">Bác sĩ Tạo hình</p>
                    <p className="text-[11px] text-secondary">Tu nghiệp 5 năm tại Hàn Quốc về nâng mũi cấu trúc.</p>
                  </div>
                </div>
              </section>

              {/* Services Section */}
              <section className="scroll-mt-24" id="services">
                <h2 className="text-xl font-bold mb-6 flex items-center gap-2 text-slate-900">
                  <span className="w-1 h-6 bg-brand-blue rounded-full"></span>
                  Dịch vụ nổi bật
                </h2>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-4 bg-white border border-slate-100 rounded-xl hover:border-brand-blue/40 transition-colors shadow-sm">
                    <div className="flex items-center gap-4">
                      <div className="size-12 rounded-lg bg-blue-50 flex items-center justify-center text-brand-blue">
                        <span className="material-symbols-outlined">face_retouching_natural</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-slate-900">Nâng mũi cấu trúc S-Line</h4>
                        <p className="text-xs text-secondary">Thời gian: 60 - 90 phút | Bác sĩ thực hiện</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-brand-blue font-bold text-sm">Từ 25.000.000đ</p>
                      <button className="text-[10px] font-bold text-slate-400 hover:text-brand-blue uppercase tracking-widest transition-colors">Chi tiết</button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white border border-slate-100 rounded-xl hover:border-brand-blue/40 transition-colors shadow-sm">
                    <div className="flex items-center gap-4">
                      <div className="size-12 rounded-lg bg-blue-50 flex items-center justify-center text-brand-blue">
                        <span className="material-symbols-outlined">auto_fix_high</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-slate-900">Trẻ hóa da Thermage FLX</h4>
                        <p className="text-xs text-secondary">Công nghệ Hoa Kỳ | Không phẫu thuật</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-brand-blue font-bold text-sm">Từ 45.000.000đ</p>
                      <button className="text-[10px] font-bold text-slate-400 hover:text-brand-blue uppercase tracking-widest transition-colors">Chi tiết</button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white border border-slate-100 rounded-xl hover:border-brand-blue/40 transition-colors shadow-sm">
                    <div className="flex items-center gap-4">
                      <div className="size-12 rounded-lg bg-blue-50 flex items-center justify-center text-brand-blue">
                        <span className="material-symbols-outlined">body_fat</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-slate-900">Giảm mỡ CoolSculpting</h4>
                        <p className="text-xs text-secondary">Đông hủy mỡ | An toàn tuyệt đối</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-brand-blue font-bold text-sm">Từ 15.000.000đ</p>
                      <button className="text-[10px] font-bold text-slate-400 hover:text-brand-blue uppercase tracking-widest transition-colors">Chi tiết</button>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Sidebar Content Right */}
            <div className="w-full lg:w-[360px] flex flex-col gap-6">
              {/* Consultation Card */}
              <div className="bg-white border-2 border-brand-blue/10 rounded-2xl p-6 shadow-xl sticky top-24">
                <h3 className="text-lg font-bold mb-4 text-slate-900">Đặt lịch tư vấn</h3>
                <p className="text-xs text-secondary mb-6">Liên hệ trực tiếp để nhận ưu đãi lên đến 30% cho khách hàng mới.</p>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-brand-blue">schedule</span>
                    <div>
                      <p className="text-[10px] font-bold uppercase text-slate-400">Giờ làm việc</p>
                      <p className="text-sm font-medium text-slate-700">08:00 - 20:00 (Thứ 2 - CN)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-brand-blue">call</span>
                    <div>
                      <p className="text-[10px] font-bold uppercase text-slate-400">Hotline</p>
                      <p className="text-sm font-bold text-slate-900">1900 6789 - 028 3456 XXXX</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-brand-blue">map</span>
                    <div>
                      <p className="text-[10px] font-bold uppercase text-slate-400">Chỉ đường</p>
                      <p className="text-sm font-medium text-slate-700 underline cursor-pointer hover:text-brand-blue">Mở bằng Google Maps</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <button className="w-full py-3 bg-brand-blue text-white font-bold rounded-xl hover:bg-blue-700 transition-all flex items-center justify-center gap-2 text-sm shadow-md shadow-blue-200">
                    <span className="material-symbols-outlined text-sm">event</span> Đặt lịch hẹn ngay
                  </button>
                  <button className="w-full py-3 bg-slate-50 text-slate-900 font-bold rounded-xl hover:bg-slate-100 transition-all flex items-center justify-center gap-2 text-sm border border-slate-200">
                    <span className="material-symbols-outlined text-sm">chat</span> Tư vấn qua Zalo
                  </button>
                </div>
                <div className="mt-6 pt-6 border-t border-slate-100">
                  <div className="flex items-center justify-between">
                    <div className="flex -space-x-3">
                      <div className="size-8 rounded-full border-2 border-white bg-cover" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB3UD-pqF-MYiUlkL4zBMRkfYOY9gTzuweH26TTYXj9bESvU-0kQZgfSR21-lMlAOkFfta4YqHlzieV08N9k244A7j4icsxziAHzV_lULmJbuinfCoNF5Yvm35OEyHRMKXQussRy_QBO8Vppgbt15FG8xBVLSvN2rmUnhONGisI5QxXn_fswybzqqQBYZ1dKT3qjx9TV6v85n520mihgV_0afgdPGYBOd-RuIsU5NQkoXQJN5YScVm2fA9muNWFprCNp_s3OkeXhAfR")' }}></div>
                      <div className="size-8 rounded-full border-2 border-white bg-cover" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDqVwqSnM8Bo8Xcuc0qxQTQT3VhKiFqjlw4vi5nfVHJX3orSP5Pdd-s2lYjzyD8vE7bQWsWDSyVL5hgavVTtsvDjxIIy5VgPLs2_TSCPTsN939eTRrYZixnAy2CL_Tc5L_wmxgL0LoS37FdAY4VL4adntoJUHxE7_uqCW3I5nZo-PSjZNFGi39EHa7frfV_HNq7jajOyMVx1Pb4AYYVxi6M3N5k7OXyFPQKr-RCQepxTZKvIYbbZ9zNL0qQzKYORnNqbvXldjYwkYQX")' }}></div>
                      <div className="size-8 rounded-full border-2 border-white bg-cover" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAAR1Q2cmghI5R4nESmPGXsuOtPbuClo4EHDw0BL6Ri6LEZLNm10pEdvP2LrmJHUnblOk3q-R599fiYl7Ggj-IDf0QZsK8ZLUPNxETBZe_e_jXeJZVRpoI709p6RtZcBjI0bXaxTFvqySwpzGQi67Ae8AT7sW0jL5I1HjHPwQ56qva4bpf4VnB4DG4apuFMkB_CbU_dkX-SWdELUAgZQsU-GUTH_BMJpsbc3Ngl4jY1dxKa3vDybEVCPcV7DsY5fEJRDasTdX4t2QAo")' }}></div>
                      <div className="size-8 rounded-full border-2 border-white bg-brand-blue flex items-center justify-center text-[10px] text-white font-bold">+1k</div>
                    </div>
                    <span className="text-xs text-secondary font-medium">Đã đặt lịch hôm nay</span>
                  </div>
                </div>
              </div>
              
              {/* Facility/Tech Preview */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                <h4 className="font-bold mb-4 text-sm text-slate-900">Cơ sở vật chất</h4>
                <div className="grid grid-cols-2 gap-2">
                  <div className="aspect-square rounded-lg bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAihnxX6YnuiRgktmOXzpe3XzMsW3RnxTm2GP1zgvPJMC-awXm1ohNYWjqbrdqhtQBxRkxfJZmzN5jIxQJ3xrrk0pha-theg6ztgv82nqKGbKdAaqGXJYjnQoPIAzL1MqEKlaTSWIWq9Y3Z634PRLl5o1lYPjAMs07IddUGK7dlwOoaJtBX52XCV7OVvvoX0T7Ro6Py7iQbGcHLCEnfj6Ecl51WlFEwi-iD-TD762A7OCLpBZbDDuH2IstJG4s2nNWy8OR8a6X3-Lb4")' }}></div>
                  <div className="aspect-square rounded-lg bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA6GFDsdVEU4WbZBolbd7EaKeUsc6DLiOYIOuUdhhrTvQewJAfXxiHj61xIMe3-h0qwQcB1Z4Xj6abuHy7gtob8nvfiBN74HKX8WdrSDF_vQXd1LLlwcxYLuZFRz5rshh2ff7SaNcAwx0nmG9lgAk1sWM0fgQrS8eLFC_Kk7vHzdH-1zi1WIiLRK_uXVhjHGiNv0iBI0G5xPPWR_locenhV1tnbLMSB9wCm-OxEvOGJA11Ylj_aGdL7LOE4hlifD99Kz45VP0BwVjsx")' }}></div>
                  <div className="aspect-square rounded-lg bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDKp9ikGHxOoPMcBHTXq7bspKeY_BYv2Shj10xKeUmrgOx8WZusnC8pFCqD243U8j7yZUPLsWGZfQdxQBA_xkC69xFP6AkiUrZLD9jxxbpiGgLhOTayKSokN9C6nlqhSUZoQt_RdIDwxPcCbwYh-kqwj7tV4SA59fKj0biUw9pAbH0mY6UOqvNeszIAQp4TWyI2s4qEzbJgCh_2JOvqK3GOD-TO5KdXIID7QxR_6Jy1eK6qvUgOMClKxXtYiVXqBcabOIONZdkVaM2A")' }}></div>
                  <div className="aspect-square rounded-lg bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDX4jCkfVfR53jRwwUFizkwr239q5IWksv8QDxty5IO65yaKnTlN_W1KfAnjsF_DMiR4ZGvj5QadYwJkiz0muhWQGEKqJxzx-KK6haxoxapwSBvtNuS4DS0tULi3K2LzlLN8HzuqBefXA9ejU6NWWVH7hiVPKGcolug3bLTqW1YJMTsbZTpvSMesUfLJ20nzb8FuPGsbpskN-iaFRkn8rQFHQI98-6jzVINUJeZmnHCEsWgKnvyc5hwtd6m5ZU2mCe8Wra8T6gp_xki")' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Customer Reviews Section */}
          <section className="mt-12 mb-20 scroll-mt-24" id="reviews">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-bold flex items-center gap-2 text-slate-900">
                <span className="w-1 h-6 bg-brand-blue rounded-full"></span>
                Đánh giá từ khách hàng
              </h2>
              <button className="text-brand-blue font-bold text-sm hover:underline">Viết đánh giá</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="size-12 rounded-full bg-cover" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAGcwXBOxPNyBEpzpbFntYIPs3TPolWOuIk-623vT86hGSoXcw5j7UVVbMBArNgEvmPk2GjNuL5aXK9CCYyzoUtU-mJD-OUCBzKbRd05PytA7bEaLi8FhTF9nwSn3f5vT2-ZyHTSn99qJqD9dGmmgjKw7PsMai9BUm9hm02PdTiU6BV9i0KlDv59KG-emOXO5UBiymUF22nfYt0NipX-_INUHLXEhvLfx34EdUOS0iOJSa2ZhkZ0ZUlXeWudPBo86v6M0y6inXwGLSR")' }}></div>
                  <div>
                    <h5 className="font-bold text-sm text-slate-900">Nguyễn Phương Thảo</h5>
                    <div className="flex gap-0.5 text-brand-gold">
                      {[1,2,3,4,5].map(i => <span key={i} className="material-symbols-outlined text-[14px] fill-1" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>)}
                    </div>
                  </div>
                  <span className="ml-auto text-xs text-slate-400">2 ngày trước</span>
                </div>
                <p className="text-sm text-secondary italic">"Mình vừa thực hiện liệu trình Thermage FLX tại đây. Bác sĩ tư vấn rất kỹ, cơ sở vật chất sang trọng như khách sạn 5 sao. Kết quả sau 1 tuần da căng bóng rõ rệt."</p>
              </div>
              <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="size-12 rounded-full bg-cover" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDg2e3GTiPb2Iqvq0owTEl0oDIlj86SeA9lbzzURsyMpUbBIKN3DayxkwgdiPnglPsnsKsFgi9TDBy5k6sJQkJzUDNc5AOP9xguHPehDr-uGEsjIbwUVWwZfYjic6nYF2EYE-Wrl1KGLg3rtBD2XH4W2hVM_ofe06OHAZSWxsoAA26MWnhCJKaLvt-E9BGVkXRxQr9B5KkoF9aeOogR8YKKc-VlzkPWiHXGQhuwUfo2RZd_vKTjLVO4_N9dpL3s_oOLVcqudd1_2Maf")' }}></div>
                  <div>
                    <h5 className="font-bold text-sm text-slate-900">Lê Minh Hoàng</h5>
                    <div className="flex gap-0.5 text-brand-gold">
                      {[1,2,3,4,5].map(i => <span key={i} className="material-symbols-outlined text-[14px] fill-1" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>)}
                    </div>
                  </div>
                  <span className="ml-auto text-xs text-slate-400">1 tuần trước</span>
                </div>
                <p className="text-sm text-secondary italic">"Dịch vụ chăm sóc khách hàng cực kỳ tốt. Bác sĩ Nam phẫu thuật nâng mũi rất nhẹ nhàng, không sưng đau nhiều như mình tưởng. Rất hài lòng với dáng mũi mới."</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default ClinicProfile;
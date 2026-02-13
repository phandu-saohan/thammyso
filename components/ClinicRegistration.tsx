import React, { useState } from 'react';

interface ClinicRegistrationProps {
  onBack: () => void;
  onSuccess?: () => void;
}

const ClinicRegistration: React.FC<ClinicRegistrationProps> = ({ onBack, onSuccess }) => {
  const [activeStep, setActiveStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Phẫu thuật thẩm mỹ");

  // Mock data for Step 2
  const categories = [
    { id: 1, name: "Phẫu thuật thẩm mỹ", count: 12, icon: "cut" },
    { id: 2, name: "Chăm sóc da", count: 8, icon: "spa" },
    { id: 3, name: "Điều trị laser", count: 5, icon: "light_mode" },
    { id: 4, name: "Phun xăm thẩm mỹ", count: 9, icon: "palette" },
    { id: 5, name: "Nha khoa thẩm mỹ", count: 4, icon: "dentistry" },
  ];

  const services = [
    {
      id: 1,
      name: "Nâng mũi S-Line",
      tag: "BEST SELLER",
      desc: "Phẫu thuật nâng mũi cấu trúc...",
      duration: "90 phút",
      price: "25.000.000",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCf9XmUA58bFdQUH1i0AwksefOAQTOL2evTTgbJszArjiikX2OXYAGIXT3DZREUMcWSDeiYez0BAW_0msNEUY1TgC0N0shRwyIVkOQj15336Qg9f3urivaoVzmoOvyudtHcVtWj_TIO38uz-zpXJ7rg6mAKqhmo7VHrsM0V_fiZNOi9W-wuAU-RQaRfgxv7akj_iD6xc0WLzJlqApAnSFpZl-HzcU3LgNnRw75M--7x-MitYJMyUJoKoJktDyYzMdGfWNPEMx4jbYdo"
    },
    {
      id: 2,
      name: "Cắt mí Pro",
      tag: "",
      desc: "Kỹ thuật cắt mí mini deep...",
      duration: "45 phút",
      price: "12.000.000",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBpvOBFZvQluvQcSr26OD_TG-xgzKDUsShvHwHfiUDhV48rAHn8wRbxzwG883b3_LkKA9Fctpu4MvbfGGRlFilRMW5EP2rmhV4-kCDAGjnhpxWg1vtBhnuZA_S4sNy-lNcsRwM15QF-i9nZ9PmPUVAcrXKiy2gkTm-BUWbr5KofBUSjmzycg8wacMh9YxFcScR93yjufk9eKqBguEZJBSgxfEfBzdXOX_fOd8n0ELmQJLOlpZ38rcwaX8VO4IJym3_2flasZc7BJROo"
    },
    {
      id: 3,
      name: "Độn cằm V-Line",
      tag: "",
      desc: "Tạo cằm V-Line tự nhiên...",
      duration: "60 phút",
      price: "18.000.000",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxfEB9BHEJX2TpG6SXJ_Ckj0j3hHwknpKJteOKDJD0mYirtV9VltQGf6Wzv6QJslJs15coYS35wqfAHcAvCfVVyG_gJjJTeZ4m68XmrzjRaLQOs9z-BlAoqfIPmJdaUMzr4_dlJTBWBLWQiXjcZTUWZqCyd0mW7NjcFMlH7cYEsv3XkOcGvT8tRtr9O4CHVOR02pL9UFTJPGzl4k-0LRy5aneNmS9UuMdmKN1BPOSTDn1H7QpP8Bwp05AsMbBDKVvdjOm4GhJNORFu"
    }
  ];

  const steps = [
    { id: 1, label: "Thông tin chung" },
    { id: 2, label: "Dịch vụ & Bảng giá" },
    { id: 3, label: "Đội ngũ bác sĩ" },
    { id: 4, label: "Hình ảnh & CSVC" }
  ];

  const handleNext = () => {
    if (activeStep < steps.length) {
      setActiveStep(prev => prev + 1);
      window.scrollTo(0, 0);
    } else {
      setIsSubmitted(true);
      window.scrollTo(0, 0);
    }
  };

  const handlePrev = () => {
    if (activeStep > 1) {
      setActiveStep(prev => prev - 1);
      window.scrollTo(0, 0);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-slate-50 min-h-screen flex flex-col items-center justify-center p-6 animate-in zoom-in-95 duration-500 font-sans">
        <div className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-md w-full border border-slate-100">
          <div className="w-20 h-20 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="material-symbols-outlined text-brand-blue text-5xl">verified</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Gửi hồ sơ thành công!</h2>
          <p className="text-secondary text-sm mb-8 leading-relaxed">
            Hồ sơ cơ sở thẩm mỹ của bạn đã được gửi đến bộ phận kiểm duyệt. Chúng tôi sẽ liên hệ lại trong vòng 24h làm việc.
          </p>
          <div className="flex flex-col gap-3">
             <button 
                onClick={onSuccess || onBack}
                className="w-full bg-brand-blue text-white py-3 rounded-xl text-sm font-bold uppercase tracking-wider hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20"
            >
                Về trang chủ
            </button>
          </div>
        </div>
      </div>
    );
  }

  const renderStepContent = () => {
    switch (activeStep) {
        case 1:
            return (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="lg:col-span-2 space-y-8">
                        {/* Brand Identity */}
                        <section className="bg-white rounded-2xl p-8 border border-border-light shadow-sm">
                            <h3 className="text-lg font-bold mb-6 flex items-center gap-2 text-slate-900">
                                <span className="material-symbols-outlined text-brand-blue">business</span>
                                Danh tính thương hiệu
                            </h3>
                            <div className="grid grid-cols-1 gap-6">
                                <div>
                                    <label className="block text-sm font-bold mb-2 text-slate-700">Tên cơ sở thẩm mỹ <span className="text-red-500">*</span></label>
                                    <input className="w-full rounded-xl border-slate-200 focus:ring-brand-blue focus:border-brand-blue py-3 text-sm" placeholder="VD: Thẩm Mỹ Viện Cao Cấp Sài Gòn" type="text" />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-bold mb-2 text-slate-700">Hotline liên hệ <span className="text-red-500">*</span></label>
                                        <div className="relative">
                                            <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 text-sm">call</span>
                                            <input className="w-full pl-10 rounded-xl border-slate-200 focus:ring-brand-blue focus:border-brand-blue py-3 text-sm" placeholder="1900 XXXX" type="text" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold mb-2 text-slate-700">Giờ làm việc</label>
                                        <div className="relative">
                                            <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 text-sm">schedule</span>
                                            <input className="w-full pl-10 rounded-xl border-slate-200 focus:ring-brand-blue focus:border-brand-blue py-3 text-sm" placeholder="08:00 - 20:00 (Thứ 2 - CN)" type="text" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Location */}
                        <section className="bg-white rounded-2xl p-8 border border-border-light shadow-sm">
                            <h3 className="text-lg font-bold mb-6 flex items-center gap-2 text-slate-900">
                                <span className="material-symbols-outlined text-brand-blue">location_on</span>
                                Vị trí &amp; Địa chỉ
                            </h3>
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-bold mb-2 text-slate-700">Địa chỉ chi tiết <span className="text-red-500">*</span></label>
                                    <input className="w-full rounded-xl border-slate-200 focus:ring-brand-blue focus:border-brand-blue py-3 mb-4 text-sm" placeholder="Số nhà, tên đường, phường/xã, quận/huyện..." type="text" />
                                    <div className="relative w-full h-[250px] rounded-xl overflow-hidden border border-slate-200">
                                        <div className="absolute inset-0 bg-slate-100 flex flex-col items-center justify-center text-slate-400">
                                            <span className="material-symbols-outlined text-4xl mb-2">map</span>
                                            <p className="text-sm">Tích hợp Google Maps</p>
                                            <p className="text-xs">Kéo thả để xác định vị trí chính xác</p>
                                        </div>
                                        <div className="absolute inset-0 opacity-40 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAcVxTe3o7MqWgoUfvlqWW9vJjIyipDsSK-JcqIOa6QFssaCp9FU5LQRfeNOzxBF5V-tBf1nzP7pXeWsNYkhKV7xwGJd3xW8FJllDKYdFhrkS3EvP1b1rYFyqyg2It4kkGV2ML5LWNIy2K7CfGRzPcHQtcbR1EG_j5_TR9aRALq-4VS1kmwFY2wjPy3WI_CfZcRyKr0tOLedb-2xV_Cxo_fbTIVe9eJtWU2-0Lr5FXZ__wTnY8YByn3VJGvz6bLim-wQaSsNKfRvbp4')" }}></div>
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                            <span className="material-symbols-outlined text-brand-blue text-4xl fill-1" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Introduction */}
                        <section className="bg-white rounded-2xl p-8 border border-border-light shadow-sm">
                            <h3 className="text-lg font-bold mb-6 flex items-center gap-2 text-slate-900">
                                <span className="material-symbols-outlined text-brand-blue">description</span>
                                Giới thiệu chi tiết
                            </h3>
                            <div>
                                <label className="block text-sm font-bold mb-2 text-slate-700">Mô tả về cơ sở <span className="text-red-500">*</span></label>
                                <div className="border border-slate-200 rounded-xl overflow-hidden">
                                    <div className="bg-slate-50 border-b border-slate-200 p-2 flex gap-1">
                                        {['format_bold', 'format_italic', 'format_underlined', 'format_list_bulleted', 'format_list_numbered', 'link', 'image'].map((icon, i) => (
                                            <button key={i} className="p-1.5 hover:bg-slate-200 rounded text-slate-600 transition-colors">
                                                <span className="material-symbols-outlined text-sm">{icon}</span>
                                            </button>
                                        ))}
                                    </div>
                                    <textarea className="w-full border-none focus:ring-0 p-4 text-sm" placeholder="Chia sẻ về lịch sử hình thành, sứ mệnh và những giá trị nổi bật của cơ sở..." rows={8}></textarea>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div className="space-y-6">
                        <section className="bg-white rounded-2xl p-6 border border-border-light shadow-sm">
                            <h4 className="font-bold mb-4 text-xs uppercase tracking-wider text-slate-400">Clinic Logo</h4>
                            <div className="flex flex-col items-center">
                                <div className="size-32 rounded-2xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center bg-slate-50 group cursor-pointer hover:border-brand-blue transition-colors overflow-hidden relative">
                                    <span className="material-symbols-outlined text-slate-300 group-hover:text-brand-blue mb-1">add_a_photo</span>
                                    <span className="text-[10px] text-slate-400 font-bold uppercase">Tải lên Logo</span>
                                    <input className="absolute inset-0 opacity-0 cursor-pointer" type="file" />
                                </div>
                                <p className="mt-3 text-[11px] text-slate-400 text-center">Định dạng: JPG, PNG. <br /> Kích thước tối thiểu: 500x500px</p>
                            </div>
                        </section>
                        <section className="bg-white rounded-2xl p-6 border border-border-light shadow-sm">
                            <h4 className="font-bold mb-4 text-xs uppercase tracking-wider text-slate-400">Hero Cover Image</h4>
                            <div className="relative aspect-video rounded-xl border-2 border-dashed border-slate-200 bg-slate-50 flex flex-col items-center justify-center group cursor-pointer hover:border-brand-blue transition-colors overflow-hidden">
                                <span className="material-symbols-outlined text-slate-300 group-hover:text-brand-blue mb-1">wallpaper</span>
                                <span className="text-[10px] text-slate-400 font-bold uppercase">Tải ảnh bìa</span>
                                <input className="absolute inset-0 opacity-0 cursor-pointer" type="file" />
                            </div>
                            <p className="mt-3 text-[11px] text-slate-400">Ảnh bìa sẽ hiển thị đầu trang hồ sơ. Chọn ảnh chất lượng cao về không gian cơ sở.</p>
                        </section>
                        <div className="bg-blue-50/50 rounded-2xl p-6 border border-blue-100">
                            <h5 className="text-brand-blue font-bold text-sm mb-2 flex items-center gap-2">
                                <span className="material-symbols-outlined text-sm">lightbulb</span>
                                Mẹo nhỏ
                            </h5>
                            <p className="text-xs text-brand-blue/70 leading-relaxed">
                                Hồ sơ có thông tin đầy đủ và hình ảnh thực tế chất lượng cao có tỷ lệ khách hàng đặt hẹn cao gấp 3 lần.
                            </p>
                        </div>
                    </div>
                </div>
            );
        case 2:
            return (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-8">
                   {/* Header */}
                   <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                      <div>
                         <div className="flex items-center gap-2 text-sm text-slate-500 mb-1">
                            <span>Đăng ký cơ sở</span>
                            <span>/</span>
                            <span className="text-slate-900 font-medium">Dịch vụ & Bảng giá</span>
                         </div>
                         <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">Quản Lý Dịch Vụ & Bảng Giá</h1>
                         <p className="text-sm text-secondary">Thiết lập danh mục dịch vụ và chi tiết chi phí để hoàn tất hồ sơ cơ sở thẩm mỹ của bạn.</p>
                      </div>
                      <button className="bg-brand-blue text-white px-5 py-2.5 rounded-lg text-sm font-bold flex items-center gap-2 shadow-lg shadow-blue-500/20 hover:bg-blue-700 transition-all">
                         <span className="material-symbols-outlined text-xl">add</span>
                         Thêm dịch vụ mới
                      </button>
                   </div>

                   <div className="flex flex-col lg:flex-row gap-6">
                      {/* Sidebar Categories */}
                      <div className="w-full lg:w-1/4">
                         <div className="bg-white border border-border-light rounded-2xl p-4 shadow-sm h-full">
                            <div className="mb-4 px-2">
                               <h3 className="font-bold text-slate-900">Danh mục dịch vụ</h3>
                               <p className="text-[10px] text-secondary">Phân loại theo chuyên môn</p>
                            </div>
                            
                            <div className="space-y-1 mb-4">
                               {categories.map(cat => (
                                  <button 
                                     key={cat.id}
                                     onClick={() => setActiveCategory(cat.name)}
                                     className={`w-full flex items-center justify-between p-3 rounded-xl text-sm font-medium transition-all ${
                                        activeCategory === cat.name 
                                        ? 'bg-blue-50 text-brand-blue font-bold shadow-sm' 
                                        : 'text-slate-600 hover:bg-slate-50'
                                     }`}
                                  >
                                     <div className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-lg">{cat.icon}</span>
                                        <span>{cat.name}</span>
                                     </div>
                                     <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                                        activeCategory === cat.name ? 'bg-brand-blue text-white' : 'bg-slate-100 text-slate-400'
                                     }`}>{cat.count}</span>
                                  </button>
                               ))}
                            </div>

                            <button className="w-full border border-dashed border-slate-300 py-3 rounded-xl text-xs font-bold text-slate-500 uppercase tracking-wider hover:border-brand-blue hover:text-brand-blue hover:bg-blue-50 transition-all flex items-center justify-center gap-2">
                               <span className="material-symbols-outlined text-base">add</span>
                               Thêm danh mục
                            </button>
                         </div>
                      </div>

                      {/* Main Content Table */}
                      <div className="w-full lg:w-3/4">
                         <div className="bg-white border border-border-light rounded-2xl shadow-sm overflow-hidden flex flex-col h-full">
                            <div className="p-5 border-b border-border-light flex justify-between items-center bg-slate-50/50">
                               <h3 className="font-bold text-slate-900">Danh sách dịch vụ - {activeCategory}</h3>
                               <span className="text-xs text-secondary">Tổng cộng: 03 dịch vụ</span>
                            </div>
                            
                            <div className="overflow-x-auto">
                               <table className="w-full text-left border-collapse">
                                  <thead>
                                     <tr className="border-b border-border-light text-[10px] uppercase tracking-wider text-slate-400">
                                        <th className="p-4 font-bold w-20">Hình</th>
                                        <th className="p-4 font-bold">Tên dịch vụ</th>
                                        <th className="p-4 font-bold hidden md:table-cell">Mô tả</th>
                                        <th className="p-4 font-bold">Thời gian</th>
                                        <th className="p-4 font-bold text-right">Giá (VNĐ)</th>
                                        <th className="p-4 font-bold text-center w-24">Thao tác</th>
                                     </tr>
                                  </thead>
                                  <tbody className="text-sm">
                                     {services.map(service => (
                                        <tr key={service.id} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors group">
                                           <td className="p-4">
                                              <div className="size-12 rounded-lg bg-cover bg-center border border-slate-200" style={{backgroundImage: `url(${service.image})`}}></div>
                                           </td>
                                           <td className="p-4">
                                              <h4 className="font-bold text-slate-900 mb-1">{service.name}</h4>
                                              {service.tag && <span className="text-[9px] font-bold text-brand-blue bg-blue-50 px-1.5 py-0.5 rounded border border-blue-100">{service.tag}</span>}
                                           </td>
                                           <td className="p-4 text-secondary text-xs hidden md:table-cell max-w-[200px] truncate">{service.desc}</td>
                                           <td className="p-4 text-slate-600 font-medium">
                                              <div className="flex items-center gap-1.5">
                                                 <span className="material-symbols-outlined text-slate-400 text-base">schedule</span>
                                                 {service.duration}
                                              </div>
                                           </td>
                                           <td className="p-4 text-right font-bold text-brand-blue">{service.price}</td>
                                           <td className="p-4 text-center">
                                              <div className="flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                 <button className="text-slate-400 hover:text-brand-blue"><span className="material-symbols-outlined text-lg">edit</span></button>
                                                 <button className="text-slate-400 hover:text-red-500"><span className="material-symbols-outlined text-lg">delete</span></button>
                                              </div>
                                           </td>
                                        </tr>
                                     ))}
                                  </tbody>
                               </table>
                            </div>

                            <div className="mt-auto p-4 border-t border-border-light flex justify-between items-center bg-slate-50/50">
                               <button className="text-xs text-red-500 font-bold hover:underline">Xóa tất cả trong mục này</button>
                               <div className="flex items-center gap-2">
                                  <button className="w-8 h-8 rounded border border-slate-200 bg-white flex items-center justify-center text-slate-400 hover:border-brand-blue hover:text-brand-blue"><span className="material-symbols-outlined text-sm">chevron_left</span></button>
                                  <button className="w-8 h-8 rounded bg-brand-blue text-white font-bold text-xs flex items-center justify-center shadow-sm">1</button>
                                  <button className="w-8 h-8 rounded border border-slate-200 bg-white flex items-center justify-center text-slate-400 hover:border-brand-blue hover:text-brand-blue"><span className="material-symbols-outlined text-sm">chevron_right</span></button>
                               </div>
                            </div>
                         </div>
                      </div>
                   </div>
                   
                   {/* Stats Cards */}
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-white border border-border-light rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-sm">
                         <div className="size-10 rounded-full bg-blue-50 flex items-center justify-center text-brand-blue mb-3">
                            <span className="material-symbols-outlined">category</span>
                         </div>
                         <span className="text-xs text-secondary font-medium mb-1">Dịch vụ đang có</span>
                         <span className="text-2xl font-extrabold text-slate-900">38</span>
                      </div>
                      <div className="bg-white border border-border-light rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-sm">
                         <div className="size-10 rounded-full bg-green-50 flex items-center justify-center text-green-600 mb-3">
                            <span className="material-symbols-outlined">payments</span>
                         </div>
                         <span className="text-xs text-secondary font-medium mb-1">Giá trung bình</span>
                         <span className="text-2xl font-extrabold text-slate-900">15,4 Tr</span>
                      </div>
                      <div className="bg-white border border-border-light rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-sm">
                         <div className="size-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 mb-3">
                            <span className="material-symbols-outlined">task_alt</span>
                         </div>
                         <span className="text-xs text-secondary font-medium mb-1">Đã hoàn thiện</span>
                         <span className="text-2xl font-extrabold text-slate-900">85%</span>
                      </div>
                   </div>
                </div>
            );
        case 3:
             return (
                <div className="grid grid-cols-1 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                     <section className="bg-white rounded-2xl p-8 border border-border-light shadow-sm text-center py-20">
                        <span className="material-symbols-outlined text-6xl text-slate-200 mb-4">groups</span>
                        <h3 className="text-lg font-bold text-slate-900">Quản lý Đội ngũ Bác sĩ</h3>
                        <p className="text-sm text-secondary mt-2 max-w-md mx-auto">Liên kết tài khoản bác sĩ đã có trên hệ thống hoặc tạo hồ sơ bác sĩ mới trực thuộc cơ sở của bạn.</p>
                     </section>
                </div>
            );
        case 4:
            return (
                <div className="grid grid-cols-1 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                     <section className="bg-white rounded-2xl p-8 border border-border-light shadow-sm text-center py-20">
                        <span className="material-symbols-outlined text-6xl text-slate-200 mb-4">photo_library</span>
                        <h3 className="text-lg font-bold text-slate-900">Thư viện Hình ảnh & Video</h3>
                        <p className="text-sm text-secondary mt-2 max-w-md mx-auto">Tải lên hình ảnh cơ sở vật chất, trang thiết bị và các ca lâm sàng thực tế (Before/After) để tăng độ uy tín.</p>
                     </section>
                </div>
            );
        default:
            return null;
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen flex flex-col font-sans animate-in fade-in duration-300">
        {/* Custom Header */}
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border-light px-4 md:px-10 py-3">
            <div className="flex items-center justify-between max-w-[1200px] mx-auto w-full">
                <div className="flex items-center gap-8">
                    <div className="flex items-center gap-3 text-brand-blue cursor-pointer" onClick={onBack}>
                        <div className="size-8">
                            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                <path d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z" fill="currentColor"></path>
                            </svg>
                        </div>
                        <h2 className="text-slate-900 text-xl font-extrabold leading-tight tracking-tight">Aesthetic Pro</h2>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <span className="text-xs font-bold text-slate-500 hidden md:inline uppercase tracking-wider">Hỗ trợ: 1900 6789</span>
                    <div 
                        className="size-10 rounded-full bg-cover bg-center border-2 border-brand-blue/20" 
                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB0MlNHkoK5lHwwM56HQK9whUVdHqjrZ1gQ_y7-CVPBgf5yHW52D_HiI9Nq9b-67UFleG2xd70KFHhAW_IX3IQYkLvgrJIeJzc4LksF6c8O04NeTkmn-GuDPUiQ0QBHD4x969Ig7ZH2v3A1U-E0tIUHXJ2BvljD947GPw8Ed0Qh1H2rtnZNiCPkn2E6miYOU3QIxtiSdHAzHWWsbJMmY2l_ZTPZ2UB8Jh8_NEz9u5kYjNr_m0qaipANC4hlPmRYLlDE9HcqoAifGcYf")' }}
                    ></div>
                </div>
            </div>
        </header>

        <main className="flex-1 max-w-[1000px] mx-auto w-full px-4 py-10">
            {/* Conditional Title Rendering */}
            {activeStep === 1 && (
                <div className="mb-10 text-center">
                    <h1 className="text-3xl font-extrabold mb-2 text-slate-900">Tạo Hồ Sơ Cơ Sở Thẩm Mỹ</h1>
                    <p className="text-secondary text-sm">Cung cấp thông tin chi tiết để xây dựng hồ sơ chuyên nghiệp trên nền tảng của chúng tôi.</p>
                </div>
            )}

            {/* Stepper */}
            <div className="mb-12">
                <div className="flex items-center justify-between relative">
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 z-0"></div>
                    <div 
                        className="absolute top-1/2 left-0 h-0.5 bg-brand-blue -translate-y-1/2 z-0 transition-all duration-500"
                        style={{ width: `${((activeStep - 1) / (steps.length - 1)) * 100}%` }}
                    ></div>
                    {steps.map((step) => {
                        const isActive = activeStep >= step.id;
                        const isCurrent = activeStep === step.id;
                        return (
                            <div key={step.id} className="relative z-10 flex flex-col items-center gap-2 bg-slate-50 px-2 sm:px-4">
                                <div className={`size-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                                    isActive 
                                        ? 'bg-brand-blue text-white shadow-lg shadow-blue-500/20' 
                                        : 'bg-white border-2 border-slate-200 text-slate-400'
                                }`}>
                                    {step.id}
                                </div>
                                <span className={`text-[10px] sm:text-xs font-bold whitespace-nowrap hidden sm:block ${
                                    isCurrent ? 'text-brand-blue' : 'text-slate-400'
                                }`}>
                                    {step.label}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Step Content */}
            {renderStepContent()}

            {/* Navigation Actions */}
            <div className="mt-12 pt-8 border-t border-slate-200 flex items-center justify-between">
                 {activeStep > 1 ? (
                    <button 
                        onClick={handlePrev}
                        className="px-8 py-3 rounded-xl border border-slate-200 font-bold text-slate-600 hover:bg-slate-100 transition-colors"
                    >
                        Quay lại
                    </button>
                 ) : (
                    <button className="px-8 py-3 rounded-xl border border-slate-200 font-bold text-slate-600 hover:bg-slate-100 transition-colors">
                        Lưu nháp
                    </button>
                 )}
                
                <button 
                    onClick={handleNext}
                    className="px-10 py-3 rounded-xl bg-brand-blue text-white font-bold shadow-lg shadow-blue-500/25 hover:opacity-90 transition-opacity flex items-center gap-2"
                >
                    {activeStep === steps.length ? 'Hoàn tất' : 'Tiếp tục'} 
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
            </div>
        </main>

        <footer className="bg-white border-t border-border-light py-10 mt-10">
            <div className="max-w-[1200px] mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-3 text-slate-900 opacity-50">
                    <div className="size-6 text-brand-blue">
                         <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z" fill="currentColor"></path>
                        </svg>
                    </div>
                    <span className="font-bold text-sm uppercase tracking-tight">Portal Hệ Thống Đối Tác</span>
                </div>
                <p className="text-xs text-slate-400">© 2024 Aesthetic Pro. Tất cả quyền được bảo lưu.</p>
            </div>
        </footer>
    </div>
  );
};

export default ClinicRegistration;
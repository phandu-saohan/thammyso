import React, { useState } from 'react';

interface DoctorRegistrationProps {
  onBack: () => void;
  onSuccess?: () => void;
}

const DoctorRegistration: React.FC<DoctorRegistrationProps> = ({ onBack, onSuccess }) => {
  const [activeStep, setActiveStep] = useState(1);
  const [uploadedFiles, setUploadedFiles] = useState<Record<string, string>>({});
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const steps = [
    { id: 1, label: "Thông tin cơ bản" },
    { id: 2, label: "Chuyên môn & Bằng cấp" },
    { id: 3, label: "Chứng chỉ hành nghề" },
    { id: 4, label: "Dịch vụ cung cấp" },
    { id: 5, label: "Hình ảnh thực tế" }
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

  const simulateFileUpload = (fieldId: string) => {
    const mockFile = `document_scan_${Math.floor(Math.random() * 1000)}.pdf`;
    setUploadedFiles(prev => ({...prev, [fieldId]: mockFile}));
  };

  const toggleService = (service: string) => {
    setSelectedServices(prev => 
      prev.includes(service) ? prev.filter(s => s !== service) : [...prev, service]
    );
  };

  const simulateImageUpload = () => {
    const images = [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBxfEB9BHEJX2TpG6SXJ_Ckj0j3hHwknpKJteOKDJD0mYirtV9VltQGf6Wzv6QJslJs15coYS35wqfAHcAvCfVVyG_gJjJTeZ4m68XmrzjRaLQOs9z-BlAoqfIPmJdaUMzr4_dlJTBWBLWQiXjcZTUWZqCyd0mW7NjcFMlH7cYEsv3XkOcGvT8tRtr9O4CHVOR02pL9UFTJPGzl4k-0LRy5aneNmS9UuMdmKN1BPOSTDn1H7QpP8Bwp05AsMbBDKVvdjOm4GhJNORFu",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCzz-lce5ZBpoBqlQUuOp7z3mqXLIx0vrGY7A7UzqslCg1mLfjBC_ZvqzN80gev7HSQXB7U9nGT-sJnucUxFhRNdwN3FOqYuUah0QNvYmi-a3QSVl3vFtK3EjUVKGkB_20ntlINqwE1ncQ--mNBOqNcsxQCxGSdypd86Ly0imlowAKYm28oTVl08ZOjA8DcFPGr0WB7ju3W10Jtd0l5sXyAyLuUSH6dHOoJcwPD8tVvrwsxuYVr7LujRPRVC9Wy23J-5d6Lv3o4Jw9O",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCf9XmUA58bFdQUH1i0AwksefOAQTOL2evTTgbJszArjiikX2OXYAGIXT3DZREUMcWSDeiYez0BAW_0msNEUY1TgC0N0shRwyIVkOQj15336Qg9f3urivaoVzmoOvyudtHcVtWj_TIO38uz-zpXJ7rg6mAKqhmo7VHrsM0V_fiZNOi9W-wuAU-RQaRfgxv7akj_iD6xc0WLzJlqApAnSFpZl-HzcU3LgNnRw75M--7x-MitYJMyUJoKoJktDyYzMdGfWNPEMx4jbYdo"
    ];
    const randomImage = images[Math.floor(Math.random() * images.length)];
    setGalleryImages(prev => [...prev, randomImage]);
  };

  if (isSubmitted) {
    return (
      <div className="bg-slate-50 min-h-screen flex flex-col items-center justify-center p-6 animate-in zoom-in-95 duration-500">
        <div className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-md w-full border border-slate-100">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="material-symbols-outlined text-green-600 text-5xl">check_circle</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Gửi hồ sơ thành công!</h2>
          <p className="text-secondary text-sm mb-8 leading-relaxed">
            Hồ sơ của bạn đã được gửi đến bộ phận kiểm duyệt. Trong lúc chờ đợi, bạn có thể truy cập bảng điều khiển để quản lý thông tin.
          </p>
          <div className="flex flex-col gap-3">
             <button 
                onClick={onSuccess}
                className="w-full bg-brand-blue text-white py-3 rounded-lg text-sm font-bold uppercase tracking-wider hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
            >
                Truy cập Dashboard
            </button>
            <button 
                onClick={onBack}
                className="w-full bg-slate-100 text-slate-600 py-3 rounded-lg text-sm font-bold uppercase tracking-wider hover:bg-slate-200 transition-colors"
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
          <div className="bg-white border border-slate-200 rounded-lg shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-300">
            <div className="p-6 border-b border-slate-100">
              <h1 className="text-xl font-bold text-slate-900">Thông tin cơ bản</h1>
              <p className="text-xs text-slate-500 mt-1">Cung cấp thông tin nền tảng để khách hàng nhận diện bạn.</p>
            </div>
            <div className="p-6 space-y-6">
              {/* Photo Upload */}
              <div className="flex items-start gap-6 pb-6 border-b border-slate-50">
                <div className="relative group">
                  <div className="w-28 h-28 bg-slate-100 rounded-lg border-2 border-dashed border-slate-200 flex items-center justify-center overflow-hidden">
                    <span className="material-symbols-outlined text-slate-300 text-3xl group-hover:hidden">add_a_photo</span>
                    <div className="hidden group-hover:flex absolute inset-0 bg-black/40 items-center justify-center cursor-pointer">
                      <span className="text-white text-[10px] font-bold uppercase">Thay đổi</span>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">Ảnh chân dung chuyên nghiệp</label>
                  <p className="text-xs text-slate-500 mb-3">Tải lên ảnh chân dung rõ nét, trang phục y tế. Kích thước tối thiểu 400x400px.</p>
                  <button className="px-4 py-1.5 border border-slate-200 text-[11px] font-bold rounded uppercase hover:bg-slate-50 text-slate-700">Chọn tập tin</button>
                </div>
              </div>

              {/* Form Fields */}
              <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                <div className="col-span-2">
                  <label htmlFor="full_name" className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">Họ và tên đầy đủ</label>
                  <input id="full_name" placeholder="Ví dụ: BS. Julianne Moore" type="text" className="block w-full rounded-md border-slate-200 text-sm focus:border-brand-blue focus:ring-brand-blue py-2" />
                </div>
                <div className="col-span-2 md:col-span-1">
                  <label htmlFor="phone" className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">Số điện thoại <span className="text-red-500">*</span></label>
                  <input id="phone" placeholder="Ví dụ: 0912 345 678" type="tel" pattern="[0-9]{10,11}" required className="block w-full rounded-md border-slate-200 text-sm focus:border-brand-blue focus:ring-brand-blue py-2" />
                </div>
                <div className="col-span-2 md:col-span-1">
                  <label htmlFor="languages" className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">Ngôn ngữ giao tiếp</label>
                  <input id="languages" placeholder="Tiếng Việt, Tiếng Anh, Tiếng Pháp..." type="text" className="block w-full rounded-md border-slate-200 text-sm focus:border-brand-blue focus:ring-brand-blue py-2" />
                </div>
                <div className="col-span-2">
                  <label htmlFor="bio" className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">Tiểu sử chuyên môn</label>
                  <textarea id="bio" placeholder="Mô tả tóm tắt về quá trình làm việc, phong cách điều trị và những thành tựu nổi bật..." rows={4} className="block w-full rounded-md border-slate-200 text-sm focus:border-brand-blue focus:ring-brand-blue py-2"></textarea>
                </div>
              </div>
            </div>
            
             {/* Footer Actions */}
             <div className="p-6 bg-slate-50 border-t border-slate-200 flex justify-end items-center rounded-b-lg">
                <button 
                    onClick={handleNext}
                    className="px-8 py-2.5 bg-brand-blue text-white text-xs font-bold rounded uppercase tracking-widest shadow-lg shadow-blue-500/20 hover:bg-blue-700 transition-all"
                >
                    Tiếp theo
                </button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="bg-white border border-slate-200 rounded-lg shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-300">
            <div className="p-6 border-b border-slate-100">
              <h1 className="text-xl font-bold text-slate-900">Chuyên môn & Bằng cấp</h1>
              <p className="text-xs text-slate-500 mt-1">Thông tin về lĩnh vực hoạt động chính và quá trình đào tạo.</p>
            </div>
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                <div className="col-span-2 md:col-span-1">
                  <label htmlFor="specialty" className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">Chuyên khoa chính</label>
                  <select id="specialty" className="block w-full rounded-md border-slate-200 text-sm focus:border-brand-blue focus:ring-brand-blue py-2">
                    <option>Phẫu thuật Thẩm mỹ</option>
                    <option>Da liễu Thẩm mỹ</option>
                    <option>Nội khoa Thẩm mỹ</option>
                    <option>Phục hồi chức năng</option>
                  </select>
                </div>
                <div className="col-span-2 md:col-span-1">
                  <label htmlFor="experience" className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">Số năm kinh nghiệm</label>
                  <input id="experience" placeholder="Ví dụ: 15+" type="text" className="block w-full rounded-md border-slate-200 text-sm focus:border-brand-blue focus:ring-brand-blue py-2" />
                </div>
                <div className="col-span-2">
                   <div className="my-2 border-t border-slate-100"></div>
                </div>
                <div className="col-span-2 md:col-span-1">
                   <label htmlFor="university" className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">Trường Y đã tốt nghiệp</label>
                   <input id="university" placeholder="Ví dụ: Đại học Y Dược TP.HCM" type="text" className="block w-full rounded-md border-slate-200 text-sm focus:border-brand-blue focus:ring-brand-blue py-2" />
                </div>
                <div className="col-span-2 md:col-span-1">
                   <label htmlFor="degree" className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">Học vị cao nhất</label>
                   <select id="degree" className="block w-full rounded-md border-slate-200 text-sm focus:border-brand-blue focus:ring-brand-blue py-2">
                    <option>Bác sĩ (MD)</option>
                    <option>Thạc sĩ (MSc)</option>
                    <option>Tiến sĩ (PhD)</option>
                    <option>Bác sĩ CK I</option>
                    <option>Bác sĩ CK II</option>
                  </select>
                </div>
              </div>
            </div>
             {/* Footer Actions */}
             <div className="p-6 bg-slate-50 border-t border-slate-200 flex justify-between items-center rounded-b-lg">
                <button 
                    onClick={handlePrev}
                    className="px-6 py-2 text-xs font-bold text-slate-500 uppercase tracking-widest hover:text-slate-700 transition-colors"
                >
                    Quay lại
                </button>
                <button 
                    onClick={handleNext}
                    className="px-8 py-2.5 bg-brand-blue text-white text-xs font-bold rounded uppercase tracking-widest shadow-lg shadow-blue-500/20 hover:bg-blue-700 transition-all"
                >
                    Tiếp theo
                </button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="bg-white border border-slate-200 rounded-lg shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-300">
            <div className="p-6 border-b border-slate-100">
              <h1 className="text-xl font-bold text-slate-900">Chứng chỉ hành nghề</h1>
              <p className="text-xs text-slate-500 mt-1">Tải lên các tài liệu pháp lý và chuyên môn để xác thực hồ sơ.</p>
            </div>
            <div className="p-6 space-y-6">
                <div className="bg-blue-50 border border-blue-100 rounded-lg p-3 flex items-start gap-3">
                  <span className="material-symbols-outlined text-brand-blue text-lg mt-0.5">info</span>
                  <div>
                    <h4 className="text-[11px] font-bold text-brand-blue uppercase mb-1">Quy định tài liệu</h4>
                    <p className="text-[10px] text-slate-600 leading-relaxed">
                      Vui lòng tải lên bản scan màu hoặc ảnh chụp rõ nét từ bản gốc. Hỗ trợ định dạng PDF, JPG, PNG (Tối đa 5MB).
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Dynamic Certificate Cards */}
                    {['cchn', 'degree', 'license'].map((id) => {
                       const labels: Record<string, any> = {
                         cchn: { title: "Chứng chỉ hành nghề (CCHN)", desc: "Bắt buộc. Scan màu bản gốc (PDF, JPG).", icon: "badge" },
                         degree: { title: "Văn bằng chuyên môn", desc: "Bằng cấp cao nhất (CKI/CKII/ThS/TS).", icon: "school" },
                         license: { title: "Giấy phép hoạt động KCB", desc: "Dành cho chủ phòng khám/cơ sở.", icon: "local_hospital" }
                       };
                       const item = labels[id];
                       const isUploaded = !!uploadedFiles[id];

                       return (
                        <div 
                          key={id}
                          onClick={() => simulateFileUpload(id)}
                          className={`border rounded-lg p-4 transition-all cursor-pointer group relative overflow-hidden ${
                            isUploaded ? 'border-green-200 bg-green-50' : 'border-slate-200 hover:border-brand-blue bg-slate-50/50 hover:bg-white'
                          }`}
                        >
                            <div className="flex items-start gap-4 relative z-10">
                                <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 transition-transform ${
                                  isUploaded ? 'bg-green-100 text-green-600' : 'bg-blue-50 text-brand-blue group-hover:scale-110 border border-blue-100'
                                }`}>
                                    <span className="material-symbols-outlined">{isUploaded ? 'check' : item.icon}</span>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-sm font-bold text-slate-900 mb-1">{item.title}</h3>
                                    <p className="text-[10px] text-secondary mb-3 truncate">{isUploaded ? uploadedFiles[id] : item.desc}</p>
                                    <span className={`inline-flex items-center gap-1 text-[10px] font-bold px-2.5 py-1 rounded uppercase transition-colors ${
                                      isUploaded ? 'bg-green-200 text-green-700' : 'text-brand-blue bg-blue-50 group-hover:bg-brand-blue group-hover:text-white'
                                    }`}>
                                      <span className="material-symbols-outlined text-sm">{isUploaded ? 'edit' : 'cloud_upload'}</span>
                                      {isUploaded ? 'Thay đổi' : 'Tải lên'}
                                    </span>
                                </div>
                            </div>
                        </div>
                       );
                    })}

                     {/* Add More */}
                    <div className="border border-dashed border-slate-300 rounded-lg p-4 hover:border-brand-blue transition-colors cursor-pointer flex flex-col items-center justify-center text-center py-8 group hover:bg-blue-50/30">
                         <span className="material-symbols-outlined text-slate-300 mb-2 group-hover:text-brand-blue transition-colors">add_circle</span>
                         <span className="text-xs font-bold text-slate-500 uppercase group-hover:text-brand-blue transition-colors">Thêm tài liệu khác</span>
                    </div>
                </div>
            </div>
             {/* Footer Actions */}
             <div className="p-6 bg-slate-50 border-t border-slate-200 flex justify-between items-center rounded-b-lg">
                <button onClick={handlePrev} className="px-6 py-2 text-xs font-bold text-slate-500 uppercase tracking-widest hover:text-slate-700 transition-colors">Quay lại</button>
                <button onClick={handleNext} className="px-8 py-2.5 bg-brand-blue text-white text-xs font-bold rounded uppercase tracking-widest shadow-lg shadow-blue-500/20 hover:bg-blue-700 transition-all">Tiếp theo</button>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="bg-white border border-slate-200 rounded-lg shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-300">
            <div className="p-6 border-b border-slate-100">
              <h1 className="text-xl font-bold text-slate-900">Dịch vụ cung cấp</h1>
              <p className="text-xs text-slate-500 mt-1">Chọn các dịch vụ bạn thực hiện và mức giá tham khảo.</p>
            </div>
            <div className="p-6 space-y-4">
               {['Nâng mũi cấu trúc', 'Cắt mí mắt', 'Nâng ngực nội soi', 'Hút mỡ bụng', 'Tiêm Filler/Botox', 'Căng da mặt SMAS'].map((service, idx) => {
                 const isSelected = selectedServices.includes(service);
                 return (
                   <div key={idx} className={`flex items-center gap-4 p-3 rounded-lg border transition-all ${isSelected ? 'border-brand-blue bg-blue-50' : 'border-slate-100 hover:border-slate-300'}`}>
                      <div className="relative flex items-center">
                        <input 
                          type="checkbox" 
                          checked={isSelected}
                          onChange={() => toggleService(service)}
                          className="w-5 h-5 rounded border-slate-300 text-brand-blue focus:ring-brand-blue cursor-pointer" 
                        />
                      </div>
                      <div className="flex-1">
                        <span className={`text-sm font-bold ${isSelected ? 'text-brand-blue' : 'text-slate-700'}`}>{service}</span>
                      </div>
                      <div className="w-32">
                         <input 
                            disabled={!isSelected}
                            type="text" 
                            placeholder="Giá từ..." 
                            className="w-full text-xs border-slate-200 rounded py-1.5 disabled:bg-slate-100 disabled:text-slate-400"
                         />
                      </div>
                   </div>
                 )
               })}
               <button className="flex items-center gap-2 text-xs font-bold text-brand-blue uppercase mt-2 hover:underline">
                 <span className="material-symbols-outlined text-sm">add</span>
                 Thêm dịch vụ khác
               </button>
            </div>
            <div className="p-6 bg-slate-50 border-t border-slate-200 flex justify-between items-center rounded-b-lg">
                <button onClick={handlePrev} className="px-6 py-2 text-xs font-bold text-slate-500 uppercase tracking-widest hover:text-slate-700 transition-colors">Quay lại</button>
                <button onClick={handleNext} className="px-8 py-2.5 bg-brand-blue text-white text-xs font-bold rounded uppercase tracking-widest shadow-lg shadow-blue-500/20 hover:bg-blue-700 transition-all">Tiếp theo</button>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="bg-white border border-slate-200 rounded-lg shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-300">
            <div className="p-6 border-b border-slate-100">
              <h1 className="text-xl font-bold text-slate-900">Hình ảnh thực tế</h1>
              <p className="text-xs text-slate-500 mt-1">Hồ sơ có hình ảnh Before/After tăng 300% tỉ lệ đặt hẹn.</p>
            </div>
            <div className="p-6 space-y-6">
              <div 
                onClick={simulateImageUpload}
                className="border-2 border-dashed border-slate-300 rounded-xl p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:border-brand-blue hover:bg-blue-50/50 transition-all group"
              >
                 <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-3xl text-slate-400 group-hover:text-brand-blue">add_photo_alternate</span>
                 </div>
                 <h3 className="text-sm font-bold text-slate-700 mb-1">Kéo thả hoặc chọn hình ảnh</h3>
                 <p className="text-[10px] text-slate-400">Hỗ trợ JPG, PNG. Tối đa 5MB/ảnh.</p>
              </div>

              {galleryImages.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase mb-3">Đã tải lên ({galleryImages.length})</h4>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                    {galleryImages.map((src, idx) => (
                      <div key={idx} className="aspect-square rounded-lg overflow-hidden relative group">
                        <img src={src} alt="Gallery" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                           <button className="text-white hover:text-red-400"><span className="material-symbols-outlined">delete</span></button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="p-6 bg-slate-50 border-t border-slate-200 flex justify-between items-center rounded-b-lg">
                <button onClick={handlePrev} className="px-6 py-2 text-xs font-bold text-slate-500 uppercase tracking-widest hover:text-slate-700 transition-colors">Quay lại</button>
                <button onClick={handleNext} className="px-8 py-2.5 bg-green-600 text-white text-xs font-bold rounded uppercase tracking-widest shadow-lg shadow-green-500/20 hover:bg-green-700 transition-all flex items-center gap-2">
                   Hoàn tất đăng ký <span className="material-symbols-outlined text-sm">send</span>
                </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen flex flex-col font-sans animate-in fade-in duration-300">
      {/* Header */}
      <header className="flex items-center justify-between border-b border-slate-200 bg-white px-6 py-3 sticky top-0 z-50">
        <div className="flex items-center gap-2 cursor-pointer" onClick={onBack}>
             <span className="material-symbols-outlined text-brand-blue text-2xl">clinical_notes</span>
             <h2 className="text-slate-900 text-lg font-extrabold tracking-tight">
                AestheticPro <span className="text-slate-400 font-normal text-sm ml-2">| For Doctors</span>
             </h2>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-xs text-slate-500 font-medium">Bác sĩ Julianne Moore</span>
          <div 
            className="w-8 h-8 rounded-full bg-slate-200 bg-cover bg-center" 
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBxfEB9BHEJX2TpG6SXJ_Ckj0j3hHwknpKJteOKDJD0mYirtV9VltQGf6Wzv6QJslJs15coYS35wqfAHcAvCfVVyG_gJjJTeZ4m68XmrzjRaLQOs9z-BlAoqfIPmJdaUMzr4_dlJTBWBLWQiXjcZTUWZqCyd0mW7NjcFMlH7cYEsv3XkOcGvT8tRtr9O4CHVOR02pL9UFTJPGzl4k-0LRy5aneNmS9UuMdmKN1BPOSTDn1H7QpP8Bwp05AsMbBDKVvdjOm4GhJNORFu")' }}
          ></div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-[1200px] mx-auto w-full px-6 py-6 flex gap-8">
        {/* Sidebar */}
        <aside className="w-64 shrink-0 hidden md:block">
          <div className="sticky top-24 space-y-1">
            <div className="mb-4 px-4 py-2">
              <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Tiến trình đăng ký</h3>
            </div>
            {steps.map((step) => {
              const isActive = activeStep === step.id;
              const isPast = activeStep > step.id;
              
              return (
                <div 
                  key={step.id}
                  onClick={() => !isSubmitted && setActiveStep(step.id)}
                  className={`px-4 py-3 flex items-center gap-3 cursor-pointer transition-all duration-200 ${
                    isActive 
                      ? 'text-brand-blue font-bold border-l-2 border-brand-blue bg-blue-50/50' 
                      : isPast
                        ? 'text-brand-blue border-l-2 border-transparent hover:bg-slate-50 opacity-70'
                        : 'text-slate-400 border-l-2 border-transparent hover:text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <span className="text-xs">{isPast ? '✓' : `${step.id}.`}</span>
                  <span className="text-xs uppercase tracking-wide">{step.label}</span>
                </div>
              );
            })}
            <hr className="my-6 border-slate-200"/>
            <div className="px-4">
              <p className="text-[10px] text-slate-400 leading-relaxed uppercase tracking-wider">Hồ sơ của bạn sẽ được đội ngũ chuyên môn kiểm duyệt trong vòng 24-48h sau khi hoàn tất.</p>
            </div>
          </div>
        </aside>

        {/* Form Content */}
        <div className="flex-1 space-y-6">
          {renderStepContent()}

          {/* Info Cards - Only show on first step to save space or keep consistent */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-white border border-slate-200 rounded-lg">
                <span className="material-symbols-outlined text-amber-500 mb-2">lightbulb</span>
                <h4 className="text-[11px] font-bold uppercase mb-1">Mẹo hay</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed">Hồ sơ có ảnh chân dung rõ nét tăng 40% tỷ lệ khách hàng tin tưởng.</p>
            </div>
            <div className="p-4 bg-white border border-slate-200 rounded-lg">
                <span className="material-symbols-outlined text-brand-blue mb-2">verified_user</span>
                <h4 className="text-[11px] font-bold uppercase mb-1">Bảo mật</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed">Thông tin bằng cấp chỉ dùng để xác thực và sẽ không hiển thị công khai.</p>
            </div>
            <div className="p-4 bg-white border border-slate-200 rounded-lg">
                <span className="material-symbols-outlined text-emerald-500 mb-2">support_agent</span>
                <h4 className="text-[11px] font-bold uppercase mb-1">Hỗ trợ</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed">Cần hỗ trợ? Liên hệ bộ phận Đối tác: 1900 1234.</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-slate-200 py-6 mt-12">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">© 2024 AestheticPro Vietnam - Hệ thống quản lý bác sĩ</p>
            <div className="flex gap-8">
                <a className="text-[10px] text-slate-400 font-bold hover:text-brand-blue uppercase tracking-wider" href="#">Hướng dẫn</a>
                <a className="text-[10px] text-slate-400 font-bold hover:text-brand-blue uppercase tracking-wider" href="#">Chính sách</a>
                <a className="text-[10px] text-slate-400 font-bold hover:text-brand-blue uppercase tracking-wider" href="#">Hỗ trợ</a>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default DoctorRegistration;
import React, { useState, useEffect, useCallback } from 'react';
import BookingModal from './BookingModal';
import ChatWindow from './ChatWindow';

interface DoctorProfileProps {
  onBack: () => void;
}

const DoctorProfile: React.FC<DoctorProfileProps> = ({ onBack }) => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Tất cả");
  // State for gallery lightbox
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const doctorName = "TS. BS. Julianne Moore";
  const doctorImage = "https://lh3.googleusercontent.com/aida-public/AB6AXuBxfEB9BHEJX2TpG6SXJ_Ckj0j3hHwknpKJteOKDJD0mYirtV9VltQGf6Wzv6QJslJs15coYS35wqfAHcAvCfVVyG_gJjJTeZ4m68XmrzjRaLQOs9z-BlAoqfIPmJdaUMzr4_dlJTBWBLWQiXjcZTUWZqCyd0mW7NjcFMlH7cYEsv3XkOcGvT8tRtr9O4CHVOR02pL9UFTJPGzl4k-0LRy5aneNmS9UuMdmKN1BPOSTDn1H7QpP8Bwp05AsMbBDKVvdjOm4GhJNORFu";

  const galleryCategories = ["Tất cả", "Nâng mũi", "Căng da", "Vóc dáng", "Mắt"];
  
  const galleryItems = [
    { 
      category: "Căng da", 
      title: "Căng da mặt & cổ", 
      before: "https://lh3.googleusercontent.com/aida-public/AB6AXuCzz-lce5ZBpoBqlQUuOp7z3mqXLIx0vrGY7A7UzqslCg1mLfjBC_ZvqzN80gev7HSQXB7U9nGT-sJnucUxFhRNdwN3FOqYuUah0QNvYmi-a3QSVl3vFtK3EjUVKGkB_20ntlINqwE1ncQ--mNBOqNcsxQCxGSdypd86Ly0imlowAKYm28oTVl08ZOjA8DcFPGr0WB7ju3W10Jtd0l5sXyAyLuUSH6dHOoJcwPD8tVvrwsxuYVr7LujRPRVC9Wy23J-5d6Lv3o4Jw9O", 
      after: "https://lh3.googleusercontent.com/aida-public/AB6AXuBpvOBFZvQluvQcSr26OD_TG-xgzKDUsShvHwHfiUDhV48rAHn8wRbxzwG883b3_LkKA9Fctpu4MvbfGGRlFilRMW5EP2rmhV4-kCDAGjnhpxWg1vtBhnuZA_S4sNy-lNcsRwM15QF-i9nZ9PmPUVAcrXKiy2gkTm-BUWbr5KofBUSjmzycg8wacMh9YxFcScR93yjufk9eKqBguEZJBSgxfEfBzdXOX_fOd8n0ELmQJLOlpZ38rcwaX8VO4IJym3_2flasZc7BJROo" 
    },
    { 
      category: "Nâng mũi", 
      title: "Nâng mũi cấu trúc", 
      before: "https://lh3.googleusercontent.com/aida-public/AB6AXuCf9XmUA58bFdQUH1i0AwksefOAQTOL2evTTgbJszArjiikX2OXYAGIXT3DZREUMcWSDeiYez0BAW_0msNEUY1TgC0N0shRwyIVkOQj15336Qg9f3urivaoVzmoOvyudtHcVtWj_TIO38uz-zpXJ7rg6mAKqhmo7VHrsM0V_fiZNOi9W-wuAU-RQaRfgxv7akj_iD6xc0WLzJlqApAnSFpZl-HzcU3LgNnRw75M--7x-MitYJMyUJoKoJktDyYzMdGfWNPEMx4jbYdo", 
      after: "https://lh3.googleusercontent.com/aida-public/AB6AXuCGPotwQDVPHl_hl7m7HvthGU3y19Is3uRuF5WbVU_3tefyH1Cb_1AnFDMJ91itEyR2Yar7oLlOrrBcjWrZ63AyJMMuUtOxbvrciQKvdCGUfUhwCuIC4nGgJuy9DR_6oACSXG9T9mb1YdNq-W_81vv1YbU1BXw8HEiDUz5SO2XGlqEXKcwop9_R6DF8E9Q3G3r_0J9EgFtEZ4QWU9lJVV3BOeTsw_3wfq03jRGcrp-3hRIc9as4CPQPs6yzZtqb85e7ViFrSgsFsGt8" 
    },
    { 
      category: "Vóc dáng", 
      title: "Tạo hình thành bụng", 
      before: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxfEB9BHEJX2TpG6SXJ_Ckj0j3hHwknpKJteOKDJD0mYirtV9VltQGf6Wzv6QJslJs15coYS35wqfAHcAvCfVVyG_gJjJTeZ4m68XmrzjRaLQOs9z-BlAoqfIPmJdaUMzr4_dlJTBWBLWQiXjcZTUWZqCyd0mW7NjcFMlH7cYEsv3XkOcGvT8tRtr9O4CHVOR02pL9UFTJPGzl4k-0LRy5aneNmS9UuMdmKN1BPOSTDn1H7QpP8Bwp05AsMbBDKVvdjOm4GhJNORFu", 
      after: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxfEB9BHEJX2TpG6SXJ_Ckj0j3hHwknpKJteOKDJD0mYirtV9VltQGf6Wzv6QJslJs15coYS35wqfAHcAvCfVVyG_gJjJTeZ4m68XmrzjRaLQOs9z-BlAoqfIPmJdaUMzr4_dlJTBWBLWQiXjcZTUWZqCyd0mW7NjcFMlH7cYEsv3XkOcGvT8tRtr9O4CHVOR02pL9UFTJPGzl4k-0LRy5aneNmS9UuMdmKN1BPOSTDn1H7QpP8Bwp05AsMbBDKVvdjOm4GhJNORFu" 
    },
    { 
      category: "Mắt", 
      title: "Cắt mí nội soi", 
      before: "https://lh3.googleusercontent.com/aida-public/AB6AXuBpvOBFZvQluvQcSr26OD_TG-xgzKDUsShvHwHfiUDhV48rAHn8wRbxzwG883b3_LkKA9Fctpu4MvbfGGRlFilRMW5EP2rmhV4-kCDAGjnhpxWg1vtBhnuZA_S4sNy-lNcsRwM15QF-i9nZ9PmPUVAcrXKiy2gkTm-BUWbr5KofBUSjmzycg8wacMh9YxFcScR93yjufk9eKqBguEZJBSgxfEfBzdXOX_fOd8n0ELmQJLOlpZ38rcwaX8VO4IJym3_2flasZc7BJROo", 
      after: "https://lh3.googleusercontent.com/aida-public/AB6AXuCf9XmUA58bFdQUH1i0AwksefOAQTOL2evTTgbJszArjiikX2OXYAGIXT3DZREUMcWSDeiYez0BAW_0msNEUY1TgC0N0shRwyIVkOQj15336Qg9f3urivaoVzmoOvyudtHcVtWj_TIO38uz-zpXJ7rg6mAKqhmo7VHrsM0V_fiZNOi9W-wuAU-RQaRfgxv7akj_iD6xc0WLzJlqApAnSFpZl-HzcU3LgNnRw75M--7x-MitYJMyUJoKoJktDyYzMdGfWNPEMx4jbYdo" 
    },
    { 
      category: "Nâng mũi", 
      title: "Thu gọn cánh mũi", 
      before: "https://lh3.googleusercontent.com/aida-public/AB6AXuCf9XmUA58bFdQUH1i0AwksefOAQTOL2evTTgbJszArjiikX2OXYAGIXT3DZREUMcWSDeiYez0BAW_0msNEUY1TgC0N0shRwyIVkOQj15336Qg9f3urivaoVzmoOvyudtHcVtWj_TIO38uz-zpXJ7rg6mAKqhmo7VHrsM0V_fiZNOi9W-wuAU-RQaRfgxv7akj_iD6xc0WLzJlqApAnSFpZl-HzcU3LgNnRw75M--7x-MitYJMyUJoKoJktDyYzMdGfWNPEMx4jbYdo", 
      after: "https://lh3.googleusercontent.com/aida-public/AB6AXuCGPotwQDVPHl_hl7m7HvthGU3y19Is3uRuF5WbVU_3tefyH1Cb_1AnFDMJ91itEyR2Yar7oLlOrrBcjWrZ63AyJMMuUtOxbvrciQKvdCGUfUhwCuIC4nGgJuy9DR_6oACSXG9T9mb1YdNq-W_81vv1YbU1BXw8HEiDUz5SO2XGlqEXKcwop9_R6DF8E9Q3G3r_0J9EgFtEZ4QWU9lJVV3BOeTsw_3wfq03jRGcrp-3hRIc9as4CPQPs6yzZtqb85e7ViFrSgsFsGt8" 
    },
    { 
      category: "Vóc dáng", 
      title: "Nâng ngực Y-Line", 
      before: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxfEB9BHEJX2TpG6SXJ_Ckj0j3hHwknpKJteOKDJD0mYirtV9VltQGf6Wzv6QJslJs15coYS35wqfAHcAvCfVVyG_gJjJTeZ4m68XmrzjRaLQOs9z-BlAoqfIPmJdaUMzr4_dlJTBWBLWQiXjcZTUWZqCyd0mW7NjcFMlH7cYEsv3XkOcGvT8tRtr9O4CHVOR02pL9UFTJPGzl4k-0LRy5aneNmS9UuMdmKN1BPOSTDn1H7QpP8Bwp05AsMbBDKVvdjOm4GhJNORFu", 
      after: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxfEB9BHEJX2TpG6SXJ_Ckj0j3hHwknpKJteOKDJD0mYirtV9VltQGf6Wzv6QJslJs15coYS35wqfAHcAvCfVVyG_gJjJTeZ4m68XmrzjRaLQOs9z-BlAoqfIPmJdaUMzr4_dlJTBWBLWQiXjcZTUWZqCyd0mW7NjcFMlH7cYEsv3XkOcGvT8tRtr9O4CHVOR02pL9UFTJPGzl4k-0LRy5aneNmS9UuMdmKN1BPOSTDn1H7QpP8Bwp05AsMbBDKVvdjOm4GhJNORFu" 
    }
  ];

  const filteredItems = activeTab === "Tất cả" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeTab);

  const services = [
    { icon: 'face', text: 'Căng da mặt', desc: 'Công nghệ SMAS' },
    { icon: 'respiratory_rate', text: 'Nâng mũi S-Line', desc: 'Sụn tự thân' },
    { icon: 'female', text: 'Nâng ngực nội soi', desc: 'Túi Nano Chip' },
    { icon: 'accessibility_new', text: 'Hút mỡ tạo hình', desc: 'Vaser Lipo' },
    { icon: 'spa', text: 'Botox & Fillers', desc: 'Chính hãng Allergan' },
    { icon: 'healing', text: 'Trị sẹo thẩm mỹ', desc: 'Laser CO2 Fractional' },
  ];

  // Mock data for similar doctors
  const similarDoctors = [
    {
      id: 1,
      name: "BS. Trần Mai Anh",
      specialty: "Phẫu thuật thẩm mỹ",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAPTZcrIsdqToz9znpt0aJ08RQLW0jIse-Me_dlVB5cbn15hzeKkROD_YBo5qOLO2frBiOdUWX1Sfk0_3TmVTyCJB-qnIwcLoalIdq858Y6z2C_rzhe3db0WLHYkJe43sjb-Q3wa8XBmS6oJwqDzltmpzPDgm1YjQNbhFRdfcuP5KoUNHVUr3N8vO0ktLx9XqfKbp2ULX5V3uRDxs6Y-kecN2YjhxjrhQIF-slOeHkcJpB2IxO7FWjeNDwB3EXsGoomxgABbyGrxpLa",
      location: "Quận 3, TP. HCM",
      rating: 4.8
    },
    {
      id: 2,
      name: "ThS. BS. Lê Văn Minh",
      specialty: "Tạo hình vóc dáng",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB6wSh2P6m7dqJI50HGS9yNo2YALI6dBCGAHJyNO7UNntItB2JGtn_rUbws7XuGIvcxNdbC9b5QfNISpDF-60J0YVfxWlwRPzK3m7SSPQMD0IyfZUVZjb9nN7n-SF6uGk-9ZhMWGjP6VYFCsth70s_VDrCA43CyHX_WVoV_uUa4yUldRzaq8NfY4OHGbrDoITE35dRjNSbm6H1kwviCOp0tknJUDirhOjZAvKcwUeaRIKsmW5uYeZnCFVRnhdJZfwKZFlkIRbMJOg5O",
      location: "Quận 1, TP. HCM",
      rating: 4.9
    },
    {
      id: 3,
      name: "BS. Phạm Thu Hà",
      specialty: "Thẩm mỹ nội khoa",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBp42hX_QyYZqLMvyZDqhQQ3mj21ma3HwfpnbKV-MG3BtwWw5M1wG03WB1dDRLC7CWGxuqICpAsMhMEdGHENbzAeBvBhZ96w_yXKRgtkZrbLN-0nqMI38aQdYi_tgsf0Jnsell7T_XDQmewRzRxEXx12O3iJDwl4oGY8ajHnpR4kcJ6jRA80VEfyxbBgrp1KvSycPpDIoq6S-Tkclpmwqi06itMhh2R9fH-AwdMVEw0GO9KSu3WWDzJpa86R_Ftj4Ekf4ri7uipH2ek",
      location: "Quận 7, TP. HCM",
      rating: 4.7
    },
    {
        id: 4,
        name: "TS. BS. Kevin Le",
        specialty: "Phẫu thuật mũi",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDH1MSvNXIXdCzRy1ts4jsNlZTO9g24SVUP2iaoDXaAlBUqTi0ZV8uDlOjisZBf4067aSEQrWzOMGgGB_V2dbRo8eypWsk_U8EjZ1ujPNq9VPLd0TMGddsLOiGbyFEAZsrbuBL-dhw0HhTIiR2_8Zx_NsBer-ju_fHakD2qfFnGpTOFkkY1oxdlcZBzHTWzkqRfua1PVN3I--QVP22f3eMfdKcCGVftVDdbBvFO-cYocE5JZsYOquX4f8Ic3RnCUErwuGaxMFeT6U3G",
        location: "Quận 10, TP. HCM",
        rating: 4.9
      }
  ];

  // Logic for Image Lightbox Navigation
  const handleNextImage = useCallback(() => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) => 
        prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0
      );
    }
  }, [selectedImageIndex, filteredItems.length]);

  const handlePrevImage = useCallback(() => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) => 
        prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1
      );
    }
  }, [selectedImageIndex, filteredItems.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === 'ArrowRight') handleNextImage();
      if (e.key === 'ArrowLeft') handlePrevImage();
      if (e.key === 'Escape') setSelectedImageIndex(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, handleNextImage, handlePrevImage]);

  return (
    <>
      <div className="bg-slate-50 min-h-screen animate-in fade-in duration-300">
        {/* Navigation Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
          <button 
            onClick={onBack} 
            className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-secondary hover:text-brand-blue transition-colors"
          >
            <span className="material-symbols-outlined text-base">arrow_back</span>
            Quay lại danh sách
          </button>
        </div>

        <div className="max-w-7xl mx-auto w-full px-4 md:px-6 flex flex-col md:flex-row gap-6 pb-12">
          {/* Main Content Column */}
          <div className="flex-1 flex flex-col gap-0 bg-white rounded-xl border border-border-light shadow-sm overflow-hidden">
            {/* Profile Header */}
            <div className="p-6 border-b border-slate-100">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div 
                  className="w-32 h-32 shrink-0 bg-center bg-cover rounded-lg shadow-sm border border-slate-100" 
                  style={{ backgroundImage: `url("${doctorImage}")` }}
                ></div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h1 className="text-2xl font-bold tracking-tight text-slate-900 leading-none">{doctorName}</h1>
                    <span className="material-symbols-outlined text-brand-blue text-xl" title="Đã xác thực">verified</span>
                  </div>
                  <p className="text-secondary font-medium text-sm mb-3">Chuyên gia Phẫu thuật Thẩm mỹ & Tái tạo</p>
                  <div className="flex flex-wrap gap-x-5 gap-y-2">
                    <div className="flex items-center gap-1.5 text-xs text-secondary">
                      <span className="material-symbols-outlined text-base text-slate-400">location_on</span>
                      <span>Quận 1, TP. Hồ Chí Minh</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-secondary">
                      <span className="material-symbols-outlined text-base text-slate-400">workspace_premium</span>
                      <span>15+ năm kinh nghiệm</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-secondary">
                      <span className="material-symbols-outlined text-base text-slate-400">language</span>
                      <span>Tiếng Việt, Tiếng Anh</span>
                    </div>
                    <div className="flex items-center gap-1 text-yellow-500">
                      <span className="material-symbols-outlined text-sm fill-1" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="text-slate-700 text-xs font-bold">4.9 (124 đánh giá)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Introduction */}
            <div id="bio" className="px-6 py-5 border-b border-slate-100">
              <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Giới thiệu chuyên môn</h2>
              <div className="text-sm text-secondary leading-relaxed space-y-3">
                <p>Bác sĩ Julianne Moore là chuyên gia phẫu thuật thẩm mỹ hàng đầu với hơn 15 năm kinh nghiệm. Bà nổi tiếng với các kỹ thuật trẻ hóa khuôn mặt, nâng ngực và tạo hình cơ thể đạt độ tinh xảo và tự nhiên tuyệt đối.</p>
                <p>Phương châm của bác sĩ là kết hợp giữa công nghệ hiện đại và nhãn quan nghệ thuật tinh tế, đảm bảo mỗi ca phẫu thuật đều được cá nhân hóa tối đa theo tỷ lệ vàng của từng khách hàng.</p>
              </div>
            </div>

            {/* Achievements - NEW SECTION */}
            <div className="px-6 py-5 border-b border-slate-100 bg-white">
              <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Thành tựu nổi bật</h2>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-secondary">
                  <span className="material-symbols-outlined text-yellow-500 text-lg">emoji_events</span>
                  <span>Giải thưởng "Bàn Tay Vàng" Phẫu Thuật Thẩm Mỹ 2023</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-secondary">
                  <span className="material-symbols-outlined text-brand-blue text-lg">public</span>
                  <span>Báo cáo viên tại Hội nghị Thẩm mỹ Quốc tế Seoul 2022</span>
                </li>
                 <li className="flex items-start gap-2 text-sm text-secondary">
                  <span className="material-symbols-outlined text-emerald-500 text-lg">check_circle</span>
                  <span>Thực hiện thành công hơn 5.000 ca phẫu thuật</span>
                </li>
                 <li className="flex items-start gap-2 text-sm text-secondary">
                  <span className="material-symbols-outlined text-slate-400 text-lg">card_membership</span>
                  <span>Thành viên chính thức Hiệp hội Phẫu thuật Thẩm mỹ Hoa Kỳ (ASPS)</span>
                </li>
              </ul>
            </div>

            {/* Dịch vụ chuyên sâu - Dedicated Section */}
            <div id="procedures" className="px-6 py-8 border-b border-slate-100 bg-slate-50/50">
              <div className="flex justify-between items-end mb-6">
                <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400">Dịch vụ chuyên sâu</h2>
                <span className="text-[10px] text-brand-blue font-bold uppercase tracking-wide cursor-pointer hover:underline">Xem bảng giá niêm yết</span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {services.map((item, idx) => (
                  <div key={idx} className="group flex items-start gap-3 p-4 rounded-xl border border-slate-100 bg-white hover:border-brand-blue/30 hover:shadow-md transition-all cursor-pointer">
                    <div className="shrink-0 w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-brand-blue border border-blue-100 group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined">{item.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 group-hover:text-brand-blue transition-colors mb-0.5">{item.text}</h3>
                      <p className="text-[10px] text-secondary font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education & Certificates - Dedicated Section */}
            <div className="px-6 py-6 border-b border-slate-100">
              <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Học vấn & Chứng chỉ</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex gap-3">
                  <span className="material-symbols-outlined text-brand-blue text-2xl">school</span>
                  <div>
                    <h3 className="text-sm font-bold text-slate-800">Đại học Stanford</h3>
                    <p className="text-xs text-secondary">Tiến sĩ Y khoa (MD)</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="material-symbols-outlined text-brand-blue text-2xl">workspace_premium</span>
                  <div>
                    <h3 className="text-sm font-bold text-slate-800">Board Certified</h3>
                    <p className="text-xs text-secondary">Hiệp hội Phẫu thuật Thẩm mỹ Hoa Kỳ</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="material-symbols-outlined text-brand-blue text-2xl">military_tech</span>
                  <div>
                    <h3 className="text-sm font-bold text-slate-800">FACS Fellow</h3>
                    <p className="text-xs text-secondary">Thành viên ưu tú, American College of Surgeons</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Gallery (Updated) */}
            <div id="gallery" className="px-6 py-6 border-b border-slate-100">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400">Kết quả thực tế (Trước & Sau)</h2>
                <a href="#" className="text-brand-blue text-[10px] font-bold uppercase tracking-wider hover:underline">Tất cả ca bệnh</a>
              </div>
              
              {/* Category Filter */}
              <div className="flex gap-2 overflow-x-auto pb-4 mb-2 custom-scrollbar no-scrollbar">
                {galleryCategories.map(cat => (
                  <button 
                    key={cat}
                    onClick={() => { setActiveTab(cat); setSelectedImageIndex(null); }}
                    className={`px-3.5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wide whitespace-nowrap transition-all duration-200 border ${
                      activeTab === cat 
                        ? 'bg-brand-blue text-white border-brand-blue shadow-sm shadow-blue-200' 
                        : 'bg-white text-slate-500 border-slate-200 hover:bg-slate-50 hover:border-slate-300'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Filtered Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 animate-in fade-in duration-300">
                {filteredItems.map((item, idx) => (
                  <div key={idx} className="group cursor-pointer" onClick={() => setSelectedImageIndex(idx)}>
                    <div className="relative flex gap-0.5 h-32 sm:h-40 rounded-lg overflow-hidden border border-slate-200 bg-slate-100">
                      <div className="flex-1 relative overflow-hidden">
                         <img 
                            src={item.before} 
                            alt={`${item.title} - Trước`}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 origin-left"
                            loading="lazy"
                         />
                      </div>
                      <div className="flex-1 relative overflow-hidden">
                         <img 
                            src={item.after} 
                            alt={`${item.title} - Sau`}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 origin-right"
                            loading="lazy"
                         />
                      </div>
                      
                      {/* Badge Labels */}
                      <div className="absolute inset-x-0 bottom-0 p-1 flex justify-between items-end bg-gradient-to-t from-black/60 to-transparent pt-6 pointer-events-none">
                        <span className="bg-black/50 backdrop-blur-[2px] text-white text-[7px] px-1.5 py-0.5 rounded font-medium uppercase tracking-wider border border-white/10">Trước</span>
                        <span className="bg-brand-blue/90 backdrop-blur-[2px] text-white text-[7px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider border border-white/10">Sau</span>
                      </div>
                      {/* Overlay Hint */}
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                        <span className="bg-black/50 backdrop-blur text-white px-2 py-1 rounded-full text-[10px] flex items-center gap-1">
                          <span className="material-symbols-outlined text-sm">zoom_in</span> Xem chi tiết
                        </span>
                      </div>
                    </div>
                    <div className="mt-2">
                       <span className="text-[9px] text-brand-blue font-bold uppercase tracking-wider block mb-0.5">{item.category}</span>
                       <p className="text-[10px] font-bold text-slate-700 truncate group-hover:text-brand-blue transition-colors">{item.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div id="reviews" className="px-6 py-6 border-b border-slate-100">
              <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Đánh giá khách hàng</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { initial: "SM", name: "Sarah M.", content: "Bác sĩ Moore thực sự là một nghệ sĩ. Tôi rất hài lòng với kết quả tự nhiên sau khi nâng mũi.", time: "2 tuần trước" },
                  { initial: "DL", name: "David L.", content: "Dịch vụ chuyên nghiệp từ khâu tư vấn đến hậu phẫu. Bác sĩ rất tận tâm và giàu chuyên môn.", time: "1 tháng trước" }
                ].map((review, idx) => (
                  <div key={idx} className="flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div className="size-6 rounded-full bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-700">{review.initial}</div>
                        <span className="text-xs font-bold text-slate-900">{review.name}</span>
                      </div>
                      <div className="flex text-yellow-500 scale-75 origin-right">
                        {[1,2,3,4,5].map(i => <span key={i} className="material-symbols-outlined text-sm fill-1" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>)}
                      </div>
                    </div>
                    <p className="text-xs text-secondary italic leading-relaxed">"{review.content}"</p>
                    <span className="text-[9px] text-slate-400 uppercase font-medium">Đã xác thực • {review.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Similar Doctors Section - Updated to Horizontal Carousel */}
            <div className="px-6 py-8 bg-slate-50/50">
                <div className="flex justify-between items-center mb-5">
                    <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400">Bác sĩ tương tự</h2>
                    <button className="text-[10px] font-bold text-brand-blue uppercase hover:underline">Xem tất cả</button>
                </div>
                <div className="flex gap-4 overflow-x-auto pb-4 -mx-2 px-2 snap-x custom-scrollbar">
                    {similarDoctors.map(doctor => (
                        <div key={doctor.id} className="min-w-[200px] w-[220px] snap-start bg-white border border-border-light rounded-lg overflow-hidden hover:shadow-md transition-all cursor-pointer group flex-shrink-0">
                            <div className="aspect-[4/3] overflow-hidden bg-slate-100 relative">
                                <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                                <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-1.5 py-0.5 rounded text-[9px] font-bold flex items-center gap-0.5 shadow-sm">
                                    <span className="material-symbols-outlined text-[10px] text-yellow-500 fill-1" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                    {doctor.rating}
                                </div>
                            </div>
                            <div className="p-3">
                                <h3 className="text-xs font-bold text-slate-900 group-hover:text-brand-blue transition-colors truncate">{doctor.name}</h3>
                                <p className="text-[10px] text-brand-blue font-bold uppercase tracking-wider mb-2 truncate">{doctor.specialty}</p>
                                <div className="flex items-center gap-1 text-[10px] text-secondary truncate">
                                    <span className="material-symbols-outlined text-[12px]">location_on</span>
                                    {doctor.location}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="w-full md:w-72 shrink-0">
            <div className="sticky top-[84px] space-y-4">
              <div className="bg-white rounded-xl border border-border-light p-5 shadow-sm">
                <h3 className="text-sm font-bold text-slate-900 mb-4">Lịch hẹn tư vấn</h3>
                <div className="space-y-3 mb-5">
                  <div className="flex items-center justify-between text-xs py-2 border-b border-slate-50">
                    <span className="text-secondary">Phí tư vấn</span>
                    <span className="font-bold text-emerald-600 uppercase">Miễn phí</span>
                  </div>
                  <div className="flex items-center justify-between text-xs py-2 border-b border-slate-50">
                    <span className="text-secondary">Thời gian TB</span>
                    <span className="font-bold text-slate-900">30 - 45 phút</span>
                  </div>
                  <div className="flex items-center justify-between text-xs py-2">
                    <span className="text-secondary">Hình thức</span>
                    <span className="font-bold text-slate-900">Trực tiếp / Online</span>
                  </div>
                </div>
                {/* Updated Action Buttons Layout */}
                <div className="flex flex-col gap-2.5 mb-2">
                  <button 
                    className="w-full bg-brand-blue text-white text-xs font-bold h-10 rounded uppercase tracking-wide hover:bg-blue-700 transition-all shadow-md shadow-blue-200 active:scale-[0.98] flex items-center justify-center gap-1"
                  >
                    <span className="material-symbols-outlined text-sm">videocam</span>
                    Tư vấn Video
                  </button>
                  <div className="flex gap-2">
                     <button 
                        onClick={() => setIsBookingModalOpen(true)}
                        className="flex-1 bg-emerald-50 text-emerald-700 border border-emerald-100 text-xs font-bold h-10 rounded uppercase tracking-wide hover:bg-emerald-100 transition-colors flex items-center justify-center gap-1"
                     >
                        <span className="material-symbols-outlined text-sm">calendar_month</span>
                        Đặt lịch hẹn
                     </button>
                     <button 
                        onClick={() => setIsChatOpen(true)}
                        className="flex-1 border border-brand-blue text-brand-blue bg-blue-50/50 text-xs font-bold h-10 rounded uppercase tracking-wide hover:bg-blue-100 transition-colors flex items-center justify-center gap-1"
                     >
                        <span className="material-symbols-outlined text-sm">chat</span>
                        Nhắn tin
                     </button>
                  </div>
                </div>
                <p className="text-[10px] text-center text-secondary italic">Phản hồi trung bình trong 15 phút</p>
              </div>
              <div className="bg-white rounded-xl border border-border-light p-2 shadow-sm overflow-hidden flex flex-col">
                <a href="#bio" className="flex items-center gap-3 px-3 py-2.5 rounded text-xs font-bold text-brand-blue bg-blue-50 mb-1">
                  <span className="material-symbols-outlined text-lg">person</span>
                  Tổng quan hồ sơ
                </a>
                <a href="#procedures" className="flex items-center gap-3 px-3 py-2.5 rounded text-xs font-semibold text-secondary hover:bg-slate-50 mb-1">
                  <span className="material-symbols-outlined text-lg">medical_services</span>
                  Dịch vụ chuyên môn
                </a>
                <a href="#gallery" className="flex items-center gap-3 px-3 py-2.5 rounded text-xs font-semibold text-secondary hover:bg-slate-50 mb-1">
                  <span className="material-symbols-outlined text-lg">photo_library</span>
                  Thư viện hình ảnh
                </a>
                <a href="#reviews" className="flex items-center gap-3 px-3 py-2.5 rounded text-xs font-semibold text-secondary hover:bg-slate-50">
                  <span className="material-symbols-outlined text-lg">reviews</span>
                  Đánh giá từ bệnh nhân
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 z-[110] bg-black/95 backdrop-blur-sm flex items-center justify-center animate-in fade-in duration-200">
          {/* Close Button */}
          <button 
            onClick={() => setSelectedImageIndex(null)}
            className="absolute top-4 right-4 text-white/50 hover:text-white hover:bg-white/10 p-2 rounded-full transition-colors z-[120]"
          >
             <span className="material-symbols-outlined text-3xl">close</span>
          </button>

          {/* Navigation - Left */}
          <button 
            onClick={handlePrevImage}
            className="absolute left-4 text-white/50 hover:text-white hover:bg-white/10 p-2 rounded-full transition-colors z-[120] hidden md:block"
          >
             <span className="material-symbols-outlined text-4xl">chevron_left</span>
          </button>

          {/* Navigation - Right */}
          <button 
             onClick={handleNextImage}
             className="absolute right-4 text-white/50 hover:text-white hover:bg-white/10 p-2 rounded-full transition-colors z-[120] hidden md:block"
          >
             <span className="material-symbols-outlined text-4xl">chevron_right</span>
          </button>

          {/* Main Content */}
          <div className="w-full max-w-7xl h-full p-4 md:p-10 flex flex-col justify-center pointer-events-none">
             <div className="text-center mb-6 pointer-events-auto">
                <span className="text-brand-blue font-bold uppercase tracking-widest text-xs mb-1 block">{filteredItems[selectedImageIndex].category}</span>
                <h3 className="text-white text-xl font-bold">{filteredItems[selectedImageIndex].title}</h3>
                <p className="text-slate-400 text-xs mt-1">Sử dụng phím mũi tên để chuyển ảnh</p>
             </div>

             <div className="flex flex-col md:flex-row gap-4 items-center justify-center pointer-events-auto h-full max-h-[70vh]">
                {/* Before Image */}
                <div className="relative h-full flex-1 rounded-lg overflow-hidden border border-white/10 group">
                   <img 
                      src={filteredItems[selectedImageIndex].before} 
                      alt="Before" 
                      className="w-full h-full object-contain bg-black/50"
                   />
                   <span className="absolute top-4 left-4 bg-black/60 backdrop-blur text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-wider border border-white/10">Trước</span>
                </div>
                
                {/* After Image */}
                 <div className="relative h-full flex-1 rounded-lg overflow-hidden border border-white/10 border-l-4 border-l-brand-blue">
                   <img 
                      src={filteredItems[selectedImageIndex].after} 
                      alt="After" 
                      className="w-full h-full object-contain bg-black/50"
                   />
                   <span className="absolute top-4 left-4 bg-brand-blue/90 backdrop-blur text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-wider border border-white/10">Sau</span>
                </div>
             </div>
             
             {/* Mobile Nav Controls (Bottom) */}
             <div className="flex md:hidden justify-center gap-8 mt-6 pointer-events-auto">
                <button onClick={handlePrevImage} className="text-white p-2 bg-white/10 rounded-full"><span className="material-symbols-outlined">chevron_left</span></button>
                <button onClick={handleNextImage} className="text-white p-2 bg-white/10 rounded-full"><span className="material-symbols-outlined">chevron_right</span></button>
             </div>
          </div>
        </div>
      )}

      {isBookingModalOpen && (
        <BookingModal 
          doctorName={doctorName} 
          onClose={() => setIsBookingModalOpen(false)} 
        />
      )}
      
      {isChatOpen && (
        <ChatWindow 
          doctorName={doctorName}
          doctorImage={doctorImage}
          onClose={() => setIsChatOpen(false)}
        />
      )}
    </>
  );
};

export default DoctorProfile;
import React, { useState } from 'react';

interface DoctorListingProps {
  onBack: () => void;
  onViewProfile: () => void;
}

const DoctorListing: React.FC<DoctorListingProps> = ({ onBack, onViewProfile }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  
  // Mock data matching the design image
  const doctors = [
    {
      id: 1,
      name: "TS. BS. Nguyễn Văn An",
      specialty: "Phẫu thuật tạo hình",
      experience: "15 năm kinh nghiệm",
      location: "Bệnh viện Thẩm mỹ Kangnam, Hà Nội",
      skill: "Chuyên gia nâng mũi cấu trúc",
      languages: "Tiếng Việt, Tiếng Anh",
      rating: 4.9,
      reviewCount: 245,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAPTZcrIsdqToz9znpt0aJ08RQLW0jIse-Me_dlVB5cbn15hzeKkROD_YBo5qOLO2frBiOdUWX1Sfk0_3TmVTyCJB-qnIwcLoalIdq858Y6z2C_rzhe3db0WLHYkJe43sjb-Q3wa8XBmS6oJwqDzltmpzPDgm1YjQNbhFRdfcuP5KoUNHVUr3N8vO0ktLx9XqfKbp2ULX5V3uRDxs6Y-kecN2YjhxjrhQIF-slOeHkcJpB2IxO7FWjeNDwB3EXsGoomxgABbyGrxpLa",
      verified: true
    },
    {
      id: 2,
      name: "ThS. BS. Lê Thị Mai",
      specialty: "Da liễu thẩm mỹ",
      experience: "10 năm kinh nghiệm",
      location: "Phòng khám Da liễu Sài Gòn, TP. HCM",
      skill: "Điều trị nám, tàn nhang laser",
      languages: "Tiếng Việt, Tiếng Pháp",
      rating: 4.8,
      reviewCount: 189,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBp42hX_QyYZqLMvyZDqhQQ3mj21ma3HwfpnbKV-MG3BtwWw5M1wG03WB1dDRLC7CWGxuqICpAsMhMEdGHENbzAeBvBhZ96w_yXKRgtkZrbLN-0nqMI38aQdYi_tgsf0Jnsell7T_XDQmewRzRxEXx12O3iJDwl4oGY8ajHnpR4kcJ6jRA80VEfyxbBgrp1KvSycPpDIoq6S-Tkclpmwqi06itMhh2R9fH-AwdMVEw0GO9KSu3WWDzJpa86R_Ftj4Ekf4ri7uipH2ek",
      verified: true
    },
    {
      id: 3,
      name: "PGS. TS. BS. Trần Minh Đức",
      specialty: "Phẫu thuật thẩm mỹ",
      experience: "25 năm kinh nghiệm",
      location: "Bệnh viện TW Quân đội 108, Hà Nội",
      skill: "Chuyên gia hút mỡ & tạo hình thành bụng",
      languages: "Tiếng Việt, Tiếng Đức",
      rating: 5.0,
      reviewCount: 512,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB6wSh2P6m7dqJI50HGS9yNo2YALI6dBCGAHJyNO7UNntItB2JGtn_rUbws7XuGIvcxNdbC9b5QfNISpDF-60J0YVfxWlwRPzK3m7SSPQMD0IyfZUVZjb9nN7n-SF6uGk-9ZhMWGjP6VYFCsth70s_VDrCA43CyHX_WVoV_uUa4yUldRzaq8NfY4OHGbrDoITE35dRjNSbm6H1kwviCOp0tknJUDirhOjZAvKcwUeaRIKsmW5uYeZnCFVRnhdJZfwKZFlkIRbMJOg5O",
      verified: true
    },
    {
      id: 4,
      name: "BS. Phạm Thu Thảo",
      specialty: "Nha khoa thẩm mỹ",
      experience: "7 năm kinh nghiệm",
      location: "Nha khoa Paris, Đà Nẵng",
      skill: "Thiết kế nụ cười & Dán sứ Veneer",
      languages: "Tiếng Việt, Tiếng Nhật",
      rating: 4.7,
      reviewCount: 96,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDH1MSvNXIXdCzRy1ts4jsNlZTO9g24SVUP2iaoDXaAlBUqTi0ZV8uDlOjisZBf4067aSEQrWzOMGgGB_V2dbRo8eypWsk_U8EjZ1ujPNq9VPLd0TMGddsLOiGbyFEAZsrbuBL-dhw0HhTIiR2_8Zx_NsBer-ju_fHakD2qfFnGpTOFkkY1oxdlcZBzHTWzkqRfua1PVN3I--QVP22f3eMfdKcCGVftVDdbBvFO-cYocE5JZsYOquX4f8Ic3RnCUErwuGaxMFeT6U3G",
      verified: true
    }
  ];

  const filteredDoctors = doctors.filter(doctor => 
    doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-slate-50 min-h-screen animate-in fade-in duration-300 font-sans">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center gap-2 text-[10px] uppercase font-bold tracking-wider text-slate-500">
          <button onClick={onBack} className="hover:text-brand-blue">Trang chủ</button>
          <span className="text-slate-300">/</span>
          <span className="text-slate-900">Danh sách Bác sĩ</span>
        </div>
      </div>

      {/* Page Title */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8">
        <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
          Danh sách Bác sĩ Thẩm mỹ Toàn quốc
        </h1>
        <p className="text-sm text-secondary">
          Tìm kiếm và đặt lịch với 1,200+ chuyên gia thẩm mỹ hàng đầu tại Việt Nam
        </p>
      </div>

      {/* Search & Sort Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8">
        <div className="bg-white p-2 rounded-lg border border-border-light shadow-sm flex flex-col md:flex-row gap-4 items-center">
          <div className="flex-1 flex items-center gap-3 px-3 w-full">
            <span className="material-symbols-outlined text-slate-400">search</span>
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm tên bác sĩ, chuyên khoa hoặc bệnh lý..." 
              className="w-full border-none focus:ring-0 text-sm py-2 bg-transparent placeholder:text-slate-400 font-medium"
            />
             {searchQuery && (
              <button onClick={() => setSearchQuery("")} className="text-slate-400 hover:text-slate-600">
                <span className="material-symbols-outlined text-lg">close</span>
              </button>
            )}
          </div>
          <div className="w-full md:w-auto border-t md:border-t-0 md:border-l border-slate-100 pl-0 md:pl-4">
            <div className="flex items-center gap-2 px-3 py-2">
              <span className="text-xs text-secondary font-medium whitespace-nowrap">Sắp xếp:</span>
              <select className="border-none bg-slate-50 rounded text-xs font-bold text-slate-700 py-1.5 pl-3 pr-8 focus:ring-0 cursor-pointer">
                <option>Phổ biến nhất</option>
                <option>Đánh giá cao nhất</option>
                <option>Mới nhất</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          
          {/* Sidebar Filters */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-5 rounded-xl border border-border-light shadow-sm">
              <h3 className="text-sm font-bold text-slate-900 mb-5 flex items-center gap-2">
                Bộ lọc nâng cao
              </h3>
              
              {/* Specialty Filter */}
              <div className="mb-6">
                <h4 className="text-[10px] font-bold text-brand-blue uppercase tracking-widest mb-3 flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">medical_services</span>
                  Chuyên khoa
                </h4>
                <div className="space-y-2.5">
                  <label className="flex items-center gap-2.5 cursor-pointer group">
                    <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-slate-300 text-brand-blue focus:ring-brand-blue" />
                    <span className="text-xs font-medium text-slate-600 group-hover:text-brand-blue transition-colors">Phẫu thuật tạo hình</span>
                  </label>
                  <label className="flex items-center gap-2.5 cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-brand-blue focus:ring-brand-blue" />
                    <span className="text-xs font-medium text-slate-600 group-hover:text-brand-blue transition-colors">Da liễu thẩm mỹ</span>
                  </label>
                  <label className="flex items-center gap-2.5 cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-brand-blue focus:ring-brand-blue" />
                    <span className="text-xs font-medium text-slate-600 group-hover:text-brand-blue transition-colors">Nha khoa thẩm mỹ</span>
                  </label>
                </div>
              </div>

              {/* Skills Filter - ADDED */}
              <div className="mb-6">
                <h4 className="text-[10px] font-bold text-brand-blue uppercase tracking-widest mb-3 flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">verified_user</span>
                  Kỹ năng chuyên sâu
                </h4>
                <div className="space-y-2.5">
                  <label className="flex items-center gap-2.5 cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-brand-blue focus:ring-brand-blue" />
                    <span className="text-xs font-medium text-slate-600 group-hover:text-brand-blue transition-colors">Nâng mũi cấu trúc</span>
                  </label>
                  <label className="flex items-center gap-2.5 cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-brand-blue focus:ring-brand-blue" />
                    <span className="text-xs font-medium text-slate-600 group-hover:text-brand-blue transition-colors">Điều trị nám</span>
                  </label>
                  <label className="flex items-center gap-2.5 cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-brand-blue focus:ring-brand-blue" />
                    <span className="text-xs font-medium text-slate-600 group-hover:text-brand-blue transition-colors">Hút mỡ bụng</span>
                  </label>
                  <label className="flex items-center gap-2.5 cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-brand-blue focus:ring-brand-blue" />
                    <span className="text-xs font-medium text-slate-600 group-hover:text-brand-blue transition-colors">Dán sứ Veneer</span>
                  </label>
                </div>
              </div>

              {/* Experience Filter */}
              <div className="mb-6">
                <h4 className="text-[10px] font-bold text-slate-900 uppercase tracking-widest mb-3 flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">history_edu</span>
                  Kinh nghiệm
                </h4>
                <select className="w-full text-xs border-slate-200 rounded-md py-2 focus:border-brand-blue focus:ring-brand-blue text-slate-600">
                  <option>Tất cả kinh nghiệm</option>
                  <option>Trên 10 năm</option>
                  <option>5 - 10 năm</option>
                </select>
              </div>

              {/* Location Filter */}
              <div className="mb-6">
                <h4 className="text-[10px] font-bold text-slate-900 uppercase tracking-widest mb-3 flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">location_on</span>
                  Khu vực
                </h4>
                <select className="w-full text-xs border-slate-200 rounded-md py-2 focus:border-brand-blue focus:ring-brand-blue text-slate-600">
                  <option>Toàn quốc</option>
                  <option>Hà Nội</option>
                  <option>TP. Hồ Chí Minh</option>
                  <option>Đà Nẵng</option>
                </select>
              </div>

              {/* Rating Filter */}
              <div className="mb-6">
                 <h4 className="text-[10px] font-bold text-slate-900 uppercase tracking-widest mb-3 flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">star</span>
                  Đánh giá
                </h4>
                <div className="space-y-2.5">
                  <label className="flex items-center gap-2.5 cursor-pointer group">
                    <input type="radio" name="rating" className="w-4 h-4 border-slate-300 text-brand-blue focus:ring-brand-blue" />
                    <span className="text-xs font-medium text-slate-600">4.5+ (Xuất sắc)</span>
                  </label>
                  <label className="flex items-center gap-2.5 cursor-pointer group">
                    <input type="radio" name="rating" className="w-4 h-4 border-slate-300 text-brand-blue focus:ring-brand-blue" />
                    <span className="text-xs font-medium text-slate-600">4.0+ (Tốt)</span>
                  </label>
                </div>
              </div>

              <button className="w-full bg-brand-blue text-white py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">
                Áp dụng bộ lọc
              </button>
            </div>
          </div>

          {/* Doctor List */}
          <div className="lg:col-span-3 space-y-4">
            {filteredDoctors.length > 0 ? (
              filteredDoctors.map((doctor) => (
                <div key={doctor.id} className="bg-white border border-border-light rounded-xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col md:flex-row gap-6 group">
                  {/* Doctor Image */}
                  <div className="w-full md:w-48 lg:w-56 shrink-0 relative overflow-hidden rounded-lg bg-teal-800">
                      <img 
                        src={doctor.image} 
                        alt={doctor.name} 
                        className="w-full h-48 md:h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500" 
                      />
                  </div>

                  {/* Doctor Info */}
                  <div className="flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2 group-hover:text-brand-blue transition-colors cursor-pointer" onClick={onViewProfile}>
                          {doctor.name}
                          {doctor.verified && <span className="material-symbols-outlined text-brand-blue text-lg" title="Đã xác thực">verified</span>}
                        </h2>
                        <p className="text-[10px] font-bold text-brand-blue uppercase tracking-widest mb-3">{doctor.specialty}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-3 mb-6">
                      <div className="flex items-start gap-2 text-xs text-secondary">
                        <span className="material-symbols-outlined text-base text-slate-400 mt-0.5">workspace_premium</span>
                        <span>{doctor.experience}</span>
                      </div>
                      <div className="flex items-start gap-2 text-xs text-secondary">
                        <span className="material-symbols-outlined text-base text-slate-400 mt-0.5">location_on</span>
                        <span>{doctor.location}</span>
                      </div>
                       <div className="flex items-start gap-2 text-xs text-secondary">
                        <span className="material-symbols-outlined text-base text-slate-400 mt-0.5">verified</span>
                        <span>{doctor.skill}</span>
                      </div>
                       <div className="flex items-start gap-2 text-xs text-secondary">
                        <span className="material-symbols-outlined text-base text-slate-400 mt-0.5">language</span>
                        <span>{doctor.languages}</span>
                      </div>
                    </div>

                    <div className="mt-auto flex items-center justify-between">
                       <div className="flex items-center gap-1.5 bg-amber-50 px-2 py-1 rounded">
                          <span className="material-symbols-outlined text-sm text-amber-500 fill-1" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                          <span className="text-sm font-bold text-slate-900">{doctor.rating}</span>
                          <span className="text-[10px] text-slate-500 font-medium">({doctor.reviewCount} đánh giá)</span>
                       </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="w-full md:w-40 shrink-0 flex flex-col gap-3 justify-center border-t md:border-t-0 md:border-l border-slate-100 pt-4 md:pt-0 md:pl-6">
                      <button 
                        onClick={onViewProfile}
                        className="w-full bg-brand-blue text-white py-2.5 rounded text-xs font-bold uppercase tracking-wider hover:bg-blue-700 transition-all shadow-md shadow-blue-100"
                      >
                          Xem hồ sơ
                      </button>
                      <button className="w-full bg-white text-brand-blue border border-brand-blue py-2.5 rounded text-xs font-bold uppercase tracking-wider hover:bg-blue-50 transition-colors">
                          Đặt lịch hẹn
                      </button>
                  </div>
                </div>
              ))
            ) : (
               <div className="flex flex-col items-center justify-center p-12 bg-white border border-border-light rounded-xl text-center">
                  <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4">
                     <span className="material-symbols-outlined text-slate-300 text-3xl">search_off</span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1">Không tìm thấy kết quả</h3>
                  <p className="text-xs text-secondary">Vui lòng thử lại với từ khóa khác.</p>
               </div>
            )}
          </div>
        </div>

        {/* Pagination */}
        {filteredDoctors.length > 0 && (
          <div className="flex justify-center items-center gap-2 mt-10">
              <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-brand-blue transition-colors">
                  <span className="material-symbols-outlined text-lg">chevron_left</span>
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-brand-blue text-white text-xs font-bold shadow-md shadow-blue-200">
                  1
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:border-brand-blue hover:text-brand-blue text-xs font-bold transition-colors">
                  2
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:border-brand-blue hover:text-brand-blue text-xs font-bold transition-colors">
                  3
              </button>
              <span className="w-8 h-8 flex items-center justify-center text-slate-400">...</span>
              <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:border-brand-blue hover:text-brand-blue text-xs font-bold transition-colors">
                  12
              </button>
               <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-brand-blue transition-colors">
                  <span className="material-symbols-outlined text-lg">chevron_right</span>
              </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorListing;
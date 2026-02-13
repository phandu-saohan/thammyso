import React from 'react';
import { Doctor } from '../types';

interface DoctorCardProps {
  doctor: Doctor;
  onClick?: () => void;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ doctor, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="group cursor-pointer transition-all duration-300 hover:shadow-md hover:border-brand-blue/30 hover:-translate-y-0.5 bg-white border border-border-light rounded-lg overflow-hidden flex flex-row md:flex-col h-full"
    >
      <div className="w-32 sm:w-36 md:w-full md:aspect-[1/1] shrink-0 overflow-hidden bg-slate-100 relative">
        <img 
          src={doctor.image} 
          alt={doctor.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 absolute inset-0 md:static" 
          loading="lazy"
        />
        {/* Optional: Add Online status indicator on mobile */}
        <div className="absolute top-2 left-2 w-2 h-2 bg-green-500 rounded-full border border-white md:hidden shadow-sm"></div>
      </div>
      
      <div className="p-3 flex flex-col flex-1 gap-1">
        <p className="text-[9px] font-bold text-brand-blue uppercase tracking-wider line-clamp-1">{doctor.specialty}</p>
        
        <h3 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-brand-blue transition-colors line-clamp-2 mb-0.5">{doctor.name}</h3>
        
        {/* Location Section - Added */}
        <div className="flex items-center gap-1 text-[10px] text-secondary mb-1">
           <span className="material-symbols-outlined text-[12px] shrink-0">location_on</span>
           <span className="truncate max-w-[120px] md:max-w-none">{doctor.location || 'TP. Hồ Chí Minh'}</span>
        </div>

        {/* Stats Section */}
        <div className="flex items-center gap-3 text-[10px] text-secondary font-medium mb-2">
          <div className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[12px]">school</span>
            <span>{doctor.experience} năm</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[12px] text-yellow-500 fill-1" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="text-slate-900 font-bold">{doctor.rating.toFixed(1)}</span>
          </div>
        </div>

        {/* Buttons Section - Added */}
        <div className="mt-auto grid grid-cols-2 gap-2">
           <button 
              className="flex items-center justify-center gap-1 bg-blue-50 text-brand-blue border border-blue-100 py-1.5 rounded text-[9px] font-bold uppercase tracking-wider hover:bg-brand-blue hover:text-white transition-all shadow-sm"
              onClick={(e) => {
                e.stopPropagation();
                // Logic for video consultation
              }}
           >
              <span className="material-symbols-outlined text-[14px]">videocam</span>
              <span className="hidden sm:inline">Tư vấn</span>
              <span className="inline sm:hidden">Video</span>
           </button>
           <button 
              className="flex items-center justify-center gap-1 bg-slate-50 text-slate-600 border border-slate-200 py-1.5 rounded text-[9px] font-bold uppercase tracking-wider hover:bg-slate-100 transition-all shadow-sm"
              onClick={onClick}
           >
              Hồ sơ
           </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
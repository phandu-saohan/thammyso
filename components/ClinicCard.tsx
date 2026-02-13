import React from 'react';
import { Clinic } from '../types';

interface ClinicCardProps {
  clinic: Clinic;
  onClick?: () => void;
}

const ClinicCard: React.FC<ClinicCardProps> = ({ clinic, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="group cursor-pointer transition-all duration-300 hover:shadow-md hover:border-brand-blue/30 hover:-translate-y-0.5 bg-white border border-border-light rounded-lg overflow-hidden flex flex-row lg:flex-col h-full"
    >
      <div className="w-28 sm:w-40 lg:w-full lg:aspect-video shrink-0 overflow-hidden relative">
        <img 
          src={clinic.image} 
          alt={clinic.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 absolute inset-0 lg:static" 
          loading="lazy"
        />
      </div>
      <div className="p-3 lg:p-4 flex flex-col flex-1">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-1 lg:mb-2 gap-1 lg:gap-0">
          <h3 className="text-sm font-bold text-slate-900 group-hover:text-brand-blue transition-colors line-clamp-1 lg:line-clamp-none">{clinic.name}</h3>
          <span className="text-[10px] font-bold text-slate-900 bg-slate-100 px-1.5 py-0.5 rounded w-fit">{clinic.rating.toFixed(1)} ★</span>
        </div>
        <p className="text-secondary text-[11px] flex items-center gap-1 mb-2 lg:mb-3 font-medium line-clamp-1 lg:line-clamp-none">
          <span className="material-symbols-outlined text-xs shrink-0">location_on</span> <span className="truncate">{clinic.location}</span>
        </p>
        <div className="flex flex-wrap gap-1.5 mb-3 lg:mb-4">
          {clinic.tags.map((tag, idx) => (
            <span key={idx} className="text-[9px] font-bold text-slate-500 bg-slate-50 border border-slate-100 px-2 py-0.5 uppercase tracking-tighter whitespace-nowrap">
              {tag}
            </span>
          ))}
        </div>
        <button className="w-full py-2 text-[10px] font-bold uppercase tracking-wider bg-slate-900 text-white rounded hover:bg-brand-blue transition-colors mt-auto">
          Đặt lịch tư vấn
        </button>
      </div>
    </div>
  );
};

export default ClinicCard;
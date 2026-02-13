import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  linkText: string;
  color?: 'blue' | 'gold';
  onClick?: () => void;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, linkText, color = 'blue', onClick }) => {
  const accentColorClass = color === 'blue' ? 'bg-brand-blue' : 'bg-brand-gold';
  const textColorClass = color === 'blue' ? 'text-brand-blue' : 'text-brand-gold';

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-3 mb-6">
      <div>
        <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 mb-1">
          <span className={`w-1.5 h-6 ${accentColorClass} rounded-full`}></span>
          {title}
        </h2>
        <p className="text-secondary text-[11px] font-medium ml-3.5 line-clamp-1 sm:line-clamp-none">{subtitle}</p>
      </div>
      <a 
        href="#" 
        onClick={handleClick}
        className={`text-[11px] font-bold ${textColorClass} uppercase tracking-wider hover:underline flex items-center gap-1 self-end sm:self-auto`}
      >
        {linkText} <span className="material-symbols-outlined text-sm">arrow_forward</span>
      </a>
    </div>
  );
};

export default SectionHeader;
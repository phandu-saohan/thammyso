import React from 'react';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section className="bg-white border-b border-border-light">
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {FEATURES.map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center">
                <span className="material-symbols-outlined text-brand-blue text-lg">{feature.icon}</span>
              </div>
              <span className="text-[11px] font-bold text-slate-700 uppercase tracking-tight">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
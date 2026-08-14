import React from 'react';
import { GraduationCap, HeartHandshake, ShieldCheck, Trophy, Sparkles, ArrowRight } from 'lucide-react';
import { TRUST_BAR_ITEMS, SCHOOL_INFO } from '../data/schoolData';

export const TrustBar: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-[#0864B8]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-[#FFA500]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#078A9A]" />;
      case 'Trophy':
        return <Trophy className="w-6 h-6 text-[#0864B8]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#0864B8]" />;
    }
  };

  return (
    <section className="relative -mt-6 sm:-mt-8 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {TRUST_BAR_ITEMS.map((item, index) => (
          <div
            key={item.id}
            className="kjs-card bg-[#DCEAFF]/40 backdrop-blur-xs p-6 rounded-[24px] border border-blue-100/90 shadow-lg shadow-blue-900/5 hover:border-blue-300 hover:bg-[#DCEAFF]/60 transition-all duration-300 flex items-start gap-4 group"
          >
            <div className="w-13 h-13 rounded-2xl bg-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform duration-300 border border-blue-50">
              {getIcon(item.icon)}
            </div>

            <div className="flex-1">
              <h3 className="font-display font-bold text-base text-[#00549F] mb-1 leading-snug group-hover:text-[#0864B8] transition-colors">
                {item.title}
              </h3>
              
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};


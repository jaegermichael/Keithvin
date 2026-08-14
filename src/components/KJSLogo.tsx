import React from 'react';

interface KJSLogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'compact';
  showTagline?: boolean;
}

export const KJSLogo: React.FC<KJSLogoProps> = ({
  className = '',
  variant = 'dark',
  showTagline = true
}) => {
  if (variant === 'compact') {
    return (
      <div className={`flex items-center gap-2.5 ${className}`}>
        <div className="relative flex items-center justify-center w-10 h-10 rounded-2xl bg-gradient-to-br from-[#FFA500] to-[#E69500] shadow-md shadow-amber-500/20 text-white font-display font-bold text-lg tracking-wider border-2 border-white/80">
          <span className="drop-shadow-sm">KJS</span>
          <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#0864B8] rounded-full border-2 border-white flex items-center justify-center">
            <span className="w-1.5 h-1.5 bg-[#FFA500] rounded-full"></span>
          </div>
        </div>
        <div className="flex flex-col">
          <span className="font-display font-bold text-lg leading-none text-white">
            KEITHVIN
          </span>
          <span className="text-[10px] font-semibold tracking-wider uppercase text-blue-200">
            Junior School
          </span>
        </div>
      </div>
    );
  }

  const isLight = variant === 'light';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* School Crest Emblem */}
      <div className="relative group cursor-pointer">
        <div className="w-11 h-11 md:w-12 md:h-12 rounded-2xl bg-gradient-to-br from-[#0864B8] via-[#00549F] to-[#043b70] p-0.5 shadow-lg shadow-blue-900/20 border-2 border-white/90 flex items-center justify-center relative overflow-hidden transition-transform duration-300 group-hover:scale-105">
          {/* Subtle background rays */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-400/30 via-transparent to-transparent"></div>
          
          <div className="flex flex-col items-center justify-center text-center">
            <svg className="w-5 h-5 text-[#FFA500] drop-shadow" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
            <span className="text-[10px] font-display font-extrabold tracking-wider text-white leading-tight">
              KJS
            </span>
          </div>
        </div>

        {/* Small floating mini badge */}
        <div className="absolute -bottom-1 -right-1 bg-[#FFA500] text-[#00549F] text-[8px] font-bold px-1 py-0.2 rounded-full border border-white shadow-sm">
          ★
        </div>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className="font-display font-black text-xl md:text-2xl tracking-wide text-[#FFA500] drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,0.15)]">
            KEITHVIN
          </span>
          <span className={`text-xs md:text-sm font-extrabold tracking-wider px-1.5 py-0.5 rounded-md ${
            isLight ? 'bg-blue-100 text-[#0864B8]' : 'bg-white/15 text-blue-100 backdrop-blur-sm'
          }`}>
            (KJS)
          </span>
        </div>
        <div className="flex items-center gap-1">
          <span className={`text-xs md:text-[13px] font-bold tracking-widest uppercase ${
            isLight ? 'text-[#00549F]' : 'text-blue-100'
          }`}>
            JUNIOR SCHOOL
          </span>
        </div>
        {showTagline && (
          <span className={`text-[11px] font-medium italic mt-0.5 hidden sm:block ${
            isLight ? 'text-slate-500' : 'text-blue-200/90'
          }`}>
            ...Nurturing Little Champions
          </span>
        )}
      </div>
    </div>
  );
};

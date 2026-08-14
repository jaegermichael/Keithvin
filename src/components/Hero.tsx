import React from 'react';
import { ArrowRight, Sparkles, Phone, MessageCircle, Star, CheckCircle2, ShieldCheck } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';
import { kjsFieldtripImg, kjsSwimmingImg, kjsGraduateImg } from '../data/images';

interface HeroProps {
  onRegisterClick: () => void;
  onExploreClick: () => void;
  onOpenTour: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onRegisterClick,
  onExploreClick,
  onOpenTour
}) => {
  const whatsappUrl = `https://wa.me/${SCHOOL_INFO.whatsappNumber}?text=${encodeURIComponent(SCHOOL_INFO.whatsappDefaultMsg)}`;

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-[#00549F] via-[#0864B8] to-[#078A9A] text-white pt-8 pb-20 md:py-24">
      
      {/* Concentric Geometric Rings & Background Accents (Immersive UI Theme) */}
      <div className="absolute inset-0 opacity-15 pointer-events-none overflow-hidden">
        <div className="absolute top-6 left-6 w-80 h-80 border-[32px] border-white rounded-full"></div>
        <div className="absolute -bottom-16 right-[15%] w-[450px] h-[450px] border-[24px] border-[#FFA500] rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 border-[16px] border-white/40 rounded-full"></div>
      </div>
      
      {/* Background Dots Pattern */}
      <div className="absolute inset-0 bg-dots-pattern opacity-10 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Copy & Actions */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left z-10">
            
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs sm:text-sm font-bold tracking-widest uppercase shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#FFA500] fill-current animate-pulse" />
              <span>Welcome to KJS</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-display font-black tracking-tight leading-[1.08] text-white">
                Nurturing Little <br />
                <span className="text-[#FFA500] drop-shadow-[0_2px_12px_rgba(0,0,0,0.3)]">
                  Champions
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-blue-50 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              A caring and inspiring environment where children learn, grow, discover their talents and build a strong foundation for the future. Enrolling Early Childhood (ECD) and Primary Classes.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onRegisterClick}
                className="w-full sm:w-auto px-9 py-4 bg-[#FFA500] hover:bg-[#e69500] text-white font-display font-bold text-base sm:text-lg rounded-2xl shadow-xl shadow-amber-500/30 hover:shadow-amber-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2.5 cursor-pointer group"
              >
                <span>Start Admission</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreClick}
                className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold text-base rounded-2xl border border-white/30 backdrop-blur-md transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Explore Our School</span>
              </button>
            </div>

            {/* Direct Phone & WhatsApp Callout */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3.5 text-xs sm:text-sm text-blue-100">
              <a 
                href={`tel:${SCHOOL_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 font-bold text-white hover:text-[#FFA500] transition-colors bg-white/10 backdrop-blur-xs px-3.5 py-2 rounded-xl border border-white/20"
              >
                <Phone className="w-4 h-4 text-[#FFA500]" />
                <span>Call: {SCHOOL_INFO.phone}</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-semibold text-white hover:text-emerald-200 transition-colors bg-emerald-500/90 hover:bg-emerald-500 px-3.5 py-2 rounded-xl border border-emerald-300/40 shadow-sm"
              >
                <MessageCircle className="w-4 h-4 fill-current text-white" />
                <span>WhatsApp Admissions</span>
              </a>
            </div>

            {/* Quick feature check pills */}
            <div className="pt-4 border-t border-white/15 grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs text-blue-100 font-medium text-left">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#FFA500] shrink-0" />
                <span>ECD & Primary Grade 1-7</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#FFA500] shrink-0" />
                <span>Swimming & Full Sports</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#FFA500] shrink-0" />
                <span>Safe & Nurturing Campus</span>
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Flyer-Inspired 3-Card Photographic Collage */}
          <div className="lg:col-span-6 relative mt-4 lg:mt-0 flex justify-center items-center">
            
            {/* Background circular glow */}
            <div className="absolute w-[340px] sm:w-[480px] h-[340px] sm:h-[480px] bg-gradient-to-tr from-blue-400/30 via-teal-300/20 to-amber-300/20 rounded-full blur-2xl"></div>

            {/* Collage Container matching Immersive UI tilted cards */}
            <div className="relative w-full max-w-[520px] h-[420px] sm:h-[480px] flex items-center justify-center">

              {/* Card 1 (Left - School uniform blazers & field trip at monument) */}
              <div className="absolute left-0 top-6 sm:top-8 w-[170px] sm:w-[210px] h-[230px] sm:h-[290px] rounded-[32px] bg-white p-2.5 sm:p-3 shadow-2xl shadow-blue-950/60 -rotate-6 hover:rotate-0 hover:z-30 hover:scale-105 transition-all duration-300 group cursor-pointer border-4 border-white">
                <div className="relative w-full h-full rounded-[24px] overflow-hidden bg-slate-100">
                  <img
                    src={kjsFieldtripImg}
                    alt="Keithvin pupils in sky blue blazers on educational excursion"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-3">
                    <span className="text-[10px] sm:text-xs font-bold text-white leading-tight drop-shadow">
                      Heritage Excursions
                    </span>
                  </div>
                </div>
              </div>

              {/* Card 2 (Center - Water park slide & swimming session) */}
              <div className="absolute z-20 top-0 w-[190px] sm:w-[230px] h-[250px] sm:h-[310px] rounded-[40px] bg-white p-2.5 sm:p-3 shadow-2xl shadow-blue-950/70 rotate-0 hover:scale-105 transition-all duration-300 group cursor-pointer border-[6px] border-white">
                <div className="relative w-full h-full rounded-[30px] overflow-hidden bg-slate-100">
                  <img
                    src={kjsSwimmingImg}
                    alt="KJS pupils and coach at swimming pool water slide"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-2.5 right-2.5 bg-[#FFA500] text-white text-[9px] sm:text-[10px] font-bold px-2.5 py-1 rounded-full shadow-md">
                    Swimming Gala
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-3">
                    <span className="text-[10px] sm:text-xs font-bold text-white leading-tight drop-shadow">
                      Active Swimming
                    </span>
                  </div>
                </div>
              </div>

              {/* Card 3 (Right - Graduate Champion in Cap & Gown) */}
              <div className="absolute right-0 top-8 sm:top-12 w-[170px] sm:w-[210px] h-[230px] sm:h-[290px] rounded-[32px] bg-white p-2.5 sm:p-3 shadow-2xl shadow-blue-950/60 rotate-6 hover:rotate-0 hover:z-30 hover:scale-105 transition-all duration-300 group cursor-pointer border-4 border-white">
                <div className="relative w-full h-full rounded-[24px] overflow-hidden bg-slate-100">
                  <img
                    src={kjsGraduateImg}
                    alt="Keithvin Junior School graduate champion in gown with scroll"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-3">
                    <span className="text-[10px] sm:text-xs font-bold text-white leading-tight drop-shadow">
                      Little Champions
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Badge (Champion Badge) */}
              <div className="absolute -bottom-4 z-30 bg-gradient-to-r from-[#FFA500] to-[#FF8C00] text-[#002f5a] font-display font-extrabold px-5 py-2.5 rounded-full shadow-2xl border-2 border-white flex items-center gap-2 text-xs sm:text-sm animate-float-slow">
                <Star className="w-4 h-4 text-[#002f5a] fill-current" />
                <span>Nurturing Little Champions</span>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* Bottom Wave Divider */}
      <div className="absolute bottom-0 inset-x-0 leading-none">
        <svg className="w-full h-8 sm:h-12 text-[#F8FBFF]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C150,90 350,-40 500,60 C650,160 900,10 1200,40 L1200,120 L0,120 Z" fill="currentColor"></path>
        </svg>
      </div>
    </section>
  );
};

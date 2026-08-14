import React, { useState } from 'react';
import { Check, Star, Shield, GraduationCap, Heart, Trophy, ArrowRight, Sparkles, ChevronDown } from 'lucide-react';
import { WHY_CHOOSE_ITEMS, TESTIMONIALS, SCHOOL_INFO } from '../data/schoolData';

interface WhyChooseUsProps {
  onRegisterClick: () => void;
  onOpenTour: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({
  onRegisterClick,
  onOpenTour
}) => {
  const [selectedPillar, setSelectedPillar] = useState<number>(0);

  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6" />;
      case 'Heart':
        return <Heart className="w-6 h-6" />;
      case 'Shield':
        return <Shield className="w-6 h-6" />;
      case 'Trophy':
        return <Trophy className="w-6 h-6" />;
      default:
        return <Sparkles className="w-6 h-6" />;
    }
  };

  return (
    <section id="why-choose-us" className="py-20 bg-gradient-to-b from-[#00386b] via-[#004e94] to-[#0864B8] text-white relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute inset-0 bg-dots-pattern opacity-10 pointer-events-none"></div>
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Signature Orange Pill Badge */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          
          {/* Orange Badge matching the flyer */}
          <div className="inline-block">
            <span className="bg-[#FFA500] text-[#002f5a] font-display font-extrabold text-sm sm:text-base px-6 py-2 rounded-full shadow-lg tracking-wide uppercase">
              Why Choose Us
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white tracking-tight">
            Setting The Standard in Primary & ECD Education
          </h2>

          <p className="text-blue-100 text-base sm:text-lg max-w-2xl mx-auto">
            Keithvin Junior School provides the ideal blend of academic distinction, safety, loving educators, and comprehensive extracurricular growth.
          </p>
        </div>

        {/* The Signature Deep Blue Container from the flyer recreated with interactive depth */}
        <div className="bg-gradient-to-br from-[#002f5c] to-[#004585] rounded-[36px] border-2 border-white/20 shadow-2xl p-6 sm:p-10 lg:p-12 mb-16 relative overflow-hidden">
          
          {/* Background subtle badge */}
          <div className="absolute -bottom-10 -right-10 text-white/5 font-display font-black text-9xl select-none pointer-events-none">
            KJS
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: 4 Checklist Items directly from flyer */}
            <div className="lg:col-span-6 space-y-4">
              <p className="text-xs font-bold uppercase tracking-widest text-[#FFA500]">
                Key School Commitments
              </p>

              <div className="space-y-3">
                {WHY_CHOOSE_ITEMS.map((item, index) => {
                  const isSelected = selectedPillar === index;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setSelectedPillar(index)}
                      className={`w-full text-left p-4 rounded-2xl transition-all duration-200 border flex items-start gap-3.5 cursor-pointer ${
                        isSelected
                          ? 'bg-white/20 border-[#FFA500] shadow-lg transform translate-x-1'
                          : 'bg-white/5 hover:bg-white/10 border-white/10'
                      }`}
                    >
                      {/* Signature checkmark style */}
                      <div className={`w-7 h-7 rounded-xl flex items-center justify-center shrink-0 mt-0.5 font-bold ${
                        isSelected ? 'bg-[#FFA500] text-[#002f5a]' : 'bg-amber-400/20 text-[#FFA500]'
                      }`}>
                        <Check className="w-4 h-4 stroke-[3]" />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-display font-bold text-base sm:text-lg text-white">
                            {item.title}
                          </h3>
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                            isSelected ? 'bg-amber-400 text-blue-950' : 'bg-white/10 text-blue-200'
                          }`}>
                            {item.badge}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-blue-100/90 mt-1 leading-relaxed line-clamp-2">
                          {item.description}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right: Selected Pillar Deep-Dive Explorer */}
            <div className="lg:col-span-6 bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/20 flex flex-col justify-between h-full min-h-[380px]">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-[#FFA500] text-[#002f5a] rounded-2xl shadow-md">
                    {getPillarIcon(WHY_CHOOSE_ITEMS[selectedPillar].icon)}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                      Pillar {selectedPillar + 1}
                    </span>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                      {WHY_CHOOSE_ITEMS[selectedPillar].title}
                    </h3>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-blue-50 leading-relaxed">
                  {WHY_CHOOSE_ITEMS[selectedPillar].description}
                </p>

                <div className="pt-2 border-t border-white/15 space-y-2.5">
                  <p className="text-xs font-bold uppercase tracking-wider text-amber-300">
                    What this means for your child:
                  </p>
                  <ul className="space-y-2">
                    {WHY_CHOOSE_ITEMS[selectedPillar].detailedPoints.map((pt, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-blue-100">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#FFA500] shrink-0"></div>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Quick Action */}
              <div className="pt-6 mt-6 border-t border-white/15 flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs text-blue-200">
                  Ready to experience the Keithvin difference?
                </span>
                <button
                  onClick={onOpenTour}
                  className="px-4 py-2 bg-white text-[#003463] hover:bg-amber-300 font-bold text-xs rounded-xl transition-colors cursor-pointer"
                >
                  Book Campus Visit
                </button>
              </div>

            </div>

          </div>

        </div>

        {/* Parent Testimonials Carousel / Grid */}
        <div className="space-y-6">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#FFA500]">
              What Our Parents Say
            </p>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mt-1">
              Trusted By Loving Parents
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15 hover:bg-white/15 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-blue-50 italic leading-relaxed">
                    "{t.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 mt-4 border-t border-white/10">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FFA500] to-[#FF8C00] text-[#002f5a] font-display font-extrabold flex items-center justify-center text-sm shadow-md border-2 border-white">
                    {t.parentName.replace(/[^A-Za-z]/g, '').slice(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">{t.parentName}</h4>
                    <p className="text-[11px] text-blue-200">{t.childInfo}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

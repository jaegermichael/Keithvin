import React, { useState } from 'react';
import { Check, Star, Award, Users, BookOpen, Heart, ArrowRight } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';
import { kjsFieldtripImg } from '../data/images';

interface AboutSectionProps {
  onRegisterClick: () => void;
  onOpenTour: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onRegisterClick,
  onOpenTour
}) => {
  const [activeTab, setActiveTab] = useState<'mission' | 'vision' | 'values' | 'experience'>('mission');

  const tabContent = {
    mission: {
      title: "Our Mission",
      description: "To nurture every learner into a confident, disciplined, and high-achieving champion through holistic education, individualized mentorship, and strong moral grounding in a secure, joyful environment."
    },
    vision: {
      title: "Our Vision",
      description: "To be Zimbabwe's benchmark private junior institution renowned for academic distinction, vibrant character building, innovative discovery, and holistic childhood excellence."
    },
    values: {
      title: "Our Core Values",
      description: "Integrity, Excellence, Kindness, Curiosity, Discipline, and Teamwork. We instill these fundamental values daily in our classrooms, sports grounds, and community interactions."
    },
    experience: {
      title: "The KJS Experience",
      description: "At KJS, learning extends beyond textbooks. We integrate interactive science, weekly swimming, athletics, speech and debate, music, and heritage excursions to empower every child's unique passion."
    }
  };

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative background curve */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#DCEAFF]/60 border border-blue-100 text-[#00549F] text-xs sm:text-sm font-bold tracking-wider uppercase">
            <Award className="w-4 h-4 text-[#FFA500]" />
            <span>About Keithvin Junior School</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-slate-900 tracking-tight leading-tight">
            Growing Bright Minds. <br className="hidden sm:block" />
            <span className="text-[#0864B8]">Building Strong Character.</span>
          </h2>
          
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            At Keithvin Junior School, we believe every child is born a champion. Our role is to provide the warmth, guidance, academic rigor, and creative atmosphere to help them shine.
          </p>
        </div>

        {/* Grid: Image Showcase & Content Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Multi-photo layout with floating badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Photo with soft rounded frame */}
              <div className="rounded-[36px] overflow-hidden shadow-2xl border-4 border-white bg-slate-100 relative">
                <img
                  src={kjsFieldtripImg}
                  alt="Keithvin Junior School Class on Educational Excursion"
                  className="w-full h-[380px] sm:h-[420px] object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#003463]/85 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <p className="text-xs uppercase tracking-widest text-[#FFA500] font-bold">Child-Centered Learning</p>
                    <p className="text-lg font-display font-bold">Inspiring every child to reach their highest potential</p>
                  </div>
                </div>
              </div>

              {/* Floating Experience Badge */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-gradient-to-br from-[#0864B8] to-[#00549F] text-white p-5 rounded-[28px] shadow-2xl border-4 border-white max-w-[220px]">
                <div className="flex items-center gap-2 mb-1">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs font-bold bg-amber-400 text-blue-950 px-1.5 py-0.2 rounded font-mono">5.0</span>
                </div>
                <p className="text-xl font-display font-black leading-tight text-[#FFA500]">100%</p>
                <p className="text-xs text-blue-100 font-medium">Dedication to Child Safety & Quality Academics</p>
              </div>

              {/* Small Floating Student Count Card */}
              <div className="absolute -top-6 -left-4 sm:-left-6 bg-white p-3.5 rounded-[24px] shadow-xl border border-blue-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#DCEAFF]/60 text-[#00549F] flex items-center justify-center font-bold">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Small Class Sizes</p>
                  <p className="text-sm font-bold text-slate-900">Individual Attention</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right: Detailed Story & Tabs */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 leading-snug">
                A Joyful Place Where Potential Turns Into Achievement
              </h3>
              
              <p className="text-slate-600 leading-relaxed">
                Founded with a deep commitment to excellence, Keithvin Junior School (KJS) provides an exceptional educational foundation for children in Early Childhood Development (ECD A & B) and Primary School (Grades 1 through 7).
              </p>
              
              <p className="text-slate-600 leading-relaxed">
                Our approach blends academic rigor with warmth, moral grounding, digital readiness, athletics, swimming, and cultural appreciation. We foster curious minds and polite, well-mannered leaders.
              </p>
            </div>

            {/* Interactive Tabs */}
            <div className="bg-[#F8FBFF] p-2.5 rounded-[24px] border border-blue-100">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                {(['mission', 'vision', 'values', 'experience'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`py-2.5 px-3 rounded-2xl text-xs sm:text-sm font-bold capitalize transition-all duration-200 cursor-pointer ${
                      activeTab === tab
                        ? 'bg-[#0864B8] text-white shadow-md'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-blue-50'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="p-5 pt-4 mt-2 bg-white rounded-[20px] border border-blue-50 shadow-xs">
                <h4 className="font-display font-bold text-base text-[#00549F] mb-1.5 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#FFA500]" />
                  <span>{tabContent[activeTab].title}</span>
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {tabContent[activeTab].description}
                </p>
              </div>
            </div>

            {/* Key Checklist Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-sm font-medium text-slate-800">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Certified caring educators</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-slate-800">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Weekly swimming & sports</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-slate-800">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Regular educational field trips</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-slate-800">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Modern secure environment</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <button
                onClick={onRegisterClick}
                className="px-7 py-3.5 bg-[#FFA500] hover:bg-[#e69500] text-white font-display font-bold text-sm rounded-full shadow-lg shadow-amber-500/20 hover:shadow-xl transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Register for 2026 Intake</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenTour}
                className="px-6 py-3.5 bg-[#DCEAFF]/60 hover:bg-[#DCEAFF] text-[#00549F] font-bold text-sm rounded-full border border-blue-200 transition-colors cursor-pointer"
              >
                <span>Schedule a Campus Tour</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};


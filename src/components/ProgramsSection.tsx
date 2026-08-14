import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Users, 
  BookOpen, 
  Layers, 
  X, 
  ChevronRight,
  Waves,
  Activity,
  Compass,
  Palette,
  Laptop
} from 'lucide-react';
import { PROGRAMS_DATA } from '../data/schoolData';
import { Program } from '../types';

interface ProgramsSectionProps {
  onRegisterProgram: (programId: string) => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({ onRegisterProgram }) => {
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);

  return (
    <section id="programs" className="py-20 bg-[#F8FBFF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#DCEAFF]/60 border border-blue-100 text-[#00549F] text-xs sm:text-sm font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-[#FFA500]" />
            <span>Academic Excellence</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-slate-900 tracking-tight">
            What We Offer
          </h2>

          <p className="text-slate-600 text-base sm:text-lg">
            A strong foundation for every little champion. Discover our tailored academic and developmental programs designed for early childhood and primary years.
          </p>
        </div>

        {/* Two Main Hero Program Cards (ECD & Primary Classes) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {PROGRAMS_DATA.map((prog) => {
            return (
              <div
                key={prog.id}
                className="bg-white rounded-[32px] overflow-hidden border border-blue-100/80 shadow-xl shadow-blue-900/5 hover:shadow-2xl hover:border-blue-300 transition-all duration-300 flex flex-col group"
              >
                {/* Card Header Banner with Flyer-Matching Badges */}
                <div className="relative h-64 overflow-hidden bg-slate-100">
                  <img
                    src={prog.image}
                    alt={prog.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-between p-6">
                    
                    {/* Flyer Style Badge: Red for ECD, Teal for Primary */}
                    <div className="flex items-center justify-between">
                      <div
                        className="font-display font-extrabold text-white text-sm sm:text-base px-4 py-1.5 rounded-full shadow-lg uppercase tracking-wider"
                        style={{ backgroundColor: prog.badgeColor }}
                      >
                        {prog.badgeText}
                      </div>

                      <span className="bg-white/20 backdrop-blur-md text-white text-xs font-semibold px-3.5 py-1 rounded-full border border-white/30">
                        {prog.ageRange}
                      </span>
                    </div>

                    <div className="text-white">
                      <p className="text-amber-300 text-xs font-bold tracking-wider uppercase mb-1">
                        {prog.tagline}
                      </p>
                      <h3 className="font-display font-bold text-2xl text-white">
                        {prog.name}
                      </h3>
                    </div>

                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                      {prog.description}
                    </p>

                    {/* Schedule & Info */}
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#00549F] bg-[#DCEAFF]/40 p-3 rounded-2xl border border-blue-100 mb-6">
                      <Clock className="w-4 h-4 text-[#0864B8]" />
                      <span>Hours: {prog.schedule}</span>
                    </div>

                    {/* Key Highlights list */}
                    <div className="space-y-2.5">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        Key Curriculum Highlights
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {prog.highlights.slice(0, 4).map((h, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      onClick={() => onRegisterProgram(prog.id)}
                      className="w-full sm:flex-1 py-3.5 bg-[#FFA500] hover:bg-[#e69500] text-white font-display font-bold text-sm rounded-full shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Register for {prog.badgeText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => setSelectedProgram(prog)}
                      className="w-full sm:w-auto px-5 py-3.5 bg-[#DCEAFF]/50 hover:bg-[#DCEAFF] text-[#00549F] font-bold text-xs rounded-full border border-blue-200 transition-colors flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <span>View Details</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

        {/* Co-Curricular Enrichment Strip */}
        <div className="bg-white rounded-[32px] p-6 sm:p-8 border border-blue-100 shadow-md">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1 text-xs font-bold text-[#00549F] uppercase tracking-wider">
                <Layers className="w-3.5 h-3.5 text-[#FFA500]" />
                <span>All-Round Enrichment</span>
              </div>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900">
                Beyond The Classroom: Holistic Development
              </h3>
              <p className="text-slate-600 text-sm max-w-2xl">
                Every Keithvin pupil takes part in swimming, athletics, computer literacy, educational heritage trips, music, and leadership clubs.
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#0864B8] text-xs font-bold border border-blue-100 shadow-xs">
                <Waves className="w-3.5 h-3.5 text-[#0864B8]" />
                <span>Swimming</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-50 text-amber-800 text-xs font-bold border border-amber-200/80 shadow-xs">
                <Activity className="w-3.5 h-3.5 text-[#FFA500]" />
                <span>Athletics</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-teal-50 text-[#078A9A] text-xs font-bold border border-teal-100 shadow-xs">
                <Compass className="w-3.5 h-3.5 text-[#078A9A]" />
                <span>Field Trips</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-rose-50 text-rose-700 text-xs font-bold border border-rose-100 shadow-xs">
                <Palette className="w-3.5 h-3.5 text-rose-600" />
                <span>Arts & Music</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-sky-50 text-[#00549F] text-xs font-bold border border-sky-100 shadow-xs">
                <Laptop className="w-3.5 h-3.5 text-[#00549F]" />
                <span>ICT Labs</span>
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* Program Details Modal */}
      {selectedProgram && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-[36px] max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            
            <button
              onClick={() => setSelectedProgram(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div
                className="font-display font-extrabold text-white text-xs px-3.5 py-1 rounded-full uppercase tracking-wider"
                style={{ backgroundColor: selectedProgram.badgeColor }}
              >
                {selectedProgram.badgeText}
              </div>
              <span className="text-xs text-slate-500 font-semibold">{selectedProgram.ageRange}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mb-2">
              {selectedProgram.name}
            </h3>

            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              {selectedProgram.longDescription}
            </p>

            <div className="space-y-4 mb-6">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                Key Subjects & Learning Areas:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedProgram.keySubjects.map((subject, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 bg-slate-50 p-3 rounded-2xl">
                    <BookOpen className="w-4 h-4 text-[#0864B8] shrink-0" />
                    <span>{subject}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2 mb-8">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                What's Included:
              </h4>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600">
                {selectedProgram.highlights.map((h, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => {
                  const id = selectedProgram.id;
                  setSelectedProgram(null);
                  onRegisterProgram(id);
                }}
                className="w-full sm:flex-1 py-3.5 bg-[#FFA500] hover:bg-[#e69500] text-white font-display font-bold text-base rounded-full shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Enroll in {selectedProgram.badgeText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => setSelectedProgram(null)}
                className="w-full sm:w-auto px-6 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm rounded-full cursor-pointer"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};


import React from 'react';
import { Phone, MessageCircle, Sparkles, Clock } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

export const TopAnnouncementBar: React.FC = () => {
  const whatsappUrl = `https://wa.me/${SCHOOL_INFO.whatsappNumber}?text=${encodeURIComponent(SCHOOL_INFO.whatsappDefaultMsg)}`;

  return (
    <div className="bg-gradient-to-r from-[#003c73] via-[#0864B8] to-[#00549F] text-white text-xs py-2 px-4 border-b border-white/10 relative z-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 text-center md:text-left">
        {/* Left Announcement Badge */}
        <div className="flex items-center gap-2 font-medium">
          <span className="inline-flex items-center gap-1 bg-[#FFA500] text-[#003c73] font-bold px-2 py-0.5 rounded-full text-[11px] uppercase tracking-wider shadow-sm animate-pulse">
            <Sparkles className="w-3 h-3" /> Registration Open
          </span>
          <span className="hidden sm:inline text-blue-100">
            Enrolling ECD & Primary Classes Grade 1 – 7
          </span>
        </div>

        {/* Right Contact Quick Access */}
        <div className="flex items-center gap-4 text-[12px]">
          <div className="hidden lg:flex items-center gap-1 text-blue-200">
            <Clock className="w-3.5 h-3.5 text-[#FFA500]" />
            <span>Mon - Fri 7:00 AM - 4:30 PM</span>
          </div>

          <a 
            href={`tel:${SCHOOL_INFO.phoneRaw}`}
            className="flex items-center gap-1.5 font-bold hover:text-[#FFA500] transition-colors py-0.5"
            title="Call Keithvin Junior School"
          >
            <Phone className="w-3.5 h-3.5 text-[#FFA500]" />
            <span>{SCHOOL_INFO.phone}</span>
          </a>

          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-2.5 py-0.5 rounded-full transition-colors shadow-xs"
            title="Chat on WhatsApp"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current" />
            <span className="hidden xs:inline">WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};

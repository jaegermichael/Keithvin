import React from 'react';
import { Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

interface FloatingCtaBarProps {
  onRegisterClick: () => void;
}

export const FloatingCtaBar: React.FC<FloatingCtaBarProps> = ({ onRegisterClick }) => {
  const whatsappUrl = `https://wa.me/${SCHOOL_INFO.whatsappNumber}?text=${encodeURIComponent(SCHOOL_INFO.whatsappDefaultMsg)}`;

  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-[#002f5a]/95 backdrop-blur-md border-t border-white/20 px-3 py-2.5 shadow-2xl safe-area-bottom">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <a
          href={`tel:${SCHOOL_INFO.phoneRaw}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-xs font-bold transition-colors shadow-sm active:scale-95"
          title="Call School"
        >
          <Phone className="w-3.5 h-3.5 text-[#FFA500]" />
          <span>Call</span>
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full text-xs font-bold transition-colors shadow-sm active:scale-95"
          title="WhatsApp School"
        >
          <MessageCircle className="w-3.5 h-3.5 fill-current" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={onRegisterClick}
          className="flex-[1.4] flex items-center justify-center gap-1.5 py-2.5 bg-[#FFA500] hover:bg-[#e69500] text-white rounded-full text-xs font-extrabold shadow-md transition-transform active:scale-95 cursor-pointer"
        >
          <span>Register Now</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};

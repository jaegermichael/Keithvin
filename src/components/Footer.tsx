import React from 'react';
import { Phone, MessageCircle, Mail, MapPin, Heart, ArrowUp, Sparkles, Star } from 'lucide-react';
import { KJSLogo } from './KJSLogo';
import { SCHOOL_INFO } from '../data/schoolData';

interface FooterProps {
  onNavigate: (href: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/${SCHOOL_INFO.whatsappNumber}?text=${encodeURIComponent(SCHOOL_INFO.whatsappDefaultMsg)}`;

  return (
    <footer className="bg-[#002f5a] text-white pt-16 relative overflow-hidden border-t-4 border-[#FFA500]">
      
      {/* Top Background Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-12">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/15">
          
          {/* Col 1: Brand & Tagline */}
          <div className="lg:col-span-5 space-y-4">
            <KJSLogo variant="dark" showTagline={false} />

            <p className="text-blue-100/90 text-sm leading-relaxed max-w-sm">
              Keithvin Junior School is a premier private junior institution in Zimbabwe dedicated to providing world-class early childhood and primary education in a caring, safe, and stimulating environment.
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs text-amber-300 font-semibold">
                <Star className="w-3.5 h-3.5 fill-current" />
                <span>ECD & Primary Admissions Open</span>
              </div>
            </div>
          </div>

          {/* Col 2: School Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-display font-bold text-base text-[#FFA500] uppercase tracking-wider text-xs">
              School
            </h4>
            <ul className="space-y-2 text-sm text-blue-100">
              <li>
                <button onClick={() => onNavigate('#about')} className="hover:text-white hover:underline transition-colors text-left">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('#programs')} className="hover:text-white hover:underline transition-colors text-left">
                  Academics & ECD
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('#programs')} className="hover:text-white hover:underline transition-colors text-left">
                  What We Offer
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('#why-choose-us')} className="hover:text-white hover:underline transition-colors text-left">
                  Why Choose Us
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('#gallery')} className="hover:text-white hover:underline transition-colors text-left">
                  School Gallery
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Admissions */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-display font-bold text-base text-[#FFA500] uppercase tracking-wider text-xs">
              Admissions
            </h4>
            <ul className="space-y-2 text-sm text-blue-100">
              <li>
                <button onClick={() => onNavigate('#programs')} className="hover:text-white hover:underline transition-colors text-left">
                  ECD (Early Childhood)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('#programs')} className="hover:text-white hover:underline transition-colors text-left">
                  Primary Classes (Grade 1-7)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('#admissions')} className="hover:text-white hover:underline transition-colors text-left font-semibold text-amber-300">
                  Online Registration
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('#contact')} className="hover:text-white hover:underline transition-colors text-left">
                  Contact Admissions
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-base text-[#FFA500] uppercase tracking-wider text-xs">
              Contact Us
            </h4>
            <div className="space-y-2.5 text-sm text-blue-100">
              <a
                href={`tel:${SCHOOL_INFO.phoneRaw}`}
                className="flex items-center gap-2 hover:text-[#FFA500] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#FFA500] shrink-0" />
                <span className="font-bold text-white">{SCHOOL_INFO.phone}</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-emerald-300 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0 fill-current" />
                <span>WhatsApp Admissions</span>
              </a>

              <div className="flex items-start gap-2 pt-1 text-xs text-blue-200">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span>Harare, Zimbabwe</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-blue-200">
          <p>© 2026 Keithvin Junior School. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-blue-200 hover:text-white bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-full transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      {/* Signature Blue Bar from the bottom of the flyer */}
      <div className="bg-[#0864B8] py-4 px-4 text-center border-t border-white/10">
        <p className="font-display font-bold text-base sm:text-xl tracking-wider text-white uppercase drop-shadow-sm">
          ...Nurturing Little Champion
        </p>
      </div>

    </footer>
  );
};

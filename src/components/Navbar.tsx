import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Calendar, MessageCircle, Phone } from 'lucide-react';
import { KJSLogo } from './KJSLogo';
import { SCHOOL_INFO } from '../data/schoolData';

interface NavbarProps {
  onOpenTourModal: () => void;
  onNavigateToRegistration: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenTourModal,
  onNavigateToRegistration
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Academics', href: '#programs' },
    { label: 'Why KJS', href: '#why-choose-us' },
    { label: 'Campus Life', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const navOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const whatsappUrl = `https://wa.me/${SCHOOL_INFO.whatsappNumber}?text=${encodeURIComponent(SCHOOL_INFO.whatsappDefaultMsg)}`;

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#004b91]/95 backdrop-blur-md shadow-md shadow-blue-950/20 py-2.5 border-b border-white/15' 
        : 'bg-[#0864B8] py-3.5 border-b border-white/10'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* School Logo */}
        <a 
          href="#home" 
          onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
          className="focus:outline-none focus:ring-2 focus:ring-amber-400 rounded-xl shrink-0"
          aria-label="Keithvin Junior School Home"
        >
          <KJSLogo variant="dark" showTagline={false} />
        </a>

        {/* Desktop Navigation Links - Clean, Breathable Spacing */}
        <nav className="hidden lg:flex items-center gap-1.5 text-sm font-medium text-white">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="px-3.5 py-1.5 rounded-full text-blue-50/90 hover:text-white hover:bg-white/12 transition-all duration-150"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Actions - Streamlined to Avoid Congestion */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenTourModal}
            className="hidden xl:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white/90 hover:text-white bg-white/10 hover:bg-white/20 rounded-full border border-white/15 transition-all cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5 text-[#FFA500]" />
            <span>Book Tour</span>
          </button>

          <button
            onClick={() => {
              onNavigateToRegistration();
              handleNavClick('#admissions');
            }}
            className="inline-flex items-center gap-2 px-5 py-2 bg-[#FFA500] hover:bg-[#e69500] text-white font-bold text-sm rounded-full shadow-md shadow-amber-500/20 hover:shadow-lg transition-all duration-150 transform hover:-translate-y-0.5 active:scale-95 cursor-pointer whitespace-nowrap"
          >
            <span>Register Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Actions & Hamburger */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => {
              onNavigateToRegistration();
              handleNavClick('#admissions');
            }}
            className="sm:hidden px-3.5 py-1.5 bg-[#FFA500] text-white font-bold text-xs rounded-full shadow-sm active:scale-95 whitespace-nowrap"
          >
            Register
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-white bg-white/10 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[58px] bg-[#003c73]/98 backdrop-blur-xl border-b border-white/15 p-5 shadow-2xl z-50 animate-in slide-in-from-top-3 duration-200">
          <div className="flex flex-col space-y-2">
            <div className="text-[11px] font-bold text-amber-400/90 uppercase tracking-wider px-3 pb-1 border-b border-white/10">
              Quick Navigation
            </div>
            
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-3.5 py-2.5 text-base font-medium text-white hover:bg-white/10 rounded-xl transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowRight className="w-4 h-4 text-blue-200/60" />
              </a>
            ))}

            <div className="pt-3 border-t border-white/15 space-y-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigateToRegistration();
                  handleNavClick('#admissions');
                }}
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#FFA500] hover:bg-[#e69500] text-white font-bold text-sm rounded-full shadow-md active:scale-95"
              >
                <span>Register Now (2026 Admissions)</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenTourModal();
                  }}
                  className="flex items-center justify-center gap-1.5 py-2.5 bg-white/10 hover:bg-white/20 text-white font-medium text-xs rounded-full border border-white/15"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#FFA500]" />
                  <span>Campus Tour</span>
                </button>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs rounded-full"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

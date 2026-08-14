import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles, MessageCircle, Phone } from 'lucide-react';
import { FAQS, SCHOOL_INFO } from '../data/schoolData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Admissions', 'Academics', 'School Life', 'Transport & Meals'];

  const filteredFaqs = activeCategory === 'All'
    ? FAQS
    : FAQS.filter((f) => f.category === activeCategory);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const whatsappUrl = `https://wa.me/${SCHOOL_INFO.whatsappNumber}?text=${encodeURIComponent('Hello Keithvin Junior School, I have a question about admissions.')}`;

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#DCEAFF]/60 border border-blue-100 text-[#00549F] text-xs sm:text-sm font-bold uppercase tracking-wider">
            <HelpCircle className="w-4 h-4 text-[#FFA500]" />
            <span>Got Questions?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>

          <p className="text-slate-600 text-sm sm:text-base">
            Everything you need to know about joining Keithvin Junior School, curriculum, school life, and registration.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setOpenIndex(0);
              }}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#00549F] text-white shadow-md shadow-blue-500/20'
                  : 'bg-[#DCEAFF]/40 text-slate-700 hover:bg-[#DCEAFF]/70 border border-blue-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-[24px] border border-blue-100 bg-[#F8FBFF] hover:border-blue-200 transition-all overflow-hidden shadow-xs"
              >
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full text-left p-5.5 flex items-center justify-between gap-4 cursor-pointer hover:bg-white/60 transition-colors"
                >
                  <span className="font-display font-bold text-base text-slate-900">
                    {faq.question}
                  </span>
                  <div className={`p-2 rounded-full bg-[#DCEAFF]/60 text-[#00549F] transition-transform duration-200 shrink-0 ${
                    isOpen ? 'rotate-180 bg-[#00549F] text-white' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5.5 pb-5.5 text-sm text-slate-600 leading-relaxed border-t border-blue-100/60 pt-3.5 animate-in fade-in duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Need more help banner */}
        <div className="mt-12 bg-gradient-to-r from-[#DCEAFF]/50 via-white to-amber-50 rounded-[28px] p-6 sm:p-8 border border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div>
            <h4 className="font-display font-bold text-slate-900 text-base sm:text-lg">Have more specific questions?</h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-0.5">Our friendly admissions staff are ready to guide you.</p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${SCHOOL_INFO.phoneRaw}`}
              className="px-5 py-2.5 bg-white text-[#00549F] border border-blue-200 font-bold text-xs rounded-full flex items-center gap-2 hover:bg-blue-50 transition-colors shadow-xs"
            >
              <Phone className="w-3.5 h-3.5 text-[#FFA500]" />
              <span>Call Us</span>
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs rounded-full flex items-center gap-2 transition-colors shadow-xs"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};


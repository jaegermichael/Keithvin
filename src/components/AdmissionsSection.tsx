import React, { useState } from 'react';
import { Phone, MessageCircle, Send, CheckCircle2, Sparkles, Calendar, FileText, User, Mail, School, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SCHOOL_INFO } from '../data/schoolData';
import { AdmissionFormData } from '../types';

interface AdmissionsSectionProps {
  initialProgram?: string;
  onOpenTour: () => void;
}

export const AdmissionsSection: React.FC<AdmissionsSectionProps> = ({
  initialProgram,
  onOpenTour
}) => {
  const [formData, setFormData] = useState<AdmissionFormData>({
    parentName: '',
    phoneNumber: '',
    email: '',
    childName: '',
    childDob: '',
    program: (initialProgram === 'ecd' ? 'ECD A' : 'Grade 1') as AdmissionFormData['program'],
    intakeTerm: 'Term 1 (January)',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [refNumber, setRefNumber] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const randomRef = 'KJS-' + Math.floor(100000 + Math.random() * 900000);
      setRefNumber(randomRef);
      setIsSubmitted(true);
      setIsSubmitting(false);

      // Trigger celebratory confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }, 600);
  };

  const getWhatsAppRegistrationUrl = () => {
    const text = `*New Student Registration Enquiry*\n\n` +
      `*Ref:* ${refNumber || 'KJS-ONLINE'}\n` +
      `*Parent/Guardian:* ${formData.parentName}\n` +
      `*Phone:* ${formData.phoneNumber}\n` +
      `*Email:* ${formData.email || 'N/A'}\n` +
      `*Child Name:* ${formData.childName}\n` +
      `*Class Interested In:* ${formData.program}\n` +
      `*Intake Term:* ${formData.intakeTerm}\n` +
      `*Notes:* ${formData.message || 'None'}\n\n` +
      `Please confirm registration availability and fee structure.`;
    return `https://wa.me/${SCHOOL_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  const directWhatsappUrl = `https://wa.me/${SCHOOL_INFO.whatsappNumber}?text=${encodeURIComponent(SCHOOL_INFO.whatsappDefaultMsg)}`;

  return (
    <section id="admissions" className="py-20 bg-[#F8FBFF] relative overflow-hidden">
      
      {/* Decorative background curves */}
      <div className="absolute top-0 right-10 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Banner matching the flyer's signature Registration is Open announcement */}
        <div className="bg-gradient-to-r from-[#00549F] via-[#0864B8] to-[#078A9A] rounded-[36px] p-8 sm:p-12 text-white shadow-2xl mb-16 relative overflow-hidden">
          
          {/* Subtle concentric rings pattern */}
          <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full border border-white/10 pointer-events-none"></div>
          <div className="absolute -right-10 -top-10 w-60 h-60 rounded-full border border-white/10 pointer-events-none"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFA500] text-white font-display font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-sm">
                <Sparkles className="w-4 h-4 fill-current text-white" />
                <span>Now Enrolling For 2026 Academic Year</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight text-white leading-tight">
                Registration is Open
              </h2>

              <p className="text-blue-100 text-base sm:text-lg max-w-xl">
                Give your child a strong foundation for a bright future. Secure a place in our nurturing ECD or Primary classes today.
              </p>

              {/* Large Phone Callout matching flyer */}
              <div className="pt-2">
                <a
                  href={`tel:${SCHOOL_INFO.phoneRaw}`}
                  className="inline-flex items-center gap-3 text-2xl sm:text-4xl font-display font-black text-white hover:text-amber-300 transition-colors tracking-wide bg-white/15 px-7 py-3.5 rounded-full border border-white/20 shadow-inner"
                >
                  <Phone className="w-7 h-7 sm:w-8 sm:h-8 shrink-0 text-[#FFA500]" />
                  <span>{SCHOOL_INFO.phone}</span>
                </a>
              </div>
            </div>

            {/* Quick Action Badges */}
            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <a
                href={directWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-base flex items-center justify-center gap-3 shadow-lg transition-all transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-6 h-6 fill-current" />
                <span>Chat on WhatsApp (+263 77 425 9733)</span>
              </a>

              <button
                onClick={onOpenTour}
                className="p-4 rounded-full bg-white/15 hover:bg-white/25 text-white font-bold text-base flex items-center justify-center gap-3 border border-white/30 transition-all cursor-pointer"
              >
                <Calendar className="w-5 h-5 text-[#FFA500]" />
                <span>Schedule a Campus Visit</span>
              </button>
            </div>

          </div>
        </div>

        {/* 2-Column: Admission Steps & Interactive Registration Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Easy 4-Step Process & Requirements */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#00549F] bg-[#DCEAFF]/60 px-3 py-1 rounded-full border border-blue-100">
                Simple & Welcoming
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mt-2">
                How to Register Your Child
              </h3>
              <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                We make enrollment seamless for parents. Follow these four simple steps to join the Keithvin family.
              </p>
            </div>

            {/* Steps Timeline */}
            <div className="space-y-3.5">
              {[
                {
                  step: "01",
                  title: "Submit Online Registration or Call",
                  desc: "Fill out the registration form or call +263 77 425 9733 to state your child's grade level."
                },
                {
                  step: "02",
                  title: "Campus Tour & Friendly Assessment",
                  desc: "Visit our campus to meet the teachers and allow your child a fun, stress-free learning assessment."
                },
                {
                  step: "03",
                  title: "Documentation & Enrollment",
                  desc: "Submit child's birth certificate, health card, and previous progress report (for primary)."
                },
                {
                  step: "04",
                  title: "Welcome Pack & Uniform Fitting",
                  desc: "Receive the official KJS welcome pack, uniform kit, and term commencement details."
                }
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-4 p-4.5 rounded-[24px] bg-white border border-blue-100 shadow-xs hover:border-blue-200 transition-all">
                  <div className="w-10 h-10 rounded-2xl bg-[#DCEAFF]/60 text-[#00549F] font-display font-extrabold flex items-center justify-center shrink-0 text-sm border border-blue-50">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">{item.title}</h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Required Documents Callout */}
            <div className="bg-[#DCEAFF]/40 rounded-[28px] p-6 border border-blue-100">
              <h4 className="font-display font-bold text-sm text-[#00549F] mb-3 flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#0864B8]" />
                <span>Documents Needed for Registration:</span>
              </h4>
              <ul className="space-y-2 text-xs text-slate-700">
                <li className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#0864B8]"></span>
                  <span>Certified copy of Child's Birth Certificate</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#0864B8]"></span>
                  <span>Child's Health & Immunization Card</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#0864B8]"></span>
                  <span>Two passport-size photos of the child</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#0864B8]"></span>
                  <span>Previous school report / transfer letter (Grade 1 - 7)</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Right Column: Interactive Registration Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[32px] p-6 sm:p-8 border border-blue-100 shadow-xl relative">
              
              {!isSubmitted ? (
                <div>
                  <div className="mb-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#00549F] bg-[#DCEAFF]/60 px-3 py-1 rounded-full border border-blue-100">
                      Instant Online Registration Form
                    </span>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mt-2">
                      Register Your Champion Today
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      Fill out this brief application and our admissions office will reach out immediately.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Parent Name */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Parent / Guardian Full Name *
                        </label>
                        <div className="relative">
                          <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                          <input
                            type="text"
                            required
                            placeholder="e.g. Tendai Moyo"
                            value={formData.parentName}
                            onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#0864B8] focus:ring-2 focus:ring-blue-100 text-sm outline-none transition-all"
                          />
                        </div>
                      </div>

                      {/* Phone Number */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Phone / WhatsApp Number *
                        </label>
                        <div className="relative">
                          <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                          <input
                            type="tel"
                            required
                            placeholder="e.g. +263 77 123 4567"
                            value={formData.phoneNumber}
                            onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#0864B8] focus:ring-2 focus:ring-blue-100 text-sm outline-none transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Email */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Email Address (Optional)
                        </label>
                        <div className="relative">
                          <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                          <input
                            type="email"
                            placeholder="parent@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#0864B8] focus:ring-2 focus:ring-blue-100 text-sm outline-none transition-all"
                          />
                        </div>
                      </div>

                      {/* Child Name */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Child's Full Name *
                        </label>
                        <div className="relative">
                          <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                          <input
                            type="text"
                            required
                            placeholder="e.g. Tariro Moyo"
                            value={formData.childName}
                            onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#0864B8] focus:ring-2 focus:ring-blue-100 text-sm outline-none transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Class Interested In */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Class / Grade Interested In *
                        </label>
                        <div className="relative">
                          <School className="w-4 h-4 text-slate-400 absolute left-3.5 top-3 pointer-events-none" />
                          <select
                            value={formData.program}
                            onChange={(e) => setFormData({ ...formData, program: e.target.value as AdmissionFormData['program'] })}
                            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#0864B8] focus:ring-2 focus:ring-blue-100 text-sm outline-none transition-all bg-white cursor-pointer"
                          >
                            <optgroup label="Early Childhood Development (ECD)">
                              <option value="ECD A">ECD A (Ages 3-4)</option>
                              <option value="ECD B">ECD B (Ages 4-5)</option>
                            </optgroup>
                            <optgroup label="Primary School">
                              <option value="Grade 1">Grade 1</option>
                              <option value="Grade 2">Grade 2</option>
                              <option value="Grade 3">Grade 3</option>
                              <option value="Grade 4">Grade 4</option>
                              <option value="Grade 5">Grade 5</option>
                              <option value="Grade 6">Grade 6</option>
                              <option value="Grade 7">Grade 7</option>
                            </optgroup>
                          </select>
                        </div>
                      </div>

                      {/* Intake Term */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Intake Term *
                        </label>
                        <div className="relative">
                          <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-3 pointer-events-none" />
                          <select
                            value={formData.intakeTerm}
                            onChange={(e) => setFormData({ ...formData, intakeTerm: e.target.value as AdmissionFormData['intakeTerm'] })}
                            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#0864B8] focus:ring-2 focus:ring-blue-100 text-sm outline-none transition-all bg-white cursor-pointer"
                          >
                            <option value="Term 1 (January)">Term 1 (January)</option>
                            <option value="Term 2 (May)">Term 2 (May)</option>
                            <option value="Term 3 (September)">Term 3 (September)</option>
                            <option value="Immediate Transfer">Immediate Transfer</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Additional Message / Questions */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Any Questions or Special Interests?
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Tell us about your child's talents, dietary needs, or questions regarding transport/swimming..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full p-3 rounded-xl border border-slate-200 focus:border-[#0864B8] focus:ring-2 focus:ring-blue-100 text-sm outline-none transition-all resize-none"
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-[#FFA500] hover:bg-[#e69500] text-white font-display font-bold text-base rounded-full shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Registration Enquiry</span>
                        </>
                      )}
                    </button>

                    <p className="text-[11px] text-slate-400 text-center">
                      🔒 Your information is confidential and will only be used by Keithvin Junior School admissions staff.
                    </p>

                  </form>
                </div>
              ) : (
                /* Success View */
                <div className="py-8 text-center space-y-6 animate-in fade-in duration-300">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full">
                      Application Received
                    </span>
                    <h3 className="text-2xl font-display font-bold text-slate-900">
                      Welcome to Keithvin, {formData.parentName}!
                    </h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto">
                      We have received your registration enquiry for <strong>{formData.childName}</strong> for <strong>{formData.program}</strong> ({formData.intakeTerm}).
                    </p>
                  </div>

                  <div className="bg-[#DCEAFF]/40 p-5 rounded-[24px] border border-blue-100 inline-block text-left max-w-sm w-full space-y-1 text-xs">
                    <p className="text-slate-500">Application Reference:</p>
                    <p className="font-mono font-bold text-base text-[#00549F]">{refNumber}</p>
                    <p className="text-slate-500 pt-2">Our admissions coordinator will contact you at <strong>{formData.phoneNumber}</strong> shortly.</p>
                  </div>

                  <div className="space-y-3 pt-2">
                    <a
                      href={getWhatsAppRegistrationUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full max-w-md py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm rounded-full shadow-md transition-all"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                      <span>Forward Directly to Admissions WhatsApp</span>
                    </a>

                    <div>
                      <button
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormData({
                            parentName: '',
                            phoneNumber: '',
                            email: '',
                            childName: '',
                            childDob: '',
                            program: 'Grade 1',
                            intakeTerm: 'Term 1 (January)',
                            message: ''
                          });
                        }}
                        className="text-xs text-slate-500 hover:text-slate-800 font-semibold underline cursor-pointer"
                      >
                        Submit another student application
                      </button>
                    </div>
                  </div>

                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};


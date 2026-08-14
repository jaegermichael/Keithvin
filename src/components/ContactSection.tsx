import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, MapPin, Clock, Send, CheckCircle2, User, School, Sparkles } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    childName: '',
    classInterest: 'Grade 1',
    message: ''
  });

  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 600);
  };

  const whatsappUrl = `https://wa.me/${SCHOOL_INFO.whatsappNumber}?text=${encodeURIComponent(
    `Hello Keithvin Junior School, I am ${formData.name || 'a prospective parent'} inquiring about admission for my child ${formData.childName || ''} (${formData.classInterest}). ${formData.message || ''}`
  )}`;

  return (
    <section id="contact" className="py-20 bg-[#F8FBFF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#DCEAFF]/60 border border-blue-100 text-[#00549F] text-xs sm:text-sm font-bold uppercase tracking-wider">
            <Mail className="w-4 h-4 text-[#FFA500]" />
            <span>Connect With Us</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-slate-900 tracking-tight">
            Get in Touch
          </h2>

          <p className="text-slate-600 text-base sm:text-lg">
            Have questions about admissions, classes, fees, or life at Keithvin Junior School? Our admissions team is always eager to assist you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Info & School Map / Address */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Phone Card */}
            <div className="bg-gradient-to-br from-[#00549F] via-[#0864B8] to-[#078A9A] text-white p-6 sm:p-8 rounded-[32px] shadow-xl relative overflow-hidden">
              <div className="relative z-10 space-y-4">
                <span className="bg-[#FFA500] text-white font-display font-bold text-xs px-3.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  Admissions Hotline
                </span>

                <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                  {SCHOOL_INFO.phone}
                </h3>

                <p className="text-blue-100 text-xs sm:text-sm leading-relaxed">
                  Call us directly during office hours for immediate answers to your admissions questions.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                  <a
                    href={`tel:${SCHOOL_INFO.phoneRaw}`}
                    className="px-5 py-3 bg-white text-[#0864B8] font-bold text-xs rounded-full flex items-center justify-center gap-2 hover:bg-amber-300 transition-colors shadow-sm"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Now</span>
                  </a>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs rounded-full flex items-center justify-center gap-2 transition-colors shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Details List */}
            <div className="bg-white rounded-[32px] p-6 sm:p-7 border border-blue-100 shadow-md space-y-5">
              
              {/* Location */}
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-[#DCEAFF]/60 text-[#00549F] flex items-center justify-center shrink-0 mt-0.5 border border-blue-50">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900">Campus Address</h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                    Keithvin Junior School Campus, Harare, Zimbabwe
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-amber-50 text-[#FFA500] flex items-center justify-center shrink-0 mt-0.5 border border-amber-100">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900">Email Admissions</h4>
                  <a
                    href={`mailto:${SCHOOL_INFO.email}`}
                    className="text-xs sm:text-sm text-[#0864B8] hover:underline mt-0.5 block font-medium"
                  >
                    {SCHOOL_INFO.email}
                  </a>
                </div>
              </div>

              {/* Office Hours */}
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-teal-50 text-[#078A9A] flex items-center justify-center shrink-0 mt-0.5 border border-teal-100">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900">Office & Visiting Hours</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Monday - Friday: 7:00 AM - 4:30 PM <br />
                    Saturday: 8:00 AM - 12:00 PM (By appointment)
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Contact & Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[32px] p-6 sm:p-8 border border-blue-100 shadow-xl">
              
              {!sent ? (
                <div>
                  <div className="mb-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#00549F] bg-[#DCEAFF]/60 px-3 py-1 rounded-full border border-blue-100">
                      Send Us a Message
                    </span>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mt-2">
                      How Can We Help You?
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      Fill out the form below or chat directly on WhatsApp.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Parent / Guardian Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#0864B8] focus:ring-2 focus:ring-blue-100 text-sm outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+263 77 ..."
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#0864B8] focus:ring-2 focus:ring-blue-100 text-sm outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          placeholder="parent@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#0864B8] focus:ring-2 focus:ring-blue-100 text-sm outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Child's Name
                        </label>
                        <input
                          type="text"
                          placeholder="Child's Full Name"
                          value={formData.childName}
                          onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#0864B8] focus:ring-2 focus:ring-blue-100 text-sm outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Class Interested In
                      </label>
                      <select
                        value={formData.classInterest}
                        onChange={(e) => setFormData({ ...formData, classInterest: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#0864B8] focus:ring-2 focus:ring-blue-100 text-sm outline-none bg-white"
                      >
                        <option value="ECD A">ECD A (Ages 3-4)</option>
                        <option value="ECD B">ECD B (Ages 4-5)</option>
                        <option value="Grade 1">Grade 1</option>
                        <option value="Grade 2">Grade 2</option>
                        <option value="Grade 3">Grade 3</option>
                        <option value="Grade 4">Grade 4</option>
                        <option value="Grade 5">Grade 5</option>
                        <option value="Grade 6">Grade 6</option>
                        <option value="Grade 7">Grade 7</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Your Message or Question *
                      </label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Please ask about school fees, transport, uniforms, or schedule..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full p-3.5 rounded-xl border border-slate-200 focus:border-[#0864B8] focus:ring-2 focus:ring-blue-100 text-sm outline-none resize-none"
                      ></textarea>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                      <button
                        type="submit"
                        disabled={loading}
                        className="flex-1 py-3.5 bg-[#0864B8] hover:bg-[#00549F] text-white font-display font-bold text-sm rounded-full shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                      >
                        {loading ? (
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            <span>Send Enquiry</span>
                          </>
                        )}
                      </button>

                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-3.5 px-6 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm rounded-full transition-all flex items-center justify-center gap-2 shadow-sm"
                      >
                        <MessageCircle className="w-4 h-4 fill-current" />
                        <span>Chat on WhatsApp</span>
                      </a>
                    </div>

                  </form>
                </div>
              ) : (
                <div className="py-10 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-slate-900">
                    Thank You, {formData.name}!
                  </h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto">
                    Your enquiry has been received. Our team will contact you at <strong>{formData.phone}</strong> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSent(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        childName: '',
                        classInterest: 'Grade 1',
                        message: ''
                      });
                    }}
                    className="text-xs text-[#0864B8] font-bold underline mt-4 cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};


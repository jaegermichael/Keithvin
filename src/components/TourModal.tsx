import React, { useState } from 'react';
import { X, Calendar, Clock, User, Phone, CheckCircle2, Sparkles, MapPin } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SCHOOL_INFO } from '../data/schoolData';

interface TourModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TourModal: React.FC<TourModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    date: '',
    timeSlot: 'Morning (09:00 AM)',
    interestedClass: 'Grade 1',
    guests: '2 adults, 1 child'
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.5 }
    });
  };

  const whatsappUrl = `https://wa.me/${SCHOOL_INFO.whatsappNumber}?text=${encodeURIComponent(
    `Hello Keithvin Junior School, I would like to confirm a campus tour booking on ${formData.date || 'a weekday'} (${formData.timeSlot}) for ${formData.parentName} (${formData.interestedClass}).`
  )}`;

  return (
    <div className="fixed inset-0 z-50 bg-black/65 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-[32px] max-w-lg w-full p-6 sm:p-8 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 mb-2 text-[#0864B8]">
              <Calendar className="w-5 h-5 text-[#FFA500]" />
              <span className="text-xs font-bold uppercase tracking-wider">Book a School Tour</span>
            </div>

            <h3 className="text-2xl font-display font-bold text-slate-900 mb-1">
              Visit Keithvin Junior School
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 mb-6">
              Experience our safe campus, meet our caring educators, and see our happy champions in action!
            </p>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Parent / Guardian Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 focus:border-[#0864B8] text-sm outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  WhatsApp / Phone Number *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="tel"
                    required
                    placeholder="+263 77 ..."
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 focus:border-[#0864B8] text-sm outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:border-[#0864B8] text-xs sm:text-sm outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Preferred Time *
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:border-[#0864B8] text-xs sm:text-sm outline-none bg-white"
                  >
                    <option value="Morning (09:00 AM)">09:00 AM</option>
                    <option value="Mid-Morning (11:00 AM)">11:00 AM</option>
                    <option value="Afternoon (02:00 PM)">02:00 PM</option>
                    <option value="Saturday (10:00 AM)">Saturday 10:00 AM</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Class Interested In
                </label>
                <select
                  value={formData.interestedClass}
                  onChange={(e) => setFormData({ ...formData, interestedClass: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:border-[#0864B8] text-xs sm:text-sm outline-none bg-white"
                >
                  <option value="ECD A (Ages 3-4)">ECD A (Ages 3-4)</option>
                  <option value="ECD B (Ages 4-5)">ECD B (Ages 4-5)</option>
                  <option value="Grade 1">Grade 1</option>
                  <option value="Grade 2 - 7">Grade 2 to 7</option>
                </select>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#FFA500] hover:bg-[#e69500] text-white font-display font-bold text-sm rounded-full shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-all cursor-pointer"
                >
                  Confirm Campus Tour Booking
                </button>
              </div>

            </form>
          </div>
        ) : (
          <div className="py-6 text-center space-y-4">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-display font-bold text-slate-900">
              Tour Request Received!
            </h3>

            <p className="text-sm text-slate-600">
              We look forward to welcoming you on <strong>{formData.date || 'your selected date'}</strong> at <strong>{formData.timeSlot}</strong>.
            </p>

            <div className="bg-[#DCEAFF]/40 p-4 rounded-2xl border border-blue-100 text-xs text-slate-700 text-left space-y-1.5">
              <p className="flex items-center gap-1.5 font-semibold text-slate-800">
                <MapPin className="w-4 h-4 text-[#00549F]" />
                <span>Keithvin Junior School Campus, Harare</span>
              </p>
              <p className="text-slate-600">Hotline: {SCHOOL_INFO.phone}</p>
            </div>

            <div className="pt-2 flex flex-col gap-2.5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs rounded-full transition-colors shadow-md flex items-center justify-center gap-1.5"
              >
                <span>Notify via WhatsApp</span>
              </a>

              <button
                onClick={onClose}
                className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-full transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

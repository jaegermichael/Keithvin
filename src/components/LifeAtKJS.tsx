import React, { useState } from 'react';
import { Camera, Maximize2, Sparkles, Filter } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/schoolData';
import { LightboxModal } from './LightboxModal';
import { GalleryItem } from '../types';

export const LifeAtKJS: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const categories = [
    'All',
    'Educational Trips',
    'Swimming & Sports',
    'Graduation & Milestones'
  ];

  const filteredItems = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const handlePrev = () => {
    setLightboxIndex((prev) => (prev > 0 ? prev - 1 : filteredItems.length - 1));
  };

  const handleNext = () => {
    setLightboxIndex((prev) => (prev < filteredItems.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="gallery" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#DCEAFF]/60 border border-blue-100 text-[#00549F] text-xs sm:text-sm font-bold uppercase tracking-wider">
            <Camera className="w-4 h-4 text-[#FFA500]" />
            <span>School Gallery</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-slate-900 tracking-tight">
            Life at Keithvin Junior School
          </h2>

          <p className="text-slate-600 text-base sm:text-lg">
            Learning doesn’t stop when the classroom does. Experience the joy, energy, adventures, and milestones of our little champions.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#00549F] text-white shadow-md shadow-blue-500/20 scale-105'
                  : 'bg-[#DCEAFF]/40 text-slate-700 hover:bg-[#DCEAFF]/70 border border-blue-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Responsive Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(idx)}
              className="group relative rounded-[28px] overflow-hidden bg-slate-100 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer aspect-4/3 border border-slate-100"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              {/* Gradient Overlay & Captions */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity flex flex-col justify-between p-6">
                
                {/* Top Category Badge & Expand Icon */}
                <div className="flex items-center justify-between">
                  <span className="bg-[#FFA500] text-[#002f5a] text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    {item.category}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Bottom Details */}
                <div>
                  <h3 className="font-display font-bold text-lg text-white mb-1 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                    {item.caption}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note on School Activities */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-500 font-medium">
            * All school field trips, swimming lessons, and sports events are fully supervised by qualified educators and trained lifeguards.
          </p>
        </div>

      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        items={filteredItems}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
};

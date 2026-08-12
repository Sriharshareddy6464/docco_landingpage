import React, { useState } from 'react';
import { ZoomIn, Eye, Tag, Filter, CheckCircle2 } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/caseStudyData';
import { GalleryItem } from '../types';
import { LightboxModal } from './LightboxModal';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'application' | 'infrastructure' | 'observability'>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems =
    activeCategory === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0A0A0B] relative">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF9900]">
              08 / GALLERY
            </span>
            <span className="h-px w-12 bg-[#FF9900]/40" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Inside Docco — Visual Evidence
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed font-normal">
            Organized visual screenshots and telemetry evidence across the web application interface, AWS infrastructure console, and observability stack.
          </p>
        </div>

        {/* Category Filter Controls */}
        <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-xl font-bold transition-all cursor-pointer ${activeCategory === 'all'
              ? 'bg-[#FF9900] text-black shadow-md'
              : 'bg-white/5 text-slate-300 border border-white/10 hover:bg-white/10'
              }`}
          >
            ALL EVIDENCE ({GALLERY_ITEMS.length})
          </button>

          <button
            onClick={() => setActiveCategory('application')}
            className={`px-4 py-2 rounded-xl font-bold transition-all cursor-pointer ${activeCategory === 'application'
              ? 'bg-[#FF9900] text-black shadow-md'
              : 'bg-white/5 text-slate-300 border border-white/10 hover:bg-white/10'
              }`}
          >
            APPLICATION ({GALLERY_ITEMS.filter((i) => i.category === 'application').length})
          </button>

          <button
            onClick={() => setActiveCategory('infrastructure')}
            className={`px-4 py-2 rounded-xl font-bold transition-all cursor-pointer ${activeCategory === 'infrastructure'
              ? 'bg-[#FF9900] text-black shadow-md'
              : 'bg-white/5 text-slate-300 border border-white/10 hover:bg-white/10'
              }`}
          >
            INFRASTRUCTURE ({GALLERY_ITEMS.filter((i) => i.category === 'infrastructure').length})
          </button>

          <button
            onClick={() => setActiveCategory('observability')}
            className={`px-4 py-2 rounded-xl font-bold transition-all cursor-pointer ${activeCategory === 'observability'
              ? 'bg-[#FF9900] text-black shadow-md'
              : 'bg-white/5 text-slate-300 border border-white/10 hover:bg-white/10'
              }`}
          >
            OBSERVABILITY ({GALLERY_ITEMS.filter((i) => i.category === 'observability').length})
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="glass-panel glass-panel-hover rounded-2xl border border-white/10 overflow-hidden flex flex-col justify-between group cursor-pointer"
            >
              <div className="space-y-4">
                {/* Screenshot Image Container */}
                <div className="relative aspect-video bg-black/60 overflow-hidden border-b border-white/10">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-black/90 text-[#FF9900] font-mono text-[10px] uppercase font-bold border border-white/10">
                    {item.category}
                  </div>

                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-3 py-1.5 rounded-lg bg-[#FF9900] text-black font-mono text-xs font-bold flex items-center gap-1.5 shadow-lg">
                      <ZoomIn className="w-4 h-4" /> INSPECT EVIDENCE
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <h3 className="text-base font-bold text-white tracking-tight group-hover:text-[#FF9900] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-mono bg-white/5 p-3 rounded-lg border border-white/10">
                    {item.caption}
                  </p>
                </div>
              </div>

              {/* Tags Footer */}
              <div className="px-6 pb-6 pt-2 border-t border-white/10 flex flex-wrap gap-1.5">
                {item.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-400 text-[10px] font-mono"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </section>
  );
};

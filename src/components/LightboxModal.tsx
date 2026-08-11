import React, { useEffect } from 'react';
import { X, ZoomIn, Info, ShieldCheck, Tag } from 'lucide-react';
import { GalleryItem } from '../types';

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-y-auto">
      <div className="relative max-w-5xl w-full bg-[#0A0A0B] border border-white/10 rounded-2xl shadow-2xl overflow-hidden my-auto space-y-0">
        {/* Modal Header */}
        <div className="p-4 bg-black/60 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded bg-[#FF9900]/10 border border-[#FF9900]/30 text-[#FF9900] font-mono text-xs font-bold uppercase">
              {item.category}
            </span>
            <h3 className="text-sm sm:text-base font-bold text-white truncate">
              {item.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 transition-colors cursor-pointer"
            title="Close Lightbox"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
          {/* Image Display */}
          <div className="rounded-xl overflow-hidden border border-white/10 bg-black aspect-video relative group">
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-black/80 text-[10px] font-mono text-[#FF9900] border border-[#FF9900]/30 flex items-center gap-1.5">
              <ShieldCheck className="w-3 h-3" /> VERIFIED EVIDENCE
            </div>
          </div>

          {/* Description & Technical Metadata */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 text-xs">
            <div className="md:col-span-7 space-y-3">
              <span className="text-[10px] font-mono text-slate-500 uppercase font-bold block">
                Evidence Description
              </span>
              <p className="text-slate-200 text-sm leading-relaxed">
                {item.fullDescription}
              </p>
              <p className="text-slate-400 leading-relaxed font-mono text-[11px] bg-black/40 p-3 rounded-lg border border-white/10">
                Caption: {item.caption}
              </p>
            </div>

            <div className="md:col-span-5 space-y-4 bg-black/40 p-4 rounded-xl border border-white/10">
              <span className="text-[10px] font-mono text-slate-500 uppercase font-bold block">
                Technical Metadata & Metrics
              </span>

              <div className="space-y-2 font-mono text-[11px]">
                {item.technicalDetails.map((detail, idx) => (
                  <div key={idx} className="flex items-center justify-between border-b border-white/5 pb-1.5">
                    <span className="text-slate-400">{detail.label}:</span>
                    <span className="text-[#FF9900] font-bold">{detail.value}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 border-t border-white/5 space-y-1.5">
                <span className="text-[10px] font-mono text-slate-500 uppercase font-bold block">
                  Tags:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[#FF9900] text-[10px] font-mono"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

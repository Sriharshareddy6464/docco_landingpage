import React from 'react';
import { motion } from 'motion/react';
import { Play, Network, FileText, Server, Video, Activity, Shield, CheckCircle2, ChevronDown } from 'lucide-react';
import { HERO_META, CONTACT_LINKS } from '../data/caseStudyData';

interface HeroSectionProps {
  onWatchClick: () => void;
  onExploreArchitectureClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onWatchClick,
  onExploreArchitectureClick,
}) => {
  return (
    <section id="hero" className="relative min-h-screen pt-12 pb-20 px-4 sm:px-6 lg:px-8 bg-grid-pattern bg-radial-glow overflow-hidden flex flex-col justify-between">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full pt-8 pb-12">
        {/* Top Eyebrow & Badges */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="px-3 py-1 text-xs font-mono tracking-widest text-[#FF9900] bg-[#FF9900]/10 border border-[#FF9900]/30 rounded-md uppercase font-semibold">
            ENGINEERING CASE STUDY
          </span>
          
          <div className="flex items-center gap-2 px-3 py-1 bg-[#FF9900]/10 border border-[#FF9900]/30 rounded-md text-[#FF9900] text-xs font-mono font-medium">
            <span className="w-2 h-2 rounded-full bg-[#FF9900] pulse-live" />
            <span className="font-semibold">AWS DEVOPS ENGINEER</span>
          </div>

          <span className="text-xs font-mono text-slate-400 hidden sm:inline-block">
            Infrastructure • Deployment • Networking • Security • Observability
          </span>
        </div>

        {/* Hero Title & Subtitle */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-white leading-none">
              Docco<span className="text-[#FF9900]">.</span>
            </h1>

            <p className="text-2xl sm:text-3xl font-semibold text-slate-200 tracking-tight leading-snug">
              Real-Time Doctor Consultation, Built for the Web.
            </p>

            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              Docco is a real-time doctor consultation platform that combines browser-based WebRTC communication with a modern web application stack and AWS-powered infrastructure.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onWatchClick}
                className="px-6 py-3.5 bg-[#FF9900] hover:bg-[#e68a00] text-black font-bold text-sm tracking-wide rounded-lg flex items-center gap-2 shadow-lg shadow-[#FF9900]/20 transition-all cursor-pointer"
              >
                <Play className="w-4 h-4 fill-black" />
                WATCH THE APPLICATION
              </button>

              <button
                onClick={onExploreArchitectureClick}
                className="px-6 py-3.5 bg-white/5 hover:bg-white/10 text-white font-semibold text-sm tracking-wide rounded-lg border border-white/10 flex items-center gap-2 transition-all cursor-pointer"
              >
                <Network className="w-4 h-4 text-[#FF9900]" />
                EXPLORE ARCHITECTURE
              </button>

              <a
                href={CONTACT_LINKS.mediumArticle}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 text-slate-300 hover:text-[#FF9900] font-mono text-xs tracking-wide flex items-center gap-1.5 transition-colors"
              >
                <FileText className="w-4 h-4 text-[#FF9900]" />
                READ CASE STUDY <span className="text-slate-500">↗</span>
              </a>
            </div>

            {/* Compact Technical Summary Metadata */}
            <div className="pt-6 border-t border-slate-800/80">
              <p className="text-xs font-mono uppercase text-slate-500 mb-3 tracking-wider font-semibold">
                Core Stack & Deployment Metadata
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {HERO_META.map((meta, idx) => (
                  <div key={idx} className="p-2.5 rounded bg-white/5 border border-white/10">
                    <span className="block text-[10px] font-mono text-slate-400 uppercase tracking-wider">{meta.label}</span>
                    <span className="text-xs font-semibold text-[#FF9900] font-mono">{meta.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Hero Visual - Docco App Consultation Visual Mockup */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl glass-panel p-3 border border-white/10 shadow-2xl overflow-hidden group">
              <div className="absolute top-0 right-0 px-3 py-1 bg-[#FF9900]/10 border-b border-l border-[#FF9900]/30 text-[#FF9900] font-mono text-[10px] rounded-bl-lg font-semibold z-10 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF9900] animate-ping" />
                LIVE WEBRTC ROOM
              </div>

              {/* Simulated Consultation Window */}
              <div className="bg-slate-950 rounded-xl border border-slate-800 overflow-hidden shadow-inner">
                {/* Simulated Header Bar */}
                <div className="px-4 py-2.5 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    <span className="text-slate-400 font-mono text-[11px] ml-2">docco.app/consultation/room-892</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 font-mono text-[10px] font-bold">
                    P2P ENCRYPTED
                  </span>
                </div>

                {/* Simulated Main Video View */}
                <div className="relative aspect-video bg-slate-900 flex items-center justify-center overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop"
                    alt="Doctor Consultation Preview"
                    className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Doctor Info Badge */}
                  <div className="absolute top-3 left-3 px-3 py-1.5 rounded-lg bg-slate-950/80 backdrop-blur-md border border-slate-800 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <div>
                      <span className="text-xs font-semibold text-white block leading-none">Dr. Sarah Jenkins</span>
                      <span className="text-[10px] text-[#FF9900] font-mono">Cardiology Provider</span>
                    </div>
                  </div>

                  {/* Patient PIP Thumbnail */}
                  <div className="absolute bottom-3 right-3 w-28 h-20 rounded-lg bg-black/90 border border-white/10 overflow-hidden shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop"
                      alt="Patient Feed"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-1 left-1 px-1 bg-black/70 rounded text-[9px] font-mono text-slate-300">
                      Patient (You)
                    </div>
                  </div>

                  {/* Active Media Stats Banner */}
                  <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded bg-black/90 border border-white/10 text-[10px] font-mono text-slate-300 flex items-center gap-3">
                    <span className="text-emerald-400 font-semibold">1280x720 30fps</span>
                    <span className="text-slate-500">|</span>
                    <span>VP8 / Opus</span>
                    <span className="text-slate-500">|</span>
                    <span className="text-[#FF9900]">RTT: 22ms</span>
                  </div>
                </div>

                {/* Call Control Strip */}
                <div className="p-3 bg-black/40 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[11px] text-slate-400 font-mono">
                    <Video className="w-3.5 h-3.5 text-[#FF9900]" />
                    <span>WebRTC Direct Stream</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={onWatchClick}
                      className="px-3 py-1 rounded bg-[#FF9900]/10 hover:bg-[#FF9900]/20 border border-[#FF9900]/30 text-[#FF9900] font-mono text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
                    >
                      <Play className="w-3 h-3" /> Demo Walkthrough
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="flex justify-center pt-8">
        <button
          onClick={onWatchClick}
          className="text-slate-500 hover:text-[#FF9900] transition-colors flex flex-col items-center gap-1 text-xs font-mono cursor-pointer"
        >
          <span>EXPLORE PRODUCT & ARCHITECTURE</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </button>
      </div>
    </section>
  );
};

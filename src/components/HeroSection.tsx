import React from 'react';
import { motion } from 'motion/react';
import { Play, Network, FileText, Server, Video, Activity, Shield, CheckCircle2, ChevronDown, Wifi, Github } from 'lucide-react';
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
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 text-xs font-mono tracking-widest text-[#FF9900] bg-[#FF9900]/10 border border-[#FF9900]/30 rounded-md uppercase font-semibold">
              PROJECT CASE STUDY
            </span>

            <div className="flex items-center gap-2 px-3 py-1 bg-[#FF9900]/10 border border-[#FF9900]/30 rounded-md text-[#FF9900] text-xs font-mono font-medium">
              <span className="w-2 h-2 rounded-full bg-[#FF9900] pulse-live" />
              <span className="font-semibold">AWS DEVOPS ENGINEER</span>
            </div>
          </div>

          <span className="text-xs font-mono text-slate-400 hidden sm:inline-block text-right ml-auto">
            Infrastructure • Deployment • Networking • Security • Observability
          </span>
        </div>

        {/* Hero Title & Subtitle */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-row items-center justify-between gap-6">
              <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-white leading-none">
                Docco<span className="text-[#FF9900]">.</span>
              </h1>
              <a
                href={CONTACT_LINKS.githubRepo}
                target="_blank"
                rel="noopener noreferrer"
                title="View GitHub Repository"
                className="w-[100px] h-[100px] rounded-2xl bg-white/5 border border-[#FF9900]/30 hover:border-[#FF9900] hover:bg-[#FF9900] hover:text-black flex items-center justify-center text-[#FF9900] transition-all cursor-pointer shadow-lg hover:shadow-[#FF9900]/20 z-10 shrink-0"
              >
                <Github className="w-16 h-16" />
              </a>
            </div>

            <p className="text-2xl sm:text-3xl font-semibold text-slate-200 tracking-tight leading-snug">
              Real-Time Doctor Consultation, Built not just for the Web .
            </p>

            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              Docco is a real-time doctor consultation platform that combines browser-based WebRTC communication with a modern web application stack and AWS-powered infrastructure as well as react native for mobile applications.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onWatchClick}
                className="px-6 py-3.5 bg-[#FF9900] hover:bg-[#e68a00] text-black font-bold text-sm tracking-wide rounded-lg flex items-center gap-2 shadow-lg shadow-[#FF9900]/20 transition-all cursor-pointer font-sans"
              >
                <Play className="w-4 h-4 fill-black" />
                WATCH PROTOTYPE DEMO
              </button>

              <button
                onClick={onExploreArchitectureClick}
                className="px-6 py-3.5 bg-white/5 hover:bg-white/10 text-white font-semibold text-sm tracking-wide rounded-lg border border-white/10 flex items-center gap-2 transition-all cursor-pointer font-sans"
              >
                <Network className="w-4 h-4 text-[#FF9900]" />
                EXPLORE ARCHITECTURE
              </button>

              <a
                href={CONTACT_LINKS.mediumArticle}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3.5 text-slate-300 hover:text-[#FF9900] font-mono text-xs tracking-wide flex items-center gap-1 transition-colors"
              >
                <FileText className="w-4 h-4 text-[#FF9900]" />
                Medium Blog <span className="text-slate-500">↗</span>
              </a>

              <a
                href={CONTACT_LINKS.notion}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3.5 text-slate-300 hover:text-[#FF9900] font-mono text-xs tracking-wide flex items-center gap-1 transition-colors"
              >
                <FileText className="w-4 h-4 text-[#FF9900]" />
                Notion Docs <span className="text-slate-500">↗</span>
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

          {/* Hero Visual - Docco App Consultation Visual Mockup (Mobile View) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative border-[8px] border-slate-800 bg-slate-950 rounded-[40px] w-[290px] h-[580px] shadow-2xl overflow-hidden group flex flex-col justify-between">
              {/* Notch / Speaker */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-4 bg-slate-800 rounded-b-xl z-20 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-slate-900 mr-2" />
                <div className="w-10 h-1 bg-slate-900 rounded" />
              </div>

              {/* Status Bar */}
              <div className="absolute top-1 left-0 right-0 px-5 flex items-center justify-between text-slate-400 font-mono text-[9px] z-10">
                <span>9:41</span>
                <div className="flex items-center gap-1.5">
                  <Wifi className="w-3 h-3 text-[#FF9900]" />
                  <span>5G</span>
                </div>
              </div>

              {/* Simulated Consultation Window */}
              <div className="flex-1 flex flex-col justify-between pt-6 relative">
                {/* Doctor Full Screen Video View */}
                <div className="absolute inset-0 bg-slate-900 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop"
                    alt="Doctor Consultation Preview"
                    className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30" />
                </div>

                {/* Doctor Info Overlay (Top) */}
                <div className="relative z-10 px-4 pt-3 flex items-center justify-between">
                  <div className="px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <div>
                      <span className="text-[10px] font-semibold text-white block leading-none font-sans">Dr. Sarah Jenkins</span>
                      <span className="text-[8px] text-[#FF9900] font-mono">Cardiology</span>
                    </div>
                  </div>
                  <span className="px-1.5 py-0.5 rounded bg-emerald-950/85 border border-emerald-500/30 text-emerald-400 font-mono text-[8px] font-bold">
                    SECURE P2P
                  </span>
                </div>

                {/* Bottom Overlay Widgets */}
                <div className="relative z-10 px-4 pb-4 space-y-3">
                  {/* Patient PIP Thumbnail (Floating above stats) */}
                  <div className="flex justify-end">
                    <div className="w-20 h-28 rounded-xl border border-white/10 overflow-hidden shadow-lg bg-black relative">
                      <img
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop"
                        alt="Patient Feed"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-1 left-1 px-1 bg-black/70 rounded text-[8px] font-mono text-slate-300">
                        You
                      </div>
                    </div>
                  </div>

                  {/* Active Media Stats Banner */}
                  <div className="px-2 py-1 rounded-lg bg-black/80 border border-white/10 text-[9px] font-mono text-slate-300 flex items-center justify-between">
                    <span className="text-emerald-400 font-semibold">HD 30fps</span>
                    <span className="text-slate-600">|</span>
                    <span>VP8/Opus</span>
                    <span className="text-slate-600">|</span>
                    <span className="text-[#FF9900] font-bold">22ms</span>
                  </div>

                  {/* Call Control Strip */}
                  <div className="p-2 rounded-xl bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-[9px] text-slate-300 font-mono">
                      <Video className="w-3.5 h-3.5 text-[#FF9900]" />
                      <span>WebRTC Live</span>
                    </div>
                    <button
                      onClick={onWatchClick}
                      className="px-2.5 py-1 rounded-lg bg-[#FF9900] hover:bg-[#e68a00] text-black font-mono text-[10px] font-extrabold flex items-center gap-1 cursor-pointer transition-colors"
                    >
                      <Play className="w-2.5 h-2.5 fill-black" /> DEMO
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
          <span>EXPLORE FURTHER </span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </button>
      </div>
    </section>
  );
};

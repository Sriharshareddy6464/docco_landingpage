import React from 'react';
import { Video, Workflow, Cloud, CheckCircle2, ArrowRight, Activity, ShieldCheck, Database, Calendar } from 'lucide-react';
import { FEATURE_CARDS } from '../data/caseStudyData';

export const WhatIsDoccoSection: React.FC = () => {
  return (
    <section id="product" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0A0A0B] relative">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF9900]">
              01 / THE PRODUCT
            </span>
            <span className="h-px w-12 bg-[#FF9900]/40" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            What is Docco?
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed font-normal">
            Docco is a web-based doctor consultation platform designed to connect patients and doctors through a real-time digital consultation workflow.
          </p>
        </div>

        {/* Problem Statement & Concept Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Problem Statement Card */}
          <div className="lg:col-span-6 glass-panel rounded-2xl p-8 border border-white/10 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#FF9900]/10 border border-[#FF9900]/30 text-[#FF9900] text-xs font-mono font-semibold">
                PROBLEM STATEMENT
              </div>
              <h3 className="text-xl font-bold text-slate-100">
                Fragmented Telehealth Interactions
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Traditional doctor-patient consultation workflows often stuck with major coorporations and involve multiple disconnected steps—third-party video links, email scheduling, manual intake forms, and external payment or documentation portals. Access to online doctor consultations is often tied to subscriptions, platform fees, or fragmented patient records.
              </p>
              <p className="text-slate-300 text-sm leading-relaxed">
                Docco provides an open consultation platform where independent doctors can consult patients without upfront fees or subscriptions, using a commission-based model.
                Each consultation can generate a digital prescription linked to the patient profile, allowing patients to access their medical consultation history wherever they log in.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 grid grid-cols-2 gap-4 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FF9900] shrink-0" />
                <span>Zero Plugin Download</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FF9900] shrink-0" />
                <span>Unified Web Interface</span>
              </div>
            </div>
          </div>

          {/* Core Product Interaction Flow Diagram */}
          <div className="lg:col-span-6 glass-panel rounded-2xl p-8 border border-white/10 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#FF9900]/10 border border-[#FF9900]/30 text-[#FF9900] text-xs font-mono font-semibold">
                CORE PRODUCT CONCEPT
              </div>
              <h3 className="text-xl font-bold text-slate-100">
                Unified Consultation Lifecycle
              </h3>
            </div>

            {/* Step-by-Step Flow Chart */}
            <div className="space-y-3 py-2">
              <div className="p-3 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between text-xs">
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded bg-[#FF9900]/10 text-[#FF9900] font-mono font-bold flex items-center justify-center text-[11px]">1</span>
                  <div>
                    <span className="font-semibold text-white block">Patient Discovery & Request</span>
                    <span className="text-slate-400 text-[11px]">Patient searches available doctors & requests appointment</span>
                  </div>
                </div>
                <Calendar className="w-4 h-4 text-[#FF9900]" />
              </div>

              <div className="flex justify-center my-1">
                <ArrowRight className="w-4 h-4 text-slate-600 rotate-90" />
              </div>

              <div className="p-3 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between text-xs">
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded bg-[#FF9900]/10 text-[#FF9900] font-mono font-bold flex items-center justify-center text-[11px]">2</span>
                  <div>
                    <span className="font-semibold text-white block">Doctor Acceptance & Room Entry</span>
                    <span className="text-slate-400 text-[11px]">Doctor accepts consultation request via dashboard</span>
                  </div>
                </div>
                <Workflow className="w-4 h-4 text-[#FF9900]" />
              </div>

              <div className="flex justify-center my-1">
                <ArrowRight className="w-4 h-4 text-slate-600 rotate-90" />
              </div>

              <div className="p-3 rounded-lg bg-[#FF9900]/10 border border-[#FF9900]/30 flex items-center justify-between text-xs">
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded bg-[#FF9900] text-black font-mono font-bold flex items-center justify-center text-[11px]">3</span>
                  <div>
                    <span className="font-semibold text-white block">Real-Time WebRTC Video Room</span>
                    <span className="text-[#FF9900] text-[11px]">Peer-to-peer encrypted HD video & audio consultation</span>
                  </div>
                </div>
                <Video className="w-4 h-4 text-[#FF9900] animate-pulse" />
              </div>
            </div>

            <p className="text-xs font-mono text-slate-400 italic text-center">
              Coordinated seamlessly between React frontend, Express API, PostgreSQL, and WebRTC.
            </p>
          </div>
        </div>

        {/* Three Core Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURE_CARDS.map((card) => {
            const IconComponent =
              card.icon === 'Video'
                ? Video
                : card.icon === 'Workflow'
                  ? Workflow
                  : Cloud;

            return (
              <div
                key={card.id}
                className="glass-panel glass-panel-hover rounded-2xl p-6 border border-white/10 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#FF9900]">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-white tracking-tight">
                    {card.title}
                  </h4>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 space-y-2">
                  <span className="text-[10px] font-mono uppercase text-slate-500 font-semibold block">Key Capabilities</span>
                  <div className="flex flex-wrap gap-1.5">
                    {card.highlights.map((item, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[#FF9900] text-[11px] font-mono"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Product Visual Mockup Panel */}
        <div className="glass-panel rounded-2xl p-6 border border-white/10 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#FF9900]" />
              <span className="text-xs font-mono font-semibold text-slate-200">
                DOCCO APPLICATION INTERFACE MOCKUP
              </span>
            </div>
            <span className="text-[11px] font-mono text-slate-500">React + Vite SPA</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-7 rounded-xl overflow-hidden border border-white/10 shadow-xl relative group">
              <img
                src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=1000&auto=format&fit=crop"
                alt="Docco Doctor Portal Mockup"
                className="w-full h-72 object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono">
                <span className="px-2.5 py-1 rounded bg-black/80 border border-white/10 text-slate-200">
                  Doctor Schedule Management
                </span>
                <span className="px-2.5 py-1 rounded bg-[#FF9900]/20 border border-[#FF9900]/40 text-[#FF9900] font-bold">
                  Active Consultation Room
                </span>
              </div>
            </div>

            <div className="md:col-span-5 space-y-4 text-xs">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                <div className="flex items-center justify-between text-slate-300 font-semibold">
                  <span>Patient Discovery & Intake</span>
                  <Database className="w-3.5 h-3.5 text-[#FF9900]" />
                </div>
                <p className="text-slate-400 leading-relaxed text-[11px]">
                  Patients explore verified doctor profiles, view real-time open slots, and submit clinical reason-for-visit notes.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                <div className="flex items-center justify-between text-slate-300 font-semibold">
                  <span>Peer Connection Engine</span>
                  <Video className="w-3.5 h-3.5 text-[#FF9900]" />
                </div>
                <p className="text-slate-400 leading-relaxed text-[11px]">
                  WebRTC native peer connections exchange SDP credentials and ICE candidates via Node.js signaling for direct P2P video.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                <div className="flex items-center justify-between text-slate-300 font-semibold">
                  <span>Data Persistence</span>
                  <ShieldCheck className="w-3.5 h-3.5 text-[#FF9900]" />
                </div>
                <p className="text-slate-400 leading-relaxed text-[11px]">
                  Consultation histories, prescriptions, and time logs persist to PostgreSQL using Prisma ORM type-safe queries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

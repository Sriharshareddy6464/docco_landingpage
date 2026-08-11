import React, { useState } from 'react';
import { Server, Users, ArrowRight, ShieldCheck, Database, Radio, CheckCircle, Video, Lock, Cpu, Globe } from 'lucide-react';

export const SystemArchitectureSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'appTraffic' | 'mediaPath'>('all');

  return (
    <section id="system" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-800 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF9900]">
              04 / SYSTEM
            </span>
            <span className="h-px w-12 bg-[#FF9900]/40" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How the System Works
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed font-normal">
            A conceptual understanding of Docco before exploring detailed AWS cloud infrastructure.
          </p>
        </div>

        {/* Highlight Important Architecture Concept Callout */}
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
          <div className="flex items-center gap-2 text-[#FF9900] font-mono text-xs font-bold uppercase">
            <Radio className="w-4 h-4 text-[#FF9900]" />
            <span>CRITICAL ARCHITECTURAL DISTINCTION</span>
          </div>
          <p className="text-slate-200 text-sm leading-relaxed">
            <strong className="text-white">The backend does not transmit or proxy the raw video streams.</strong> The application backend coordinates user authentication, doctor availability, room lifecycle, and SDP signaling exchange—while WebRTC manages the direct peer-to-peer audio and video transmission between browsers.
          </p>
        </div>

        {/* View Filter Toggles */}
        <div className="flex items-center justify-center gap-2 font-mono text-xs flex-wrap">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-lg font-semibold transition-all cursor-pointer ${
              activeTab === 'all'
                ? 'bg-[#FF9900] text-black shadow-md shadow-[#FF9900]/20'
                : 'bg-white/5 text-slate-400 border border-white/10 hover:bg-white/10'
            }`}
          >
            SHOW FULL ARCHITECTURE
          </button>
          <button
            onClick={() => setActiveTab('appTraffic')}
            className={`px-4 py-2 rounded-lg font-semibold transition-all cursor-pointer ${
              activeTab === 'appTraffic'
                ? 'bg-[#FF9900] text-black shadow-md shadow-[#FF9900]/20'
                : 'bg-white/5 text-slate-400 border border-white/10 hover:bg-white/10'
            }`}
          >
            APPLICATION REST TRAFFIC ONLY
          </button>
          <button
            onClick={() => setActiveTab('mediaPath')}
            className={`px-4 py-2 rounded-lg font-semibold transition-all cursor-pointer ${
              activeTab === 'mediaPath'
                ? 'bg-[#FF9900] text-black shadow-md shadow-[#FF9900]/20'
                : 'bg-white/5 text-slate-400 border border-white/10 hover:bg-white/10'
            }`}
          >
            REAL-TIME WEBRTC MEDIA PATH
          </button>
        </div>

        {/* High-Level System Architecture Diagram Box */}
        <div className="glass-panel rounded-2xl p-8 border border-white/10 space-y-8">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <h3 className="text-lg font-bold text-white tracking-tight">
              Docco Conceptual Traffic Flow
            </h3>
            <span className="text-xs font-mono text-slate-400">
              Control vs Media Path Separation
            </span>
          </div>

          {/* Conceptual System Diagram Flow Layout */}
          <div className="space-y-8">
            {/* Users Layer */}
            <div className="text-center space-y-3">
              <span className="text-xs font-mono uppercase text-slate-500 tracking-wider font-bold">
                END USERS (CLIENT BROWSERS)
              </span>
              <div className="flex justify-center gap-8">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 w-48 text-center space-y-1 shadow-lg">
                  <span className="text-xs font-bold text-white block">PATIENT</span>
                  <span className="text-[10px] text-[#FF9900] font-mono">Browser (React App)</span>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 w-48 text-center space-y-1 shadow-lg">
                  <span className="text-xs font-bold text-white block">DOCTOR</span>
                  <span className="text-[10px] text-[#FF9900] font-mono">Browser (React App)</span>
                </div>
              </div>
            </div>

            {/* Split Flow Lines */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              {/* Application REST Traffic Container */}
              {(activeTab === 'all' || activeTab === 'appTraffic') && (
                <div className="p-6 rounded-xl bg-white/5 border border-[#FF9900]/30 space-y-4 shadow-xl">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <div className="flex items-center gap-2">
                      <Server className="w-4 h-4 text-[#FF9900]" />
                      <span className="text-xs font-bold font-mono text-[#FF9900]">
                        01. APPLICATION REST TRAFFIC
                      </span>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#FF9900]/10 text-[#FF9900]">
                      HTTP/HTTPS + JSON
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    Used for user authentication, doctor profile queries, booking creation, room validation, and persistent medical notes.
                  </p>

                  <div className="space-y-2 font-mono text-xs">
                    <div className="p-2.5 rounded bg-black/40 border border-white/10 flex items-center justify-between">
                      <span className="text-slate-300">React + Vite Frontend</span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                    </div>
                    <div className="p-2.5 rounded bg-black/40 border border-white/10 flex items-center justify-between">
                      <span className="text-slate-300">Express REST API Server</span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                    </div>
                    <div className="p-2.5 rounded bg-black/40 border border-white/10 flex items-center justify-between">
                      <span className="text-slate-300">Prisma ORM Client</span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                    </div>
                    <div className="p-2.5 rounded bg-black/40 border border-white/10 flex items-center justify-between text-[#FF9900] font-bold">
                      <span>RDS PostgreSQL Database</span>
                      <Database className="w-3.5 h-3.5 text-[#FF9900]" />
                    </div>
                  </div>
                </div>
              )}

              {/* Real-Time WebRTC Media Path Container */}
              {(activeTab === 'all' || activeTab === 'mediaPath') && (
                <div className="p-6 rounded-xl bg-white/5 border border-[#FF9900]/30 space-y-4 shadow-xl">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <div className="flex items-center gap-2">
                      <Video className="w-4 h-4 text-[#FF9900]" />
                      <span className="text-xs font-bold font-mono text-[#FF9900]">
                        02. REAL-TIME MEDIA PATH
                      </span>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#FF9900]/10 text-[#FF9900]">
                      UDP / WebRTC P2P
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    Direct browser-to-browser encrypted audio and video transmission bypasses backend server processing during live consultations.
                  </p>

                  <div className="space-y-2 font-mono text-xs">
                    <div className="p-2.5 rounded bg-black/40 border border-white/10 flex items-center justify-between">
                      <span className="text-slate-300">SDP Signaling Handshake</span>
                      <Radio className="w-3.5 h-3.5 text-[#FF9900] animate-pulse" />
                    </div>
                    <div className="p-2.5 rounded bg-black/40 border border-white/10 flex items-center justify-between">
                      <span className="text-slate-300">ICE Candidates Discovery</span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                    </div>
                    <div className="p-2.5 rounded bg-[#FF9900]/10 border border-[#FF9900]/30 flex items-center justify-between text-[#FF9900] font-bold">
                      <span>Direct P2P Encrypted Stream</span>
                      <Lock className="w-3.5 h-3.5 text-[#FF9900]" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Detailed Explanation Breakdown Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase font-mono tracking-wider flex items-center gap-2">
              <Server className="w-4 h-4 text-[#FF9900]" />
              Application Traffic Responsibilities
            </h4>
            <ul className="space-y-2 text-slate-300 leading-relaxed list-disc list-inside">
              <li>User registration, login authentication, and JWT signing</li>
              <li>Doctor schedule management & appointment slot availability</li>
              <li>Consultation room request, approval, and state transitions</li>
              <li>Post-consultation clinical summary notes & persistent storage</li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase font-mono tracking-wider flex items-center gap-2">
              <Video className="w-4 h-4 text-[#FF9900]" />
              Real-Time Communication Responsibilities
            </h4>
            <ul className="space-y-2 text-slate-300 leading-relaxed list-disc list-inside">
              <li>PeerConnection initialization & browser media device permissions</li>
              <li>Session Description Protocol (SDP) offer/answer creation</li>
              <li>Interactive Connectivity Establishment (ICE) candidate gathering</li>
              <li>Low-latency encrypted audio/video media transport over UDP</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

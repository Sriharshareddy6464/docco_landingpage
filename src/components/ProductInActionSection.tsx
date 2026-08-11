import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Video, Mic, MicOff, VideoOff, ShieldCheck, Activity, Users, Radio, CheckCircle, Wifi } from 'lucide-react';
import { CONSULTATION_SIMULATION_STEPS } from '../data/caseStudyData';

export const ProductInActionSection: React.FC = () => {
  const [currentStepIdx, setCurrentStepIdx] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isAudioMuted, setIsAudioMuted] = useState<boolean>(false);
  const [isVideoDisabled, setIsVideoDisabled] = useState<boolean>(false);

  // Auto-play steps timer when playing
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentStepIdx((prev) => (prev + 1) % CONSULTATION_SIMULATION_STEPS.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const activeStep = CONSULTATION_SIMULATION_STEPS[currentStepIdx];

  return (
    <section id="demo" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-800 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF9900]">
              02 / PRODUCT IN ACTION
            </span>
            <span className="h-px w-12 bg-[#FF9900]/40" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            See Docco in Action
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed font-normal">
            An end-to-end interactive simulation demonstrating a real doctor consultation workflow—from patient request and doctor acceptance to encrypted WebRTC P2P video communication.
          </p>
        </div>

        {/* Main Demonstration Viewer Box */}
        <div className="glass-panel rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
          {/* Top Control Bar */}
          <div className="p-4 bg-white/5 border-b border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded bg-[#FF9900]/10 border border-[#FF9900]/30 text-[#FF9900] font-bold">
                WORKFLOW SIMULATOR
              </span>
              <span className="text-slate-400">
                Step {currentStepIdx + 1} of {CONSULTATION_SIMULATION_STEPS.length}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className={`px-3 py-1.5 rounded text-xs font-semibold flex items-center gap-1.5 cursor-pointer transition-colors ${
                  isPlaying
                    ? 'bg-[#FF9900]/20 border border-[#FF9900]/40 text-[#FF9900] hover:bg-[#FF9900]/30'
                    : 'bg-[#FF9900] text-black hover:bg-[#e68a00]'
                }`}
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                {isPlaying ? 'PAUSE DEMO' : 'PLAY DEMO'}
              </button>

              <button
                onClick={() => setCurrentStepIdx(0)}
                className="p-1.5 rounded bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 cursor-pointer"
                title="Restart Sequence"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Interactive Screen Display */}
          <div className="p-6 bg-slate-950 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Split Screen Video View (Patient & Doctor Feeds) */}
            <div className="lg:col-span-8 space-y-4">
              <div className="relative rounded-xl border border-slate-800 bg-slate-900 overflow-hidden aspect-video shadow-2xl">
                {/* Status Bar Overlay */}
                <div className="absolute top-3 left-3 right-3 z-10 flex items-center justify-between text-[11px] font-mono">
                  <div className="px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur border border-slate-800 text-slate-200 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{activeStep.title}</span>
                  </div>

                  <div className="px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur border border-cyan-800/80 text-cyan-300 font-bold flex items-center gap-1.5">
                    <Wifi className="w-3 h-3 text-emerald-400" />
                    <span>{activeStep.badge}</span>
                  </div>
                </div>

                {/* Primary Stream Display according to step */}
                <div className="w-full h-full relative flex items-center justify-center bg-slate-950">
                  {currentStepIdx < 4 ? (
                    /* Pre-call Application & Dashboard Interface View */
                    <div className="w-full h-full p-6 flex flex-col justify-between bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900">
                      <div className="flex items-center justify-between pt-8 border-b border-slate-800 pb-3">
                        <div>
                          <h4 className="text-lg font-bold text-white">Docco Patient Portal</h4>
                          <p className="text-xs text-slate-400 font-mono">Consultation Request #892-2026</p>
                        </div>
                        <span className="px-2.5 py-1 rounded bg-cyan-950 text-cyan-400 font-mono text-xs font-semibold">
                          Dr. Sarah Jenkins (Cardiology)
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-4 py-4">
                        <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-xs space-y-1">
                          <span className="text-slate-400 block text-[10px] font-mono">PATIENT INTAKE</span>
                          <span className="text-slate-200 font-semibold block">Chest tightness during light exercises</span>
                          <span className="text-slate-500 text-[10px]">Submitted: 2 mins ago</span>
                        </div>
                        <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-xs space-y-1">
                          <span className="text-slate-400 block text-[10px] font-mono">CONSULTATION SLOT</span>
                          <span className="text-emerald-400 font-semibold block">Today @ 11:30 AM EST</span>
                          <span className="text-slate-500 text-[10px]">Status: {activeStep.badge}</span>
                        </div>
                      </div>

                      <div className="p-3 rounded-lg bg-cyan-950/30 border border-cyan-800/60 flex items-center justify-between text-xs font-mono">
                        <span className="text-cyan-300">System Handshake in Progress...</span>
                        <Activity className="w-4 h-4 text-cyan-400 animate-spin" />
                      </div>
                    </div>
                  ) : (
                    /* Active WebRTC Live Video Stream */
                    <div className="w-full h-full relative">
                      {!isVideoDisabled ? (
                        <img
                          src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop"
                          alt="Live Doctor Stream"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center bg-slate-900 text-slate-500 text-xs font-mono">
                          <VideoOff className="w-8 h-8 mb-2 text-slate-600" />
                          <span>Video Camera Disabled</span>
                        </div>
                      )}

                      {/* Doctor Label Overlay */}
                      <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-lg bg-slate-950/90 backdrop-blur border border-slate-800 text-xs text-white">
                        <span className="font-bold block">Dr. Sarah Jenkins</span>
                        <span className="text-[10px] text-cyan-400 font-mono">Consultation Host (Doctor)</span>
                      </div>

                      {/* Patient PIP Thumbnail View */}
                      <div className="absolute bottom-4 right-4 w-36 h-24 rounded-lg bg-slate-950 border border-slate-700 overflow-hidden shadow-2xl">
                        {!isVideoDisabled ? (
                          <img
                            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop"
                            alt="Patient Feed"
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-slate-900 text-slate-600">
                            <VideoOff className="w-5 h-5" />
                          </div>
                        )}
                        <div className="absolute bottom-1 left-1 px-1 rounded bg-black/80 text-[9px] font-mono text-slate-300">
                          Patient (You)
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Video Controls Bar */}
                <div className="p-3 bg-slate-900 border-t border-slate-800 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setIsAudioMuted(!isAudioMuted)}
                      className={`p-2 rounded cursor-pointer transition-colors ${
                        isAudioMuted ? 'bg-red-950 border border-red-800 text-red-400' : 'bg-slate-800 hover:bg-slate-700 text-slate-200'
                      }`}
                      title="Toggle Mute"
                    >
                      {isAudioMuted ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                    </button>

                    <button
                      onClick={() => setIsVideoDisabled(!isVideoDisabled)}
                      className={`p-2 rounded cursor-pointer transition-colors ${
                        isVideoDisabled ? 'bg-red-950 border border-red-800 text-red-400' : 'bg-slate-800 hover:bg-slate-700 text-slate-200'
                      }`}
                      title="Toggle Video"
                    >
                      {isVideoDisabled ? <VideoOff className="w-4 h-4" /> : <Video className="w-4 h-4" />}
                    </button>

                    <span className="text-slate-400 hidden sm:inline">
                      {isAudioMuted ? 'Mic Muted' : 'Mic Active'} • {isVideoDisabled ? 'Video Off' : 'Camera Active'}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-[11px] text-slate-400">
                    <span className="text-cyan-400 font-semibold">{activeStep.time}</span>
                    <span className="text-emerald-400 font-bold">WebRTC P2P</span>
                  </div>
                </div>
              </div>

              {/* Caption */}
              <p className="text-center text-xs font-mono text-slate-400">
                A real browser-to-browser consultation running through Docco.
              </p>
            </div>

            {/* Interactive Timeline Stepper Panel */}
            <div className="lg:col-span-4 space-y-3">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">
                Workflow Step Progression
              </h3>

              <div className="space-y-2">
                {CONSULTATION_SIMULATION_STEPS.map((step, idx) => {
                  const isActive = idx === currentStepIdx;
                  return (
                    <button
                      key={step.step}
                      onClick={() => {
                        setCurrentStepIdx(idx);
                        setIsPlaying(false);
                      }}
                      className={`w-full p-3 rounded-xl border text-left transition-all cursor-pointer flex items-start gap-3 ${
                        isActive
                          ? 'bg-[#FF9900]/10 border-[#FF9900]/60 shadow-lg shadow-[#FF9900]/10'
                          : 'bg-white/5 border-white/10 hover:bg-white/10 text-slate-400'
                      }`}
                    >
                      <span
                        className={`w-6 h-6 rounded-full font-mono text-xs font-bold flex items-center justify-center shrink-0 ${
                          isActive
                            ? 'bg-[#FF9900] text-black'
                            : 'bg-white/10 text-slate-400'
                        }`}
                      >
                        {step.step}
                      </span>

                      <div className="space-y-1 overflow-hidden">
                        <div className="flex items-center justify-between gap-2">
                          <span className={`text-xs font-bold truncate ${isActive ? 'text-white' : 'text-slate-300'}`}>
                            {step.title}
                          </span>
                          <span className="text-[10px] font-mono text-[#FF9900] shrink-0">
                            {step.badge}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Active Step Technical Detail Box */}
              {activeStep.mediaDetails && (
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-2 text-xs font-mono">
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-bold">
                    Active Step Telemetry
                  </span>
                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                    <div>
                      <span className="text-slate-400 block">Resolution:</span>
                      <span className="text-[#FF9900] font-bold">{activeStep.mediaDetails.resolution || 'N/A'}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block">Transport Protocol:</span>
                      <span className="text-emerald-400 font-bold">{activeStep.mediaDetails.codec || 'N/A'}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block">Signaling RTT:</span>
                      <span className="text-[#FF9900] font-bold">{activeStep.mediaDetails.latency || 'N/A'}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block">Stream Bitrate:</span>
                      <span className="text-emerald-400 font-bold">{activeStep.mediaDetails.bitrate || 'N/A'}</span>
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

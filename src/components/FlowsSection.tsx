import React, { useState } from 'react';
import { User, Stethoscope, Database, Video, ArrowRight, CheckCircle2, Lock, Radio, ShieldCheck, Cpu } from 'lucide-react';
import { PATIENT_FLOW_STEPS, DOCTOR_FLOW_STEPS, API_DATA_FLOW_STEPS, WEBRTC_FLOW_STEPS } from '../data/caseStudyData';
import { FlowStep, FlowType } from '../types';

export const FlowsSection: React.FC = () => {
  const [activeFlow, setActiveFlow] = useState<FlowType>('patient');
  const [activeStepIdx, setActiveStepIdx] = useState<number>(0);

  const stepsForFlow: FlowStep[] =
    activeFlow === 'patient'
      ? PATIENT_FLOW_STEPS
      : activeFlow === 'doctor'
      ? DOCTOR_FLOW_STEPS
      : activeFlow === 'api'
      ? API_DATA_FLOW_STEPS
      : WEBRTC_FLOW_STEPS;

  const currentStep = stepsForFlow[activeStepIdx] || stepsForFlow[0];

  return (
    <section id="flows" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-800 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF9900]">
              06 / FLOWS
            </span>
            <span className="h-px w-12 bg-[#FF9900]/40" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            User, Data & WebRTC Flows
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed font-normal">
            Isolated visual flows tracing user interactions, API payload dispatching, database persistence, and WebRTC media stream establishment.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 font-mono text-xs">
          <button
            onClick={() => {
              setActiveFlow('patient');
              setActiveStepIdx(0);
            }}
            className={`p-4 rounded-xl border text-left transition-all cursor-pointer flex items-center gap-3 ${
              activeFlow === 'patient'
                ? 'bg-[#FF9900]/10 border-[#FF9900]/60 text-white shadow-lg shadow-[#FF9900]/10'
                : 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10'
            }`}
          >
            <User className={`w-5 h-5 ${activeFlow === 'patient' ? 'text-[#FF9900]' : 'text-slate-500'}`} />
            <div>
              <span className="font-bold block">Patient Journey</span>
              <span className="text-[10px] text-slate-400">07.1 Flow</span>
            </div>
          </button>

          <button
            onClick={() => {
              setActiveFlow('doctor');
              setActiveStepIdx(0);
            }}
            className={`p-4 rounded-xl border text-left transition-all cursor-pointer flex items-center gap-3 ${
              activeFlow === 'doctor'
                ? 'bg-[#FF9900]/10 border-[#FF9900]/60 text-white shadow-lg shadow-[#FF9900]/10'
                : 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10'
            }`}
          >
            <Stethoscope className={`w-5 h-5 ${activeFlow === 'doctor' ? 'text-[#FF9900]' : 'text-slate-500'}`} />
            <div>
              <span className="font-bold block">Doctor Journey</span>
              <span className="text-[10px] text-slate-400">07.2 Flow</span>
            </div>
          </button>

          <button
            onClick={() => {
              setActiveFlow('api');
              setActiveStepIdx(0);
            }}
            className={`p-4 rounded-xl border text-left transition-all cursor-pointer flex items-center gap-3 ${
              activeFlow === 'api'
                ? 'bg-[#FF9900]/10 border-[#FF9900]/60 text-white shadow-lg shadow-[#FF9900]/10'
                : 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10'
            }`}
          >
            <Database className={`w-5 h-5 ${activeFlow === 'api' ? 'text-[#FF9900]' : 'text-slate-500'}`} />
            <div>
              <span className="font-bold block">API & Data Flow</span>
              <span className="text-[10px] text-slate-400">07.3 Flow</span>
            </div>
          </button>

          <button
            onClick={() => {
              setActiveFlow('webrtc');
              setActiveStepIdx(0);
            }}
            className={`p-4 rounded-xl border text-left transition-all cursor-pointer flex items-center gap-3 ${
              activeFlow === 'webrtc'
                ? 'bg-[#FF9900]/10 border-[#FF9900]/60 text-white shadow-lg shadow-[#FF9900]/10'
                : 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10'
            }`}
          >
            <Video className={`w-5 h-5 ${activeFlow === 'webrtc' ? 'text-[#FF9900] animate-pulse' : 'text-slate-500'}`} />
            <div>
              <span className="font-bold block">WebRTC Flow</span>
              <span className="text-[10px] text-slate-400">07.4 Flow</span>
            </div>
          </button>
        </div>

        {/* WebRTC Control vs Media Explanation Banner if WebRTC selected */}
        {activeFlow === 'webrtc' && (
          <div className="p-4 rounded-xl bg-[#FF9900]/10 border border-[#FF9900]/30 text-xs font-mono text-[#FF9900] flex items-center gap-3">
            <Radio className="w-5 h-5 text-[#FF9900] shrink-0 animate-pulse" />
            <div>
              <strong className="text-white block font-sans text-sm font-bold">Explicit Signaling vs Media Isolation:</strong>
              Steps 1-4 execute over <span className="text-[#FF9900] font-bold">CONTROL / SIGNALING PATH</span> (HTTP/JSON). Step 5 operates over <span className="text-[#FF9900] font-bold">DIRECT P2P MEDIA PATH</span> (UDP/SRTP).
            </div>
          </div>
        )}

        {/* Interactive Flow Stepper & Diagram Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Stepper List */}
          <div className="lg:col-span-5 space-y-2">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">
              Flow Stage Sequence
            </h3>

            {stepsForFlow.map((step, idx) => {
              const isActive = idx === activeStepIdx;
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStepIdx(idx)}
                  className={`w-full p-3.5 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                    isActive
                      ? 'bg-[#FF9900]/10 border-[#FF9900]/60 text-white shadow-md'
                      : 'bg-white/5 border-white/10 hover:bg-white/10 text-slate-400'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-6 h-6 rounded-full font-mono text-xs font-bold flex items-center justify-center ${
                        isActive ? 'bg-[#FF9900] text-black' : 'bg-white/10 text-slate-400'
                      }`}
                    >
                      {step.id}
                    </span>
                    <div>
                      <span className="text-xs font-bold block text-slate-200">{step.title}</span>
                      <span className="text-[10px] font-mono text-slate-400">{step.subtitle}</span>
                    </div>
                  </div>

                  {step.isMediaStream ? (
                    <span className="px-2 py-0.5 rounded bg-[#FF9900]/20 border border-[#FF9900]/40 text-[#FF9900] text-[10px] font-mono font-bold">
                      MEDIA STREAM
                    </span>
                  ) : (
                    <span className="px-2 py-0.5 rounded bg-black/40 text-slate-400 text-[10px] font-mono">
                      CONTROL
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Active Flow Step Visual Card */}
          <div className="lg:col-span-7 glass-panel rounded-2xl p-8 border border-white/10 space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span className="text-xs font-mono text-[#FF9900] font-bold uppercase">
                  STEP {currentStep.id}: {currentStep.title}
                </span>
                <p className="text-sm font-bold text-white mt-1">{currentStep.subtitle}</p>
              </div>

              {currentStep.isMediaStream ? (
                <span className="px-3 py-1 rounded bg-[#FF9900]/20 border border-[#FF9900]/40 text-[#FF9900] font-mono text-xs font-bold">
                  P2P UDP STREAM
                </span>
              ) : (
                <span className="px-3 py-1 rounded bg-[#FF9900]/10 border border-[#FF9900]/30 text-[#FF9900] font-mono text-xs font-bold">
                  HTTP REST / SIGNALING
                </span>
              )}
            </div>

            {/* Source & Destination Routing Box */}
            <div className="p-4 rounded-xl bg-black/40 border border-white/10 flex items-center justify-between text-xs font-mono">
              <div className="space-y-1">
                <span className="text-[10px] text-slate-500 uppercase block font-bold">SOURCE ORIGIN</span>
                <span className="text-white font-bold">{currentStep.source}</span>
              </div>

              <ArrowRight className="w-5 h-5 text-[#FF9900] animate-pulse" />

              <div className="space-y-1 text-right">
                <span className="text-[10px] text-slate-500 uppercase block font-bold">DESTINATION TARGET</span>
                <span className="text-[#FF9900] font-bold">{currentStep.destination}</span>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase text-slate-400 font-semibold block">
                Technical Mechanism:
              </span>
              <p className="text-slate-300 text-sm leading-relaxed bg-white/5 p-4 rounded-xl border border-white/10">
                {currentStep.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

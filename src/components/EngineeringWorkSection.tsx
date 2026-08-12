import React, { useState } from 'react';
import { AlertTriangle, Search, CheckCircle2, Lightbulb, ShieldAlert, Cpu, Network, Database, Lock, Activity } from 'lucide-react';
import { ENGINEERING_CHALLENGES } from '../data/caseStudyData';

export const EngineeringWorkSection: React.FC = () => {
  const [activeChallengeId, setActiveChallengeId] = useState<string>(ENGINEERING_CHALLENGES[0].id);

  const activeChallenge = ENGINEERING_CHALLENGES.find((c) => c.id === activeChallengeId) || ENGINEERING_CHALLENGES[0];

  return (
    <section id="engineering" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0A0A0B] relative">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF9900]">
              06 / ENGINEERING
            </span>
            <span className="h-px w-12 bg-[#FF9900]/40" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering Behind the Deployment
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed font-normal">
            Real infrastructure challenges encountered during deployment, structured through a rigorous Problem → Investigation → Resolution → Engineering Lesson framework.
          </p>
        </div>

        {/* Challenge Selection Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          {ENGINEERING_CHALLENGES.map((challenge) => {
            const isActive = challenge.id === activeChallengeId;
            return (
              <button
                key={challenge.id}
                onClick={() => setActiveChallengeId(challenge.id)}
                className={`p-4 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between space-y-3 ${
                  isActive
                    ? 'bg-[#FF9900]/10 border-[#FF9900]/60 text-white shadow-xl shadow-[#FF9900]/10'
                    : 'bg-white/5 border-white/10 hover:bg-white/10 text-slate-400'
                }`}
              >
                <div className="space-y-1">
                  <span className={`text-[10px] font-mono font-bold uppercase block ${isActive ? 'text-[#FF9900]' : 'text-slate-500'}`}>
                    {challenge.categoryLabel}
                  </span>
                  <span className="text-xs font-bold line-clamp-2 text-slate-200">
                    {challenge.title}
                  </span>
                </div>

                <span className={`text-[10px] font-mono font-semibold ${isActive ? 'text-[#FF9900]' : 'text-slate-500'}`}>
                  RESOLVED ✓
                </span>
              </button>
            );
          })}
        </div>

        {/* Detailed Investigation Card */}
        <div className="glass-panel rounded-2xl p-8 border border-white/10 space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <span className="text-xs font-mono text-[#FF9900] font-bold uppercase">
                ENGINEERING CASE #{activeChallenge.id.toUpperCase()}
              </span>
              <h3 className="text-2xl font-bold text-white tracking-tight mt-1">
                {activeChallenge.title}
              </h3>
            </div>
            <span className="px-3 py-1 rounded bg-white/5 border border-white/10 text-slate-300 font-mono text-xs">
              {activeChallenge.categoryLabel}
            </span>
          </div>

          {/* 4 Step Resolution Framework */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
            {/* 01 PROBLEM */}
            <div className="p-5 rounded-xl bg-red-950/20 border border-red-900/60 space-y-2">
              <div className="flex items-center gap-2 text-red-400 font-mono font-bold uppercase">
                <AlertTriangle className="w-4 h-4" />
                <span>01 — THE PROBLEM</span>
              </div>
              <p className="text-slate-300 leading-relaxed text-xs">
                {activeChallenge.problem}
              </p>
            </div>

            {/* 02 INVESTIGATION */}
            <div className="p-5 rounded-xl bg-amber-950/20 border border-amber-900/60 space-y-2">
              <div className="flex items-center gap-2 text-[#FF9900] font-mono font-bold uppercase">
                <Search className="w-4 h-4" />
                <span>02 — ROOT CAUSE INVESTIGATION</span>
              </div>
              <p className="text-slate-300 leading-relaxed text-xs">
                {activeChallenge.investigation}
              </p>
            </div>

            {/* 03 RESOLUTION */}
            <div className="p-5 rounded-xl bg-[#FF9900]/10 border border-[#FF9900]/30 space-y-2">
              <div className="flex items-center gap-2 text-[#FF9900] font-mono font-bold uppercase">
                <CheckCircle2 className="w-4 h-4" />
                <span>03 — ENGINEERING RESOLUTION</span>
              </div>
              <p className="text-slate-300 leading-relaxed text-xs">
                {activeChallenge.resolution}
              </p>
            </div>

            {/* 04 LESSON */}
            <div className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-[#FF9900] font-mono font-bold uppercase">
                <Lightbulb className="w-4 h-4" />
                <span>04 — ENGINEERING LESSON</span>
              </div>
              <p className="text-slate-300 leading-relaxed text-xs">
                {activeChallenge.lesson}
              </p>
            </div>
          </div>

          {/* Impact Metrics Banner */}
          <div className="pt-4 border-t border-white/10 space-y-2">
            <span className="text-[10px] font-mono text-slate-500 uppercase font-bold block">
              Quantitative Engineering Impact:
            </span>
            <div className="flex flex-wrap gap-3">
              {activeChallenge.impactMetrics.map((metric, i) => (
                <div key={i} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[#FF9900] text-xs font-mono font-semibold flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF9900]" />
                  <span>{metric}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

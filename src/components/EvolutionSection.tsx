import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Layers, GitBranch, Terminal, RefreshCw } from 'lucide-react';
import { TIMELINE_STAGES } from '../data/caseStudyData';

export const EvolutionSection: React.FC = () => {
  const [selectedStageIdx, setSelectedStageIdx] = useState<number>(TIMELINE_STAGES.length - 1);

  const selectedStage = TIMELINE_STAGES[selectedStageIdx];

  return (
    <section id="evolution" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-800 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF9900]">
              07 / EVOLUTION
            </span>
            <span className="h-px w-12 bg-[#FF9900]/40" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            From Application to Infrastructure
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed font-normal">
            The incremental engineering journey of Docco—evolving from a local proof-of-concept into a resilient, observed, and codified AWS cloud deployment.
          </p>
        </div>

        {/* Before vs After Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* BEFORE */}
          <div className="glass-panel rounded-2xl p-6 border border-white/10 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="text-xs font-mono font-bold uppercase text-amber-400">
                INITIAL STATE (EARLY DEPLOYMENT)
              </span>
              <span className="text-[10px] font-mono text-slate-500">Phases 01-02</span>
            </div>

            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex items-start gap-2.5">
                <span className="text-amber-400 font-bold">•</span>
                <span>Manual AWS Console provisioning and SSH configuration</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-amber-400 font-bold">•</span>
                <span>Co-located PostgreSQL database on same EC2 host as application</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-amber-400 font-bold">•</span>
                <span>Static HTTP signaling without TLS termination</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-amber-400 font-bold">•</span>
                <span>Zero containerization; manual `git pull` & `npm start` releases</span>
              </li>
            </ul>
          </div>

          {/* AFTER */}
          <div className="glass-panel rounded-2xl p-6 border border-[#FF9900]/30 bg-[#FF9900]/5 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="text-xs font-mono font-bold uppercase text-[#FF9900]">
                FINAL STATE (DEVOPS ARCHITECTURE)
              </span>
              <span className="text-[10px] font-mono text-[#FF9900] font-bold">Phases 05-07</span>
            </div>

            <ul className="space-y-3 text-xs text-slate-200">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#FF9900] shrink-0 mt-0.5" />
                <span>Declarative Infrastructure as Code (Terraform)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#FF9900] shrink-0 mt-0.5" />
                <span>Multi-subnet VPC with managed PostgreSQL RDS isolation</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#FF9900] shrink-0 mt-0.5" />
                <span>ALB load balancing with ACM SSL/TLS termination</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#FF9900] shrink-0 mt-0.5" />
                <span>Docker multi-stage builds & full Prometheus/Grafana observability</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Timeline Stepper */}
        <div className="space-y-8">
          <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
            7-Phase Evolution Timeline
          </h3>

          {/* Horizontal Timeline Bar on Desktop */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
            {TIMELINE_STAGES.map((stage, idx) => {
              const isActive = idx === selectedStageIdx;
              return (
                <button
                  key={stage.number}
                  onClick={() => setSelectedStageIdx(idx)}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer space-y-1 ${
                    isActive
                      ? 'bg-[#FF9900]/10 border-[#FF9900]/60 text-white shadow-lg shadow-[#FF9900]/10'
                      : 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center justify-between text-[10px] font-mono">
                    <span className="font-bold text-[#FF9900]">{stage.phase}</span>
                    <span>#{stage.number}</span>
                  </div>
                  <span className="text-xs font-bold block truncate text-slate-200">
                    {stage.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Selected Stage Detail Display */}
          <div className="glass-panel rounded-2xl p-8 border border-white/10 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <span className="text-xs font-mono text-[#FF9900] font-bold uppercase">
                  {selectedStage.phase}: {selectedStage.subtitle}
                </span>
                <h3 className="text-2xl font-bold text-white tracking-tight mt-1">
                  {selectedStage.title}
                </h3>
              </div>
              <span className="px-3 py-1 bg-white/5 border border-white/10 text-slate-300 font-mono text-xs rounded">
                Evolution Phase #{selectedStage.number}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                <span className="text-[10px] font-mono text-slate-500 uppercase block font-bold">WHAT CHANGED</span>
                <p className="text-slate-300 leading-relaxed">{selectedStage.whatChanged}</p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                <span className="text-[10px] font-mono text-slate-500 uppercase block font-bold">WHY IT CHANGED</span>
                <p className="text-slate-300 leading-relaxed">{selectedStage.whyItChanged}</p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                <span className="text-[10px] font-mono text-[#FF9900] uppercase block font-bold">ENGINEERING OUTCOME</span>
                <p className="text-slate-200 font-semibold leading-relaxed">{selectedStage.outcome}</p>
              </div>
            </div>

            {/* Tech Added Badges */}
            <div className="pt-4 border-t border-white/10 space-y-2">
              <span className="text-[10px] font-mono text-slate-500 uppercase font-bold block">
                Technologies Integrated in Phase #{selectedStage.number}:
              </span>
              <div className="flex flex-wrap gap-2">
                {selectedStage.techAdded.map((t, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[#FF9900] text-xs font-mono font-semibold"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

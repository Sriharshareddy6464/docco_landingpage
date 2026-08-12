import React, { useState } from 'react';
import { Server, Network, ShieldCheck, Box, LineChart, Layers, CheckCircle2, Cpu, ArrowRight, Globe, Video, Database } from 'lucide-react';
import { RESPONSIBILITY_CATEGORIES, FULL_STACK_CATEGORIES } from '../data/caseStudyData';

export const MyRoleSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'myRole' | 'fullStack'>('myRole');
  const [activeCategoryIdx, setActiveCategoryIdx] = useState<number>(0);

  const categories = activeTab === 'myRole' ? RESPONSIBILITY_CATEGORIES : FULL_STACK_CATEGORIES;
  const activeCategory = categories[activeCategoryIdx] || categories[0];

  return (
    <section id="role" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0A0A0B] relative">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF9900]">
              03 / MY ROLE
            </span>
            <span className="h-px w-12 bg-[#FF9900]/40" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            My Role — AWS DevOps Engineer
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed font-normal">
            My responsibility in Docco focused on designing, deploying, securing, automating, and operating the AWS infrastructure required to run the application.
          </p>
        </div>

        {/* Ownership Boundary Distinction Banner */}
        <div className="glass-panel rounded-2xl p-6 border border-[#FF9900]/30 bg-[#FF9900]/5 relative overflow-hidden">
          <div className="flex items-center gap-2 mb-4">
            <Layers className="w-5 h-5 text-[#FF9900]" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#FF9900]">
              ENGINEERING OWNERSHIP & RESPONSIBILITY BOUNDARY
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-11 gap-6 items-center text-xs">
            {/* Overall Application Layer - Interactive Tab */}
            <button
              onClick={() => {
                setActiveTab('fullStack');
                setActiveCategoryIdx(0);
              }}
              className={`lg:col-span-5 p-4 rounded-xl text-left space-y-2 transition-all cursor-pointer ${
                activeTab === 'fullStack'
                  ? 'bg-[#FF9900]/10 border border-[#FF9900]/40 text-white shadow-lg shadow-[#FF9900]/5 scale-[1.02]'
                  : 'bg-white/5 border border-white/10 text-slate-400 hover:bg-white/10 hover:border-white/20'
              }`}
            >
              <span className={`text-[10px] font-mono uppercase tracking-wider block font-bold ${
                activeTab === 'fullStack' ? 'text-[#FF9900]' : 'text-slate-400'
              }`}>
                FULL STACK APPLICATION (ACTIVE TAB)
              </span>
              <p className={`font-semibold text-sm ${activeTab === 'fullStack' ? 'text-white' : 'text-slate-300'}`}>
                React • Vite • Node.js • Express • WebRTC • Prisma • PostgreSQL
              </p>
              <p className="leading-relaxed text-[11px]">
                The complete web application codebase supporting doctor/patient consultation logic and WebRTC media streaming.
              </p>
            </button>

            {/* Separator Plus */}
            <div className="lg:col-span-1 flex justify-center text-[#FF9900] font-mono font-extrabold text-2xl">
              +
            </div>

            {/* My Primary Engineering Focus - Interactive Tab */}
            <button
              onClick={() => {
                setActiveTab('myRole');
                setActiveCategoryIdx(0);
              }}
              className={`lg:col-span-5 p-4 rounded-xl text-left space-y-2 transition-all cursor-pointer ${
                activeTab === 'myRole'
                  ? 'bg-[#FF9900]/10 border border-[#FF9900]/40 text-white shadow-lg shadow-[#FF9900]/5 scale-[1.02]'
                  : 'bg-white/5 border border-white/10 text-slate-400 hover:bg-white/10 hover:border-white/20'
              }`}
            >
              <span className={`text-[10px] font-mono uppercase tracking-wider block font-bold ${
                activeTab === 'myRole' ? 'text-[#FF9900]' : 'text-slate-400'
              }`}>
                MY ROLE - AWS DEVOPS ENGINEER (ACTIVE TAB)
              </span>
              <p className={`font-semibold text-sm ${activeTab === 'myRole' ? 'text-white' : 'text-slate-300'}`}>
                AWS Infrastructure • Deployment • Networking • Security • Observability
              </p>
              <p className="leading-relaxed text-[11px]">
                Designing, provisioning, securing, and operating the AWS cloud infrastructure hosting the Docco application.
              </p>
            </button>
          </div>
        </div>

        {/* Interactive Responsibility Category Selector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Category List */}
          <div className="lg:col-span-5 space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">
              {activeTab === 'myRole' ? 'DevOps Engineering Scope' : 'Full Stack Engineering Scope'}
            </h3>

            {categories.map((cat, idx) => {
              const isActive = idx === activeCategoryIdx;
              const IconComp = (() => {
                switch (cat.id) {
                  case 'infra': return Server;
                  case 'networking': return Network;
                  case 'security': return ShieldCheck;
                  case 'deployment': return Box;
                  case 'observability': return LineChart;
                  case 'frontend': return Globe;
                  case 'backend': return Cpu;
                  case 'database': return Database;
                  case 'webrtc': return Video;
                  case 'testing': return ShieldCheck;
                  default: return Server;
                }
              })();

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategoryIdx(idx)}
                  className={`w-full p-4 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${isActive
                      ? 'bg-[#FF9900]/10 border-[#FF9900]/60 shadow-xl shadow-[#FF9900]/10 text-white'
                      : 'bg-white/5 border-white/10 hover:bg-white/10 text-slate-400'
                    }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`text-xs font-mono font-bold px-2 py-1 rounded ${isActive ? 'bg-[#FF9900] text-black' : 'bg-white/10 text-slate-400'
                        }`}
                    >
                      {cat.number}
                    </span>
                    <div className="space-y-0.5">
                      <span className="text-sm font-bold block">{cat.title}</span>
                      <span className="text-[11px] text-slate-400 line-clamp-1 font-mono">
                        {cat.awsServices.join(' • ')}
                      </span>
                    </div>
                  </div>

                  <IconComp className={`w-5 h-5 ${isActive ? 'text-[#FF9900]' : 'text-slate-600'}`} />
                </button>
              );
            })}
          </div>

          {/* Detailed Category View Panel */}
          <div className="lg:col-span-7 glass-panel rounded-2xl p-8 border border-white/10 space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="space-y-1">
                  <span className="text-xs font-mono text-[#FF9900] font-bold">
                    CATEGORY {activeCategory.number}
                  </span>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    {activeCategory.title}
                  </h3>
                </div>
                <span className="px-3 py-1 rounded bg-white/5 border border-white/10 text-slate-300 font-mono text-xs">
                  {activeTab === 'myRole' ? 'DevOps Scope' : 'Full Stack Scope'}
                </span>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">
                {activeCategory.description}
              </p>

              {/* Implementation Bullet List */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-mono uppercase text-slate-400 font-semibold block">
                  Executed Deliverables:
                </span>
                <div className="space-y-2.5">
                  {activeCategory.items.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-[#FF9900] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* AWS Services / Tech Badges */}
            <div className="pt-6 border-t border-white/10 space-y-2">
              <span className="text-[10px] font-mono uppercase text-slate-500 font-semibold block">
                {activeTab === 'myRole' ? 'AWS Services & Technologies Utilized:' : 'Technologies & Frameworks Utilized:'}
              </span>
              <div className="flex flex-wrap gap-2">
                {activeCategory.awsServices.map((svc, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded bg-[#FF9900]/10 border border-[#FF9900]/30 text-[#FF9900] text-xs font-mono font-semibold"
                  >
                    {svc}
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

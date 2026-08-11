import React from 'react';
import { BookOpen, ExternalLink, FileText, CheckCircle2, Clock, Calendar, ArrowRight } from 'lucide-react';
import { DEEP_DIVE_TOPICS, CONTACT_LINKS } from '../data/caseStudyData';

export const TechnicalDeepDiveSection: React.FC = () => {
  return (
    <section id="deep-dive" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-800 bg-slate-950/80 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF9900]">
              09 / TECHNICAL DEEP DIVE
            </span>
            <span className="h-px w-12 bg-[#FF9900]/40" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Want to Go Deeper?
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed font-normal">
            This landing page presents the visual and architectural overview. The comprehensive Medium technical case study breaks down code implementations, signaling algorithms, and AWS CLI configurations.
          </p>
        </div>

        {/* Medium Article Preview Banner Box */}
        <div className="glass-panel rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Left Cover Banner */}
            <div className="lg:col-span-5 relative bg-white/5 p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono">
                  <span className="px-2.5 py-1 rounded bg-[#FF9900]/10 text-[#FF9900] font-bold border border-[#FF9900]/30">
                    MEDIUM TECHNICAL ARTICLE
                  </span>
                  <span className="text-slate-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-500" /> 12 min read
                  </span>
                </div>

                <h3 className="text-2xl font-extrabold text-white leading-tight">
                  Docco — Building a Real-Time WebRTC Doctor Consultation Platform on AWS
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  An in-depth engineering breakdown covering WebRTC SDP renegotiation, multi-subnet AWS VPC security group chaining, Prisma PostgreSQL ORM pooling, and full Prometheus/Grafana observability on EC2.
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" /> Published August 2026
                </span>
                <span className="text-[#FF9900] font-bold">Medium Case Study</span>
              </div>
            </div>

            {/* Right Topic Breakdown & CTA */}
            <div className="lg:col-span-7 p-8 space-y-6 flex flex-col justify-between bg-black/60">
              <div className="space-y-4">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block">
                  Detailed Article Content Coverage:
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {DEEP_DIVE_TOPICS.map((topic, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-2">
                      <div className="flex items-center justify-between font-bold text-white">
                        <span className="line-clamp-1">{topic.title}</span>
                        <span className="text-[10px] font-mono text-[#FF9900] shrink-0 ml-1">{topic.readTime}</span>
                      </div>
                      <p className="text-[11px] text-slate-400 leading-relaxed line-clamp-2">
                        {topic.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs font-mono text-slate-400">
                  Published on Medium • Author: AWS DevOps Engineer
                </span>

                <a
                  href={CONTACT_LINKS.mediumArticle}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-[#FF9900] hover:bg-[#e68a00] text-black font-bold text-xs tracking-wider rounded-xl flex items-center gap-2 shadow-lg shadow-[#FF9900]/20 transition-all cursor-pointer font-mono"
                >
                  <BookOpen className="w-4 h-4" />
                  READ THE FULL TECHNICAL CASE STUDY
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

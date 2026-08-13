import React, { useState, useEffect } from 'react';
import { Github, FileText, Globe, Linkedin, Mail, Copy, Check, ExternalLink, Code2, Server, ShieldCheck } from 'lucide-react';
import { CONTACT_LINKS } from '../data/caseStudyData';

export const ContactFooterSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);
  const [portfolioBtnText, setPortfolioBtnText] = useState<string>('AUTHOR PORTFOLIO');

  useEffect(() => {
    const textInterval = setInterval(() => {
      setPortfolioBtnText((prev) =>
        prev === 'AUTHOR PORTFOLIO' ? 'ADAPALASRIHARSHAREDDY.ONLINE' : 'AUTHOR PORTFOLIO'
      );
    }, 2000);
    return () => clearInterval(textInterval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_LINKS.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <footer id="contact" className="bg-[#0A0A0B] pt-20 pb-12 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section 12: LINKS / CONTACT Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF9900]">
              10 / CONNECT
            </span>
            <span className="h-px w-12 bg-[#FF9900]/40" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Explore the Project & Connect
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed font-normal">
            Interested in the infrastructure engineering, deployment pipelines, or WebRTC architecture behind Docco? Let's connect.
          </p>
        </div>

        {/* Project Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Live Application */}
          <a
            href={CONTACT_LINKS.liveApp}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel glass-panel-hover rounded-2xl p-6 border border-white/10 space-y-3 group cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <Globe className="w-6 h-6 text-[#FF9900]" />
              <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-[#FF9900] transition-colors" />
            </div>
            <h3 className="text-lg font-bold text-white group-hover:text-[#FF9900] transition-colors">
              Live Application
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed font-mono">
              Access the deployed Docco web platform running on AWS infrastructure.
            </p>
          </a>

          {/* GitHub Repository */}
          <a
            href={CONTACT_LINKS.githubRepo}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel glass-panel-hover rounded-2xl p-6 border border-white/10 space-y-3 group cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <Github className="w-6 h-6 text-slate-200" />
              <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-lg font-bold text-white group-hover:text-[#FF9900] transition-colors">
              GitHub Project Repository
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed font-mono">
              Explore frontend / backend source code, WebRTC logic, and Docker configs.
            </p>
          </a>

          {/* Medium Article */}
          <a
            href={CONTACT_LINKS.mediumArticle}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel glass-panel-hover rounded-2xl p-6 border border-white/10 space-y-3 group cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <FileText className="w-6 h-6 text-[#FF9900]" />
              <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-[#FF9900] transition-colors" />
            </div>
            <h3 className="text-lg font-bold text-white group-hover:text-[#FF9900] transition-colors">
              Medium Technical Article
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed font-mono">
              Read the full 12-minute technical case study on AWS & WebRTC.
            </p>
          </a>
        </div>

        {/* Contact Banner */}
        <div className="glass-panel rounded-2xl p-8 border border-white/10 bg-white/5 flex flex-wrap items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-white">
              Interested in the engineering behind Docco?
            </h3>
            <p className="text-xs text-slate-400 font-mono">
              Open to DevOps Engineering, Infrastructure, and Cloud Operations discussions.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={handleCopyEmail}
              className="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-slate-200 border border-white/10 rounded-xl text-xs font-mono font-semibold flex items-center gap-2 cursor-pointer transition-colors"
            >
              {copiedEmail ? <Check className="w-4 h-4 text-[#FF9900]" /> : <Copy className="w-4 h-4 text-[#FF9900]" />}
              {copiedEmail ? 'EMAIL COPIED!' : CONTACT_LINKS.email}
            </button>
          </div>
        </div>

        {/* FOOTER BOTTOM */}
        <div className="pt-12 border-t border-white/10 space-y-8 text-xs font-mono">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Identity & Role */}
            <div className="md:col-span-6 space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xl font-extrabold text-white tracking-tight">
                  DOCCO<span className="text-[#FF9900]">.</span>
                </span>
                <span className="px-2 py-0.5 rounded bg-[#FF9900]/10 text-[#FF9900] border border-[#FF9900]/30 text-[10px] font-bold">
                  CASE STUDY
                </span>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed max-w-md font-sans">
                Real-Time Doctor Consultation Platform designed and engineered with WebRTC, React, Node.js, Prisma, PostgreSQL, and AWS infrastructure.
              </p>
              <span className="text-[#FF9900] font-bold block">
                AWS DevOps Engineer — Infrastructure & Operational Engineering
              </span>
              <a
                href={CONTACT_LINKS.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 px-4 py-2.5 bg-white/5 text-[#FF9900] border border-[#FF9900]/30 hover:border-[#FF9900] hover:bg-[#FF9900] hover:text-black rounded-xl text-xs font-mono font-bold flex items-center gap-2 transition-all cursor-pointer w-[290px] justify-center uppercase"
              >
                <Globe className="w-4 h-4" />
                {portfolioBtnText}
              </a>
              <div className="flex items-center gap-[100px] mt-4 text-[#FF9900]">
                <a href={CONTACT_LINKS.githubProfile} target="_blank" rel="noopener noreferrer" title="GitHub Profile">
                  <Github className="w-5 h-5 hover:text-[#e68a00] hover:scale-110 transition-all" />
                </a>
                <a href={CONTACT_LINKS.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn Profile">
                  <Linkedin className="w-5 h-5 hover:text-[#e68a00] hover:scale-110 transition-all" />
                </a>
                <a href={CONTACT_LINKS.mediumArticle} target="_blank" rel="noopener noreferrer" title="Medium Technical Article">
                  <FileText className="w-5 h-5 hover:text-[#e68a00] hover:scale-110 transition-all" />
                </a>
              </div>
            </div>

            {/* Footer Navigation */}
            <div className="md:col-span-3 space-y-2">
              <span className="text-[10px] text-slate-500 uppercase font-bold block tracking-wider">
                PAGE SECTIONS
              </span>
              <div className="space-y-1.5 text-slate-400 text-[11px]">
                <a href="#product" className="block hover:text-[#FF9900] transition-colors">01 / The Product</a>
                <a href="#demo" className="block hover:text-[#FF9900] transition-colors">02 / Product in Action</a>
                <a href="#role" className="block hover:text-[#FF9900] transition-colors">03 / My Role</a>
                <a href="#system" className="block hover:text-[#FF9900] transition-colors">04 / System Architecture</a>
                <a href="#architecture" className="block hover:text-[#FF9900] transition-colors">05 / AWS Infrastructure</a>
                <a href="#flows" className="block hover:text-[#FF9900] transition-colors">06 / User & WebRTC Flows</a>
                <a href="#engineering" className="block hover:text-[#FF9900] transition-colors">07 / Engineering Challenges</a>
                <a href="#gallery" className="block hover:text-[#FF9900] transition-colors">08 / Visual Evidence</a>
                <a href="#deep-dive" className="block hover:text-[#FF9900] transition-colors">09 / Technical Deep Dive</a>
              </div>
            </div>

            {/* External Links */}
            <div className="md:col-span-3 space-y-2">
              <span className="text-[10px] text-slate-500 uppercase font-bold block tracking-wider">
                EXTERNAL LINKS
              </span>
              <div className="space-y-1.5 text-slate-400 text-[11px]">
                <a href={CONTACT_LINKS.githubRepo} target="_blank" rel="noopener noreferrer" className="hover:text-[#FF9900] transition-colors flex items-center gap-1">
                  GitHub Project Repository ↗
                </a>
                <a href={CONTACT_LINKS.githubProfile} target="_blank" rel="noopener noreferrer" className="hover:text-[#FF9900] transition-colors flex items-center gap-1">
                  GitHub Profile ↗
                </a>
                <a href={CONTACT_LINKS.notion} target="_blank" rel="noopener noreferrer" className="hover:text-[#FF9900] transition-colors flex items-center gap-1">
                  Notion Platform Documentation ↗
                </a>
                <a href={CONTACT_LINKS.mediumArticle} target="_blank" rel="noopener noreferrer" className="hover:text-[#FF9900] transition-colors flex items-center gap-1">
                  Medium Article ↗
                </a>
                <a href={CONTACT_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#FF9900] transition-colors flex items-center gap-1">
                  LinkedIn Profile ↗
                </a>
                <a href={CONTACT_LINKS.portfolio} target="_blank" rel="noopener noreferrer" className="hover:text-[#FF9900] transition-colors flex items-center gap-1">
                  Author Portfolio ↗
                </a>
              </div>
            </div>
          </div>

          {/* Technology Statement & Copyright */}
          <div className="pt-6 border-t border-slate-900 flex flex-wrap items-center justify-between gap-4 text-slate-500 text-[11px]">
            <p>
              Built with React, Vite, Node.js, Express, WebRTC, Prisma, PostgreSQL, and AWS.
            </p>
            <p className="text-slate-400">
              © 2026 Docco. Designed, deployed, and documented as an engineering case study.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

import React, { useState } from 'react';
import { Server, Users, ArrowRight, ShieldCheck, Database, Radio, CheckCircle, Video, Lock, Cpu, Globe } from 'lucide-react';

export const SystemArchitectureSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'application' | 'development' | 'deployment'>('application');

  return (
    <section id="system" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0A0A0B] relative">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF9900]">
              04 / SYSTEM ARCHITECTURE
            </span>
            <span className="h-px w-12 bg-[#FF9900]/40" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How the System Works
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed font-normal">
            A conceptual understanding of Docco overall the system flow and architecture.
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
            onClick={() => setActiveTab('application')}
            className={`px-4 py-2 rounded-lg font-semibold transition-all cursor-pointer ${activeTab === 'application'
              ? 'bg-[#FF9900] text-black shadow-md shadow-[#FF9900]/20'
              : 'bg-white/5 text-slate-400 border border-white/10 hover:bg-white/10'
              }`}
          >
            APPLICATION WORKFLOW
          </button>
          <button
            onClick={() => setActiveTab('development')}
            className={`px-4 py-2 rounded-lg font-semibold transition-all cursor-pointer ${activeTab === 'development'
              ? 'bg-[#FF9900] text-black shadow-md shadow-[#FF9900]/20'
              : 'bg-white/5 text-slate-400 border border-white/10 hover:bg-white/10'
              }`}
          >
            DEVELOPMENT WORKFLOW
          </button>
          <button
            onClick={() => setActiveTab('deployment')}
            className={`px-4 py-2 rounded-lg font-semibold transition-all cursor-pointer ${activeTab === 'deployment'
              ? 'bg-[#FF9900] text-black shadow-md shadow-[#FF9900]/20'
              : 'bg-white/5 text-slate-400 border border-white/10 hover:bg-white/10'
              }`}
          >
            DEPLOYMENT WORKFLOW
          </button>
        </div>

        {/* High-Level System Architecture Diagram Box */}
        <div className="glass-panel rounded-2xl p-8 border border-white/10 space-y-8">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <h3 className="text-lg font-bold text-white tracking-tight">
              {activeTab === 'application' && 'Application Workflow — Interactive Consultation Steps'}
              {activeTab === 'development' && 'Development Workflow — Engineering Pipeline'}
              {activeTab === 'deployment' && 'Deployment Workflow — Cloud Deployment Delivery'}
            </h3>
            <span className="text-xs font-mono text-slate-400">
              {activeTab === 'application' && 'Patient & Doctor Coordinated Steps'}
              {activeTab === 'development' && 'From Design to Production Preparation'}
              {activeTab === 'deployment' && 'Code Ingress to Active Production CDN'}
            </span>
          </div>

          {/* Workflow rendering */}
          {activeTab === 'application' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              {/* Patient Lane */}
              <div className="p-6 rounded-xl bg-white/5 border border-[#FF9900]/30 space-y-4 shadow-xl">
                <div className="flex items-center gap-2 border-b border-white/10 pb-3">
                  <Users className="w-4 h-4 text-[#FF9900]" />
                  <span className="text-xs font-bold font-mono text-white">PATIENT INTERACTION FLOW</span>
                </div>
                <div className="relative border-l border-[#FF9900]/30 ml-3 pl-6 space-y-6 text-xs">
                  {[
                    { title: "Register / Login", desc: "Patient sets up session context & JWT authentication profile." },
                    { title: "Browse Doctors", desc: "Searches the directory of active medical specialists." },
                    { title: "Select Doctor", desc: "Views profile and open calendar availability slots." },
                    { title: "Request Consultation", desc: "Submits patient intake summary and booking slot request." },
                    { title: "Doctor Accepts", desc: "Awaits the provider to accept the request." },
                    { title: "Consultation Room", desc: "Enters the dedicated, secure room session URL." },
                    { title: "WebRTC Video Consultation", desc: "Engages in direct low-latency P2P audio/video consultation." },
                    { title: "Digital Prescription", desc: "Receives a digital prescription issued by the doctor." },
                    { title: "Prescription Saved", desc: "Relational database persists clinical records." },
                    { title: "Consultation History", desc: "Session logged in patient history directory." }
                  ].map((step, idx) => (
                    <div key={idx} className="relative">
                      <span className="absolute -left-[30px] top-0.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-[#FF9900] flex items-center justify-center text-[8px] text-[#FF9900] font-bold">
                        {idx + 1}
                      </span>
                      <h4 className="font-bold text-white text-xs leading-none">{step.title}</h4>
                      <p className="text-slate-400 mt-1 leading-relaxed">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Doctor Lane */}
              <div className="p-6 rounded-xl bg-white/5 border border-[#FF9900]/30 space-y-4 shadow-xl">
                <div className="flex items-center gap-2 border-b border-white/10 pb-3">
                  <Server className="w-4 h-4 text-[#FF9900]" />
                  <span className="text-xs font-bold font-mono text-white">DOCTOR INTERACTION FLOW</span>
                </div>
                <div className="relative border-l border-[#FF9900]/30 ml-3 pl-6 space-y-6 text-xs">
                  {[
                    { title: "Register / Login", desc: "Accesses doctor management console securely." },
                    { title: "Doctor Profile", desc: "Configures availability slots and profile metadata." },
                    { title: "Receive Consultation Request", desc: "Notified of pending appointment requests in queue." },
                    { title: "Accept Request", desc: "Reviews patient intake data and accepts booking." },
                    { title: "Join Consultation", desc: "Grants device permissions and enters the room container." },
                    { title: "Conduct Consultation", desc: "Interacts via WebRTC direct media streams." },
                    { title: "Issue Digital Prescription", desc: "Submits clinical notes and treatment prescriptions." },
                    { title: "Consultation Completed", desc: "Concludes appointment lifecycle and updates queue." }
                  ].map((step, idx) => (
                    <div key={idx} className="relative">
                      <span className="absolute -left-[30px] top-0.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-[#FF9900] flex items-center justify-center text-[8px] text-[#FF9900] font-bold">
                        {idx + 1}
                      </span>
                      <h4 className="font-bold text-white text-xs leading-none">{step.title}</h4>
                      <p className="text-slate-400 mt-1 leading-relaxed">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'development' && (
            <div className="p-6 rounded-xl bg-white/5 border border-[#FF9900]/30 shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: "1. Requirement Analysis", desc: "Defining WebRTC direct signaling pathways, user auth flows, and schema models." },
                  { title: "2. System Design", desc: "Mapping public/private subnet segmentation, ALB ingress, and DB access rules." },
                  { title: "3. Frontend Development (React + Vite)", desc: "Developing UI views, patient/doctor dashboards, call controls, and responsive styling." },
                  { title: "4. Backend Development (Node.js + Express)", desc: "Building Express API routes, JWT middlewares, and SDP signaling coordination." },
                  { title: "5. Database Design (PostgreSQL + Prisma)", desc: "Drafting schema tables for users, schedules, prescriptions, and pooling." },
                  { title: "6. WebRTC Integration", desc: "Establishing RTCPeerConnection negotiation, SDP offer/answers, and media tracks." },
                  { title: "7. API Integration", desc: "Connecting client dashboards to REST API endpoints for user states and calendars." },
                  { title: "8. Local Testing", desc: "Verifying loopback calls, API responses, token permissions, and error handling." },
                  { title: "9. Integration Testing", desc: "Testing end-to-end patient request, doctor acceptance, and call launch lifecycle." },
                  { title: "10. Dockerization", desc: "Writing multi-stage Dockerfiles and Compose configurations for container runtime environments." },
                  { title: "11. Production Preparation", desc: "Tuning connection pooling constraints, configuring parameters, and setting up Linux systemd services." }
                ].map((step, idx) => (
                  <div key={idx} className="p-4 rounded-lg bg-black/40 border border-white/10 hover:border-[#FF9900] transition-colors space-y-2">
                    <h4 className="font-bold text-[#FF9900] text-xs font-mono">{step.title}</h4>
                    <p className="text-slate-300 text-xs leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'deployment' && (
            <div className="p-6 rounded-xl bg-white/5 border border-[#FF9900]/30 shadow-xl space-y-6">
              <div className="relative border-l border-[#FF9900]/30 ml-3 pl-6 space-y-6 text-xs">
                {[
                  { title: "Developer Push", tech: "Local Workspace", desc: "Developer pushes verified infrastructure scripts and application code." },
                  { title: "Git Repository", tech: "GitHub Repo", desc: "Single source of truth repository trigger." },
                  { title: "Build / Test Automated Runs", tech: "Docker Image Builder", desc: "Transpiles TypeScript, compiles React bundle, and builds container image configurations." },
                  { title: "Docker Image Distribution", tech: "Container Parity", desc: "Containerized application runtime packaged for execution on remote hosts." },
                  { title: "AWS Cloud Infrastructure Provisioning", tech: "VPC & IAM", desc: "Enforces strict isolated environments with private subnets for critical components." },
                  { title: "Frontend Distribution", tech: "S3 → CloudFront CDN", desc: "Static web build uploaded to Amazon S3 and distributed via CloudFront edge caches." },
                  { title: "Backend Compute Host", tech: "EC2 Private Subnets + ALB", desc: "Dockerized Express servers run on EC2 instances behind Application Load Balancer target groups." },
                  { title: "Relational Persistence Tier", tech: "RDS PostgreSQL", desc: "AWS managed database instance handles secure user tables and room scheduling records." },
                  { title: "Observability & Alerting Stack", tech: "CloudWatch / Prometheus / Grafana", desc: "Monitors CPU loads, connection usage, metrics logs, and target group statuses." },
                  { title: "GoDaddy DNS Resolution Gateway", tech: "GoDaddy Gateway", desc: "Resolves DNS queries, routing patients and doctors to global entry nodes." }
                ].map((step, idx) => (
                  <div key={idx} className="relative">
                    <span className="absolute -left-[30px] top-0.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-[#FF9900] flex items-center justify-center text-[8px] text-[#FF9900] font-bold">
                      {idx + 1}
                    </span>
                    <div className="flex items-center justify-between gap-4 flex-wrap">
                      <h4 className="font-bold text-white text-xs leading-none">{step.title}</h4>
                      <span className="px-2 py-0.5 rounded bg-[#FF9900]/10 border border-[#FF9900]/30 text-[#FF9900] font-mono text-[10px]">
                        {step.tech}
                      </span>
                    </div>
                    <p className="text-slate-400 mt-1 leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

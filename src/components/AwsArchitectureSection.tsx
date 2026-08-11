import React, { useState } from 'react';
import { Network, Server, Database, ShieldCheck, Activity, Globe, Zap, Lock, Unlock, GitFork, Box, Cpu, LineChart, KeyRound, ShieldAlert, Layers } from 'lucide-react';
import { AWS_LAYERS } from '../data/caseStudyData';
import { AwsLayer } from '../types';

export const AwsArchitectureSection: React.FC = () => {
  const [selectedLayerId, setSelectedLayerId] = useState<AwsLayer['id']>('networking');
  const [activeServiceModal, setActiveServiceModal] = useState<any | null>(null);

  const selectedLayer = AWS_LAYERS.find((l) => l.id === selectedLayerId) || AWS_LAYERS[1];

  return (
    <section id="architecture" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-800 bg-slate-950/90 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF9900]">
              05 / INFRASTRUCTURE
            </span>
            <span className="h-px w-12 bg-[#FF9900]/40" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            AWS Cloud Architecture
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed font-normal">
            Docco is deployed as a distributed cloud architecture on Amazon Web Services, enforcing network isolation, traffic management, managed database persistence, and full observability.
          </p>
        </div>

        {/* Visual AWS Topology Map */}
        <div className="glass-panel rounded-2xl p-8 border border-white/10 space-y-8 shadow-2xl">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <h3 className="text-lg font-bold text-white">Production AWS Network Topology</h3>
              <p className="text-xs font-mono text-slate-400">VPC CIDR: 10.0.0.0/16 • 2 Availability Zones</p>
            </div>
            <span className="px-3 py-1 bg-[#FF9900]/10 border border-[#FF9900]/30 text-[#FF9900] font-mono text-xs font-bold rounded">
              VERIFIED AWS DEPLOYMENT
            </span>
          </div>

          {/* Interactive Topology Container */}
          <div className="space-y-8 py-2">
            {/* Edge Level */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-3">
              <span className="text-[10px] font-mono text-[#FF9900] font-bold uppercase tracking-wider block">
                01. EDGE & ENTRY LAYER (PUBLIC INTERNET)
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs font-mono">
                <div className="p-3 rounded-lg bg-black/40 border border-white/10 text-center hover:border-[#FF9900] transition-colors">
                  <Globe className="w-5 h-5 text-[#FF9900] mx-auto mb-1" />
                  <span className="font-bold text-white block">Amazon Route 53</span>
                  <span className="text-[10px] text-slate-400">DNS Resolution</span>
                </div>
                <div className="p-3 rounded-lg bg-black/40 border border-white/10 text-center hover:border-[#FF9900] transition-colors">
                  <Zap className="w-5 h-5 text-[#FF9900] mx-auto mb-1" />
                  <span className="font-bold text-white block">CloudFront CDN</span>
                  <span className="text-[10px] text-slate-400">Edge Static Caching</span>
                </div>
                <div className="p-3 rounded-lg bg-black/40 border border-white/10 text-center hover:border-[#FF9900] transition-colors">
                  <Database className="w-5 h-5 text-[#FF9900] mx-auto mb-1" />
                  <span className="font-bold text-white block">Amazon S3</span>
                  <span className="text-[10px] text-slate-400">Frontend Web Build</span>
                </div>
                <div className="p-3 rounded-lg bg-black/40 border border-white/10 text-center hover:border-[#FF9900] transition-colors">
                  <ShieldCheck className="w-5 h-5 text-[#FF9900] mx-auto mb-1" />
                  <span className="font-bold text-white block">AWS ACM Certificate</span>
                  <span className="text-[10px] text-slate-400">Managed SSL/TLS</span>
                </div>
              </div>
            </div>

            {/* VPC Container */}
            <div className="p-6 rounded-2xl bg-black/60 border-2 border-[#FF9900]/40 space-y-6 relative">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <Network className="w-5 h-5 text-[#FF9900]" />
                  <span className="font-mono text-xs font-extrabold text-[#FF9900] uppercase tracking-widest">
                    AWS VPC BOUNDARY (10.0.0.0/16)
                  </span>
                </div>
                <span className="text-[10px] font-mono text-slate-400">
                  Subnet Isolation Architecture
                </span>
              </div>

              {/* Public Subnets Layer */}
              <div className="p-5 rounded-xl bg-white/5 border border-[#FF9900]/20 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#FF9900] font-bold flex items-center gap-1.5">
                    <Unlock className="w-3.5 h-3.5" /> PUBLIC SUBNETS (10.0.1.0/24 & 10.0.2.0/24)
                  </span>
                  <span className="text-slate-400">Internet Gateway Attached</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                  <div className="p-3.5 rounded-lg bg-black/40 border border-white/10 flex items-center justify-between">
                    <div>
                      <span className="font-bold text-white block">Application Load Balancer</span>
                      <span className="text-[10px] text-slate-400">Target Group Port 3000</span>
                    </div>
                    <GitFork className="w-5 h-5 text-[#FF9900]" />
                  </div>

                  <div className="p-3.5 rounded-lg bg-black/40 border border-white/10 flex items-center justify-between">
                    <div>
                      <span className="font-bold text-white block">NAT Gateway</span>
                      <span className="text-[10px] text-slate-400">Egress Internet Access</span>
                    </div>
                    <Network className="w-5 h-5 text-[#FF9900]" />
                  </div>
                </div>
              </div>

              {/* Security Boundary Divider */}
              <div className="flex items-center justify-center gap-2 py-1 font-mono text-[11px] text-[#FF9900]">
                <ShieldCheck className="w-4 h-4" />
                <span className="uppercase tracking-wider font-bold">STATEFUL SECURITY GROUP FIREWALL (SG-APP -&gt; SG-DATABASE)</span>
              </div>

              {/* Private Subnets Layer */}
              <div className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5" /> PRIVATE SUBNETS (10.0.10.0/24 & 10.0.20.0/24)
                  </span>
                  <span className="text-slate-400">Zero Direct Public Access</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                  <div className="p-3.5 rounded-lg bg-black/40 border border-white/10 flex items-center justify-between">
                    <div>
                      <span className="font-bold text-white block">Amazon EC2 (t3.medium)</span>
                      <span className="text-[10px] text-slate-400">Docker Express + WebRTC</span>
                    </div>
                    <Server className="w-5 h-5 text-[#FF9900]" />
                  </div>

                  <div className="p-3.5 rounded-lg bg-black/40 border border-white/10 flex items-center justify-between">
                    <div>
                      <span className="font-bold text-white block">Amazon RDS PostgreSQL</span>
                      <span className="text-[10px] text-slate-400">Port 5432 Ingress from SG-App</span>
                    </div>
                    <Database className="w-5 h-5 text-[#FF9900]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Observability Stack */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-3">
              <span className="text-[10px] font-mono text-[#FF9900] font-bold uppercase tracking-wider block">
                06. OBSERVABILITY & TELEMETRY STACK
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
                <div className="p-3 rounded-lg bg-black/40 border border-white/10 text-center">
                  <Activity className="w-4 h-4 text-[#FF9900] mx-auto mb-1" />
                  <span className="font-bold text-white block">Amazon CloudWatch</span>
                  <span className="text-[10px] text-slate-400">EC2 & RDS CPU Alarms</span>
                </div>
                <div className="p-3 rounded-lg bg-black/40 border border-white/10 text-center">
                  <LineChart className="w-4 h-4 text-[#FF9900] mx-auto mb-1" />
                  <span className="font-bold text-white block">Prometheus + cAdvisor</span>
                  <span className="text-[10px] text-slate-400">Container Telemetry</span>
                </div>
                <div className="p-3 rounded-lg bg-black/40 border border-white/10 text-center">
                  <Activity className="w-4 h-4 text-[#FF9900] mx-auto mb-1" />
                  <span className="font-bold text-white block">Grafana Dashboards</span>
                  <span className="text-[10px] text-slate-400">Real-time Visual Metrics</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Layer Explorer Tabs */}
        <div className="space-y-6">
          <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
            Inspect Architecture Layers
          </h3>

          <div className="flex flex-wrap gap-2">
            {AWS_LAYERS.map((layer) => {
              const isActive = layer.id === selectedLayerId;
              return (
                <button
                  key={layer.id}
                  onClick={() => setSelectedLayerId(layer.id)}
                  className={`px-4 py-2.5 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#FF9900] text-black shadow-lg shadow-[#FF9900]/20'
                      : 'bg-white/5 text-slate-300 border border-white/10 hover:bg-white/10'
                  }`}
                >
                  {layer.name}
                </button>
              );
            })}
          </div>

          {/* Active Layer Detail Card */}
          <div className="glass-panel rounded-2xl p-8 border border-white/10 space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-mono text-[#FF9900] font-bold uppercase">
                LAYER DETAIL: {selectedLayer.name}
              </span>
              <p className="text-slate-300 text-sm">{selectedLayer.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {selectedLayer.services.map((service, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveServiceModal(service)}
                  className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2 hover:border-[#FF9900] transition-all cursor-pointer"
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-white">{service.name}</span>
                    <span className="text-[10px] font-mono text-[#FF9900] bg-[#FF9900]/10 border border-[#FF9900]/30 px-2 py-0.5 rounded">
                      {service.type}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {service.details}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

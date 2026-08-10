import React, { useState } from 'react';
import { Shield, Award, Users, CheckCircle2, FileCheck, HardHat, Leaf, Lock, ArrowRight, ExternalLink } from 'lucide-react';

interface OperationalExcellenceProps {
  onRequestQuote: (serviceId?: string) => void;
}

export const OperationalExcellenceSection: React.FC<OperationalExcellenceProps> = ({ onRequestQuote }) => {
  const [activePillar, setActivePillar] = useState<'hsse' | 'local-content' | 'qaqc'>('hsse');

  const pillars = [
    {
      id: 'hsse',
      title: 'HSSE & Environmental Safety',
      badge: 'Goal Zero Policy',
      icon: Shield,
      desc: 'Strict commitment to Health, Safety, Security, and Environmental protection across all onshore and offshore operations.'
    },
    {
      id: 'local-content',
      title: 'Nigerian Content Commitment',
      badge: 'NCDMB Compliant',
      icon: Award,
      desc: '100% Nigerian content driving local engineering capability, human capital development, and host community value.'
    },
    {
      id: 'qaqc',
      title: 'Quality Governance & QA/QC',
      badge: 'API & ISO Standards',
      icon: FileCheck,
      desc: 'Multi-disciplinary quality control, document traceability, and strict adherence to international oilfield standards.'
    }
  ];

  return (
    <section id="excellence" className="py-20 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-block px-3 py-1 rounded-sm bg-white text-mh-blue text-xs font-bold uppercase tracking-widest mb-3 border border-slate-200 shadow-2xs">
            Operational Excellence & Compliance
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-mh-dark tracking-tight">
            Safety, Quality & Local Content Governance
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            MH Jesse operates under stringent international oilfield standards, ensuring flawless project execution, environmental stewardship, and full compliance with Nigerian Local Content regulations.
          </p>
        </div>

        {/* Pillar Switcher Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            const isActive = activePillar === pillar.id;
            return (
              <button
                key={pillar.id}
                onClick={() => setActivePillar(pillar.id as any)}
                className={`p-6 rounded-sm border text-left transition-all relative cursor-pointer ${
                  isActive
                    ? 'bg-mh-dark text-white border-mh-dark shadow-md'
                    : 'bg-white text-slate-800 border-slate-200 hover:border-mh-blue/50 shadow-2xs'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-10 h-10 rounded-sm flex items-center justify-center ${
                    isActive ? 'bg-mh-blue text-white' : 'bg-slate-100 text-mh-blue border border-slate-200'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-sm ${
                    isActive ? 'bg-slate-800 text-mh-blue border border-slate-700' : 'bg-slate-100 text-slate-600 border border-slate-200'
                  }`}>
                    {pillar.badge}
                  </span>
                </div>
                <h3 className="font-bold text-base mb-2">{pillar.title}</h3>
                <p className={`text-xs leading-relaxed ${isActive ? 'text-slate-300' : 'text-slate-600'}`}>
                  {pillar.desc}
                </p>
              </button>
            );
          })}
        </div>

        {/* Detailed Pillar Content Showcase */}
        <div className="bg-white border border-slate-200 rounded-sm p-8 lg:p-10 shadow-2xs">
          
          {/* Active Tab 1: HSSE */}
          {activePillar === 'hsse' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-1 space-y-4">
                <div className="inline-flex items-center gap-2 text-mh-blue font-bold text-xs uppercase tracking-widest">
                  <Shield className="w-4 h-4" /> Health, Safety, Security & Environment
                </div>
                <h3 className="text-2xl font-bold text-mh-dark">
                  Goal Zero Safety & Environmental Framework
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Our corporate HSSE policy dictates zero lost-time injuries (LTI), zero occupational illnesses, and minimal environmental footprint across all engineering, field execution, and procurement assignments.
                </p>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-sm text-xs text-slate-700 space-y-2">
                  <span className="font-bold text-mh-dark uppercase tracking-wider block">Corporate Policy Highlights:</span>
                  <p>• Mandatory Stop-Work Authority for all project personnel.</p>
                  <p>• Regular Job Safety Analysis (JSA) and Hazard Identification (HAZID).</p>
                  <p>• Emergency Response & Site Medical Evacuation Protocols.</p>
                </div>
              </div>

              <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    title: 'Incident-Free Operations',
                    desc: 'Rigorous risk assessment and personal protective equipment (PPE) enforcement across all work zones.',
                    icon: HardHat
                  },
                  {
                    title: 'Environmental Protection',
                    desc: 'Strict adherence to NOSDRA and EGASPIN guidelines for spill prevention and waste management.',
                    icon: Leaf
                  },
                  {
                    title: 'Security & Asset Safeguarding',
                    desc: 'Proactive security management and community intelligence networks safeguarding personnel and property.',
                    icon: Lock
                  },
                  {
                    title: 'Regular HSSE Audits',
                    desc: 'Continuous site safety inspections, toolbox talks, and mandatory safety competency certifications.',
                    icon: FileCheck
                  }
                ].map((item, i) => {
                  const ItemIcon = item.icon;
                  return (
                    <div key={i} className="p-5 rounded-sm bg-slate-50 border border-slate-200 hover:border-mh-blue/40 transition-colors">
                      <div className="w-8 h-8 rounded-sm bg-white border border-slate-200 flex items-center justify-center text-mh-blue mb-3">
                        <ItemIcon className="w-4 h-4" />
                      </div>
                      <h4 className="font-bold text-sm text-mh-dark mb-1">{item.title}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Active Tab 2: Local Content */}
          {activePillar === 'local-content' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-1 space-y-4">
                <div className="inline-flex items-center gap-2 text-mh-blue font-bold text-xs uppercase tracking-widest">
                  <Award className="w-4 h-4" /> NCDMB Compliance & In-Country Capability
                </div>
                <h3 className="text-2xl font-bold text-mh-dark">
                  100% Nigerian Content & Skill Transfer
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  As a 100% Nigerian-owned company, MH Jesse is deeply dedicated to advancing indigenous engineering expertise, domestic supply chain integration, and host community economic development.
                </p>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-sm text-xs text-slate-700 space-y-2">
                  <span className="font-bold text-mh-dark uppercase tracking-wider block">Local Content Directives:</span>
                  <p>• Prioritizing Nigerian engineering professionals and technicians.</p>
                  <p>• Local procurement of raw materials, steel products, and safety gear.</p>
                  <p>• Structured apprenticeship and technical skill development programs.</p>
                </div>
              </div>

              <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    title: 'Human Capital Development',
                    desc: 'Active investment in specialized oilfield training for young engineering graduates and technicians.',
                    icon: Users
                  },
                  {
                    title: 'Domestic Supply Chain',
                    desc: 'Engaging Nigerian manufacturers, fabrication workshops, and regional service suppliers.',
                    icon: CheckCircle2
                  },
                  {
                    title: 'Host Community Relations',
                    desc: 'Sustainable community engagement plans fostering peace, local employment, and social goodwill.',
                    icon: Shield
                  },
                  {
                    title: 'NCDMB Certification',
                    desc: 'Fully compliant with the Nigerian Oil & Gas Industry Content Development (NOGICD) Act.',
                    icon: FileCheck
                  }
                ].map((item, i) => {
                  const ItemIcon = item.icon;
                  return (
                    <div key={i} className="p-5 rounded-sm bg-slate-50 border border-slate-200 hover:border-mh-blue/40 transition-colors">
                      <div className="w-8 h-8 rounded-sm bg-white border border-slate-200 flex items-center justify-center text-mh-blue mb-3">
                        <ItemIcon className="w-4 h-4" />
                      </div>
                      <h4 className="font-bold text-sm text-mh-dark mb-1">{item.title}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Active Tab 3: QA/QC */}
          {activePillar === 'qaqc' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-1 space-y-4">
                <div className="inline-flex items-center gap-2 text-mh-blue font-bold text-xs uppercase tracking-widest">
                  <FileCheck className="w-4 h-4" /> Quality Assurance & Control
                </div>
                <h3 className="text-2xl font-bold text-mh-dark">
                  Quality Management & Standard Adherence
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Our quality framework ensures every engineering calculation, procurement item, and project deliverable strictly satisfies international codes including API, ASME, ISO, and NACE.
                </p>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-sm text-xs text-slate-700 space-y-2">
                  <span className="font-bold text-mh-dark uppercase tracking-wider block">Quality Assurance Pillars:</span>
                  <p>• Document Control & Deliverables Traceability (IFC/As-Built).</p>
                  <p>• Factory Acceptance Testing (FAT) & Material Inspection.</p>
                  <p>• Management of Change (MoC) & Non-Conformance Auditing.</p>
                </div>
              </div>

              <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    title: 'API & ASME Code Compliance',
                    desc: 'Design and inspection adhering to strict upstream codes for piping, pressure design, and structural integrity.',
                    icon: FileCheck
                  },
                  {
                    title: 'Comprehensive Document Control',
                    desc: 'Structured tracking of technical queries, drawing revisions, and engineering inspection release certificates.',
                    icon: CheckCircle2
                  },
                  {
                    title: 'Material Traceability',
                    desc: 'Full mill test reports (MTRs) and non-destructive testing (NDT) records for supplied tubulars and fittings.',
                    icon: Shield
                  },
                  {
                    title: 'Management of Change (MoC)',
                    desc: 'Disciplined technical review protocols for any site modifications or design adaptations.',
                    icon: Award
                  }
                ].map((item, i) => {
                  const ItemIcon = item.icon;
                  return (
                    <div key={i} className="p-5 rounded-sm bg-slate-50 border border-slate-200 hover:border-mh-blue/40 transition-colors">
                      <div className="w-8 h-8 rounded-sm bg-white border border-slate-200 flex items-center justify-center text-mh-blue mb-3">
                        <ItemIcon className="w-4 h-4" />
                      </div>
                      <h4 className="font-bold text-sm text-mh-dark mb-1">{item.title}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Bottom Action Bar */}
          <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-600 font-medium">
              Require a detailed HSSE plan or Quality Assurance brief for an upcoming RFQ?
            </span>
            <button
              onClick={() => onRequestQuote()}
              className="bg-mh-blue hover:bg-mh-blue-hover text-white font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-sm transition-colors flex items-center gap-2 shrink-0 shadow-2xs"
            >
              <span>Request Compliance Brief</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

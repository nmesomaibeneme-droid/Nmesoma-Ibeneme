import React from 'react';
import { WHY_MH_JESSE, PROJECT_FRAMEWORK, COMPANY_INFO } from '../data/companyData';
import { ShieldCheck, Target, RefreshCw, Layers, Award, FileCheck } from 'lucide-react';

export const WhyMHJesse: React.FC = () => {
  return (
    <section id="why-us" className="py-20 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-2">
            The MH Jesse Advantage
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Why Partner With MH Jesse
          </h2>
          <p className="mt-4 text-slate-600 text-base leading-relaxed">
            Combining national engineering expertise, owned equipment assets, and strict safety standards to lower project lifecycle costs and maximize asset uptime.
          </p>
        </div>

        {/* 5 Advantages Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {WHY_MH_JESSE.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-sm p-6 hover:border-slate-400 transition-colors shadow-xs"
            >
              <div className="w-8 h-8 rounded-sm bg-slate-900 flex items-center justify-center text-white font-bold text-xs mb-4">
                0{idx + 1}
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}

          {/* 100% Nigerian Content Highlight Box */}
          <div className="bg-slate-900 text-white border border-slate-800 rounded-sm p-6 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center gap-2 text-slate-300 font-bold text-xs uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4 text-white" /> 100% Nigerian Local Content
              </div>
              <h3 className="text-base font-bold text-white mb-2">Local Capacity & National Growth</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Empowering national talent with technical subject-matter expertise. Fully compliant with NOGICD Act standards.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800 text-xs text-slate-400 font-bold uppercase tracking-wider">
              Port Harcourt Yards & Marine Operations
            </div>
          </div>
        </div>

        {/* Project Management Framework Timeline */}
        <div className="bg-slate-900 text-white rounded-sm p-8 lg:p-10 border border-slate-800 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Integrated Delivery</span>
            <h3 className="text-2xl font-bold text-white mt-1">Project Management Framework</h3>
            <p className="text-xs text-slate-300 mt-2">
              A structured 5-stage engineering delivery process guaranteeing quality, schedule adherence, and budget control.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {PROJECT_FRAMEWORK.map((stage) => (
              <div
                key={stage.step}
                className="bg-slate-800 p-5 rounded-sm border border-slate-700 flex flex-col justify-between"
              >
                <div>
                  <div className="w-7 h-7 rounded-sm bg-white text-slate-900 font-bold text-xs flex items-center justify-center mb-3">
                    {stage.step}
                  </div>
                  <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-3">{stage.title}</h4>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {stage.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-1.5">
                        <span className="text-white font-bold">•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

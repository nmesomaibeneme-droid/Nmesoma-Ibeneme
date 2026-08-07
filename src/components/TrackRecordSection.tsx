import React, { useState } from 'react';
import { EXECUTED_PROJECTS } from '../data/companyData';
import { CheckCircle2, Award, Building2, Calendar, FileCheck } from 'lucide-react';

export const TrackRecordSection: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  const projectCategories = [
    'all',
    'Drilling & Operations',
    'Pressure Vessels & EPF',
    'Project Management',
    'QA/QC & Engineering',
    'Consulting & FEED'
  ];

  const filteredProjects = filter === 'all' 
    ? EXECUTED_PROJECTS 
    : EXECUTED_PROJECTS.filter(p => p.category === filter);

  return (
    <section id="track-record" className="py-20 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block px-3 py-1 rounded-sm bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-widest mb-3">
            Proven Track Record
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Executed Projects & Case Studies
          </h2>
          <p className="mt-4 text-slate-600 text-base leading-relaxed">
            Demonstrated capability in delivering complex upstream engineering, drilling management, pressure vessels, and QA/QC projects for leading oil operators and energy companies.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-sm text-xs font-bold uppercase tracking-wider transition-colors ${
                filter === cat
                  ? 'bg-slate-900 text-white'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat === 'all' ? 'All Case Studies' : cat}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-sm border border-slate-200 p-6 shadow-xs hover:border-slate-400 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-sm bg-slate-100 text-slate-800 border border-slate-200 uppercase tracking-wider">
                    <CheckCircle2 className="w-3 h-3 text-slate-900" />
                    {project.status}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-50 px-2 py-0.5 rounded-sm border border-slate-200">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  {project.title}
                </h3>

                {project.description && (
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    {project.description}
                  </p>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-bold uppercase tracking-wider text-[10px]">CLIENT</span>
                <span className="font-bold text-slate-900 text-right">{project.client}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Key Client Partners Grid */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <div className="text-center text-xs font-bold uppercase tracking-widest text-slate-500 mb-6">
            Trusted by Reputable Energy & Upstream Operators
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
            <div className="bg-white px-5 py-3 rounded-sm border border-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider shadow-xs">
              COPDC Petroleum Development
            </div>
            <div className="bg-white px-5 py-3 rounded-sm border border-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider shadow-xs">
              Midwestern Oil & Gas
            </div>
            <div className="bg-white px-5 py-3 rounded-sm border border-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider shadow-xs">
              Energia Limited
            </div>
            <div className="bg-white px-5 py-3 rounded-sm border border-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider shadow-xs">
              TWEMS Energies
            </div>
            <div className="bg-white px-5 py-3 rounded-sm border border-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider shadow-xs">
              IMSE Energy Resources
            </div>
            <div className="bg-white px-5 py-3 rounded-sm border border-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider shadow-xs">
              Donna Spectre Limited
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

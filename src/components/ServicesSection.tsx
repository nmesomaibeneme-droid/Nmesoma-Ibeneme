import React, { useState } from 'react';
import { 
  SERVICES 
} from '../data/companyData';
import { ServiceDetail } from '../types';
import { 
  Compass, 
  Drill, 
  Briefcase, 
  Factory, 
  Cylinder, 
  ShoppingCart, 
  Ship, 
  HardHat, 
  Wrench, 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  Settings2,
  Cpu,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface ServicesSectionProps {
  onRequestQuote: (serviceId?: string) => void;
}

const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case 'Compass': return Compass;
    case 'Drill': return Drill;
    case 'Briefcase': return Briefcase;
    case 'Factory': return Factory;
    case 'Cylinder': return Cylinder;
    case 'ShoppingCart': return ShoppingCart;
    case 'Ship': return Ship;
    case 'HardHat': return HardHat;
    case 'Wrench': return Wrench;
    default: return Settings2;
  }
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onRequestQuote }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedServiceId, setExpandedServiceId] = useState<string | null>(null);
  const [activeTechnicalTab, setActiveTechnicalTab] = useState<'internals' | 'yard'>('internals');

  const categories = [
    { id: 'all', label: 'All Capabilities' },
    { id: 'engineering', label: 'Engineering & FEED' },
    { id: 'drilling', label: 'Drilling Engineering' },
    { id: 'construction', label: 'Facilities & Fabrication' },
    { id: 'procurement', label: 'Procurement' },
    { id: 'marine', label: 'Marine Logistics' },
    { id: 'maintenance', label: 'Maintenance & CMMS' },
  ];

  const filteredServices = selectedCategory === 'all' 
    ? SERVICES 
    : SERVICES.filter(s => s.category === selectedCategory);

  const toggleExpand = (id: string) => {
    setExpandedServiceId(expandedServiceId === id ? null : id);
  };

  return (
    <section id="services" className="py-20 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block px-3 py-1 rounded-sm bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-widest mb-3">
            Service Spectrum & Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Comprehensive Upstream Oil & Gas Solutions
          </h2>
          <p className="mt-4 text-slate-600 text-base leading-relaxed">
            Led by seasoned industry professionals, MH Jesse delivers technical expertise across every phase of the oilfield lifecycle — safely, on schedule, and to strict engineering specifications.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-sm text-xs font-bold uppercase tracking-wider transition-colors ${
                selectedCategory === cat.id
                  ? 'bg-slate-900 text-white'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => {
            const IconComponent = getIconComponent(service.iconName);
            const isExpanded = expandedServiceId === service.id;

            return (
              <div 
                key={service.id}
                className="bg-white rounded-sm border border-slate-200 shadow-xs hover:border-slate-400 transition-colors flex flex-col justify-between overflow-hidden group p-6"
              >
                <div>
                  {/* Card Top Header */}
                  <div className="pb-4 border-b border-slate-100">
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <div className="w-10 h-10 rounded-sm bg-slate-100 flex items-center justify-center text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-sm bg-slate-100 text-slate-600 border border-slate-200">
                        {service.category}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-slate-700 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Active Engagement / Delivered Badge */}
                  {service.activeEngagements && (
                    <div className="mt-4 p-3 bg-slate-50 border border-slate-200 rounded-sm text-xs text-slate-800 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-slate-900 shrink-0 mt-0.5" />
                      <div>
                        <strong className="block font-semibold">Active Engagement:</strong>
                        <span className="text-slate-600">{service.activeEngagements}</span>
                      </div>
                    </div>
                  )}

                  {service.deliveredProjects && (
                    <div className="mt-4 p-3 bg-slate-50 border border-slate-200 rounded-sm text-xs text-slate-800 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-slate-900 shrink-0 mt-0.5" />
                      <div>
                        <strong className="block font-semibold">Track Record:</strong>
                        <span className="text-slate-600">{service.deliveredProjects}</span>
                      </div>
                    </div>
                  )}

                  {/* Key Capabilities Bullet Points */}
                  <div className="pt-4">
                    <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">
                      Core Scope & Capabilities
                    </h4>
                    
                    <ul className="space-y-2 text-xs text-slate-700">
                      {(isExpanded ? service.capabilities : service.capabilities.slice(0, 4)).map((cap, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-900 shrink-0 mt-1.5" />
                          <span className="leading-snug">{cap}</span>
                        </li>
                      ))}
                    </ul>

                    {service.capabilities.length > 4 && (
                      <button
                        onClick={() => toggleExpand(service.id)}
                        className="mt-3 text-xs text-slate-900 hover:text-slate-700 font-bold uppercase tracking-wider flex items-center gap-1 transition-colors"
                      >
                        {isExpanded ? (
                          <>Show Less <ChevronUp className="w-3.5 h-3.5" /></>
                        ) : (
                          <>+{service.capabilities.length - 4} More Capabilities <ChevronDown className="w-3.5 h-3.5" /></>
                        )}
                      </button>
                    )}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => onRequestQuote(service.id)}
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider py-2.5 px-4 rounded-sm transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Request Proposal</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-300" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Specialized Technical Capabilities Showcase (Pressure Vessel Internals & Yard Facilities) */}
        <div className="mt-16 bg-slate-900 text-white rounded-sm p-8 lg:p-10 border border-slate-800 shadow-sm">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">In-House Manufacturing & Facilities</span>
              <h3 className="text-2xl font-bold text-white mt-1">
                Pressure Vessels & Fabrication Yard Infrastructure
              </h3>
            </div>

            {/* Sub-tabs */}
            <div className="flex items-center bg-slate-800 p-1 rounded-sm border border-slate-700">
              <button
                onClick={() => setActiveTechnicalTab('internals')}
                className={`px-4 py-2 rounded-sm text-xs font-bold uppercase tracking-wider transition-colors ${
                  activeTechnicalTab === 'internals' 
                    ? 'bg-white text-slate-900' 
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                Separator Internals
              </button>
              <button
                onClick={() => setActiveTechnicalTab('yard')}
                className={`px-4 py-2 rounded-sm text-xs font-bold uppercase tracking-wider transition-colors ${
                  activeTechnicalTab === 'yard' 
                    ? 'bg-white text-slate-900' 
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                Yard Equipment
              </button>
            </div>
          </div>

          {/* Tab 1: Separator Internals */}
          {activeTechnicalTab === 'internals' && (
            <div className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-1 space-y-4">
                <h4 className="text-base font-bold text-white uppercase tracking-wider">In-House Design of Vessel Internals</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  MH Jesse designs and manufactures custom 3-phase production separator internal components in-house to maximize oil, gas, and water separation efficiency.
                </p>
                <div className="p-4 bg-slate-800/80 rounded-sm border border-slate-700 text-xs text-slate-300">
                  <span className="text-slate-200 font-bold uppercase tracking-wider block mb-1">Track Record Proof:</span>
                  30,000 BPD and 75,000 BPD 3-Phase Separator skids designed, installed, and commissioned for Odidi Field and Jones Creek (OML 42).
                </div>
              </div>

              <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { name: 'Coalescing Plates', desc: 'Accelerates droplet growth for oil/water separation' },
                  { name: 'Weir Plates', desc: 'Maintains oil & water retention zones' },
                  { name: 'Inlet Diverters', desc: 'Dissipates momentum & manages inlet momentum' },
                  { name: 'Gas Straighteners', desc: 'Equalizes gas flow distribution' },
                  { name: 'Vortex Breakers', desc: 'Prevents gas entrainment at liquid outlets' },
                  { name: 'Wave Breakers', desc: 'Dampens liquid motion in offshore vessels' },
                  { name: 'Mist Eliminators', desc: 'Removes fine liquid droplets from gas stream' },
                  { name: 'Defoaming Plates', desc: 'Breaks foam layers in crude oil' },
                  { name: 'Sand Jetting Systems', desc: 'Cleans accumulated solids from vessel bottom' },
                ].map((item, idx) => (
                  <div key={idx} className="bg-slate-800 p-3.5 rounded-sm border border-slate-700">
                    <div className="text-white font-bold text-xs">{item.name}</div>
                    <div className="text-[11px] text-slate-400 mt-1 leading-snug">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 2: Fabrication Yard */}
          {activeTechnicalTab === 'yard' && (
            <div className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-1 space-y-4">
                <h4 className="text-base font-bold text-white uppercase tracking-wider">Port Harcourt Yard Facilities</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Located at Igwuruta and Fortress Yard (26 Boskel Road), Port Harcourt. Fully equipped for heavy pressure vessel fabrication, structural skids, and civil infrastructure projects.
                </p>
                <div className="p-4 bg-slate-800/80 rounded-sm border border-slate-700 text-xs text-slate-300">
                  <span className="text-slate-200 font-bold uppercase tracking-wider block mb-1">Yard Location:</span>
                  Fortress Yard, 26 Boskel Road, Off Port Harcourt–Aba Road, Elelewon, Port Harcourt, Rivers State.
                </div>
              </div>

              <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: 'Vessel Handlers & Skidding', desc: 'Heavy load positioning for large-diameter separators and pressure vessels.' },
                  { title: 'Cool-Cut Pipe Cutting', desc: 'Cold cutting machines for precise pipe beveling and fit-up.' },
                  { title: 'CNC Plate Cutting', desc: 'Automated high-precision computer-controlled steel plate cutting.' },
                  { title: 'Plate Rolling Machine', desc: 'Rolling heavy steel plates into pipe cylinders and shell vessel shapes.' },
                  { title: 'Turning & Machining', desc: 'Heavy industrial lathes for flange and nozzle machining.' },
                  { title: 'Igwuruta Civil Yard', desc: 'Full civil capacity: site preparation, concrete foundations, roads & drainage.' },
                ].map((yardItem, i) => (
                  <div key={i} className="bg-slate-800 p-4 rounded-sm border border-slate-700 flex items-start gap-3">
                    <div className="w-7 h-7 rounded-sm bg-slate-900 border border-slate-700 flex items-center justify-center text-white text-xs font-bold shrink-0 mt-0.5">
                      0{i+1}
                    </div>
                    <div>
                      <div className="font-bold text-white text-xs uppercase tracking-wider">{yardItem.title}</div>
                      <div className="text-xs text-slate-300 mt-1 leading-relaxed">{yardItem.desc}</div>
                    </div>
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

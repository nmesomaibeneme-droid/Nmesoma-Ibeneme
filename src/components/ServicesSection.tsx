import React, { useState } from 'react';
import { 
  SERVICES 
} from '../data/companyData';
import { 
  Compass, 
  Briefcase, 
  ShoppingCart, 
  Ship, 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  Settings2,
  ChevronDown,
  ChevronUp,
  Shield,
  Layers
} from 'lucide-react';

interface ServicesSectionProps {
  onRequestQuote: (serviceId?: string) => void;
}

const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case 'Compass': return Compass;
    case 'Briefcase': return Briefcase;
    case 'ShoppingCart': return ShoppingCart;
    case 'Ship': return Ship;
    case 'Users': return Users;
    default: return Settings2;
  }
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onRequestQuote }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedServiceId, setExpandedServiceId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'engineering', label: 'Engineering Services' },
    { id: 'project-management', label: 'Project Management' },
    { id: 'procurement', label: 'Procurement' },
    { id: 'marine', label: 'Marine Logistics' },
    { id: 'manpower', label: 'Manpower Solutions' },
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
          <div className="inline-block px-3 py-1 rounded-sm bg-slate-100 text-mh-blue text-xs font-bold uppercase tracking-widest mb-3 border border-slate-200">
            Core Service Spectrum
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-mh-dark tracking-tight">
            Focused Upstream Oil & Gas Solutions
          </h2>
          <p className="mt-4 text-slate-600 text-base leading-relaxed">
            MH Jesse delivers technical expertise and operational excellence across five core pillars — Engineering Services, Project Management, Procurement, Marine Logistics, and Manpower Solutions.
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
                  ? 'bg-mh-blue text-white shadow-xs'
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
                className="bg-white rounded-sm border border-slate-200 shadow-xs hover:border-mh-blue/60 transition-colors flex flex-col justify-between overflow-hidden group p-6 relative"
              >
                <div>
                  {/* Card Top Header */}
                  <div className="pb-4 border-b border-slate-100">
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <div className="w-10 h-10 rounded-sm bg-mh-blue flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform shadow-xs">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-sm bg-slate-100 text-mh-dark border border-slate-200">
                        {service.category.replace('-', ' ')}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-mh-dark group-hover:text-mh-blue transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Key Capabilities Bullet Points */}
                  <div className="pt-4">
                    <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">
                      Core Scope & Deliverables
                    </h4>
                    
                    <ul className="space-y-2 text-xs text-slate-700">
                      {(isExpanded ? service.capabilities : service.capabilities.slice(0, 4)).map((cap, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-mh-blue shrink-0 mt-1.5" />
                          <span className="leading-snug">{cap}</span>
                        </li>
                      ))}
                    </ul>

                    {service.capabilities.length > 4 && (
                      <button
                        onClick={() => toggleExpand(service.id)}
                        className="mt-3 text-xs text-mh-blue hover:text-mh-blue-hover font-bold uppercase tracking-wider flex items-center gap-1 transition-colors"
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
                    className="w-full bg-mh-dark hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider py-2.5 px-4 rounded-sm transition-colors flex items-center justify-center gap-2 group-hover:bg-mh-blue transition-colors"
                  >
                    <span>Request Proposal</span>
                    <ArrowRight className="w-3.5 h-3.5 text-white" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Integrated Service Delivery Framework Banner */}
        <div className="mt-16 bg-mh-dark text-white rounded-sm p-8 lg:p-10 border border-slate-800 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2 space-y-3">
              <div className="inline-flex items-center gap-2 text-mh-blue font-bold text-xs uppercase tracking-widest">
                <Shield className="w-4 h-4" /> Single Accountability Model
              </div>
              <h3 className="text-2xl font-bold text-white">
                Integrated Technical Delivery & Quality Governance
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed max-w-2xl">
                By focusing strictly on Engineering Services, Project Management, Technical Procurement, Marine Logistics, and Manpower Solutions, MH Jesse guarantees lean project structures, prompt response times, and full 100% Nigerian Local Content compliance.
              </p>
            </div>

            <div className="md:col-span-1 flex justify-start md:justify-end">
              <button
                onClick={() => onRequestQuote()}
                className="bg-mh-blue hover:bg-mh-blue-hover text-white font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-sm transition-colors flex items-center gap-2 shadow-xs"
              >
                <span>Initiate Technical RFQ</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

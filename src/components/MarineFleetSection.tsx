import React from 'react';
import { MARINE_FLEET } from '../data/companyData';
import { Anchor, Ship, Droplets, Users, Compass, ExternalLink } from 'lucide-react';

interface MarineFleetProps {
  onRequestQuote: (serviceId?: string) => void;
}

export const MarineFleetSection: React.FC<MarineFleetProps> = ({ onRequestQuote }) => {
  return (
    <section id="marine-fleet" className="py-20 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-bold text-mh-blue uppercase tracking-widest block mb-2">
              Owned Equipment & Marine Assets
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-mh-dark tracking-tight">
              Marine Logistics & Offshore Fleet
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-2xl leading-relaxed">
              MH Jesse owns and operates a marine fleet tailored for swamp and offshore oilfield logistics across West African waters, backed by seasoned marine crews and safety systems.
            </p>
          </div>

          <div>
            <button
              onClick={() => onRequestQuote('marine-logistics-offshore-support')}
              className="bg-mh-blue hover:bg-mh-blue-hover text-white font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-sm transition-colors flex items-center gap-2 shrink-0 shadow-xs"
            >
              <span>Charter / Inquire Marine Fleet</span>
              <ExternalLink className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {MARINE_FLEET.map((item, idx) => {
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-sm p-6 hover:border-mh-blue/60 transition-colors flex flex-col justify-between group shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-sm bg-slate-100 text-mh-dark border border-slate-200">
                      {item.type}
                    </span>
                    <span className="text-xs text-mh-blue font-mono font-bold">
                      Asset #{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-mh-dark group-hover:text-mh-blue transition-colors">
                    {item.name}
                  </h3>

                  <div className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-500">
                    {item.capacityHP}
                  </div>

                  <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400 font-medium">Status: Operational & Available</span>
                  <button
                    onClick={() => onRequestQuote('marine-logistics-offshore-support')}
                    className="text-xs text-mh-blue hover:text-mh-blue-hover font-bold uppercase tracking-wider transition-colors"
                  >
                    Inquire →
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Marine Operations Banner */}
        <div className="mt-12 bg-mh-dark text-white rounded-sm p-8 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-bold text-base text-white">Need Custom Marine Logistics or Offshore Support?</h4>
            <p className="text-xs text-slate-300">
              Our marine division rapidly responds to shallow water, swamp, and offshore rig logistics requests across the Niger Delta.
            </p>
          </div>
          <button
            onClick={() => onRequestQuote('marine-logistics-offshore-support')}
            className="bg-mh-blue hover:bg-mh-blue-hover text-white font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-sm transition-colors shrink-0 shadow-xs"
          >
            Contact Marine Manager
          </button>
        </div>

      </div>
    </section>
  );
};

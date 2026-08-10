import React from 'react';
import { ChevronRight, ShieldCheck, Wrench, Ship, Factory, Award, ArrowDownRight, FileSpreadsheet } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { MHJesseLogo } from './MHJesseLogo';

interface HeroProps {
  onRequestQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRequestQuote }) => {
  return (
    <section className="relative bg-slate-50 text-slate-900 py-16 lg:py-24 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-slate-100 border border-slate-200 rounded-sm px-3 py-1 text-xs text-mh-dark font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-mh-blue" />
              100% Nigerian Upstream Contractor
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-mh-dark leading-[1.1] tracking-tight">
              Strategic Service Solutions <br />
              <span className="text-mh-blue">for Upstream Excellence.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl font-normal leading-relaxed">
              MH Jesse specializes in high-impact upstream engineering, pressure vessel fabrication, marine logistics, drilling support, and plant maintenance. We bridge complex field challenges with streamlined turnkey solutions.
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <button
                onClick={onRequestQuote}
                className="w-full sm:w-auto bg-mh-blue hover:bg-mh-blue-hover text-white font-bold text-xs uppercase tracking-wider px-8 py-3.5 rounded-sm transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <FileSpreadsheet className="w-4 h-4 text-white" />
                <span>Request Proposal</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <a
                href="#services"
                className="w-full sm:w-auto bg-white hover:bg-slate-100 text-mh-dark border border-slate-300 font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-sm transition-colors flex items-center justify-center gap-2"
              >
                <span>Explore Capabilities</span>
                <ArrowDownRight className="w-4 h-4 text-mh-blue" />
              </a>
            </div>

            {/* Key Capabilities Badges */}
            <div className="pt-6 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
              <div className="bg-white p-4 rounded-sm border border-slate-200 hover:border-mh-blue/50 transition-colors">
                <div className="text-mh-blue font-extrabold text-lg">FEED & IFC</div>
                <div className="text-xs text-slate-600 font-medium">Engineering Services</div>
              </div>
              <div className="bg-white p-4 rounded-sm border border-slate-200 hover:border-mh-blue/50 transition-colors">
                <div className="text-mh-blue font-extrabold text-lg">Marine Support</div>
                <div className="text-xs text-slate-600 font-medium">Offshore Logistics</div>
              </div>
              <div className="bg-white p-4 rounded-sm border border-slate-200 hover:border-mh-blue/50 transition-colors">
                <div className="text-mh-blue font-extrabold text-lg">Global Supply</div>
                <div className="text-xs text-slate-600 font-medium">OCTG & Valves Sourcing</div>
              </div>
              <div className="bg-white p-4 rounded-sm border border-slate-200 hover:border-mh-blue/50 transition-colors">
                <div className="text-mh-blue font-extrabold text-lg">Manpower</div>
                <div className="text-xs text-slate-600 font-medium">Technical Resourcing</div>
              </div>
            </div>
          </div>

          {/* Feature Card Summary Box */}
          <div className="lg:col-span-5">
            <div className="bg-white border border-slate-200 rounded-sm p-8 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-mh-blue" />
              
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                <MHJesseLogo size="md" showText={false} />
                <div>
                  <h3 className="font-bold text-mh-dark text-base">The MH Jesse Advantage</h3>
                  <p className="text-xs text-slate-500">Focused technical delivery & single-point governance</p>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-sm bg-slate-100 border border-slate-200 flex items-center justify-center text-mh-blue text-xs shrink-0 mt-0.5 font-bold">✓</div>
                  <div>
                    <strong className="text-mh-dark block font-semibold">Engineering & Project Management</strong>
                    FEED design, 3D modeling, interface management, and disciplined 5-stage project governance.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-sm bg-slate-100 border border-slate-200 flex items-center justify-center text-mh-blue text-xs shrink-0 mt-0.5 font-bold">✓</div>
                  <div>
                    <strong className="text-mh-dark block font-semibold">Owned Marine Fleet</strong>
                    1,000T & 800T Ramp Barges, 1,200T Fuel Barge, 1,000HP Tugboats, and 60-Man Accommodation Houseboat.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-sm bg-slate-100 border border-slate-200 flex items-center justify-center text-mh-blue text-xs shrink-0 mt-0.5 font-bold">✓</div>
                  <div>
                    <strong className="text-mh-dark block font-semibold">Procurement & Manpower Resourcing</strong>
                    Worldwide high-spec equipment sourcing combined with prompt deployment of skilled oilfield specialists.
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 text-center">
                <a
                  href="#contact"
                  className="text-xs text-mh-blue hover:text-mh-blue-hover font-bold uppercase tracking-wider inline-flex items-center gap-1 group"
                >
                  <span>Request Proposal or Fleet Availability</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

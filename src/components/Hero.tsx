import React from 'react';
import { ChevronRight, ShieldCheck, Wrench, Ship, Factory, Award, ArrowDownRight, FileSpreadsheet } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

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
            <div className="inline-flex items-center gap-2 bg-slate-200/80 border border-slate-300 rounded-sm px-3 py-1 text-xs text-slate-800 font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-slate-900" />
              100% Nigerian Upstream Contractor
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tight">
              Strategic Service Solutions <br />
              <span className="text-slate-400">for Upstream Excellence.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl font-normal leading-relaxed">
              MH Jesse specializes in high-impact upstream engineering, pressure vessel fabrication, marine logistics, drilling support, and plant maintenance. We bridge complex field challenges with streamlined turnkey solutions.
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <button
                onClick={onRequestQuote}
                className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider px-8 py-3.5 rounded-sm transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <FileSpreadsheet className="w-4 h-4 text-slate-300" />
                <span>Request Proposal</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <a
                href="#services"
                className="w-full sm:w-auto bg-white hover:bg-slate-100 text-slate-900 border border-slate-300 font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-sm transition-colors flex items-center justify-center gap-2"
              >
                <span>Explore Capabilities</span>
                <ArrowDownRight className="w-4 h-4 text-slate-700" />
              </a>
            </div>

            {/* Key Capabilities Badges */}
            <div className="pt-6 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
              <div className="bg-white p-4 rounded-sm border border-slate-200">
                <div className="text-slate-900 font-bold text-lg">75k BPD</div>
                <div className="text-xs text-slate-500 font-medium">3-Phase Separators</div>
              </div>
              <div className="bg-white p-4 rounded-sm border border-slate-200">
                <div className="text-slate-900 font-bold text-lg">1,200 T</div>
                <div className="text-xs text-slate-500 font-medium">Offshore Fuel Barge</div>
              </div>
              <div className="bg-white p-4 rounded-sm border border-slate-200">
                <div className="text-slate-900 font-bold text-lg">OML 65 & 42</div>
                <div className="text-xs text-slate-500 font-medium">Active Upstream Assets</div>
              </div>
              <div className="bg-white p-4 rounded-sm border border-slate-200">
                <div className="text-slate-900 font-bold text-lg">CMMS</div>
                <div className="text-xs text-slate-500 font-medium">Asset Maintenance</div>
              </div>
            </div>
          </div>

          {/* Feature Card Summary Box */}
          <div className="lg:col-span-5">
            <div className="bg-white border border-slate-200 rounded-sm p-8 shadow-sm">
              
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                <div className="w-10 h-10 bg-slate-100 rounded-sm flex items-center justify-center text-slate-900 shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">The MH Jesse Advantage</h3>
                  <p className="text-xs text-slate-500">Turnkey engineering & single-point accountability</p>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-sm bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-900 text-xs shrink-0 mt-0.5 font-bold">✓</div>
                  <div>
                    <strong className="text-slate-900 block font-semibold">Equipped Fabrication Yards</strong>
                    Port Harcourt facilities at Igwuruta & Fortress Yard with CNC cutters, vessel handlers, and plate rolling.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-sm bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-900 text-xs shrink-0 mt-0.5 font-bold">✓</div>
                  <div>
                    <strong className="text-slate-900 block font-semibold">Owned Marine Fleet</strong>
                    1,000T & 800T Ramp Barges, 1,200T Fuel Barge, 1,000HP Tugboats, and 60-Man Accommodation Houseboat.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-sm bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-900 text-xs shrink-0 mt-0.5 font-bold">✓</div>
                  <div>
                    <strong className="text-slate-900 block font-semibold">Proven Operator Partnerships</strong>
                    Track record with COPDC Petroleum, Midwestern Oil & Gas, TWEMS Energies, Energia, and IMSE.
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 text-center">
                <a
                  href="#contact"
                  className="text-xs text-slate-900 hover:text-slate-700 font-bold uppercase tracking-wider inline-flex items-center gap-1 group"
                >
                  <span>Inquire About Yard & Equipment Availability</span>
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

import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { Mail, Phone, MapPin, Shield } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 text-xs py-12 border-t border-slate-800 shrink-0">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="md:col-span-1 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-white flex items-center justify-center text-slate-900 font-bold text-xs rounded-sm">
                MH
              </div>
              <span className="font-bold text-white text-sm">MH JESSE NIGERIA LTD</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              100% Nigerian energy service provider in the oil and gas industry delivering engineering, procurement, construction, marine logistics, and facility maintenance.
            </p>
            <div className="inline-flex items-center gap-1.5 text-[10px] text-slate-300 font-bold uppercase tracking-wider bg-slate-800 border border-slate-700 px-2.5 py-1 rounded-sm">
              <Shield className="w-3 h-3 text-slate-400" /> 100% Local Content Compliant
            </div>
          </div>

          {/* Core Services Links */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-widest mb-3">Capabilities</h4>
            <ul className="space-y-2 text-slate-300">
              <li><a href="#services" className="hover:text-white transition-colors">Engineering & FEED Design</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Drilling Engineering & Supervision</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Pressure Vessel & Separators</a></li>
              <li><a href="#marine-fleet" className="hover:text-white transition-colors">Marine Fleet & Offshore Support</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Technical Procurement</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Facility Maintenance (CMMS)</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-widest mb-3">Navigation</h4>
            <ul className="space-y-2 text-slate-300">
              <li><a href="#services" className="hover:text-white transition-colors">Service Spectrum</a></li>
              <li><a href="#marine-fleet" className="hover:text-white transition-colors">Marine Equipment Fleet</a></li>
              <li><a href="#track-record" className="hover:text-white transition-colors">Executed Case Studies</a></li>
              <li><a href="#why-us" className="hover:text-white transition-colors">Project Management Framework</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Yard Locations & Contact</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-widest mb-3">Contact & Yards</h4>
            <ul className="space-y-2.5 text-slate-300">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white">{COMPANY_INFO.email}</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`} className="hover:text-white">{COMPANY_INFO.phone}</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-slate-500 font-medium">
          <div>
            © {new Date().getFullYear()} MH Jesse Nigeria Limited. All rights reserved.
          </div>
          <div className="uppercase tracking-widest">
            Engineering · Procurement · Construction · Marine Logistics
          </div>
        </div>
      </div>
    </footer>
  );
};

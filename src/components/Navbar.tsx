import React, { useState } from 'react';
import { Phone, Mail, MapPin, ChevronRight, Menu, X, Shield, FileText } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface NavbarProps {
  onRequestQuote: (serviceId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onRequestQuote }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shrink-0">
      {/* Top bar with direct contacts */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-6 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-6 flex-wrap justify-center md:justify-start">
            <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail className="w-3.5 h-3.5 text-slate-400" />
              <span>{COMPANY_INFO.email}</span>
            </a>
            <a href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5 text-slate-400" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <div className="hidden lg:flex items-center gap-1.5 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              <span className="truncate max-w-xs">{COMPANY_INFO.address}</span>
            </div>
          </div>
          <div className="flex items-center gap-4 text-[11px] font-semibold tracking-wider uppercase">
            <span className="bg-slate-800 text-slate-200 px-2.5 py-0.5 rounded-sm border border-slate-700 flex items-center gap-1">
              <Shield className="w-3 h-3 text-slate-400" /> 100% Nigerian Content
            </span>
            <span className="text-slate-400 hidden sm:inline">Port Harcourt · Rivers State</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo / Company Title */}
        <a href="#" className="flex items-center space-x-3 group">
          <div className="w-8 h-8 bg-slate-900 flex items-center justify-center rounded-sm shrink-0">
            <span className="text-white font-bold text-xs">MH</span>
          </div>
          <div>
            <div className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-slate-700 transition-colors leading-none">
              MH JESSE
            </div>
            <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest mt-1 hidden sm:block">
              Consulting · Engineering · Procurement · Construction
            </div>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600">
          <a href="#services" className="hover:text-slate-900 transition-colors py-1">Services</a>
          <a href="#marine-fleet" className="hover:text-slate-900 transition-colors py-1">Marine Fleet</a>
          <a href="#track-record" className="hover:text-slate-900 transition-colors py-1">Case Studies</a>
          <a href="#why-us" className="hover:text-slate-900 transition-colors py-1">Framework</a>
          <a href="#contact" className="hover:text-slate-900 transition-colors py-1">Contact</a>
        </nav>

        {/* CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={() => onRequestQuote()}
            className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-sm transition-colors uppercase tracking-wider flex items-center gap-2"
          >
            <FileText className="w-4 h-4 text-slate-300" />
            <span>Request Proposal</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-slate-700 hover:text-slate-900 p-2 rounded-sm focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 px-6 py-4 space-y-3">
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-800 hover:text-slate-900 font-medium py-2 text-sm"
          >
            Services & Capabilities
          </a>
          <a
            href="#marine-fleet"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-800 hover:text-slate-900 font-medium py-2 text-sm"
          >
            Marine Fleet & Assets
          </a>
          <a
            href="#track-record"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-800 hover:text-slate-900 font-medium py-2 text-sm"
          >
            Executed Projects (Case Studies)
          </a>
          <a
            href="#why-us"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-800 hover:text-slate-900 font-medium py-2 text-sm"
          >
            Project Framework & Advantage
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-800 hover:text-slate-900 font-medium py-2 text-sm"
          >
            Contact & Yard Base
          </a>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onRequestQuote();
              }}
              className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-2.5 px-4 rounded-sm flex items-center justify-center gap-2 text-xs uppercase tracking-wider"
            >
              <FileText className="w-4 h-4" />
              <span>Request Technical Proposal</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

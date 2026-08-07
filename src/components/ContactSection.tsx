import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, Building, Factory } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-2">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Contact MH Jesse Nigeria Limited
          </h2>
          <p className="mt-4 text-slate-600 text-base leading-relaxed">
            Reach out to our engineering and commercial teams for project evaluations, yard facility tours, or technical proposals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Info & Yard Locations */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Headquarters Card */}
            <div className="bg-white border border-slate-200 rounded-sm p-6 sm:p-8 space-y-6 shadow-xs">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Building className="w-5 h-5 text-slate-700" />
                Headquarters & Yard Base
              </h3>

              <div className="space-y-4 text-xs text-slate-600">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-slate-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-bold mb-0.5 uppercase tracking-wider text-[10px]">Corporate & Fortress Yard:</strong>
                    <span>{COMPANY_INFO.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Factory className="w-4 h-4 text-slate-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-bold mb-0.5 uppercase tracking-wider text-[10px]">Civil & Heavy Fabrication Yard:</strong>
                    <span>{COMPANY_INFO.fabricationYard}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-slate-100">
                  <Mail className="w-4 h-4 text-slate-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-bold mb-0.5 uppercase tracking-wider text-[10px]">Email Address:</strong>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-slate-900 hover:underline font-semibold">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-slate-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-bold mb-0.5 uppercase tracking-wider text-[10px]">Direct Phone:</strong>
                    <a href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`} className="text-slate-900 hover:underline font-semibold">
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours / Response Time Card */}
            <div className="bg-slate-900 text-white rounded-sm p-5 text-xs flex items-center gap-4 shadow-xs">
              <div className="w-9 h-9 rounded-sm bg-slate-800 flex items-center justify-center text-white shrink-0 font-bold">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <strong className="text-white block font-bold uppercase tracking-wider text-[10px]">Rapid Response SLA</strong>
                Our technical sales engineers respond to proposal requests within 24 business hours.
              </div>
            </div>

          </div>

          {/* Contact / Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-200 rounded-sm p-6 sm:p-8 shadow-xs">
              <h3 className="text-lg font-bold text-slate-900 mb-6">Send Us a Direct Message</h3>

              {submitted ? (
                <div className="bg-slate-50 border border-slate-200 rounded-sm p-6 text-center space-y-4">
                  <div className="w-10 h-10 bg-slate-900 text-white rounded-sm flex items-center justify-center mx-auto font-bold">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900">Message Transmitted</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Thank you, <strong className="text-slate-900">{formState.name}</strong>. Your message regarding <strong className="text-slate-900">{formState.subject}</strong> has been transmitted to <span className="text-slate-900 font-semibold">{COMPANY_INFO.email}</span>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({ name: '', email: '', phone: '', subject: 'General Inquiry', message: '' });
                    }}
                    className="text-xs text-slate-900 hover:text-slate-700 font-bold uppercase tracking-wider underline pt-2"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Engr. Samuel Amadi"
                        value={formState.name}
                        onChange={e => setFormState({ ...formState, name: e.target.value })}
                        className="w-full text-xs p-3 rounded-sm bg-white border border-slate-300 text-slate-900 focus:border-slate-900 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="samuel@company.com"
                        value={formState.email}
                        onChange={e => setFormState({ ...formState, email: e.target.value })}
                        className="w-full text-xs p-3 rounded-sm bg-white border border-slate-300 text-slate-900 focus:border-slate-900 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="+234 800 000 0000"
                        value={formState.phone}
                        onChange={e => setFormState({ ...formState, phone: e.target.value })}
                        className="w-full text-xs p-3 rounded-sm bg-white border border-slate-300 text-slate-900 focus:border-slate-900 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-1">Subject Scope</label>
                      <select
                        value={formState.subject}
                        onChange={e => setFormState({ ...formState, subject: e.target.value })}
                        className="w-full text-xs p-3 rounded-sm bg-white border border-slate-300 text-slate-900 focus:border-slate-900 focus:outline-none"
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Pressure Vessel Fabrication">Pressure Vessel Fabrication</option>
                        <option value="Drilling Engineering">Drilling Engineering</option>
                        <option value="Marine Fleet Charter">Marine Fleet Charter</option>
                        <option value="Technical Procurement">Technical Procurement</option>
                        <option value="Facility Maintenance & CMMS">Facility Maintenance & CMMS</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-1">Your Message *</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Detail your technical or commercial request..."
                      value={formState.message}
                      onChange={e => setFormState({ ...formState, message: e.target.value })}
                      className="w-full text-xs p-3 rounded-sm bg-white border border-slate-300 text-slate-900 focus:border-slate-900 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider py-3 px-6 rounded-sm transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5 text-slate-300" />
                    <span>Send Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

import React, { useState, useEffect } from 'react';
import { X, Check, Send, FileText, CheckCircle2, Copy } from 'lucide-react';
import { SERVICES, COMPANY_INFO } from '../data/companyData';
import { ServiceQuoteRequest } from '../types';
import { MHJesseLogo } from './MHJesseLogo';

interface ServiceQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
}

export const ServiceQuoteModal: React.FC<ServiceQuoteModalProps> = ({
  isOpen,
  onClose,
  initialServiceId
}) => {
  const [formData, setFormData] = useState<ServiceQuoteRequest>({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    servicesSelected: [],
    projectLocation: 'Onshore',
    projectDetails: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (initialServiceId) {
      setFormData(prev => ({
        ...prev,
        servicesSelected: prev.servicesSelected.includes(initialServiceId)
          ? prev.servicesSelected
          : [...prev.servicesSelected, initialServiceId]
      }));
    }
  }, [initialServiceId]);

  if (!isOpen) return null;

  const toggleService = (serviceId: string) => {
    setFormData(prev => ({
      ...prev,
      servicesSelected: prev.servicesSelected.includes(serviceId)
        ? prev.servicesSelected.filter(id => id !== serviceId)
        : [...prev.servicesSelected, serviceId]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const selectedServiceTitles = SERVICES.filter(s => formData.servicesSelected.includes(s.id)).map(s => s.title);

  const formatSummaryText = () => {
    return `MH JESSE SERVICE PROPOSAL REQUEST
----------------------------------------
Client Name: ${formData.fullName}
Company: ${formData.companyName}
Email: ${formData.email}
Phone: ${formData.phone}
Project Location: ${formData.projectLocation}
Selected Services:
${selectedServiceTitles.map(t => `- ${t}`).join('\n') || '- General Services Inquiry'}

Scope & Details:
${formData.projectDetails || 'No additional details provided.'}
----------------------------------------
Sent to: ${COMPANY_INFO.email}`;
  };

  const handleCopySummary = () => {
    navigator.clipboard.writeText(formatSummaryText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-sm max-w-2xl w-full border border-slate-200 shadow-xl overflow-hidden my-8 relative">
        
        {/* Header */}
        <div className="bg-mh-dark text-white p-6 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <MHJesseLogo size="md" showText={false} variant="dark" />
            <div>
              <span className="text-[10px] text-mh-blue font-bold uppercase tracking-widest block">Direct Inquiry & RFQ</span>
              <h3 className="text-lg font-bold text-white">Request Technical Proposal</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-sm transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-6">
            <div className="w-12 h-12 bg-mh-blue text-white rounded-sm flex items-center justify-center mx-auto shadow-xs">
              <CheckCircle2 className="w-7 h-7" />
            </div>

            <div>
              <h4 className="text-xl font-bold text-mh-dark">Proposal Request Generated</h4>
              <p className="text-xs text-slate-600 mt-2 max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-mh-dark">{formData.fullName}</strong>. Your technical request for <strong className="text-mh-dark">{formData.companyName || 'your organization'}</strong> has been generated for MH Jesse Nigeria Limited.
              </p>
            </div>

            {/* Formatted Request Box */}
            <div className="bg-mh-dark text-slate-200 p-4 rounded-sm text-left text-xs font-mono whitespace-pre-wrap max-h-48 overflow-y-auto border border-slate-800">
              {formatSummaryText()}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                onClick={handleCopySummary}
                className="w-full sm:w-auto bg-slate-100 hover:bg-slate-200 text-mh-dark font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-sm flex items-center justify-center gap-2 border border-slate-300 transition-colors"
              >
                <Copy className="w-4 h-4 text-mh-blue" />
                <span>{copied ? 'Copied to Clipboard!' : 'Copy Formatted RFQ'}</span>
              </button>

              <a
                href={`mailto:${COMPANY_INFO.email}?subject=Technical Proposal Request - ${encodeURIComponent(formData.companyName || formData.fullName)}&body=${encodeURIComponent(formatSummaryText())}`}
                className="w-full sm:w-auto bg-mh-blue hover:bg-mh-blue-hover text-white font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-sm flex items-center justify-center gap-2 transition-colors shadow-xs"
              >
                <Send className="w-4 h-4 text-white" />
                <span>Open in Email Client</span>
              </a>
            </div>

            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="text-xs text-slate-500 hover:text-mh-dark font-bold uppercase tracking-wider underline block mx-auto pt-2"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
            
            {/* Step 1: Select Services */}
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-2">
                1. Select Required Services (Check all that apply)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-40 overflow-y-auto p-2 bg-slate-50 border border-slate-200 rounded-sm">
                {SERVICES.map(s => {
                  const isChecked = formData.servicesSelected.includes(s.id);
                  return (
                    <label
                      key={s.id}
                      className={`flex items-start gap-2.5 p-2 rounded-sm text-xs cursor-pointer transition-all border ${
                        isChecked 
                          ? 'bg-mh-blue border-mh-blue text-white font-bold' 
                          : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => toggleService(s.id)}
                        className="mt-0.5 rounded-xs"
                      />
                      <span>{s.title}</span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Project Location */}
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-2">
                2. Project Operating Environment
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {(['Onshore', 'Offshore', 'Swamp', 'Engineering Office'] as const).map(loc => (
                  <button
                    key={loc}
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, projectLocation: loc }))}
                    className={`py-2 px-3 rounded-sm text-xs font-bold uppercase tracking-wider border transition-colors ${
                      formData.projectLocation === loc
                        ? 'bg-mh-blue text-white border-mh-blue shadow-xs'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {loc}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Engr. David Okafor"
                  value={formData.fullName}
                  onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full text-xs p-2.5 rounded-sm border border-slate-300 text-mh-dark focus:border-mh-blue focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-1">Company / Organization *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Shell / COPDC / Operator"
                  value={formData.companyName}
                  onChange={e => setFormData({ ...formData, companyName: e.target.value })}
                  className="w-full text-xs p-2.5 rounded-sm border border-slate-300 text-mh-dark focus:border-mh-blue focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-1">Official Email *</label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  className="w-full text-xs p-2.5 rounded-sm border border-slate-300 text-mh-dark focus:border-mh-blue focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-1">Phone Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="+234 800 000 0000"
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full text-xs p-2.5 rounded-sm border border-slate-300 text-mh-dark focus:border-mh-blue focus:outline-none"
                />
              </div>
            </div>

            {/* Scope Details */}
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-1">Project Scope & Technical Details</label>
              <textarea
                rows={3}
                placeholder="Specify field location, target capacity, vessel dimensions, or marine charter timeline..."
                value={formData.projectDetails}
                onChange={e => setFormData({ ...formData, projectDetails: e.target.value })}
                className="w-full text-xs p-2.5 rounded-sm border border-slate-300 text-mh-dark focus:border-mh-blue focus:outline-none"
              />
            </div>

            <div className="pt-2 flex items-center justify-end gap-3 border-t border-slate-100">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider text-slate-600 hover:bg-slate-100 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-mh-blue hover:bg-mh-blue-hover text-white font-bold text-xs uppercase tracking-wider px-6 py-2.5 rounded-sm transition-colors flex items-center gap-2 shadow-xs"
              >
                <Send className="w-3.5 h-3.5 text-white" />
                <span>Transmit Technical Request</span>
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};

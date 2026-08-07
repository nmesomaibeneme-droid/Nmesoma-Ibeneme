import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { MarineFleetSection } from './components/MarineFleetSection';
import { TrackRecordSection } from './components/TrackRecordSection';
import { WhyMHJesse } from './components/WhyMHJesse';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ServiceQuoteModal } from './components/ServiceQuoteModal';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);

  const handleOpenQuote = (serviceId?: string) => {
    setSelectedServiceId(serviceId);
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuote = () => {
    setIsQuoteModalOpen(false);
    setSelectedServiceId(undefined);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 antialiased selection:bg-slate-900 selection:text-white">
      {/* Header / Navbar */}
      <Navbar onRequestQuote={handleOpenQuote} />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero onRequestQuote={() => handleOpenQuote()} />

        {/* Core Services Section - Primary Selling Focus */}
        <ServicesSection onRequestQuote={handleOpenQuote} />

        {/* Owned Marine Fleet & Offshore Equipment */}
        <MarineFleetSection onRequestQuote={handleOpenQuote} />

        {/* Proven Track Record & Executed Projects */}
        <TrackRecordSection />

        {/* Value Proposition & 5-Stage Delivery Framework */}
        <WhyMHJesse />

        {/* Contact & Yard Locations */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Service Quote / RFQ Modal */}
      <ServiceQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseQuote}
        initialServiceId={selectedServiceId}
      />
    </div>
  );
}

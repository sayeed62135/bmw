
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Booking: React.FC = () => {
  return (
    <section id="booking" className="relative py-32 md:py-48 overflow-hidden bg-black">
      <img 
        src="https://cms.meghna-executive.com/admin/uploads/unit/executive-motors-ltd/1733136390tEtHV.jpg" 
        className="absolute inset-0 w-full h-full object-cover opacity-50 z-0"
        alt="BMW i7 Interior"
      />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl">
          <h2 className="text-white text-4xl md:text-6xl font-bold mb-10 leading-tight">
            Discover a new level of luxury with the 2025 BMW i7 Sedan.
          </h2>
          <button className="group relative px-14 py-6 bg-white text-black text-[11px] font-bold uppercase tracking-[0.4em] overflow-hidden transition-all duration-500 flex items-center gap-4">
            <span className="relative z-10 group-hover:text-white transition-colors duration-500">Book a Test Drive</span>
            <ArrowRight size={18} className="relative z-10 group-hover:text-white group-hover:translate-x-2 transition-all duration-500" />
            <div className="absolute inset-0 bg-black -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Booking;

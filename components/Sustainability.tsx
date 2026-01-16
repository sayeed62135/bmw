
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Sustainability: React.FC = () => {
  return (
    <section id="sustainability" className="bg-white py-40 md:py-60">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="text-black/20 text-[10px] font-bold tracking-[0.5em] uppercase block mb-6">Forwardism — The Future</span>
            <h2 className="text-black text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
              Pioneering the <br />
              <span className="font-serif italic font-normal text-black/60">Electric Era.</span>
            </h2>
          </div>
          <p className="text-black/40 text-sm max-w-xs uppercase tracking-widest font-bold leading-relaxed">
            Sustainability is not a goal, but a prerequisite for luxury.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-1px bg-black/5">
          <div className="bg-white p-12 md:p-20 space-y-8">
            <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center text-xs font-bold">01</div>
            <h4 className="text-2xl font-bold">Circular Economy</h4>
            <p className="text-black/60 text-sm leading-relaxed">
              BMW i models are built with up to 95% recyclable materials, ensuring the journey ends as cleanly as it began.
            </p>
          </div>
          <div className="bg-white p-12 md:p-20 space-y-8">
            <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center text-xs font-bold">02</div>
            <h4 className="text-2xl font-bold">Green Energy</h4>
            <p className="text-black/60 text-sm leading-relaxed">
              Our Retail.Next showrooms are being optimized for maximum energy efficiency and solar integration.
            </p>
          </div>
          <div className="bg-white p-12 md:p-20 space-y-8">
            <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center text-xs font-bold">03</div>
            <h4 className="text-2xl font-bold">i-Performance</h4>
            <p className="text-black/60 text-sm leading-relaxed">
              Leading the Bangladeshi market with the most diverse range of premium fully-electric vehicles.
            </p>
          </div>
        </div>

        <div className="mt-24">
          <a href="#" className="group inline-flex items-center gap-6">
            <div className="w-16 h-16 bg-black text-white flex items-center justify-center transition-all group-hover:scale-105">
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </div>
            <div>
              <p className="text-black/30 text-[9px] font-bold uppercase tracking-[0.3em] mb-1">Our Commitment</p>
              <span className="text-black font-bold uppercase tracking-[0.2em] text-xs">Sustainability Report 2024</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;

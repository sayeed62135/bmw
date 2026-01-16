
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Overview: React.FC = () => {
  return (
    <section id="overview" className="bg-[#191D1C] py-40 md:py-60 border-b border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-4">
             <div className="sticky top-40">
               <span className="text-white/20 text-[10px] font-bold tracking-[0.4em] uppercase block mb-6">01 — Experience</span>
               <h2 className="text-white text-4xl font-serif italic mb-8">Engineering Perfection.</h2>
               <div className="w-20 h-[1px] bg-white/20"></div>
             </div>
          </div>
          
          <div className="lg:col-span-8">
            <h3 className="text-white text-3xl md:text-5xl font-light leading-[1.3] mb-16 max-w-3xl">
              As Bangladesh's exclusive importer since 2002, we redefine luxury automotive experiences by embodying <span className="font-serif italic text-white/80">BMW's legacy</span> of engineering excellence.
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
              <div className="space-y-10">
                <p className="text-white/60 leading-relaxed text-sm md:text-base">
                  Welcome to Executive Motors Ltd., a distinguished brand of Meghna Executive Holdings. We serve as the gateway to Sheer Driving Pleasure, offering a curated selection of the world's most advanced vehicles.
                </p>
                <div className="pt-4">
                  <a 
                    href="https://www.bmw.com.bd/" 
                    target="_blank" 
                    className="inline-flex items-center gap-6 text-white group relative pb-2 border-b border-white/10 hover:border-white transition-all"
                  >
                    <span className="text-[11px] font-bold tracking-[0.3em] uppercase group-hover:translate-x-1 transition-transform">Visit BMW Bangladesh</span>
                    <ArrowRight className="text-white group-hover:translate-x-3 transition-transform duration-300" size={16} />
                  </a>
                </div>
              </div>
              <div className="bg-[#1e2221] p-10 md:p-14 rounded-sm border border-white/5">
                <p className="text-white text-lg font-light leading-relaxed italic opacity-80 mb-8">
                  "In 2023, we elevated this journey with the launch of the BMW Retail.Next showroom at Meghna Tower—a state-of-the-art, customer-centric space."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[10px] font-bold">EML</div>
                  <span className="text-[9px] font-bold tracking-widest text-white/40 uppercase">Retail.Next Concept</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;

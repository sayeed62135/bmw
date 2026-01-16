
import React from 'react';

const Heritage: React.FC = () => {
  return (
    <section id="heritage" className="bg-[#191D1C] py-40 md:py-60 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 border border-white/5 group-hover:inset-0 transition-all duration-700"></div>
            <img 
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop" 
              alt="BMW Heritage" 
              className="w-full h-[600px] object-cover grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-1000"
            />
            <div className="absolute bottom-10 -right-10 bg-white p-10 hidden md:block">
              <span className="text-black text-6xl font-serif italic">20+</span>
              <p className="text-black/60 text-[10px] font-bold uppercase tracking-[0.3em] mt-2">Years of Excellence</p>
            </div>
          </div>
          <div className="space-y-12">
            <span className="text-white/20 text-[10px] font-bold tracking-[0.5em] uppercase">Our Journey — Established 2002</span>
            <h2 className="text-white text-5xl md:text-7xl font-bold tracking-tighter leading-none">
              A Legacy of <br />
              <span className="font-serif italic font-normal text-white/80">Innovation.</span>
            </h2>
            <p className="text-white/60 leading-relaxed text-lg font-light max-w-xl">
              From our inception as Bangladesh's exclusive BMW importer, Executive Motors Ltd has been synonymous with precision. We don't just sell cars; we curate a lifestyle of uncompromising standards.
            </p>
            <div className="grid grid-cols-2 gap-12 pt-8">
              <div className="border-l border-white/10 pl-8">
                <h4 className="text-white text-3xl font-bold mb-2">1st</h4>
                <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest leading-relaxed">Exclusive Importer <br />in Bangladesh</p>
              </div>
              <div className="border-l border-white/10 pl-8">
                <h4 className="text-white text-3xl font-bold mb-2">Retail.Next</h4>
                <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest leading-relaxed">State-of-the-art <br />Experience Center</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Heritage;

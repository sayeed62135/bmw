
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover"
        >
          <source src="https://cms.meghna-executive.com/admin/uploads/unit/executive-motors-ltd/1730269855Bbrcn.mp4" type="video/mp4" />
        </video>
        {/* Advanced Layering Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-[#191D1C]" />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 md:px-12 relative z-20 mt-20">
        <div className="max-w-5xl">
          <div className="overflow-hidden mb-8">
            <p className="text-white/60 text-[10px] font-bold tracking-[0.5em] uppercase animate-in slide-in-from-bottom duration-700">
              Meghna Executive Holdings
            </p>
          </div>
          
          <h1 className="text-white text-6xl md:text-[120px] font-bold leading-[0.9] tracking-tighter mb-10">
            <span className="block animate-in slide-in-from-bottom duration-1000 delay-100">Executive</span>
            <span className="block font-serif italic font-normal animate-in slide-in-from-bottom duration-1000 delay-300">Motors Ltd.</span>
          </h1>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-10 mt-12 animate-in fade-in duration-1000 delay-500">
             <a 
               href="#models" 
               className="group relative px-16 py-6 bg-white text-black text-[11px] font-bold tracking-[0.4em] uppercase overflow-hidden transition-all duration-500"
             >
               <span className="relative z-10 group-hover:text-white transition-colors duration-500">Explore Models</span>
               <div className="absolute inset-0 bg-black -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
             </a>
             <div className="flex items-center gap-6 text-white/40">
                <span className="w-16 h-[1px] bg-white/20"></span>
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase">Exclusive BMW Dealer</span>
             </div>
          </div>
        </div>
      </div>

      {/* Interactive Scroll Down */}
      <a href="#overview" className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-4 group">
        <span className="text-[9px] font-bold text-white/40 tracking-[0.4em] uppercase group-hover:text-white transition-colors">Scroll</span>
        <div className="w-[1px] h-14 bg-white/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-scroll-line" />
        </div>
      </a>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scroll-line {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
        .animate-scroll-line {
          animation: scroll-line 2.5s cubic-bezier(.76,0,.24,1) infinite;
        }
      `}} />
    </section>
  );
};

export default Hero;

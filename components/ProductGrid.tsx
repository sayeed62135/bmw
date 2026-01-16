
import React from 'react';
import { BMW_MODELS } from '../constants';

const ProductGrid: React.FC = () => {
  return (
    <section id="models" className="bg-[#F1F0EE] py-40 md:py-60">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-32">
          <div className="lg:col-span-4">
             <span className="text-black/20 text-[10px] font-bold tracking-[0.4em] uppercase block mb-6">03 — Showroom</span>
             <h2 className="text-black text-4xl md:text-5xl font-bold leading-tight">BMW Models.</h2>
          </div>
          <div className="lg:col-span-8 flex flex-col md:flex-row gap-12">
            <p className="text-black/60 text-sm md:text-base leading-relaxed max-w-md">
              Discover the epitome of elegance and performance. From refined sedans to commanding SAVs, find the BMW that defines you.
            </p>
            <div className="flex flex-wrap gap-3">
               {['All', 'Petrol', 'Electric', 'Hybrid'].map((filter, idx) => (
                 <button 
                  key={filter} 
                  className={`px-8 py-3 border border-black/10 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 ${
                    idx === 0 ? 'bg-black text-white' : 'hover:bg-black hover:text-white'
                  }`}
                 >
                   {filter}
                 </button>
               ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
          {BMW_MODELS.map((car) => (
            <a 
              key={car.id} 
              href={car.link} 
              target="_blank" 
              className="group block"
            >
              <div className="aspect-[16/10] overflow-hidden bg-white flex items-center justify-center p-8 mb-8 transition-shadow duration-500 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
                <img 
                  src={car.image} 
                  alt={car.name} 
                  className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-black/40 text-[9px] font-bold tracking-[0.3em] uppercase">{car.type}</span>
                  <div className="w-10 h-[1px] bg-black/10 group-hover:bg-black/40 transition-colors"></div>
                </div>
                <h4 className="text-black text-2xl font-bold tracking-tight group-hover:text-blue-900 transition-colors">
                  {car.name}
                </h4>
                <div className="flex items-center gap-3 text-[10px] font-bold tracking-[0.3em] uppercase opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                  <span>Explore Now</span>
                  <span className="w-12 h-[1px] bg-black"></span>
                </div>
              </div>
            </a>
          ))}
        </div>
        
        <div className="mt-32 text-center">
           <a 
             href="https://www.bmw.com.bd/models/" 
             className="group relative inline-flex items-center justify-center px-16 py-6 border border-black text-black text-[11px] font-bold uppercase tracking-[0.4em] overflow-hidden transition-all duration-500"
           >
             <span className="relative z-10 group-hover:text-white transition-colors duration-500">View Entire Fleet</span>
             <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
           </a>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;

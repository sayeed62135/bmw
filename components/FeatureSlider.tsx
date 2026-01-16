
import React, { useRef, useEffect, useState } from 'react';
import { FEATURES } from '../constants';
import { ArrowRight } from 'lucide-react';

const FeatureSlider: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const [isAtStart, setIsAtStart] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      // Sensitivity factor
      const delta = e.deltaY || e.deltaX;
      
      const isScrollingDown = delta > 0;
      const isScrollingUp = delta < 0;

      // Check if we are at the boundaries
      const scrollLeft = container.scrollLeft;
      const maxScroll = container.scrollWidth - container.clientWidth;
      
      const atStart = scrollLeft <= 5;
      const atEnd = scrollLeft >= maxScroll - 5;

      // If we are scrolling down and not at the end, OR scrolling up and not at the start
      if ((isScrollingDown && !atEnd) || (isScrollingUp && !atStart)) {
        // Prevent page scroll
        e.preventDefault();
        // Scroll container horizontally instead
        container.scrollLeft += delta;
      }
    };

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const maxScroll = container.scrollWidth - container.clientWidth;
      const itemWidth = container.scrollWidth / FEATURES.length;
      
      const currentIdx = Math.round(scrollLeft / itemWidth);
      setActiveIndex(currentIdx);
      setIsAtStart(scrollLeft <= 10);
      setIsAtEnd(scrollLeft >= maxScroll - 10);
    };

    // Passive: false is required to preventDefault
    container.addEventListener('wheel', handleWheel, { passive: false });
    container.addEventListener('scroll', handleScroll);

    return () => {
      container.removeEventListener('wheel', handleWheel);
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollTo = (index: number) => {
    if (!containerRef.current) return;
    const itemWidth = containerRef.current.scrollWidth / FEATURES.length;
    containerRef.current.scrollTo({
      left: itemWidth * index,
      behavior: 'smooth'
    });
  };

  return (
    <section 
      ref={sectionRef}
      id="features" 
      className="bg-[#191D1C] py-40 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 md:px-12 mb-16">
        <div className="flex justify-between items-end">
          <div className="space-y-4">
            <span className="text-white/20 text-[10px] font-bold tracking-[0.4em] uppercase">02 — Highlights</span>
            <h2 className="text-white text-3xl md:text-5xl font-serif italic">Exceptional Detail.</h2>
          </div>
          <div className="hidden md:flex flex-col items-end gap-4">
             <div className="flex items-center gap-4 text-white/40">
                <span className="text-[10px] font-bold uppercase tracking-widest">
                  {isAtEnd ? "End of Highlights" : "Scroll to Explore"}
                </span>
                <div className="w-12 h-[1px] bg-white/10"></div>
             </div>
             {/* Progress Bar */}
             <div className="w-32 h-[1px] bg-white/5 relative">
                <div 
                  className="absolute top-0 left-0 h-full bg-white transition-all duration-300"
                  style={{ width: `${((activeIndex + 1) / FEATURES.length) * 100}%` }}
                />
             </div>
          </div>
        </div>
      </div>

      {/* Main Horizontal Container */}
      <div 
        ref={containerRef}
        className="flex gap-8 overflow-x-auto px-6 md:px-12 pb-20 hide-scrollbar snap-x snap-mandatory"
        style={{ scrollBehavior: 'smooth' }}
      >
        {FEATURES.map((feature, idx) => (
          <div 
            key={idx} 
            className="flex-shrink-0 w-[85vw] md:w-[500px] aspect-[4/5] relative group cursor-pointer overflow-hidden snap-center bg-[#1e2221]"
          >
            <img 
              src={feature.image} 
              alt={feature.title} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110 opacity-70 group-hover:opacity-90"
            />
            {/* Dark gradient for text visibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent opacity-90" />
            
            <div className="absolute inset-0 p-10 flex flex-col justify-end transition-all duration-500 group-hover:pb-14">
              <div className="flex items-center gap-4 mb-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-white/40 text-[9px] font-bold tracking-[0.4em] uppercase">Innovation 0{idx + 1}</span>
                <div className="w-8 h-[1px] bg-white/20"></div>
              </div>
              <h4 className="text-white text-3xl md:text-4xl font-bold leading-tight max-w-[90%] tracking-tight">
                {feature.title}
              </h4>
              <div className="mt-8 w-12 h-[1px] bg-white/40 group-hover:w-full transition-all duration-1000"></div>
            </div>
          </div>
        ))}
        {/* Visual spacer to allow reaching the end clearly */}
        <div className="flex-shrink-0 w-12 h-full md:block hidden"></div>
      </div>

      {/* Controls Overlay */}
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center mt-10">
        {/* Dot Navigation */}
        <div className="flex gap-4">
          {FEATURES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollTo(idx)}
              className={`group flex items-center gap-2 transition-all duration-500`}
            >
              <div className={`h-[2px] transition-all duration-500 ${activeIndex === idx ? 'w-8 bg-white' : 'w-4 bg-white/10 group-hover:bg-white/30'}`} />
              {activeIndex === idx && (
                <span className="text-[10px] font-bold text-white tracking-widest animate-in fade-in slide-in-from-left-2">0{idx + 1}</span>
              )}
            </button>
          ))}
        </div>

        {/* End of content indicator */}
        {!isAtEnd && (
          <button 
            onClick={() => scrollTo(activeIndex + 1)}
            className="flex items-center gap-4 group text-white/60 hover:text-white transition-colors"
          >
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase group-hover:tracking-[0.5em] transition-all">Next Highlight</span>
            <div className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
               <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
        )}
      </div>

      {/* Floating Instruction */}
      <div className={`fixed bottom-32 left-1/2 -translate-x-1/2 pointer-events-none transition-all duration-700 ${!isAtStart && !isAtEnd ? 'opacity-20 scale-95' : 'opacity-0'}`}>
         <div className="flex flex-col items-center gap-2">
            <div className="w-4 h-7 border border-white/20 rounded-full relative">
               <div className="w-1 h-1.5 bg-white/40 rounded-full absolute top-1.5 left-1/2 -translate-x-1/2 animate-bounce" />
            </div>
            <span className="text-[8px] font-bold uppercase tracking-[0.5em] text-white/20">Wheel to Explore</span>
         </div>
      </div>
    </section>
  );
};

export default FeatureSlider;

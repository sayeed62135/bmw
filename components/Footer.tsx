
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F1F0EE] py-32 border-t border-black/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 items-start mb-24">
          <div className="lg:col-span-4">
             <img src="https://meghna-executive.com/images/static/logo-v2.svg" alt="EML Logo" className="h-12 mb-10" />
             <p className="text-black/60 max-w-xs text-sm leading-relaxed">
               Executive Motors Ltd. is the exclusive gateway to BMW luxury in Bangladesh. We define the future of premium automotive experiences.
             </p>
          </div>
          
          <div className="lg:col-span-2">
            <h5 className="font-bold text-black uppercase text-[10px] tracking-[0.3em] mb-8">Showroom</h5>
            <ul className="space-y-4 text-sm text-black/60">
              <li><a href="#models" className="hover:text-black transition-colors">Our Fleet</a></li>
              <li><a href="#booking" className="hover:text-black transition-colors">Test Drive</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Retail.Next</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Certified Pre-owned</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h5 className="font-bold text-black uppercase text-[10px] tracking-[0.3em] mb-8">Corporate</h5>
            <ul className="space-y-4 text-sm text-black/60">
              <li><a href="#heritage" className="hover:text-black transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Meghna Group</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Press Room</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h5 className="font-bold text-black uppercase text-[10px] tracking-[0.3em] mb-8">Legal</h5>
            <ul className="space-y-4 text-sm text-black/60">
              <li><a href="#" className="hover:text-black transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Cookie Policy</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h5 className="font-bold text-black uppercase text-[10px] tracking-[0.3em] mb-8">Concierge</h5>
            <a href="tel:16765" className="text-black text-3xl font-bold tracking-tighter">16765</a>
            <p className="text-black/40 text-[9px] font-bold uppercase tracking-widest mt-4">Hotline Support</p>
          </div>
        </div>

        <div className="pt-12 border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="flex gap-10">
              <a href="#" className="text-black/40 hover:text-black transition-colors text-[10px] font-bold uppercase tracking-widest">Facebook</a>
              <a href="#" className="text-black/40 hover:text-black transition-colors text-[10px] font-bold uppercase tracking-widest">Instagram</a>
              <a href="#" className="text-black/40 hover:text-black transition-colors text-[10px] font-bold uppercase tracking-widest">LinkedIn</a>
           </div>
           
           <div className="text-[10px] uppercase font-bold tracking-[0.2em] text-black/40 flex flex-col md:flex-row gap-4 md:gap-12">
              <p>© 2024 Meghna Executive Holdings. All Rights Reserved.</p>
              <a href="https://dcastalia.com" target="_blank" className="hover:text-black transition-colors">Site by Dcastalia</a>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

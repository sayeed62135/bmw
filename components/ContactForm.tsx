
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! Our concierge will contact you shortly.");
  };

  return (
    <section id="contact" className="bg-[#191D1C] py-24 md:py-40">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          <div className="lg:col-span-5">
             <h2 className="text-white/40 text-sm font-medium tracking-widest uppercase border-t border-white/20 pt-8 inline-block w-full">
               Contact Us
             </h2>
          </div>
          <div className="lg:col-span-7">
            <h3 className="text-white text-2xl md:text-4xl font-bold mb-6">
              Guiding you through every mile of your BMW experience.
            </h3>
            <p className="text-white/60">
              Connect with us through the form below, give us a call, or visit our showroom at Meghna Tower, Tejgaon.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div>
              <p className="text-white/40 uppercase text-[10px] font-bold tracking-[0.3em] mb-4">Location</p>
              <p className="text-white text-lg">187-188 B, Forum Meghna Tower, Bir Uttam Mir Shawkat Sarak, Tejgaon-Gulshan Link Road, Dhaka, Bangladesh</p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-white/40 uppercase text-[10px] font-bold tracking-[0.3em] mb-4">Concierge</p>
                <a href="tel:16765" className="text-white text-3xl font-bold tracking-tighter">16765</a>
              </div>
              <div>
                <p className="text-white/40 uppercase text-[10px] font-bold tracking-[0.3em] mb-4">Email</p>
                <a href="mailto:info@bmw.com.bd" className="text-white text-lg hover:underline transition-all">info@bmw.com.bd</a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <input 
                type="text" 
                placeholder="Name*" 
                required
                className="bg-transparent border-b border-white/10 py-5 text-white focus:border-white outline-none transition-colors w-full text-sm placeholder:text-white/20"
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
              />
              <input 
                type="email" 
                placeholder="Email*" 
                required
                className="bg-transparent border-b border-white/10 py-5 text-white focus:border-white outline-none transition-colors w-full text-sm placeholder:text-white/20"
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <input 
              type="tel" 
              placeholder="Phone Number*" 
              required
              className="bg-transparent border-b border-white/10 py-5 text-white focus:border-white outline-none transition-colors w-full text-sm placeholder:text-white/20"
              value={formData.phone}
              onChange={e => setFormData({...formData, phone: e.target.value})}
            />
            <textarea 
              placeholder="Message" 
              rows={4}
              className="bg-transparent border-b border-white/10 py-5 text-white focus:border-white outline-none transition-colors w-full resize-none text-sm placeholder:text-white/20"
              value={formData.message}
              onChange={e => setFormData({...formData, message: e.target.value})}
            />
            <button 
              type="submit"
              className="group relative w-full md:w-auto px-16 py-6 bg-white text-black text-[11px] font-bold uppercase tracking-[0.4em] overflow-hidden transition-all duration-500"
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-500">Submit Message</span>
              <div className="absolute inset-0 bg-black -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

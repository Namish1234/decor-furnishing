"use client";

import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#111111] text-white py-32 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        {/* Left Column: Details */}
        <div className="flex flex-col">
          <div className="mb-16">
            <span className="text-[10px] uppercase tracking-widest2 text-white/40 font-semibold mb-8 block">
              The Studio
            </span>
            <h2 className="font-sans text-5xl md:text-7xl font-light leading-[1.1] text-white">
              Begin a<br />
              conversation.
            </h2>
            <p className="text-white/50 font-light max-w-md mt-8 text-sm leading-relaxed">
              We accept a small number of private and commercial commissions each year. Tell us about the space — we'll respond within two working days.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 text-sm">
            <div>
              <span className="text-[10px] uppercase tracking-widest2 text-white/40 mb-4 block">
                Office Location
              </span>
              <address className="not-italic font-light text-white/80 leading-relaxed">
                Decor Furnishing<br />
                B-1, 201/C-34, NR Dave Complex,<br />
                2nd Avenue, 11th Main Rd, Corner,<br />
                Anna Nagar, Chennai, TN 600040
              </address>
            </div>
            
            <div className="flex flex-col gap-8">
              <div>
                <span className="text-[10px] uppercase tracking-widest2 text-white/40 mb-4 block">
                  Email
                </span>
                <a href="mailto:studio@maison.design" className="font-light text-white/80 hover:text-white transition-colors">
                  studio@maison.design
                </a>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-widest2 text-white/40 mb-4 block">
                  Telephone
                </span>
                <a href="tel:+919841134665" className="font-light text-white/80 hover:text-white transition-colors">
                  098411 34665
                </a>
              </div>
            </div>
          </div>

          <div className="mt-20 flex flex-wrap gap-8">
            {["Instagram", "Pinterest", "Behance", "LinkedIn"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-[10px] uppercase tracking-widest2 text-white/50 hover:text-white transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="border border-white/10 p-8 md:p-16 flex flex-col justify-between">
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
            
            <div className="flex flex-col gap-4">
              <label className="text-[10px] uppercase tracking-widest2 text-white/40">Full Name</label>
              <input 
                type="text" 
                placeholder="Aarav Sharma" 
                className="bg-transparent border-none outline-none text-sm font-light text-white/80 placeholder:text-white/20 pb-2"
              />
            </div>

            <div className="flex flex-col gap-4">
              <label className="text-[10px] uppercase tracking-widest2 text-white/40">Email</label>
              <input 
                type="email" 
                placeholder="you@studio.com" 
                className="bg-transparent border-none outline-none text-sm font-light text-white/80 placeholder:text-white/20 pb-2"
              />
            </div>

            <div className="flex flex-col gap-4">
              <label className="text-[10px] uppercase tracking-widest2 text-white/40">Project Type</label>
              <input 
                type="text" 
                placeholder="Residential — 240 m²" 
                className="bg-transparent border-none outline-none text-sm font-light text-white/80 placeholder:text-white/20 pb-2"
              />
            </div>

            <div className="flex flex-col gap-4">
              <label className="text-[10px] uppercase tracking-widest2 text-white/40">Location</label>
              <input 
                type="text" 
                placeholder="Chennai, India" 
                className="bg-transparent border-none outline-none text-sm font-light text-white/80 placeholder:text-white/20 pb-2"
              />
            </div>

            <div className="flex flex-col gap-4 sm:col-span-2">
              <label className="text-[10px] uppercase tracking-widest2 text-white/40">Tell us about the space</label>
              <textarea 
                rows={4}
                placeholder="A few words on light, materials, and how you wish to live..." 
                className="bg-transparent border-none outline-none text-sm font-light text-white/80 placeholder:text-white/20 resize-none pb-2"
              />
            </div>
          </form>

          <div className="mt-20 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8">
            <span className="text-[10px] uppercase tracking-widest2 text-white/40">
              We respond within 48 hours.
            </span>
            <button className="group flex items-center gap-4 bg-[#1a1a1a] border border-white/5 text-white px-8 py-5 uppercase tracking-widest2 text-[10px] hover:bg-white hover:text-[#111] transition-all duration-500">
              Send Enquiry
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}

"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[100dvh] flex flex-col justify-between overflow-hidden bg-[#111111]">
      {/* Background Image with Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2000&auto=format&fit=crop"
          alt="Luxury modern living room"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/40 to-[#111111]/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-12 max-w-[1400px] mx-auto w-full pt-32 md:pt-48 pb-12 flex flex-col items-start flex-grow justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="font-sans text-5xl md:text-8xl lg:text-[100px] font-thin text-white leading-[1.1] mb-12 max-w-4xl"
        >
          Spaces shaped<br />
          by <span className="font-serif italic text-accent-gold font-normal">silence</span>, light,<br />
          and intention.
        </motion.h1>

        <motion.a
          href="#portfolio"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="group flex items-center gap-4 bg-[#1a1a1a] text-white px-8 py-5 uppercase tracking-widest2 text-[10px] hover:bg-white hover:text-[#111] transition-all duration-500 border border-white/10"
        >
          Explore the Portfolio
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </motion.a>
      </div>

      {/* Bottom Stats Bar */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="relative z-20 w-full border-t border-white/10 bg-gradient-to-t from-[#111111] to-transparent pt-8 md:pt-0"
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-6 md:py-8 grid grid-cols-2 gap-y-8 gap-x-4 md:flex md:flex-row md:justify-between items-start md:items-center md:gap-8 text-white/50 text-[10px] uppercase tracking-widest2">
          
          <div className="flex flex-col gap-1">
            <span className="text-xl md:text-2xl font-light text-white tracking-normal">120+</span>
            <span>Projects Realised</span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-xl md:text-2xl font-light text-white tracking-normal">14</span>
            <span>Years of Practice</span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-xl md:text-2xl font-light text-white tracking-normal">09</span>
            <span>Design Awards</span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-xl md:text-2xl font-light text-white tracking-normal">CHENNAI, IN</span>
            <span>Studio Location</span>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <div className="w-[1px] h-8 bg-white/20 hidden md:block"></div>
            <span>Scroll</span>
          </div>

        </div>
      </motion.div>
    </section>
  );
}

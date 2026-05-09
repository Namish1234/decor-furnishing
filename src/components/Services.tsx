"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    number: "01",
    title: "Consultation",
    description: "An intimate conversation about how you live. We translate rituals, light, and silence into a brief — the foundation of every project.",
  },
  {
    number: "02",
    title: "3D Visualization",
    description: "Photoreal renders, material palettes, and walk-throughs. Decisions are made on screen long before a single wall moves.",
  },
  {
    number: "03",
    title: "Execution",
    description: "Hand-picked artisans and trusted contractors. We oversee every joint, every shadow gap, every reveal — until you turn the key.",
  },
];

export default function Services() {
  return (
    <section id="process" className="py-32 md:py-48 bg-[#111111] px-6 md:px-12 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-24 md:mb-32">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="font-sans text-5xl md:text-7xl font-thin text-white/90 leading-tight"
          >
            Three movements,<br />
            one quiet result.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="flex flex-col items-start group"
            >
              <div className="text-accent-gold text-sm font-sans tracking-widest mb-12 font-medium">
                {pillar.number}
              </div>
              <h3 className="font-sans text-3xl md:text-4xl font-light text-white mb-6">
                {pillar.title}
              </h3>
              <p className="text-white/50 font-light leading-relaxed text-sm max-w-sm mb-12">
                {pillar.description}
              </p>
              
              <a href="#" className="text-[10px] uppercase tracking-widest2 text-white/60 hover:text-white transition-colors duration-300 pb-2 border-b border-white/20 hover:border-white">
                Learn More
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

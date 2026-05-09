"use client";

import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Room Curtains",
    category: "Soft Furnishings",
    image: "/image1.jpeg",
  },
  {
    id: 2,
    title: "Modular Kitchen",
    category: "Interior Setup",
    image: "/image2.jpeg",
  },
  {
    id: 3,
    title: "Minimalist Pavilion",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Bespoke Cabin",
    category: "Villa",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-32 md:py-48 bg-[#111111] px-6 md:px-12 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="font-sans text-4xl md:text-5xl font-thin text-white tracking-wide"
          >
            Selected Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-white/50 max-w-sm font-light text-sm leading-relaxed"
          >
            A curated selection of our most iconic projects, showcasing our commitment to form, function, and aesthetic brilliance.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.1 }}
              className="group relative block overflow-hidden aspect-video bg-[#1a1a1a] cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover opacity-80 transition-transform duration-1000 group-hover:scale-[1.03]"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/90 via-[#111111]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-8 md:p-12">
                <span className="text-accent-gold text-[10px] uppercase tracking-widest2 mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                  {project.category}
                </span>
                <h3 className="text-white font-sans text-3xl font-light translate-y-4 group-hover:translate-y-0 transition-transform duration-700 delay-100">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-32 flex justify-center">
          <a href="#" className="text-[10px] uppercase tracking-widest2 text-white/60 hover:text-white transition-colors duration-300 pb-2 border-b border-white/20 hover:border-white">
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    author: "Elena R.",
    role: "Private Residence",
    text: "The studio transformed our space with an incredible sensitivity to light and materials. It is a sanctuary of silence and elegance.",
    rating: 5,
  },
  {
    id: 2,
    author: "James M.",
    role: "Boutique Hotel",
    text: "Their attention to the smallest details—every shadow gap, every texture—creates an atmosphere of uncompromising luxury.",
    rating: 5,
  },
  {
    id: 3,
    author: "Aisha T.",
    role: "Penthouse Renovation",
    text: "A masterclass in modern minimalism. They listened to our needs and delivered a home that feels both expansive and deeply intimate.",
    rating: 5,
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-32 md:py-48 bg-[#141414] px-6 md:px-12 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="font-sans text-4xl md:text-5xl font-thin text-white tracking-wide"
          >
            Client <span className="font-serif italic text-accent-gold font-normal">Voices</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="flex flex-col items-start border-l border-white/10 pl-8"
            >
              <div className="flex items-center gap-1 mb-8">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent-gold text-accent-gold" />
                ))}
              </div>
              <p className="font-serif italic text-white/80 text-xl md:text-2xl leading-relaxed mb-10">
                "{review.text}"
              </p>
              <div>
                <h4 className="font-sans text-white text-sm tracking-widest uppercase mb-1">{review.author}</h4>
                <span className="text-[10px] uppercase tracking-widest2 text-white/40">{review.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

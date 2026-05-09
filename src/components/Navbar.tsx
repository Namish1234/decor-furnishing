"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 top-0 transition-all duration-500 ${scrolled ? 'bg-[#111111]/90 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="flex flex-col">
          <span className="font-sans font-bold text-xl tracking-widest text-white uppercase">DECOR</span>
          <span className="font-sans text-[10px] tracking-[0.25em] text-white/70 uppercase">Furnishing</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12">
          {["Portfolio", "Process", "Studio"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-light tracking-wide text-white/80 hover:text-white transition-colors duration-300"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            href="#contact"
            className="text-xs uppercase tracking-widest2 text-white/80 border border-white/20 px-6 py-3 hover:bg-white hover:text-[#111] transition-all duration-500"
          >
            Book Consultation
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden absolute top-full left-0 w-full bg-[#111111] py-8 px-6 flex flex-col gap-6 shadow-2xl border-t border-white/10"
        >
          {["Portfolio", "Process", "Studio"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="text-sm font-light tracking-widest text-white/80 hover:text-white transition-colors duration-300 uppercase"
            >
              {item}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="text-xs uppercase tracking-widest2 text-center text-white/80 border border-white/20 px-6 py-4 mt-4 hover:bg-white hover:text-[#111] transition-all duration-500"
          >
            Book Consultation
          </Link>
        </motion.div>
      )}
    </nav>
  );
}

"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

const items = [
  {
    title: "Modern Business Website",
    desc: "A clean, high-performing concept for any service-based brand.",
    img: "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Professional Services Homepage",
    desc: "Built for consultants, agencies and professional service brands.",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Local Business Landing Page",
    desc: "Optimized for gyms, clinics, salons and small businesses.",
    img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Startup Web Concept",
    desc: "A modern, clean layout crafted for growing startups.",
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Portfolio & Personal Brand",
    desc: "Elegant foundation for creators, freelancers and educators.",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Corporate Website Redesign",
    desc: "A refreshed modern identity for established businesses.",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
  },
];

export default function ShowcaseCarousel() {
  const [index, setIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="h-[500px]" />;

  const next = () => setIndex((i) => (i + 1) % items.length);
  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);

  const SPACING = 320;
  const FAR = SPACING * 2;

  return (
    <section className="bg-[#001B20] py-24 px-6 text-white relative overflow-hidden">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false }}
        className="text-center mb-16"
      >
        <p className="text-gray-300 text-lg">
          Explore clean, modern website concepts designed for real businesses.
        </p>
      </motion.div>

      {/* ARROWS */}
      <button
        onClick={prev}
        className="absolute left-10 top-1/2 -translate-y-1/2 z-50 p-4 bg-[#00353F] rounded-full hover:bg-[#18E0F2] hover:text-black transition shadow-lg"
        style={{ cursor: "pointer" }}
      >
        <HiArrowLeft size={24} />
      </button>

      <button
        onClick={next}
        className="absolute right-10 top-1/2 -translate-y-1/2 z-50 p-4 bg-[#00353F] rounded-full hover:bg-[#18E0F2] hover:text-black transition shadow-lg"
        style={{ cursor: "pointer" }}
      >
        <HiArrowRight size={24} />
      </button>

      {/* CARDS */}
      <div className="relative w-full h-[480px] flex justify-center items-center">
        {items.map((item, i) => {
          const pos = (i - index + items.length) % items.length;

          let x = 0,
            scale = 1,
            opacity = 1,
            blur = 0,
            glow = 0;

          if (pos === 0) {
            x = 0;
            scale = 1.05;
            opacity = 1;
            glow = 0.25;
          } else if (pos === 1) {
            x = SPACING;
            scale = 0.85;
            opacity = 0.45;
            blur = 4;
          } else if (pos === 2) {
            x = FAR;
            scale = 0.75;
            opacity = 0.25;
            blur = 6;
          } else if (pos === items.length - 1) {
            x = -SPACING;
            scale = 0.85;
            opacity = 0.45;
            blur = 4;
          } else if (pos === items.length - 2) {
            x = -FAR;
            scale = 0.75;
            opacity = 0.25;
            blur = 6;
          } else {
            opacity = 0;
            blur = 10;
            scale = 0.5;
          }

          return (
            <motion.div
              key={i}
              animate={{
                x,
                scale,
                opacity,
                filter: `blur(${blur}px)`,
                boxShadow: glow ? "0 0 35px rgba(24,224,242,0.25)" : "none",
              }}
              transition={{ duration: 0.55, ease: "easeInOut" }}
              className="absolute bg-[#00353F] p-5 rounded-xl shadow-xl w-[320px] h-[460px]"
            >
              <div className="h-44 w-full rounded-lg overflow-hidden mb-4">
                <img src={item.img} className="w-full h-full object-cover" />
              </div>

              <h3 className="text-xl font-semibold text-[#18E0F2]">
                {item.title}
              </h3>
              <p className="text-gray-300 mt-1">{item.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

export default function Benefits() {
  const benefits = [
    {
      title: "Fast & High-Performing",
      desc: "Websites optimized for speed, stability, and a seamless user experience.",
    },
    {
      title: "Built to Convert",
      desc: "Clear structure, strong call-to-actions, and layouts designed to increase leads.",
    },
    {
      title: "Mobile-First Design",
      desc: "Your website looks and works flawlessly on every device and screen size.",
    },
    {
      title: "SEO-Ready Foundation",
      desc: "Clean architecture that helps customers find your business online.",
    },
    {
      title: "Modern & Professional",
      desc: "A polished, trustworthy design that elevates your brand instantly.",
    },
    {
      title: "Simple Maintenance",
      desc: "Easy updates, scalable structure, and ongoing improvement support.",
    },
  ];

  return (
    <section className="relative bg-[#001B20] pt-32 pb-32 px-6 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* SECTION TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: false }}
          className="text-center text-4xl md:text-5xl font-bold mb-20"
        >
          Why Businesses Choose My Work
        </motion.h2>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-10">
          {benefits.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: idx * 0.12,
              }}
              viewport={{ once: false }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 30px rgba(24,224,242,0.25)",
              }}
              className="bg-[#00252B] p-8 rounded-2xl border border-white/5 
              shadow-md shadow-black/30 hover:border-[#18E0F2] transition-all"
            >
              {/* SIMPLE PREMIUM ICON */}
              <div className="w-12 h-12 bg-[#18E0F2]/20 rounded-xl flex items-center justify-center mb-4">
                <div className="w-3 h-3 bg-[#18E0F2] rounded-full shadow-[0_0_12px_#18E0F2]" />
              </div>

              <h3 className="text-xl font-semibold text-[#18E0F2] mb-2">
                {item.title}
              </h3>

              <p className="text-gray-300">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

export default function Services() {
  const cardVariants = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="services"
      className="relative bg-[#001B20] pt-48 pb-32 px-6 text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* SECTION TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: false }}
          className="text-4xl md:text-5xl font-bold text-center mb-20"
        >
          What I Can Do For Your Business
        </motion.h2>

        {/* SERVICE CARDS */}
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Website Design & Development",
              desc: "Modern, responsive websites built for clarity, speed and conversions.",
            },
            {
              title: "Speed & Performance Optimization",
              desc: "Lightning-fast load times for improved SEO and user satisfaction.",
            },
            {
              title: "Mobile-First Experience",
              desc: "Flawless performance across all devices with a mobile-first focus.",
            },
            {
              title: "Lead Generation Setup",
              desc: "Designed to convert visitors into customers with strong CTAs.",
            },
            {
              title: "SEO-Friendly Architecture",
              desc: "Clean structures that improve discoverability and organic growth.",
            },
            {
              title: "Maintenance & Support",
              desc: "Ongoing updates, security, and improvements for long-term stability.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              initial={false}
              whileInView="animate"
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: idx * 0.12,
              }}
              viewport={{ once: false }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 30px rgba(24, 224, 242, 0.25)",
              }}
              className="bg-[#00252B] p-8 rounded-2xl border border-white/5 shadow-md shadow-black/30 
              transition-all hover:border-[#18E0F2]"
            >
              <h3 className="text-xl font-semibold text-[#18E0F2] mb-3">
                {item.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

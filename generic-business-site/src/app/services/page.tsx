"use client";

import { motion } from "framer-motion";
import {
  FiCode,
  FiTrendingUp,
  FiSmartphone,
  FiLayers,
  FiZap,
  FiPenTool,
} from "react-icons/fi";

export default function ServicesPage() {
  const services = [
    {
      title: "Custom Website Development",
      desc: "Fully responsive websites built with Next.js for speed, performance, and scalability.",
      icon: <FiCode size={32} className="text-[#18E0F2]" />,
    },
    {
      title: "Landing Page Design",
      desc: "High-converting landing pages crafted to increase leads, signups, and inquiries.",
      icon: <FiTrendingUp size={32} className="text-[#18E0F2]" />,
    },
    {
      title: "Mobile-First Optimization",
      desc: "Perfect mobile experience across all devices to boost user satisfaction and conversions.",
      icon: <FiSmartphone size={32} className="text-[#18E0F2]" />,
    },
    {
      title: "UI/UX Design",
      desc: "Clean, modern interfaces designed with user behavior and aesthetics in mind.",
      icon: <FiPenTool size={32} className="text-[#18E0F2]" />,
    },
    {
      title: "Website Redesign",
      desc: "Turn outdated sites into beautiful, fast, conversion-focused experiences.",
      icon: <FiLayers size={32} className="text-[#18E0F2]" />,
    },
    {
      title: "Performance & SEO Optimization",
      desc: "Speed improvements, SEO enhancements, and best practices for better ranking.",
      icon: <FiZap size={32} className="text-[#18E0F2]" />,
    },
  ];

  return (
    <main className="bg-[#001B20] text-white pb-32">
      {/* HERO SECTION */}
      <section className="relative w-full py-28 text-center overflow-hidden">
        {/* Glow Background */}
        <motion.div
          initial={{ opacity: 0.3, scale: 0.9 }}
          animate={{ opacity: 0.85, scale: 1 }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="w-[600px] h-[600px] bg-gradient-to-br from-[#00ADB5] via-[#18E0F2] to-[#007F8C] blur-[150px] rounded-full" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold relative z-10"
        >
          Services I Offer
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15 }}
          className="max-w-2xl mx-auto text-gray-300 text-lg mt-4 relative z-10"
        >
          Modern, fast, and user-friendly websites built to help your business
          grow and stand out.
        </motion.p>
      </section>

      {/* SERVICES GRID */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: idx * 0.1 }}
              className="bg-[#00252B] rounded-2xl p-8 border border-white/5 shadow-lg shadow-black/30 
                         hover:border-[#18E0F2] transition flex flex-col gap-4"
            >
              <div>{service.icon}</div>

              <h3 className="text-xl font-semibold text-[#18E0F2]">
                {service.title}
              </h3>

              <p className="text-gray-300 text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="mt-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Ready to Build Something Amazing?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="text-gray-300 text-lg mb-8"
          >
            Let’s create a website that is fast, beautiful, and designed to
            convert.
          </motion.p>

          <motion.a
            href="/contact"
            whileHover={{ scale: 1.08, boxShadow: "0 0 25px #18E0F2" }}
            transition={{ type: "spring", stiffness: 180 }}
            className="px-8 py-3 rounded-full bg-[#18E0F2] text-black text-sm font-semibold hover:bg-white transition"
          >
            Get a Free Quote
          </motion.a>
        </div>
      </section>
    </main>
  );
}

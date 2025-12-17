"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[85vh] flex items-center justify-center text-white bg-[#001B20] overflow-hidden">
      {/* MAIN BREATHING GLOW */}
      <motion.div
        initial={{ opacity: 0.4, scale: 0.85 }}
        animate={{ opacity: 0.9, scale: 1 }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="w-[650px] h-[650px] bg-gradient-to-br from-[#00ADB5] via-[#18E0F2] to-[#007F8C] blur-[130px] rounded-full" />
      </motion.div>

      {/* FLOATING BLOBS */}
      <motion.div
        className="absolute top-24 right-32 w-32 h-32 bg-[#18E0F2]/25 blur-3xl rounded-full"
        initial={{ y: 25, opacity: 0.3 }}
        animate={{ y: -25, opacity: 0.55 }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-24 left-32 w-40 h-40 bg-[#007F8C]/25 blur-3xl rounded-full"
        initial={{ y: -25, opacity: 0.25 }}
        animate={{ y: 25, opacity: 0.5 }}
        transition={{
          duration: 7,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />

      {/* MAIN TEXT */}
      <div className="relative z-20 max-w-3xl text-center px-6 flex flex-col items-center gap-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false }}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          Professional Websites That Help Your Business Grow
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0.9, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.15 }}
          viewport={{ once: false }}
          className="text-gray-300 text-lg max-w-xl"
        >
          Fast, modern and mobile-friendly websites designed to attract
          customers and boost conversions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, ease: "easeOut", delay: 0.25 }}
          viewport={{ once: false }}
          className="flex gap-4 mt-4"
        >
          <a
            href="#contact"
            className="px-8 py-3 rounded-full bg-[#18E0F2] text-black font-semibold hover:bg-white transition shadow-[0_0_20px_#18E0F2]/30"
          >
            Get a Free Quote
          </a>

          <a
            href="#services"
            className="px-8 py-3 rounded-full border border-[#18E0F2] text-[#18E0F2] font-semibold hover:bg-[#18E0F2] hover:text-black transition"
          >
            View Services
          </a>
        </motion.div>
      </div>

      {/* ⭐ FIX: SOFT FADE INTO NEXT SECTION */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-[#001B20] pointer-events-none"></div>
    </section>
  );
}

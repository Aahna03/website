"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-[#001B20] text-white overflow-hidden">
      {/* ABOUT HERO */}
      <section className="relative w-full py-28 flex flex-col items-center text-center px-6">
        <motion.div
          initial={{ opacity: 0.3, scale: 0.9 }}
          animate={{ opacity: 0.8, scale: 1 }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="w-[550px] h-[550px] bg-gradient-to-br from-[#00ADB5] via-[#18E0F2] to-[#007F8C] blur-[150px] rounded-full" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold relative z-10"
        >
          About ElevateSites
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15 }}
          className="max-w-2xl text-gray-300 mt-4 relative z-10 text-lg"
        >
          I help businesses grow with fast, modern and high-converting websites
          built for trust, clarity and performance.
        </motion.p>
      </section>

      {/* MISSION SECTION */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Mission</h2>
            <p className="text-gray-300 leading-relaxed">
              I believe every business deserves a website that not only looks
              stunning but also drives results. My mission is to design digital
              experiences that build trust, improve customer engagement and help
              companies scale with confidence.
            </p>
            <p className="text-gray-300 mt-4 leading-relaxed">
              By combining clean UI, strong UX and performance-focused
              engineering, I create websites that feel modern, intuitive and
              memorable.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="rounded-xl overflow-hidden shadow-xl shadow-black/30"
          >
            <Image
              src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=800&q=80"
              width={700}
              height={500}
              className="object-cover"
              alt="Mission"
            />
          </motion.div>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl md:text-4xl font-bold"
          >
            Values That Guide My Work
          </motion.h2>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Quality",
              desc: "Pixel-perfect designs and polished interactions that feel premium.",
            },
            {
              title: "Performance",
              desc: "Optimized websites that load fast and convert better.",
            },
            {
              title: "Reliability",
              desc: "Clear communication and on-time delivery — every time.",
            },
          ].map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: i * 0.15 }}
              className="bg-[#00252B] p-8 rounded-2xl border border-white/5 shadow-lg shadow-black/30 hover:border-[#18E0F2] transition"
            >
              <h3 className="text-[#18E0F2] text-2xl font-semibold">
                {v.title}
              </h3>
              <p className="text-gray-300 mt-3">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE ME */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl md:text-4xl font-bold"
          >
            Why Businesses Choose Me
          </motion.h2>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Clear Communication",
              desc: "Smooth collaboration from start to finish — no confusion, no delays.",
            },
            {
              title: "Modern Tech Stack",
              desc: "Next.js, React, animations, performance tuning and best practices.",
            },
            {
              title: "End-to-End Delivery",
              desc: "Design, UI, development, deployment and support — all taken care of.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: idx * 0.15 }}
              className="bg-[#01252C] p-8 rounded-xl border border-[#0A3A40] hover:border-[#18E0F2] transition shadow-lg shadow-black/40"
            >
              <h3 className="text-xl font-semibold text-[#18E0F2]">
                {item.title}
              </h3>
              <p className="text-gray-300 mt-2 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Local Service Website",
    desc: "A clean, modern website built for a local service business to increase lead conversions.",
    tag: "Website Design",
    img: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Brand & Website Revamp",
    desc: "Full redesign with modern layout, improved messaging and brand identity refresh.",
    tag: "Rebranding",
    img: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Clinic Website",
    desc: "High-trust layout with strong call-to-actions to boost appointment bookings.",
    tag: "Healthcare",
    img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Consultant Landing Page",
    desc: "Conversion-focused landing page for personal branding and client acquisition.",
    tag: "Landing Page",
    img: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Fitness & Wellness Site",
    desc: "Built with a strong visual identity and mobile-first UI for fitness clients.",
    tag: "Fitness",
    img: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Startup Company Website",
    desc: "A sleek, professional site built for a startup launching its digital presence.",
    tag: "Startup",
    img: "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?auto=format&fit=crop&w=1000&q=80",
  },
];

export default function WorkPage() {
  return (
    <main className="bg-[#001B20] text-white pb-32">
      {/* PAGE HERO */}
      <section className="relative w-full py-28 text-center">
        {/* Glow Background */}
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
          <div className="w-[600px] h-[600px] bg-gradient-to-br from-[#00ADB5] via-[#18E0F2] to-[#007F8C] blur-[150px] rounded-full" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold relative z-10"
        >
          Recent Work
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15 }}
          className="max-w-2xl mx-auto text-gray-300 text-lg mt-4 relative z-10"
        >
          A showcase of websites built to help businesses grow with clarity,
          speed and beautiful design.
        </motion.p>
      </section>

      {/* PROJECT GRID */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: idx * 0.1 }}
              className="bg-[#00252B] rounded-2xl overflow-hidden border border-white/5 shadow-lg shadow-black/30 hover:border-[#18E0F2] transition"
            >
              {/* Project Image */}
              <div className="relative h-56 w-full overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.5 }}
                  className="h-full w-full"
                >
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>

                <span className="absolute top-3 left-3 text-xs px-3 py-1 rounded-full bg-[#18E0F2] text-black font-medium">
                  {project.tag}
                </span>
              </div>

              {/* Info */}
              <div className="p-6 flex flex-col gap-3">
                <h3 className="text-xl font-semibold text-[#18E0F2]">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.desc}
                </p>

                <button className="mt-4 px-4 py-2 rounded-full bg-[#18E0F2] text-black text-sm font-semibold hover:bg-white transition w-fit">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}

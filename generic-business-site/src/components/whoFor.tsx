"use client";

import { motion } from "framer-motion";

export default function WhoFor() {
  const items = [
    {
      title: "Local Service Businesses",
      desc: "Gyms, salons, repair shops, coaches, tutors, home services, and more.",
    },
    {
      title: "Startups & Small Companies",
      desc: "Modern websites for new, growing, and fast-scaling businesses.",
    },
    {
      title: "Professionals & Consultants",
      desc: "Lawyers, doctors, freelancers, financial advisors, educators, and more.",
    },
  ];

  return (
    <section className="w-full bg-[#001B20] text-white py-32 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          <h2 className="text-3xl md:text-5xl font-bold">Who I Work With</h2>
          <p className="text-gray-400 mt-3 max-w-xl">
            Websites built for clarity, speed and conversion — suitable for
            businesses across all industries.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                ease: "easeOut",
                delay: idx * 0.15,
              }}
              viewport={{ once: false }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 25px rgba(24,224,242,0.25)",
              }}
              className="bg-[#01252C] p-8 rounded-xl border border-[#0A3A40] hover:border-[#18E0F2] transition-all"
            >
              <h3 className="text-xl font-semibold mb-2 text-[#18E0F2]">
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

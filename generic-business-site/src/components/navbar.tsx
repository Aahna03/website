"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false }}
      className="fixed top-0 left-0 w-full backdrop-blur-xl bg-[#001B20]/80 border-b border-white/5 z-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* LOGO */}
        <motion.h1
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="text-white text-2xl font-semibold tracking-wide cursor-pointer"
        >
          <Link href="/">
            Elevate<span className="text-[#18E0F2]">Sites</span>
          </Link>
        </motion.h1>

        {/* NAV LINKS */}
        <div className="hidden md:flex items-center gap-10 text-gray-300 text-sm">
          {[
            { label: "Services", href: "/services" },
            { label: "Work", href: "/work" },
            { label: "About", href: "/about" },
            { label: "Contact", href: "/contact" },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.1 }}
              viewport={{ once: false }}
              className="relative group"
            >
              <Link
                href={item.href}
                className="hover:text-white transition relative"
              >
                {item.label}

                {/* Underline animation */}
                <motion.span
                  className="absolute left-0 -bottom-1 h-[2px] w-full bg-[#18E0F2]"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA BUTTON */}
        <motion.div whileHover={{ scale: 1.06, boxShadow: "0 0 20px #18E0F2" }}>
          <Link
            href="/contact"
            className="px-5 py-2 rounded-full bg-[#18E0F2] text-black font-semibold text-sm hover:bg-white transition"
          >
            Get a Free Quote
          </Link>
        </motion.div>
      </div>
    </motion.nav>
  );
}

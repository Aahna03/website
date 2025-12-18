"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <motion.nav
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full backdrop-blur-xl bg-[#001B20]/70 border-b border-white/10 z-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* LOGO */}
        <Link href="/">
          <motion.h1
            whileHover={{ scale: 1.06 }}
            transition={{ type: "spring", stiffness: 220 }}
            className="text-white text-2xl font-bold tracking-wide cursor-pointer"
          >
            Elevate
            <span className="text-[#18E0F2] drop-shadow-[0_0_10px_#18E0F2]">
              Sites
            </span>
          </motion.h1>
        </Link>

        {/* NAV LINKS */}
        <div className="hidden md:flex items-center gap-12 text-gray-300 text-sm font-medium">
          {[
            { label: "Services", href: "/services" },
            { label: "Work", href: "/work" },
            { label: "About", href: "/about" },
            { label: "Contact", href: "/contact" },
          ].map((item, idx) => {
            const isActive = pathname === item.href;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative group"
              >
                <Link
                  href={item.href}
                  className={`relative transition-colors duration-300 ${
                    isActive ? "text-white" : "hover:text-white"
                  }`}
                >
                  {item.label}

                  {/* Active + hover underline */}
                  <span
                    className={`absolute -bottom-1 h-[2px] bg-gradient-to-r from-[#18E0F2] to-white transition-all duration-300
    ${isActive ? "w-full left-0" : "w-0 group-hover:w-full left-0"}`}
                  />
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="relative"
        >
          <Link
            href="/contact"
            className="relative px-6 py-2.5 rounded-full bg-[#18E0F2] text-black font-semibold text-sm overflow-hidden transition"
          >
            <span className="relative z-10">Get a Free Quote</span>
            <span className="absolute inset-0 bg-white opacity-0 hover:opacity-20 transition" />
          </Link>
        </motion.div>
      </div>
    </motion.nav>
  );
}

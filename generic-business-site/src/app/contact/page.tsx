"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
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
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold relative z-10"
        >
          Get a Free Quote
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15 }}
          className="max-w-2xl mx-auto text-gray-300 text-lg mt-4 relative z-10"
        >
          Tell me what you're looking for — I'll get back to you with ideas,
          pricing, and project suggestions.
        </motion.p>
      </section>

      {/* FORM SECTION */}
      <section className="px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14">
          {/* FORM */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="bg-[#00252B] p-10 rounded-2xl border border-white/5 shadow-lg shadow-black/30"
          >
            <h2 className="text-2xl font-semibold text-[#18E0F2] mb-6">
              Your Project Details
            </h2>

            <div className="flex flex-col gap-5">
              {/* NAME */}
              <div>
                <label className="text-gray-300 text-sm">Your Name</label>
                <input
                  type="text"
                  className="w-full mt-2 p-3 rounded-lg bg-[#001B20] border border-white/10 
                             focus:border-[#18E0F2] focus:shadow-[0_0_10px_#18E0F2] outline-none
                             transition text-white"
                  placeholder="Enter your name"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="text-gray-300 text-sm">Email Address</label>
                <input
                  type="email"
                  className="w-full mt-2 p-3 rounded-lg bg-[#001B20] border border-white/10 
                             focus:border-[#18E0F2] focus:shadow-[0_0_10px_#18E0F2] outline-none
                             transition text-white"
                  placeholder="you@example.com"
                />
              </div>

              {/* BUSINESS TYPE */}
              <div>
                <label className="text-gray-300 text-sm">Business Type</label>
                <input
                  type="text"
                  className="w-full mt-2 p-3 rounded-lg bg-[#001B20] border border-white/10 
                             focus:border-[#18E0F2] focus:shadow-[0_0_10px_#18E0F2] outline-none
                             transition text-white"
                  placeholder="eg. Fitness studio, Consultant, Salon, Clinic etc."
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label className="text-gray-300 text-sm">Project Details</label>
                <textarea
                  rows={5}
                  className="w-full mt-2 p-3 rounded-lg bg-[#001B20] border border-white/10 
                             focus:border-[#18E0F2] focus:shadow-[0_0_10px_#18E0F2] outline-none
                             transition text-white resize-none"
                  placeholder="Tell me what kind of website you want..."
                />
              </div>

              {/* BUTTON */}
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px #18E0F2" }}
                transition={{ type: "spring", stiffness: 160 }}
                className="w-full py-3 rounded-full bg-[#18E0F2] text-black font-semibold hover:bg-white transition"
              >
                Submit Request
              </motion.button>
            </div>
          </motion.form>

          {/* INFO BOX */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="p-10 rounded-2xl bg-[#01252C] border border-[#0A3A40] shadow-lg shadow-black/40 flex flex-col gap-6"
          >
            <h2 className="text-2xl font-semibold text-[#18E0F2]">
              What Happens Next?
            </h2>

            <div className="flex flex-col gap-4 text-gray-300 text-sm leading-relaxed">
              <p>✔ I’ll review your message within a few hours.</p>
              <p>✔ You'll get a detailed reply with suggestions & pricing.</p>
              <p>✔ If it’s a good fit, we schedule a short call or chat.</p>
              <p>✔ After approval, your project starts immediately.</p>
            </div>

            <div className="mt-4 text-gray-400 text-sm">
              Response Time: <span className="text-[#18E0F2]">1–3 hours</span>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="mt-6 p-6 rounded-xl bg-[#001B20] border border-white/10"
            >
              <p className="text-gray-300 text-sm">
                “I build fast, modern, elegant websites designed for clarity,
                credibility, and conversion.”
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

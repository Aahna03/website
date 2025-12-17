"use client";

import Navbar from "@/components/navbar";
import dynamic from "next/dynamic";

// Disable SSR ONLY for animated components
const Hero = dynamic(() => import("@/components/hero"), { ssr: false });
const Services = dynamic(() => import("@/components/services"), { ssr: false });
const ShowcaseCarousel = dynamic(
  () => import("@/components/showCaseCarousel"),
  { ssr: false }
);
const WhoFor = dynamic(() => import("@/components/whoFor"), { ssr: false });
const Benefits = dynamic(() => import("@/components/benefits"), { ssr: false });

export default function Home() {
  return (
    <main className="w-full bg-[#001B20]">
      <Navbar />
      <Hero />
      <Services />
      <ShowcaseCarousel />
      <WhoFor />
      <Benefits />
    </main>
  );
}

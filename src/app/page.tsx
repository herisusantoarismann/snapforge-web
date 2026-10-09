import React from "react";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { InteractiveCanvasMockup } from "../components/InteractiveCanvasMockup";
import { BentoGridFeatures } from "../components/BentoGridFeatures";
import { PlatformDownloadGrid } from "../components/PlatformDownloadGrid";
import { HotkeysCheatSheet } from "../components/HotkeysCheatSheet";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#060911] text-slate-100 flex flex-col selection:bg-cyan-500/20 selection:text-cyan-300">
      <Navbar />
      <HeroSection />
      <InteractiveCanvasMockup />
      <BentoGridFeatures />
      <PlatformDownloadGrid />
      <HotkeysCheatSheet />
      <Footer />
    </main>
  );
}


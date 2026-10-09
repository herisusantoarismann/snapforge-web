"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Download,
  Zap,
  ShieldCheck,
  Cpu,
  ArrowRight,
  Sparkles,
  Command,
  CheckCircle2,
} from "lucide-react";

export interface OSInfo {
  name: "Windows" | "macOS" | "Linux" | "Unknown";
  ext: string;
  filename: string;
  downloadUrl: string;
}

export const HeroSection: React.FC = () => {
  const [detectedOS, setDetectedOS] = useState<OSInfo>({
    name: "Windows",
    ext: ".exe",
    filename: "SnapForge_1.0.0_x64-setup.exe",
    downloadUrl:
      "https://github.com/herisusantoarismann/snapforge/releases/download/v1.0.0/SnapForge_1.0.0_x64-setup.exe",
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userAgent = window.navigator.userAgent.toLowerCase();
      if (userAgent.includes("mac")) {
        setDetectedOS({
          name: "macOS",
          ext: ".dmg",
          filename: "SnapForge_1.0.0_aarch64.dmg",
          downloadUrl:
            "https://github.com/herisusantoarismann/snapforge/releases/download/v1.0.0/SnapForge_1.0.0_aarch64.dmg",
        });
      } else if (userAgent.includes("linux")) {
        setDetectedOS({
          name: "Linux",
          ext: ".AppImage",
          filename: "SnapForge_1.0.0_amd64.AppImage",
          downloadUrl:
            "https://github.com/herisusantoarismann/snapforge/releases/download/v1.0.0/SnapForge_1.0.0_amd64.AppImage",
        });
      } else {
        setDetectedOS({
          name: "Windows",
          ext: ".exe",
          filename: "SnapForge_1.0.0_x64-setup.exe",
          downloadUrl:
            "https://github.com/herisusantoarismann/snapforge/releases/download/v1.0.0/SnapForge_1.0.0_x64-setup.exe",
        });
      }
    }
  }, []);

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-grid-pattern">
      {/* Radiant ambient glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[300px] bg-amber-500/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Top Feature Pill */}
        <div className="inline-flex max-w-full flex-wrap sm:flex-nowrap items-center justify-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-slate-900/90 border border-slate-700/60 shadow-inner mb-6 animate-in fade-in slide-in-from-top-3 duration-500">
          <span className="flex h-2 w-2 relative shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span className="text-[11px] sm:text-xs font-semibold tracking-wide text-slate-300">
            Powered by Rust & Tauri v2
            <span className="hidden sm:inline"> — 100% Native & Zero-Bloat</span>
          </span>
          <span className="hidden sm:inline text-slate-500">|</span>
          <span className="text-[10px] sm:text-[11px] font-mono font-medium text-amber-400">
            Instant Capture
          </span>
        </div>

        {/* Hero Main Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white max-w-4xl mx-auto leading-[1.15] sm:leading-[1.12]">
          Precision Screen Capture.{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-amber-400 bg-clip-text text-transparent">
            Crafted for Creators.
          </span>
        </h1>

        {/* Hero Subheadline */}
        <p className="mt-4 sm:mt-6 text-sm sm:text-lg lg:text-xl text-slate-300/90 max-w-2xl mx-auto leading-relaxed font-normal px-2 sm:px-0">
          Instant multi-monitor freeze, fluid vector annotations, one-click confidential data redaction, and lightweight offline video recording. No subscriptions. No cloud locks. Pure local speed.
        </p>

        {/* Primary Dynamic Download CTA */}
        <div className="mt-8 sm:mt-9 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-4 max-w-md sm:max-w-none mx-auto">
          <a
            href={detectedOS.downloadUrl}
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl text-base font-extrabold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-300 to-amber-300 hover:from-cyan-300 hover:to-amber-200 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all group cursor-pointer"
          >
            <Download className="w-5 h-5 text-slate-950 group-hover:-translate-y-0.5 transition-transform shrink-0" />
            <div className="text-left flex flex-col">
              <span className="leading-tight">Download for {detectedOS.name}</span>
              <span className="text-[11px] font-mono text-slate-800 font-semibold">
                Free & Open Source • {detectedOS.ext}
              </span>
            </div>
          </a>

          <a
            href="#preview"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 sm:py-4 rounded-2xl text-sm font-bold text-slate-200 bg-slate-900/90 hover:bg-slate-800/90 border border-slate-700/80 hover:border-cyan-500/40 shadow-md transition-all hover:scale-[1.01]"
          >
            <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>Explore Interactive Canvas</span>
          </a>
        </div>

        {/* Dynamic Platform Info & Secondary Links */}
        <div className="mt-4 text-xs text-slate-400 flex flex-wrap items-center justify-center gap-2 px-2">
          <span>Detected platform: <strong className="text-slate-200">{detectedOS.name}</strong></span>
          <span>•</span>
          <a href="#download" className="text-cyan-400 hover:underline">
            All platforms (Windows, macOS, Linux)
          </a>
          <span>•</span>
          <a
            href="https://github.com/herisusantoarismann/snapforge/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-400 hover:underline flex items-center gap-1"
          >
            GitHub Releases <ArrowRight className="w-3 h-3 inline" />
          </a>
        </div>

        {/* Speed & Quality Value Badges */}
        <div className="mt-10 sm:mt-12 grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3 max-w-3xl mx-auto pt-6 border-t border-white/10 text-left">
          <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/40 border border-white/5">
            <Zap className="w-4 h-4 text-cyan-400 shrink-0" />
            <div className="flex flex-col">
              <span className="text-xs font-bold text-slate-200">&lt; 10ms Latency</span>
              <span className="text-[10px] text-slate-400">Zero-lag screen freeze</span>
            </div>
          </div>

          <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/40 border border-white/5">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <div className="flex flex-col">
              <span className="text-xs font-bold text-slate-200">100% Local & Private</span>
              <span className="text-[10px] text-slate-400">Zero telemetry / tracking</span>
            </div>
          </div>

          <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/40 border border-white/5">
            <Cpu className="w-4 h-4 text-amber-400 shrink-0" />
            <div className="flex flex-col">
              <span className="text-xs font-bold text-slate-200">Rust Core Engine</span>
              <span className="text-[10px] text-slate-400">Low RAM & CPU footprint</span>
            </div>
          </div>

          <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/40 border border-white/5">
            <Command className="w-4 h-4 text-purple-400 shrink-0" />
            <div className="flex flex-col">
              <span className="text-xs font-bold text-slate-200">Global Shortcuts</span>
              <span className="text-[10px] text-slate-400">Ctrl+Shift+S workflow</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


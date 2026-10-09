"use client";

import React from "react";
import {
  Zap,
  MousePointer2,
  Lock,
  Video,
  ScanText,
  Pipette,
  Ruler,
  ShieldCheck,
  Sparkles,
  Layers,
  ArrowRight,
  Flame,
} from "lucide-react";

export const BentoGridFeatures: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-[#060911] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-amber-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700/60 text-amber-400 text-xs font-bold mb-4">
            <Flame className="w-3.5 h-3.5" />
            <span>Real Native Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Engineered for Flow.{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-amber-400 bg-clip-text text-transparent">
              Zero Distractions.
            </span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Every feature in SnapForge is built to eliminate friction from your daily workflow — from quick design feedback to sharing code snippets.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6">
          {/* Bento Card 1: Instant Screen Snapping (Span 7) */}
          <div className="md:col-span-1 lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group hover:border-cyan-500/40 transition-all duration-300">
            <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 blur-3xl rounded-full -mr-20 -mt-20 group-hover:bg-cyan-500/15 transition-all" />

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6 shadow-glow-cyan">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-3">
                Zero-Latency Screen Freeze
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-lg">
                Multi-monitor native capture powered by Rust and OS-level display pipelines. Freezes your desktop in under 10 milliseconds without lag, micro-stutters, or DPI scaling distortion.
              </p>
            </div>

            {/* Visual Mini Mockup */}
            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="flex items-center gap-2 truncate pr-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
                <span className="truncate">Multi-Display Native Engine</span>
              </span>
              <span className="text-cyan-400 font-bold shrink-0">&lt; 10ms</span>
            </div>
          </div>

          {/* Bento Card 2: Blur & Censor Privacy (Span 5) */}
          <div className="md:col-span-1 lg:col-span-5 glass-panel rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group hover:border-purple-500/40 transition-all duration-300">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-purple-500/15 transition-all" />

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-purple-950/80 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-6 shadow-md">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-3">
                Confidential Redaction
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Protect sensitive client data, auth tokens, passwords, and private emails in seconds with crisp pixelate mosaic or smooth Gaussian blur redaction.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="text-purple-300">One-Drag Masking</span>
              <span className="px-2 py-0.5 rounded bg-purple-950/80 border border-purple-500/30 text-purple-300 text-[11px]">
                100% Irreversible
              </span>
            </div>
          </div>

          {/* Bento Card 3: Lightweight Screen & Audio Recorder (Span 5) */}
          <div className="md:col-span-1 lg:col-span-5 glass-panel rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group hover:border-amber-500/40 transition-all duration-300">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-amber-500/15 transition-all" />

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-amber-950/80 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-6 shadow-glow-amber">
                <Video className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-3">
                Lightweight Video & GIF Clips
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Record smooth 60 FPS screen demos with microphone audio or desktop sound. Exports instant WebM, MP4, and animated GIFs without launching heavy video editing suites.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="text-amber-400">WASM Hardware Encoder</span>
              <span className="text-slate-300 font-bold">Built-in Trim Tool</span>
            </div>
          </div>

          {/* Bento Card 4: Built-in Micro Utilities (Span 7) */}
          <div className="md:col-span-1 lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group hover:border-emerald-500/40 transition-all duration-300">
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 blur-3xl rounded-full -mr-20 -mt-20 group-hover:bg-emerald-500/15 transition-all" />

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6 shadow-md">
                <ScanText className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-3">
                Offline OCR, Eyedropper & Smart Ruler
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-lg">
                Extract unselectable text from images or video frames in one drag with offline OCR. Pick pixel-accurate HEX/RGB colors with the magnifier loupe, and measure UI paddings with the smart pixel ruler.
              </p>
            </div>

            {/* Utility Pills */}
            <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-3 gap-1.5 sm:gap-2 text-center text-[10px] sm:text-xs font-mono">
              <div className="p-2 rounded-xl bg-slate-900/80 border border-white/5 text-emerald-300 truncate">
                Offline OCR
              </div>
              <div className="p-2 rounded-xl bg-slate-900/80 border border-white/5 text-cyan-300 truncate">
                Hex Loupe
              </div>
              <div className="p-2 rounded-xl bg-slate-900/80 border border-white/5 text-amber-300 truncate">
                Pixel Ruler
              </div>
            </div>
          </div>

          {/* Bento Card 5: 100% Local-First & Zero-Bloat (Span 12) */}
          <div className="md:col-span-2 lg:col-span-12 glass-panel-glow rounded-3xl p-6 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden">
            <div className="flex items-start gap-4 sm:gap-5">
              <div className="w-12 h-12 rounded-2xl bg-cyan-950/90 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0 shadow-glow-cyan">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg sm:text-2xl font-bold text-white mb-2">
                  100% Local-First. Zero Cloud Lock-in.
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
                  Your screenshots and recordings never leave your machine without your permission. No accounts required, no telemetry tracking, and zero subscription paywalls. SnapForge is yours to keep.
                </p>
              </div>
            </div>

            <div className="w-full md:w-auto flex items-center justify-start md:justify-end shrink-0">
              <a
                href="#download"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 sm:py-3 rounded-xl text-xs font-extrabold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-all shadow-lg shadow-cyan-500/20"
              >
                <span>Download Desktop Binary</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


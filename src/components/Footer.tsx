"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Github, Heart, Shield, Terminal, ArrowUpRight } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#05080e] border-t border-white/10 pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/5">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl overflow-hidden border border-white/20">
                <Image
                  src="/app-icon.png"
                  alt="SnapForge Logo"
                  width={32}
                  height={32}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-extrabold text-white text-base tracking-tight">
                SnapForge
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-cyan-950 text-cyan-300 border border-cyan-500/30">
                v1.0.0
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              The high-performance, zero-latency desktop screen capture and annotation suite engineered for developers, UI/UX designers, and digital creators.
            </p>
            <div className="flex items-center gap-2 text-slate-500 text-[11px]">
              <span>Built with Rust, Tauri v2 & React</span>
              <span>•</span>
              <span>100% Local & Offline</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Product
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="hover:text-cyan-400 transition-colors">
                  Key Features
                </a>
              </li>
              <li>
                <a href="#preview" className="hover:text-cyan-400 transition-colors">
                  Interactive Canvas
                </a>
              </li>
              <li>
                <a href="#shortcuts" className="hover:text-cyan-400 transition-colors">
                  Keyboard Shortcuts
                </a>
              </li>
              <li>
                <a href="#download" className="hover:text-cyan-400 transition-colors">
                  Downloads
                </a>
              </li>
            </ul>
          </div>

          {/* Open Source / Community */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Open Source
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/herisusantoarismann/snapforge"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1"
                >
                  <span>GitHub Repository</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/herisusantoarismann/snapforge/releases"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1"
                >
                  <span>Release Binaries</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/herisusantoarismann/snapforge/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1"
                >
                  <span>Report an Issue</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <span className="text-slate-500">MIT Open Source License</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} SnapForge. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/herisusantoarismann/snapforge"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};


"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Download, Github, Menu, X, Sparkles, Monitor } from "lucide-react";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#060911]/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40 py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-9 h-9 rounded-xl overflow-hidden border border-white/20 shadow-md group-hover:border-cyan-400/50 transition-all">
            <Image
              src="/app-icon.png"
              alt="SnapForge Logo"
              width={36}
              height={36}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-extrabold tracking-tight text-white text-lg group-hover:text-cyan-300 transition-colors">
                SnapForge
              </span>
              <span className="px-1.5 py-0.5 text-[10px] font-mono font-bold rounded-md bg-cyan-950/80 text-cyan-400 border border-cyan-500/30 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                v1.0.0
              </span>
            </div>
            <span className="text-[10px] text-slate-400 font-medium tracking-wide -mt-0.5">
              Precision Screen Studio
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="#features"
            className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors"
          >
            Features
          </Link>
          <Link
            href="#preview"
            className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors"
          >
            Interactive Canvas
          </Link>
          <Link
            href="#shortcuts"
            className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors"
          >
            Hotkeys
          </Link>
          <Link
            href="#download"
            className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors"
          >
            Download
          </Link>
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://github.com/herisusantoarismann/snapforge"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl border border-white/10 text-slate-300 hover:text-white hover:border-white/20 hover:bg-white/5 transition-all"
            title="GitHub Repository"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="#download"
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Get SnapForge</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-400 hover:text-white rounded-lg focus:outline-none"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-3 pb-6 bg-[#080c14] border-b border-white/10 space-y-3">
          <Link
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-slate-200 hover:text-cyan-400 hover:bg-white/5 rounded-lg"
          >
            Features
          </Link>
          <Link
            href="#preview"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-slate-200 hover:text-cyan-400 hover:bg-white/5 rounded-lg"
          >
            Interactive Canvas
          </Link>
          <Link
            href="#shortcuts"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-slate-200 hover:text-cyan-400 hover:bg-white/5 rounded-lg"
          >
            Hotkeys
          </Link>
          <Link
            href="#download"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-slate-200 hover:text-cyan-400 hover:bg-white/5 rounded-lg"
          >
            Download
          </Link>
          <div className="pt-2 flex flex-col gap-2">
            <a
              href="https://github.com/herisusantoarismann/snapforge"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-white/10 text-slate-200 text-xs font-semibold"
            >
              <Github className="w-4 h-4" />
              <span>View Source on GitHub</span>
            </a>
            <a
              href="#download"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300"
            >
              <Download className="w-4 h-4" />
              <span>Download Free</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};


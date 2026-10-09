"use client";

import React from "react";
import {
  Download,
  Terminal,
  Monitor,
  Apple,
  Cpu,
  Github,
  CheckCircle2,
  ExternalLink,
  ShieldAlert,
} from "lucide-react";

interface DownloadOption {
  os: "Windows" | "macOS" | "Linux";
  icon: React.ReactNode;
  recommended: string;
  files: {
    title: string;
    ext: string;
    arch: string;
    url: string;
    badge?: string;
  }[];
}

export const PlatformDownloadGrid: React.FC = () => {
  const GITHUB_RELEASE_BASE =
    "https://github.com/herisusantoarismann/snapforge/releases/download/v1.0.0";
  const GITHUB_ALL_RELEASES =
    "https://github.com/herisusantoarismann/snapforge/releases";

  const platforms: DownloadOption[] = [
    {
      os: "Windows",
      icon: <Monitor className="w-6 h-6 text-cyan-400" />,
      recommended: "Windows 10 / 11 (64-bit)",
      files: [
        {
          title: "Windows Setup Installer",
          ext: ".exe",
          arch: "x64",
          url: `${GITHUB_RELEASE_BASE}/SnapForge_1.0.0_x64-setup.exe`,
          badge: "Recommended",
        },
        {
          title: "Windows MSI Package",
          ext: ".msi",
          arch: "x64",
          url: `${GITHUB_RELEASE_BASE}/SnapForge_1.0.0_x64_en-US.msi`,
        },
      ],
    },
    {
      os: "macOS",
      icon: <Apple className="w-6 h-6 text-amber-400" />,
      recommended: "macOS 11+ (Big Sur, Monterey, Ventura, Sonoma, Sequoia)",
      files: [
        {
          title: "Apple Silicon (M1/M2/M3/M4)",
          ext: ".dmg",
          arch: "arm64",
          url: `${GITHUB_RELEASE_BASE}/SnapForge_1.0.0_aarch64.dmg`,
          badge: "Apple Silicon",
        },
        {
          title: "Intel Mac",
          ext: ".dmg",
          arch: "x64",
          url: `${GITHUB_RELEASE_BASE}/SnapForge_1.0.0_x64.dmg`,
        },
      ],
    },
    {
      os: "Linux",
      icon: <Terminal className="w-6 h-6 text-emerald-400" />,
      recommended: "Ubuntu, Debian, Fedora, Arch & AppImage Compatible Distros",
      files: [
        {
          title: "Universal Linux AppImage",
          ext: ".AppImage",
          arch: "x86_64",
          url: `${GITHUB_RELEASE_BASE}/SnapForge_1.0.0_amd64.AppImage`,
          badge: "Portable",
        },
        {
          title: "Debian / Ubuntu Package",
          ext: ".deb",
          arch: "amd64",
          url: `${GITHUB_RELEASE_BASE}/SnapForge_1.0.0_amd64.deb`,
        },
      ],
    },
  ];

  return (
    <section id="download" className="py-24 bg-[#070b14] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-bold mb-4">
            <Download className="w-3.5 h-3.5" />
            <span>Cross-Platform Downloads</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Get SnapForge for Your Machine
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Free, lightweight, and open source. Native builds available for Windows, macOS, and Linux.
          </p>
        </div>

        {/* Platform Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {platforms.map((platform, idx) => (
            <div
              key={platform.os}
              className={`glass-panel rounded-3xl p-5 sm:p-7 flex flex-col justify-between hover:border-cyan-500/30 transition-all duration-300 relative group ${
                idx === 2 ? "md:col-span-2 lg:col-span-1 md:max-w-xl md:mx-auto md:w-full" : ""
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4 sm:mb-5">
                  <div className="p-2.5 sm:p-3 rounded-2xl bg-slate-900 border border-white/10 group-hover:scale-110 transition-transform">
                    {platform.icon}
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400">
                    v1.0.0
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                  {platform.os}
                </h3>
                <p className="text-xs text-slate-400 mb-5 sm:mb-6 font-mono leading-relaxed">
                  {platform.recommended}
                </p>

                {/* File list */}
                <div className="space-y-2.5 sm:space-y-3">
                  {platform.files.map((file) => (
                    <a
                      key={file.url}
                      href={file.url}
                      className="flex items-center justify-between p-3 sm:p-3.5 rounded-2xl bg-slate-900/80 hover:bg-slate-800 border border-white/5 hover:border-cyan-500/40 text-slate-200 transition-all group/item shadow-sm hover:scale-[1.01]"
                    >
                      <div className="flex flex-col min-w-0 pr-2">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="text-xs font-bold text-white truncate">
                            {file.title}
                          </span>
                          {file.badge && (
                            <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-cyan-950 text-cyan-300 border border-cyan-500/30 shrink-0">
                              {file.badge}
                            </span>
                          )}
                        </div>
                        <span className="text-[11px] font-mono text-slate-400 mt-0.5">
                          {file.ext} ({file.arch})
                        </span>
                      </div>
                      <Download className="w-4 h-4 text-slate-400 group-hover/item:text-cyan-400 group-hover/item:translate-y-0.5 transition-all shrink-0 ml-1" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-5 sm:mt-6 pt-3.5 sm:pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500">
                <span className="flex items-center gap-1 text-emerald-400/90 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  SHA-256 Verified
                </span>
                <span>Offline installer</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom GitHub Release Info */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-400">
            Looking for previous versions, source archives, or signature verification hashes?
          </p>
          <a
            href={GITHUB_ALL_RELEASES}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 mt-2 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <span>View All Releases on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};


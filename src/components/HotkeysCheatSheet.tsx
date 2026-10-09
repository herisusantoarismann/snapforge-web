"use client";

import React, { useState } from "react";
import { Keyboard, Command, Sparkles, Zap } from "lucide-react";

interface ShortcutDef {
  action: string;
  winKeys: string[];
  macKeys: string[];
  description: string;
  tag?: string;
}

export const HotkeysCheatSheet: React.FC = () => {
  const [osMode, setOsMode] = useState<"win" | "mac">("win");

  const shortcuts: ShortcutDef[] = [
    {
      action: "Freeze & Capture Screen",
      winKeys: ["Ctrl", "Shift", "S"],
      macKeys: ["Cmd", "Shift", "S"],
      description: "Instantaneous screen freeze across all active displays with annotation canvas",
      tag: "Global",
    },
    {
      action: "Start / Stop Screen Recorder",
      winKeys: ["Ctrl", "Shift", "R"],
      macKeys: ["Cmd", "Shift", "R"],
      description: "Trigger lightweight 60 FPS video recording widget for MP4 & GIF export",
      tag: "Global",
    },
    {
      action: "Toggle Standby Floating Bar",
      winKeys: ["Ctrl", "Shift", "F"],
      macKeys: ["Cmd", "Shift", "F"],
      description: "Show or hide the minimal desktop standby bar with quick capture shortcuts",
      tag: "Global",
    },
    {
      action: "Copy Canvas to Clipboard",
      winKeys: ["Ctrl", "C"],
      macKeys: ["Cmd", "C"],
      description: "Instant copy of current annotated canvas or cropped selection into clipboard",
      tag: "Canvas",
    },
    {
      action: "Quick Save Image",
      winKeys: ["Ctrl", "S"],
      macKeys: ["Cmd", "S"],
      description: "Save high-resolution annotated screenshot to default folder or ask path",
      tag: "Canvas",
    },
    {
      action: "Undo / Redo Markup",
      winKeys: ["Ctrl", "Z", "/", "Y"],
      macKeys: ["Cmd", "Z", "/", "Y"],
      description: "Revert or restore previous vector annotations, step counters, or redactions",
      tag: "Canvas",
    },
    {
      action: "Dismiss / Exit Overlay",
      winKeys: ["Esc"],
      macKeys: ["Esc"],
      description: "Cancel active capture, deselect current drawing tool, or hide HUD popovers",
      tag: "General",
    },
  ];

  return (
    <section id="shortcuts" className="py-20 bg-[#060911] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700/60 text-cyan-400 text-xs font-bold mb-3">
              <Keyboard className="w-3.5 h-3.5" />
              <span>Keyboard-First Speed</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Shortcut Cheat Sheet
            </h2>
            <p className="mt-2 text-slate-400 text-sm">
              SnapForge is built for speed. Master these essential hotkeys for zero-friction workflows.
            </p>
          </div>

          {/* OS Modifier Switcher */}
          <div className="w-full sm:w-auto grid grid-cols-2 sm:flex items-center p-1 rounded-2xl bg-slate-900 border border-white/10 shrink-0 self-start md:self-auto">
            <button
              type="button"
              onClick={() => setOsMode("win")}
              className={`px-3 sm:px-4 py-1.5 rounded-xl text-center text-[11px] sm:text-xs font-bold transition-all ${
                osMode === "win"
                  ? "bg-cyan-500 text-slate-950 shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Windows / Linux (Ctrl)
            </button>
            <button
              type="button"
              onClick={() => setOsMode("mac")}
              className={`px-3 sm:px-4 py-1.5 rounded-xl text-center text-[11px] sm:text-xs font-bold transition-all ${
                osMode === "mac"
                  ? "bg-amber-500 text-slate-950 shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              macOS (Cmd)
            </button>
          </div>
        </div>

        {/* Shortcuts Table / List */}
        <div className="glass-panel rounded-3xl overflow-hidden shadow-2xl border border-white/10">
          <div className="divide-y divide-white/5">
            {shortcuts.map((item) => {
              const keys = osMode === "win" ? item.winKeys : item.macKeys;

              return (
                <div
                  key={item.action}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-5 hover:bg-white/[0.02] transition-colors gap-3"
                >
                  <div className="flex flex-col pr-2 sm:pr-4">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs sm:text-sm font-bold text-slate-100">
                        {item.action}
                      </span>
                      {item.tag && (
                        <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-slate-900 text-slate-400 border border-white/5">
                          {item.tag}
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] sm:text-xs text-slate-400 mt-1 leading-relaxed">
                      {item.description}
                    </span>
                  </div>

                  {/* Hotkey Badges */}
                  <div className="flex flex-wrap items-center gap-1.5 shrink-0 self-start sm:self-auto">
                    {keys.map((k, idx) => (
                      <React.Fragment key={`${k}-${idx}`}>
                        {k === "/" ? (
                          <span className="text-slate-600 font-bold px-0.5">/</span>
                        ) : (
                          <kbd className="min-w-[28px] sm:min-w-[32px] px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-lg sm:rounded-xl bg-slate-900 border border-slate-700/80 text-cyan-300 font-mono text-[11px] sm:text-xs font-bold text-center shadow-inner">
                            {k}
                          </kbd>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};


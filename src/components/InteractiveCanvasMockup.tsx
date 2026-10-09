"use client";

import React, { useState } from "react";
import {
  ArrowUpRight,
  Square,
  Pencil,
  EyeOff,
  Crop,
  ListOrdered,
  ScanText,
  Copy,
  Check,
  Sparkles,
  Lock,
  CornerDownRight,
} from "lucide-react";

type MockupMode = "annotations" | "steps" | "censor" | "ocr";

export const InteractiveCanvasMockup: React.FC = () => {
  const [activeMode, setActiveMode] = useState<MockupMode>("annotations");
  const [selectedColor, setSelectedColor] = useState<string>("#00f2fe");
  const [copiedOcr, setCopiedOcr] = useState(false);

  const colors = ["#00f2fe", "#ff8c00", "#10b981", "#ec4899", "#8b5cf6", "#f43f5e"];

  const handleCopyOcr = () => {
    setCopiedOcr(true);
    setTimeout(() => setCopiedOcr(false), 2500);
  };

  return (
    <section id="preview" className="relative py-12 sm:py-20 bg-[#070b14] overflow-hidden">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 px-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Desktop Canvas</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
            Built for High-Precision Markups
          </h2>
          <p className="mt-2.5 text-slate-400 text-xs sm:text-base leading-relaxed">
            Click the tool presets to see how SnapForge handles vector annotations, step badges, confidential data censorship, and OCR extraction.
          </p>
        </div>

        {/* Outer Frame with Glassmorphism Border */}
        <div className="relative rounded-2xl sm:rounded-3xl border border-white/10 bg-slate-950/90 shadow-2xl shadow-cyan-500/10 overflow-hidden">
          {/* Top Window Bar - Responsive */}
          <div className="flex items-center justify-between px-3 sm:px-4 py-2.5 bg-[#0a0f1d] border-b border-white/10 text-xs">
            <div className="flex items-center gap-2 min-w-0">
              <div className="flex items-center gap-1.5 shrink-0">
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <span className="font-mono text-slate-300 font-medium text-[11px] sm:text-xs truncate ml-1">
                SnapForge Canvas
                <span className="hidden sm:inline text-slate-500 font-normal">
                  {" "}— 1920 × 1080 @ 100%
                </span>
              </span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 text-slate-400 font-mono text-[10px] sm:text-[11px] shrink-0">
              <span className="hidden xs:inline-block px-2 py-0.5 rounded bg-slate-900 border border-white/5 text-slate-400">
                GPU Core
              </span>
              <span className="text-cyan-400 font-bold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                60 FPS
              </span>
            </div>
          </div>

          {/* Interactive Floating Toolbar - Horizontally Scrollable & Responsive */}
          <div className="flex items-center justify-start sm:justify-center p-2 sm:p-3 bg-[#0c1222]/90 border-b border-white/10 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex items-center gap-1 sm:gap-1.5 p-1 sm:p-1.5 rounded-xl sm:rounded-2xl bg-slate-900/90 border border-slate-700/80 shadow-xl backdrop-blur-md shrink-0">
              {/* Tool 1: Vector Annotations */}
              <button
                type="button"
                onClick={() => setActiveMode("annotations")}
                className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg sm:rounded-xl text-xs font-semibold transition-all ${
                  activeMode === "annotations"
                    ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30 font-bold"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
                title="Vector Arrow & Box Annotation"
              >
                <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="text-[11px] sm:text-xs">Arrows & Boxes</span>
              </button>

              {/* Tool 2: Step Counter */}
              <button
                type="button"
                onClick={() => setActiveMode("steps")}
                className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg sm:rounded-xl text-xs font-semibold transition-all ${
                  activeMode === "steps"
                    ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/30 font-bold"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
                title="Auto Step Badges (1, 2, 3)"
              >
                <ListOrdered className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="text-[11px] sm:text-xs">Step Badges</span>
              </button>

              {/* Tool 3: Blur / Redact */}
              <button
                type="button"
                onClick={() => setActiveMode("censor")}
                className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg sm:rounded-xl text-xs font-semibold transition-all ${
                  activeMode === "censor"
                    ? "bg-purple-500 text-white shadow-md shadow-purple-500/30 font-bold"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
                title="Pixelate & Blur Sensitive Data"
              >
                <EyeOff className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="text-[11px] sm:text-xs">Blur & Censor</span>
              </button>

              {/* Tool 4: OCR Scanner */}
              <button
                type="button"
                onClick={() => setActiveMode("ocr")}
                className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg sm:rounded-xl text-xs font-semibold transition-all ${
                  activeMode === "ocr"
                    ? "bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/30 font-bold"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
                title="Instant Offline OCR Text Extraction"
              >
                <ScanText className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="text-[11px] sm:text-xs">OCR Scanner</span>
              </button>

              <div className="w-[1px] h-5 bg-slate-700/80 mx-0.5 hidden xs:block" />

              {/* Color Palette Selector */}
              <div className="hidden xs:flex items-center gap-1 px-1">
                {colors.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setSelectedColor(c)}
                    className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full transition-transform ${
                      selectedColor === c
                        ? "scale-125 ring-2 ring-white ring-offset-1 ring-offset-slate-900"
                        : "hover:scale-110"
                    }`}
                    style={{ backgroundColor: c }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Canvas Working Area */}
          <div className="relative min-h-[400px] sm:min-h-[460px] p-3 sm:p-8 flex items-center justify-center bg-[#070b14] bg-dot-pattern overflow-hidden">
            {/* Background Sample App Window (Developer IDE / Code Snippet) */}
            <div className="w-full max-w-2xl rounded-xl sm:rounded-2xl border border-white/10 bg-slate-900/95 shadow-2xl p-4 sm:p-6 relative font-mono text-xs text-slate-300 overflow-hidden">
              {/* Window file header */}
              <div className="flex items-center justify-between pb-2.5 mb-3.5 border-b border-white/10 text-slate-400">
                <span className="text-[11px] font-semibold text-cyan-400">
                  api/auth/session.ts
                </span>
                <span className="text-[10px] text-slate-500">TypeScript</span>
              </div>

              {/* Code lines container with relative positioning and responsive padding */}
              <div className="space-y-2 leading-relaxed text-[11px] sm:text-xs">
                {/* Line 1 */}
                <div className="relative flex items-center gap-2">
                  {activeMode === "steps" && (
                    <span className="w-5 h-5 rounded-full bg-amber-500 text-slate-950 font-bold text-[10px] flex items-center justify-center shrink-0 shadow-md shadow-amber-500/40 animate-in zoom-in-75 duration-150">
                      1
                    </span>
                  )}
                  <div className="truncate">
                    <span className="text-purple-400">export async function</span>{" "}
                    <span className="text-sky-300 font-bold">authenticateUser</span>
                    (token: <span className="text-amber-300">string</span>) &#123;
                  </div>
                  {activeMode === "steps" && (
                    <span className="hidden md:inline px-2 py-0.5 rounded bg-amber-950/80 border border-amber-500/30 text-amber-300 text-[10px] font-sans font-semibold">
                      Entry Point
                    </span>
                  )}
                </div>

                {/* Line 2: Comment */}
                <div className="pl-4 text-slate-500 text-[10px] sm:text-[11px]">
                  // Verify cryptographic payload signature
                </div>

                {/* Line 3: Secret key definition (CENSOR TARGET) */}
                <div className="pl-4 flex items-center gap-2 flex-wrap relative">
                  <span className="text-purple-400">const</span>
                  <span className="text-slate-200">secretKey</span>
                  <span className="text-slate-500">=</span>

                  {activeMode === "censor" ? (
                    <div className="relative inline-flex items-center gap-1.5 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded bg-purple-950/95 border border-purple-400/60 shadow-lg shadow-purple-500/20 backdrop-blur-md animate-in fade-in zoom-in-95 duration-200 max-w-full">
                      <Lock className="w-3 h-3 text-purple-300 shrink-0" />
                      <span className="text-[9px] sm:text-[10px] font-sans font-bold text-purple-200 uppercase tracking-wider truncate">
                        REDACTED • CONFIDENTIAL KEY
                      </span>
                    </div>
                  ) : (
                    <span className="text-emerald-400 bg-emerald-950/30 px-1.5 py-0.5 rounded border border-emerald-500/20 truncate max-w-full">
                      &quot;mock_secret_jwt_key_sample_token&quot;
                    </span>
                  )}
                  <span>;</span>
                </div>

                {/* Line 4: Token verification (ANNOTATION TARGET) */}
                <div className="relative pl-4 flex items-center gap-2 flex-wrap">
                  {activeMode === "steps" && (
                    <span className="w-5 h-5 rounded-full bg-amber-500 text-slate-950 font-bold text-[10px] flex items-center justify-center shrink-0 shadow-md shadow-amber-500/40 animate-in zoom-in-75 duration-200 -ml-2">
                      2
                    </span>
                  )}
                  <span className="text-purple-400">const</span> payload ={" "}
                  <span className="text-sky-300 font-semibold">verifyJwtToken</span>
                  (token, secretKey);

                  {activeMode === "steps" && (
                    <span className="hidden md:inline px-2 py-0.5 rounded bg-amber-950/80 border border-amber-500/30 text-amber-300 text-[10px] font-sans font-semibold">
                      Signature Verification
                    </span>
                  )}
                </div>

                {/* Line 5 */}
                <div className="pl-4">
                  <span className="text-purple-400">if</span> (!payload) &#123;
                </div>

                {/* Line 6 */}
                <div className="pl-8 text-slate-400">
                  <span className="text-purple-400">throw new</span>{" "}
                  <span className="text-amber-400">AuthError</span>(&quot;Invalid session&quot;);
                </div>

                {/* Line 7 */}
                <div className="pl-4">&#125;</div>

                {/* Line 8: Return statement */}
                <div className="relative pl-4 flex items-center gap-2 flex-wrap">
                  {activeMode === "steps" && (
                    <span className="w-5 h-5 rounded-full bg-amber-500 text-slate-950 font-bold text-[10px] flex items-center justify-center shrink-0 shadow-md shadow-amber-500/40 animate-in zoom-in-75 duration-300 -ml-2">
                      3
                    </span>
                  )}
                  <span className="text-purple-400">return</span> &#123; userId: payload.sub, role: &quot;admin&quot; &#125;;

                  {activeMode === "steps" && (
                    <span className="hidden md:inline px-2 py-0.5 rounded bg-amber-950/80 border border-amber-500/30 text-amber-300 text-[10px] font-sans font-semibold">
                      Safe Response
                    </span>
                  )}
                </div>

                {/* Line 9 */}
                <div>&#125;</div>
              </div>

              {/* OVERLAY 1: Vector Bounding Box & Arrow (Positioned responsively within code card) */}
              {activeMode === "annotations" && (
                <div className="absolute inset-0 pointer-events-none p-3 sm:p-6 flex flex-col justify-between">
                  {/* Glowing Box around function logic */}
                  <div
                    className="absolute top-12 left-4 right-4 sm:left-6 sm:right-6 bottom-4 rounded-xl border-2 shadow-glow-cyan animate-in fade-in zoom-in-95 duration-200 pointer-events-none"
                    style={{ borderColor: selectedColor }}
                  >
                    <span
                      className="absolute -top-3 left-3 px-2 py-0.5 rounded text-[10px] font-bold text-slate-950 font-sans shadow"
                      style={{ backgroundColor: selectedColor }}
                    >
                      Vector Selection Box
                    </span>

                    {/* Arrow callout tag at the bottom right */}
                    <div className="absolute bottom-2.5 sm:bottom-3 right-2.5 sm:right-3 flex items-center gap-1.5">
                      <span
                        className="hidden xs:inline-block px-2 py-0.5 rounded text-[10px] font-bold text-slate-950 font-sans shadow"
                        style={{ backgroundColor: selectedColor }}
                      >
                        Zero-latency freeze
                      </span>
                      <ArrowUpRight
                        className="w-4 h-4 sm:w-5 sm:h-5 -rotate-90 animate-pulse"
                        style={{ color: selectedColor }}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* OVERLAY 4: OCR Scanner Modal */}
              {activeMode === "ocr" && (
                <div className="absolute inset-0 p-3 sm:p-6 flex items-center justify-center bg-black/75 backdrop-blur-sm rounded-xl sm:rounded-2xl animate-in fade-in duration-200 pointer-events-auto z-20">
                  <div className="w-full max-w-sm sm:max-w-md p-3.5 sm:p-4 rounded-xl bg-slate-900 border border-emerald-500/40 shadow-2xl flex flex-col gap-2.5">
                    <div className="flex items-center justify-between text-xs font-semibold text-emerald-400">
                      <div className="flex items-center gap-1.5">
                        <ScanText className="w-4 h-4" />
                        <span>OCR Extracted Text</span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-400">Offline Tesseract</span>
                    </div>

                    <textarea
                      readOnly
                      rows={3}
                      value={`export async function authenticateUser(token: string) {\n  const secretKey = "mock_secret_jwt_key_sample_token";\n  const payload = verifyJwtToken(token, secretKey);`}
                      className="w-full p-2 rounded-lg bg-slate-950 text-emerald-300 font-mono text-[11px] sm:text-xs border border-emerald-500/20 focus:outline-none resize-none"
                    />

                    <div className="flex items-center justify-end">
                      <button
                        type="button"
                        onClick={handleCopyOcr}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-colors shadow-md"
                      >
                        {copiedOcr ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>Copied to Clipboard!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy Text</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Bottom Floating Status Bar - Responsive */}
          <div className="flex flex-col sm:flex-row items-center justify-between px-3 sm:px-6 py-2.5 sm:py-3 bg-[#0a0f1d] border-t border-white/10 text-[11px] sm:text-xs text-slate-400 gap-1.5 sm:gap-0">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Standby Listener Active</span>
            </div>
            <div className="flex items-center gap-1.5 font-mono text-[10px] sm:text-[11px]">
              <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-white/10">
                Ctrl
              </kbd>
              <span>+</span>
              <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-white/10">
                Shift
              </kbd>
              <span>+</span>
              <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-white/10">
                S
              </kbd>
              <span className="text-slate-500 ml-1">to freeze anywhere</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

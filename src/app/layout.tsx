import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://snapforge.app"),
  title: "SnapForge — Zero-Latency Screen Capture & Precision Annotation Suite",
  description:
    "High-performance native screen capture, vector annotation, and instant screen recording utility for developers, designers, and digital creators. Built with Rust & Tauri v2.",
  icons: {
    icon: "/app-icon.png",
    shortcut: "/app-icon.png",
    apple: "/app-icon.png",
  },
  openGraph: {
    title: "SnapForge — Precision Screen Capture & Annotation",
    description:
      "Zero-latency native desktop utility for fast screenshot markups, blur redaction, instant video clips, and offline OCR.",
    url: "https://snapforge.app",
    siteName: "SnapForge",
    images: [
      {
        url: "/app-icon.png",
        width: 1024,
        height: 1024,
        alt: "SnapForge App Icon",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SnapForge — Precision Screen Capture Studio",
    description: "Zero-latency native desktop tool for developers & creators.",
    images: ["/app-icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-screen bg-[#060911] text-slate-100 antialiased selection:bg-cyan-500/20 selection:text-cyan-300">
        {children}
      </body>
    </html>
  );
}

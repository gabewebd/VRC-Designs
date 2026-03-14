import type { Metadata } from "next";
import { Noto_Serif, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Preloader from "@/components/layout/Preloader";

/* ── Fonts ─────────────────────────────────────────────────────────────── */
const notoSerif = Noto_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-serif",
  display: "swap",
  style: ["normal", "italic"],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-body",
  display: "swap",
});

/* ── Metadata ──────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "VRC Designs — Raphael | Architect Portfolio",
  description:
    "Welcome to the world of Raphael's architectural designs. A portfolio of projects that blend creativity, functionality, and a deep understanding of space.",
  keywords: [
    "architect",
    "portfolio",
    "Raphael",
    "VRC Designs",
    "architectural design",
    "residential",
    "commercial",
  ],
  openGraph: {
    title: "VRC Designs — Raphael | Architect Portfolio",
    description:
      "Explore Raphael's portfolio of innovative architectural projects — from multi-family housing to commercial spaces.",
    url: "https://vrcdesigns.com",
    siteName: "VRC Designs",
    images: [
      {
        url: "/images/building-graphic.png",
        width: 1200,
        height: 630,
        alt: "VRC Designs portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VRC Designs — Raphael | Architect Portfolio",
    description: "Explore Raphael's portfolio of innovative architectural projects.",
  },
};

/* ── Root Layout ───────────────────────────────────────────────────────── */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${notoSerif.variable} ${plusJakarta.variable}`}>
      <body className="overflow-x-hidden">
        <Preloader />
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}

"use client";

import { navLinks, footerContent } from "@/data/content";
import { Facebook, Mail, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer className="bg-primary-dark text-offwhite pt-12 pb-8" role="contentinfo">
      <div className="container mx-auto px-6 md:px-12">
        {/* Top area */}
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          {/* Left — heading */}
          <div>
            <h2 className="heading-1">
              Let&apos;s{" "}
              <span className="italic text-offwhite underline decoration-accent underline-offset-8">Connect</span>
            </h2>
            <div className="mt-6 flex items-center gap-4">
              <a
                href={footerContent.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-offwhite/20 transition-colors hover:border-offwhite hover:bg-offwhite/10"
              >
                <Facebook size={18} />
              </a>
              <a
                href={footerContent.socials.email}
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-offwhite/20 transition-colors hover:border-offwhite hover:bg-offwhite/10"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Right — nav links */}
          <nav className="flex flex-col gap-3 md:items-end" aria-label="Footer navigation">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="group flex items-center gap-2 text-small tracking-[0.15em] uppercase text-offwhite/70 transition-colors hover:text-offwhite"
              >
                {link.label}
                <ArrowUpRight
                  size={14}
                  className="opacity-0 transition-opacity group-hover:opacity-100"
                />
              </button>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-offwhite/10" />

        {/* Copyright */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-caption text-offwhite/40">{footerContent.copyright}</p>
          <p className="text-caption text-offwhite/40">Built with precision.</p>
        </div>
      </div>
    </footer>
  );
}

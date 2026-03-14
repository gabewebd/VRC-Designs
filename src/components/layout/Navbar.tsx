"use client";

import { useEffect, useRef, useState } from "react";
import { navLinks } from "@/data/content";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  /* ── Track scroll position for navbar bg ───────────────────────────── */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Intersection Observer for active link ─────────────────────────── */
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -60% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  /* ── Entrance animation ────────────────────────────────────────────── */
  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("all", () => {
      gsap.fromTo(
        navRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 2.2, ease: "power3.out" }
      );
    });
    return () => mm.revert();
  }, []);

  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileOpen(false);
  };

  return (
    <>
      <nav
        ref={navRef}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 flex items-center justify-between transition-all duration-500",
          "section-padding",
          isScrolled
            ? "h-20 bg-primary-dark/95 backdrop-blur-md shadow-lg"
            : "h-28 bg-transparent"
        )}
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <button
          onClick={() => scrollTo("#home")}
          className="z-50 flex items-center gap-2"
          aria-label="Scroll to top"
        >
          <img
            src="/assets/vrc white 1.svg"
            alt="VRC Designs"
            className={cn(
              "h-8 w-auto md:h-10 transition-all duration-500",
              (!isScrolled && !mobileOpen) ? "brightness-0" : ""
            )}
          />
        </button>

        {/* Desktop Links */}
        <div className="hidden items-center gap-8 md:flex" role="menubar">
          {navLinks.map((link) => {
            // Check for the contact link specifically
            const isContact = link.href === "#contact";
            
            if (isContact) {
              return (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  role="menuitem"
                  className={cn(
                    "ml-4 px-8 py-3 text-small font-bold tracking-[0.1em] uppercase transition-all duration-300 rounded-full",
                    isScrolled 
                      ? "bg-offwhite text-primary-dark hover:bg-offwhite/90 shadow-lg" 
                      : "bg-accent text-offwhite hover:bg-accent/90"
                  )}
                >
                  Let's Talk
                </button>
              );
            }
            return (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                role="menuitem"
                className={cn(
                  "relative py-1 text-small font-medium tracking-[0.15em] uppercase transition-colors duration-300",
                  isScrolled ? "text-offwhite/80 hover:text-offwhite" : "text-charcoal/60 hover:text-charcoal",
                  activeSection === link.href.replace("#", "") &&
                    (isScrolled ? "text-offwhite" : "text-accent")
                )}
              >
                {link.label}
                {/* Active indicator line */}
                <span
                  className={cn(
                    "absolute bottom-0 left-0 h-[1px] transition-all duration-300",
                    isScrolled ? "bg-offwhite" : "bg-accent",
                    activeSection === link.href.replace("#", "") ? "w-full" : "w-0"
                  )}
                />
              </button>
            );
          })}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen((prev) => !prev)}
          className={cn(
            "z-50 flex flex-col items-center justify-center gap-[5px] md:hidden",
            mobileOpen && "hamburger-active"
          )}
          aria-label="Toggle mobile menu"
          aria-expanded={mobileOpen}
        >
          <span
            className={cn(
              "hamburger-line",
              isScrolled || mobileOpen ? "bg-offwhite" : "bg-charcoal"
            )}
          />
          <span
            className={cn(
              "hamburger-line",
              isScrolled || mobileOpen ? "bg-offwhite" : "bg-charcoal"
            )}
          />
          <span
            className={cn(
              "hamburger-line",
              isScrolled || mobileOpen ? "bg-offwhite" : "bg-charcoal"
            )}
          />
        </button>
      </nav>

      {/* ── Mobile fullscreen menu ─────────────────────────────────────── */}
      <div
        className={cn(
          "fixed inset-0 z-40 flex flex-col items-center justify-center bg-primary-dark transition-all duration-500 md:hidden",
          mobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="flex flex-col items-center gap-8">
          {navLinks.map((link, i) => {
            const isContact = link.href === "#contact";
            return (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={cn(
                  "transition-all duration-300",
                  isContact 
                    ? "mt-4 px-12 py-5 bg-offwhite text-primary-dark rounded-full text-xl font-bold uppercase tracking-widest shadow-xl"
                    : "heading-2 text-offwhite/60 hover:text-offwhite",
                  !isContact && activeSection === link.href.replace("#", "") && "text-offwhite"
                )}
                style={{
                  transitionDelay: mobileOpen ? `${i * 80}ms` : "0ms",
                  transform: mobileOpen ? "translateY(0)" : "translateY(20px)",
                  opacity: mobileOpen ? 1 : 0,
                }}
              >
                {isContact ? "Let's Talk" : link.label}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}
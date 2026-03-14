"use client";

import { useEffect, useRef } from "react";
import { heroContent } from "@/data/content";
import Button from "@/components/ui/Button";
import ArchitecturalCanvas from "@/components/ui/ArchitecturalCanvas";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const textFillRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const tl = gsap.timeline({ delay: 2 });

      tl.fromTo(
        ".hero-line",
        { y: "110%", opacity: 0, rotateX: -20 },
        {
          y: "0%",
          opacity: 1,
          rotateX: 0,
          duration: 1.5,
          stagger: 0.15,
          ease: "power4.out",
        }
      )
        .fromTo(
          ".hero-desc",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
          "-=0.8"
        )
        .fromTo(
          ".hero-cta",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" },
          "-=0.6"
        );

      /* GSAP Text Fill ScrollTrigger (Left to Right, High Sensitivity) */
      if (textFillRef.current) {
        gsap.to(".text-fill-overlay", {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "none",
          scrollTrigger: {
            trigger: textFillRef.current,
            start: "top 85%", 
            end: "center 45%", 
            scrub: 1,
          },
        });
      }
    });

    mm.add("(max-width: 767px)", () => {
      const tl = gsap.timeline({ delay: 1 });

      tl.fromTo(".hero-line", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: "power3.out" })
        .fromTo(".hero-desc", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.2")
        .fromTo(".hero-cta", { opacity: 0 }, { opacity: 1, duration: 0.5 }, "-=0.2");

      /* GSAP Text Fill ScrollTrigger Mobile */
      if (textFillRef.current) {
        gsap.to(".text-fill-overlay", {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "none",
          scrollTrigger: {
            trigger: textFillRef.current,
            start: "top 85%",
            end: "center 50%", 
            scrub: 1,
          },
        });
      }
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-svh w-full bg-offwhite pt-24 md:pt-32"
      aria-label="Hero"
    >
      {/* BACKGROUND LAYER: Full-screen Drafting Canvas */}
      <div className="absolute inset-0 z-0 h-full w-full overflow-hidden opacity-80">
        <ArchitecturalCanvas />
      </div>

      {/* FOREGROUND LAYER: Text Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 pointer-events-none">
        
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8 lg:gap-12">
          
          {/* Massive Typography */}
          <div className="z-20 flex flex-col justify-center pt-8 md:col-span-8 lg:col-span-9">
            <h1 className="heading-display text-charcoal flex flex-col uppercase">
              <span className="hero-line block font-serif font-light italic leading-[0.8]">
                {heroContent.greeting}
              </span>
              <span className="hero-line block font-serif font-normal text-accent leading-[0.9] -ml-2 md:-ml-4">
                {heroContent.name}
              </span>
              <span className="hero-line block font-serif font-light tracking-tight leading-[0.8]">
                {heroContent.role}
              </span>
            </h1>

            <div className="hero-desc mt-10 max-w-xl md:ml-12 lg:ml-24">
              <p className="text-body leading-relaxed text-charcoal/70 border-l border-charcoal/20 pl-6">
                {heroContent.description}
              </p>
              
              {/* CTAs (Pointer events auto so you can click them) */}
              <div className="mt-8 flex flex-wrap gap-4 pl-6 pointer-events-auto">
                <div className="hero-cta">
                  <Button href={heroContent.cta.portfolio} icon>
                    Portfolio
                  </Button>
                </div>
                <div className="hero-cta">
                  <Button
                    href={heroContent.cta.hire}
                    variant="secondary"
                    icon
                  >
                    Hire Me
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Global Envisioning GSAP Section */}
        <div className="mt-24 mb-16 md:mt-40 md:mb-32 flex justify-center w-full pointer-events-auto">
          <h2
            ref={textFillRef}
            className="relative text-center font-serif text-[clamp(2.5rem,7vw,7rem)] font-black uppercase leading-[0.9] tracking-tighter"
          >
            <span
              className="absolute inset-0 block text-transparent"
              style={{
                WebkitTextStroke: "1px rgba(26, 26, 26, 0.15)",
              }}
              aria-hidden="true"
            >
              {heroContent.tagline[0]} <br /> {heroContent.tagline[1]}
            </span>

            <span
              className="text-fill-overlay block text-accent"
              style={{
                clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
                position: "relative",
                zIndex: 2,
              }}
            >
              {heroContent.tagline[0]} <br /> {heroContent.tagline[1]}
            </span>
          </h2>
        </div>
      </div>
    </section>
  );
}
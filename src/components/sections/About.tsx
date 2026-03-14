"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { aboutContent } from "@/data/content";
import Button from "@/components/ui/Button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      /* Staggered reveal for text, motto, and buttons */
      gsap.fromTo(
        ".about-animate",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );

      /* Vertical Ruler Animation */
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 50%",
            end: "bottom 50%",
            scrub: true,
          },
        }
      );

      /* Stats Counter Animation */
      if (statsRef.current) {
        const counters = statsRef.current.querySelectorAll(".stat-value");
        counters.forEach((counter) => {
          const text = counter.textContent || "0";
          const numericValue = parseInt(text.replace(/\D/g, ""), 10);
          const suffix = text.replace(/[0-9]/g, "");
          const obj = { value: 0 };
          gsap.to(obj, {
            value: numericValue,
            duration: 2.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 85%",
            },
            onUpdate: () => {
              (counter as HTMLElement).textContent = Math.round(obj.value) + suffix;
            },
          });
        });
      }
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="bg-primary-dark text-offwhite py-24 md:py-32 relative overflow-hidden"
      aria-label="About"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-12 md:gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Image & Structured Stats */}
          <div className="md:col-span-4 lg:col-span-5 relative mt-12 md:mt-24">
            <div className="relative aspect-[4/5] overflow-hidden w-full border border-offwhite/5">
              <Image
                src="/assets/raphael.png" 
                alt="Raphael Architecture"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover opacity-80"
              />
            </div>
            
            <div ref={statsRef} className="mt-20 flex flex-col">
              {aboutContent.stats.map((stat, i) => (
                <div 
                  key={i} 
                  className="about-animate border-b border-offwhite/10 py-10 first:pt-0 last:border-0"
                >
                  <div className="stat-value font-serif text-6xl lg:text-8xl font-light text-accent-light leading-none">
                    {stat.value}
                  </div>
                  <p className="mt-4 text-xs font-bold uppercase tracking-[0.3em] text-offwhite/40">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* MOBILE DIVIDER - Only visible on small screens */}
          <div className="block md:hidden w-full h-[1px] bg-offwhite/10 opacity-50 about-animate" />

          {/* Right Column: Narrative & Big Motto */}
          <div className="flex flex-col md:col-span-8 lg:col-span-7 relative">
            <h2 className="about-animate heading-2 font-serif font-light uppercase tracking-widest text-offwhite mb-16">
              The <span className="font-normal text-accent-light italic">Architect</span>
            </h2>

            <div className="flex flex-col gap-16 md:gap-24">
              <div className="about-animate relative">
                <span className="absolute -left-12 lg:-left-16 top-2 font-serif text-3xl font-light text-offwhite/10 hidden md:block">01</span>
                <h3 className="heading-3 mb-6 font-serif tracking-wide">{aboutContent.philosophy.title}</h3>
                <p className="text-body text-offwhite/70 leading-relaxed md:text-xl font-light">
                  {aboutContent.philosophy.description}
                </p>
              </div>

              <div className="about-animate relative">
                <span className="absolute -left-12 lg:-left-16 top-2 font-serif text-3xl font-light text-offwhite/10 hidden md:block">02</span>
                <h3 className="heading-3 mb-6 font-serif tracking-wide">{aboutContent.process.title}</h3>
                <p className="text-body text-offwhite/70 leading-relaxed md:text-xl font-light">
                  {aboutContent.process.description}
                </p>
              </div>

              <div className="flex flex-col gap-12">
                <h2 className="about-animate font-serif text-4xl md:text-6xl lg:text-7xl italic leading-[1.1] text-offwhite tracking-tight">
                  "Architecture is a visual art, and the buildings speak for themselves."
                </h2>
          
              </div>
            </div>

            <div className="absolute -right-8 lg:-right-12 top-0 h-full w-[1px] bg-offwhite/5 hidden lg:block">
              <div ref={lineRef} className="w-full bg-accent-light origin-top h-full" />
              <div className="absolute top-0 left-0 flex flex-col gap-10 opacity-30">
                 {[...Array(10)].map((_, i) => (
                    <div key={i} className="w-3 h-[1px] bg-offwhite" />
                 ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
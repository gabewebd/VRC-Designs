"use client";

import { useEffect, useRef } from "react";
import { servicesContent } from "@/data/content";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      gsap.fromTo(
        headingRef.current,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );

      gsap.fromTo(
        ".service-row",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".service-grid",
            start: "top 80%",
          },
        }
      );
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="bg-offwhite py-24 md:py-32 relative overflow-hidden"
      aria-label="Services"
    >
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#0033a0 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }} 
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div ref={headingRef} className="flex flex-col mb-16 md:mb-24">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[1px] bg-accent" />
            <span className="font-mono text-sm font-bold uppercase tracking-[0.3em] text-accent">Service Specifications</span>
          </div>
          <h2 className="heading-2 uppercase leading-[0.9] text-charcoal">
            Design <span className="italic font-light text-accent">Tiers</span>
          </h2>
          <p className="mt-8 text-lg text-charcoal/60 max-w-xl font-light leading-relaxed border-l border-charcoal/10 pl-8">
            {servicesContent.description}
          </p>
        </div>

        <div className="service-grid border-t border-charcoal/10">
          {servicesContent.tiers.map((tier) => {
            const isPremium = tier.name.toLowerCase() === "premium";

            return (
              <div 
                key={tier.name} 
                className={cn(
                  "service-row group grid grid-cols-1 md:grid-cols-12 border-b border-charcoal/10 transition-all duration-500 relative",
                  isPremium ? "bg-primary-dark text-offwhite shadow-2xl z-20" : "hover:bg-charcoal/[0.02]"
                )}
              >
                {/* Recommended Badge */}
                {isPremium && (
                  <div className="absolute top-0 right-0 bg-accent px-6 py-2 text-xs font-bold uppercase tracking-[0.2em] text-offwhite">
                    Recommended Tier
                  </div>
                )}

                {/* 01. Column: Name & Price */}
                <div className={cn(
                  "md:col-span-4 p-10 md:p-14 border-r",
                  isPremium ? "border-white/5" : "border-charcoal/10"
                )}>
                  <h3 className={cn(
                    "font-serif text-4xl md:text-5xl leading-none",
                    isPremium ? "text-accent-light" : "text-accent"
                  )}>
                    {tier.name}
                  </h3>
                  <div className="mt-10 flex flex-col">
                    <span className={cn(
                      "font-mono text-xs font-bold uppercase tracking-widest mb-2",
                      isPremium ? "text-white/30" : "text-charcoal/40"
                    )}>Starting At</span>
                    <span className="text-2xl md:text-3xl font-medium">{tier.priceRange}</span>
                  </div>
                </div>

                {/* 02. Column: Features */}
                <div className={cn(
                  "md:col-span-5 p-10 md:p-14 border-r",
                  isPremium ? "border-white/5" : "border-charcoal/10"
                )}>
                  <ul className="space-y-6">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-4 text-base group-hover:translate-x-1 transition-transform duration-300">
                        <Check size={18} className={cn("mt-1 shrink-0", isPremium ? "text-accent-light" : "text-accent")} />
                        <span className={isPremium ? "text-white/80" : "text-charcoal/70"}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 03. Column: Target & Detail */}
                <div className="md:col-span-3 p-10 md:p-14 flex flex-col justify-between">
                  <div>
                    <span className={cn(
                      "font-mono text-xs font-bold uppercase tracking-widest block mb-4",
                      isPremium ? "text-white/30" : "text-charcoal/40"
                    )}>Perfect For</span>
                    <p className={cn(
                      "text-base leading-relaxed italic",
                      isPremium ? "text-white/60" : "text-charcoal/60"
                    )}>
                      {tier.targetClients}
                    </p>
                  </div>

                  {/* Drafting Detail */}
                  <div className={cn(
                    "mt-10 pt-8 border-t opacity-30",
                    isPremium ? "border-white/10" : "border-charcoal/10"
                  )}>
                    <div className="flex gap-2">
                      {[...Array(6)].map((_, i) => (
                        <div key={i} className={cn("w-1.5 h-1.5", isPremium ? "bg-white" : "bg-charcoal")} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
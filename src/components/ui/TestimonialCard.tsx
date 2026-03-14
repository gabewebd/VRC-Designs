"use client";

import { useEffect, useRef } from "react";
import { Star, Quote } from "lucide-react";
import type { Testimonial } from "@/data/content";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

export default function TestimonialCard({
  testimonial,
  index,
}: TestimonialCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      gsap.fromTo(
        cardRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: index * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    mm.add("(max-width: 767px)", () => {
      gsap.fromTo(
        cardRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => mm.revert();
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="flex flex-col gap-6 p-8 bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl transition-all duration-300 hover:bg-white/10 hover:border-white/20"
    >
      {/* Quote icon + Name */}
      <div className="flex items-center gap-3">
        <Quote size={20} className="text-accent-light" />
        <span className="text-small font-semibold tracking-wide uppercase text-offwhite">
          {testimonial.name}
        </span>
      </div>

      {/* Stars */}
      <div className="flex items-center gap-1">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} size={14} className="fill-accent-light text-accent-light" />
        ))}
      </div>

      {/* Text */}
      <p className="text-body italic leading-relaxed text-offwhite/80">
        &ldquo;{testimonial.text}&rdquo;
      </p>
    </div>
  );
}

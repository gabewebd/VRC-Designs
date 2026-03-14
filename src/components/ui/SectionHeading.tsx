"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

interface SectionHeadingProps {
  children: React.ReactNode;
  accent?: string;
  description?: string;
  className?: string;
}

export default function SectionHeading({
  children,
  accent,
  description,
  className,
}: SectionHeadingProps) {
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      gsap.fromTo(
        ".sh-title",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      if (description) {
        gsap.fromTo(
          ".sh-desc",
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });

    mm.add("(max-width: 767px)", () => {
      gsap.fromTo(
        ".sh-title",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      if (description) {
        gsap.fromTo(
          ".sh-desc",
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            delay: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });

    return () => mm.revert();
  }, [description]);

  return (
    <div ref={headingRef} className={className}>
      <h2 className="sh-title heading-1">
        {children}{" "}
        {accent && <span className="sh-accent italic text-accent">{accent}</span>}
      </h2>
      {description && (
        <p className="sh-desc mt-4 max-w-2xl text-body leading-relaxed text-charcoal/60 md:mt-6">
          {description}
        </p>
      )}
    </div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Preloader() {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("all", () => {
      const tl = gsap.timeline({
        onComplete: () => setIsVisible(false),
      });

      /* Animate each letter stagger-in */
      tl.fromTo(
        ".preloader-char",
        { y: 80, opacity: 0, rotateX: -90 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 0.8,
          stagger: 0.04,
          ease: "power4.out",
        }
      )
        /* Hold briefly */
        .to({}, { duration: 0.4 })
        /* Fade entire preloader out */
        .to(preloaderRef.current, {
          yPercent: -100,
          duration: 0.8,
          ease: "power3.inOut",
        });
    });

    return () => mm.revert();
  }, []);

  if (!isVisible) return null;

  const title = "VRC DESIGNS";

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-offwhite"
    >
      <h1
        className="heading-display text-center tracking-widest text-charcoal"
        style={{
          perspective: "600px",
        }}
        aria-hidden="true"
      >
        {title.split("").map((char, i) => (
          <span
            key={i}
            className="preloader-char inline-block"
            style={{ display: char === " " ? "inline" : "inline-block" }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>
    </div>
  );
}

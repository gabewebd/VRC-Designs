"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/content";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      /* Card reveal */
      gsap.fromTo(
        cardRef.current,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: index * 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      /* Parallax on image */
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current.querySelector("img"),
          { yPercent: -10 },
          {
            yPercent: 10,
            ease: "none",
            scrollTrigger: {
              trigger: imageRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      }
    });

    mm.add("(max-width: 767px)", () => {
      /* Mobile: Simple fade up, no parallax, no long stagger */
      gsap.fromTo(
        cardRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
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
    <div ref={cardRef} className="group">
      {/* Image */}
      <div
        ref={imageRef}
        className="relative aspect-[4/3] overflow-hidden bg-charcoal/5 md:aspect-[16/10]"
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-[1.5s] ease-out will-change-transform group-hover:scale-[1.03]"
          style={{ scale: 1.2 }}
        />

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-charcoal/0 transition-colors duration-500 group-hover:bg-charcoal/20" />

        {/* External link button */}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-offwhite/90 text-charcoal opacity-0 transition-all duration-300 hover:bg-accent group-hover:opacity-100 md:right-6 md:top-6 md:h-12 md:w-12"
          aria-label={`View ${project.title} project`}
        >
          <ArrowUpRight size={18} />
        </a>
      </div>

      {/* Text */}
      <div className="mt-4 flex items-start justify-between gap-4 md:mt-6">
        <div>
          <h3 className="heading-3">{project.title}</h3>
          <p className="mt-2 max-w-md text-small leading-relaxed text-charcoal/50">
            {project.description}
          </p>
        </div>
      </div>
    </div>
  );
}

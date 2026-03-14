"use client";

import { useEffect, useRef } from "react";
import { testimonialsContent, heroContent } from "@/data/content";
import SectionHeading from "@/components/ui/SectionHeading";
import TestimonialCard from "@/components/ui/TestimonialCard";
import Button from "@/components/ui/Button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // 1. Reveal cards as they enter view
      gsap.fromTo(
        ".testimonial-animate",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );

      // 2. Scroll-triggered vertical axis line (Desktop only)
      if (scrollLineRef.current) {
        gsap.fromTo(
          scrollLineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 40%",
              end: "bottom 60%",
              scrub: 1.5,
            },
          }
        );
      }
    });

    // Mobile specific animations (simplified)
    mm.add("(max-width: 767px)", () => {
      gsap.fromTo(
        ".testimonial-animate",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
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
      id="testimonials"
      className="bg-primary-dark text-offwhite py-24 md:py-32 relative overflow-hidden"
      aria-label="Testimonials"
    >
      {/* Scroll-Triggered Vertical Axis - Hidden on mobile for cleaner stack */}
      <div className="absolute left-1/2 top-0 w-[1px] h-full bg-offwhite/5 hidden md:block">
         <div 
           ref={scrollLineRef}
           className="w-full h-full bg-accent-light origin-top"
         />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl">
          <SectionHeading
            accent="of Work"
            description={testimonialsContent.description}
            className="[&_.sh-title]:text-offwhite [&_.sh-accent]:text-accent-light [&_.sh-desc]:text-offwhite/70"
          >
            Testimonials
          </SectionHeading>
        </div>

        {/* Responsive Staggered Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16">
          
          {/* Card 1 */}
          <div className="testimonial-animate md:col-span-7 lg:col-span-6">
            <TestimonialCard testimonial={testimonialsContent.testimonials[0]} index={0} />
          </div>

          {/* Card 2 - Offset only on desktop */}
          <div className="testimonial-animate md:col-span-5 lg:col-span-5 md:mt-24 lg:mt-32">
            <TestimonialCard testimonial={testimonialsContent.testimonials[1]} index={1} />
          </div>

          {/* Card 3 - Offset only on desktop */}
          <div className="testimonial-animate md:col-span-6 lg:col-span-5 md:-mt-12">
            <TestimonialCard testimonial={testimonialsContent.testimonials[2]} index={2} />
          </div>

          {/* Card 4 */}
          <div className="testimonial-animate md:col-span-6 lg:col-span-6 lg:mt-12">
            <TestimonialCard testimonial={testimonialsContent.testimonials[3]} index={3} />
          </div>
        </div>

        {/* Closing Action Section */}
        <div className="mt-24 md:mt-32 flex flex-col items-center text-center">
          <div className="testimonial-animate mb-12 max-w-2xl">
             <h3 className="font-serif text-3xl md:text-5xl italic text-offwhite/90 leading-tight">
                "Your vision, engineered with precision."
             </h3>
          </div>
          
          <div className="testimonial-animate flex flex-wrap justify-center gap-6 w-full">
            {/* View Full Portfolio - Primary Blue with Arrow Icon */}
            <Button 
              href={heroContent.cta.portfolio} 
              className="w-full md:w-auto"
              icon
            >
              View Full Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
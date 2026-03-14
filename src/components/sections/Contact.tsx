"use client";

import { useEffect, useRef } from "react";
import { contactContent } from "@/data/content";
import { Send } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      gsap.fromTo(
        ".contact-reveal",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    mm.add("(max-width: 767px)", () => {
      gsap.fromTo(
        ".contact-reveal",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="bg-offwhite text-charcoal py-24 md:py-32"
      aria-label="Contact"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16 lg:gap-24">
          {/* Left — Heading */}
          <div className="flex flex-col justify-center">
            <h2 className="contact-reveal heading-1 leading-[1.1]">
              {contactContent.heading.map((line, i) => (
                <span key={i} className="block">
                  {i === 1 ? (
                    <span className="italic text-accent">{line}</span>
                  ) : (
                    line
                  )}
                </span>
              ))}
            </h2>
          </div>

          {/* Right — Form */}
          <form
            className="flex flex-col gap-8"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you for your message! Raphael will get back to you soon.");
            }}
          >
            {/* Name row */}
            <div className="contact-reveal grid grid-cols-1 gap-8 sm:grid-cols-2">
              <input
                type="text"
                name="first_name"
                placeholder="First Name"
                required
                className="border-b border-charcoal/20 bg-transparent px-0 py-3 text-body text-charcoal placeholder:text-charcoal/40 outline-none transition-colors focus:border-accent"
              />
              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                required
                className="border-b border-charcoal/20 bg-transparent px-0 py-3 text-body text-charcoal placeholder:text-charcoal/40 outline-none transition-colors focus:border-accent"
              />
            </div>

            {/* Company */}
            <div className="contact-reveal">
              <input
                type="text"
                name="company"
                placeholder="Company / Work"
                required
                className="w-full border-b border-charcoal/20 bg-transparent px-0 py-3 text-body text-charcoal placeholder:text-charcoal/40 outline-none transition-colors focus:border-accent"
              />
            </div>

            {/* Email */}
            <div className="contact-reveal">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="w-full border-b border-charcoal/20 bg-transparent px-0 py-3 text-body text-charcoal placeholder:text-charcoal/40 outline-none transition-colors focus:border-accent"
              />
            </div>

            {/* Message */}
            <div className="contact-reveal">
              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                required
                className="w-full resize-none border-b border-charcoal/20 bg-transparent px-0 py-3 text-body text-charcoal placeholder:text-charcoal/40 outline-none transition-colors focus:border-accent"
              />
            </div>

            {/* Send */}
            <div className="contact-reveal">
              <button
                type="submit"
                className="group mt-10 inline-flex items-center justify-center gap-3 whitespace-nowrap bg-accent px-8 py-4 text-small font-medium tracking-wide text-offwhite transition-all duration-300 hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/20"
              >
                Send Message
                <Send
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

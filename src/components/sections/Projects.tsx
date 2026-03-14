"use client";

import Image from "next/image";
import { projectsContent } from "@/data/content";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-offwhite py-24 md:py-32 relative overflow-hidden"
      aria-label="Projects"
    >
      {/* Editorial Axis Line */}
      <div className="absolute left-0 w-full h-[1px] bg-charcoal/10 top-1/4 hidden lg:block" />

      <div className="section-padding relative z-10">
        <div className="max-w-4xl">
          <SectionHeading
            accent="Latest Projects"
            description={projectsContent.description}
          >
            See My
          </SectionHeading>
        </div>

        {/* Staggered Editorial Grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-12 gap-y-24 md:gap-y-40">
          
          {/* Project 01 - Large, Left Aligned */}
          <div className="md:col-span-9 lg:col-span-8 relative">
            <span className="absolute -top-10 left-0 font-mono text-xs font-bold uppercase tracking-[0.2em] text-charcoal/60">
              Project 01 Residential
            </span>
            <div className="group relative w-full overflow-hidden bg-charcoal">
              <div className="relative aspect-[16/10] w-full transition-transform duration-700 ease-in-out group-hover:scale-105 md:group-hover:opacity-60">
                <Image
                  src={projectsContent.projects[0].image}
                  alt={projectsContent.projects[0].title}
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Desktop Overlay Button (Hidden on Mobile) */}
              <div className="hidden md:flex absolute inset-0 items-center justify-center transition-all duration-500 opacity-0 group-hover:opacity-100">
                <Button href={projectsContent.projects[0].link} external icon>
                  View Full Project
                </Button>
              </div>
            </div>

            <div className="mt-6 flex flex-col items-start">
              <h3 className="font-serif text-3xl text-charcoal">{projectsContent.projects[0].title}</h3>
              <p className="mt-3 text-base text-charcoal/60 leading-relaxed max-w-md">{projectsContent.projects[0].description}</p>
              
              {/* Mobile Button (Visible only on Mobile) */}
              <div className="mt-6 md:hidden w-full">
                <Button href={projectsContent.projects[0].link} external icon className="w-full">
                  View Full Project
                </Button>
              </div>
            </div>
          </div>

          {/* Project 02 - Medium, Right Aligned, Offset */}
          <div className="md:col-start-5 md:col-span-8 lg:col-start-7 lg:col-span-6 md:-mt-32 relative">
            <span className="absolute -top-10 left-0 font-mono text-xs font-bold uppercase tracking-[0.2em] text-charcoal/60">
              Project 02 Commercial
            </span>
            <div className="group relative w-full overflow-hidden bg-charcoal">
              <div className="relative aspect-[16/10] w-full transition-transform duration-700 ease-in-out group-hover:scale-105 md:group-hover:opacity-60">
                <Image
                  src={projectsContent.projects[1].image}
                  alt={projectsContent.projects[1].title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="hidden md:flex absolute inset-0 items-center justify-center transition-all duration-500 opacity-0 group-hover:opacity-100">
                <Button href={projectsContent.projects[1].link} external icon>
                  View Full Project
                </Button>
              </div>
            </div>
            <div className="mt-6 flex flex-col items-start">
              <h3 className="font-serif text-3xl text-charcoal">{projectsContent.projects[1].title}</h3>
              <p className="mt-3 text-base text-charcoal/60 leading-relaxed max-w-md">{projectsContent.projects[1].description}</p>
              <div className="mt-6 md:hidden w-full">
                <Button href={projectsContent.projects[1].link} external icon className="w-full">
                  View Full Project
                </Button>
              </div>
            </div>
          </div>

          {/* Project 03 - Medium, Center-Left */}
          <div className="md:col-span-8 lg:col-span-7 relative">
            <span className="absolute -top-10 left-0 font-mono text-xs font-bold uppercase tracking-[0.2em] text-charcoal/60">
              Project 03 Concept
            </span>
            <div className="group relative w-full overflow-hidden bg-charcoal">
              <div className="relative aspect-[16/10] w-full transition-transform duration-700 ease-in-out group-hover:scale-105 md:group-hover:opacity-60">
                <Image
                  src={projectsContent.projects[2].image}
                  alt={projectsContent.projects[2].title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="hidden md:flex absolute inset-0 items-center justify-center transition-all duration-500 opacity-0 group-hover:opacity-100">
                <Button href={projectsContent.projects[2].link} external icon>
                  View Full Project
                </Button>
              </div>
            </div>
            <div className="mt-6 flex flex-col items-start">
              <h3 className="font-serif text-3xl text-charcoal">{projectsContent.projects[2].title}</h3>
              <p className="mt-3 text-base text-charcoal/60 leading-relaxed max-w-md">{projectsContent.projects[2].description}</p>
              <div className="mt-6 md:hidden w-full">
                <Button href={projectsContent.projects[2].link} external icon className="w-full">
                  View Full Project
                </Button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Technical Detail */}
        <div className="mt-32 flex justify-between items-center font-mono text-xs font-bold uppercase tracking-[0.3em] text-charcoal/40">
          <div className="flex-1 mr-12 h-[1px] bg-charcoal/10" />
          <div className="flex items-center gap-4">
            <span>Section Gallery End</span>
            <span className="text-accent">03</span>
          </div>
        </div>
      </div>
    </section>
  );
}
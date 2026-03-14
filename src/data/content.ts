// ─── Site Metadata ──────────────────────────────────────────────────────────
export const siteMetadata = {
  title: "VRC Designs — Raphael | Architect Portfolio",
  description:
    "Welcome to my architectural design portfolio. Blending creativity, functionality, and a deep understanding of space.",
  url: "https://vrcdesigns.com",
  ogImage: "/assets/building-graphic.png",
};

// ─── Navigation ─────────────────────────────────────────────────────────────
export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact Me", href: "#contact" },
] as const;

// ─── Hero Section ───────────────────────────────────────────────────────────
export const heroContent = {
  greeting: "I am",
  name: "Raphael,",
  role: "an Architect",
  description:
    "Welcome to my architectural practice. Here, you'll discover a curated collection of work driven by unyielding discipline, relentless innovation, and a profound respect for space. From visionary multi-family housing to high-impact commercial environments, my design philosophy centers on crafting powerful spaces that elevate human experience and deliver uncompromising excellence.",
  testimonialPreview:
    '"Working with Raphael was transformative for our project. His precision, vision, and unwavering dedication to the highest standards resulted in a space that completely redefines our corporate environment. Absolute top-tier execution."',
  tagline: ["ENVISIONING YOUR DREAMS", "INTO REALITY."],
  cta: {
    portfolio: "https://drive.google.com/drive/folders/1aUU4z3rIu7fPvRggRIKemJL1j9aJZ_A7?usp=sharing",
    hire: "https://www.facebook.com/profile.php?id=100011104877211&mibextid=ZbWKwL",
  },
};

// ─── About Section ──────────────────────────────────────────────────────────
export const aboutContent = {
  philosophy: {
    title: "My Design Philosophy",
    description:
      "I believe that architecture is the profound intersection of ambition and profound discipline. Every line drawn and every material selected must serve a singular, uncompromising purpose. I strive to engineer environments that command attention, optimize human potential, and stand as monuments to functional elegance and enduring structural integrity.",
  },
  process: {
    title: "My Design Process",
    description:
      "My methodology is deeply analytical and unapologetically rigorous. It begins with a comprehensive deconstruction of the client's vision and the site's absolute parameters. I then synthesize innovative sustainable technologies with bold aesthetic strategies, refining every detail through immaculate 3D modeling and precision drafting until the design achieves absolute perfection.",
  },
  stats: [
    { value: "100+", label: "Projects Completed" },
    { value: "50+", label: "Clients Collaborated" },
  ],
};

// ─── Services Section ───────────────────────────────────────────────────────
export interface ServiceTier {
  name: string;
  description: string;
  features: string[];
  projectTypes: string[];
  priceRange: string;
  targetClients: string;
}

export const servicesContent = {
  description:
    "I offer a comprehensive suite of premium architectural services—from master-planning and conceptual genesis to rigorous project management and immaculate execution. I am deeply committed to driving ambitious projects forward and delivering superior, high-performance design solutions for my elite clientele.",
  tiers: [
    {
      name: "Basic",
      description:
        "Ideal for small-scale projects or those seeking design consultation.",
      features: [
        "Initial consultation",
        "Concept design sketches",
        "2D floor plans",
        "Basic elevations",
      ],
      projectTypes: ["Residential renovations", "Small additions"],
      priceRange: "$1,000 — $5,000",
      targetClients: "Homeowners, small businesses",
    },
    {
      name: "Standard",
      description:
        "Comprehensive service for medium-sized projects requiring detailed design and documentation.",
      features: [
        "Initial consultation",
        "Concept design development",
        "Detailed 2D plans and elevations",
        "3D renderings",
        "Construction drawings",
      ],
      projectTypes: [
        "Single-family homes",
        "Small commercial buildings",
        "Multi-family dwellings",
      ],
      priceRange: "$5,000 — $20,000",
      targetClients: "Homeowners, developers, small businesses",
    },
    {
      name: "Premium",
      description:
        "Tailored for complex and large-scale projects demanding extensive design and project management.",
      features: [
        "Initial consultation",
        "Comprehensive design development",
        "Detailed 2D and 3D plans",
        "Construction drawings",
        "Project management",
        "Site supervision",
      ],
      projectTypes: [
        "Multi-family developments",
        "Commercial buildings",
        "Public spaces",
      ],
      priceRange: "$20,000+",
      targetClients: "Developers, large corporations, government agencies",
    },
  ] as ServiceTier[],
};

// ─── Projects Section ───────────────────────────────────────────────────────
export interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

export const projectsContent = {
  description:
    "My portfolio represents a strategic curation of high-impact architectural achievements. Whether engineering high-density residential developments, pioneering modern commercial retail hubs, or crafting prestigious corporate environments, I execute every commission with an ironclad commitment to superior functionality, breathtaking aesthetics, and unrivaled precision.",
  projects: [
    {
      title: "3 Storey Dormitory",
      description:
        "Engineered for highly efficient user flow and maximum structural durability. This project accelerates community engagement while employing advanced sustainable methodologies.",
      image: "/assets/dorm-normal.png",
      link: "/assets/3-STOREY-DORMITORY.pdf",
    },
    {
      title: "Strip Mall",
      description:
        "A premium optimization of the commercial retail landscape. Designed to maximize foot traffic, brand visibility, and premium architectural presence in a high-density zone.",
      image: "/assets/mall-normal.png",
      link: "/assets/STRIP-MALL.pdf",
    },
    {
      title: "2 Storey Apartment",
      description:
        "A masterclass in spatial efficiency and light optimization. This structure sets a new standard for intelligent, high-end residential living environments.",
      image: "/assets/apartment-normal.png",
      link: "/assets/2-STOREY-APARTMENT.pdf",
    },
  ] as Project[],
};

// ─── Testimonials Section ───────────────────────────────────────────────────
export interface Testimonial {
  name: string;
  rating: number;
  text: string;
}

export const testimonialsContent = {
  description:
    "My corporate and private partners rely on my absolute dedication to flawless execution. I do not just draw blueprints; I engineer success. These testimonials reflect my unwavering commitment to delivering elite, paradigm-shifting architectural results ahead of schedule.",
  testimonials: [
    {
      name: "Shin Ryujin",
      rating: 5,
      text: "His designs are the best! It was fantastic working with him. I look forward to working with him on our next projects.",
    },
    {
      name: "Yor Forger",
      rating: 5,
      text: "His work is the definition of a perfectly crafted process.",
    },
    {
      name: "Aundrea Mercado",
      rating: 5,
      text: "The project is thoroughly detailed. It has the cozy and home-vibe I like.",
    },
    {
      name: "Shin Yuna",
      rating: 5,
      text: "Working with him together was seamless. He worked on the details as we wanted. I mean, he didn't miss a single detail of design!",
    },
  ] as Testimonial[],
};

// ─── Contact Section ────────────────────────────────────────────────────────
export const contactContent = {
  heading: ["HAVE A PROJECT IN MIND?", "LET'S DISCUSS."],
};

// ─── Footer ─────────────────────────────────────────────────────────────────
export const footerContent = {
  copyright: `© ${new Date().getFullYear()} Gabrielle Ainshley Velasquez. All rights reserved.`,
  socials: {
    facebook:
      "https://www.facebook.com/profile.php?id=100011104877211&mibextid=ZbWKwL",
    email: "mailto:contact@vrcdesigns.com",
  },
};

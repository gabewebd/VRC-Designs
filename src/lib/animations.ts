import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* ── Fade-in from below ──────────────────────────────────────────────────── */
export function fadeInUp(
  element: gsap.TweenTarget,
  options?: { delay?: number; duration?: number; y?: number; scrollTrigger?: ScrollTrigger.Vars }
) {
  return gsap.fromTo(
    element,
    { opacity: 0, y: options?.y ?? 60 },
    {
      opacity: 1,
      y: 0,
      duration: options?.duration ?? 1,
      delay: options?.delay ?? 0,
      ease: "power3.out",
      scrollTrigger: options?.scrollTrigger,
    }
  );
}

/* ── Staggered children reveal ───────────────────────────────────────────── */
export function staggerChildren(
  parent: string,
  childSelector: string,
  options?: { stagger?: number; y?: number; scrollTrigger?: ScrollTrigger.Vars }
) {
  return gsap.fromTo(
    `${parent} ${childSelector}`,
    { opacity: 0, y: options?.y ?? 40 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: options?.stagger ?? 0.15,
      ease: "power3.out",
      scrollTrigger: options?.scrollTrigger,
    }
  );
}

/* ── Parallax effect for images ──────────────────────────────────────────── */
export function parallaxImage(
  element: gsap.TweenTarget,
  options?: { speed?: number; scrollTrigger?: ScrollTrigger.Vars }
) {
  return gsap.fromTo(
    element,
    { yPercent: -(options?.speed ?? 15) },
    {
      yPercent: options?.speed ?? 15,
      ease: "none",
      scrollTrigger: {
        trigger: element as gsap.DOMTarget,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        ...options?.scrollTrigger,
      },
    }
  );
}

/* ── Text line reveal ────────────────────────────────────────────────────── */
export function revealText(
  element: gsap.TweenTarget,
  options?: { delay?: number; duration?: number }
) {
  return gsap.fromTo(
    element,
    { y: "100%", opacity: 0 },
    {
      y: "0%",
      opacity: 1,
      duration: options?.duration ?? 1.2,
      delay: options?.delay ?? 0,
      ease: "power4.out",
    }
  );
}

/* ── Counter animation ───────────────────────────────────────────────────── */
export function animateCounter(
  element: HTMLElement,
  endValue: number,
  options?: { duration?: number; suffix?: string; scrollTrigger?: ScrollTrigger.Vars }
) {
  const obj = { value: 0 };
  return gsap.to(obj, {
    value: endValue,
    duration: options?.duration ?? 2,
    ease: "power2.out",
    scrollTrigger: options?.scrollTrigger,
    onUpdate: () => {
      element.textContent = Math.round(obj.value) + (options?.suffix ?? "");
    },
  });
}

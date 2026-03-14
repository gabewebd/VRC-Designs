"use client";

import { useEffect, useRef } from "react";

export default function ArchitecturalCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    // Handle responsive resizing
    const resize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        const dpr = window.devicePixelRatio || 1;
        canvas.width = parent.clientWidth * dpr;
        canvas.height = parent.clientHeight * dpr;
        ctx.scale(dpr, dpr);
        canvas.style.width = `${parent.clientWidth}px`;
        canvas.style.height = `${parent.clientHeight}px`;
      }
    };
    window.addEventListener("resize", resize);
    resize();

    // Interaction tracking (Supports both Mouse and Touch)
    let pointer = { x: canvas.width / 2, y: canvas.height / 2 };
    let isPointerPresent = false;

    // --- Desktop Mouse Events ---
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
      isPointerPresent = true;
    };
    const handleMouseLeave = () => {
      isPointerPresent = false;
    };

    // --- Mobile Touch Events ---
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        pointer.x = e.touches[0].clientX - rect.left;
        pointer.y = e.touches[0].clientY - rect.top;
        isPointerPresent = true;
      }
    };
    const handleTouchEnd = () => {
      isPointerPresent = false;
    };

    // Attach listeners globally so they don't get blocked by text
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    document.addEventListener("touchend", handleTouchEnd);
    document.addEventListener("touchcancel", handleTouchEnd);

    // Architectural Blocks (Responsive Distribution)
    const isMobile = window.innerWidth < 768;
    const blocks = Array.from({ length: isMobile ? 4 : 6 }).map(() => ({
      // On desktop, push right. On mobile, spread them vertically
      baseX: !isMobile 
        ? Math.random() * (canvas.width * 0.3) + (canvas.width * 0.55) 
        : Math.random() * (canvas.width * 0.6) + 20,
      baseY: Math.random() * (canvas.height * 0.8) + 50,
      baseW: Math.random() * (isMobile ? 120 : 200) + 80,
      baseH: Math.random() * (isMobile ? 120 : 200) + 80,
      speedX: (Math.random() - 0.5) * 0.002,
      speedY: (Math.random() - 0.5) * 0.002,
      delay: Math.random() * Math.PI * 2,
    }));

    const animate = () => {
      time += 1;
      const w = parseFloat(canvas.style.width);
      const h = parseFloat(canvas.style.height);

      ctx.clearRect(0, 0, w, h);

      // 1. Full-screen Graph Paper Grid
      ctx.lineWidth = 1;
      ctx.strokeStyle = "rgba(0, 51, 160, 0.05)"; 
      ctx.beginPath();
      const gridSize = 40;
      for (let x = 0; x < w; x += gridSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
      }
      for (let y = 0; y < h; y += gridSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
      }
      ctx.stroke();

      // 2. Dynamic Floorplans
      ctx.strokeStyle = "rgba(0, 51, 160, 0.3)"; 
      
      blocks.forEach((block, i) => {
        const currentW = block.baseW + Math.sin(time * block.speedX + block.delay) * 50;
        const currentH = block.baseH + Math.cos(time * block.speedY + block.delay) * 50;
        
        ctx.beginPath();
        ctx.rect(block.baseX, block.baseY, currentW, currentH);
        
        const ext = 30; 
        ctx.moveTo(block.baseX - ext, block.baseY);
        ctx.lineTo(block.baseX + currentW + ext, block.baseY);
        
        ctx.moveTo(block.baseX, block.baseY - ext);
        ctx.lineTo(block.baseX, block.baseY + currentH + ext);
        
        if (i % 2 === 0) {
           ctx.moveTo(block.baseX + currentW, block.baseY + currentH);
           ctx.arc(block.baseX + currentW, block.baseY + currentH, 40, Math.PI, Math.PI * 1.5);
        }
        
        ctx.stroke();
      });

      // 3. Full-screen CAD Crosshair (Follows Mouse OR Finger)
      if (isPointerPresent) {
        ctx.beginPath();
        ctx.strokeStyle = "rgba(26, 26, 26, 0.25)"; 
        ctx.lineWidth = 1.5;
        
        ctx.moveTo(0, pointer.y);
        ctx.lineTo(w, pointer.y);
        
        ctx.moveTo(pointer.x, 0);
        ctx.lineTo(pointer.x, h);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(pointer.x, pointer.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(26, 26, 26, 0.5)";
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
      document.removeEventListener("touchcancel", handleTouchEnd);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 block pointer-events-none"
      style={{ mixBlendMode: "multiply" }}
      aria-hidden="true"
    />
  );
}
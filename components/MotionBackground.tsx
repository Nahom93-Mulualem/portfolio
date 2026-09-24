"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  colorDark: string;
  colorLight: string;
}

export default function MotionBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let isDark = document.documentElement.classList.contains("dark");

    // Palette aligned with brand: Purple (#7C3AED), Violet (#8B5CF6), Indigo (#6366F1)
    const particleColorsDark = [
      "rgba(139, 92, 246, 0.75)", // violet-500
      "rgba(124, 58, 237, 0.8)",  // brand purple #7C3AED
      "rgba(99, 102, 241, 0.7)",  // indigo-500
      "rgba(167, 139, 250, 0.65)", // purple-400
    ];

    const particleColorsLight = [
      "rgba(124, 58, 237, 0.45)", // brand purple
      "rgba(99, 102, 241, 0.4)",  // indigo-500
      "rgba(109, 40, 217, 0.4)",  // brand purple dark
      "rgba(139, 92, 246, 0.35)", // violet-500
    ];

    // Mouse coordinates (normalized to window)
    const mouse = {
      x: -1000,
      y: -1000,
      radius: 170, // interaction radius
      isActive: false,
    };

    // Reduced motion check
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const speedMultiplier = prefersReducedMotion ? 0.2 : 0.65;

    let particles: Particle[] = [];

    // Observe dark mode changes on <html>
    const observer = new MutationObserver(() => {
      isDark = document.documentElement.classList.contains("dark");
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    const initParticles = () => {
      width = window.innerWidth;
      height = window.innerHeight;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);

      // Determine count based on screen area
      let count = Math.floor((width * height) / 18000);
      if (width < 640) count = Math.min(count, 35);
      else if (width < 1024) count = Math.min(count, 55);
      else count = Math.min(Math.max(count, 60), 95);

      particles = [];
      for (let i = 0; i < count; i++) {
        const radius = Math.random() * 1.8 + 1.2;
        const colorIdx = Math.floor(Math.random() * particleColorsDark.length);
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * speedMultiplier,
          vy: (Math.random() - 0.5) * speedMultiplier,
          radius,
          baseRadius: radius,
          colorDark: particleColorsDark[colorIdx],
          colorLight: particleColorsLight[colorIdx],
        });
      }
    };

    initParticles();

    // Mouse event handlers (on window to not require pointer-events on canvas)
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.isActive = true;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
      mouse.isActive = false;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
        mouse.isActive = true;
      }
    };

    const handleTouchEnd = () => {
      mouse.x = -1000;
      mouse.y = -1000;
      mouse.isActive = false;
    };

    // Click wave impulse
    const handleClick = (e: MouseEvent) => {
      const clickX = e.clientX;
      const clickY = e.clientY;
      particles.forEach((p) => {
        const dx = p.x - clickX;
        const dy = p.y - clickY;
        const dist = Math.hypot(dx, dy);
        if (dist < 220 && dist > 0) {
          const force = (220 - dist) / 220;
          p.vx += (dx / dist) * force * 2.5;
          p.vy += (dy / dist) * force * 2.5;
        }
      });
    };

    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(initParticles, 150);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    window.addEventListener("click", handleClick, { passive: true });
    window.addEventListener("resize", handleResize);

    // Visibility change: pause when tab inactive to save power
    let isTabVisible = true;
    const handleVisibilityChange = () => {
      isTabVisible = !document.hidden;
      if (isTabVisible) {
        lastTime = performance.now();
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Animation Loop
    let lastTime = performance.now();
    const maxLinkDist = 135;
    const maxMouseLinkDist = 160;

    const render = (time: number) => {
      if (!isTabVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      const dt = Math.min((time - lastTime) / 16.67, 2);
      lastTime = time;

      ctx.clearRect(0, 0, width, height);

      // Render & update particles
      const pLen = particles.length;
      for (let i = 0; i < pLen; i++) {
        const p = particles[i];

        // Physics movement
        p.x += p.vx * dt;
        p.y += p.vy * dt;

        // Friction to return back to normal speed after mouse impulse
        p.vx *= 0.99;
        p.vy *= 0.99;

        // Keep min drifting speed
        if (Math.abs(p.vx) < 0.1) p.vx += (Math.random() - 0.5) * 0.05;
        if (Math.abs(p.vy) < 0.1) p.vy += (Math.random() - 0.5) * 0.05;

        // Bounce gently off bounds
        if (p.x < 0) {
          p.x = 0;
          p.vx *= -1;
        } else if (p.x > width) {
          p.x = width;
          p.vx *= -1;
        }

        if (p.y < 0) {
          p.y = 0;
          p.vy *= -1;
        } else if (p.y > height) {
          p.y = height;
          p.vy *= -1;
        }

        // Mouse interaction (elastic push & grow)
        if (mouse.isActive) {
          const mdx = p.x - mouse.x;
          const mdy = p.y - mouse.y;
          const mDist = Math.hypot(mdx, mdy);

          if (mDist < mouse.radius && mDist > 0) {
            const pushFactor = (1 - mDist / mouse.radius) * 0.8;
            p.x += (mdx / mDist) * pushFactor * 3;
            p.y += (mdy / mDist) * pushFactor * 3;
            p.radius = p.baseRadius * (1 + (1 - mDist / mouse.radius) * 0.8);
          } else {
            p.radius += (p.baseRadius - p.radius) * 0.1;
          }

          // Draw connection to mouse
          if (mDist < maxMouseLinkDist) {
            const alpha = (1 - mDist / maxMouseLinkDist) * (isDark ? 0.35 : 0.22);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = isDark
              ? `rgba(167, 139, 250, ${alpha})`
              : `rgba(124, 58, 237, ${alpha})`;
            ctx.lineWidth = 1.2;
            ctx.stroke();
          }
        } else {
          p.radius += (p.baseRadius - p.radius) * 0.1;
        }

        // Draw particle node
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = isDark ? p.colorDark : p.colorLight;

        // Subtle glow effect for dark mode
        if (isDark) {
          ctx.shadowBlur = 6;
          ctx.shadowColor = "rgba(139, 92, 246, 0.4)";
        } else {
          ctx.shadowBlur = 0;
        }

        ctx.fill();

        // Connect nearby particles
        for (let j = i + 1; j < pLen; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.hypot(dx, dy);

          if (dist < maxLinkDist) {
            const lineAlpha = (1 - dist / maxLinkDist) * (isDark ? 0.22 : 0.12);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = isDark
              ? `rgba(139, 92, 246, ${lineAlpha})`
              : `rgba(124, 58, 237, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      clearTimeout(resizeTimeout);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("click", handleClick);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    >
      {/* Subtle Aurora Ambient Glows to enrich depth behind particles */}
      <div className="absolute -top-32 -left-32 w-96 h-96 sm:w-[520px] sm:h-[520px] bg-purple-600/10 dark:bg-purple-600/15 rounded-full blur-[100px] pointer-events-none transition-colors duration-500" />
      <div className="absolute top-1/2 -right-32 w-80 h-80 sm:w-[480px] sm:h-[480px] bg-indigo-600/10 dark:bg-indigo-600/12 rounded-full blur-[100px] pointer-events-none transition-colors duration-500" />
      <div className="absolute -bottom-32 left-1/3 w-96 h-96 sm:w-[500px] sm:h-[500px] bg-purple-500/8 dark:bg-purple-500/12 rounded-full blur-[110px] pointer-events-none transition-colors duration-500" />

      {/* Canvas Particle Network */}
      <canvas
        ref={canvasRef}
        className="block w-full h-full pointer-events-none"
      />
    </div>
  );
}

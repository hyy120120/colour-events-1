"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

export default function SmoothScrollProvider({ children }) {
  const pathname = usePathname();
  const lenisRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis Smooth Scroll with inertia & momentum lerp
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Natural exponential easing
      direction: "vertical",
      gestureDirection: "vertical",
      smoothTouch: false, // Native mobile touch response for high responsiveness
      touchMultiplier: 2,
      lerp: 0.08, // Buttery smooth momentum lerp
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  // Reset scroll position on route change
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
  }, [pathname]);

  return <>{children}</>;
}

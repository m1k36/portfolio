"use client";

import { useEffect, useRef } from "react";

const INTERSECTION_THRESHOLD = 0.15;

export default function AnimateOnScroll({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const delayRef = useRef(delay);
  delayRef.current = delay;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transitionDelay = `${delayRef.current}ms`;
          el.classList.add("animate-in");
          observer.unobserve(el);
        }
      },
      { threshold: INTERSECTION_THRESHOLD }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`animate-hidden ${className}`}>
      {children}
    </div>
  );
}

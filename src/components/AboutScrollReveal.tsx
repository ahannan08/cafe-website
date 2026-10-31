"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type AboutScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  style?: React.CSSProperties;
  onVisible?: (el: HTMLElement) => void;
};

export function AboutScrollReveal({
  children,
  className,
  delayMs = 0,
  onVisible,
  style,
}: AboutScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const onVisibleRef = useRef(onVisible);
  onVisibleRef.current = onVisible;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reveal = () => {
      el.classList.add("about-rv-on");
      onVisibleRef.current?.(el);
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            reveal();
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    io.observe(el);
    if (el.getBoundingClientRect().top < window.innerHeight * 0.92) {
      reveal();
    }

    return () => io.disconnect();
  }, [onVisible]);

  return (
    <div
      ref={ref}
      className={cn("about-rv", className)}
      style={{ ...style, transitionDelay: `${delayMs}ms` }}
    >
      {children}
    </div>
  );
}

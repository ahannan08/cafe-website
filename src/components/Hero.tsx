"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { cafeData, type Slide } from "@/lib/cafe-data";
import { Button } from "./Button";
import { cn } from "@/lib/utils";

const SLIDE_DURATION_MS = 6500;
const GRADIENT_CLASSES = ["hero-slide-f0", "hero-slide-f1", "hero-slide-f2"];

function AnimatedHeadline({ slide }: { slide: Slide }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(false);
    const id = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(id);
  }, [slide]);

  const lineWords = slide.line.split(" ").map((w, i) => ({
    text: w,
    delay: i * 90,
  }));
  const accentWords = slide.accent.split(" ").map((w, i) => ({
    text: w,
    delay: (slide.line.split(" ").length + i) * 90,
  }));

  return (
    <h1
      className={cn(
        "font-serif text-[clamp(46px,8.4vw,120px)] leading-[0.98] font-light tracking-[-0.035em]",
        visible && "hero-headline-in",
      )}
    >
      {lineWords.map((w) => (
        <span key={`l-${w.text}-${w.delay}`} className="hero-word">
          <span
            className="inline-block"
            style={{ transitionDelay: `${w.delay}ms` }}
          >
            {w.text}&nbsp;
          </span>
        </span>
      ))}
      <br />
      {accentWords.map((w) => (
        <span key={`a-${w.text}-${w.delay}`} className="hero-word">
          <span
            className="inline-block italic text-caramel"
            style={{ transitionDelay: `${w.delay}ms` }}
          >
            {w.text}&nbsp;
          </span>
        </span>
      ))}
    </h1>
  );
}

export function Hero() {
  const slides = cafeData.slides;
  const [cur, setCur] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const barRefs = useRef<(HTMLDivElement | null)[]>([]);

  const updateBars = useCallback((index: number) => {
    barRefs.current.forEach((el, k) => {
      if (!el) return;
      el.classList.remove("hero-bar-run", "hero-bar-done");
      void el.offsetWidth;
      if (k < index) el.classList.add("hero-bar-done");
      if (k === index) el.classList.add("hero-bar-run");
    });
  }, []);

  const go = useCallback(
    (index: number) => {
      const next = ((index % slides.length) + slides.length) % slides.length;
      setCur(next);
      updateBars(next);
      if (timerRef.current) clearInterval(timerRef.current);
      timerRef.current = setInterval(() => {
        setCur((c) => {
          const n = (c + 1) % slides.length;
          updateBars(n);
          return n;
        });
      }, SLIDE_DURATION_MS);
    },
    [slides.length, updateBars],
  );

  useEffect(() => {
    go(0);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [go]);

  const slide = slides[cur];

  return (
    <section
      id="home"
      className="relative flex h-[max(100svh,700px)] items-end overflow-hidden bg-ink text-cream"
    >
      <div className="absolute inset-0">
        {slides.map((s, i) => (
          <div
            key={s.eyebrow}
            className={cn(
              "hero-slide absolute inset-0 bg-cover bg-center",
              GRADIENT_CLASSES[i % 3],
              i === cur && "hero-slide-active",
            )}
            style={s.img ? { backgroundImage: `url(${s.img})` } : undefined}
          />
        ))}
      </div>
      <div className="hero-shade pointer-events-none absolute inset-0" />
      <div className="relative z-[2] max-w-[1000px] px-[var(--section-pad)] pb-[150px] max-[860px]:pb-[130px]">
        <p className="mb-[22px] text-[13px] tracking-[0.16em] text-caramel uppercase">
          {slide.eyebrow}
        </p>
        <AnimatedHeadline key={cur} slide={slide} />
        <p className="mt-[26px] mb-[34px] max-w-[480px] text-[clamp(15px,1.4vw,18px)] text-cream/78">
          {slide.sub}
        </p>
        <div className="flex flex-wrap gap-3">
          <Button href="#offer">Explore the cafe</Button>
          <Button href="#reviews" variant="ghost">
            Read reviews
          </Button>
        </div>
      </div>
      <div className="absolute right-[var(--section-pad)] bottom-9 left-[var(--section-pad)] z-[3] flex items-center gap-7">
        <div className="flex max-w-[360px] flex-1 gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              className="hero-bar flex flex-1 cursor-pointer border-0 bg-transparent p-0"
              onClick={() => go(i)}
              aria-label={`Go to slide ${i + 1}`}
            >
              <div
                ref={(el) => {
                  barRefs.current[i] = el;
                }}
                className="hero-bar-track h-0.5 w-full overflow-hidden bg-cream/25"
              >
                <i className="hero-bar-fill block h-full w-0 bg-caramel not-italic" />
              </div>
            </button>
          ))}
        </div>
        <div className="ml-auto hidden text-[13px] tracking-[0.1em] text-cream/70 min-[861px]:block">
          <span>{String(cur + 1).padStart(2, "0")}</span> /{" "}
          <span>{String(slides.length).padStart(2, "0")}</span>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-cream/35 bg-ink/30 text-lg text-cream transition-colors hover:border-caramel hover:bg-caramel hover:text-ink"
            onClick={() => go(cur - 1)}
            aria-label="Previous slide"
          >
            ←
          </button>
          <button
            type="button"
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-cream/35 bg-ink/30 text-lg text-cream transition-colors hover:border-caramel hover:bg-caramel hover:text-ink"
            onClick={() => go(cur + 1)}
            aria-label="Next slide"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import {
  aboutHeadline,
  aboutIngredients,
  aboutStats,
  aboutTimeline,
} from "@/lib/about-data";
import { cn } from "@/lib/utils";
import { AboutScrollReveal } from "./AboutScrollReveal";

function animateStat(el: HTMLElement) {
  el.querySelectorAll<HTMLElement>("[data-stat-to]").forEach((node) => {
    const to = Number(node.dataset.statTo);
    const decimals = Number(node.dataset.statDec ?? 0);
    const suffix = node.dataset.statSuf ?? "";
    const start = performance.now();

    const frame = (t: number) => {
      const p = Math.min((t - start) / 1400, 1);
      const eased = 1 - (1 - p) ** 3;
      const value = to * eased;
      node.textContent = value.toFixed(decimals) + (p === 1 ? suffix : "");
      if (p < 1) requestAnimationFrame(frame);
    };

    requestAnimationFrame(frame);
  });
}

export function AboutHero() {
  const [go, setGo] = useState(false);
  const statsRevealed = useRef(false);

  useEffect(() => {
    const id = requestAnimationFrame(() =>
      requestAnimationFrame(() => setGo(true)),
    );
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section
      id="about-hero"
      className="about-hero relative flex min-h-svh flex-col justify-between gap-12 overflow-hidden bg-espresso px-[var(--section-pad)] pt-[clamp(110px,14vw,150px)] pb-[clamp(36px,5vw,64px)] text-cream"
    >
      <div className="pointer-events-none absolute top-[-12vw] right-[-10vw] aspect-square w-[46vw] rounded-full border border-cream/12" />
      <div className="pointer-events-none absolute top-[4vw] right-[2vw] aspect-square w-[24vw] rounded-full bg-caramel opacity-[0.16]" />

      <div className="relative z-[1] max-w-[1050px]">
        <p className="mb-[22px] text-xs tracking-[0.16em] text-caramel uppercase">
          About Brew&amp;Bean · Since 2018
        </p>
        <h1
          className={cn(
            "font-serif text-[clamp(42px,7.4vw,112px)] leading-none font-light tracking-[-0.035em]",
            go && "about-headline-go",
          )}
          aria-label="Started with one roaster and a very big idea."
        >
          {aboutHeadline.map((word, i) => (
            <span key={`${word.text}-${i}`} className="about-headline-word">
              <span
                className={cn("inline-block", word.accent && "italic text-caramel")}
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                {word.text}&nbsp;
              </span>
            </span>
          ))}
        </h1>
        <p className="mt-[26px] max-w-[520px] text-[clamp(15px,1.4vw,18px)] text-cream/75">
          From a 200 sq ft corner on Coffee Lane to a neighborhood favorite, we
          still roast every single batch ourselves.
        </p>
      </div>

      <div className="relative z-[1] grid grid-cols-1 gap-4 min-[1001px]:grid-cols-3">
        <AboutScrollReveal className="rounded-[28px] border border-cream/14 bg-cream/5 p-[26px]">
          <h3 className="mb-[18px] text-xs font-medium tracking-[0.14em] text-caramel uppercase">
            How it started
          </h3>
          <div className="font-[family-name:var(--font-anton)] text-[64px] leading-none tracking-[0.02em]">
            2018
          </div>
          <p className="my-2 text-sm text-cream/70">
            One roaster, one counter, twelve seats.
          </p>
          <ul className="m-0 list-none p-0 text-sm">
            {aboutTimeline.map((item) => (
              <li
                key={item.year}
                className="flex gap-3.5 border-t border-cream/12 py-2.5"
              >
                <b className="min-w-[42px] font-medium text-caramel">{item.year}</b>
                {item.label}
              </li>
            ))}
          </ul>
        </AboutScrollReveal>

        <AboutScrollReveal delayMs={100} className="rounded-[28px] border border-cream/14 bg-cream/5 p-[26px]">
          <h3 className="mb-[18px] text-xs font-medium tracking-[0.14em] text-caramel uppercase">
            What goes in your cup
          </h3>
          <ul className="m-0 list-none p-0 text-sm">
            {aboutIngredients.map((item) => (
              <li
                key={item.name}
                className="flex justify-between gap-3 border-t border-cream/12 py-2.5"
              >
                <b className="font-medium">{item.name}</b>
                <span className="text-right text-cream/65">{item.detail}</span>
              </li>
            ))}
          </ul>
        </AboutScrollReveal>

        <AboutScrollReveal
          delayMs={200}
          className="rounded-[28px] border border-cream/14 bg-cream/5 p-[26px]"
          onVisible={(el) => {
            if (statsRevealed.current) return;
            statsRevealed.current = true;
            animateStat(el);
          }}
        >
          <h3 className="mb-[18px] text-xs font-medium tracking-[0.14em] text-caramel uppercase">
            Proud moments
          </h3>
          <div className="grid grid-cols-2 gap-x-3 gap-y-[18px]">
            {aboutStats.map((stat) => (
              <div key={stat.label}>
                <b
                  className="block font-[family-name:var(--font-anton)] text-[44px] leading-none tracking-[0.02em] font-normal"
                  data-stat-to={stat.to}
                  data-stat-dec={stat.decimals}
                  data-stat-suf={stat.suffix}
                >
                  0
                </b>
                <span className="text-xs text-cream/65">{stat.label}</span>
              </div>
            ))}
          </div>
          <p className="mt-[18px] border-t border-cream/12 pt-3.5 text-[13px] text-cream/80">
            <i className="text-caramel not-italic">✦</i> Best specialty cafe,
            Hyderabad 2025
          </p>
        </AboutScrollReveal>
      </div>
    </section>
  );
}

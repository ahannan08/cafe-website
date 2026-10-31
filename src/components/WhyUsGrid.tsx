"use client";

import { useEffect, useRef } from "react";
import { whyUsCards, type WhyUsCard } from "@/lib/why-us-data";
import { CafeIcon } from "@/lib/icons";
import { cn } from "@/lib/utils";
import { WhyUsHero } from "./WhyUsHero";

const variantStyles: Record<WhyUsCard["variant"], string> = {
  sand: "bg-sand text-espresso [&_.why-icon-wrap]:bg-espresso/9",
  dark: "bg-[#2A1D16] text-cream [&_.why-icon-wrap]:bg-cream/12 [&_.why-icon-wrap]:text-caramel",
  car: "bg-caramel text-ink [&_.why-icon-wrap]:bg-ink/12",
};

const slotStyles: Record<WhyUsCard["slot"], string> = {
  c1: "why-slot-c1",
  c2: "why-slot-c2",
  c3: "why-slot-c3",
  c4: "why-slot-c4",
  c5: "why-slot-c5",
  c6: "why-slot-c6",
  c7: "why-slot-c7",
  c8: "why-slot-c8",
};

function EqBars() {
  const delays = [0, -0.2, -0.7, -0.4, -0.9, -0.1, -0.6, -0.3];
  return (
    <div className="mt-1.5 flex h-[90px] items-end gap-[7px]" aria-hidden>
      {delays.map((d, i) => (
        <i
          key={i}
          className="why-eq-bar block w-[9px] rounded-[5px] bg-caramel not-italic"
          style={{ animationDelay: `${d}s` }}
        />
      ))}
    </div>
  );
}

function CoffeeSteam() {
  return (
    <svg
      viewBox="0 0 70 70"
      aria-hidden
      className="why-steam absolute top-[26px] right-[22px] h-[70px] w-[70px] fill-none stroke-ink/50 stroke-[4] [stroke-linecap:round]"
    >
      <path d="M18 62q-9-12 0-24t0-24" />
      <path d="M35 62q-9-12 0-24t0-24" />
      <path d="M52 62q-9-12 0-24t0-24" />
    </svg>
  );
}

function FeatureCard({ card }: { card: WhyUsCard }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reveal = () => el.classList.add("why-card-on");

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            reveal();
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -5% 0px" },
    );

    io.observe(el);
    if (el.getBoundingClientRect().top < window.innerHeight * 0.92) {
      reveal();
    }

    return () => io.disconnect();
  }, []);

  return (
    <article
      ref={ref}
      className={cn(
        "why-card relative flex flex-col justify-between overflow-hidden rounded-[30px] p-[26px] opacity-0 translate-y-7 transition-[opacity,transform,box-shadow] duration-[800ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:-translate-y-1.5 hover:shadow-[0_24px_40px_-24px_rgba(59,42,32,0.45)]",
        variantStyles[card.variant],
        slotStyles[card.slot],
      )}
      style={{ transitionDelay: `${card.delayMs}ms` }}
    >
      {card.steam ? <CoffeeSteam /> : null}
      <div className="why-icon-wrap grid h-[46px] w-[46px] place-items-center rounded-[14px] transition-transform duration-400 [.why-card-on:hover_&]:rotate-[-8deg] [.why-card-on:hover_&]:scale-[1.08]">
        <CafeIcon name={card.icon} />
      </div>
      <div>
        {card.ambience ? <EqBars /> : null}
        <h3
          className={cn(
            "mb-1.5 font-serif leading-[1.15] tracking-[-0.02em]",
            card.largeTitle
              ? "mt-[22px] text-[clamp(26px,2.6vw,34px)]"
              : "text-[clamp(21px,2vw,27px)]",
            card.ambience && "mt-[22px]",
          )}
        >
          {card.title}
        </h3>
        <p className="max-w-[260px] text-sm opacity-72">{card.text}</p>
      </div>
    </article>
  );
}

export function WhyUsGrid() {
  const c1 = whyUsCards.find((c) => c.slot === "c1")!;
  const rest = whyUsCards.filter((c) => c.slot !== "c1");

  return (
    <div className="why-grid">
      <FeatureCard key={c1.slot} card={c1} />
      <WhyUsHero />
      {rest.map((card) => (
        <FeatureCard key={card.slot} card={card} />
      ))}
    </div>
  );
}

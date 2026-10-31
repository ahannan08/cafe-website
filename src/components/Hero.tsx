"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { bannerDrinks, type BannerDrink } from "@/lib/banner-data";
import { DrinkVisual, RoastedStamp } from "./DrinkIllustrations";
import { cn } from "@/lib/utils";

const SLIDE_DURATION_MS = 6500;

function applyBannerTheme(d: BannerDrink) {
  const root = document.documentElement;
  root.style.setProperty("--banner-bg", d.bg);
  root.style.setProperty("--banner-fg", d.fg);
  root.style.setProperty("--banner-disc", d.disc);
  root.style.setProperty("--banner-acc", d.acc);
}

function DrinkTitle({ name, animate }: { name: string; animate: boolean }) {
  return (
    <div
      className={cn(
        "banner-word pointer-events-none absolute inset-x-0 top-[15%] z-[1] text-center font-[family-name:var(--font-anton)] text-[clamp(84px,17vw,270px)] leading-[0.92] tracking-[0.01em] whitespace-nowrap uppercase max-[860px]:top-[17%]",
        animate && "banner-in",
      )}
      aria-hidden
    >
      {[...name].map((c, k) => (
        <span
          key={`${name}-${k}-${c}`}
          className="banner-letter inline-block"
          style={{ transitionDelay: `${k * 55}ms` }}
        >
          {c === " " ? "\u00A0" : c}
        </span>
      ))}
    </div>
  );
}

export function Hero() {
  const drinks = bannerDrinks;
  const [cur, setCur] = useState(0);
  const [animateIn, setAnimateIn] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const drink = drinks[cur];

  const render = useCallback(
    (index: number) => {
      const next = ((index % drinks.length) + drinks.length) % drinks.length;
      setAnimateIn(false);
      setCur(next);
      applyBannerTheme(drinks[next]);

      if (timerRef.current) clearInterval(timerRef.current);
      timerRef.current = setInterval(() => {
        setAnimateIn(false);
        setCur((c) => {
          const n = (c + 1) % drinks.length;
          applyBannerTheme(drinks[n]);
          return n;
        });
      }, SLIDE_DURATION_MS);
    },
    [drinks],
  );

  useEffect(() => {
    applyBannerTheme(drinks[0]);
    render(0);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [drinks, render]);

  useEffect(() => {
    const id = requestAnimationFrame(() => setAnimateIn(true));
    return () => cancelAnimationFrame(id);
  }, [cur]);

  return (
    <section
      id="home"
      className={cn(
        "banner-hero relative h-[max(100svh,720px)] overflow-hidden transition-[background-color,color] duration-[900ms]",
        animateIn && "banner-in",
      )}
      style={{
        backgroundColor: "var(--banner-bg)",
        color: "var(--banner-fg)",
      }}
    >
      <DrinkTitle name={drink.name} animate={animateIn} />

      <div
        className="absolute bottom-[17%] left-1/2 z-[2] h-[min(22vw,31vh)] w-[min(44vw,62vh)] -translate-x-1/2 rounded-b-[999px] bg-[var(--banner-disc)] max-[860px]:bottom-[30%] max-[860px]:h-[35vw] max-[860px]:w-[70vw]"
        style={{
          transform: animateIn
            ? "translateX(-50%) scaleY(1)"
            : "translateX(-50%) scaleY(0)",
          transformOrigin: "50% 0",
          transition:
            "transform 0.9s cubic-bezier(0.2, 0.8, 0.2, 1) 0.15s, background-color 0.9s",
        }}
      />

      <div className="banner-drink absolute bottom-[calc(17%-14px)] left-1/2 z-[3] aspect-[3/5] h-[min(64%,calc(66vw+90px))] -translate-x-1/2 max-[860px]:bottom-[calc(30%-10px)] max-[860px]:h-[40%]">
        <div
          className={cn(
            "h-full w-full transition-[transform,opacity] duration-1000 ease-[cubic-bezier(0.2,0.9,0.3,1.2)]",
            animateIn ? "banner-drink-in" : "opacity-0 -translate-y-[70px] scale-[0.92]",
          )}
          style={{ transitionDelay: "0.2s" }}
        >
          <DrinkVisual drink={drink} />
        </div>
      </div>

      <div className="absolute bottom-[22%] left-[var(--banner-pad)] z-[4] w-[min(300px,28vw)] max-[860px]:inset-x-5 max-[860px]:bottom-[88px] max-[860px]:w-auto max-[860px]:text-center">
        <p className="mb-2.5 text-[11px] tracking-[0.16em] text-[var(--banner-acc)] uppercase">
          How it&apos;s made
        </p>
        <p className="max-[860px]:hidden text-[15px] leading-[1.65] opacity-90">
          {drink.blurb}
        </p>
        <p className="my-3.5 max-[860px]:hidden text-xs tracking-[0.06em] uppercase opacity-65">
          {drink.method}
        </p>
        <div className="flex items-center gap-2.5 max-[860px]:justify-center">
          <Link
            href="#menu"
            className="inline-flex items-center gap-2.5 rounded-full border-0 bg-[var(--banner-fg)] px-6 py-3.5 text-sm font-medium text-[var(--banner-bg)] no-underline transition-[transform,background-color,color] duration-250 hover:-translate-y-0.5"
          >
            View full menu →
          </Link>
          <button
            type="button"
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-[color-mix(in_srgb,var(--banner-fg)_45%,transparent)] bg-transparent text-[17px] transition-[background-color,color] duration-250 hover:bg-[var(--banner-fg)] hover:text-[var(--banner-bg)]"
            onClick={() => render(cur - 1)}
            aria-label="Previous drink"
          >
            ←
          </button>
          <button
            type="button"
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-[color-mix(in_srgb,var(--banner-fg)_45%,transparent)] bg-transparent text-[17px] transition-[background-color,color] duration-250 hover:bg-[var(--banner-fg)] hover:text-[var(--banner-bg)]"
            onClick={() => render(cur + 1)}
            aria-label="Next drink"
          >
            →
          </button>
        </div>
      </div>

      <div className="absolute right-[var(--banner-pad)] bottom-[22%] z-[4] text-center max-[860px]:top-[84px] max-[860px]:right-4 max-[860px]:bottom-auto">
        <RoastedStamp />
        <div className="max-[860px]:hidden">
          <small className="mb-0 block text-[11px] tracking-[0.14em] uppercase opacity-65">
            from
          </small>
          <b className="font-[family-name:var(--font-anton)] text-[34px] tracking-[0.02em] font-normal">
            {drink.price}
          </b>
        </div>
      </div>

      <div
        className={cn(
          "absolute inset-x-0 bottom-[calc(env(safe-area-inset-bottom,0px)+30px)] z-[4] flex flex-wrap items-center justify-center gap-x-5 gap-y-2 px-[var(--banner-pad)] text-center font-[family-name:var(--font-anton)] text-[clamp(18px,2.6vw,38px)] tracking-[0.03em] uppercase max-[860px]:hidden",
          animateIn && "banner-in",
        )}
      >
        {drink.ing.map((t, k) => (
          <span key={t} className="inline-flex items-center gap-x-5">
            {k > 0 && (
              <span className="text-[0.8em] text-[var(--banner-acc)] not-italic">
                ✦
              </span>
            )}
            <span
              className="banner-strip-item inline-block"
              style={{ transitionDelay: `${500 + k * 120}ms` }}
            >
              {t}
            </span>
          </span>
        ))}
      </div>

      <h1 className="sr-only">{drink.name}</h1>
    </section>
  );
}

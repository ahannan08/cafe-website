"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function Nav() {
  const [onBanner, setOnBanner] = useState(true);

  useEffect(() => {
    const hero = document.getElementById("home");
    if (!hero) return;

    const io = new IntersectionObserver(
      ([entry]) => setOnBanner(entry.isIntersecting),
      { threshold: 0.35 },
    );
    io.observe(hero);
    return () => io.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "fixed top-[calc(env(safe-area-inset-top,0px)+18px)] left-1/2 z-20 flex w-[min(1100px,calc(100%-28px))] -translate-x-1/2 items-center justify-between rounded-full border py-2 pr-2.5 pl-6 backdrop-blur-[12px] transition-[border-color,background-color,color] duration-[900ms]",
        onBanner
          ? "border-[color-mix(in_srgb,var(--banner-fg)_22%,transparent)] bg-[color-mix(in_srgb,var(--banner-fg)_7%,transparent)] text-[var(--banner-fg)]"
          : "border-cream/16 bg-ink/35 text-cream",
      )}
    >
      <Link
        href="#home"
        className="font-[family-name:var(--font-anton)] text-[22px] tracking-[0.04em] uppercase no-underline"
      >
        Brew
        <em
          className={cn(
            "not-italic",
            onBanner ? "text-[var(--banner-acc)]" : "text-caramel",
          )}
        >
          &amp;
        </em>
        Bean
      </Link>
      <nav className="hidden items-center gap-[30px] text-sm min-[861px]:flex">
        <Link href="#home" className="opacity-80 transition-opacity hover:opacity-100">
          Home
        </Link>
        <Link href="#offer" className="opacity-80 transition-opacity hover:opacity-100">
          Why us
        </Link>
        <Link href="#reviews" className="opacity-80 transition-opacity hover:opacity-100">
          Reviews
        </Link>
        <Link href="#visit" className="opacity-80 transition-opacity hover:opacity-100">
          Visit
        </Link>
      </nav>
      <Link
        href="#visit"
        className={cn(
          "inline-flex items-center rounded-full border-0 px-[18px] py-2 text-[13px] font-medium no-underline transition-[transform,background-color,color] duration-[900ms] hover:-translate-y-0.5",
          onBanner
            ? "bg-[var(--banner-fg)] text-[var(--banner-bg)]"
            : "bg-caramel text-ink hover:bg-[#d99a58]",
        )}
      >
        Reserve
      </Link>
    </header>
  );
}

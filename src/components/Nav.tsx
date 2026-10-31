"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { mainNavLinks } from "@/lib/site-nav";
import { cn } from "@/lib/utils";
import { ReserveModal } from "./ReserveModal";

export function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [onBanner, setOnBanner] = useState(isHome);
  const [reserveOpen, setReserveOpen] = useState(false);

  useEffect(() => {
    if (!isHome) {
      setOnBanner(false);
      return;
    }

    const hero = document.getElementById("home");
    if (!hero) {
      setOnBanner(false);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => setOnBanner(entry.isIntersecting),
      { threshold: 0.35 },
    );
    io.observe(hero);
    return () => io.disconnect();
  }, [isHome, pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-[calc(env(safe-area-inset-top,0px)+18px)] left-1/2 z-20 flex w-[min(1100px,calc(100%-28px))] -translate-x-1/2 items-center gap-2 rounded-full border py-2 pr-2 pl-3 backdrop-blur-[12px] transition-[border-color,background-color,color] duration-[900ms] sm:gap-3 sm:pl-5 sm:pr-2",
          onBanner
            ? "border-[color-mix(in_srgb,var(--banner-fg)_22%,transparent)] bg-[color-mix(in_srgb,var(--banner-fg)_7%,transparent)] text-[var(--banner-fg)]"
            : "border-cream/16 bg-ink/35 text-cream",
        )}
      >
        <Link
          href="/"
          className="shrink-0 font-[family-name:var(--font-anton)] text-base tracking-[0.04em] uppercase no-underline sm:text-[20px]"
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

        <nav
          className="flex min-w-0 flex-1 items-center justify-center gap-2.5 overflow-x-auto text-[10px] whitespace-nowrap [scrollbar-width:none] sm:gap-4 sm:text-xs md:text-sm [&::-webkit-scrollbar]:hidden"
          aria-label="Main"
        >
          {mainNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "shrink-0 opacity-80 transition-opacity hover:opacity-100",
                pathname === link.href && "font-medium opacity-100 text-caramel",
                pathname === link.href &&
                  onBanner &&
                  "text-[var(--banner-acc)]",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setReserveOpen(true)}
          className={cn(
            "shrink-0 cursor-pointer rounded-full border-0 px-3 py-2 text-[10px] font-medium transition-[transform,background-color,color] sm:px-4 sm:text-xs md:text-[13px] hover:-translate-y-0.5",
            onBanner
              ? "bg-[var(--banner-fg)] text-[var(--banner-bg)]"
              : "bg-caramel text-ink hover:bg-[#d99a58]",
          )}
        >
          Reserve
        </button>
      </header>

      <ReserveModal open={reserveOpen} onClose={() => setReserveOpen(false)} />
    </>
  );
}

"use client";

import Link from "next/link";
import { useState } from "react";
import {
  menuCategories,
  menuStyles,
  type MenuItem,
} from "@/lib/menu-data";
import { cn } from "@/lib/utils";
import { MenuDrinkArt } from "./MenuDrinkArt";

function PageMenuCard({
  item,
  index,
  tabIndex,
}: {
  item: MenuItem;
  index: number;
  tabIndex: number;
}) {
  const style = menuStyles[item.s];

  return (
    <article className="group/card flex flex-col rounded-2xl border border-espresso/10 bg-white p-3 shadow-sm transition-shadow hover:shadow-md">
      <div className="relative grid h-[200px] place-items-center overflow-hidden rounded-xl bg-sand sm:h-[220px]">
        <span className="absolute top-2.5 right-2.5 rounded-full bg-white px-2.5 py-1 text-xs font-medium">
          ★ {item.r}
        </span>
        <MenuDrinkArt
          styleKey={item.s}
          style={style}
          clipSuffix={`page-${tabIndex}-${index}`}
        />
      </div>
      <h3 className="mt-4 font-[family-name:var(--font-anton)] text-lg tracking-wide uppercase">
        {item.n}
      </h3>
      <p className="mt-1 line-clamp-2 text-xs text-mocha">{item.d}</p>
      <p className="mt-2 font-[family-name:var(--font-anton)] text-caramel">
        {item.p}
      </p>
      <Link
        href="/contact"
        className="mt-3 block rounded-full border border-espresso/15 py-2.5 text-center font-[family-name:var(--font-anton)] text-xs tracking-wider uppercase no-underline text-espresso transition-colors group-hover/card:bg-espresso group-hover/card:text-cream hover:bg-espresso hover:text-cream"
      >
        Order
      </Link>
    </article>
  );
}

export function MenuPageView() {
  const [activeTab, setActiveTab] = useState(0);
  const category = menuCategories[activeTab];

  return (
    <div className="min-h-screen bg-[#F0E6D6]">
      <div className="border-b border-espresso/10 bg-espresso px-[var(--section-pad)] py-10 text-cream sm:py-14">
        <p className="text-xs tracking-[0.16em] text-caramel uppercase">Menu</p>
        <h1 className="mt-2 max-w-2xl font-serif text-[clamp(2rem,5vw,3.5rem)] leading-tight font-light tracking-[-0.03em]">
          Drinks we pour <em>every day</em>
        </h1>
        <p className="mt-3 max-w-lg text-sm text-cream/70">
          Four columns on desktop — switch categories to browse the full list.
        </p>
      </div>

      <div className="sticky top-[calc(env(safe-area-inset-top,0px)+72px)] z-10 border-b border-espresso/8 bg-[#F0E6D6]/95 px-[var(--section-pad)] py-3 backdrop-blur-md">
        <div
          className="mx-auto flex max-w-[1400px] gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          role="tablist"
        >
          {menuCategories.map((cat, i) => (
            <button
              key={cat.tab}
              type="button"
              role="tab"
              aria-selected={i === activeTab}
              onClick={() => setActiveTab(i)}
              className={cn(
                "shrink-0 cursor-pointer rounded-full px-5 py-2.5 text-xs font-medium tracking-wide uppercase transition-colors sm:text-sm",
                i === activeTab
                  ? "bg-espresso text-cream"
                  : "bg-white text-espresso hover:bg-sand",
              )}
            >
              {cat.tab}
            </button>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-[var(--section-pad)] py-10">
        <h2 className="mb-6 font-[family-name:var(--font-anton)] text-xl tracking-wide uppercase">
          {category.tab}
        </h2>
        <div
          key={activeTab}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          role="tabpanel"
        >
          {category.items.map((item, i) => (
            <PageMenuCard
              key={`${activeTab}-${item.n}`}
              item={item}
              index={i}
              tabIndex={activeTab}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

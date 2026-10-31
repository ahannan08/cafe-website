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

function MenuCard({
  item,
  index,
  tabIndex,
}: {
  item: MenuItem;
  index: number;
  tabIndex: number;
}) {
  const style = menuStyles[item.s];
  const featured = index === 0;

  return (
    <article
      className="menu-card-rise group/card rounded-[32px] border border-espresso/8 bg-white px-3.5 pt-3.5 pb-[18px] text-center transition-[box-shadow,transform] duration-350 hover:shadow-[0_22px_40px_-22px_rgba(59,42,32,0.35)]"
      style={{ animationDelay: `${index * 110}ms` }}
    >
      <div className="menu-card-img relative grid h-[clamp(250px,26vw,330px)] place-items-center overflow-hidden rounded-3xl bg-sand">
        <span className="absolute top-3.5 right-3.5 flex items-center gap-1 rounded-full bg-white px-3 py-1.5 text-[13px] font-medium">
          <i className="text-caramel not-italic">★</i>
          {item.r}
        </span>
        <MenuDrinkArt
          styleKey={item.s}
          style={style}
          clipSuffix={`${tabIndex}-${index}`}
        />
      </div>
      <h3 className="mt-[22px] mb-1 font-[family-name:var(--font-anton)] text-[26px] tracking-[0.02em] uppercase">
        {item.n}
      </h3>
      <p className="mb-1.5 text-[13px] text-mocha">{item.d}</p>
      <p className="mb-4 font-[family-name:var(--font-anton)] text-[22px] tracking-[0.03em] text-caramel">
        {item.p}
      </p>
      <Link
        href="/contact"
        className={cn(
          "block rounded-full border border-espresso/14 bg-white px-4 py-4 font-[family-name:var(--font-anton)] text-[17px] tracking-[0.06em] uppercase no-underline text-espresso transition-[background-color,color,border-color] duration-300",
          "group-hover/card:border-espresso group-hover/card:bg-espresso group-hover/card:text-cream",
          featured &&
            "border-espresso bg-espresso text-cream group-hover/card:bg-espresso group-hover/card:text-cream",
        )}
      >
        Order now
      </Link>
    </article>
  );
}

export function MenuSection() {
  const [activeTab, setActiveTab] = useState(0);
  const category = menuCategories[activeTab];

  return (
    <section
      id="menu"
      className="bg-cream px-[clamp(14px,3vw,48px)] py-[clamp(24px,4vw,56px)]"
    >
      <div className="mx-auto max-w-[1240px] rounded-[clamp(28px,4vw,48px)] border border-espresso/8 bg-[var(--paper)] px-[clamp(18px,4vw,56px)] pt-[clamp(32px,5vw,64px)] pb-[clamp(32px,4vw,52px)] shadow-[0_30px_60px_-30px_rgba(59,42,32,0.25)]">
        <h2 className="text-center font-[family-name:var(--font-anton)] text-[clamp(46px,8.5vw,124px)] leading-[0.95] font-normal tracking-[0.005em] uppercase">
          Explore our <em className="text-caramel not-italic">menu</em>
        </h2>

        <div
          className="mx-auto mt-[clamp(22px,3vw,40px)] mb-[clamp(28px,4vw,52px)] flex w-max max-w-full overflow-x-auto rounded-full border border-espresso/12 bg-white [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          role="tablist"
          aria-label="Menu categories"
        >
          {menuCategories.map((cat, i) => (
            <button
              key={cat.tab}
              type="button"
              role="tab"
              aria-selected={i === activeTab}
              className={cn(
                "shrink-0 cursor-pointer rounded-full border-0 px-7 py-[18px] text-[13px] font-medium tracking-[0.08em] uppercase transition-[background-color,color] duration-350 max-[600px]:px-5 max-[600px]:py-[15px]",
                i === activeTab
                  ? "bg-espresso text-cream"
                  : "bg-transparent text-espresso hover:bg-sand",
              )}
              onClick={() => setActiveTab(i)}
            >
              {cat.tab}
            </button>
          ))}
        </div>

        <div
          key={activeTab}
          className="grid grid-cols-1 gap-[22px] min-[601px]:grid-cols-2 min-[901px]:grid-cols-3 min-[1201px]:grid-cols-4"
          role="tabpanel"
        >
          {category.items.map((item, i) => (
            <MenuCard
              key={`${activeTab}-${item.n}`}
              item={item}
              index={i}
              tabIndex={activeTab}
            />
          ))}
        </div>

        <div className="mt-[38px] text-center">
          <Link
            href="/menu"
            className="inline-block rounded-full bg-caramel px-8 py-4 text-[15px] font-medium text-ink no-underline transition-transform duration-250 hover:-translate-y-0.5"
          >
            See full menu page →
          </Link>
        </div>
      </div>
    </section>
  );
}

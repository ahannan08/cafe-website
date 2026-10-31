"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { cafeData, type Review } from "@/lib/cafe-data";
import { cn } from "@/lib/utils";

const SLIDE_MS = 8000;
const AVATAR_COLORS = [
  "#C98B4A",
  "#8A6A52",
  "#3B2A20",
  "#D99A58",
  "#6B4A35",
  "#A8693A",
];

function avatarUrl(name: string, index: number) {
  const bg = AVATAR_COLORS[index % AVATAR_COLORS.length].replace("#", "");
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=${bg}&color=fff&size=128&bold=true`;
}

type CardSlot = "left" | "center" | "right";

function TestimonialCard({
  review,
  slot,
  index,
  onSelect,
}: {
  review: Review;
  slot: CardSlot;
  index: number;
  onSelect?: () => void;
}) {
  const isCenter = slot === "center";
  const isRight = slot === "right";

  return (
    <article
      role={onSelect ? "button" : undefined}
      tabIndex={onSelect ? 0 : undefined}
      onClick={onSelect}
      onKeyDown={(e) => {
        if (onSelect && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          onSelect();
        }
      }}
      className={cn(
        "relative flex min-h-[420px] w-full max-w-[360px] flex-col rounded-[28px] px-8 pt-10 pb-9 transition-[transform,opacity,background-color,color,box-shadow] duration-500 ease-out md:min-h-[480px] md:w-[min(32vw,380px)]",
        isCenter &&
          "z-20 scale-100 bg-espresso text-cream shadow-[0_28px_60px_-24px_rgba(59,42,32,0.45)] md:-mx-5 md:scale-[1.03]",
        slot === "left" &&
          "z-10 cursor-pointer bg-sand text-ink md:-mr-8 md:translate-y-4",
        isRight &&
          "z-0 cursor-pointer bg-sand text-ink/45 opacity-90 md:-ml-8 md:translate-y-6",
        !isCenter && "max-md:hidden",
      )}
    >
      <div
        className={cn(
          "mx-auto mb-8 h-16 w-16 overflow-hidden rounded-full ring-2",
          isCenter ? "ring-cream/25" : "ring-espresso/10",
        )}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={avatarUrl(review.name, index)}
          alt=""
          width={64}
          height={64}
          className="h-full w-full object-cover"
        />
      </div>
      <blockquote
        className={cn(
          "mb-auto font-[family-name:var(--font-anton)] text-[clamp(1.125rem,2.2vw,1.65rem)] leading-[1.25] tracking-[0.02em] uppercase",
          isCenter ? "text-cream" : isRight ? "text-ink/35" : "text-ink",
        )}
      >
        {review.text.toUpperCase()}
      </blockquote>
      <footer className="mt-10 border-t border-current/10 pt-6">
        <p
          className={cn(
            "font-[family-name:var(--font-anton)] text-base tracking-[0.06em] uppercase",
            isCenter ? "text-cream" : isRight ? "text-ink/40" : "text-ink",
          )}
        >
          {review.name.replace(".", "").toUpperCase()}
        </p>
        <p
          className={cn(
            "mt-1 text-sm",
            isCenter ? "text-cream/75" : isRight ? "text-ink/35" : "text-mocha",
          )}
        >
          {review.tag}
        </p>
      </footer>
    </article>
  );
}

export function ReviewsSection() {
  const reviews = cafeData.reviews;
  const len = reviews.length;
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback(
    (index: number) => {
      setActive(((index % len) + len) % len);
    },
    [len],
  );

  const restartTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive((a) => (a + 1) % len);
    }, SLIDE_MS);
  }, [len]);

  useEffect(() => {
    restartTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [restartTimer]);

  const handleGo = (index: number) => {
    go(index);
    restartTimer();
  };

  const prev = (active - 1 + len) % len;
  const next = (active + 1) % len;

  return (
    <section
      id="reviews"
      className="overflow-hidden bg-cream py-[clamp(64px,9vw,120px)] text-ink"
    >
      <div className="mx-auto max-w-[1240px] px-[var(--section-pad)]">
        <header className="mx-auto mb-[clamp(40px,6vw,72px)] max-w-[720px] text-center">
          <h2 className="font-[family-name:var(--font-anton)] text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.95] font-normal tracking-[0.01em] uppercase">
            What our clients say
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-mocha md:text-base">
            Single-origin pours, bold house blends, and slow mornings at the
            counter — roasted in-house, ethically sourced, always poured fresh.
          </p>
        </header>

        <div className="flex items-end justify-center max-md:px-2">
          <TestimonialCard
            review={reviews[prev]}
            slot="left"
            index={prev}
            onSelect={() => handleGo(prev)}
          />
          <TestimonialCard
            review={reviews[active]}
            slot="center"
            index={active}
          />
          <TestimonialCard
            review={reviews[next]}
            slot="right"
            index={next}
            onSelect={() => handleGo(next)}
          />
        </div>

        <div className="mt-12 flex justify-center gap-3">
          <button
            type="button"
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-espresso/15 bg-white text-lg text-espresso transition-colors hover:border-caramel hover:bg-espresso hover:text-cream"
            onClick={() => handleGo(active - 1)}
            aria-label="Previous testimonial"
          >
            ←
          </button>
          <button
            type="button"
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-espresso/15 bg-white text-lg text-espresso transition-colors hover:border-caramel hover:bg-espresso hover:text-cream"
            onClick={() => handleGo(active + 1)}
            aria-label="Next testimonial"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}

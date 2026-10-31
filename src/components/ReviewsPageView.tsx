"use client";

import { cafeData, type Review } from "@/lib/cafe-data";

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

function starsFor(n: number) {
  return "★".repeat(n) + "☆".repeat(5 - n);
}

function ReviewGridCard({ review, index }: { review: Review; index: number }) {
  const featured = index % 3 === 1;

  return (
    <article
      className={
        featured
          ? "flex flex-col rounded-[28px] bg-espresso px-7 py-8 text-cream shadow-lg"
          : "flex flex-col rounded-[28px] border border-espresso/10 bg-white px-7 py-8 text-ink shadow-sm"
      }
    >
      <div className="mb-4 flex items-center justify-between gap-3">
        <div className="h-12 w-12 overflow-hidden rounded-full ring-2 ring-caramel/30">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={avatarUrl(review.name, index)}
            alt=""
            width={48}
            height={48}
            className="h-full w-full object-cover"
          />
        </div>
        <span
          className={
            featured ? "text-sm text-caramel" : "text-sm text-caramel"
          }
        >
          {starsFor(review.stars)}
        </span>
      </div>
      <blockquote
        className={`mb-6 flex-1 font-[family-name:var(--font-anton)] text-base leading-snug tracking-wide uppercase sm:text-lg ${
          featured ? "text-cream" : "text-ink"
        }`}
      >
        {review.text}
      </blockquote>
      <footer className="border-t border-current/10 pt-4">
        <p className="font-[family-name:var(--font-anton)] text-sm tracking-wider uppercase">
          {review.name.replace(".", "")}
        </p>
        <p
          className={`mt-1 text-sm ${featured ? "text-cream/70" : "text-mocha"}`}
        >
          {review.tag}
        </p>
      </footer>
    </article>
  );
}

export function ReviewsPageView() {
  const reviews = cafeData.reviews;

  return (
    <div className="min-h-screen bg-[#ECEAE6]">
      <div className="border-b border-espresso/10 bg-white px-[var(--section-pad)] py-10 sm:py-14">
        <p className="label">Guest reviews</p>
        <h1 className="mt-2 max-w-2xl font-[family-name:var(--font-anton)] text-[clamp(2.25rem,6vw,4rem)] leading-[0.95] uppercase">
          Every card, every voice
        </h1>
        <p className="mt-4 max-w-xl text-mocha">
          All reviews in one place — no carousel, scroll and read at your pace.
        </p>
      </div>

      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-5 px-[var(--section-pad)] py-10 sm:grid-cols-2 xl:grid-cols-3">
        {reviews.map((review, i) => (
          <ReviewGridCard key={review.name} review={review} index={i} />
        ))}
      </div>
    </div>
  );
}

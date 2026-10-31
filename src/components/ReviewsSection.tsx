import { cafeData, type Review } from "@/lib/cafe-data";
import { ScrollReveal } from "./ScrollReveal";

function starsFor(n: number) {
  return "★".repeat(n) + "☆".repeat(5 - n);
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="w-[290px] shrink-0 rounded-3xl border border-cream/12 bg-cream/5 p-[26px] transition-[background,border-color] duration-300 hover:border-caramel/50 hover:bg-cream/[0.09] min-[521px]:w-[340px]">
      <div className="mb-3.5 text-sm tracking-[3px] text-caramel">
        {starsFor(review.stars)}
      </div>
      <blockquote className="mb-[22px] font-serif text-[19px] leading-snug font-light tracking-[-0.01em]">
        “{review.text}”
      </blockquote>
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-full bg-caramel text-sm font-medium text-ink">
          {review.name[0]}
        </div>
        <div>
          <b className="block text-sm font-medium">{review.name}</b>
          <small className="text-xs text-cream/55">{review.tag}</small>
        </div>
      </div>
    </article>
  );
}

function MarqueeRow({
  reviews,
  reverse,
}: {
  reviews: Review[];
  reverse?: boolean;
}) {
  const items = [...reviews, ...reviews];
  return (
    <div className="marquee-mask mb-[18px] overflow-hidden">
      <div
        className={`flex w-max gap-[18px] ${reverse ? "marquee-track-reverse" : "marquee-track"}`}
      >
        {items.map((r, i) => (
          <ReviewCard key={`${r.name}-${i}`} review={r} />
        ))}
      </div>
    </div>
  );
}

export function ReviewsSection() {
  const reviews = cafeData.reviews;
  const reversed = [...reviews].reverse();

  return (
    <section id="reviews" className="overflow-hidden bg-ink py-[clamp(80px,10vw,140px)] text-cream">
      <ScrollReveal className="mb-14 px-[var(--section-pad)]">
        <p className="label mb-3.5 text-caramel">Loved by regulars</p>
        <h2 className="max-w-[700px] font-serif text-[clamp(34px,5vw,64px)] leading-[1.05] font-light tracking-[-0.03em]">
          Heard around the <em>counter</em>
        </h2>
      </ScrollReveal>
      <MarqueeRow reviews={reviews} />
      <MarqueeRow reviews={reversed} reverse />
    </section>
  );
}

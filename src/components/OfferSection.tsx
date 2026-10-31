import { WhyUsGrid } from "./WhyUsGrid";

export function OfferSection() {
  return (
    <section
      id="offer"
      className="mx-auto max-w-[1400px] bg-cream px-[var(--section-pad)] pt-[clamp(40px,5vw,72px)] pb-[clamp(56px,8vw,100px)]"
    >
      <header className="mb-[clamp(24px,4vw,40px)] flex flex-wrap items-end justify-between gap-8">
        <div>
          <p className="label mb-3.5">Why you’ll stay</p>
          <h2 className="max-w-[720px] font-serif text-[clamp(34px,5vw,64px)] leading-[1.05] font-light tracking-[-0.03em]">
            Made for long <em>conversations</em> and slow cups.
          </h2>
        </div>
        <p className="max-w-[300px] text-mocha">
          Everything you need to work, meet, or do nothing at all.
        </p>
      </header>
      <WhyUsGrid />
    </section>
  );
}

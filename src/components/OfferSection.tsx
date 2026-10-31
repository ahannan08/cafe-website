import { cafeData } from "@/lib/cafe-data";
import { CafeIcon } from "@/lib/icons";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "./ScrollReveal";

const cardVariants: Record<string, string> = {
  "": "",
  big: "min-[861px]:col-span-2 min-[861px]:row-span-2 bg-espresso text-cream min-h-[190px] [&_h3]:text-[clamp(32px,4vw,48px)] [&_p]:max-w-none [&_p]:text-base [&_p]:text-cream/70 [&_.icon-wrap]:bg-caramel/20 [&_.icon-wrap]:text-caramel hero-card-big-glow",
  wide: "min-[861px]:col-span-2",
  accent: "bg-caramel text-ink [&_p]:text-ink/75 [&_.icon-wrap]:bg-ink/12",
};

export function OfferSection() {
  return (
    <section
      id="offer"
      className="bg-cream px-[var(--section-pad)] py-[clamp(80px,11vw,150px)]"
    >
      <ScrollReveal className="mb-14 flex flex-wrap items-end justify-between gap-10">
        <div>
          <p className="label mb-3.5">Why you’ll stay</p>
          <h2 className="max-w-[700px] font-serif text-[clamp(34px,5vw,64px)] leading-[1.05] font-light tracking-[-0.03em]">
            Made for long <em>conversations</em> and slow cups.
          </h2>
        </div>
        <p className="max-w-[320px] text-base text-mocha">
          Everything you need to work, meet, or do nothing at all.
        </p>
      </ScrollReveal>
      <div className="grid grid-cols-1 gap-4 min-[521px]:grid-cols-2 min-[861px]:grid-cols-4 min-[861px]:auto-rows-[minmax(190px,auto)]">
        {cafeData.offers.map((o, i) => (
          <ScrollReveal
            key={o.title}
            delayMs={(i % 4) * 80}
            className={cn(
              "group relative flex flex-col justify-between overflow-hidden rounded-[28px] bg-sand p-7 transition-transform duration-[400ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:-translate-y-1.5",
              cardVariants[o.cls],
            )}
          >
            <div className="icon-wrap mb-4 grid h-12 w-12 place-items-center rounded-[14px] bg-espresso/8">
              <CafeIcon name={o.icon} />
            </div>
            <div>
              <h3 className="mb-1.5 font-serif text-[26px] tracking-[-0.02em]">
                {o.title}
              </h3>
              <p className="max-w-[280px] text-sm text-mocha">{o.text}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

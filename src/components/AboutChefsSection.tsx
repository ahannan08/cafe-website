import { chefs } from "@/lib/about-data";
import { AboutScrollReveal } from "./AboutScrollReveal";
import { ChefPortrait } from "./ChefPortrait";

export function AboutChefsSection() {
  return (
    <section
      id="chefs"
      className="mx-auto max-w-[1400px] px-[var(--section-pad)] py-[clamp(72px,10vw,130px)]"
    >
      <AboutScrollReveal className="mb-[clamp(32px,5vw,56px)] flex flex-wrap items-end justify-between gap-8">
        <div>
          <p className="label mb-3.5">Our chefs</p>
          <h2 className="max-w-[720px] font-serif text-[clamp(34px,5vw,64px)] leading-[1.05] font-light tracking-[-0.03em]">
            The hands behind <em>every cup</em> and crumb.
          </h2>
        </div>
        <p className="max-w-[300px] text-mocha">
          Roasters, bakers, and baristas who care a little too much.
        </p>
      </AboutScrollReveal>

      <div className="grid grid-cols-1 gap-5 min-[521px]:grid-cols-2 min-[1001px]:grid-cols-4">
        {chefs.map((chef, i) => (
          <AboutScrollReveal key={chef.name} delayMs={i * 90}>
            <article className="group">
              <div className="mb-[18px] aspect-[4/5] overflow-hidden rounded-[28px]">
                {chef.img ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={chef.img}
                    alt={chef.name}
                    className="h-full w-full object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-[1.06]"
                  />
                ) : (
                  <div className="h-full w-full transition-transform duration-[600ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-[1.06]">
                    <ChefPortrait chef={chef} />
                  </div>
                )}
              </div>
              <h3 className="font-serif text-2xl leading-[1.15] tracking-[-0.02em]">
                {chef.name}
              </h3>
              <p className="my-1 text-xs tracking-[0.12em] text-caramel uppercase">
                {chef.role}
              </p>
              <blockquote className="mb-3 font-serif text-base leading-snug font-light text-mocha italic">
                “{chef.quote}”
              </blockquote>
              <div className="flex flex-wrap gap-1.5">
                {chef.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-sand px-2.5 py-1 text-[11px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          </AboutScrollReveal>
        ))}
      </div>
    </section>
  );
}

import Image from "next/image";

const quotes = [
  { className: "why-say-1", text: "Fresh out of the grinder" },
  { className: "why-say-2", text: "Mmm… that aroma" },
  { className: "why-say-3", text: "Best coffee in town!" },
];

export function WhyUsHero() {
  return (
    <article
      className="why-hero-card relative overflow-hidden rounded-[30px] bg-espresso p-0 text-cream"
      aria-label="A happy guest enjoying coffee"
    >
      <div className="pointer-events-none absolute right-0 bottom-[-14%] left-0 flex justify-center">
        <div className="aspect-square w-[112%] rounded-full border border-cream/14" />
      </div>
      <div className="pointer-events-none absolute right-0 bottom-[-6%] left-0 flex justify-center">
        <div className="aspect-square w-[92%] rounded-full bg-caramel" />
      </div>

      <div className="why-hero-say absolute top-[26px] right-6 left-6 h-12">
        {quotes.map((q) => (
          <span
            key={q.className}
            className={`${q.className} absolute top-0 left-0 rounded-full rounded-bl-lg bg-cream px-5 py-2.5 font-serif text-[clamp(15px,1.5vw,19px)] text-espresso italic whitespace-nowrap`}
          >
            {q.text}
          </span>
        ))}
      </div>

      <div className="why-hero-person absolute right-0 bottom-0 left-0 flex justify-center">
        <div className="relative w-[104%] max-w-none">
        <Image
          src="/person-hold.webp"
          alt="Guest holding a cup of coffee"
          width={800}
          height={900}
          className="relative block h-auto w-full"
          priority
        />
        <Image
          src="/person-sip.webp"
          alt=""
          width={800}
          height={900}
          aria-hidden
          className="why-hero-person-2 absolute bottom-0 left-0 block h-auto w-full"
        />
        <Image
          src="/person-joy.webp"
          alt=""
          width={800}
          height={900}
          aria-hidden
          className="why-hero-person-3 absolute bottom-0 left-0 block h-auto w-full"
        />
        </div>
      </div>

      <div className="absolute right-6 bottom-6 flex gap-1.5" aria-hidden>
        {[0, 1, 2].map((i) => (
          <i
            key={i}
            className="relative h-0.5 w-[22px] overflow-hidden rounded-sm bg-ink/25 not-italic"
          >
            <b
              className={`why-hero-bar-${i + 1} absolute inset-0 bg-ink opacity-0`}
            />
          </i>
        ))}
      </div>
    </article>
  );
}

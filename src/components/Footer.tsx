import Link from "next/link";

export function Footer() {
  return (
    <footer
      id="visit"
      className="overflow-hidden bg-espresso px-[var(--section-pad)] pt-20 pb-7 text-cream"
    >
      <div className="grid grid-cols-1 gap-10 min-[521px]:grid-cols-2 min-[861px]:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <h3 className="mb-2.5 font-serif text-[28px] font-normal">
            Brew<em>&amp;</em>Bean
          </h3>
          <p className="text-sm text-cream/70">
            Small-batch coffee, baked fresh every morning.
          </p>
        </div>
        <div>
          <h4 className="mb-3.5 text-xs font-medium tracking-[0.14em] text-caramel uppercase">
            Visit
          </h4>
          <p className="text-sm text-cream/70">
            12 Coffee Lane
            <br />
            Jubilee Hills, Hyderabad
          </p>
        </div>
        <div>
          <h4 className="mb-3.5 text-xs font-medium tracking-[0.14em] text-caramel uppercase">
            Hours
          </h4>
          <p className="text-sm text-cream/70">
            Mon–Fri · 7am – 10pm
            <br />
            Sat–Sun · 8am – 11pm
          </p>
        </div>
        <div>
          <h4 className="mb-3.5 text-xs font-medium tracking-[0.14em] text-caramel uppercase">
            Follow
          </h4>
          <p className="text-sm text-cream/70">
            <Link href="#" className="hover:text-caramel">
              Instagram
            </Link>
            <br />
            <Link href="#" className="hover:text-caramel">
              Facebook
            </Link>
            <br />
            <Link href="#" className="hover:text-caramel">
              Google Maps
            </Link>
          </p>
        </div>
      </div>
      <div
        className="pointer-events-none mt-[60px] mb-2.5 font-serif text-[clamp(70px,17vw,240px)] leading-[0.9] font-light tracking-[-0.05em] whitespace-nowrap text-cream/[0.07]"
        aria-hidden
      >
        Brew&amp;Bean
      </div>
      <p className="text-xs text-cream/45">
        © 2026 Brew&amp;Bean. All rights reserved.
      </p>
    </footer>
  );
}

import { galleryItems } from "@/lib/about-data";
import { CafeIcon } from "@/lib/icons";
import { AboutScrollReveal } from "./AboutScrollReveal";

export function AboutGallerySection() {
  return (
    <section id="gallery" className="bg-sand">
      <div className="mx-auto max-w-[1400px] px-[var(--section-pad)] pt-[clamp(72px,10vw,130px)] pb-[clamp(72px,10vw,130px)]">
        <AboutScrollReveal className="mb-[clamp(32px,5vw,56px)] flex flex-wrap items-end justify-between gap-8">
          <div>
            <p className="label mb-3.5">Our gallery</p>
            <h2 className="max-w-[720px] font-serif text-[clamp(34px,5vw,64px)] leading-[1.05] font-light tracking-[-0.03em]">
              A look <em>inside</em> the cafe.
            </h2>
          </div>
          <p className="max-w-[300px] text-mocha">
            Mornings, bakes, and the moments in between.
          </p>
        </AboutScrollReveal>

        <div className="about-mosaic">
          {galleryItems.map((item, i) => (
            <AboutScrollReveal
              key={item.cap}
              delayMs={(i % 4) * 70}
              className="about-mosaic-cell min-h-[110px]"
              style={{ gridArea: item.gridArea }}
            >
              <figure
                className="relative m-0 grid h-full min-h-[inherit] place-items-center overflow-hidden rounded-3xl transition-transform duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:scale-[0.985]"
                style={{ backgroundColor: item.bg, color: item.fg }}
              >
                {item.img ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={item.img}
                    alt={item.cap}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[800ms] group-hover:scale-[1.07]"
                  />
                ) : (
                  <>
                    <div className="pointer-events-none absolute bottom-[-30%] left-[-12%] aspect-square w-[70%] rounded-full opacity-[0.07] [background:currentColor]" />
                    <div className="opacity-50 [&_svg]:h-auto [&_svg]:w-[min(28%,84px)]">
                      <CafeIcon name={item.icon} />
                    </div>
                  </>
                )}
                <figcaption className="absolute bottom-3.5 left-3.5 rounded-full bg-cream/92 px-3 py-1.5 text-xs text-espresso">
                  {item.cap}
                </figcaption>
              </figure>
            </AboutScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

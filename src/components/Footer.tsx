"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "Why us", href: "#offer" },
  { label: "Reviews", href: "#reviews" },
  { label: "Visit", href: "#visit" },
];

const menuLinks = [
  { label: "Signature Blends", href: "#menu" },
  { label: "Hot Coffee", href: "#menu" },
  { label: "Iced Coffee", href: "#menu" },
  { label: "Cold Brew", href: "#menu" },
];

function SocialIcon({
  label,
  href,
  children,
}: {
  label: string;
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="grid h-10 w-10 place-items-center rounded-full border border-cream/20 text-cream transition-colors hover:border-caramel hover:bg-caramel/15 hover:text-caramel"
    >
      {children}
    </Link>
  );
}

export function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function onSubscribe(e: FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail("");
  }

  return (
    <footer id="visit" className="overflow-hidden bg-espresso text-cream">
      <div className="mx-auto max-w-[1240px] px-[var(--section-pad)] pt-[clamp(48px,7vw,88px)]">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <div>
            <h2 className="max-w-[520px] font-[family-name:var(--font-anton)] text-[clamp(1.75rem,4.2vw,2.75rem)] leading-[1.05] tracking-[0.02em] uppercase">
              Bring warm, slow coffee to your mornings
            </h2>
            <p className="mt-5 max-w-[440px] text-sm leading-relaxed text-cream/70 md:text-[15px]">
              Small-batch roasts, fresh bakes, and the calm of our cafe — subscribe
              for weekly specials, new menu drops, and members-only pours.
            </p>

            <form onSubmit={onSubscribe} className="relative mt-8 max-w-[480px]">
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full rounded-full border border-cream/15 bg-[color-mix(in_srgb,var(--cream)_6%,transparent)] py-4 pr-[148px] pl-6 text-sm text-cream placeholder:text-cream/45 outline-none transition-[border-color,box-shadow] focus:border-caramel/50 focus:ring-2 focus:ring-caramel/20"
              />
              <button
                type="submit"
                className="absolute top-1/2 right-1.5 flex -translate-y-1/2 cursor-pointer items-center gap-2 rounded-full bg-caramel px-5 py-2.5 font-[family-name:var(--font-anton)] text-[13px] tracking-[0.06em] text-ink uppercase transition-transform hover:-translate-y-[calc(50%+2px)]"
              >
                Subscribe
                <span aria-hidden className="text-base leading-none">
                  ↗
                </span>
              </button>
            </form>
            {submitted ? (
              <p className="mt-3 text-sm text-caramel" role="status">
                Thanks — you&apos;re on the list.
              </p>
            ) : null}
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 sm:gap-8">
            <div>
              <p className="mb-5 font-[family-name:var(--font-anton)] text-sm tracking-[0.12em] text-cream/90 uppercase">
                Navigation
              </p>
              <ul className="space-y-3 text-sm text-cream/75">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="transition-colors hover:text-caramel"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-5 font-[family-name:var(--font-anton)] text-sm tracking-[0.12em] text-cream/90 uppercase">
                Menu
              </p>
              <ul className="space-y-3 text-sm text-cream/75">
                {menuLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="transition-colors hover:text-caramel"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="mb-5 font-[family-name:var(--font-anton)] text-sm tracking-[0.12em] text-cream/90 uppercase">
                Address
              </p>
              <p className="text-sm leading-relaxed text-cream/75">
                12 Coffee Lane
                <br />
                Jubilee Hills
                <br />
                Hyderabad, Telangana
                <br />
                India
              </p>
              <p className="mt-6 mb-3 text-xs tracking-[0.1em] text-cream/55 uppercase">
                Follow us
              </p>
              <div className="flex flex-wrap gap-2.5">
                <SocialIcon label="Facebook" href="#">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
                    <path d="M14 8h3V4h-3c-2.8 0-5 2.2-5 5v2H6v4h3v8h4v-8h3.2L17 11h-3V9c0-.6.4-1 1-1z" />
                  </svg>
                </SocialIcon>
                <SocialIcon label="Instagram" href="#">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2" aria-hidden>
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                </SocialIcon>
                <SocialIcon label="X" href="#">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
                    <path d="M16.5 4h3.1l-6.8 7.8L21 20h-6.2l-4.9-6.4L4.2 20H1.1l7.3-8.4L3 4h6.3l4.4 5.8L16.5 4zm-1.1 14.4h1.7L7.9 5.5H6.1l9.3 12.9z" />
                  </svg>
                </SocialIcon>
                <SocialIcon label="Google Maps" href="#">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
                    <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" />
                  </svg>
                </SocialIcon>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-cream/10 py-6 text-xs text-cream/50 min-[641px]:flex-row min-[641px]:items-center min-[641px]:justify-between">
          <p>© 2026 Brew&amp;Bean. All rights reserved.</p>
          <Link href="#" className="transition-colors hover:text-caramel">
            Terms &amp; conditions
          </Link>
          <Link href="#" className="transition-colors hover:text-caramel">
            Privacy &amp; policy
          </Link>
        </div>

        <div
          className="pointer-events-none -mb-[0.08em] select-none pt-2 pb-0 leading-[0.82] font-[family-name:var(--font-anton)] text-[clamp(4.5rem,18vw,13rem)] tracking-[-0.02em] whitespace-nowrap text-cream uppercase"
          aria-hidden
        >
          Brew&amp;Bean
        </div>
      </div>
    </footer>
  );
}

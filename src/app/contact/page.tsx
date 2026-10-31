import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Contact – Brew&Bean",
  description: "Get in touch for reservations, events, or questions.",
};

export default function ContactPage() {
  return (
    <PageShell offsetNav>
      <div className="mx-auto max-w-[1100px] px-[var(--section-pad)] py-[clamp(48px,8vw,88px)]">
        <div className="mb-10 max-w-[640px]">
          <p className="label mb-3.5">Contact</p>
          <h1 className="font-serif text-[clamp(34px,5vw,56px)] leading-[1.05] font-light tracking-[-0.03em]">
            Say hello — we&apos;d love to <em>hear from you</em>.
          </h1>
          <p className="mt-4 text-mocha">
            Reservations, catering, or just a question about the menu — drop us a
            line and we&apos;ll reply soon.
          </p>
        </div>

        <div className="grid gap-10 min-[901px]:grid-cols-[1fr_340px]">
          <ContactForm />

          <aside className="space-y-6 text-sm">
            <div className="rounded-[28px] bg-sand p-6">
              <h2 className="mb-3 font-[family-name:var(--font-anton)] text-base tracking-wide uppercase">
                Visit
              </h2>
              <p className="leading-relaxed text-mocha">
                12 Coffee Lane
                <br />
                Jubilee Hills, Hyderabad
                <br />
                Telangana, India
              </p>
            </div>
            <div className="rounded-[28px] bg-sand p-6">
              <h2 className="mb-3 font-[family-name:var(--font-anton)] text-base tracking-wide uppercase">
                Hours
              </h2>
              <p className="leading-relaxed text-mocha">
                Mon–Fri · 7am – 10pm
                <br />
                Sat–Sun · 8am – 11pm
              </p>
            </div>
            <div className="rounded-[28px] border border-espresso/10 bg-white p-6">
              <p className="text-mocha">
                Prefer to browse first?{" "}
                <Link href="/menu" className="font-medium text-caramel hover:underline">
                  View our menu
                </Link>
              </p>
            </div>
          </aside>
        </div>
      </div>
    </PageShell>
  );
}

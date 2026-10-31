import type { Metadata } from "next";
import { AboutChefsSection } from "@/components/AboutChefsSection";
import { AboutGallerySection } from "@/components/AboutGallerySection";
import { AboutHero } from "@/components/AboutHero";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "About – Brew&Bean",
  description:
    "Our story, team, and gallery — small-batch coffee in Jubilee Hills since 2018.",
};

export default function AboutPage() {
  return (
    <PageShell>
      <AboutHero />
      <AboutChefsSection />
      <AboutGallerySection />
    </PageShell>
  );
}

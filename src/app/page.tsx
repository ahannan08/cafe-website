import { Hero } from "@/components/Hero";
import { MenuSection } from "@/components/MenuSection";
import { OfferSection } from "@/components/OfferSection";
import { PageShell } from "@/components/PageShell";
import { ReviewsSection } from "@/components/ReviewsSection";

export default function Home() {
  return (
    <PageShell>
      <Hero />
      <MenuSection />
      <OfferSection />
      <ReviewsSection />
    </PageShell>
  );
}

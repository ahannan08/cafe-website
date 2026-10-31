import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { OfferSection } from "@/components/OfferSection";
import { ReviewsSection } from "@/components/ReviewsSection";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <OfferSection />
        <ReviewsSection />
      </main>
      <Footer />
    </>
  );
}

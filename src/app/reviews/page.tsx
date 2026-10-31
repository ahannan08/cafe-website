import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { ReviewsSection } from "@/components/ReviewsSection";

export const metadata: Metadata = {
  title: "Reviews – Brew&Bean",
  description: "What our clients say about Brew&Bean.",
};

export default function ReviewsPage() {
  return (
    <PageShell offsetNav>
      <ReviewsSection />
    </PageShell>
  );
}

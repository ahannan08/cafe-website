import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { ReviewsPageView } from "@/components/ReviewsPageView";

export const metadata: Metadata = {
  title: "Reviews – Brew&Bean",
  description: "What our clients say about Brew&Bean.",
};

export default function ReviewsPage() {
  return (
    <PageShell offsetNav>
      <ReviewsPageView />
    </PageShell>
  );
}

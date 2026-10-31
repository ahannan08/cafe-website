import type { Metadata } from "next";
import { MenuSection } from "@/components/MenuSection";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Menu – Brew&Bean",
  description: "Explore our signature blends, hot coffee, iced drinks, and cold brew.",
};

export default function MenuPage() {
  return (
    <PageShell offsetNav>
      <MenuSection />
    </PageShell>
  );
}

import type { Metadata } from "next";
import { MenuPageView } from "@/components/MenuPageView";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Menu – Brew&Bean",
  description: "Explore our signature blends, hot coffee, iced drinks, and cold brew.",
};

export default function MenuPage() {
  return (
    <PageShell offsetNav>
      <MenuPageView />
    </PageShell>
  );
}

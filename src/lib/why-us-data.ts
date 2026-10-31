import type { ICONS } from "./icons";

export type WhyUsVariant = "sand" | "dark" | "car";
export type WhyUsSlot =
  | "c1"
  | "c2"
  | "c3"
  | "c4"
  | "c5"
  | "c6"
  | "c7"
  | "c8";

export type WhyUsCard = {
  slot: WhyUsSlot;
  title: string;
  text: string;
  icon: keyof typeof ICONS;
  variant: WhyUsVariant;
  delayMs: number;
  ambience?: boolean;
  steam?: boolean;
  largeTitle?: boolean;
};

export const whyUsCards: WhyUsCard[] = [
  {
    slot: "c1",
    title: "Ambience",
    text: "Warm lighting, soft jazz, and cozy corners designed for lingering.",
    icon: "music",
    variant: "sand",
    delayMs: 0,
    ambience: true,
    largeTitle: true,
  },
  {
    slot: "c2",
    title: "Single-origin coffee",
    text: "Roasted in-house, brewed your way.",
    icon: "coffee",
    variant: "car",
    delayMs: 120,
    steam: true,
    largeTitle: true,
  },
  {
    slot: "c3",
    title: "Free fast Wi‑Fi",
    text: "Work without limits.",
    icon: "wifi",
    variant: "sand",
    delayMs: 60,
  },
  {
    slot: "c4",
    title: "Unlimited stay",
    text: "No timers. Stay all day.",
    icon: "infinity",
    variant: "dark",
    delayMs: 140,
  },
  {
    slot: "c5",
    title: "Power at every seat",
    text: "Charge while you create.",
    icon: "plug",
    variant: "dark",
    delayMs: 100,
  },
  {
    slot: "c6",
    title: "Pet friendly",
    text: "Furry friends welcome.",
    icon: "heart",
    variant: "car",
    delayMs: 180,
  },
  {
    slot: "c7",
    title: "Fresh bakes daily",
    text: "Croissants, cookies, and slow-fermented sourdough.",
    icon: "bake",
    variant: "sand",
    delayMs: 140,
  },
  {
    slot: "c8",
    title: "Open late",
    text: "Quiet evenings until 10pm.",
    icon: "moon",
    variant: "dark",
    delayMs: 220,
  },
];

export const whyUsHeroQuotes = [
  "Fresh out of the grinder",
  "Mmm… that aroma",
  "Best coffee in town!",
] as const;

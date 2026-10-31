import type { ICONS } from "./icons";

export type ChefProfile = {
  name: string;
  role: string;
  quote: string;
  tags: string[];
  bg: string;
  skin: string;
  hair: "short" | "long" | "beard";
  hat: boolean;
  shirt: string;
  img?: string;
};

export type GalleryItem = {
  cap: string;
  icon: keyof typeof ICONS;
  bg: string;
  fg: string;
  img?: string;
  gridArea: string;
};

export type AboutHeadlineWord = { text: string; accent?: boolean };

export const aboutHeadline: AboutHeadlineWord[] = [
  { text: "Started" },
  { text: "with" },
  { text: "one" },
  { text: "roaster" },
  { text: "and" },
  { text: "a" },
  { text: "very", accent: true },
  { text: "big", accent: true },
  { text: "idea.", accent: true },
];

export const aboutTimeline = [
  { year: "2018", label: "Opened our first counter" },
  { year: "2021", label: "Added an in-house roaster" },
  { year: "2024", label: "Launched the bakery" },
] as const;

export const aboutIngredients = [
  { name: "Beans", detail: "Araku and Chikmagalur estates" },
  { name: "Milk", detail: "Local farms, delivered daily" },
  { name: "Cocoa", detail: "Stone-ground, single estate" },
  { name: "Sweeteners", detail: "Jaggery and raw cane" },
  { name: "Flour", detail: "Stone-milled, slow-fermented" },
] as const;

export const aboutStats = [
  { to: 8, suffix: "+", label: "Years roasting", decimals: 0 },
  { to: 250, suffix: "k+", label: "Cups served", decimals: 0 },
  { to: 4.9, suffix: "", label: "Guest rating", decimals: 1 },
  { to: 12, suffix: "", label: "Awards won", decimals: 0 },
] as const;

export const chefs: ChefProfile[] = [
  {
    name: "Arjun Rao",
    role: "Head roaster",
    quote: "Every origin has a story. I just try not to burn it.",
    tags: ["Roasting", "Cupping"],
    bg: "#C98B4A",
    skin: "#D9A07A",
    hair: "short",
    hat: false,
    shirt: "#3B2A20",
  },
  {
    name: "Meera Iyer",
    role: "Head pastry chef",
    quote: "Butter, patience, and a very warm oven.",
    tags: ["Croissants", "Sourdough"],
    bg: "#8A6A52",
    skin: "#E3B08A",
    hair: "long",
    hat: true,
    shirt: "#F6EFE6",
  },
  {
    name: "Karthik Reddy",
    role: "Lead barista",
    quote: "Latte art is just math with a smile.",
    tags: ["Espresso", "Latte art"],
    bg: "#3B2A20",
    skin: "#C98F68",
    hair: "beard",
    hat: false,
    shirt: "#C98B4A",
  },
  {
    name: "Sana Khan",
    role: "Kitchen chef",
    quote: "Good food should feel like a hug.",
    tags: ["Brunch", "Sandwiches"],
    bg: "#D9A56A",
    skin: "#E8BC98",
    hair: "long",
    hat: true,
    shirt: "#2A1D16",
  },
];

const galleryRaw: [string, keyof typeof ICONS, string, string][] = [
  ["Latte art", "coffee", "#3B2A20", "#F6EFE6"],
  ["Morning rush", "sun", "#C98B4A", "#1A110C"],
  ["Fresh croissants", "bake", "#8A6A52", "#F6EFE6"],
  ["The roastery", "spark", "#F6EFE6", "#3B2A20"],
  ["Sunday jazz", "music", "#2A1D16", "#C98B4A"],
  ["Cozy corners", "heart", "#D9A56A", "#3B2A20"],
  ["Pour-over bar", "coffee", "#C98B4A", "#1A110C"],
  ["Cake counter", "bake", "#3B2A20", "#F6EFE6"],
  ["Window seats", "sun", "#F6EFE6", "#8A6A52"],
  ["Beans from Araku", "spark", "#8A6A52", "#F6EFE6"],
  ["Late-night work", "moon", "#2A1D16", "#F6EFE6"],
  ["Weekend brunch", "heart", "#D9A56A", "#3B2A20"],
];

const mosaicAreas = [
  "1 / 1 / 3 / 3",
  "1 / 3 / 4 / 5",
  "1 / 5 / 3 / 7",
  "3 / 1 / 5 / 3",
  "3 / 5 / 5 / 7",
  "4 / 3 / 5 / 5",
  "5 / 1 / 8 / 3",
  "5 / 3 / 7 / 5",
  "5 / 5 / 7 / 7",
  "7 / 3 / 9 / 5",
  "7 / 5 / 9 / 7",
  "8 / 1 / 9 / 3",
];

export const galleryItems: GalleryItem[] = galleryRaw.map((row, i) => ({
  cap: row[0],
  icon: row[1],
  bg: row[2],
  fg: row[3],
  gridArea: mosaicAreas[i],
}));

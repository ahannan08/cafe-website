export type Slide = {
  eyebrow: string;
  line: string;
  accent: string;
  sub: string;
  img?: string;
};

export type Offer = {
  title: string;
  text: string;
  icon:
    | "spark"
    | "coffee"
    | "wifi"
    | "infinity"
    | "plug"
    | "heart"
    | "bake";
  cls: "" | "big" | "wide" | "accent";
};

export type Review = {
  name: string;
  tag: string;
  stars: number;
  text: string;
};

export const cafeData = {
  slides: [
    {
      eyebrow: "Specialty coffee · Since 2018",
      line: "Where every sip",
      accent: "slows time",
      sub: "Small-batch beans, roasted in-house and poured with patience.",
      img: "",
    },
    {
      eyebrow: "Baked every morning",
      line: "Warm crumbs,",
      accent: "golden mornings",
      sub: "Fresh pastries that pair perfectly with your first cup of the day.",
      img: "",
    },
    {
      eyebrow: "Open late, stay later",
      line: "Your corner of",
      accent: "calm",
      sub: "Soft light, good music, and a seat that’s yours for as long as you like.",
      img: "",
    },
  ] satisfies Slide[],
  offers: [
    {
      title: "Ambience",
      text: "Warm lighting, soft jazz, and cozy corners designed for lingering.",
      icon: "spark",
      cls: "big",
    },
    {
      title: "Single-origin coffee",
      text: "Roasted in-house, brewed your way.",
      icon: "coffee",
      cls: "wide",
    },
    {
      title: "Free fast Wi‑Fi",
      text: "Work without limits.",
      icon: "wifi",
      cls: "",
    },
    {
      title: "Unlimited stay",
      text: "No timers. Stay all day.",
      icon: "infinity",
      cls: "accent",
    },
    {
      title: "Power at every seat",
      text: "Charge while you create.",
      icon: "plug",
      cls: "",
    },
    {
      title: "Pet friendly",
      text: "Furry friends welcome.",
      icon: "heart",
      cls: "",
    },
    {
      title: "Fresh bakes daily",
      text: "Croissants, cookies, and slow-fermented sourdough.",
      icon: "bake",
      cls: "wide",
    },
  ] satisfies Offer[],
  reviews: [
    {
      name: "Ananya R.",
      tag: "Freelance designer",
      stars: 5,
      text: "The best flat white in the city, and I’ve worked here for six hours straight without anyone rushing me.",
    },
    {
      name: "Rahul M.",
      tag: "Weekend regular",
      stars: 5,
      text: "The croissants sell out for a reason. Come early, stay for the music.",
    },
    {
      name: "Meera S.",
      tag: "Book club host",
      stars: 5,
      text: "Calm, friendly, and the corner sofas are perfect for our group. We’re here every Sunday.",
    },
    {
      name: "Karthik V.",
      tag: "Software engineer",
      stars: 4,
      text: "Fast Wi‑Fi, plugs at every table, and coffee that actually tastes like something.",
    },
    {
      name: "Sana K.",
      tag: "First-time visitor",
      stars: 5,
      text: "Walked in for a quick coffee and left three hours later. Unreal ambience.",
    },
    {
      name: "Dev P.",
      tag: "Photographer",
      stars: 5,
      text: "The light in the afternoon is unreal. Great coffee, even better company.",
    },
  ] satisfies Review[],
};

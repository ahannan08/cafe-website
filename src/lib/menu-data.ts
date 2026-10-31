export type MenuStyleKey =
  | "cap"
  | "flat"
  | "mocha"
  | "il"
  | "caramel"
  | "mochaI"
  | "cb"
  | "cbc";

export type MenuItem = {
  n: string;
  p: string;
  r: number;
  s: MenuStyleKey;
  d: string;
};

export type MenuCategory = {
  tab: string;
  items: MenuItem[];
};

export const menuCategories: MenuCategory[] = [
  {
    tab: "Signature Blends",
    items: [
      {
        n: "Caramel Cloud",
        p: "₹260",
        r: 4.9,
        s: "caramel",
        d: "Espresso, caramel, silky milk",
      },
      {
        n: "Cappuccino",
        p: "₹220",
        r: 4.9,
        s: "cap",
        d: "Double shot, velvety foam",
      },
      {
        n: "Mocha Noir",
        p: "₹280",
        r: 4.8,
        s: "mochaI",
        d: "Dark chocolate, espresso, cream",
      },
    ],
  },
  {
    tab: "Hot Coffee",
    items: [
      {
        n: "Flat White",
        p: "₹230",
        r: 4.8,
        s: "flat",
        d: "Ristretto, micro-foam milk",
      },
      {
        n: "Cappuccino",
        p: "₹220",
        r: 4.9,
        s: "cap",
        d: "Double shot, velvety foam",
      },
      {
        n: "Hot Mocha",
        p: "₹250",
        r: 4.7,
        s: "mocha",
        d: "Espresso, cocoa, steamed milk",
      },
    ],
  },
  {
    tab: "Iced Coffee",
    items: [
      {
        n: "Iced Latte",
        p: "₹240",
        r: 4.9,
        s: "il",
        d: "Espresso over ice and cold milk",
      },
      {
        n: "Iced Caramel",
        p: "₹270",
        r: 4.8,
        s: "caramel",
        d: "Caramel drizzle, cold milk",
      },
      {
        n: "Iced Mocha",
        p: "₹280",
        r: 4.7,
        s: "mochaI",
        d: "Chocolate, espresso, ice",
      },
    ],
  },
  {
    tab: "Cold Brew",
    items: [
      {
        n: "Classic Cold Brew",
        p: "₹260",
        r: 4.9,
        s: "cb",
        d: "Steeped 18 hours, low acid",
      },
      {
        n: "Cream Cold Brew",
        p: "₹290",
        r: 4.8,
        s: "cbc",
        d: "Cold brew, vanilla cold cream",
      },
      {
        n: "Cold Brew Tonic",
        p: "₹280",
        r: 4.7,
        s: "cb",
        d: "Cold brew over sparkling tonic",
      },
    ],
  },
];

export type MenuDrinkStyle =
  | { kind: "mug"; color: string }
  | { kind: "glass"; layers: [string, number][]; straw?: boolean };

export const menuStyles: Record<MenuStyleKey, MenuDrinkStyle> = {
  cap: { kind: "mug", color: "#A8693A" },
  flat: { kind: "mug", color: "#8A5430" },
  mocha: { kind: "mug", color: "#4E2F20" },
  il: {
    kind: "glass",
    layers: [
      ["#F1E2C6", 150],
      ["#D3A978", 250],
      ["#7A4A2A", 350],
    ],
    straw: true,
  },
  caramel: {
    kind: "glass",
    layers: [
      ["#F4E3C3", 150],
      ["#D69A55", 230],
      ["#8A5430", 330],
    ],
    straw: true,
  },
  mochaI: {
    kind: "glass",
    layers: [
      ["#E9D3C0", 150],
      ["#8A5A44", 250],
      ["#3B2A20", 360],
    ],
    straw: true,
  },
  cb: {
    kind: "glass",
    layers: [
      ["#E6D5B8", 170],
      ["#3A2216", 215],
    ],
  },
  cbc: {
    kind: "glass",
    layers: [
      ["#F6EBD6", 160],
      ["#C79A62", 205],
      ["#3A2216", 250],
    ],
    straw: true,
  },
};

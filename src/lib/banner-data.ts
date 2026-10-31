export type GlassLayer = { y: number; c: string };
export type IceCube = [number, number, number];

export type BannerDrink = {
  name: string;
  type: "mug" | "glass";
  bg: string;
  fg: string;
  disc: string;
  acc: string;
  blurb: string;
  method: string;
  ing: string[];
  price: string;
  layers?: GlassLayer[];
  ice?: IceCube[];
};

export const bannerDrinks: BannerDrink[] = [
  {
    name: "Cappuccino",
    type: "mug",
    bg: "#3B2A20",
    fg: "#F6EFE6",
    disc: "#C98B4A",
    acc: "#C98B4A",
    blurb:
      "Velvety steamed milk over a double espresso, finished with a cloud of micro-foam.",
    method: "Double shot · milk steamed to 65°C",
    ing: ["Double espresso", "Steamed milk", "Micro-foam"],
    price: "₹220",
  },
  {
    name: "Iced Latte",
    type: "glass",
    bg: "#C98B4A",
    fg: "#2A1D16",
    disc: "#F6EFE6",
    acc: "#3B2A20",
    layers: [
      { y: 150, c: "#F1E2C6" },
      { y: 250, c: "#D3A978" },
      { y: 350, c: "#7A4A2A" },
    ],
    ice: [
      [70, 120, -12],
      [140, 150, 16],
      [100, 230, 8],
    ],
    blurb:
      "Chilled espresso poured over hand-cut ice and silky cold milk, lightly sweetened.",
    method: "Poured over ice · ready in 2 min",
    ing: ["Espresso", "Cold milk", "Ice"],
    price: "₹240",
  },
  {
    name: "Cold Brew",
    type: "glass",
    bg: "#F6EFE6",
    fg: "#3B2A20",
    disc: "#8A6A52",
    acc: "#C98B4A",
    layers: [
      { y: 160, c: "#EBDCC2" },
      { y: 215, c: "#3A2216" },
    ],
    ice: [
      [75, 150, 10],
      [145, 190, -14],
      [95, 290, 20],
    ],
    blurb:
      "Steeped for 18 hours in cold water. Smooth, low-acid and quietly chocolatey.",
    method: "Steeped 18 hours · served over ice",
    ing: ["Coarse grounds", "Filtered water", "Cold cream"],
    price: "₹260",
  },
];

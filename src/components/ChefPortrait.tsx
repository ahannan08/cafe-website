import type { ChefProfile } from "@/lib/about-data";

export function ChefPortrait({ chef }: { chef: ChefProfile }) {
  const hairLong =
    chef.hair === "long" ? (
      <>
        <path d="M58 104Q54 160 72 176L84 150V100Z" fill="#2A1D16" />
        <path d="M142 104Q146 160 128 176L116 150V100Z" fill="#2A1D16" />
      </>
    ) : null;

  const hat = chef.hat ? (
    <>
      <path
        d="M64 74Q46 44 78 36Q90 18 112 30Q146 20 142 54Q154 68 138 76Z"
        fill="#fff"
      />
      <rect x="70" y="70" width="64" height="16" rx="4" fill="#fff" />
    </>
  ) : (
    <path
      d="M60 102Q58 58 100 58Q142 58 140 102Q122 82 100 84Q78 82 60 102Z"
      fill="#2A1D16"
    />
  );

  const beard =
    chef.hair === "beard" ? (
      <path
        d="M66 114Q70 156 100 158Q130 156 134 114Q118 134 100 134Q82 134 66 114Z"
        fill="#2A1D16"
      />
    ) : null;

  return (
    <svg viewBox="0 0 200 250" role="img" aria-label={chef.name} className="h-full w-full">
      <rect width="200" height="250" fill={chef.bg} />
      <circle cx="150" cy="60" r="70" fill="#fff" opacity={0.1} />
      {hairLong}
      <path
        d="M14 250V212Q14 166 100 166Q186 166 186 212V250Z"
        fill={chef.shirt}
      />
      <rect x="88" y="136" width="24" height="34" fill={chef.skin} />
      <circle cx="100" cy="108" r="40" fill={chef.skin} />
      {hat}
      {beard}
      <circle cx="86" cy="108" r="3.6" fill="#2A1D16" />
      <circle cx="114" cy="108" r="3.6" fill="#2A1D16" />
      <path
        d="M88 126Q100 136 112 126"
        stroke="#2A1D16"
        strokeWidth={3.5}
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

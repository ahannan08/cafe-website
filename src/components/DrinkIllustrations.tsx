import { useId } from "react";
import type { BannerDrink } from "@/lib/banner-data";

function wave(y: number, a = 14) {
  return `M-20 ${y}Q40 ${y - a} 100 ${y}T220 ${y}T340 ${y}V560H-20Z`;
}

export function MugDrink() {
  return (
    <svg viewBox="0 -90 400 470" className="h-full w-full overflow-visible">
      <g
        className="banner-steam"
        fill="none"
        stroke="#fff"
        strokeOpacity={0.75}
        strokeWidth={7}
        strokeLinecap="round"
      >
        <path d="M140 70q-20-30 0-55t0-55" />
        <path d="M200 70q-20-30 0-55t0-55" />
        <path d="M260 70q-20-30 0-55t0-55" />
      </g>
      <ellipse cx="180" cy="345" rx="175" ry="24" fill="#E7DAC8" />
      <path
        d="M310 150h30a46 46 0 0 1 0 92h-34"
        fill="none"
        stroke="#F6EFE6"
        strokeWidth={22}
        strokeLinecap="round"
      />
      <path
        d="M45 110H315V200C315 285 260 335 180 335S45 285 45 200Z"
        fill="#F6EFE6"
      />
      <path
        d="M255 110H315V200C315 285 260 335 180 335C230 300 255 240 255 110Z"
        fill="#000"
        fillOpacity={0.07}
      />
      <ellipse cx="180" cy="110" rx="135" ry="30" fill="#EADBC4" />
      <ellipse cx="180" cy="112" rx="116" ry="23" fill="#A8693A" />
      <path
        d="M180 128C140 108 150 90 180 100 210 90 220 108 180 128Z"
        fill="#F6EFE6"
      />
    </svg>
  );
}

export function GlassDrink({ drink }: { drink: BannerDrink }) {
  const clipId = useId();
  const g = "M40 90H260L232 490Q230 506 214 506H86Q70 506 68 490Z";
  const layers = drink.layers ?? [];
  const ice = drink.ice ?? [];

  return (
    <svg viewBox="0 -40 300 570" className="h-full w-full overflow-visible">
      <defs>
        <clipPath id={clipId}>
          <path d={g} />
        </clipPath>
      </defs>
      <path d={g} fill="#fff" fillOpacity={0.18} />
      <g clipPath={`url(#${clipId})`}>
        {layers.map((l) => (
          <path key={l.y} d={wave(l.y)} fill={l.c} />
        ))}
        {ice.map(([x, y, r]) => (
          <rect
            key={`${x}-${y}`}
            x={x}
            y={y}
            width={62}
            height={62}
            rx={13}
            fill="#fff"
            fillOpacity={0.4}
            transform={`rotate(${r} ${x + 31} ${y + 31})`}
          />
        ))}
      </g>
      <rect
        x={172}
        y={-40}
        width={14}
        height={340}
        rx={7}
        fill="#E0A039"
        transform="rotate(10 179 130)"
      />
      <path
        d={g}
        fill="none"
        stroke="#3B2A20"
        strokeOpacity={0.22}
        strokeWidth={7}
      />
      <path d={g} fill="none" stroke="#fff" strokeOpacity={0.7} strokeWidth={3} />
      <path
        d="M62 120L82 460"
        stroke="#fff"
        strokeOpacity={0.5}
        strokeWidth={10}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function DrinkVisual({ drink }: { drink: BannerDrink }) {
  if (drink.type === "mug") return <MugDrink />;
  return <GlassDrink drink={drink} />;
}

export function RoastedStamp() {
  return (
    <svg
      viewBox="0 0 160 160"
      aria-hidden
      className="banner-stamp mx-auto mb-3.5 block w-[clamp(100px,10vw,150px)] text-[var(--banner-fg)]"
    >
      <defs>
        <path
          id="banner-stamp-circle"
          d="M80 80m-62 0a62 62 0 1 1 124 0a62 62 0 1 1-124 0"
        />
      </defs>
      <text
        fontSize={11}
        fill="currentColor"
        textLength={384}
        lengthAdjust="spacing"
      >
        <textPath href="#banner-stamp-circle">
          ROASTED IN-HOUSE ✦ SMALL BATCH ✦ FRESH DAILY ✦
        </textPath>
      </text>
      <path
        d="M80 62l5 13 13 5-13 5-5 13-5-13-13-5 13-5z"
        fill="currentColor"
      />
    </svg>
  );
}

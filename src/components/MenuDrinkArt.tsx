import { useId } from "react";
import type { MenuDrinkStyle } from "@/lib/menu-data";

function wave(y: number, a = 14) {
  return `M-20 ${y}Q40 ${y - a} 100 ${y}T220 ${y}T340 ${y}V560H-20Z`;
}

const ICE: [number, number, number][] = [
  [70, 120, -12],
  [140, 150, 16],
  [100, 250, 8],
  [150, 330, -10],
];

export function MenuMugArt({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 400 380" className="relative h-[84%] w-auto transition-transform duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover/card:-translate-y-2 group-hover/card:-rotate-3">
      <ellipse cx="180" cy="345" rx="175" ry="24" fill="#E3D6C2" />
      <path
        d="M310 150h30a46 46 0 0 1 0 92h-34"
        fill="none"
        stroke="#fff"
        strokeWidth={22}
        strokeLinecap="round"
      />
      <path
        d="M45 110H315V200C315 285 260 335 180 335S45 285 45 200Z"
        fill="#fff"
      />
      <path
        d="M255 110H315V200C315 285 260 335 180 335C230 300 255 240 255 110Z"
        fill="#000"
        fillOpacity={0.07}
      />
      <ellipse cx="180" cy="110" rx="135" ry="30" fill="#EADBC4" />
      <ellipse cx="180" cy="112" rx="116" ry="23" fill={color} />
      <path
        d="M180 128C140 108 150 90 180 100 210 90 220 108 180 128Z"
        fill="#F6EFE6"
      />
    </svg>
  );
}

export function MenuGlassArt({
  style,
  clipSuffix,
}: {
  style: Extract<MenuDrinkStyle, { kind: "glass" }>;
  clipSuffix: string;
}) {
  const clipId = useId();
  const g = "M40 90H260L232 490Q230 506 214 506H86Q70 506 68 490Z";

  return (
    <svg
      viewBox="0 -40 300 570"
      className="relative h-[84%] w-auto transition-transform duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover/card:-translate-y-2 group-hover/card:-rotate-3"
      aria-hidden
    >
      <defs>
        <clipPath id={`${clipId}-${clipSuffix}`}>
          <path d={g} />
        </clipPath>
      </defs>
      <path d={g} fill="#fff" fillOpacity={0.5} />
      <g clipPath={`url(#${clipId}-${clipSuffix})`}>
        {style.layers.map(([fill, y]) => (
          <path key={`${fill}-${y}`} d={wave(y)} fill={fill} />
        ))}
        {ICE.map(([x, y, r]) => (
          <rect
            key={`${x}-${y}`}
            x={x}
            y={y}
            width={62}
            height={62}
            rx={13}
            fill="#fff"
            fillOpacity={0.38}
            transform={`rotate(${r} ${x + 31} ${y + 31})`}
          />
        ))}
      </g>
      {style.straw ? (
        <rect
          x={172}
          y={-40}
          width={14}
          height={340}
          rx={7}
          fill="#E0A039"
          transform="rotate(10 179 130)"
        />
      ) : null}
      <path
        d={g}
        fill="none"
        stroke="#3B2A20"
        strokeOpacity={0.25}
        strokeWidth={6}
      />
      <path
        d="M62 120L82 460"
        stroke="#fff"
        strokeOpacity={0.7}
        strokeWidth={10}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function MenuDrinkArt({
  styleKey,
  style,
  clipSuffix,
}: {
  styleKey: string;
  style: MenuDrinkStyle;
  clipSuffix: string;
}) {
  if (style.kind === "mug") {
    return <MenuMugArt color={style.color} />;
  }
  return <MenuGlassArt style={style} clipSuffix={`${styleKey}-${clipSuffix}`} />;
}

import type { SVGProps } from "react";

type I = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 32 32",
};

export const DogIcon = (p: I) => (
  <svg {...base} {...p}>
    <path d="M8 9.5 6.5 5.6l3.9 1.9M24 9.5l1.5-3.9-3.9 1.9" />
    <path d="M8 9.5c0 0-1.4 4.3-1.4 7.6 0 5.2 4 8.9 9.4 8.9s9.4-3.7 9.4-8.9c0-3.3-1.4-7.6-1.4-7.6" />
    <path d="M12.6 15.4h.02M19.4 15.4h.02" strokeWidth={2.4} />
    <path d="M16 18.2c-1 0-1.8.6-1.8 1.4s.8 1.3 1.8 1.3 1.8-.5 1.8-1.3-.8-1.4-1.8-1.4Z" />
  </svg>
);

export const CatIcon = (p: I) => (
  <svg {...base} {...p}>
    <path d="M7.4 13.6 6.6 6.2l5.6 3.6a12.7 12.7 0 0 1 7.6 0l5.6-3.6-.8 7.4" />
    <path d="M7.4 13.6c-.6 1.6-.9 3-.9 4.3 0 4.6 4.2 7.9 9.5 7.9s9.5-3.3 9.5-7.9c0-1.3-.3-2.7-.9-4.3" />
    <path d="M12.4 16.6h.02M19.6 16.6h.02" strokeWidth={2.4} />
    <path d="M16 19.4v1.5M16 20.9c-.7.9-1.7 1.2-2.6.8M16 20.9c.7.9 1.7 1.2 2.6.8" />
  </svg>
);

export const BirdIcon = (p: I) => (
  <svg {...base} {...p}>
    <path d="M19.6 6.6a4.6 4.6 0 0 0-4.6 4.6c0 5.2-3.6 8-3.6 11.4 0 2 1.7 3.4 4.1 3.4 4.6 0 8.7-4.3 8.7-10 0-2.3-.5-4-1.4-5.4" />
    <path d="M20.6 10.1h.02" strokeWidth={2.4} />
    <path d="m23.6 9.2 3.4-1-3 2.4M11.6 22.6l-3.9 3.1M15 25.9l-.7 1.9" />
  </svg>
);

export const RodentIcon = (p: I) => (
  <svg {...base} {...p}>
    <circle cx="10.4" cy="10.6" r="3.2" />
    <circle cx="21.6" cy="10.6" r="3.2" />
    <path d="M16 8.6c-5 0-9 3.8-9 8.6s4 8.6 9 8.6 9-3.8 9-8.6-4-8.6-9-8.6Z" />
    <path d="M13.2 16.2h.02M18.8 16.2h.02" strokeWidth={2.4} />
    <path d="M16 18.6v1.4M14.4 21.2c1 .8 2.2.8 3.2 0" />
  </svg>
);

export const FishIcon = (p: I) => (
  <svg {...base} {...p}>
    <path d="M4.6 16c3-4.4 6.9-6.6 11.6-6.6 4.7 0 8.6 2.2 11.2 6.6-2.6 4.4-6.5 6.6-11.2 6.6-4.7 0-8.6-2.2-11.6-6.6Z" />
    <path d="M27.4 16c-2.6-4.4 0-6.6 0-6.6M27.4 16c-2.6 4.4 0 6.6 0 6.6" />
    <path d="M10.8 14.6h.02" strokeWidth={2.4} />
    <path d="M16 9.4c.4-2 1.6-3.3 3.4-3.9" />
  </svg>
);

export const BottleIcon = (p: I) => (
  <svg {...base} {...p}>
    <path d="M13 4.8h6v3.4h-6z" />
    <path d="M12 8.2h8a3.4 3.4 0 0 1 3.4 3.4v12.2a3.4 3.4 0 0 1-3.4 3.4h-8a3.4 3.4 0 0 1-3.4-3.4V11.6A3.4 3.4 0 0 1 12 8.2Z" />
    <path d="M8.6 14.6h14.8" />
    <path d="M13.4 19h5.2" />
  </svg>
);

export const ToyIcon = (p: I) => (
  <svg {...base} {...p}>
    <circle cx="16" cy="16" r="10.4" />
    <path d="M8.2 9.2c3.6 1.4 6.2 4.6 7 8.6M23.8 9.2c-3.6 1.4-6.2 4.6-7 8.6M16 26.4c1.6-3.4 4.6-5.8 8.4-6.6M16 26.4c-1.6-3.4-4.6-5.8-8.4-6.6" />
  </svg>
);

export const ShirtIcon = (p: I) => (
  <svg {...base} {...p}>
    <path d="M12.4 5.4 6 8.6l2 5 2.6-1v13.6h10.8V12.6l2.6 1 2-5-6.4-3.2" />
    <path d="M12.4 5.4a3.6 3.6 0 0 0 7.2 0" />
  </svg>
);

export const TruckIllustration = (p: I) => (
  <svg viewBox="0 0 120 84" fill="none" {...p}>
    <rect x="4" y="20" width="60" height="38" rx="6" fill="#f0a63a" />
    <rect x="4" y="20" width="60" height="38" rx="6" stroke="#d98d22" strokeWidth="2" />
    <path d="M64 32h20l14 15v11H64z" fill="#3b8a53" />
    <path d="M64 32h20l14 15v11H64z" stroke="#2c6b40" strokeWidth="2" strokeLinejoin="round" />
    <rect x="68" y="36" width="14" height="10" rx="2" fill="#cfe8d5" />
    <rect x="14" y="30" width="30" height="4" rx="2" fill="#fff" opacity=".65" />
    <rect x="14" y="39" width="20" height="4" rx="2" fill="#fff" opacity=".45" />
    <rect x="0" y="58" width="106" height="7" rx="3.5" fill="#2c6b40" />
    <circle cx="28" cy="66" r="9" fill="#26302c" />
    <circle cx="28" cy="66" r="3.6" fill="#e8e5dc" />
    <circle cx="84" cy="66" r="9" fill="#26302c" />
    <circle cx="84" cy="66" r="3.6" fill="#e8e5dc" />
    <path d="M100 26h16M104 36h14M108 46h10" stroke="#9ec7a9" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

export const BadgeMark = ({ label, ...p }: I & { label: string }) => (
  <svg viewBox="0 0 64 64" fill="none" {...p}>
    <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="2" opacity=".5" />
    <circle cx="32" cy="32" r="23" stroke="currentColor" strokeWidth="1.2" opacity=".3" />
    <text
      x="32"
      y="37"
      textAnchor="middle"
      fontSize="15"
      fontWeight="700"
      fill="currentColor"
      opacity=".75"
    >
      {label}
    </text>
  </svg>
);

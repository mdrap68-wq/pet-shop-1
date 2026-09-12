import type { SVGProps } from "react";

type I = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

export const Search = (p: I) => (
  <svg {...base} {...p}>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.2-3.2" />
  </svg>
);

export const Cart = (p: I) => (
  <svg {...base} {...p}>
    <path d="M3 4h2l2.2 10.4a2 2 0 0 0 2 1.6h7.4a2 2 0 0 0 2-1.55L20.4 8H6" />
    <circle cx="9.5" cy="20" r="1.4" />
    <circle cx="17" cy="20" r="1.4" />
  </svg>
);

export const HeartIcon = (p: I) => (
  <svg {...base} {...p}>
    <path d="M12 20s-7.2-4.4-7.2-9.3A4.1 4.1 0 0 1 12 8.2a4.1 4.1 0 0 1 7.2 2.5C19.2 15.6 12 20 12 20Z" />
  </svg>
);

export const User = (p: I) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="8" r="3.6" />
    <path d="M4.8 20a7.2 7.2 0 0 1 14.4 0" />
  </svg>
);

export const ArrowLeft = (p: I) => (
  <svg {...base} {...p}>
    <path d="M19 12H5" />
    <path d="m11 6-6 6 6 6" />
  </svg>
);

export const ChevronLeft = (p: I) => (
  <svg {...base} {...p}>
    <path d="m14 6-6 6 6 6" />
  </svg>
);

export const Menu = (p: I) => (
  <svg {...base} {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const Close = (p: I) => (
  <svg {...base} {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

export const Clock = (p: I) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="8.4" />
    <path d="M12 7.6V12l2.8 1.8" />
  </svg>
);

export const ShieldCheck = (p: I) => (
  <svg {...base} {...p}>
    <path d="M12 3.2 5 6v5.4c0 4 3 7.5 7 9.4 4-1.9 7-5.4 7-9.4V6l-7-2.8Z" />
    <path d="m9 12 2.2 2.2L15.2 10" />
  </svg>
);

export const Truck = (p: I) => (
  <svg {...base} {...p}>
    <path d="M2.8 6.8h10.4v9.4H2.8z" />
    <path d="M13.2 10h3.6l2.6 2.8v3.4h-6.2z" />
    <circle cx="7" cy="18" r="1.6" />
    <circle cx="16.6" cy="18" r="1.6" />
  </svg>
);

export const Wallet = (p: I) => (
  <svg {...base} {...p}>
    <rect x="3" y="6" width="18" height="13" rx="2.4" />
    <path d="M3 10h18" />
    <path d="M16.5 14.6h1.6" />
  </svg>
);

export const Paw = (p: I) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <ellipse cx="7.2" cy="8.4" rx="2.1" ry="2.7" />
    <ellipse cx="12" cy="6.7" rx="2.1" ry="2.8" />
    <ellipse cx="16.8" cy="8.4" rx="2.1" ry="2.7" />
    <ellipse cx="19.6" cy="13" rx="1.8" ry="2.2" />
    <path d="M12 11.4c2.7 0 5.4 2.1 5.4 4.6 0 2-1.6 3.2-3.5 3.2-1 0-1.4-.3-1.9-.3s-.9.3-1.9.3c-1.9 0-3.5-1.2-3.5-3.2 0-2.5 2.7-4.6 5.4-4.6Z" />
  </svg>
);

export const Instagram = (p: I) => (
  <svg {...base} {...p}>
    <rect x="3.4" y="3.4" width="17.2" height="17.2" rx="5" />
    <circle cx="12" cy="12" r="3.9" />
    <circle cx="17" cy="7" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

export const Telegram = (p: I) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M21.3 4.3 2.9 11.4c-1 .4-1 1.8.1 2.1l4.5 1.4 1.7 5.2c.3.8 1.3 1 1.9.4l2.5-2.4 4.5 3.3c.7.5 1.7.1 1.9-.7l3-14.5c.2-1-.8-1.8-1.7-1.4Zm-3.6 3.5-7.9 7c-.3.2-.4.5-.5.9l-.3 2.4-1.3-4c-.1-.4 0-.8.4-1l9.2-5.6c.4-.2.8.3.4.7Z" />
  </svg>
);

export const Youtube = (p: I) => (
  <svg {...base} {...p}>
    <rect x="2.6" y="5.4" width="18.8" height="13.2" rx="4" />
    <path d="m10.4 9.4 4.6 2.6-4.6 2.6z" fill="currentColor" stroke="none" />
  </svg>
);

export const Twitter = (p: I) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M17.5 3h3.1l-6.8 7.8L21.8 21h-6.2l-4.4-5.7L6.1 21H3l7.3-8.3L2.6 3h6.4l4 5.3L17.5 3Zm-1.1 16.1h1.7L7.7 4.8H5.9l10.5 14.3Z" />
  </svg>
);

export const Apple = (p: I) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M16.4 12.7c0-2.2 1.8-3.3 1.9-3.3-1-1.5-2.6-1.7-3.2-1.7-1.4-.1-2.7.8-3.3.8-.7 0-1.7-.8-2.8-.8-1.5 0-2.8.8-3.5 2.1-1.5 2.6-.4 6.5 1.1 8.6.7 1 1.6 2.2 2.7 2.1 1.1 0 1.5-.7 2.8-.7s1.7.7 2.8.7c1.2 0 1.9-1 2.6-2.1.8-1.2 1.2-2.3 1.2-2.4-.1 0-2.3-.9-2.3-3.3ZM14.3 5.9c.6-.7 1-1.7.9-2.7-.9 0-2 .6-2.6 1.3-.6.6-1.1 1.7-.9 2.6 1 .1 2-.5 2.6-1.2Z" />
  </svg>
);

export const AndroidBot = (p: I) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M6 10.4h12v6.2a1.6 1.6 0 0 1-1.6 1.6H7.6A1.6 1.6 0 0 1 6 16.6v-6.2ZM4.4 10.6a1.2 1.2 0 0 1 2.4 0v4.2a1.2 1.2 0 0 1-2.4 0v-4.2Zm12.8 0a1.2 1.2 0 0 1 2.4 0v4.2a1.2 1.2 0 0 1-2.4 0v-4.2ZM9 18.6h1.9v2.2a1 1 0 0 1-1.9 0v-2.2Zm4.2 0h1.9v2.2a1 1 0 0 1-1.9 0v-2.2ZM8.6 4.2l.8 1.4A5.9 5.9 0 0 1 12 5c1 0 1.9.2 2.6.6l.8-1.4a.4.4 0 1 1 .7.4l-.8 1.4A5.1 5.1 0 0 1 18 9.5H6a5.1 5.1 0 0 1 2.7-3.5l-.8-1.4a.4.4 0 1 1 .7-.4ZM9.3 7.6a.6.6 0 1 0 0 1.2.6.6 0 0 0 0-1.2Zm5.4 0a.6.6 0 1 0 0 1.2.6.6 0 0 0 0-1.2Z" />
  </svg>
);

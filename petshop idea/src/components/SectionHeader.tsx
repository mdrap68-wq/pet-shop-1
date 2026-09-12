import { ChevronLeft } from "./icons";
import { Reveal } from "./Reveal";

export function SectionHeader({
  title,
  actionLabel,
  href = "#",
}: {
  title: string;
  actionLabel: string;
  href?: string;
}) {
  return (
    <Reveal className="mb-6 flex items-center justify-between gap-4">
      <h2 className="text-[17px] font-extrabold text-brand-900 sm:text-[19px]">{title}</h2>
      <a
        href={href}
        className="group inline-flex items-center gap-1 rounded-lg border border-[#e7e7e2] bg-white px-3.5 py-2 text-[11.5px] text-[#5c6367] transition-all duration-300 hover:border-brand-500/40 hover:bg-brand-50 hover:text-brand-700"
      >
        {actionLabel}
        <ChevronLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-0.5" />
      </a>
    </Reveal>
  );
}

import { Reveal } from "../components/Reveal";
import { ArrowLeft } from "../components/icons";
import { categories } from "../data";
import { cn } from "../utils/cn";

function HeartOutline({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 20.4s-8-4.9-8-10.3A4.6 4.6 0 0 1 12 7.4a4.6 4.6 0 0 1 8 2.7c0 5.4-8 10.3-8 10.3Z" />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="mx-auto max-w-[1200px] px-4 pt-5 sm:px-6 sm:pt-7">
      <Reveal className="relative overflow-hidden rounded-[26px] bg-gradient-to-l from-[#fdf7f0] via-[#fbf3e9] to-[#f7ece0]">
        <div className="grid items-stretch md:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
          {/* image (visually right in RTL) */}
          <div className="relative order-1 min-h-[230px] sm:min-h-[300px] md:min-h-[430px]">
            <img
              src="/images/hero.jpg"
              alt="سگ گلدن رتریور و بچه‌گربه در کنار هم"
              className="absolute inset-0 h-full w-full object-cover object-center"
              fetchPriority="high"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#f9f0e4]" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#f9f0e4]/85 to-transparent md:hidden" />
          </div>

          {/* copy */}
          <div className="relative order-2 flex flex-col justify-center px-6 py-10 sm:px-10 md:py-14 lg:ps-14 lg:pe-6">
            <HeartOutline className="absolute right-4 top-9 hidden h-5 w-5 text-[#d8c3ab] md:block" />
            <span className="animate-float absolute right-[3.2rem] top-[7.4rem] hidden h-6 w-6 text-[#d8c3ab] md:block">
              <HeartOutline className="h-6 w-6" />
            </span>

            <h1 className="text-[1.85rem] font-extrabold leading-[1.55] text-brand-900 sm:text-[2.3rem] lg:text-[2.7rem]">
              همه چیز برای
              <br />
              دوست‌داشتنی‌ها
            </h1>

            <p className="mt-5 max-w-[24rem] text-[13px] leading-[2.1] text-[#71797d] sm:text-sm">
              بهترین محصولات و غذاها برای سلامت و شادی و
              <br className="hidden sm:block" /> تندرستی پت شما
            </p>

            <div className="mt-7">
              <a
                href="#products"
                className="group inline-flex items-center gap-2.5 rounded-xl bg-brand-700 px-6 py-3.5 text-[13px] font-medium text-white shadow-[0_10px_24px_-12px_rgba(31,66,48,0.9)] transition-all duration-300 hover:bg-brand-800 hover:shadow-[0_16px_30px_-14px_rgba(31,66,48,0.95)] hover:-translate-y-0.5"
              >
                مشاهده محصولات
                <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function Categories() {
  return (
    <section id="categories" className="mx-auto max-w-[1200px] px-4 py-10 sm:px-6 sm:py-14">
      <ul className="no-scrollbar -mx-1 flex snap-x gap-2 overflow-x-auto px-1 sm:mx-0 sm:grid sm:grid-cols-4 sm:gap-4 sm:overflow-visible sm:px-0 lg:grid-cols-8">
        {categories.map(({ label, Icon, tone }, i) => (
          <Reveal as="li" key={label} delay={i * 55} className="shrink-0 snap-start">
            <a
              href="#products"
              className="group flex w-[92px] flex-col items-center gap-3 rounded-2xl px-1 py-2 sm:w-auto"
            >
              <span
                className={cn(
                  "flex h-[62px] w-[62px] items-center justify-center rounded-full text-brand-900/85 transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-[0_14px_24px_-14px_rgba(24,40,30,0.6)]",
                  tone,
                )}
              >
                <Icon className="h-8 w-8" />
              </span>
              <span className="text-center text-[11.5px] leading-5 text-[#5c6367] transition-colors group-hover:text-brand-700">
                {label}
              </span>
            </a>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

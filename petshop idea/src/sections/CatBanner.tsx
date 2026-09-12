import { Reveal } from "../components/Reveal";
import { Clock, Paw, ShieldCheck, Truck, Wallet } from "../components/icons";

const features = [
  {
    Icon: ShieldCheck,
    title: "ضمانت اصالت کالا",
    text: "تمامی محصولات با ضمانت اصالت",
  },
  { Icon: Clock, title: "پشتیبانی ۲۴/۷", text: "همیشه همراه شما هستیم" },
  { Icon: Truck, title: "ارسال سریع", text: "ارسال در کمتر از ۲۴ ساعت" },
  { Icon: Wallet, title: "پرداخت امن", text: "پرداخت آنلاین با امنیت کامل" },
];

export function CatBanner() {
  return (
    <section id="features" className="mx-auto max-w-[1200px] px-4 pb-12 sm:px-6 sm:pb-16">
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1.95fr)_minmax(0,1fr)]">
        {/* banner */}
        <Reveal className="order-1 lg:order-2">
          <article className="group relative h-full overflow-hidden rounded-[22px] bg-gradient-to-l from-[#fdfcf9] to-[#f6f2ea]">
            <div className="grid h-full items-center gap-0 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
              {/* copy (right) */}
              <div className="order-2 px-7 py-8 text-center sm:order-1 sm:pe-9 sm:ps-4 sm:text-right lg:py-12">
                <h2 className="text-[19px] font-extrabold leading-[2] text-brand-900 lg:text-[22px]">
                  محصولات جدید
                  <br />
                  برای گربه‌های دوست‌داشتنی
                </h2>
                <p className="mt-3 text-[12px] text-[#7f868a] lg:text-[13px]">
                  انواع لوازم بازی، خواب و سرگرمی
                </p>
                <a
                  href="#products"
                  className="mt-6 inline-flex items-center gap-2.5 rounded-xl bg-brand-600 px-6 py-3.5 text-[13px] font-medium text-white shadow-[0_12px_26px_-14px_rgba(44,107,64,0.95)] transition-all duration-300 hover:bg-brand-700 hover:-translate-y-0.5"
                >
                  مشاهده محصولات
                  <Paw className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
                </a>
              </div>

              {/* image (left) */}
              <div className="relative order-1 h-[230px] sm:order-2 sm:h-full sm:min-h-[290px]">
                <img
                  src="/images/cattree.jpg"
                  alt="اسکراچر و درخت گربه چند طبقه"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.04]"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-[#f6f2ea]"
                  style={{
                    maskImage: "linear-gradient(to left, black 0%, transparent 34%)",
                    WebkitMaskImage: "linear-gradient(to left, black 0%, transparent 34%)",
                  }}
                />
              </div>
            </div>
          </article>
        </Reveal>

        {/* features */}
        <ul className="order-2 grid gap-3 sm:grid-cols-2 lg:order-1 lg:grid-cols-1">
          {features.map(({ Icon, title, text }, i) => (
            <Reveal as="li" key={title} delay={i * 80} className="h-full">
              <div className="group flex h-full items-center justify-between gap-3 rounded-[14px] border border-[#edece7] bg-white px-4 py-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-100 hover:shadow-card">
                <div className="min-w-0 text-right">
                  <h3 className="text-[12.5px] font-bold text-brand-900">{title}</h3>
                  <p className="mt-1 truncate text-[10.5px] text-[#8b9195]">{text}</p>
                </div>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cream text-brand-600 transition-all duration-300 group-hover:bg-brand-600 group-hover:text-white">
                  <Icon className="h-[18px] w-[18px]" />
                </span>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

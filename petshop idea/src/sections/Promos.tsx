import { Reveal } from "../components/Reveal";
import { TruckIllustration } from "../components/CategoryIcons";

const cardBase =
  "group relative flex min-h-[240px] flex-col overflow-hidden rounded-[22px] p-6 sm:p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_26px_46px_-26px_rgba(24,40,30,0.35)]";

const pill =
  "inline-flex w-fit items-center rounded-lg bg-white/95 px-4 py-2.5 text-[12px] font-medium text-brand-800 shadow-[0_6px_16px_-10px_rgba(24,40,30,0.5)] transition-all duration-300 hover:bg-white hover:shadow-[0_12px_22px_-12px_rgba(24,40,30,0.6)] hover:-translate-y-0.5";

export function Promos() {
  return (
    <section id="promos" className="mx-auto max-w-[1200px] px-4 pb-6 sm:px-6">
      <div className="grid gap-5 md:grid-cols-3">
        {/* dry food discount */}
        <Reveal className="h-full" delay={0}>
          <article className={`${cardBase} h-full bg-gradient-to-bl from-[#eef7e6] via-[#e9f4e1] to-[#dcecd2]`}>
            <div className="relative z-10 max-w-[62%]">
              <h3 className="text-[15px] font-extrabold leading-8 text-brand-900">
                تخفیف ویژه غذای خشک
              </h3>
              <p className="mt-1 text-[17px] font-extrabold text-brand-900">تا ۴۰٪ تخفیف</p>
              <p className="mt-2 text-[12px] text-[#6d7a6b]">برای بهترین برندها</p>
            </div>
            <div className="relative z-10 mt-auto pt-6">
              <a href="#products" className={pill}>
                خرید کنید
              </a>
            </div>
            <img
              src="/images/promo-food.png"
              alt="کاسه چوبی غذای خشک حیوانات"
              loading="lazy"
              className="pointer-events-none absolute bottom-2 left-[-8px] w-[48%] max-w-[190px] mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
            />
          </article>
        </Reveal>

        {/* free shipping */}
        <Reveal className="h-full" delay={90}>
          <article className={`${cardBase} h-full bg-gradient-to-bl from-[#fdf6ea] via-[#fbf1e2] to-[#f7e8d5]`}>
            <div className="relative z-10 max-w-[62%]">
              <h3 className="text-[15px] font-extrabold leading-8 text-brand-900">ارسال رایگان</h3>
              <p className="mt-2 text-[12px] leading-[2] text-[#7c7669]">
                برای خریدهای بالای
                <br />
                ۱٬۰۰۰٬۰۰۰ تومان
              </p>
            </div>
            <div className="relative z-10 mt-auto pt-6">
              <a href="#features" className={pill}>
                اطلاعات بیشتر
              </a>
            </div>
            <TruckIllustration className="pointer-events-none absolute bottom-6 left-3 w-[46%] max-w-[170px] transition-transform duration-700 group-hover:-translate-x-2" />
          </article>
        </Reveal>

        {/* first purchase */}
        <Reveal className="h-full" delay={180}>
          <article className={`${cardBase} h-full bg-gradient-to-bl from-[#fdf0f3] via-[#fce8ee] to-[#f9dbe4]`}>
            <div className="relative z-10 max-w-[62%]">
              <h3 className="text-[15px] font-extrabold leading-8 text-brand-900">اولین خرید؟</h3>
              <p className="mt-1 text-[17px] font-extrabold text-brand-900">۵۰٪ تخفیف</p>
              <p className="mt-2 text-[12px] text-[#8a6a73]">
                با کد تخفیف <span className="font-bold tracking-wide">PETO10</span>
              </p>
            </div>
            <div className="relative z-10 mt-auto pt-6">
              <a href="#newsletter" className={pill}>
                استفاده کنید
              </a>
            </div>
            <img
              src="/images/promo-gift.png"
              alt="جعبه هدیه با روبان صورتی"
              loading="lazy"
              className="pointer-events-none absolute bottom-0 left-[-10px] w-[52%] max-w-[200px] mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
            />
          </article>
        </Reveal>
      </div>
    </section>
  );
}

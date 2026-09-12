import { useState, type FormEvent } from "react";
import { Reveal } from "../components/Reveal";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setDone(true);
    setEmail("");
    window.setTimeout(() => setDone(false), 3500);
  };

  return (
    <section id="newsletter" className="mx-auto max-w-[1200px] px-4 pb-14 sm:px-6 sm:pb-20">
      <Reveal>
        <div className="relative overflow-hidden rounded-[22px] bg-gradient-to-l from-[#fdf8f0] via-[#fbf4e9] to-[#f8eede]">
          <div className="grid items-center gap-6 md:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)]">
            {/* copy + form (right) */}
            <div className="order-2 px-6 py-8 text-center md:order-1 md:px-10 md:py-12 md:text-right">
              <h2 className="text-[16px] font-extrabold leading-[2] text-brand-900 sm:text-[19px]">
                از جدیدترین تخفیف‌ها و محصولات باخبر شوید!
              </h2>
              <p className="mt-2 text-[12px] leading-[2] text-[#7f7768]">
                با عضویت در خبرنامه پت‌وشاپ، از تخفیف‌ها و محتوای اختصاصی ما مطلع شوید
              </p>

              <form
                onSubmit={submit}
                className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:items-center"
              >
                <label htmlFor="newsletter-email" className="sr-only">
                  ایمیل خود را وارد کنید
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ایمیل خود را وارد کنید ..."
                  className="h-12 flex-1 rounded-xl border border-white bg-white px-4 text-[12.5px] text-ink outline-none transition-all duration-300 placeholder:text-[#b0b5b8] focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10"
                />
                <button
                  type="submit"
                  className="h-12 rounded-xl bg-brand-700 px-8 text-[13px] font-medium text-white shadow-[0_12px_26px_-14px_rgba(31,66,48,0.95)] transition-all duration-300 hover:bg-brand-800 hover:-translate-y-0.5 active:scale-[0.98]"
                >
                  {done ? "ثبت شد ✓" : "عضویت"}
                </button>
              </form>
              <p
                className={`mt-2 text-[11px] text-brand-600 transition-opacity duration-300 ${
                  done ? "opacity-100" : "opacity-0"
                }`}
                role="status"
              >
                عضویت شما با موفقیت ثبت شد. منتظر تخفیف‌های ویژه باشید!
              </p>
            </div>

            {/* illustration (left) */}
            <div className="order-1 flex items-end justify-center md:order-2 md:h-full">
              <img
                src="/images/newsletter.png"
                alt="توله‌سگ داخل جعبه هدیه"
                loading="lazy"
                className="w-[72%] max-w-[290px] object-contain mix-blend-multiply md:w-full"
              />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

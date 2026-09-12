import { Reveal } from "../components/Reveal";
import { BadgeMark } from "../components/CategoryIcons";
import {
  AndroidBot,
  Apple,
  Instagram,
  Paw,
  Telegram,
  Twitter,
  Youtube,
} from "../components/icons";
import { footerColumns } from "../data";

const socials = [
  { Icon: Instagram, label: "اینستاگرام" },
  { Icon: Telegram, label: "تلگرام" },
  { Icon: Youtube, label: "یوتیوب" },
  { Icon: Twitter, label: "ایکس" },
];

export function Footer() {
  return (
    <footer id="footer" className="bg-white">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <Reveal className="rounded-[22px] border border-[#eeede8] bg-[#fdfdfb]">
          <div className="grid divide-y divide-[#eeede8] md:grid-cols-2 md:divide-y-0 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.25fr)] lg:divide-x lg:divide-x-reverse lg:divide-[#eeede8]">
            {/* about */}
            <div className="px-6 py-8 sm:px-8">
              <h3 className="text-[13.5px] font-extrabold text-brand-900">درباره پت‌وشاپ</h3>
              <div className="mt-4 flex items-start gap-4">
                <p className="flex-1 text-[11.5px] leading-[2.4] text-[#8b9195]">
                  پت‌وشاپ، بزرگ‌ترین فروشگاه اینترنتی محصولات و ملزومات حیوانات خانگی در ایران است.
                  هدف ما ارائه بهترین محصولات برای سلامت و شادی دوست‌داشتنی‌های شماست.
                </p>
                <span className="mt-1 hidden h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-500 sm:flex">
                  <Paw className="h-6 w-6" />
                </span>
              </div>
            </div>

            {/* link columns */}
            {footerColumns.map((col) => (
              <nav key={col.title} className="px-6 py-8 sm:px-8" aria-label={col.title}>
                <h3 className="text-[13.5px] font-extrabold text-brand-900">{col.title}</h3>
                <ul className="mt-4 space-y-3.5">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#footer"
                        className="group inline-flex items-center gap-2 text-[11.5px] text-[#8b9195] transition-colors hover:text-brand-700"
                      >
                        <span className="h-1 w-1 rounded-full bg-brand-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}

            {/* app + social */}
            <div className="px-6 py-8 sm:px-8">
              <h3 className="flex items-center justify-end gap-2 text-[13.5px] font-extrabold text-brand-900">
                دانلود اپلیکیشن
                <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
              </h3>
              <p className="mt-4 text-left text-[11.5px] text-[#8b9195] sm:text-right">
                اپلیکیشن پت‌وشاپ را دانلود کنید
              </p>

              <div className="mt-4 flex flex-wrap justify-start gap-2.5">
                <a
                  href="#footer"
                  className="flex items-center gap-2 rounded-xl border border-[#eae9e4] bg-white px-3 py-2.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-100 hover:shadow-card"
                >
                  <Apple className="h-6 w-6 text-brand-900" />
                  <span className="text-right leading-tight">
                    <span className="block text-[9px] text-[#a2a8ab]">دریافت از</span>
                    <span className="block text-[11px] font-bold text-brand-900">اپ استور</span>
                  </span>
                </a>
                <a
                  href="#footer"
                  className="flex items-center gap-2 rounded-xl border border-[#dbe9f7] bg-[#f4f9fe] px-3 py-2.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#b9d7f2] hover:shadow-card"
                >
                  <AndroidBot className="h-6 w-6 text-[#2d7dd2]" />
                  <span className="text-right leading-tight">
                    <span className="block text-[9px] text-[#7aa0c4]">دریافت از</span>
                    <span className="block text-[11px] font-bold text-[#1f5f9e]">کافه بازار</span>
                  </span>
                </a>
              </div>

              <h3 className="mt-8 text-[13.5px] font-extrabold text-brand-900">ما را دنبال کنید</h3>
              <ul className="mt-4 flex items-center gap-2.5">
                {socials.map(({ Icon, label }) => (
                  <li key={label}>
                    <a
                      href="#footer"
                      aria-label={label}
                      className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#eae9e4] bg-white text-[#8b9195] transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-500/40 hover:bg-brand-50 hover:text-brand-600"
                    >
                      <Icon className="h-[17px] w-[17px]" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>

      {/* bottom bar */}
      <div className="mt-8 border-t border-[#efeeea]">
        <div className="mx-auto flex max-w-[1200px] flex-col-reverse items-center gap-6 px-4 py-6 sm:px-6 md:flex-row md:justify-between">
          <ul className="flex items-center gap-4 opacity-70">
            {["ساماندهی", "رسانه", "اینماد"].map((l) => (
              <li key={l}>
                <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#eeede8] text-[#7c8489] transition-colors hover:text-brand-600">
                  <BadgeMark label={l.slice(0, 2)} className="h-7 w-7" />
                </span>
              </li>
            ))}
          </ul>

          <p className="text-center text-[11.5px] text-[#8b9195]">
            کلیه حقوق این سایت متعلق به{" "}
            <span className="font-bold text-brand-800">پت‌وشاپ</span> می‌باشد.
          </p>

          <ul className="flex items-center gap-4 opacity-70">
            {["اعتماد", "الکترونیک", "کسب‌وکار"].map((l) => (
              <li key={l}>
                <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#eeede8] text-[#7c8489] transition-colors hover:text-brand-600">
                  <BadgeMark label={l.slice(0, 2)} className="h-7 w-7" />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

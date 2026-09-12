import { useEffect, useState } from "react";
import { navLinks } from "../data";
import { cn } from "../utils/cn";
import { Cart, Close, HeartIcon, Menu, Paw, Search, User } from "./icons";

function Logo({ className }: { className?: string }) {
  return (
    <a href="#home" className={cn("group flex items-center gap-2", className)} aria-label="پت‌وشاپ">
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-100 text-brand-600 transition-transform duration-300 group-hover:-rotate-12">
        <Paw className="h-5 w-5" />
      </span>
      <span className="text-[1.6rem] font-extrabold tracking-[0.16em] text-brand-800" dir="ltr">
        PET<span className="text-brand-500">O</span>
      </span>
    </a>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header id="home" className="relative z-50">
      {/* announcement */}
      <div className="overflow-hidden bg-brand-800 text-white">
        <div className="mx-auto flex max-w-[1200px] items-center justify-center px-4 py-2">
          <p className="flex items-center gap-2 text-[11px] font-medium sm:text-xs">
            <span aria-hidden="true">🐾</span>
            ارسال رایگان برای خریدهای بالای ۱٬۰۰۰٬۰۰۰ تومان
          </p>
        </div>
      </div>

      <div
        className={cn(
          "sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur transition-shadow duration-300",
          stuck && "shadow-[0_6px_24px_-18px_rgba(24,40,30,0.5)]",
        )}
      >
        <div className="mx-auto flex max-w-[1200px] items-center gap-4 px-4 py-3.5 sm:px-6 lg:gap-8">
          {/* right: logo */}
          <Logo className="shrink-0" />

          {/* center: search */}
          <div className="hidden flex-1 justify-center md:flex">
            <form
              className="relative w-full max-w-[430px]"
              onSubmit={(e) => e.preventDefault()}
              role="search"
            >
              <input
                type="search"
                placeholder="جستجو در بین بیش از ۵۰۰۰ کالا ..."
                aria-label="جستجوی محصولات"
                className="h-11 w-full rounded-full border border-[#e6e6e2] bg-white pr-5 pl-12 text-[13px] text-ink outline-none transition-all duration-300 placeholder:text-[#a9afb2] hover:border-brand-100 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10"
              />
              <button
                type="submit"
                aria-label="جستجو"
                className="absolute left-1.5 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-[#8e9599] transition-colors hover:bg-brand-50 hover:text-brand-600"
              >
                <Search className="h-[18px] w-[18px]" />
              </button>
            </form>
          </div>

          {/* left: actions */}
          <div className="ms-auto flex items-center gap-1.5 sm:gap-2.5">
            <a
              href="#login"
              className="hidden items-center gap-2 rounded-full px-2.5 py-2 text-xs text-[#5d6569] transition-colors hover:text-brand-700 sm:flex"
            >
              <User className="h-[18px] w-[18px]" />
              <span className="whitespace-nowrap">ورود / ثبت نام</span>
            </a>

            <button
              type="button"
              aria-label="علاقه‌مندی‌ها"
              className="group relative flex h-10 w-10 items-center justify-center rounded-full bg-cream/80 text-brand-800 transition-all duration-300 hover:bg-cream-dark hover:-translate-y-0.5"
            >
              <HeartIcon className="h-[19px] w-[19px] transition-transform duration-300 group-hover:scale-110" />
            </button>

            <button
              type="button"
              aria-label="سبد خرید"
              className="group relative flex h-10 w-10 items-center justify-center rounded-full bg-cream/80 text-brand-800 transition-all duration-300 hover:bg-cream-dark hover:-translate-y-0.5"
            >
              <Cart className="h-[19px] w-[19px] transition-transform duration-300 group-hover:scale-110" />
              <span className="absolute -top-0.5 -right-0.5 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-accent px-1 text-[10px] font-bold text-white">
                ۰
              </span>
            </button>

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="باز کردن منو"
              className="flex h-10 w-10 items-center justify-center rounded-full text-brand-800 transition-colors hover:bg-cream lg:hidden"
            >
              <Menu className="h-[22px] w-[22px]" />
            </button>
          </div>
        </div>

        {/* mobile search */}
        <div className="border-t border-black/5 px-4 py-2.5 md:hidden">
          <form className="relative" onSubmit={(e) => e.preventDefault()} role="search">
            <input
              type="search"
              placeholder="جستجو در بین بیش از ۵۰۰۰ کالا ..."
              aria-label="جستجوی محصولات"
              className="h-10 w-full rounded-full border border-[#e6e6e2] bg-white pr-4 pl-11 text-[13px] outline-none placeholder:text-[#a9afb2] focus:border-brand-500"
            />
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8e9599]">
              <Search className="h-[17px] w-[17px]" />
            </span>
          </form>
        </div>

        {/* nav */}
        <nav
          aria-label="ناوبری اصلی"
          className="hidden border-t border-black/5 bg-white lg:block"
        >
          <ul className="mx-auto flex max-w-[1060px] items-center justify-between px-6 py-3 text-[13px]">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={cn(
                    "relative inline-block py-1 transition-colors duration-200",
                    "after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:rounded-full after:bg-current after:transition-transform after:duration-300 hover:after:scale-x-100",
                    item.accent
                      ? "font-semibold text-accent"
                      : "text-[#4c5459] hover:text-brand-700",
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-[60] lg:hidden",
          open ? "pointer-events-auto" : "pointer-events-none",
        )}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={cn(
            "absolute inset-0 bg-brand-900/40 backdrop-blur-sm transition-opacity duration-300",
            open ? "opacity-100" : "opacity-0",
          )}
        />
        <aside
          className={cn(
            "absolute inset-y-0 right-0 flex w-[82%] max-w-[320px] flex-col bg-white shadow-2xl transition-transform duration-400 ease-[cubic-bezier(.22,1,.36,1)]",
            open ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex items-center justify-between border-b border-black/5 px-5 py-4">
            <Logo />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="بستن منو"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-cream text-brand-800"
            >
              <Close className="h-5 w-5" />
            </button>
          </div>
          <ul className="flex-1 overflow-y-auto px-2 py-3 text-[15px]">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block rounded-xl px-4 py-3 transition-colors hover:bg-cream",
                    item.accent ? "font-semibold text-accent" : "text-[#3c4247]",
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="border-t border-black/5 p-4">
            <a
              href="#login"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 rounded-xl bg-brand-700 py-3 text-sm font-medium text-white"
            >
              <User className="h-[18px] w-[18px]" />
              ورود / ثبت نام
            </a>
          </div>
        </aside>
      </div>
    </header>
  );
}

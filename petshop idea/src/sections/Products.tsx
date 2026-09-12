import { Reveal } from "../components/Reveal";
import { SectionHeader } from "../components/SectionHeader";
import { Cart, HeartIcon } from "../components/icons";
import { products } from "../data";
import { cn } from "../utils/cn";

export function Products() {
  return (
    <section id="products" className="mx-auto max-w-[1200px] px-4 py-12 sm:px-6 sm:py-16">
      <SectionHeader title="محصولات پرفروش" actionLabel="مشاهده همه" href="#products" />

      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {products.map((product, i) => (
          <Reveal as="li" key={product.id} delay={i * 70} className="h-full">
            <article className="group flex h-full flex-col overflow-hidden rounded-[18px] border border-[#edece7] bg-white transition-all duration-400 hover:-translate-y-1.5 hover:border-brand-100 hover:shadow-hover">
              <div className="relative flex h-[150px] items-center justify-center bg-white p-4 sm:h-[165px]">
                {product.badge && (
                  <span className="absolute right-3 top-3 rounded-md bg-brand-50 px-2 py-1 text-[10px] font-semibold text-brand-600">
                    {product.badge}
                  </span>
                )}
                <button
                  type="button"
                  aria-label={`افزودن ${product.title} به علاقه‌مندی‌ها`}
                  className="absolute left-2.5 top-2.5 z-10 flex h-8 w-8 items-center justify-center rounded-full text-[#b6bbbd] transition-all duration-300 hover:bg-blush hover:text-[#e05a80]"
                >
                  <HeartIcon className="h-[17px] w-[17px]" />
                </button>
                <img
                  src={product.image}
                  alt={product.title}
                  loading="lazy"
                  className="max-h-full w-auto max-w-[78%] object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-[1.07]"
                />
              </div>

              <div className="flex flex-1 flex-col border-t border-[#f1f0ec] px-4 pb-4 pt-3.5">
                <h3 className="text-[12.5px] font-bold leading-6 text-brand-900 transition-colors group-hover:text-brand-600">
                  {product.title}
                </h3>
                <p className="mt-0.5 text-[11px] leading-6 text-[#8b9195]">{product.subtitle}</p>

                <div className="mt-auto flex items-center justify-between gap-2 pt-4">
                  <p className="text-[12px] font-bold text-brand-900">
                    {product.price}
                    <span className="ms-1 text-[10.5px] font-normal text-[#8b9195]">تومان</span>
                  </p>
                  <button
                    type="button"
                    aria-label={`افزودن ${product.title} به سبد خرید`}
                    className={cn(
                      "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cream text-brand-800",
                      "transition-all duration-300 hover:bg-brand-700 hover:text-white active:scale-95",
                    )}
                  >
                    <Cart className="h-[17px] w-[17px]" />
                  </button>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

import { Reveal } from "../components/Reveal";
import { SectionHeader } from "../components/SectionHeader";
import { Clock } from "../components/icons";
import { posts } from "../data";
import { cn } from "../utils/cn";

export function Blog() {
  return (
    <section id="blog" className="mx-auto max-w-[1200px] px-4 pb-14 sm:px-6 sm:pb-20">
      <SectionHeader title="مقالات و راهنمایی" actionLabel="مشاهده همه مقالات" href="#blog" />

      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, i) => (
          <Reveal as="li" key={post.id} delay={i * 100} className="h-full">
            <article className="group flex h-full flex-col overflow-hidden rounded-[18px] border border-[#edece7] bg-white transition-all duration-400 hover:-translate-y-1.5 hover:border-brand-100 hover:shadow-hover">
              <a href="#blog" className="relative block h-[150px] overflow-hidden sm:h-[165px]">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.06]"
                />
                <span
                  className={cn(
                    "absolute left-3 top-3 rounded-md px-2.5 py-1 text-[10.5px] font-semibold shadow-[0_4px_12px_-6px_rgba(0,0,0,0.4)]",
                    post.tagTone,
                  )}
                >
                  {post.tag}
                </span>
              </a>

              <div className="flex flex-1 flex-col px-5 pb-4 pt-4">
                <h3 className="text-[13px] font-bold leading-7 text-brand-900 transition-colors group-hover:text-brand-600">
                  <a href="#blog">{post.title}</a>
                </h3>
                <p className="mt-2 text-[11.5px] leading-[2.1] text-[#8b9195]">{post.excerpt}</p>
                <div className="mt-auto flex items-center gap-1.5 pt-4 text-[10.5px] text-[#a2a8ab]">
                  <Clock className="h-3.5 w-3.5" />
                  <span>{post.read}</span>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

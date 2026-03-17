import AnimateOnScroll from "@/src/components/ui/AnimateOnScroll";
import type { Dictionary } from "@/src/lib/i18n";

type Props = { dict: Dictionary["hero"] };

export default function Hero({ dict }: Props) {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-14">
      <div className="max-w-5xl w-full">
        <AnimateOnScroll delay={0}>
          <p className="text-zinc-500 text-sm font-mono mb-4">{dict.greeting}</p>
        </AnimateOnScroll>
        <AnimateOnScroll delay={100}>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-4">
            Piot <span className="text-zinc-400">Mike</span>
          </h1>
        </AnimateOnScroll>
        <AnimateOnScroll delay={200}>
          <p className="text-xl md:text-2xl text-zinc-400 max-w-xl mb-10">{dict.description}</p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

import AnimateOnScroll from "@/src/components/ui/AnimateOnScroll";
import type { Dictionary } from "@/src/lib/i18n";
import { CONTACTS } from "@/src/lib/constant";

type Props = { dict: Dictionary["contact"] };

export default function Contact({ dict }: Props) {
  return (
    <section id="contact" className="min-h-screen flex items-center px-6">
      <div className="max-w-5xl mx-auto w-full">
        <AnimateOnScroll delay={0}>
          <p className="text-zinc-500 text-sm font-mono mb-3">{dict.label}</p>
          <h2 className="text-4xl font-bold mb-4">{dict.title}</h2>
          <p className="text-zinc-400 max-w-xl mb-12">{dict.description}</p>
        </AnimateOnScroll>

        <div className="flex flex-col gap-4 max-w-xl">
          {CONTACTS.map(({ icon: Icon, label, value, href }, i) => (
            <AnimateOnScroll key={label} delay={i * 100}>
              <a
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="flex items-center gap-4 w-full bg-zinc-900 border border-zinc-800 rounded-xl px-6 py-5 hover:border-zinc-600 hover:bg-zinc-800/50 transition-colors group"
              >
                <Icon className="text-2xl text-zinc-400 group-hover:text-white transition-colors shrink-0" />
                <div>
                  <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-0.5">
                    {label}
                  </p>
                  <p className="text-sm text-zinc-300 group-hover:text-white transition-colors">
                    {value}
                  </p>
                </div>
              </a>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

import AnimateOnScroll from "@/src/components/ui/AnimateOnScroll";
import type { Dictionary } from "@/src/lib/i18n";
import { SKILLS, ICON_MAP } from "@/src/lib/constant";

type Props = { dict: Dictionary["skills"] };

export default function Skills({ dict }: Props) {
  return (
    <section id="skills" className="min-h-screen flex items-center px-6 bg-zinc-900/40">
      <div className="max-w-5xl mx-auto w-full">
        <AnimateOnScroll delay={0}>
          <p className="text-zinc-500 text-sm font-mono mb-3">{dict.label}</p>
          <h2 className="text-4xl font-bold mb-4">{dict.title}</h2>
          <p className="text-zinc-400 max-w-xl mb-12">{dict.intro}</p>
        </AnimateOnScroll>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {SKILLS.map((skill) => {
            const Icon = ICON_MAP[skill.name];
            return (
              <AnimateOnScroll key={skill.name} delay={skill.delay}>
                <div className="bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 flex items-center gap-3 text-sm text-zinc-300 hover:border-zinc-600 hover:text-white transition-colors">
                  {Icon && <Icon className="text-lg shrink-0" />}
                  {skill.name}
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}

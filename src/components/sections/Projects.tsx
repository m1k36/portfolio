import AnimateOnScroll from "@/src/components/ui/AnimateOnScroll";
import type { Dictionary } from "@/src/lib/i18n";
import { PROJECT_TAGS, ICON_MAP } from "@/src/lib/constant";

type Props = { dict: Dictionary["projects"] };

export default function Projects({ dict }: Props) {
  return (
    <section id="projects" className="min-h-screen flex items-center px-6 py-24">
      <div className="max-w-5xl mx-auto w-full">
        <AnimateOnScroll delay={0}>
          <p className="text-zinc-500 text-sm font-mono mb-3">{dict.label}</p>
          <h2 className="text-4xl font-bold mb-14">{dict.title}</h2>
        </AnimateOnScroll>

        <div className="flex flex-col">
          {dict.items.map((project, i) => (
            <AnimateOnScroll key={project.title} delay={i * 80}>
              <a
                href="#"
                className="group flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-10 py-8 border-t border-zinc-800 hover:border-zinc-600 transition-colors last:border-b"
              >
                <span className="text-5xl font-bold text-zinc-800 group-hover:text-zinc-700 transition-colors tabular-nums w-16 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-semibold group-hover:text-white transition-colors">
                      {project.title}
                    </h3>
                    <svg
                      className="w-4 h-4 text-zinc-600 group-hover:text-zinc-300 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 17L17 7M17 7H7M17 7v10"
                      />
                    </svg>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {PROJECT_TAGS[i]?.map((tag) => {
                      const Icon = ICON_MAP[tag];
                      return (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-500 bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded group-hover:border-zinc-700 transition-colors"
                        >
                          {Icon && <Icon className="text-sm shrink-0" />}
                          {tag}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </a>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

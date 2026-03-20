import AnimateOnScroll from "@/src/components/ui/AnimateOnScroll";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/src/components/ui/accordion";
import type { Dictionary } from "@/src/lib/i18n";
import { ICON_MAP } from "@/src/lib/constant";

const STAGGER_DELAY_MS = 80;

type Props = { dict: Dictionary["projects"] };

export default function Projects({ dict }: Props) {
  return (
    <section id="projects" className="min-h-screen flex items-center px-6 py-24">
      <div className="max-w-5xl mx-auto w-full">
        <AnimateOnScroll delay={0}>
          <p className="text-zinc-500 text-sm font-mono mb-3">{dict.label}</p>
          <h2 className="text-4xl font-bold mb-14">{dict.title}</h2>
        </AnimateOnScroll>

        <Accordion type="single" collapsible className="w-full">
          {dict.items.map((project, i) => (
            <AnimateOnScroll key={project.title} delay={i * STAGGER_DELAY_MS}>
              <AccordionItem
                value={`project-${i}`}
                className="border-t border-zinc-800 last:border-b border-b-0"
              >
                {/* Trigger: number | content | chevron */}
                <AccordionTrigger className="group py-8 hover:no-underline [&>svg]:text-zinc-600 [&>svg]:shrink-0 [&[data-state=open]>svg]:text-zinc-300">
                  <span className="text-5xl font-bold text-zinc-800 group-hover:text-zinc-700 transition-colors tabular-nums w-16 shrink-0 text-left">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="flex-1 min-w-0 text-left mx-6">
                    <h3 className="text-xl font-semibold group-hover:text-white transition-colors mb-2">
                      {project.title}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags?.map((tag) => {
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
                </AccordionTrigger>

                {/* Expanded content: offset by number width */}
                <AccordionContent>
                  <div className="flex gap-6 pb-6">
                    <div className="w-16 shrink-0" />
                    <div className="flex-1 min-w-0 border-l border-zinc-800 pl-6 mx-0">
                      <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                        {project.details}
                      </p>
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors border border-zinc-800 hover:border-zinc-600 px-3 py-1.5 rounded"
                        >
                          <svg
                            className="w-3.5 h-3.5"
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
                          View project
                        </a>
                      )}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </AnimateOnScroll>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

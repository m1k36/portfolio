import AnimateOnScroll from "@/src/components/AnimateOnScroll";
import { ScrollArea, ScrollBar } from "@/src/components/ui/scroll-area";
import { PROJECTS } from "@/src/lib/constant";

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <AnimateOnScroll delay={0}>
          <p className="text-zinc-500 text-sm font-mono mb-3">03. Projects</p>
          <h2 className="text-4xl font-bold mb-12">Selected work</h2>
        </AnimateOnScroll>
      </div>

      <AnimateOnScroll delay={100}>
        <ScrollArea className="w-full">
          <div className="flex gap-5 px-6 pb-6" style={{ width: "max-content" }}>
            {PROJECTS.map((project) => (
              <div
                key={project.title}
                className="w-80 shrink-0 bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-zinc-600 transition-colors group"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <svg
                    className="w-4 h-4 text-zinc-600 group-hover:text-zinc-400 transition-colors mt-1 shrink-0 ml-3"
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
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono text-zinc-500 bg-zinc-800 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" className="px-6" />
        </ScrollArea>
      </AnimateOnScroll>
    </section>
  );
}

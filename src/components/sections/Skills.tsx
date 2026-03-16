import AnimateOnScroll from "@/src/components/AnimateOnScroll";
import { SKILLS } from "@/src/lib/constant";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-zinc-900/40">
      <div className="max-w-5xl mx-auto">
        <AnimateOnScroll delay={0}>
          <p className="text-zinc-500 text-sm font-mono mb-3">02. Skills</p>
          <h2 className="text-4xl font-bold mb-12">What I work with</h2>
        </AnimateOnScroll>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {SKILLS.map((skill) => (
            <AnimateOnScroll key={skill.name} delay={skill.delay}>
              <div className="bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-zinc-300 hover:border-zinc-600 hover:text-white transition-colors">
                {skill.name}
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

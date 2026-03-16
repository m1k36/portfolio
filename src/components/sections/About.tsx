import AnimateOnScroll from "@/src/components/AnimateOnScroll";
import { STATS } from "@/src/lib/constant";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <AnimateOnScroll delay={0}>
            <p className="text-zinc-500 text-sm font-mono mb-3">01. About</p>
            <h2 className="text-4xl font-bold mb-6">A bit about me</h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <p className="text-zinc-400 leading-relaxed mb-4">
              I&apos;m a passionate developer focused on building thoughtful digital products. I
              enjoy working across the full stack — from designing smooth UIs to architecting
              reliable back-end systems.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              When I&apos;m not coding, I&apos;m exploring new technologies, contributing to
              open-source, or sketching out side projects.
            </p>
          </AnimateOnScroll>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {STATS.map((stat) => (
            <AnimateOnScroll key={stat.label} delay={stat.delay}>
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                <p className="text-3xl font-bold mb-1">{stat.value}</p>
                <p className="text-zinc-500 text-sm">{stat.label}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

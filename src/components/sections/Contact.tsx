import AnimateOnScroll from "@/src/components/AnimateOnScroll";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-zinc-900/40">
      <div className="max-w-5xl mx-auto text-center">
        <AnimateOnScroll delay={0}>
          <p className="text-zinc-500 text-sm font-mono mb-3">04. Contact</p>
          <h2 className="text-4xl font-bold mb-4">Let&apos;s work together</h2>
        </AnimateOnScroll>
        <AnimateOnScroll delay={100}>
          <p className="text-zinc-400 max-w-md mx-auto mb-10">
            Have a project in mind or just want to say hi? My inbox is always open.
          </p>
          <a
            href="mailto:hello@piotmike.dev"
            className="inline-block px-8 py-4 bg-white text-black rounded-lg text-sm font-medium hover:bg-zinc-200 transition-colors"
          >
            Say hello →
          </a>
        </AnimateOnScroll>
        <AnimateOnScroll delay={200}>
          <div className="flex justify-center gap-6 mt-12 text-zinc-500 text-sm">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Twitter
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

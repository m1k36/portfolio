import fs from "fs";
import path from "path";

import AnimateOnScroll from "@/src/components/ui/AnimateOnScroll";
import AboutRow from "@/src/components/sections/about/AboutRow";
import type { Dictionary } from "@/src/lib/i18n";

type Props = { dict: Dictionary["about"] };

const FOLDERS = ["dev", "me", "riding"];
const IMAGE_EXTENSIONS = /\.(jpg|jpeg|png|webp|gif)$/i;

function getImages(folder: string): string[] {
  const dir = path.join(process.cwd(), "public", "images", "about", folder);
  try {
    return fs
      .readdirSync(dir)
      .filter((f) => IMAGE_EXTENSIONS.test(f))
      .sort()
      .map((f) => `/images/about/${folder}/${f}`);
  } catch (err) {
    console.error(`[About] Failed to read images from "${folder}":`, err);
    return [];
  }
}

export default function About({ dict }: Props) {
  if (dict.cards.length !== FOLDERS.length) {
    console.error(
      `[About] Mismatch: ${dict.cards.length} cards but ${FOLDERS.length} image folders. Check FOLDERS and dict.cards order.`
    );
  }

  const imagesByRow = FOLDERS.map(getImages);

  return (
    <section id="about" className="min-h-screen flex items-center px-6 py-24">
      <div className="max-w-5xl mx-auto w-full">
        <AnimateOnScroll delay={0}>
          <p className="text-zinc-500 text-sm font-mono mb-3">{dict.label}</p>
          <h2 className="text-4xl font-bold mb-14">{dict.title}</h2>
        </AnimateOnScroll>

        <div className="flex flex-col gap-20">
          {dict.cards.map((card, i) => (
            <AnimateOnScroll key={card.title} delay={i * 100}>
              <AboutRow
                tag={card.tag}
                title={card.title}
                text={card.text}
                images={imagesByRow[i] ?? []}
                reverse={i % 2 === 1}
                imagePlaceholder={dict.imagePlaceholder}
                photoCredit={card.photoCredit}
              />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

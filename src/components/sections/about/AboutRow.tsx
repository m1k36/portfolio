"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const CAROUSEL_INTERVAL_MS = 5000;

type Props = {
  tag: string;
  title: string;
  text: string[];
  images: string[];
  reverse?: boolean;
  imagePlaceholder?: string;
  photoCredit?: { name: string; url: string };
};

export default function AboutRow({
  tag,
  title,
  text,
  images,
  reverse = false,
  imagePlaceholder = "…",
  photoCredit,
}: Props) {
  const [index, setIndex] = useState(0);
  const hasImages = images.length > 0;
  const hasMultiple = images.length > 1;

  useEffect(() => {
    if (!hasMultiple) return;
    const timer = setTimeout(() => {
      setIndex((i) => (i + 1) % images.length);
    }, CAROUSEL_INTERVAL_MS);
    return () => clearTimeout(timer);
  }, [index, images.length, hasMultiple]);

  const navigate = (next: number) => setIndex((next + images.length) % images.length);

  return (
    <div
      className={`flex flex-col md:flex-row items-center gap-10 md:gap-16 ${reverse ? "md:flex-row-reverse" : ""}`}
    >
      {/* Images */}
      <div className="w-full md:w-1/2 shrink-0">
        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-800">
          {hasImages ? (
            <>
              {images.map((src, i) => (
                <Image
                  key={i}
                  src={src}
                  alt={`${title} — photo ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-opacity duration-700"
                  style={{ opacity: i === index ? 1 : 0 }}
                />
              ))}
              {hasMultiple && (
                <>
                  <button
                    type="button"
                    onClick={() => navigate(index - 1)}
                    className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/75 text-white rounded-full w-7 h-7 flex items-center justify-center transition-colors"
                    aria-label="Photo précédente"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    onClick={() => navigate(index + 1)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/75 text-white rounded-full w-7 h-7 flex items-center justify-center transition-colors"
                    aria-label="Photo suivante"
                  >
                    ›
                  </button>
                  <div
                    className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 flex gap-1"
                    role="tablist"
                    aria-label="Sélecteur de photo"
                  >
                    {images.map((_, i) => (
                      <button
                        type="button"
                        key={i}
                        role="tab"
                        aria-selected={i === index}
                        aria-label={`Photo ${i + 1}`}
                        onClick={() => setIndex(i)}
                        className={`w-1.5 h-1.5 rounded-full transition-colors ${i === index ? "bg-white" : "bg-white/40"}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-zinc-600 text-sm font-mono select-none">
              {imagePlaceholder}
            </div>
          )}
        </div>
        {hasImages && photoCredit && (
          <p className="mt-2 text-right text-xs text-zinc-500 font-mono">
            © Photo :{" "}
            <a
              href={photoCredit.url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-zinc-300 transition-colors"
            >
              {photoCredit.name}
            </a>
          </p>
        )}
      </div>

      {/* Text */}
      <div className="w-full md:w-1/2 flex flex-col gap-3">
        <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">{tag}</span>
        <h3 className="text-2xl font-bold">{title}</h3>
        {text.map((item, index) => (
          <p key={index} className="text-zinc-400 leading-relaxed">
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}

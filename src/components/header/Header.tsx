"use client";

import { useState } from "react";
import Image from "next/image";
import LanguageSwitcher from "@/src/components/header/LanguageSwitcher";
import type { Dictionary } from "@/src/lib/i18n";

type Props = {
  nav: Dictionary["nav"];
  lang: string;
};

export default function Header({ nav, lang }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <nav className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur border-b border-zinc-800">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-full bg-white overflow-hidden flex items-center justify-center">
              <Image
                src="/logo.svg"
                alt="Piot Mike logo"
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
            <span className="font-mono text-zinc-400 text-sm group-hover:text-white transition-colors">
              piot.mike
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex gap-6 text-sm text-zinc-400">
              {nav.links.map((link) => (
                <a key={link.href} href={link.href} className="hover:text-white transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
            <LanguageSwitcher currentLang={lang} />
          </div>

          {/* Mobile burger */}
          <button
            className="md:hidden text-zinc-400 hover:text-white transition-colors p-1"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? (
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <line x1="4" y1="4" x2="18" y2="18" />
                <line x1="18" y1="4" x2="4" y2="18" />
              </svg>
            ) : (
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <line x1="3" y1="6" x2="19" y2="6" />
                <line x1="3" y1="11" x2="19" y2="11" />
                <line x1="3" y1="16" x2="19" y2="16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-zinc-800 bg-zinc-950/95 px-6 py-4 flex flex-col gap-4">
            {nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-zinc-400 hover:text-white transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-zinc-800">
              <LanguageSwitcher currentLang={lang} />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

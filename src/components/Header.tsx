import React, { FC } from "react";
import { NAV_LINKS } from "@/src/lib/constant";

export const Header: FC = ({}) => {
  return (
    <header>
      <nav className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur border-b border-zinc-800">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="font-mono text-zinc-400 text-sm">piot.mike</span>
          <div className="flex gap-6 text-sm text-zinc-400">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-white transition-colors">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

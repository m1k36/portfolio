import type { Dictionary } from "@/src/lib/i18n";

type Props = { dict: Dictionary["footer"] };

export default function Footer({ dict }: Props) {
  return (
    <footer className="py-8 px-6 border-t border-zinc-800 text-center text-zinc-600 text-sm font-mono">
      © {new Date().getFullYear()} {dict.rights}
    </footer>
  );
}

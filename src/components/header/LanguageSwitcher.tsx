"use client";

import { usePathname, useRouter } from "next/navigation";
import GB from "country-flag-icons/react/3x2/GB";
import FR from "country-flag-icons/react/3x2/FR";

const LOCALES = [
  { code: "en", Flag: GB },
  { code: "fr", Flag: FR },
] as const;

export default function LanguageSwitcher({ currentLang }: { currentLang: string }) {
  const pathname = usePathname();
  const router = useRouter();

  const switchTo = (lang: string) => {
    const newPath = pathname.replace(/^\/[a-z]{2}/, `/${lang}`);
    router.push(newPath);
  };

  return (
    <div className="flex gap-2 items-center">
      {LOCALES.map(({ code, Flag }) => (
        <button
          key={code}
          onClick={() => switchTo(code)}
          title={code.toUpperCase()}
          className={`transition-opacity ${
            currentLang === code ? "opacity-100" : "opacity-40 hover:opacity-80"
          }`}
        >
          <Flag className="w-6 h-4 rounded-sm" />
        </button>
      ))}
    </div>
  );
}

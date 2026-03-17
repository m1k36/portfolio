import { en } from "./en";
import { fr } from "./fr";

export const dictionaries = { en, fr };

export type Locale = keyof typeof dictionaries;
export type Dictionary = typeof en;

export function getDictionary(locale: string): Dictionary {
  const key = locale in dictionaries ? (locale as Locale) : "en";
  return dictionaries[key];
}

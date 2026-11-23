export const locales = ["fr", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "fr";

export function hasLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Valeur bilingue : un texte (ou autre) par langue. */
export type Localized<T = string> = Record<Locale, T>;

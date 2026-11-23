// Ordre et numérotation des services. Les intitulés sont dans src/i18n/dictionaries.

export const serviceIds = ["web", "brand", "documents", "dataviz", "motion"] as const;
export type ServiceId = (typeof serviceIds)[number];

export function serviceNumber(id: ServiceId): string {
  return String(serviceIds.indexOf(id) + 1).padStart(2, "0");
}

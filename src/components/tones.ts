import type { ServiceId } from "@/content/services";
import type { Tone } from "./MediaFrame";

/** Couleur des emplacements d'images selon le service (cartes de projets et études de cas). */
export const serviceTones: Record<ServiceId, Tone> = {
  web: "forest",
  brand: "lime",
  documents: "slate",
  dataviz: "paper",
  motion: "forest",
};

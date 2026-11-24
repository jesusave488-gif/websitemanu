import type { ServiceId } from "@/content/services";
import type { Tone } from "./MediaFrame";

/** Couleur des emplacements d'images selon le service (cartes de projets et études de cas). */
export const serviceTones: Record<ServiceId, Tone> = {
  web: "steel",
  brand: "mist",
  documents: "ink",
  dataviz: "ice",
  motion: "steel",
};

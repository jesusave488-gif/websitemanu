// Petites icônes au trait, dessinées pour le site (héritent de la couleur du texte).
import type { ReactNode } from "react";

type IconProps = { className?: string };

/** Bulle de discussion avec combiné (WhatsApp / message). */
export function ChatIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor"
      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.6 19.4 5.7 15.6A8 8 0 1 1 8.6 18.4Z" />
      <path d="M9.3 9.2c.2-.5.6-.6.9-.6h.4c.2 0 .3.1.4.3l.6 1.4c.1.2 0 .4-.1.5l-.5.6c.5 1 1.3 1.8 2.3 2.3l.6-.5c.2-.1.4-.2.5-.1l1.4.6c.2.1.3.2.3.4v.4c0 .3-.1.7-.6.9-.6.3-1.6.4-3.2-.6-1.3-.8-2.4-1.9-3.1-3.2-.6-1.2-.5-2-.3-2.4Z" />
    </svg>
  );
}

/** Enveloppe. */
export function MailIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor"
      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5.5" width="18" height="13" rx="2.5" />
      <path d="m4 7.5 8 5.5 8-5.5" />
    </svg>
  );
}

/** Flèche en diagonale (lien qui ouvre une conversation). */
export function ArrowIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor"
      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}

/* ---------- Icônes des services ---------- */

const serviceIconPaths: Record<string, ReactNode> = {
  // Fenêtre de navigateur
  web: (
    <>
      <rect x="3" y="4.5" width="18" height="15" rx="2.5" />
      <path d="M3 9h18M6.5 6.8h.01M9 6.8h.01" />
      <path d="M7 13h6M7 16h4" />
    </>
  ),
  // Plume de dessin
  brand: (
    <>
      <path d="M12 3.5 18.5 10 15 19H9L5.5 10Z" />
      <path d="M12 3.5V11" />
      <circle cx="12" cy="12.6" r="1.6" />
      <path d="M9 21h6" />
    </>
  ),
  // Pages superposées
  documents: (
    <>
      <path d="M8 3.5h7l4 4V17a1.5 1.5 0 0 1-1.5 1.5H8A1.5 1.5 0 0 1 6.5 17V5A1.5 1.5 0 0 1 8 3.5Z" />
      <path d="M15 3.5V7.5h4M9.5 11h6M9.5 14h4" />
      <path d="M3.5 7.5V19A1.5 1.5 0 0 0 5 20.5h9" />
    </>
  ),
  // Graphique en barres
  dataviz: (
    <>
      <path d="M4 20h16" />
      <rect x="5.5" y="12" width="3" height="5.5" rx="0.8" />
      <rect x="10.5" y="7" width="3" height="10.5" rx="0.8" />
      <rect x="15.5" y="10" width="3" height="7.5" rx="0.8" />
    </>
  ),
  // Lecture
  motion: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M10.2 8.8v6.4l5-3.2Z" />
    </>
  ),
};

/** Icône d'un service (web, brand, documents, dataviz, motion). */
export function ServiceIcon({ id, className }: IconProps & { id: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor"
      strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      {serviceIconPaths[id]}
    </svg>
  );
}

/** Main qui salue, comme sur la brochure (tracé inspiré de l'icône « hand » de Lucide, licence ISC). */
export function WaveIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor"
      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 11V6a2 2 0 0 0-4 0" />
      <path d="M14 10V4a2 2 0 0 0-4 0v2" />
      <path d="M10 10.5V6a2 2 0 0 0-4 0v8" />
      <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-6-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
    </svg>
  );
}

/** Flèche coudée vers le bas, comme sur la brochure. */
export function BentArrowIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor"
      strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 5h9.5a4.5 4.5 0 0 1 4.5 4.5V20" />
      <path d="m12.5 15.5 4.5 4.5 4.5-4.5" />
    </svg>
  );
}

/** Ampoule (idée), comme sur la brochure. */
export function BulbIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 15.5c0-1.3-.7-2.2-1.5-3.1A5.5 5.5 0 1 1 17 9c0 1.3-.5 2.4-1.5 3.4-.8.9-1.5 1.8-1.5 3.1" />
      <path d="M9.5 18.5h5M10.5 21h3" />
    </svg>
  );
}

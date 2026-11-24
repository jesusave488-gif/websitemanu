// Petites icônes au trait, dessinées pour le site (héritent de la couleur du texte).

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

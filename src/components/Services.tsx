import Link from "next/link";
import type { ReactNode } from "react";
import type { Dictionary } from "@/i18n";
import type { ServiceId } from "@/content/services";

type ServicesProps = {
  dict: Dictionary["services"];
  n: string;
  /** Lien WhatsApp du bouton « Parlons de votre projet ». */
  contactHref: string;
  items: {
    id: ServiceId;
    number: string;
    /** Lien vers un projet de ce service, sinon lien WhatsApp avec message pré-rempli. */
    href: string;
    isProject: boolean;
  }[];
};

const stroke = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" } as const;

/** Une icône simple par service. */
const icons: Record<ServiceId, ReactNode> = {
  web: (
    <svg viewBox="0 0 24 24" {...stroke}>
      <rect x="3" y="4.5" width="18" height="15" rx="2" />
      <path d="M3 9h18M7 13h6M7 16h4" />
    </svg>
  ),
  brand: (
    <svg viewBox="0 0 24 24" {...stroke}>
      <path d="M12 3 6.5 9.5 9 18h6l2.5-8.5z" />
      <circle cx="12" cy="11" r="1.6" />
      <path d="M12 3v6.4M9 21h6" />
    </svg>
  ),
  documents: (
    <svg viewBox="0 0 24 24" {...stroke}>
      <path d="M8 3h7l4 4v11a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
      <path d="M14.5 3v4.5H19M9.5 12h6M9.5 15.5h6" />
    </svg>
  ),
  dataviz: (
    <svg viewBox="0 0 24 24" {...stroke}>
      <path d="M4 20h16M7 16v-5M11 16V7M15 16v-3M19 16V9" />
    </svg>
  ),
  motion: (
    <svg viewBox="0 0 24 24" {...stroke}>
      <circle cx="12" cy="12" r="9" />
      <path d="m10 8.5 5 3.5-5 3.5z" />
    </svg>
  ),
};

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" {...stroke}>
      <path d="M4 20l1.2-3.6A8 8 0 1 1 8 19.2z" />
      <path d="M9 9.5c.3 2.2 2.3 4.3 4.5 4.8l1.2-1.1 1.8.8c-.2 1.1-1 1.8-2 1.8-3.5 0-6.8-3.3-6.8-6.8 0-1 .7-1.8 1.8-2l.8 1.8z" />
    </svg>
  );
}

/** Services : intro + cinq cartes sur fond bleu nuit. Au survol, la carte se soulève et pivote légèrement. */
export default function Services({ dict, n, contactHref, items }: ServicesProps) {
  return (
    <section className="services dark sec wrap" id="services">
      <div className="svc-grid">
        <div className="svc-intro rv">
          <p className="k"><b>({n})</b><span>{dict.label}</span></p>
          <h2 className="title">{dict.title}</h2>
          <p>{dict.intro}</p>
          <a className="btn fill" href={contactHref} target="_blank" rel="noopener noreferrer">
            <span className="ic wa" aria-hidden="true"><WhatsAppIcon /></span>
            <span>{dict.cta}</span>
          </a>
        </div>

        {items.map((item, i) => {
          const text = dict.items[item.id];
          const body = (
            <>
              <span className="svc-top">
                <span className="svc-icon" aria-hidden="true">{icons[item.id]}</span>
                <span className="svc-n">{item.number}</span>
              </span>
              <span className="svc-title">{text.title}</span>
              <span className="svc-text">{text.description}</span>
              <span className="svc-link">
                {item.isProject ? dict.seeProject : dict.talk} <span aria-hidden="true">↗</span>
              </span>
            </>
          );
          const cls = `svc-card rv${["", " d1", " d2"][(i + 1) % 3]}`;
          return item.isProject ? (
            <Link key={item.id} className={cls} href={item.href}>{body}</Link>
          ) : (
            <a key={item.id} className={cls} href={item.href} target="_blank" rel="noopener noreferrer">{body}</a>
          );
        })}
      </div>
    </section>
  );
}

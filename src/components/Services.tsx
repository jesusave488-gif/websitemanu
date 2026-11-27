import type { ReactNode } from "react";
import type { Dictionary } from "@/i18n";
import type { ServiceId } from "@/content/services";

type ServicesProps = {
  dict: Dictionary["services"];
  items: { id: ServiceId; number: string }[];
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

/** (02) Services : cinq cartes sur fond bleu nuit. */
export default function Services({ dict, items }: ServicesProps) {
  return (
    <section className="services dark sec wrap" id="services">
      <ul className="svc-grid">
        <li className="svc-intro rv">
          <p className="k"><b>(02)</b><span>{dict.label}</span></p>
          <h2 className="title">{dict.title}</h2>
        </li>

        {items.map((item, i) => {
          const text = dict.items[item.id];
          return (
            <li key={item.id} className={`svc-card rv${["", " d1", " d2"][(i + 1) % 3]}`}>
              <span className="svc-top">
                <span className="svc-icon" aria-hidden="true">{icons[item.id]}</span>
                <span className="svc-n">{item.number}</span>
              </span>
              <h3 className="svc-title">{text.title}</h3>
              <p className="svc-text">{text.description}</p>
            </li>
          );
        })}
      </ul>

    </section>
  );
}

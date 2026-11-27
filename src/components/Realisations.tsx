import { existsSync } from "node:fs";
import path from "node:path";
import Image from "next/image";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n";
import type { Realisation } from "@/content/realisations";

type RealisationsProps = {
  items: Realisation[];
  clients: string[];
  locale: Locale;
  dict: Dictionary["realisations"];
};

/** Vrai si l'image existe dans public/ (vérifié au moment du build). */
function hasFile(src: string) {
  return existsSync(path.join(process.cwd(), "public", src));
}

/** (01) Réalisations : 6 cartes projet, puis la ligne des clients. */
export default function Realisations({ items, clients, locale, dict }: RealisationsProps) {
  return (
    <section className="work sec wrap" id="realisations">
      <div className="head rv">
        <p className="k"><b>(01)</b><span>{dict.label}</span></p>
        <div>
          <h2 className="title">{dict.title}</h2>
          <p className="sub">{dict.subtitle}</p>
        </div>
      </div>

      <ul className="grid">
        {items.map((item, i) => (
          <li key={item.slug} className={`case rv${i % 2 ? " d1" : ""}`}>
            <div className="img">
              {hasFile(item.cover) ? (
                <Image
                  src={item.cover}
                  alt={`${dict.coverAlt} ${item.name} — ${item.type[locale]}`}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              ) : (
                // Emplacement neutre en attendant l'image (décoratif : le nom est écrit dessous).
                <div className="ph" aria-hidden="true">
                  <span>{item.name}</span>
                </div>
              )}
            </div>
            <div className="cap">
              <h3 className="name">{item.name}</h3>
              <p className="cat">{item.type[locale]}</p>
              <p className="res">{item.result[locale]}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className="clients rv">
        <p className="k">{dict.clients}</p>
        <ul>
          {clients.map((client) => (
            <li key={client}>{client}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

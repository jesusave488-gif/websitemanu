import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n";
import { recognitions } from "@/content/recognitions";

type ReferencesProps = {
  locale: Locale;
  dict: Dictionary["references"];
  clients: string[];
  n: string;
};

/** Distinctions (certificat au survol) et clients. */
export default function References({ locale, dict, clients, n }: ReferencesProps) {
  return (
    <section className="refs sec wrap">
      <div className="grid">
        <div className="rv">
          <p className="k"><b>({n})</b><span>{dict.label}</span></p>
          <h2 className="title" style={{ marginTop: ".75rem" }}>{dict.title}</h2>
        </div>
        <div>
          <div className="table rv d1">
            {recognitions.map((r) => (
              <div className="row" key={r.id} tabIndex={0}>
                <span>{r.category[locale]}</span>
                <span className="org">{r.issuer}</span>
                <span className="see">{dict.certificate}</span>
                {r.certificate.src ? (
                  <span className="cert has-img">
                    {/* eslint-disable-next-line @next/next/no-img-element -- aperçu au survol */}
                    <img src={r.certificate.src} alt={r.certificate.alt[locale]} loading="lazy" />
                  </span>
                ) : (
                  <span className="cert" aria-hidden="true">
                    <span>
                      {r.issuer.toUpperCase()}
                      <b>{r.title[locale]}</b>
                      {dict.certificateOf}
                    </span>
                  </span>
                )}
              </div>
            ))}
          </div>
          <div className="clients rv d2">
            <p className="k">{dict.clients}</p>
            <ul>
              {clients.map((client) => (
                <li key={client}>{client}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

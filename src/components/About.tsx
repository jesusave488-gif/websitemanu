import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n";
import { recognitions } from "@/content/recognitions";

/** (04) À propos : parcours, puis formations et outils côte à côte. */
export default function About({ dict, locale }: { dict: Dictionary["about"]; locale: Locale }) {
  return (
    <section className="about sec wrap" id="apropos">
      <div className="grid">
        <div className="rv">
          <p className="k"><b>(04)</b><span>{dict.label}</span></p>
        </div>
        <div>
          <h2 className="title rv">{dict.title}</h2>
          <div className={`txt rv d1${dict.paragraphs.length === 1 ? " one" : ""}`}>
            {dict.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <div className="extra">
            <div className="trainings rv">
              <p className="k">{dict.trainings}</p>
              <ul className="table">
                {recognitions.map((r) => (
                  <li className="row" key={r.id}>
                    <span>{r.category[locale]}</span>
                    <span className="org">{r.issuer}</span>
                    {/* Lien vers le certificat seulement s'il a été ajouté (voir content/recognitions.ts). */}
                    {r.certificate.src ? (
                      <a className="see" href={r.certificate.src} target="_blank" rel="noopener noreferrer">
                        {dict.certificate}
                        <span className="cert has-img" aria-hidden="true">
                          {/* eslint-disable-next-line @next/next/no-img-element -- aperçu au survol */}
                          <img src={r.certificate.src} alt="" loading="lazy" />
                        </span>
                      </a>
                    ) : (
                      <span />
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="tools rv d1">
              <p className="k">{dict.toolsLabel}</p>
              <ul>
                {dict.tools.map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

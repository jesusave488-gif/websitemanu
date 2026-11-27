import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n";
import { recognitions } from "@/content/recognitions";

/** (04) À propos : parcours, chiffres et formations. */
export default function About({ dict, locale }: { dict: Dictionary["about"]; locale: Locale }) {
  return (
    <section className="about sec wrap" id="apropos">
      <div className="grid">
        <div className="rv">
          <p className="k"><b>(04)</b><span>{dict.label}</span></p>
        </div>
        <div>
          <h2 className="title rv">{dict.title}</h2>
          <div className="txt rv d1">
            {dict.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <div className="stats rv d2">
            {dict.stats.map((stat) => (
              <div className="stat" key={stat.label}>
                {stat.text ? (
                  // Valeur à compléter : affichée en plus petit pour rester lisible.
                  <strong className="todo">{stat.text}</strong>
                ) : (
                  <strong>
                    <span className="count" data-to={stat.value}>{stat.value}</span>
                    {stat.suffix}
                  </strong>
                )}
                <span>{stat.label}</span>
              </div>
            ))}
          </div>

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
        </div>
      </div>
    </section>
  );
}

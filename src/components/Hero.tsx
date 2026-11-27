import type { Dictionary } from "@/i18n";
import { LOGO_PATH } from "./logo-path";

type HeroProps = {
  dict: Dictionary["hero"];
  portrait: string;
};

/** Main qui salue (animée en CSS). */
function Wave() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 11V6a2 2 0 0 0-4 0" />
      <path d="M14 10V4a2 2 0 0 0-4 0v2" />
      <path d="M10 10.5V6a2 2 0 0 0-4 0v8" />
      <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-6-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
    </svg>
  );
}

/**
 * Haut de page :
 * - une bande bleu brume avec le titre et le grand « K » manuscrit en filigrane ;
 * - un panneau bleu nuit (repère, phrase, boutons, chiffres) à côté du portrait ;
 * - un badge rond qui tourne, à la jonction, et qui mène aux réalisations.
 */
export default function Hero({ dict, portrait }: HeroProps) {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-band">
        <div className="hero-mark" aria-hidden="true">
          <svg viewBox="0 0 1010 928">
            <defs>
              {/* Premier « K » du logo, sans le début du « I » qui suit. */}
              <clipPath id="hero-k">
                <polygon points="0,0 1010,0 1010,600 950,700 950,928 0,928" />
              </clipPath>
            </defs>
            <path clipPath="url(#hero-k)" fill="currentColor" fillRule="evenodd" d={LOGO_PATH} />
          </svg>
        </div>
        <div className="hero-title wrap">
          <p className="hello">
            <Wave />
            <span>{dict.hello}</span>
          </p>
          {/* H1 : le nom et la spécialité. */}
          <h1 id="hero-title">
            {dict.name}
            <span>{dict.role}</span>
          </h1>
        </div>
      </div>

      <div className="hero-split">
        <a className="seal" href="#realisations" aria-label={dict.sealLabel}>
          <svg className="ring" viewBox="0 0 132 132" aria-hidden="true">
            <defs>
              <path id="seal-path" d="M66,66 m-50,0 a50,50 0 1,1 100,0 a50,50 0 1,1 -100,0" />
            </defs>
            <text>
              <textPath href="#seal-path">{dict.seal.toUpperCase()}</textPath>
            </text>
          </svg>
          <span className="arrow" aria-hidden="true">↓</span>
        </a>

        <div className="hero-info">
          <div>
            <p className="eyebrow">
              {dict.eyebrow.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </p>
            <p className="lead">{dict.lead}</p>
            <div className="actions">
              <a className="btn mist" href="#realisations">
                <span>{dict.ctaWork}</span>
                <span className="ic" aria-hidden="true">↓</span>
              </a>
              <a className="btn ghost" href="#contact">
                <span>{dict.ctaContact}</span>
                <span className="ic" aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
          <dl className="figs">
            {dict.figures.map((f) => (
              <div key={f.label}>
                <dt>{f.value}</dt>
                <dd>{f.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hero-photo">
          {/* eslint-disable-next-line @next/next/no-img-element -- PNG détouré, hauteur relative au cadre */}
          {portrait ? <img src={portrait} alt={dict.portraitAlt} fetchPriority="high" /> : null}
        </div>
      </div>
    </section>
  );
}

import type { Dictionary } from "@/i18n";

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

export default function Hero({ dict, portrait }: HeroProps) {
  return (
    <section className="hero">
      <div className="text">
        <p className="hello">
          <Wave />
          <span>{dict.hello}</span>
        </p>
        {/* H1 : le nom et la spécialité. */}
        <h1>
          <span className="w"><span>{dict.name[0]}</span></span>{" "}
          <span className="w"><span>{dict.name[1]}</span></span>
          <br />
          <span className="w"><span>{dict.role}</span></span>
        </h1>
        <p className="lead">{dict.lead}</p>
        <div className="actions">
          <a className="btn fill" href="#realisations">
            <span>{dict.ctaWork}</span>
            <span className="ic" aria-hidden="true">↓</span>
          </a>
          <a className="btn line" href="#contact">
            <span>{dict.ctaContact}</span>
            <span className="ic" aria-hidden="true">↗</span>
          </a>
        </div>
        <ul className="tags k">
          {dict.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
      <div className="panel">
        <div className="word" aria-hidden="true">KIKI</div>
        {/* eslint-disable-next-line @next/next/no-img-element -- PNG détouré, hauteur relative au panneau */}
        {portrait ? <img src={portrait} alt={dict.portraitAlt} fetchPriority="high" /> : null}
        <span className="badge" aria-hidden="true">
          <span>{dict.creativeMode}</span>
          <i />
        </span>
      </div>
    </section>
  );
}

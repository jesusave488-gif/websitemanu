import type { Dictionary } from "@/i18n";

const delays = ["", " d1", " d2", " d3"];

/** (03) Méthode : quatre étapes reliées par un fin trait (ligne de temps), puis un appel à l'action. */
export default function Method({ dict }: { dict: Dictionary["method"] }) {
  return (
    <section className="ice sec wrap" id="methode">
      <div className="head rv">
        <p className="k"><b>(03)</b><span>{dict.label}</span></p>
        <h2 className="title">{dict.title}</h2>
      </div>
      <ol className="steps">
        {dict.steps.map((step, i) => (
          <li className={`step rv${delays[i % 4]}`} key={step.title}>
            <span className="num">{String(i + 1).padStart(2, "0")}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </li>
        ))}
      </ol>
      <div className="method-cta rv">
        <p>{dict.ctaText}</p>
        <a className="btn fill" href="#contact">
          <span>{dict.ctaButton}</span>
          <span className="ic" aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}

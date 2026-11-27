import type { Dictionary } from "@/i18n";

const delays = ["", " d1", " d2", " d3"];

/** (03) Méthode : quatre étapes, chacune avec ce que le client apporte et ce qu'il reçoit. */
export default function Method({ dict }: { dict: Dictionary["method"] }) {
  return (
    <section className="ice sec wrap" id="methode">
      <div className="head rv">
        <p className="k"><b>(03)</b><span>{dict.label}</span></p>
        <div>
          <h2 className="title">{dict.title}</h2>
          <p className="sub">{dict.subtitle}</p>
        </div>
      </div>
      <ol className="steps">
        {dict.steps.map((step, i) => (
          <li className={`step rv${delays[i % 4]}`} key={step.title}>
            <span className="num">{String(i + 1).padStart(2, "0")}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
            <dl className="exchange">
              <div>
                <dt>{dict.bringLabel}</dt>
                <dd>{step.bring}</dd>
              </div>
              <div>
                <dt>{dict.getLabel}</dt>
                <dd>{step.get}</dd>
              </div>
            </dl>
          </li>
        ))}
      </ol>
    </section>
  );
}

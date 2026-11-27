import type { Dictionary } from "@/i18n";

const delays = ["", " d1", " d2", " d3"];

export default function Method({ dict, n }: { dict: Dictionary["method"]; n: string }) {
  return (
    <section className="ice sec wrap">
      <div className="head rv">
        <p className="k"><b>({n})</b><span>{dict.label}</span></p>
        <h2 className="title">{dict.title}</h2>
      </div>
      <div className="steps">
        {dict.steps.map((step, i) => (
          <div className={`step rv${delays[i % 4]}`} key={step.title}>
            <span className="num">{String(i + 1).padStart(2, "0")}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

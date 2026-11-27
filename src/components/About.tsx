import type { Dictionary } from "@/i18n";

export default function About({ dict, n }: { dict: Dictionary["about"]; n: string }) {
  return (
    <section className="about sec wrap" id="apropos">
      <div className="grid">
        <div className="rv">
          <p className="k"><b>({n})</b><span>{dict.label}</span></p>
          <p className="bio">{dict.bio}</p>
        </div>
        <div>
          <p className="statement rv d1">{dict.statement}</p>
          <div className="stats rv d2">
            {dict.stats.map((stat) => (
              <div className="stat" key={stat.label}>
                <strong>
                  {stat.text || (
                    <>
                      <span className="count" data-to={stat.value}>{stat.value}</span>
                      {stat.suffix}
                    </>
                  )}
                </strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

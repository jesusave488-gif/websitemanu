import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n";
import type { Media, Project, StudyBlock } from "@/content/projects";

type CaseStudyProps = {
  project: Project;
  related?: Project;
  locale: Locale;
  dict: Dictionary;
};

/** Une image ou une vidéo dans son cadre ; un emplacement clair si le fichier manque. */
function Frame({ media, locale, sizes, wide, priority }: { media: Media; locale: Locale; sizes: string; wide?: boolean; priority?: boolean }) {
  const style: CSSProperties = { aspectRatio: media.ratio ?? "16 / 9", background: media.background };
  const cls = `m${media.fit === "contain" ? " contain" : ""}${wide ? " wide" : ""}${media.src ? "" : " empty"}`;

  if (!media.src) return <div className={cls} style={style} aria-hidden="true" />;
  if (media.kind === "video") {
    return (
      <div className={cls} style={style}>
        <video src={media.src} poster={media.poster || undefined} autoPlay muted loop playsInline preload="metadata" aria-label={media.alt[locale]} />
      </div>
    );
  }
  return (
    <div className={cls} style={style}>
      <Image src={media.src} alt={media.alt[locale]} fill sizes={sizes} priority={priority} />
    </div>
  );
}

/** Blocs d'une section, dans l'ordre. Le titre du premier bloc texte sert de titre à la section. */
function Blocks({ blocks, locale, skipTitle }: { blocks: StudyBlock[]; locale: Locale; skipTitle: boolean }) {
  let titleUsed = !skipTitle;
  return (
    <>
      {blocks.map((block, i) => {
        switch (block.type) {
          case "text": {
            const showTitle = titleUsed;
            titleUsed = true;
            const paragraphs = block.body[locale];
            return (
              <div className="rv" key={i}>
                {showTitle ? <h3 className="sub">{block.title[locale]}</h3> : null}
                <div className={`txt${paragraphs.length === 1 ? " one" : ""}`}>
                  {paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </div>
            );
          }
          case "media": {
            const count = block.items.length;
            return (
              <div className={`gal rv${count === 1 ? " c1" : count >= 3 ? " c3" : ""}`} key={i}>
                {block.items.map((m, j) => (
                  <Frame key={j} media={m} locale={locale} sizes={count === 1 ? "(max-width: 960px) 100vw, 66vw" : "(max-width: 640px) 100vw, 33vw"} />
                ))}
              </div>
            );
          }
          case "grid": {
            const cols = block.columns ?? 3;
            return (
              <div className={`gal rv c${cols}`} key={i}>
                {block.items.map((m, j) => (
                  <Frame key={j} media={m} locale={locale} sizes={`(max-width: 640px) 50vw, ${Math.round(66 / cols)}vw`} />
                ))}
              </div>
            );
          }
          case "colors":
            return (
              <div className="swatches rv" key={i}>
                {block.colors.map((c) => (
                  <div className="swatch" key={c.hex}>
                    <i style={{ background: c.hex }} />
                    <span>{c.name}</span>
                    <span className="k">{c.hex}</span>
                  </div>
                ))}
              </div>
            );
          case "figures":
            return (
              <div className="metrics rv" key={i}>
                {block.items.map((f) => (
                  <div className="metric" key={f.label.fr}>
                    <strong>{f.value}</strong>
                    <span>{f.label[locale]}</span>
                  </div>
                ))}
              </div>
            );
        }
      })}
    </>
  );
}

/** Étude de cas, mise en page de la maquette v2 : en-tête, repères, couverture, parties numérotées. */
export default function CaseStudy({ project, related, locale, dict }: CaseStudyProps) {
  const t = dict.project;
  const links = (project.links ?? []).filter((l) => l.href);
  const facts = [
    project.client ? { label: t.client, value: <>{project.client}</> } : null,
    { label: t.service, value: <>{dict.services.items[project.service].title}</> },
    { label: t.year, value: <>{project.year}</> },
    links.length
      ? {
          label: t.link,
          value: (
            <>
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  {...(l.kind === "external" ? { target: "_blank", rel: "noopener noreferrer" } : { download: "" })}
                  style={{ display: "block" }}
                >
                  {l.label[locale]} {l.kind === "external" ? "↗" : "↓"}
                </a>
              ))}
            </>
          ),
        }
      : null,
  ].filter((f) => f !== null);
  const deliverables = project.deliverables?.[locale] ?? [];

  return (
    <article>
      <section className="cs-head wrap">
        <div>
          <p className="k">
            <b>(01)</b>
            <span>{project.category[locale]}</span>
          </p>
          <h1>{project.title[locale]}</h1>
        </div>
        <p>{project.description[locale]}</p>
      </section>

      <div className="wrap">
        <div className="facts" style={{ "--n": facts.length } as CSSProperties}>
          {facts.map((f) => (
            <div key={f.label}>
              <span className="k">{f.label}</span>
              {f.value}
            </div>
          ))}
        </div>
      </div>

      {project.cover ? (
        <div className="cs-cover rv">
          <Frame media={{ ...project.cover, ratio: "16 / 10" }} locale={locale} sizes="100vw" priority />
        </div>
      ) : null}

      {project.sections.map((section, i) => {
        const first = section.blocks.find((b) => b.type === "text");
        return (
          <section className="part wrap" id={section.id} key={section.id}>
            <div className="lab">
              <p className="k">
                <b>{i + 1}.0</b>
                <span>{section.nav[locale]}</span>
              </p>
              <h2 className="title">{first?.type === "text" ? first.title[locale] : section.nav[locale]}</h2>
            </div>
            <div>
              <Blocks blocks={section.blocks} locale={locale} skipTitle={Boolean(first)} />
            </div>
          </section>
        );
      })}

      {deliverables.length ? (
        <section className="part wrap">
          <div className="lab">
            <p className="k">
              <b>{project.sections.length + 1}.0</b>
              <span>{t.deliverables}</span>
            </p>
            <h2 className="title">{t.deliverablesTitle}</h2>
          </div>
          <ul className="deliv rv">
            {deliverables.map((d, j) => (
              <li key={d}>
                <span className="n">{String(j + 1).padStart(2, "0")}</span>
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <div className="wrap">
        {related ? (
          <Link className="next" href={`/${locale}/projets/${related.slug}`}>
            <span className="k">{t.next}</span>
            <span className="t">
              {related.title[locale]} <span aria-hidden="true">→</span>
            </span>
          </Link>
        ) : null}
        <p className="k note">{project.status === "demo" ? t.demoNote : ""}</p>
      </div>
    </article>
  );
}

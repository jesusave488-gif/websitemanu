import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n";
import type { Project } from "@/content/projects";

type WorkProps = {
  projects: Project[];
  locale: Locale;
  dict: Dictionary["work"];
  n: string;
};

/** Travaux sélectionnés : 2 colonnes, légendes alignées. */
export default function Work({ projects, locale, dict, n }: WorkProps) {
  return (
    <section className="work sec wrap" id="travaux" style={{ paddingTop: 0 }}>
      <div className="head rv">
        <p className="k"><b>({n})</b><span>{dict.label}</span></p>
        <h2 className="title">{dict.title}</h2>
      </div>
      <div className="grid">
        {projects.map((project, i) => (
          <Link key={project.slug} className={`case rv${i % 2 ? " d1" : ""}`} href={`/${locale}/projets/${project.slug}`}>
            <div className="img">
              {project.cover?.src ? (
                <Image src={project.cover.src} alt={project.cover.alt[locale]} fill sizes="(max-width: 640px) 100vw, 50vw" />
              ) : null}
              {project.status !== "published" ? (
                <span className="tag k">{project.status === "demo" ? dict.demo : dict.upcoming}</span>
              ) : null}
            </div>
            <div className="cap">
              <span className="name">{project.title[locale]}</span>
              <span className="go" aria-hidden="true">→</span>
              <span className="cat">{project.category[locale]}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

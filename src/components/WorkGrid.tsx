import type { Locale } from "@/i18n/config";
import type { Project } from "@/content/projects";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";
import styles from "./WorkGrid.module.css";

type WorkGridProps = {
  projects: Project[];
  locale: Locale;
  upcomingLabel: string;
};

const LANDSCAPE = "775 / 550";
const SQUARE = "1 / 1";

// Grille décalée : colonne de gauche paysage, paysage, carré ;
// colonne de droite carré, paysage, paysage. Les deux colonnes ont la même hauteur.
const leftRatios = [LANDSCAPE, LANDSCAPE, SQUARE];
const rightRatios = [SQUARE, LANDSCAPE, LANDSCAPE];

export default function WorkGrid({ projects, locale, upcomingLabel }: WorkGridProps) {
  const half = Math.ceil(projects.length / 2);
  const columns = [
    { items: projects.slice(0, half), ratios: leftRatios, offset: 0 },
    { items: projects.slice(half), ratios: rightRatios, offset: half },
  ];

  return (
    <div className={styles.grid}>
      {columns.map((column, c) => (
        <ul key={c} className={styles.column}>
          {column.items.map((project, i) => (
            <Reveal as="li" key={project.slug} delay={c * 120}>
              <ProjectCard
                project={project}
                locale={locale}
                upcomingLabel={upcomingLabel}
                ratio={column.ratios[i % column.ratios.length]}
                priority={column.offset + i < 2}
              />
            </Reveal>
          ))}
        </ul>
      ))}
    </div>
  );
}

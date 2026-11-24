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

const L = "775 / 550"; // paysage
const S = "1 / 1"; // carré
const T = "7 / 10"; // vertical (≈ deux paysages empilés)

/**
 * Formats des images selon le nombre de projets, pour que les deux colonnes
 * gardent à peu près la même hauteur (grille décalée du template).
 */
function layoutFor(count: number): [string[], string[]] {
  switch (count) {
    case 1:
      return [["16 / 9"], []];
    case 2:
      return [[L], [L]];
    case 3:
      return [[L, L], [T]];
    case 4:
      return [[L, S], [S, L]];
    case 5:
      return [[L, L, S], [S, T]];
    default:
      return [[L, L, S], [S, L, L]];
  }
}

export default function WorkGrid({ projects, locale, upcomingLabel }: WorkGridProps) {
  const [leftRatios, rightRatios] = layoutFor(projects.length);
  const columns = [
    { items: projects.slice(0, leftRatios.length), ratios: leftRatios, offset: 0 },
    { items: projects.slice(leftRatios.length), ratios: rightRatios, offset: leftRatios.length },
  ].filter((column) => column.items.length > 0);

  return (
    <div className={columns.length === 1 ? `${styles.grid} ${styles.single}` : styles.grid}>
      {columns.map((column, c) => (
        <ul key={c} className={styles.column}>
          {column.items.map((project, i) => (
            <Reveal as="li" key={project.slug} delay={c * 120}>
              <ProjectCard
                project={project}
                locale={locale}
                upcomingLabel={upcomingLabel}
                ratio={column.ratios[i % column.ratios.length] ?? L}
                priority={column.offset + i < 2}
              />
            </Reveal>
          ))}
        </ul>
      ))}
    </div>
  );
}

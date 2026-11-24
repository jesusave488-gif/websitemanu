import type { Dictionary } from "@/i18n";
import Reveal from "./Reveal";
import styles from "./Hero.module.css";

export default function Hero({ dict }: { dict: Dictionary["hero"] }) {
  return (
    <section className={`container ${styles.hero}`}>
      <Reveal as="h1" className={styles.title}>
        <span className={styles.lead}>{dict.lead}</span> <span className={styles.rest}>{dict.rest}</span>
      </Reveal>
      <Reveal as="ul" className={styles.tags} delay={150}>
        {dict.tags.map((tag) => (
          <li key={tag} className={`label ${styles.tag}`}>
            {tag}
          </li>
        ))}
      </Reveal>
    </section>
  );
}

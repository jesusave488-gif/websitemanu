import type { Locale } from "@/i18n/config";
import type { Testimonial } from "@/content/testimonials";
import Reveal from "./Reveal";
import Split from "./Split";
import styles from "./Testimonials.module.css";

type TestimonialsProps = {
  title: string;
  items: Testimonial[];
  locale: Locale;
};

/** Citations clients, en deux colonnes comme les autres sections. */
export default function Testimonials({ title, items, locale }: TestimonialsProps) {
  if (items.length === 0) return null;

  return (
    <Split id="temoignages" title={title}>
      <ul className={styles.list}>
        {items.map((item, i) => (
          <Reveal as="li" key={i} className={styles.item} delay={i * 80}>
            <figure>
              <blockquote className={styles.quote}>
                <p>{item.quote[locale]}</p>
              </blockquote>
              <figcaption className={styles.author}>
                <span className={styles.name}>{item.name}</span>
                <span className={`label ${styles.role}`}>{item.role[locale]}</span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </ul>
    </Split>
  );
}

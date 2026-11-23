import type { Dictionary } from "@/i18n";
import { serviceIds, serviceNumber } from "@/content/services";
import Reveal from "./Reveal";
import styles from "./ServiceList.module.css";

export default function ServiceList({ dict }: { dict: Dictionary["services"] }) {
  return (
    <ol className={styles.list}>
      {serviceIds.map((id, i) => {
        const service = dict.items[id];
        return (
          <Reveal as="li" key={id} className={styles.row} delay={i * 60}>
            <span className={styles.number}>{serviceNumber(id)}</span>
            <div>
              <h3 className={styles.title}>{service.title}</h3>
              <p className={`label ${styles.tags}`}>{service.tags.join(" · ")}</p>
            </div>
          </Reveal>
        );
      })}
    </ol>
  );
}

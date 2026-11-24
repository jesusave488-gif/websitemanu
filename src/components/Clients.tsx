import Reveal from "./Reveal";
import styles from "./Clients.module.css";

/** Bandeau des clients, sous les services. */
export default function Clients({ title, clients }: { title: string; clients: string[] }) {
  return (
    <section className={`container ${styles.wrap}`} aria-labelledby="clients-title">
      <Reveal className={styles.band}>
        <h2 id="clients-title" className={`label ${styles.title}`}>
          {title}
        </h2>
        <ul className={styles.list}>
          {clients.map((client) => (
            <li key={client} className={styles.client}>
              {client}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}

import Reveal from "./Reveal";
import styles from "./Clients.module.css";

/**
 * Bandeau des clients : les noms défilent en boucle (pause au survol, bords estompés).
 * La liste fixe reste lue par les lecteurs d'écran, et s'affiche à la place du défilement
 * quand l'appareil demande moins d'animations.
 */
export default function Clients({ title, clients }: { title: string; clients: string[] }) {
  // Le défilement se fait sur deux moitiés identiques ; chaque moitié répète la liste
  // pour toujours dépasser la largeur de l'écran, même sur très grand écran.
  const half = [...clients, ...clients];

  return (
    <section id="clients" className={`container ${styles.wrap}`} aria-labelledby="clients-title">
      <Reveal className={styles.band}>
        <h2 id="clients-title" className={`label ${styles.title}`}>
          {title}
        </h2>

        <ul className={styles.static}>
          {clients.map((client) => (
            <li key={client} className={styles.client}>
              {client}
            </li>
          ))}
        </ul>

        <div className={styles.marquee} aria-hidden="true">
          <div className={styles.track}>
            {[0, 1].map((copy) => (
              <div key={copy} className={styles.group}>
                {half.map((client, i) => (
                  <span key={i} className={styles.client}>
                    {client}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

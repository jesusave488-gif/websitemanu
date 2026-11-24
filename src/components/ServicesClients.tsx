import type { Dictionary } from "@/i18n";
import { serviceIds, serviceNumber } from "@/content/services";
import Reveal from "./Reveal";
import styles from "./ServicesClients.module.css";

type ServicesClientsProps = {
  services: Dictionary["services"];
  clientsTitle: string;
  clients: string[];
};

/** Deux listes côte à côte : services numérotés et clients. */
export default function ServicesClients({ services, clientsTitle, clients }: ServicesClientsProps) {
  return (
    <div id="services" className={`container ${styles.wrap}`}>
      <section aria-labelledby="services-title">
        <Reveal as="h2" id="services-title" className={styles.title}>
          {services.title}
        </Reveal>
        <ul className={styles.list}>
          {serviceIds.map((id, i) => (
            <Reveal as="li" key={id} className={styles.item} delay={i * 50}>
              <span className={styles.number}>{serviceNumber(id)}</span>
              {services.items[id]}
            </Reveal>
          ))}
        </ul>
      </section>

      <section aria-labelledby="clients-title">
        <Reveal as="h2" id="clients-title" className={styles.title}>
          {clientsTitle}
        </Reveal>
        <ul className={styles.list}>
          {clients.map((client, i) => (
            <Reveal as="li" key={client} className={styles.item} delay={i * 50}>
              {client}
            </Reveal>
          ))}
        </ul>
      </section>
    </div>
  );
}

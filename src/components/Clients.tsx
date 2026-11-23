import { Fragment } from "react";
import Reveal from "./Reveal";
import styles from "./Clients.module.css";

export default function Clients({ clients }: { clients: string[] }) {
  return (
    <Reveal as="p" className={styles.clients}>
      {clients.map((client, i) => (
        <Fragment key={client}>
          {i > 0 ? (
            <span className={styles.dot} aria-hidden="true">
              {" · "}
            </span>
          ) : null}
          <span className={styles.name}>{client}</span>
        </Fragment>
      ))}
    </Reveal>
  );
}

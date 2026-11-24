import { whatsappLink } from "@/content/site";
import { ChatIcon } from "./Icons";
import styles from "./WhatsAppFloat.module.css";

type WhatsAppFloatProps = {
  label: string;
  message: string;
};

/** Bouton WhatsApp flottant, visible uniquement sur mobile. */
export default function WhatsAppFloat({ label, message }: WhatsAppFloatProps) {
  return (
    <a
      href={whatsappLink(message)}
      className={styles.float}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
    >
      <ChatIcon className={styles.icon} />
    </a>
  );
}

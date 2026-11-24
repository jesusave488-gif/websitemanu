import styles from "./Logo.module.css";

/**
 * Monogramme d'Emmanuel KIKI.
 * Le fichier public/images/logo-mark.png sert de masque : le logo prend la couleur
 * du texte (ardoise en mode clair, blanc en mode sombre, vert au survol du lien parent).
 */
export default function Logo({ className }: { className?: string }) {
  return <span className={className ? `${styles.logo} ${className}` : styles.logo} aria-hidden="true" />;
}

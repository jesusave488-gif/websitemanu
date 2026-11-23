import type { ElementType, ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  id?: string;
  className?: string;
  /** Décalage en millisecondes, pour faire apparaître des éléments en cascade. */
  delay?: number;
};

/**
 * Fait apparaître doucement son contenu quand il entre dans l'écran.
 * L'animation est pilotée par le petit script de RevealScript.tsx (sans attendre React),
 * donc le contenu ne reste jamais caché si le JavaScript tarde ou échoue.
 */
export default function Reveal({ children, as: Tag = "div", id, className, delay = 0 }: RevealProps) {
  return (
    <Tag id={id} className={className ? `reveal ${className}` : "reveal"} data-delay={delay || undefined}>
      {children}
    </Tag>
  );
}

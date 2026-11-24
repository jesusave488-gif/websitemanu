import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import type { Locale } from "@/i18n/config";
import type { Media } from "@/content/projects";
import styles from "./MediaFrame.module.css";

/** Couleurs des emplacements vides, tirées de la DA. */
export type Tone = "forest" | "lime" | "slate" | "paper" | "neutral";

type MediaFrameProps = {
  media?: Media;
  locale: Locale;
  /** Format du cadre ; sinon celui du média, sinon 16 / 9. */
  ratio?: string;
  sizes: string;
  priority?: boolean;
  /** Contenu affiché dans l'emplacement quand il n'y a pas d'image. */
  placeholder?: ReactNode;
  tone?: Tone;
  className?: string;
};

/** Cadre d'image ou de vidéo, avec un emplacement aux couleurs de la DA si le fichier manque. */
export default function MediaFrame({
  media,
  locale,
  ratio,
  sizes,
  priority = false,
  placeholder,
  tone = "neutral",
  className,
}: MediaFrameProps) {
  const style: CSSProperties = {
    aspectRatio: ratio ?? media?.ratio ?? "16 / 9",
    background: media?.src && media.background ? media.background : undefined,
  };
  const classes = [styles.frame, className ?? ""].join(" ");

  if (!media?.src) {
    return (
      <div className={`${classes} ${styles.placeholder}`} data-tone={tone} style={style} aria-hidden="true">
        <span className={styles.ring} />
        <span className={styles.disc} />
        <div className={styles.content}>{placeholder}</div>
      </div>
    );
  }

  const fit = media.fit === "contain" ? styles.contain : styles.cover;

  if (media.kind === "video") {
    return (
      <div className={classes} style={style}>
        <video
          className={`${styles.media} ${fit}`}
          src={media.src}
          poster={media.poster || undefined}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={media.alt[locale]}
        />
      </div>
    );
  }

  return (
    <div className={classes} style={style}>
      <Image
        src={media.src}
        alt={media.alt[locale]}
        fill
        sizes={sizes}
        priority={priority}
        className={`${styles.media} ${fit}`}
      />
    </div>
  );
}

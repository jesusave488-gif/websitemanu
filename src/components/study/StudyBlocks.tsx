import type { CSSProperties } from "react";
import type { Locale } from "@/i18n/config";
import type { StudyBlock } from "@/content/projects";
import MediaFrame from "@/components/MediaFrame";
import Reveal from "@/components/Reveal";
import styles from "./Study.module.css";

type StudyBlocksProps = {
  blocks: StudyBlock[];
  locale: Locale;
  placeholderLabel: string;
  /** La toute première image de la page est chargée en priorité. */
  priorityFirst?: boolean;
};

/** Choisit un texte clair ou foncé selon la couleur de fond d'une pastille. */
function readableOn(hex: string): string {
  const value = hex.replace("#", "");
  const full = value.length === 3 ? value.replace(/./g, (c) => c + c) : value;
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(full.slice(i, i + 2), 16) / 255);
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return luminance > 0.55 ? "#22323C" : "#FFFFFF";
}

export default function StudyBlocks({ blocks, locale, placeholderLabel, priorityFirst }: StudyBlocksProps) {
  const placeholder = <span className="label">{placeholderLabel}</span>;

  return (
    <>
      {blocks.map((block, index) => {
        const key = `${block.type}-${index}`;
        const priority = priorityFirst && index === 0;

        switch (block.type) {
          case "text":
            return (
              <Reveal key={key} className={styles.text}>
                <div className={styles.textAside}>
                  {block.label ? (
                    <p className={`label ${styles.textLabel}`}>{block.label[locale]}</p>
                  ) : (
                    <h2 className={styles.textTitle}>{block.title[locale]}</h2>
                  )}
                </div>
                <div className={styles.textMain}>
                  {block.label ? <h2 className={styles.textTitle}>{block.title[locale]}</h2> : null}
                  {block.body[locale].map((paragraph, i) => (
                    <p key={i} className={styles.textBody}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </Reveal>
            );

          case "media":
            return (
              <Reveal
                key={key}
                className={styles.mediaRow}
                style={{ "--cols": block.items.length } as CSSProperties}
              >
                {block.items.map((media, i) => (
                  <MediaFrame
                    key={i}
                    media={media}
                    locale={locale}
                    sizes={block.items.length > 1 ? "(max-width: 900px) 100vw, 40vw" : "(max-width: 900px) 100vw, 75vw"}
                    priority={priority && i === 0}
                    className={styles.mediaItem}
                    placeholder={placeholder}
                  />
                ))}
              </Reveal>
            );

          case "grid":
            return (
              <Reveal
                key={key}
                className={styles.gridPanel}
                style={{ "--cols": block.columns ?? 3 } as CSSProperties}
              >
                {block.items.map((media, i) => (
                  <MediaFrame
                    key={i}
                    media={media}
                    locale={locale}
                    ratio={media.ratio ?? "1 / 1"}
                    sizes="(max-width: 900px) 50vw, 20vw"
                    tone="paper"
                    className={styles.gridItem}
                  />
                ))}
              </Reveal>
            );

          case "colors":
            return (
              <Reveal key={key} className={styles.colors}>
                {block.colors.map((color) => (
                  <div
                    key={color.hex + color.name}
                    className={styles.swatch}
                    style={{ background: color.hex, color: readableOn(color.hex) }}
                  >
                    <span className={styles.swatchName}>{color.name}</span>
                    <span className={styles.swatchHex}>{color.hex.toUpperCase()}</span>
                  </div>
                ))}
              </Reveal>
            );
        }
      })}
    </>
  );
}

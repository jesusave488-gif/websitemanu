"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { MouseEvent, PointerEvent } from "react";
import type { Locale } from "@/i18n/config";
import type { Recognition } from "@/content/recognitions";
import Certificate from "./Certificate";
import { ArrowIcon } from "./Icons";
import styles from "./Recognitions.module.css";

type Labels = {
  issuedBy: string;
  view: string;
  close: string;
  placeholder: string;
};

type RecognitionListProps = {
  items: Recognition[];
  locale: Locale;
  labels: Labels;
};

const PREVIEW_GAP = 28; // distance entre le curseur et l'aperçu (px)
const FOLLOW = 0.2; // part du chemin parcourue à chaque image : suivi souple, jamais saccadé

/**
 * Liste des distinctions.
 * - Souris : le certificat apparaît à côté du curseur et le suit en douceur.
 * - Clic, toucher ou clavier : le certificat s'ouvre en grand dans une fenêtre.
 */
export default function RecognitionList({ items, locale, labels }: RecognitionListProps) {
  const [hovered, setHovered] = useState<number | null>(null);
  const [opened, setOpened] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const motion = useRef({ x: 0, y: 0, tx: 0, ty: 0, frame: 0, placed: false });

  const canHover = () => window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  // L'aperçu se place dans l'espace à gauche de la liste, pour ne jamais masquer le texte :
  // il suit le curseur à la verticale, avec un léger décalage horizontal.
  // S'il n'y a pas la place (une seule colonne), il passe à droite du curseur.
  const place = () => {
    const m = motion.current;
    const el = previewRef.current;
    const list = listRef.current;
    if (!el || !list) return;
    const { width, height } = el.getBoundingClientRect();
    const listLeft = list.getBoundingClientRect().left;
    let left = listLeft - width - PREVIEW_GAP + (m.x - listLeft) * 0.08;
    if (left < 16) left = Math.min(m.x + PREVIEW_GAP, window.innerWidth - width - 16);
    const top = Math.min(Math.max(m.y - height / 2, 16), window.innerHeight - height - 16);
    el.style.transform = `translate3d(${left}px, ${top}px, 0)`;
  };

  const tick = () => {
    const m = motion.current;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const k = reduce ? 1 : FOLLOW;
    m.x += (m.tx - m.x) * k;
    m.y += (m.ty - m.y) * k;
    place();
    m.frame = Math.abs(m.tx - m.x) + Math.abs(m.ty - m.y) > 0.5 ? requestAnimationFrame(tick) : 0;
  };

  const onPointerMove = (event: PointerEvent<HTMLUListElement>) => {
    if (event.pointerType !== "mouse") return;
    const m = motion.current;
    m.tx = event.clientX;
    m.ty = event.clientY;
    // Première apparition : l'aperçu naît sous le curseur, sans traverser l'écran.
    if (!m.placed) {
      m.x = m.tx;
      m.y = m.ty;
      m.placed = true;
      place();
    }
    if (!m.frame) m.frame = requestAnimationFrame(tick);
  };

  const onPointerLeave = () => {
    setHovered(null);
    motion.current.placed = false;
  };

  const open = (index: number) => {
    setHovered(null);
    setOpened(index);
  };

  useEffect(() => {
    const dialog = dialogRef.current;
    if (opened !== null && dialog && !dialog.open) dialog.showModal();
  }, [opened]);

  useEffect(() => {
    setMounted(true);
    const m = motion.current;
    return () => {
      if (m.frame) cancelAnimationFrame(m.frame);
    };
  }, []);

  // Fermeture en cliquant sur le fond sombre autour de la fenêtre.
  const onDialogClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === event.currentTarget) dialogRef.current?.close();
  };

  const current = opened !== null ? items[opened] : null;

  return (
    <>
      <ul ref={listRef} className={styles.list} onPointerMove={onPointerMove} onPointerLeave={onPointerLeave}>
        {items.map((item, i) => (
          <li key={item.id} className={styles.item}>
            <button
              type="button"
              className={styles.row}
              aria-haspopup="dialog"
              onPointerEnter={(event) => {
                if (event.pointerType === "mouse" && canHover()) setHovered(i);
              }}
              onClick={() => open(i)}
            >
              <span className={styles.name}>{item.title[locale]}</span>
              <span className={styles.year}>{item.year}</span>
              <span className={styles.meta}>
                {labels.issuedBy} {item.issuer} · {item.category[locale]}
              </span>
              <span className={styles.view}>
                {labels.view}
                <ArrowIcon className={styles.viewIcon} />
              </span>
            </button>
          </li>
        ))}
      </ul>

      {/* Aperçu qui suit la souris (décoratif : le même certificat est accessible au clic).
          Placé dans <body> pour ne pas être décalé par les animations de la section. */}
      {mounted
        ? createPortal(
            <div ref={previewRef} className={styles.preview} data-visible={hovered !== null || undefined} aria-hidden="true">
              <div className={styles.previewInner}>
                {items.map((item, i) => (
                  <div key={item.id} className={styles.previewItem} data-active={hovered === i || undefined}>
                    <Certificate item={item} locale={locale} placeholder={labels.placeholder} sizes="360px" />
                  </div>
                ))}
              </div>
            </div>,
            document.body,
          )
        : null}

      <dialog
        ref={dialogRef}
        className={styles.dialog}
        aria-labelledby="certificate-title"
        onClose={() => setOpened(null)}
        onClick={onDialogClick}
      >
        {current ? (
          <figure className={styles.dialogBody}>
            <Certificate item={current} locale={locale} placeholder={labels.placeholder} sizes="(max-width: 900px) 92vw, 860px" />
            <figcaption className={styles.caption}>
              <span id="certificate-title" className={styles.captionTitle}>
                {current.title[locale]}
              </span>
              <span className={styles.captionMeta}>
                {current.issuer} · {current.year}
              </span>
            </figcaption>
            <button type="button" className={styles.close} onClick={() => dialogRef.current?.close()}>
              {labels.close}
              <span aria-hidden="true"> ×</span>
            </button>
          </figure>
        ) : null}
      </dialog>
    </>
  );
}

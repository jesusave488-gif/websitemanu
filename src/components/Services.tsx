"use client";

import Link from "next/link";
import { useState } from "react";
import type { Dictionary } from "@/i18n";
import type { ServiceId } from "@/content/services";

type ServicesProps = {
  dict: Dictionary["services"];
  n: string;
  items: {
    id: ServiceId;
    number: string;
    /** Lien vers un projet de ce service, sinon lien WhatsApp avec message pré-rempli. */
    href: string;
    isProject: boolean;
  }[];
};

/** Services en accordéon : un service ouvert à la fois (clic, ou survol à la souris). */
export default function Services({ dict, n, items }: ServicesProps) {
  const [open, setOpen] = useState(0);

  return (
    <section className="services dark sec wrap" id="services">
      <div className="head rv">
        <p className="k"><b>({n})</b><span>{dict.label}</span></p>
        <h2 className="title">{dict.title}</h2>
      </div>
      <div className="body">
        <ul className="list rv d1">
          {items.map((item, i) => {
            const text = dict.items[item.id];
            const on = i === open;
            return (
              <li
                key={item.id}
                className={`svc${on ? " on" : ""}`}
                onMouseEnter={() => {
                  if (matchMedia("(hover: hover)").matches) setOpen(i);
                }}
              >
                <button type="button" aria-expanded={on} aria-controls={`svc-${item.id}`} onClick={() => setOpen(i)}>
                  <span className="n">{item.number}</span>
                  <span className="t">{text.title}</span>
                  <span className="plus" aria-hidden="true">+</span>
                </button>
                <div className="more" id={`svc-${item.id}`}>
                  <div>
                    <p>{text.description}</p>
                    {item.isProject ? (
                      <Link href={item.href} tabIndex={on ? 0 : -1}>{dict.seeProject}</Link>
                    ) : (
                      <a href={item.href} target="_blank" rel="noopener noreferrer" tabIndex={on ? 0 : -1}>
                        {dict.talk}
                      </a>
                    )}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

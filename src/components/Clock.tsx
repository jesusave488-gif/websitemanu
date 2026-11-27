"use client";

import { useEffect, useState } from "react";

const format = () =>
  new Intl.DateTimeFormat("fr-FR", { hour: "2-digit", minute: "2-digit", timeZone: "Africa/Porto-Novo" }).format(new Date());

/** Heure de Cotonou, mise à jour toutes les 20 secondes (vide avant le chargement). */
export default function Clock({ prefix = "", className }: { prefix?: string; className?: string }) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => setTime(format());
    tick();
    const id = setInterval(tick, 20000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className={className} suppressHydrationWarning>
      {time ? prefix + time : className ? "--:--" : ""}
    </span>
  );
}

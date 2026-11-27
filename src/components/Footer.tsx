import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n";
import { site, whatsappLink } from "@/content/site";
import Clock from "./Clock";

type FooterProps = {
  locale: Locale;
  dict: Dictionary;
  hasWork: boolean;
  n: string;
};

/** Footer sombre : appel au contact, grande navigation, coordonnées et heure locale. */
export default function Footer({ locale, dict, hasWork, n }: FooterProps) {
  const home = `/${locale}`;
  const wa = whatsappLink(dict.contact.whatsappMessage);
  const social = site.social.filter((s) => s.url);
  const nav = [
    ...(hasWork ? [{ href: `${home}#travaux`, label: dict.nav.work }] : []),
    { href: `${home}#services`, label: dict.nav.services },
    { href: `${home}#apropos`, label: dict.nav.about },
  ];

  return (
    <footer className="foot dark" id="contact">
      <div className="cta wrap">
        <p className="k"><b>({n})</b><span>{dict.contact.label}</span></p>
        <div>
          <h2>
            {dict.contact.title} <em>{dict.contact.accent}</em>
          </h2>
          <div className="actions">
            <a className="btn fill" href={wa} target="_blank" rel="noopener noreferrer">
              <span>{dict.contact.whatsappCta}</span>
              <span className="ic" aria-hidden="true">↗</span>
            </a>
            <a className="btn line" href={`mailto:${site.email}`}>
              <span>{dict.contact.emailCta}</span>
              <span className="ic" aria-hidden="true">✉</span>
            </a>
          </div>
        </div>
      </div>

      <nav className="bignav" aria-label="Pages">
        {nav.map((item) => (
          <Link key={item.href} href={item.href}>
            <span>{item.label}</span>
            <span className="arr" aria-hidden="true">→</span>
          </Link>
        ))}
        <a href={wa} target="_blank" rel="noopener noreferrer">
          <span>{dict.footer.whatsapp}</span>
          <span className="arr" aria-hidden="true">→</span>
        </a>
      </nav>

      <div className="cols">
        <div>
          <span className="k">{site.name}</span>
          <span>{dict.footer.tagline}</span>
        </div>
        <div>
          <span className="k">{dict.footer.write}</span>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href={wa} target="_blank" rel="noopener noreferrer">{site.whatsapp.display}</a>
        </div>
        {social.length > 0 ? (
          <div>
            <span className="k">{dict.footer.follow}</span>
            {social.map((s) => (
              <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer">{s.label}</a>
            ))}
          </div>
        ) : null}
        <div>
          <span className="k">{dict.footer.findMe}</span>
          <span>{dict.footer.location}</span>
        </div>
        <div>
          <span className="k">{dict.footer.localTime}</span>
          <Clock className="clock" />
        </div>
      </div>

      <div className="copy">
        <span>© {site.year} — {site.name}</span>
        <a href="#top">{dict.footer.backToTop}</a>
      </div>
    </footer>
  );
}

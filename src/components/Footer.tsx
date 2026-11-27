import type { Dictionary } from "@/i18n";
import { site, whatsappLink } from "@/content/site";

/** (05) Contact — un seul bloc — puis un pied de page minimal. */
export default function Footer({ dict }: { dict: Dictionary }) {
  const wa = whatsappLink();

  return (
    <footer className="foot dark" id="contact">
      <div className="cta wrap">
        <p className="k"><b>(05)</b><span>{dict.contact.label}</span></p>
        <div>
          <h2>{dict.contact.title}</h2>
          <p className="text">{dict.contact.text}</p>
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
          <p className="info">
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <span aria-hidden="true"> · </span>
            <a href={wa} target="_blank" rel="noopener noreferrer">{site.whatsapp.display}</a>
            <span aria-hidden="true"> · </span>
            <span>{dict.contact.location}</span>
          </p>
        </div>
      </div>

      <p className="copy wrap">
        © {site.year} {site.name} · <a href="#top">{dict.footer.backToTop}</a>
      </p>
    </footer>
  );
}

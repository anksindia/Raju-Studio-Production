import Link from "next/link";
import { Logo } from "./Logo";
import { nav, studio } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="site-footer on-dark">
      <div className="wrap">
        <div className="site-footer__grid">
          <div>
            {/* Rendered image is ~1.52× the 280px crop box. */}
            <Logo sizes="430px" className="site-footer__logo" />
            <p className="site-footer__tagline">{studio.tagline}</p>
          </div>
          <div>
            <h2>Explore</h2>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Call or WhatsApp</h2>
            <ul>
              {studio.phones.map((p) => (
                <li key={p.e164}>
                  <a href={p.tel}>Call {p.display}</a>
                </li>
              ))}
              {studio.phones.map((p) => (
                <li key={`wa-${p.e164}`}>
                  <a href={p.whatsapp} target="_blank" rel="noopener noreferrer">
                    WhatsApp {p.display}
                  </a>
                </li>
              ))}
              <li>
                <a href={studio.instagram.url} target="_blank" rel="noopener noreferrer">
                  Instagram {studio.instagram.handle}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="site-footer__base">
          <p>
            {studio.name} · {studio.photographer}, {studio.role}
          </p>
          <p>{studio.location.display}</p>
        </div>
      </div>
    </footer>
  );
}

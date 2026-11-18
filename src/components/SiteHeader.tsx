import Link from "next/link";
import { studio } from "@/content/site";
import { SiteNav } from "./SiteNav";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="wrap site-header__inner">
        <Link href="/" className="wordmark" aria-label={`${studio.name}, home`}>
          <span className="wordmark__name">{studio.name}</span>
          <span className="wordmark__sub">Gokul Negi · Almora</span>
        </Link>
        <SiteNav />
      </div>
    </header>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { nav } from "@/content/site";

export function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Close whenever the route changes.
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const isCurrent = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <nav aria-label="Main" className="site-nav">
      <button
        ref={toggleRef}
        type="button"
        className="nav-toggle"
        aria-expanded={open}
        aria-controls="site-nav-panel"
        onClick={() => setOpen((v) => !v)}
      >
        <span>{open ? "Close" : "Menu"}</span>
        <span className="nav-toggle__bars" aria-hidden="true" />
      </button>
      <div id="site-nav-panel" className="site-nav__panel" hidden={!open}>
        <ul className="site-nav__list">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="site-nav__link"
                aria-current={isCurrent(item.href) ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/contact#inquire" className="btn btn--solid site-nav__cta" onClick={() => setOpen(false)}>
          Inquire
        </Link>
      </div>
    </nav>
  );
}

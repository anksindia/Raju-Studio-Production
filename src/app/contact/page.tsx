import type { Metadata } from "next";
import { InquiryForm } from "@/components/InquiryForm";
import { Logo } from "@/components/Logo";
import { studio } from "@/content/site";
import { og, pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Contact & Inquiries — Wedding Photographer in Almora",
  description:
    "Call or WhatsApp Raju Studio Production on +91 97566 59599 or +91 81263 38910 to book wedding, pre-wedding and event photography in Almora, Uttarakhand.",
  path: "/contact",
  image: og("contact", "A groom in a sage shawl holds the bride close beneath tall trees."),
});

export default function ContactPage() {
  return (
    <section className="section" style={{ paddingTop: "clamp(48px, 9vw, 120px)" }} aria-labelledby="contact-title">
      <div className="wrap contact-grid">
        <div style={{ display: "grid", gap: "clamp(28px, 4vw, 44px)" }}>
          <div className="page-intro__inner">
            <p className="eyebrow">Contact</p>
            <h1 id="contact-title" className="display">
              Let’s Create Something Timeless
            </h1>
            <p className="lede">
              Have a wedding, pre-wedding shoot or special celebration coming up? Let’s turn your beautiful moments
              into memories that last forever.
            </p>
          </div>

          <ul className="contact-methods">
            <li className="contact-method">
              <span className="contact-method__label">Call</span>
              <span className="contact-method__links">
                {studio.phones.map((p) => (
                  <a key={p.e164} href={p.tel} aria-label={`Call ${p.display}`}>
                    {p.display}
                  </a>
                ))}
              </span>
            </li>
            <li className="contact-method">
              <span className="contact-method__label">WhatsApp</span>
              <span className="contact-method__links">
                {studio.phones.map((p) => (
                  <a
                    key={p.e164}
                    href={p.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`WhatsApp ${p.display} (opens WhatsApp)`}
                  >
                    {p.display}
                  </a>
                ))}
              </span>
            </li>
            <li className="contact-method">
              <span className="contact-method__label">Instagram</span>
              <span className="contact-method__links">
                <a href={studio.instagram.url} target="_blank" rel="noopener noreferrer">
                  {studio.instagram.handle}
                </a>
              </span>
            </li>
            <li className="contact-method">
              <span className="contact-method__label">Location</span>
              <address style={{ fontStyle: "normal", fontFamily: "var(--serif)", fontSize: "1.45rem" }}>
                {studio.location.display}
              </address>
            </li>
          </ul>

          <div className="logo-panel on-dark">
            <Logo sizes="(min-width: 400px) 550px, 150vw" />
          </div>
        </div>

        <div id="inquire" style={{ display: "grid", gap: 18, scrollMarginTop: 24 }}>
          <h2 className="h3">Tell us about your day</h2>
          <InquiryForm />
        </div>
      </div>
    </section>
  );
}

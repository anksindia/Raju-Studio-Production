import type { Metadata } from "next";
import Link from "next/link";
import { InquiryBand } from "@/components/InquiryBand";
import { PageIntro } from "@/components/PageIntro";
import { Still } from "@/components/Still";
import { getPhoto } from "@/content/media";
import { services } from "@/content/site";
import { og, pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Wedding Photography & Film Services in Uttarakhand",
  description:
    "Wedding, pre-wedding, cinematic videography, baby and maternity, event, drone, traditional and destination wedding photography from Raju Studio Production, Almora.",
  path: "/services",
  image: og("services", "A bride in red and gold smiles softly against warm lights."),
});

export default function ServicesPage() {
  return (
    <>
      <PageIntro eyebrow="What we do" title="Every occasion. Every emotion. Every memory.">
        <p>
          From weddings and pre-wedding stories to naming ceremonies and family celebrations, based in Almora and
          available across Uttarakhand.
        </p>
      </PageIntro>

      <section className="wrap" aria-label="Services">
        <ol className="service-list">
          {services.map((s) => (
            <li key={s.number} className="service">
              <span className="service__num" aria-hidden="true">
                {s.number}
              </span>
              <div className="service__body">
                <h2 className="h3">{s.title}</h2>
                <p>{s.description}</p>
                {s.related ? (
                  <Link href={s.related.href} className="text-link">
                    {s.related.label} <span aria-hidden="true">→</span>
                  </Link>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="section" aria-labelledby="wedding-title">
        <div className="wrap split-band">
          <div style={{ width: "min(100%, 520px)" }}>
            <Still
              photo={getPhoto("crimson-garden-wedding-04")}
              sizes="(min-width: 900px) 520px, calc(100vw - 32px)"
            />
          </div>
          <div className="section-head" style={{ marginBottom: 0 }}>
            <p className="eyebrow">Wedding photography</p>
            <h2 id="wedding-title" className="h2">
              Because your wedding deserves to be remembered beautifully.
            </h2>
            <div className="prose">
              <p>
                A wedding is not just an event; it’s a beautiful collection of emotions, traditions and unforgettable
                moments. We capture the laughter, tears, rituals and celebrations, and all the little details that
                make your wedding unique.
              </p>
              <p>From the first look to the final celebration, every frame is thoughtfully captured to tell your story.</p>
            </div>
            <p>
              <Link href="/portfolio" className="text-link">
                See wedding stories <span aria-hidden="true">→</span>
              </Link>
            </p>
          </div>
        </div>
      </section>

      <InquiryBand />
    </>
  );
}

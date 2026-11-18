import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { InquiryBand } from "@/components/InquiryBand";
import { portrait } from "@/content/media";
import { studio } from "@/content/site";
import { og, pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "About Gokul Negi — Wedding Photographer in Almora",
  description:
    "Meet Gokul Negi, the professional wedding photographer who leads Raju Studio Production in Almora, Uttarakhand.",
  path: "/about",
  image: og("about", "Gokul Negi, smiling, in a grey blazer."),
});

export default function AboutPage() {
  return (
    <>
      <section className="section" style={{ paddingTop: "clamp(40px, 7vw, 96px)" }} aria-labelledby="about-title">
        <div className="wrap about-grid">
          <div className="about-grid__portrait">
            <div className="frame">
              <Image
                src={portrait.src}
                width={portrait.width}
                height={portrait.height}
                alt={portrait.alt}
                sizes="(min-width: 1320px) 520px, (min-width: 900px) 40vw, calc(100vw - 32px)"
                quality={90}
                loading="eager"
                fetchPriority="high"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>

          <div style={{ display: "grid", gap: "clamp(28px, 4vw, 48px)" }}>
            <div className="page-intro__inner">
              <p className="eyebrow">About the studio</p>
              <h1 id="about-title" className="display">
                Gokul Negi
              </h1>
              <p className="lede">
                {studio.role} and the lead photographer of {studio.name}, Almora, Uttarakhand.
              </p>
            </div>

            <div className="prose">
              <p>
                Raju Studio Production is a photography and visual storytelling studio led by Gokul Negi, a
                professional wedding photographer passionate about capturing life’s most beautiful moments.
              </p>
              <p>
                We believe every photograph tells a story. From the emotions of a wedding ceremony to the happiness of
                a pre-wedding celebration, our goal is to preserve every special moment through creative photography
                and cinematic storytelling.
              </p>
              <p>
                Our approach combines traditional photography with candid storytelling, so the important people,
                rituals and emotions of every celebration are beautifully documented.
              </p>
            </div>

            <blockquote className="pullquote">
              We don’t just capture photographs; we create memories that last a lifetime.
            </blockquote>

            <div style={{ display: "grid", gap: 14 }}>
              <h2 className="eyebrow">Our vision</h2>
              <p className="h3">{studio.vision}</p>
            </div>

            <div style={{ display: "grid", gap: 14 }}>
              <h2 className="eyebrow">Known for</h2>
              <ul className="tag-list">
                {studio.specialties.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>

            <p style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <Link href="/portfolio" className="btn btn--ghost">
                Explore the Portfolio
              </Link>
              <Link href="/services" className="btn btn--ghost">
                What we do
              </Link>
            </p>
          </div>
        </div>
      </section>

      <InquiryBand />
    </>
  );
}

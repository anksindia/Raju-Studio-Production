import type { Metadata } from "next";
import Link from "next/link";
import { FilmPlayer } from "@/components/FilmPlayer";
import { InquiryBand } from "@/components/InquiryBand";
import { PageIntro } from "@/components/PageIntro";
import { Still } from "@/components/Still";
import { galleries, getFilm, getPhoto } from "@/content/media";
import { og, pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Wedding Photography Portfolio",
  description:
    "Wedding, bridal and engagement stories photographed by Gokul Negi of Raju Studio Production, a wedding photographer in Almora, Uttarakhand.",
  path: "/portfolio",
  image: og("portfolio", "Under an arch of leaves, a man kneels to place a ring on his fiancée’s finger."),
});

export default function PortfolioPage() {
  const preWedding = getFilm("happiness-pre-wedding-film");

  return (
    <>
      <PageIntro eyebrow="Portfolio" title="Stories, frame by frame">
        <p>
          Weddings, brides and engagements from across Uttarakhand — each shoot kept together, in the order the day
          unfolded.
        </p>
      </PageIntro>

      <section className="wrap" aria-label="Photo stories">
        <ul className="story-list plain-list">
          {galleries.map((g) => (
            <li key={g.slug}>
              <Link href={`/portfolio/${g.slug}`} className="story-item">
                <Still
                  photo={getPhoto(g.cover)}
                  zoom
                  trimmed
                  className="story-item__cover"
                  sizes="(min-width: 900px) 560px, calc(100vw - 32px)"
                />
                <span className="story-item__text">
                  <span className="eyebrow">
                    {g.categoryLabel} · {g.rows.reduce((n, r) => n + (r.kind === "pair" ? 2 : 1), 0)} photographs
                  </span>
                  <span className="story-item__title">{g.title}</span>
                  <span className="story-item__summary">{g.summary}</span>
                  <span className="text-link">
                    View the story <span aria-hidden="true">→</span>
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="section" aria-labelledby="pre-wedding-title">
        <div className="wrap split-band">
          <FilmPlayer film={preWedding} showCaption={false} sizes="(min-width: 900px) 600px, calc(100vw - 32px)" />
          <div className="section-head" style={{ marginBottom: 0 }}>
            <p className="eyebrow">Pre-wedding · Film</p>
            <h2 id="pre-wedding-title" className="h2">
              Two hearts. One beautiful story.
            </h2>
            <p className="lede">
              Our pre-wedding work is told in motion: waterfalls, prayer flags and fairy-lit evenings in{" "}
              <em>{preWedding.title}</em>.
            </p>
            <p>
              <Link href="/films#pre-wedding" className="text-link">
                More pre-wedding &amp; engagement films <span aria-hidden="true">→</span>
              </Link>
            </p>
          </div>
        </div>
      </section>

      <InquiryBand />
    </>
  );
}

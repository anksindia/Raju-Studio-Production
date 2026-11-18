import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FilmPlayer } from "@/components/FilmPlayer";
import { InquiryBand } from "@/components/InquiryBand";
import { Still } from "@/components/Still";
import { galleries, getFilm, getGallery, getPhoto, type GalleryRow } from "@/content/media";
import { pageMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return galleries.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const g = getGallery((await params).slug);
  if (!g) return {};
  const cover = getPhoto(g.cover);
  return pageMetadata({
    title: `${g.title} — ${g.categoryLabel} Photography`,
    description: `${g.intro} ${g.categoryLabel} photography by Raju Studio Production, Almora, Uttarakhand.`,
    path: `/portfolio/${g.slug}`,
    image: { url: cover.src, width: cover.width, height: cover.height, alt: cover.alt },
  });
}

// Inner width of .wrap is min(1320px, 100vw) minus gutters (16–48px each side).
const SIZES = {
  feature: "(min-width: 760px) 720px, calc(100vw - 32px)",
  pair: "(min-width: 1320px) 600px, (min-width: 760px) 46vw, calc(100vw - 32px)",
  wide: "(min-width: 1320px) 1224px, calc(100vw - 32px)",
};

function Row({ row }: { row: GalleryRow }) {
  switch (row.kind) {
    case "feature":
      return (
        <div className="story-row--feature">
          <figure>
            <Still photo={getPhoto(row.photo)} sizes={SIZES.feature} />
          </figure>
          {row.note ? <p className="note">{row.note}</p> : null}
        </div>
      );
    case "pair":
      return (
        <div className="story-row--pair">
          {row.photos.map((id) => (
            <figure key={id}>
              <Still photo={getPhoto(id)} sizes={SIZES.pair} />
            </figure>
          ))}
        </div>
      );
    case "wide":
      return (
        <div className="story-row--wide">
          <figure>
            <Still photo={getPhoto(row.photo)} sizes={SIZES.wide} />
          </figure>
        </div>
      );
  }
}

export default async function StoryPage({ params }: Props) {
  const { slug } = await params;
  const g = getGallery(slug);
  if (!g) notFound();

  const i = galleries.indexOf(g);
  const prev = galleries[(i - 1 + galleries.length) % galleries.length];
  const next = galleries[(i + 1) % galleries.length];
  const film = g.film ? getFilm(g.film) : null;

  return (
    <>
      <header className="page-intro">
        <div className="wrap page-intro__inner">
          <nav aria-label="Breadcrumb" className="breadcrumb">
            <Link href="/portfolio">
              <span aria-hidden="true">←&nbsp;</span>Portfolio
            </Link>
          </nav>
          <p className="eyebrow">{g.categoryLabel}</p>
          <h1 className="display">{g.title}</h1>
          <p className="lede">{g.intro}</p>
        </div>
      </header>

      <article className="wrap story" aria-label={`${g.title} photographs`}>
        {g.rows.map((row, idx) => (
          <Row key={idx} row={row} />
        ))}
      </article>

      {film ? (
        <section className="section" aria-labelledby="story-film-title">
          <div className="wrap split-band">
            <div className="section-head" style={{ marginBottom: 0 }}>
              <p className="eyebrow">From the same shoot</p>
              <h2 id="story-film-title" className="h2">
                {film.title}
              </h2>
              <p className="lede">{film.description}</p>
            </div>
            <div style={{ maxWidth: 360, width: "100%", justifySelf: "center" }}>
              <FilmPlayer film={film} showCaption={false} sizes="360px" />
            </div>
          </div>
        </section>
      ) : null}

      <nav className="wrap section--tight" aria-label="More stories">
        <div className="story-nav">
          <Link href={`/portfolio/${prev.slug}`} rel="prev">
            <span className="eyebrow">← Previous story</span>
            <span className="story-nav__title">{prev.title}</span>
          </Link>
          <Link href={`/portfolio/${next.slug}`} rel="next">
            <span className="eyebrow">Next story →</span>
            <span className="story-nav__title">{next.title}</span>
          </Link>
        </div>
      </nav>

      <InquiryBand />
    </>
  );
}

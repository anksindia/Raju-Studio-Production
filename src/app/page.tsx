import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FilmPlayer } from "@/components/FilmPlayer";
import { InquiryBand } from "@/components/InquiryBand";
import { Still } from "@/components/Still";
import { getFilm, getGallery, getPhoto, hero, portrait } from "@/content/media";
import { studio } from "@/content/site";
import { og, pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Wedding Photographer in Almora, Uttarakhand",
    description:
      "Raju Studio Production is a wedding photography and cinematic film studio in Almora, Uttarakhand, led by photographer Gokul Negi. Weddings, pre-wedding shoots and family celebrations.",
    path: "/",
    image: og("home", "A bride bows to touch the groom’s feet during the varmala as pink colour smoke drifts over the stage."),
  }),
  title: { absolute: `${studio.name} — Wedding Photographer in Almora, Uttarakhand` },
};

const selected = [
  { gallery: "pastel-garden-wedding", photo: "pastel-garden-wedding-02" },
  { gallery: "bride-in-red", photo: "bride-in-red-03" },
  { gallery: "garden-engagement", photo: "garden-engagement-03" },
];

export default function HomePage() {
  const teaser = getFilm("some-memories-wedding-teaser");

  return (
    <>
      <section className="hero on-dark" aria-labelledby="hero-title">
        <div className="hero__media">
          <Image
            src={hero.src}
            alt={hero.alt}
            fill
            sizes="100vw"
            unoptimized
            loading="eager"
            fetchPriority="high"
            style={{ objectPosition: hero.focus }}
          />
          <div className="hero__shade" aria-hidden="true" />
        </div>
        <div className="hero__content">
          <div className="wrap">
            <p className="eyebrow hero__place fade-up">Wedding Photography · Almora, Uttarakhand</p>
            <h1 id="hero-title" className="hero__title fade-up">
              {studio.name}
            </h1>
            <p className="hero__tagline fade-up fade-up--late">{studio.tagline}</p>
            <div className="hero__actions fade-up fade-up--late">
              <Link href="/portfolio" className="btn btn--light">
                Explore the Portfolio
              </Link>
              <Link href="/contact#inquire" className="btn btn--solid">
                Inquire
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="intro-title">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">A day full of love. A lifetime of memories.</p>
            <h2 id="intro-title" className="h2" style={{ maxWidth: "20ch" }}>
              We don’t just capture photographs; we create memories that last a lifetime.
            </h2>
          </div>
          <div className="prose">
            <p>
              A wedding is a collection of emotions, traditions and unforgettable moments. From the first look to the
              final celebration, Raju Studio Production photographs the laughter, the tears, the rituals and the small
              details that make your day your own — in Almora and across Uttarakhand.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }} aria-labelledby="work-title">
        <div className="wrap">
          <div className="section-head section-head--split">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2 id="work-title" className="h2">
                Weddings, brides &amp; engagements
              </h2>
            </div>
            <Link href="/portfolio" className="text-link">
              All stories <span aria-hidden="true">→</span>
            </Link>
          </div>
          <ul className="work-grid plain-list">
            {selected.map(({ gallery, photo }) => {
              const g = getGallery(gallery)!;
              return (
                <li key={gallery}>
                  <Link href={`/portfolio/${g.slug}`} className="work-card">
                    <Still
                      photo={getPhoto(photo)}
                      zoom
                      trimmed
                      sizes="(min-width: 1320px) 392px, (min-width: 760px) 31vw, calc(100vw - 32px)"
                    />
                    <span className="work-card__meta">
                      <span className="eyebrow">{g.categoryLabel}</span>
                      <span className="work-card__title">{g.title}</span>
                      <span className="work-card__summary">{g.summary}</span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="section dark-band on-dark" aria-labelledby="film-title">
        <div className="wrap film-feature">
          <div className="section-head" style={{ marginBottom: 0 }}>
            <p className="eyebrow">Cinematic films</p>
            <h2 id="film-title" className="h2">
              Not just a film. A memory in motion.
            </h2>
            <p className="lede">
              Some moments deserve more than a photograph. Our films hold the atmosphere, the emotion and the details
              of your celebration, so you can live it again and again.
            </p>
            <p>
              <Link href="/films" className="text-link">
                Watch the films <span aria-hidden="true">→</span>
              </Link>
            </p>
          </div>
          <FilmPlayer film={teaser} sizes="(min-width: 1320px) 816px, (min-width: 1000px) 62vw, calc(100vw - 32px)" />
        </div>
      </section>

      <section className="section" aria-labelledby="meet-title">
        <div className="wrap meet">
          <div className="meet__portrait">
            <div className="frame">
              <Image
                src={portrait.src}
                width={portrait.width}
                height={portrait.height}
                alt={portrait.alt}
                sizes="(min-width: 900px) 440px, min(440px, calc(100vw - 32px))"
                quality={90}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>
          <div className="section-head" style={{ marginBottom: 0 }}>
            <p className="eyebrow">Meet Gokul Negi</p>
            <h2 id="meet-title" className="h2">
              Every photograph tells a story.
            </h2>
            <div className="prose">
              <p>
                Raju Studio Production is a photography and visual storytelling studio led by Gokul Negi, a
                professional wedding photographer passionate about capturing life’s most beautiful moments.
              </p>
              <p>
                From the emotions of a wedding ceremony to the happiness of a pre-wedding celebration, his goal is to
                preserve every special moment through creative photography and cinematic storytelling.
              </p>
            </div>
            <p className="meet__sign">Gokul Negi</p>
            <p>
              <Link href="/about" className="text-link">
                About the studio <span aria-hidden="true">→</span>
              </Link>
            </p>
          </div>
        </div>
      </section>

      <InquiryBand />
    </>
  );
}

import type { Metadata } from "next";
import { FilmPlayer } from "@/components/FilmPlayer";
import { InquiryBand } from "@/components/InquiryBand";
import { PageIntro } from "@/components/PageIntro";
import { filmSections, films } from "@/content/media";
import { og, pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Wedding Films & Reels",
  description:
    "Cinematic wedding films, Kumauni wedding reels, a pre-wedding film and family ceremony reels by Raju Studio Production, Almora, Uttarakhand.",
  path: "/films",
  image: og("films", "Rose petals fall over a bride and groom beneath a pink floral mandap."),
});

const SIZES = {
  vertical: "(min-width: 1320px) 290px, (min-width: 1100px) 23vw, (min-width: 760px) 31vw, 46vw",
  wide: "(min-width: 1100px) 980px, calc(100vw - 32px)",
};

const isWide = (aspect: string) => {
  const [w, h] = aspect.split("/").map((n) => Number(n.trim()));
  return w > h;
};

export default function FilmsPage() {
  return (
    <>
      <PageIntro eyebrow="Cinematic films" title="Relive every moment. Feel every emotion.">
        <p>
          Wedding highlights, reels and teasers that capture the atmosphere and emotion of the day. Each film loads
          only when you press play, and the sound is yours to control.
        </p>
      </PageIntro>

      {filmSections.map((section) => {
        const list = films.filter((f) => f.category === section.category);
        if (!list.length) return null;
        const id = section.category;
        return (
          <section key={id} id={id} className="film-section section--tight" aria-labelledby={`${id}-title`}>
            <div className="wrap">
              <div className="section-head">
                <h2 id={`${id}-title`} className="h2">
                  {section.title}
                </h2>
                <p className="lede">{section.intro}</p>
              </div>
              <div className="film-grid">
                {list.map((film) => {
                  const wide = isWide(film.aspect);
                  return (
                    <FilmPlayer
                      key={film.slug}
                      film={film}
                      className={wide ? "film--wide" : undefined}
                      sizes={wide ? SIZES.wide : SIZES.vertical}
                    />
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}

      <InquiryBand heading="Not just a film. A memory in motion." />
    </>
  );
}

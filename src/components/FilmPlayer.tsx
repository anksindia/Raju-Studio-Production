"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Film } from "@/content/media";

const PLAY_EVENT = "rsp:film-play";

function formatDuration(s: number) {
  const m = Math.floor(s / 60);
  return `${m}:${String(Math.round(s % 60)).padStart(2, "0")}`;
}

type Props = {
  film: Film;
  /** `sizes` for the poster at this layout. */
  sizes: string;
  headingLevel?: "h2" | "h3";
  className?: string;
  showCaption?: boolean;
};

/**
 * Shows an optimised still poster; the <video> element (and its source) is
 * only created after the visitor presses play. Playback starts from that
 * gesture with native controls, so sound and volume stay with the visitor.
 */
export function FilmPlayer({ film, sizes, headingLevel = "h3", className, showCaption = true }: Props) {
  const [active, setActive] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const Heading = headingLevel;
  const titleId = `film-${film.slug}-title`;

  // Pause this film when another one starts.
  useEffect(() => {
    if (!active) return;
    const onOtherPlay = (e: Event) => {
      if ((e as CustomEvent<string>).detail !== film.slug) videoRef.current?.pause();
    };
    window.addEventListener(PLAY_EVENT, onOtherPlay);
    return () => window.removeEventListener(PLAY_EVENT, onOtherPlay);
  }, [active, film.slug]);

  useEffect(() => {
    if (!active) return;
    const v = videoRef.current;
    if (!v) return;
    v.focus({ preventScroll: true });
    // Started by a click, so playing with sound is allowed; if a browser still
    // refuses, the native controls remain for the visitor to start it.
    v.play().catch(() => {});
  }, [active]);

  return (
    <figure className={["film", className].filter(Boolean).join(" ")} id={film.slug} aria-labelledby={showCaption ? titleId : undefined}>
      <div className="film__stage" style={{ aspectRatio: film.aspect }}>
        <Image src={film.poster.src} alt={film.poster.alt} fill sizes={sizes} quality={85} />
        {active ? (
          <video
            ref={videoRef}
            src={film.src}
            controls
            playsInline
            preload="auto"
            aria-label={film.title}
            onPlay={() => window.dispatchEvent(new CustomEvent(PLAY_EVENT, { detail: film.slug }))}
          />
        ) : (
          <button type="button" className="film__play" onClick={() => setActive(true)}>
            <span className="visually-hidden">
              Play film: {film.title} ({formatDuration(film.duration)}, with sound)
            </span>
            <span className="film__play-icon" aria-hidden="true">
              <svg viewBox="0 0 12 14" fill="currentColor">
                <path d="M0 0v14l12-7z" />
              </svg>
            </span>
            <span className="film__duration" aria-hidden="true">
              {formatDuration(film.duration)}
            </span>
          </button>
        )}
      </div>
      {showCaption ? (
        <figcaption className="film__caption">
          <Heading id={titleId} className="film__title">
            {film.title}
          </Heading>
          <p className="film__desc">{film.description}</p>
          {film.note ? <p className="film__note">{film.note}</p> : null}
        </figcaption>
      ) : null}
    </figure>
  );
}

// Derives poster frames and Open Graph images from the media in /public/media.
// The supplied photos, films, portrait and logo live only in /public/media
// (see src/content/media.ts); this script never copies or modifies them.
//
//   npm run media            # create anything missing
//   npm run media -- --force # regenerate everything
//
// Requires ffmpeg on PATH.
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";

const PUB = join(process.cwd(), "public");
const force = process.argv.includes("--force");

function out(rel) {
  const p = join(PUB, rel);
  mkdirSync(dirname(p), { recursive: true });
  return p;
}

function ffmpeg(args) {
  execFileSync("ffmpeg", ["-v", "error", "-y", ...args], { stdio: "inherit" });
}

function step(dest, fn) {
  if (!force && existsSync(dest)) return;
  fn();
  console.log("✓", dest.slice(PUB.length + 1));
}

// ── Film posters: [slug, time (s), crop?] ─────────────────────────────────
// Letterboxed clips (wide picture inside a 9:16 frame) are cropped to the picture.
const posters = [
  ["delhi-lanes-to-mountain-frames", 20.75],
  ["loudest-side-of-the-wedding", 12.9],
  ["reception-love", 17.2],
  ["stepping-into-a-new-world", 9.84],
  ["haldi-sanskari-bahu", 6.27],
  ["do-dil-ek-kahani", 10.3],
  ["happiness-pre-wedding-film", 4.5, "720:324:0:478"],
  ["one-step-closer-to-forever", 20.6],
  ["a-little-name-naming-ceremony", 18.0],
  ["blessed-with-love-naming-ceremony", 30.5],
  ["janeu-sanskar", 5.56],
  ["better-together-teaser", 45.6, "720:404:0:438"],
  ["some-memories-wedding-teaser", 119.7],
];

for (const [slug, t, crop] of posters) {
  const video = join(PUB, `media/films/${slug}.mp4`);
  const poster = out(`media/posters/${slug}.jpg`);
  const vf = crop ? ["-vf", `crop=${crop}`] : [];
  step(poster, () => ffmpeg(["-ss", String(t), "-i", video, "-frames:v", "1", ...vf, "-q:v", "2", poster]));
}

// ── Open Graph (1200×630): [source in /public, name, vertical focus 0–1] ───
const og = [
  ["media/photos/varmala-in-colour/varmala-in-colour-04.webp", "home", 0.6],
  ["media/photos/garden-engagement/garden-engagement-03.jpg", "portfolio", 0.72],
  ["media/photos/pastel-garden-wedding/pastel-garden-wedding-02.webp", "contact", 0.35],
  ["media/photos/bride-in-red/bride-in-red-03.webp", "services", 0.38],
  ["media/brand/gokul-negi.png", "about", 0.17],
  ["media/posters/some-memories-wedding-teaser.jpg", "films", 0.5],
];
for (const [src, name, focus] of og) {
  const dest = out(`og/${name}.jpg`);
  const vf = `crop=iw:min(ih\\,iw*630/1200):0:(ih-oh)*${focus},scale=1200:630`;
  step(dest, () => ffmpeg(["-i", join(PUB, src), "-vf", vf, "-frames:v", "1", "-q:v", "3", dest]));
}

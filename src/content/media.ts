// Typed manifest for every media file on the site. The supplied photos, films,
// portrait and logo live (once) in /public/media under short names; posters and
// Open Graph images are derived from them by `npm run media`.

export type Photo = {
  id: string;
  src: string;
  width: number;
  height: number;
  alt: string;
  /** CSS object-position used whenever the frame is cropped (hero, OG). */
  focus?: string;
  /**
   * Aspect ratio of the photograph inside a post's built-in white margins.
   * Cards and covers crop to it (centred); story pages show the full post.
   */
  trim?: string;
  /** Designed Instagram layout (collage, lettering) rather than a single frame. */
  layout?: boolean;
  /** Filename as originally supplied (the Instagram caption), for reference. */
  original: string;
};

export type GalleryCategory = "wedding" | "bridal" | "engagement";

export type GalleryRow =
  | { kind: "feature"; photo: string; note?: string }
  | { kind: "pair"; photos: [string, string] }
  | { kind: "wide"; photo: string };

export type Gallery = {
  slug: string;
  title: string;
  category: GalleryCategory;
  categoryLabel: string;
  summary: string;
  intro: string;
  cover: string;
  rows: GalleryRow[];
  /** Related film slug, if the shoot has motion work. */
  film?: string;
};

export type FilmCategory = "wedding" | "pre-wedding" | "family" | "teaser";

export type Film = {
  slug: string;
  title: string;
  category: FilmCategory;
  description: string;
  src: string;
  /** Encoded frame size. */
  width: number;
  height: number;
  /**
   * Aspect ratio of the picture itself. Letterboxed clips (wide footage inside
   * a 9:16 frame) are shown at their true picture ratio; the black bars are
   * cropped by object-fit since the picture is vertically centred.
   */
  aspect: string;
  duration: number;
  poster: { src: string; width: number; height: number; alt: string };
  note?: string;
  /** Filename as originally supplied (the Instagram caption), for reference. */
  original: string;
};

const photo = (
  gallery: string,
  n: number,
  ext: "webp" | "jpg",
  width: number,
  height: number,
  alt: string,
  original: string,
  extra: Partial<Photo> = {},
): Photo => {
  const id = `${gallery}-${String(n).padStart(2, "0")}`;
  return { id, src: `/media/photos/${gallery}/${id}.${ext}`, width, height, alt, original, ...extra };
};

const C1 = "wedding Couple candid/1/Love, laughter & happily ever #photooftheday #photographers #instagramindia #weddingseason #wed";
const C2 = "wedding Couple candid/2/Drenched in colours of love❣️❣️❣️#instagood #instagramindia #weddingphotographerawards #wedding";
const C3 = "wedding Couple candid/3/Forever yours❤️❤️❤️.....#photooftheday #weddingphotographerawards #weddingideas #weddingportrai";
const BR = "Bridel Shoot/Best. Day. Ever..#wedding#wedmegood#bride #bride #viralpost #wedding #weddingday #photoofthed";
const EN = "Engagement photo/We said ‘Yes’ to a future together….♥️📸 - @rajustudioproductions_ ......💍#engagement #imperial";

export const photos: Photo[] = [
  // Pastel garden wedding — wedding Couple candid/1
  photo("pastel-garden-wedding", 1, "webp", 1440, 1800, "A grid of portraits from the pastel garden wedding: the couple together, the groom in ivory, the bride’s mehendi and her veil on the stone steps.", `${C1} (1).webp`, { layout: true }),
  photo("pastel-garden-wedding", 2, "webp", 1440, 1800, "The groom in a sage shawl and white safa holds the bride close; she wears a pink lehenga and smiles toward the camera beneath tall trees.", `${C1} (2).webp`, { focus: "50% 35%" }),
  photo("pastel-garden-wedding", 3, "webp", 1440, 1800, "On a mossy stone step, the groom kneels and offers his hand to the bride as she steps down in her pink lehenga.", `${C1} (3).webp`, { focus: "55% 60%" }),
  photo("pastel-garden-wedding", 4, "webp", 1440, 1800, "The couple touch foreheads on a garden path, eyes closed, with their names lettered in gold across the frame.", `${C1} (4).webp`, { layout: true }),
  photo("pastel-garden-wedding", 5, "webp", 1440, 1800, "The bride sits alone on stone garden steps, her pink veil spread around her, beneath a line of text about elegance and grace.", `${C1}.webp`, { layout: true }),

  // Crimson garden wedding — wedding Couple candid/2
  photo("crimson-garden-wedding", 1, "webp", 1440, 1800, "In a green garden, the groom in white cups the bride’s face as she leans into him in a red lehenga, under the word “Beloved”.", `${C2} (1).webp`, { layout: true }),
  photo("crimson-garden-wedding", 2, "webp", 1440, 1800, "A collage of the bride in red: seated in the grass, holding a rose to her face, and lifting her kaleere, with short handwritten captions.", `${C2} (2).webp`, { layout: true }),
  photo("crimson-garden-wedding", 3, "webp", 1440, 1800, "The bride in profile among palm fronds, a gold maang tikka and nath catching the light, her red dupatta falling over one shoulder.", `${C2} (3).webp`, { focus: "45% 40%" }),
  photo("crimson-garden-wedding", 4, "webp", 1440, 1800, "Framed by leaves, the groom kisses the bride’s forehead as she closes her eyes and smiles, her chooda and mehendi visible.", `${C2} (4).webp`, { focus: "50% 40%" }),
  photo("crimson-garden-wedding", 5, "webp", 1440, 1800, "The bride stands in a sunlit garden holding her red veil above her head, the kaleere swinging from her wrists.", `${C2}.webp`, { layout: true }),

  // Varmala in colour — wedding Couple candid/3
  photo("varmala-in-colour", 1, "webp", 1170, 1463, "Wearing rose and note garlands, the groom kisses the bride’s head in front of a pampas-grass backdrop, with their names in script.", `${C3} (1).webp`, { layout: true }),
  photo("varmala-in-colour", 2, "webp", 1170, 1463, "Two frames: the bride laughs on a pink velvet sofa beside the groom, then flings her arms wide in celebration.", `${C3} (2).webp`, { layout: true }),
  photo("varmala-in-colour", 3, "webp", 1170, 1463, "The couple share a laugh in their varmala garlands, the groom holding a bouquet of red roses, set inside a white border.", `${C3} (3).webp`, { layout: true }),
  photo("varmala-in-colour", 4, "webp", 1170, 1463, "Pink colour smoke drifts over a pampas and white-flower stage as the bride, in pink, bows to touch the groom’s feet and he smiles down.", `${C3} (4).webp`, { focus: "50% 58%" }),
  photo("varmala-in-colour", 5, "webp", 1170, 1463, "Two frames of the couple in garlands at a floral arch, the second veiled in soft violet smoke as they turn to each other.", `${C3} (5).webp`, { layout: true }),
  photo("varmala-in-colour", 6, "webp", 1170, 1463, "From a low angle against a pale sky, the groom wraps his arm around the bride in her garlands while a fire burns in the foreground.", `${C3}.webp`, { focus: "50% 40%" }),

  // Bride in red — Bridel Shoot
  photo("bride-in-red", 1, "webp", 1170, 1463, "The bride laughs at the top of a staircase in a red lehenga, the banister wound with marigolds, above the word “Dulhaniya” in Devanagari.", `${BR} (1).webp`, { layout: true }),
  photo("bride-in-red", 2, "webp", 1170, 1463, "On the staircase the bride lifts her sheer red veil with both hands, under the word “Vivah” in Devanagari.", `${BR} (2).webp`, { layout: true }),
  photo("bride-in-red", 3, "webp", 1170, 1463, "A close portrait of the bride smiling softly, in a gold choker, nath and maang tikka, with warm lights glowing behind her.", `${BR} (3).webp`, { focus: "50% 38%", trim: "1170 / 1255" }),
  photo("bride-in-red", 4, "webp", 1170, 1463, "Two frames of the bride seated with her lehenga spread around her, mirrored in a polished floor, on a page with painted pink flowers.", `${BR} (4).webp`, { layout: true }),
  photo("bride-in-red", 5, "webp", 1170, 1463, "Holding the marigold-wrapped banister, the bride glances down as she descends the stairs in red, her name lettered above.", `${BR}.webp`, { layout: true }),

  // Garden engagement — Engagement photo
  photo("garden-engagement", 1, "jpg", 1440, 1795, "The couple embrace beside a pond under an arched wooden bridge, their reflection mirrored in the still water.", `${EN} (1).jpg.jpeg`, { focus: "50% 45%" }),
  photo("garden-engagement", 2, "jpg", 1440, 1795, "A collage from the engagement: a high five, a proposal on one knee, a walk on the garden bridge and a twirl in a silver-blue lehenga.", `${EN} (2).jpg.jpeg`, { layout: true }),
  photo("garden-engagement", 3, "jpg", 1440, 1795, "Under an arch of leaves, he kneels in a pale suit to slip a ring on her finger as she looks down, smiling, in a silver-blue lehenga.", `${EN} (3).jpg.jpeg`, { focus: "50% 72%" }),
  photo("garden-engagement", 4, "jpg", 1440, 1795, "She twirls through the garden in her silver-blue lehenga, hair flying, glancing back over her shoulder.", `${EN} (4).jpg.jpeg`, { focus: "45% 60%" }),
  photo("garden-engagement", 5, "jpg", 1440, 1795, "Two frames: the couple hold hands on an arched garden bridge among tall trees, then laugh together at its railing.", `${EN}.jpg.jpeg`, { layout: true }),
];

const byId = new Map(photos.map((p) => [p.id, p]));

export function getPhoto(id: string): Photo {
  const p = byId.get(id);
  if (!p) throw new Error(`Unknown photo id: ${id}`);
  return p;
}

// Galleries keep each supplied shoot together. Names that appear inside the
// images are not verified, so titles describe the work instead.
export const galleries: Gallery[] = [
  {
    slug: "varmala-in-colour",
    title: "Garlands, Colour & Fire",
    category: "wedding",
    categoryLabel: "Wedding",
    summary: "A varmala among pampas grass and drifting colour smoke.",
    intro:
      "Pampas grass, white flowers and a drift of pink smoke frame the varmala. The day moves from blessings and laughter to a quiet portrait under an open sky.",
    cover: "varmala-in-colour-06",
    rows: [
      { kind: "feature", photo: "varmala-in-colour-04", note: "The varmala, in a haze of pink." },
      { kind: "pair", photos: ["varmala-in-colour-03", "varmala-in-colour-06"] },
      { kind: "pair", photos: ["varmala-in-colour-05", "varmala-in-colour-02"] },
      { kind: "feature", photo: "varmala-in-colour-01" },
    ],
  },
  {
    slug: "pastel-garden-wedding",
    title: "A Pastel Wedding Beneath the Trees",
    category: "wedding",
    categoryLabel: "Wedding",
    summary: "Blush pink and sage, on old stone steps under tall trees.",
    intro:
      "Blush pink and soft sage among stone steps and tall trees. These are unhurried couple portraits, warm and close, made in the stillness between the rituals.",
    cover: "pastel-garden-wedding-02",
    rows: [
      { kind: "feature", photo: "pastel-garden-wedding-02", note: "Love, laughter and happily ever after." },
      { kind: "pair", photos: ["pastel-garden-wedding-03", "pastel-garden-wedding-04"] },
      { kind: "pair", photos: ["pastel-garden-wedding-05", "pastel-garden-wedding-01"] },
    ],
  },
  {
    slug: "crimson-garden-wedding",
    title: "Drenched in Colours of Love",
    category: "wedding",
    categoryLabel: "Wedding",
    summary: "A bride in deep red, with roses, palms and sunlight.",
    intro:
      "A bride in deep crimson, a groom in white, and a garden full of light. Tender moments between the couple sit beside portraits of the bride in her finery.",
    cover: "crimson-garden-wedding-04",
    rows: [
      { kind: "feature", photo: "crimson-garden-wedding-04", note: "A forehead kiss among the leaves." },
      { kind: "pair", photos: ["crimson-garden-wedding-03", "crimson-garden-wedding-05"] },
      { kind: "pair", photos: ["crimson-garden-wedding-01", "crimson-garden-wedding-02"] },
    ],
  },
  {
    slug: "bride-in-red",
    title: "A Bride in Red",
    category: "bridal",
    categoryLabel: "Bridal",
    summary: "Marigold banisters, warm light and a bride’s quiet joy.",
    intro:
      "A bridal session on a marigold-wound staircase. Red and gold, warm light, and the bride’s own laughter on the morning of her wedding.",
    cover: "bride-in-red-03",
    rows: [
      { kind: "feature", photo: "bride-in-red-03", note: "Best. Day. Ever." },
      { kind: "pair", photos: ["bride-in-red-01", "bride-in-red-02"] },
      { kind: "pair", photos: ["bride-in-red-05", "bride-in-red-04"] },
    ],
  },
  {
    slug: "garden-engagement",
    title: "We Said Yes",
    category: "engagement",
    categoryLabel: "Engagement",
    summary: "A proposal, a twirl and a walk across the garden bridge.",
    intro:
      "A proposal on one knee, a twirl through the flowerbeds, and a slow walk across an old garden bridge. One step closer to forever.",
    cover: "garden-engagement-03",
    film: "one-step-closer-to-forever",
    rows: [
      { kind: "feature", photo: "garden-engagement-03", note: "The question, and the answer." },
      { kind: "pair", photos: ["garden-engagement-04", "garden-engagement-01"] },
      { kind: "pair", photos: ["garden-engagement-05", "garden-engagement-02"] },
    ],
  },
];

export function getGallery(slug: string) {
  return galleries.find((g) => g.slug === slug);
}

const reel = (slug: string) => ({
  src: `/media/films/${slug}.mp4`,
  poster: `/media/posters/${slug}.jpg`,
});

const vertical = { width: 720, height: 1280, aspect: "9 / 16" } as const;

export const films: Film[] = [
  {
    slug: "some-memories-wedding-teaser",
    title: "Some Memories Are Too Beautiful",
    category: "teaser",
    description:
      "A cinematic wedding teaser: haldi colour, a shower of rose petals, and a brother’s words for his sister.",
    ...reel("some-memories-wedding-teaser"),
    width: 1276,
    height: 718,
    aspect: "16 / 9",
    duration: 214,
    poster: {
      src: reel("some-memories-wedding-teaser").poster,
      width: 1276,
      height: 718,
      alt: "Rose petals fall over the groom in white and the bride in pink beneath a pink floral mandap.",
    },
    original: "Coming Soon/Some memories are too beautiful to be left in the past🩷🌸Hearing my brother speak for me that d.mp4",
  },
  {
    slug: "stepping-into-a-new-world",
    title: "Stepping Into a New World",
    category: "wedding",
    description: "A Kumauni wedding reel: the bride’s smile, her family, and the first steps of a new life.",
    ...reel("stepping-into-a-new-world"),
    ...vertical,
    duration: 23,
    poster: { src: reel("stepping-into-a-new-world").poster, width: 720, height: 1280, alt: "The bride smiles from beneath an orange dupatta, dressed in red with mehendi on her hands." },
    original: "Wedding Reels/Stepping into a new world..❣️❣️❣️.#reelkarofeelkaro #kumauniwedding #reelsinstagram #kumauniwedd.mp4",
  },
  {
    slug: "do-dil-ek-kahani",
    title: "Do Dil, Ek Kahani",
    category: "wedding",
    description: "Two hearts, one story — a Kumauni wedding set to a Kumauni song.",
    ...reel("do-dil-ek-kahani"),
    ...vertical,
    duration: 25,
    poster: { src: reel("do-dil-ek-kahani").poster, width: 720, height: 1280, alt: "The bride and groom in traditional Kumauni mukut headdresses laugh together under strings of flowers." },
    original: "Wedding Reels/“Do dil, ek kahani… aur hum uske gawah. ❤️{Kumauni wedding, kumaunisonglove, kumaunitremdysong ,.mp4",
  },
  {
    slug: "reception-love",
    title: "Reception Love",
    category: "wedding",
    description: "The evening reception: first dances, close embraces and a lot of laughter.",
    ...reel("reception-love"),
    ...vertical,
    duration: 25,
    poster: { src: reel("reception-love").poster, width: 720, height: 1280, alt: "At the reception, the groom in a black suit draws the bride in pink close for an embrace." },
    original: "Wedding Reels/Reception love❤️❤️❤️....#reelsinstagram #reelkarofeelkaro #reelsindia #reelsvideo #reels #lovefr.mp4",
  },
  {
    slug: "delhi-lanes-to-mountain-frames",
    title: "Delhi Lanes to Mountain Frames",
    category: "wedding",
    description: "A couple from the city, a wedding in the hills, and every glance between them.",
    ...reel("delhi-lanes-to-mountain-frames"),
    ...vertical,
    duration: 25,
    poster: { src: reel("delhi-lanes-to-mountain-frames").poster, width: 720, height: 1280, alt: "Seated on a golden stage, the groom in plum and the bride in a lehenga share a laugh." },
    original: "Wedding Reels/Delhi lanes to Mountain frames❣️❣️❣️..#reelkarofeelkaro #reelitfeelit #reelsindia #trending #del.mp4",
  },
  {
    slug: "haldi-sanskari-bahu",
    title: "Teaching the Bride to Be a Sanskari Bahu",
    category: "wedding",
    description: "Haldi-day mischief, as the bride’s friends take her lessons very seriously.",
    ...reel("haldi-sanskari-bahu"),
    ...vertical,
    duration: 9,
    poster: { src: reel("haldi-sanskari-bahu").poster, width: 720, height: 1280, alt: "At her haldi, the bride in sunglasses and a pink-and-mint outfit grins, surrounded by friends and marigolds." },
    original: "Wedding Reels/Teaching bride how to be a Sanskari bahu😋😋😋#fun #haldifun #shaadiseason❤️ #viralreels #reelka.mp4",
  },
  {
    slug: "loudest-side-of-the-wedding",
    title: "The Loudest Side of the Wedding",
    category: "wedding",
    description: "Friends, cousins and selfies — the guests who made the most noise.",
    ...reel("loudest-side-of-the-wedding"),
    ...vertical,
    duration: 31,
    note: "Filmed sideways — turn your phone for the full frame.",
    poster: { src: reel("loudest-side-of-the-wedding").poster, width: 720, height: 1280, alt: "Shown sideways: two women in festive outfits laugh under a floral arch." },
    original: "Wedding Reels/Officially the loudest side of the wedding 🙂_↔️🤘.[Wedding reel, wedding fun, wedding vlog, fun.mp4",
  },
  {
    slug: "happiness-pre-wedding-film",
    title: "Happiness",
    category: "pre-wedding",
    description: "A pre-wedding film among waterfalls, prayer flags, suspension bridges and fairy-lit evenings.",
    ...reel("happiness-pre-wedding-film"),
    ...vertical,
    aspect: "720 / 324",
    duration: 60,
    poster: { src: reel("happiness-pre-wedding-film").poster, width: 720, height: 324, alt: "Holding hands in front of a waterfall, the couple in white turn to each other and laugh." },
    original: "pre wedding shoot/Happiness ❣️❣️❣️.....#Pre-wedding #viralreels #preweddingphotographer #delhigram #almora #love #.mp4",
  },
  {
    slug: "one-step-closer-to-forever",
    title: "One Step Closer to Forever",
    category: "pre-wedding",
    description: "The engagement film: rings, mehendi-covered hands and a garden full of spring.",
    ...reel("one-step-closer-to-forever"),
    ...vertical,
    duration: 29,
    poster: { src: reel("one-step-closer-to-forever").poster, width: 720, height: 1280, alt: "In a spring garden, he in a pale suit and she in a silver-blue lehenga hold hands and smile." },
    original: "Engagement photo/One step closer to forever❣️❣️❣️Makeup artist @saim_makeup_artist.#ringsofinstagram #reelsinstag.mp4",
  },
  {
    slug: "a-little-name-naming-ceremony",
    title: "A Little Name, a Lifetime of Love",
    category: "family",
    description: "A naming ceremony: grandparents’ blessings, tiny hands and a family full of joy.",
    ...reel("a-little-name-naming-ceremony"),
    ...vertical,
    duration: 43,
    poster: { src: reel("a-little-name-naming-ceremony").poster, width: 720, height: 1280, alt: "A mother with tika on her forehead rests her cheek beside her sleeping newborn." },
    original: "Family Functions reels/A little name, a lifetime of love, and countless beautiful memories ❤️✨#namingceremony♥️ #naamka.mp4",
  },
  {
    slug: "blessed-with-love-naming-ceremony",
    title: "Blessed with Love, Named with Grace",
    category: "family",
    description: "A newborn’s naming day, held close by the women of the family.",
    ...reel("blessed-with-love-naming-ceremony"),
    ...vertical,
    duration: 36,
    poster: { src: reel("blessed-with-love-naming-ceremony").poster, width: 720, height: 1280, alt: "A mother in a red and orange sari cradles her newborn and smiles." },
    original: "Family Functions reels/Blessed with Love, Named with Grace...#reelsinstagram #namingcermony❤️️ #newborn #vibes #namingc.mp4",
  },
  {
    slug: "janeu-sanskar",
    title: "Janeu Sanskar",
    category: "family",
    description: "The sacred thread ceremony, with marigolds, mantras and the whole family gathered close.",
    ...reel("janeu-sanskar"),
    ...vertical,
    duration: 40,
    poster: { src: reel("janeu-sanskar").poster, width: 720, height: 1280, alt: "Garlanded with marigolds, a young boy smiles as elders perform the janeu ceremony." },
    original: "Family Functions reels/जनेऊ संस्कार....Music by @pandavaas_uk#reelkarofeelkaro #reelsvideo #reelitfeelit #reels #love #.mp4",
  },
  {
    slug: "better-together-teaser",
    title: "Better Together",
    category: "teaser",
    description: "A first look at a wedding film still in the edit — coming soon.",
    ...reel("better-together-teaser"),
    ...vertical,
    aspect: "720 / 404",
    duration: 65,
    poster: { src: reel("better-together-teaser").poster, width: 720, height: 404, alt: "Guests gather around the bride and groom in pink and white during the wedding rituals." },
    original: "Coming Soon/Better together......Coming soon..#reelkarofeelkaro #teaservideo #comingsoon‼️ #reelitfeelit #re.mp4",
  },
];

export function getFilm(slug: string): Film {
  const f = films.find((x) => x.slug === slug);
  if (!f) throw new Error(`Unknown film: ${slug}`);
  return f;
}

export const filmSections: { category: FilmCategory; title: string; intro: string }[] = [
  { category: "wedding", title: "Wedding Reels", intro: "Rituals, laughter and the people who made the day." },
  { category: "pre-wedding", title: "Pre-Wedding & Engagement", intro: "Two hearts, one beautiful story — before the big day." },
  { category: "family", title: "Family Functions", intro: "Naming ceremonies and sanskars, documented with care." },
  { category: "teaser", title: "Teasers", intro: "First glimpses of films still to come." },
];

export const portrait = {
  src: "/media/brand/gokul-negi.png",
  width: 1024,
  height: 1536,
  alt: "Gokul Negi, smiling, in a grey blazer and black shirt, standing in a sunlit hallway.",
};

export const logo = {
  src: "/media/brand/raju-studio-logo.png",
  width: 2100,
  height: 1500,
  /** Artwork box inside the transparent margins (plus 20px), used to crop for display. */
  artwork: { x: 373, y: 387, w: 1378, h: 735 },
  alt: "Raju Studio Productions logo: a magenta camera beside blue mountains, with the line “Capturing Memories That Last Forever”.",
};

export const hero = getPhoto("varmala-in-colour-04");

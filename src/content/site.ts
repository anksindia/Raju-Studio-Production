// Verified studio details, adapted from "## ABOUT US.txt".

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");

export const studio = {
  name: "Raju Studio Production",
  photographer: "Gokul Negi",
  role: "Professional Wedding Photographer",
  tagline: "Capturing Moments. Creating Memories.",
  vision: "Turning Your Precious Moments Into Timeless Memories.",
  specialties: ["Wedding Photography", "Cinematic Films", "Pre-Wedding Shoots"],
  location: { locality: "Almora", region: "Uttarakhand", country: "India", display: "Almora, Uttarakhand, India" },
  phones: [
    { display: "+91 97566 59599", tel: "tel:+919756659599", whatsapp: "https://wa.me/919756659599", e164: "+919756659599" },
    { display: "+91 81263 38910", tel: "tel:+918126338910", whatsapp: "https://wa.me/918126338910", e164: "+918126338910" },
  ],
  instagram: { handle: "@rajustudioproductions_", url: "https://www.instagram.com/rajustudioproductions_/" },
} as const;

export const nav = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/films", label: "Films" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
] as const;

export type Service = {
  number: string;
  title: string;
  description: string;
  related?: { href: string; label: string };
};

export const services: Service[] = [
  {
    number: "01",
    title: "Wedding Photography",
    description:
      "Every emotion, ritual and celebration of your day — the laughter, the tears and the little details that make your wedding yours.",
    related: { href: "/portfolio/varmala-in-colour", label: "See a wedding story" },
  },
  {
    number: "02",
    title: "Pre-Wedding Photography",
    description:
      "Creative couple portraits that capture your chemistry and personality, from scenic outdoor locations to cinematic concepts.",
    related: { href: "/films#pre-wedding", label: "Watch the pre-wedding film" },
  },
  {
    number: "03",
    title: "Cinematic Videography",
    description:
      "Wedding films that hold the atmosphere, emotion and detail of your celebration, so you can live it again and again.",
    related: { href: "/films", label: "Watch the films" },
  },
  {
    number: "04",
    title: "Baby & Maternity Photography",
    description:
      "The beauty of motherhood, the excitement of a new arrival and the innocent moments of childhood — memories that grow with you.",
    related: { href: "/films#family", label: "See naming ceremony films" },
  },
  {
    number: "05",
    title: "Event Photography",
    description:
      "Family gatherings, cultural celebrations and special occasions, documented with traditional coverage and candid storytelling.",
    related: { href: "/films#family", label: "See family function films" },
  },
  {
    number: "06",
    title: "Drone Photography",
    description: "Aerial perspectives that add a spectacular dimension to your memories.",
  },
  {
    number: "07",
    title: "Traditional Photography",
    description:
      "Classic coverage of every important moment and ritual, so the people and traditions that matter are all there.",
    related: { href: "/portfolio/bride-in-red", label: "See a bridal session" },
  },
  {
    number: "08",
    title: "Destination Weddings",
    description: "Beautiful celebrations, captured wherever you choose to say yes.",
  },
];

export const shootTypes = [
  "Wedding",
  "Pre-Wedding",
  "Engagement",
  "Cinematic Film",
  "Baby & Maternity",
  "Event / Family Function",
  "Drone",
  "Traditional",
  "Destination Wedding",
  "Something else",
];

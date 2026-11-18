import { SITE_URL, studio } from "@/content/site";

export function StudioJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#studio`,
    name: studio.name,
    slogan: studio.tagline,
    description:
      "Wedding photography and cinematic films in Almora, Uttarakhand, led by professional wedding photographer Gokul Negi.",
    url: SITE_URL,
    image: `${SITE_URL}/og/home.jpg`,
    logo: `${SITE_URL}/media/brand/raju-studio-logo.png`,
    telephone: studio.phones.map((p) => p.e164),
    address: {
      "@type": "PostalAddress",
      addressLocality: studio.location.locality,
      addressRegion: studio.location.region,
      addressCountry: "IN",
    },
    areaServed: [
      { "@type": "City", name: "Almora" },
      { "@type": "State", name: "Uttarakhand" },
    ],
    founder: { "@type": "Person", name: studio.photographer, jobTitle: studio.role },
    sameAs: [studio.instagram.url],
    knowsAbout: ["Wedding photography", "Pre-wedding photography", "Cinematic wedding films"],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\u003c") }}
    />
  );
}

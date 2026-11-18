import type { MetadataRoute } from "next";
import { galleries, getPhoto } from "@/content/media";
import { SITE_URL } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "", priority: 1 },
    { path: "/portfolio", priority: 0.9 },
    { path: "/films", priority: 0.8 },
    { path: "/services", priority: 0.8 },
    { path: "/about", priority: 0.7 },
    { path: "/contact", priority: 0.9 },
  ];
  return [
    ...pages.map(({ path, priority }) => ({
      url: `${SITE_URL}${path}`,
      changeFrequency: "monthly" as const,
      priority,
    })),
    ...galleries.map((g) => ({
      url: `${SITE_URL}/portfolio/${g.slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.7,
      images: [`${SITE_URL}${getPhoto(g.cover).src}`],
    })),
  ];
}

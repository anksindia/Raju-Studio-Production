import type { Metadata } from "next";
import { studio } from "@/content/site";

type PageMeta = {
  title: string;
  description: string;
  path: string;
  /** Path under /public of a 1200×630 image, or a photo with its own size. */
  image: { url: string; width: number; height: number; alt: string };
};

export function pageMetadata({ title, description, path, image }: PageMeta): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: studio.name,
      locale: "en_IN",
      url: path,
      title: `${title} · ${studio.name}`,
      description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} · ${studio.name}`,
      description,
      images: [image.url],
    },
  };
}

export const og = (name: string, alt: string) => ({ url: `/og/${name}.jpg`, width: 1200, height: 630, alt });

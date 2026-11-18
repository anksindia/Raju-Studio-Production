import Image from "next/image";
import type { Photo } from "@/content/media";

/**
 * A still at its natural aspect ratio; intrinsic size reserves the space.
 * With `trimmed`, a post with built-in white margins is cropped (centred) to
 * the photograph inside them — used for cards and covers.
 */
export function Still({
  photo,
  sizes,
  className,
  zoom,
  trimmed,
}: {
  photo: Photo;
  sizes: string;
  className?: string;
  zoom?: boolean;
  trimmed?: boolean;
}) {
  const cls = ["frame", zoom && "zoom", className].filter(Boolean).join(" ");

  if (trimmed && photo.trim) {
    return (
      <div className={cls} style={{ aspectRatio: photo.trim }}>
        <Image src={photo.src} alt={photo.alt} fill sizes={sizes} quality={90} />
      </div>
    );
  }

  return (
    <div className={cls}>
      <Image
        src={photo.src}
        width={photo.width}
        height={photo.height}
        alt={photo.alt}
        sizes={sizes}
        quality={90}
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );
}

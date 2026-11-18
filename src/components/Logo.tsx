import Image from "next/image";
import { logo } from "@/content/media";

/**
 * The supplied logo PNG has wide transparent margins. The file is used as-is;
 * the wrapper crops to the artwork box so the mark displays at a useful size.
 */
export function Logo({ sizes, className }: { sizes: string; className?: string }) {
  const { x, y, w, h } = logo.artwork;
  return (
    <div
      className={["logo-crop", className].filter(Boolean).join(" ")}
      style={{ aspectRatio: `${w} / ${h}`, position: "relative", overflow: "hidden" }}
    >
      <Image
        src={logo.src}
        width={logo.width}
        height={logo.height}
        alt={logo.alt}
        sizes={sizes}
        style={{
          position: "absolute",
          maxWidth: "none",
          width: `${(logo.width / w) * 100}%`,
          height: "auto",
          left: `${(-x / w) * 100}%`,
          top: `${(-y / h) * 100}%`,
        }}
      />
    </div>
  );
}

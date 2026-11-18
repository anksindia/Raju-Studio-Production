import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { StudioJsonLd } from "@/components/JsonLd";
import { SITE_URL, studio } from "@/content/site";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${studio.name} — Wedding Photographer in Almora, Uttarakhand`,
    template: `%s · ${studio.name}`,
  },
  description:
    "Wedding photography, pre-wedding shoots and cinematic films by Gokul Negi of Raju Studio Production, Almora, Uttarakhand.",
  applicationName: studio.name,
  authors: [{ name: studio.photographer }],
  creator: studio.photographer,
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#24211e",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <SiteFooter />
        <StudioJsonLd />
      </body>
    </html>
  );
}

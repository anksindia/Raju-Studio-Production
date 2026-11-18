import Link from "next/link";
import { studio } from "@/content/site";

export function InquiryBand({
  heading = "Your story deserves to be captured.",
  text = "Have a wedding, pre-wedding shoot or special celebration coming up? Let’s turn your beautiful moments into memories that last forever.",
}: {
  heading?: string;
  text?: string;
}) {
  return (
    <section className="inquiry-band section on-dark" aria-labelledby="inquiry-band-title">
      <div className="wrap inquiry-band__inner">
        <p className="eyebrow">Inquire</p>
        <h2 id="inquiry-band-title" className="h2">
          {heading}
        </h2>
        <p>{text}</p>
        <div className="inquiry-band__actions">
          <Link href="/contact#inquire" className="btn btn--light">
            Start an inquiry
          </Link>
          <a href={studio.phones[0].whatsapp} className="btn btn--light" target="_blank" rel="noopener noreferrer">
            WhatsApp {studio.phones[0].display}
          </a>
        </div>
      </div>
    </section>
  );
}

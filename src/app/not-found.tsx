import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-intro">
      <div className="wrap page-intro__inner">
        <p className="eyebrow">Page not found</p>
        <h1 className="display">This moment wasn’t captured.</h1>
        <p className="lede">The page you’re looking for doesn’t exist. Try the portfolio instead.</p>
        <p>
          <Link href="/portfolio" className="btn btn--ghost">
            Explore the Portfolio
          </Link>
        </p>
      </div>
    </section>
  );
}

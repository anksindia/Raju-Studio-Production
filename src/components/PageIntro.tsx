export function PageIntro({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <header className="page-intro">
      <div className="wrap page-intro__inner">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="display">{title}</h1>
        {children ? <div className="lede">{children}</div> : null}
      </div>
    </header>
  );
}

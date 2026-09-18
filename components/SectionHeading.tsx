export function SectionHeading({ eyebrow, title, intro, light = false }: { eyebrow: string; title: string; intro?: string; light?: boolean }) {
  return <div className={`section-heading ${light ? "section-heading-light" : ""}`}><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{intro && <p>{intro}</p>}</div>;
}

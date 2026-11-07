import './SectionTitle.css';

export default function SectionTitle({ eyebrow, title, description, id }) {
  return (
    <header className="section-title">
      {eyebrow && <p className="section-title__eyebrow">{eyebrow}</p>}
      <h2 className="section-title__heading" id={id}>
        {title}
      </h2>
      {description && <p className="section-title__description">{description}</p>}
    </header>
  );
}

import './ProjectImage.css';

// Shows the screenshot when available, otherwise a neutral placeholder.
export default function ProjectImage({ src, title }) {
  if (src) {
    return (
      <img
        src={src}
        alt={`Screenshot of ${title}`}
        className="project-image"
        width="1200"
        height="750"
        loading="lazy"
        decoding="async"
      />
    );
  }

  return (
    <div className="project-image project-image--placeholder" aria-hidden="true">
      <div className="project-image__window">
        <span />
        <span />
        <span />
      </div>
      <span className="project-image__label">{title}</span>
    </div>
  );
}

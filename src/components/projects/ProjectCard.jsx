import Badge from '../common/Badge';
import ProjectImage from './ProjectImage';
import ProjectLinks from './ProjectLinks';
import './ProjectCard.css';

// variant: 'featured' (large, horizontal on desktop) | 'compact' (grid card)
export default function ProjectCard({ project, variant = 'compact' }) {
  const { title, subtitle, description, image, technologies, category, status, github, demo } =
    project;

  return (
    <article className={`project-card project-card--${variant}`}>
      <div className="project-card__media">
        <ProjectImage src={image} title={title} />
      </div>

      <div className="project-card__body">
        <div className="project-card__meta">
          <span className="project-card__category">{category}</span>
          {status && <Badge variant="outline">{status}</Badge>}
        </div>

        <h3 className="project-card__title">{title}</h3>
        {subtitle && <p className="project-card__subtitle">{subtitle}</p>}
        <p className="project-card__description">{description}</p>

        <ul className="project-card__tech" aria-label="Technologies used">
          {technologies.map((tech) => (
            <li key={tech}>
              <Badge variant={variant === 'featured' ? 'accent' : 'default'}>{tech}</Badge>
            </li>
          ))}
        </ul>

        <ProjectLinks title={title} demo={demo} github={github} />
      </div>
    </article>
  );
}

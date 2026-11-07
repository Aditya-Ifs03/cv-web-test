import Badge from '../common/Badge';
import Icon from '../common/Icon';
import './SkillCard.css';

export default function SkillCard({ title, description, icon, skills }) {
  return (
    <article className="skill-card">
      <div className="skill-card__icon">
        <Icon name={icon} size={20} />
      </div>
      <h3 className="skill-card__title">{title}</h3>
      <p className="skill-card__description">{description}</p>
      <ul className="skill-card__list" aria-label={`${title} skills`}>
        {skills.map((skill) => (
          <li key={skill}>
            <Badge>{skill}</Badge>
          </li>
        ))}
      </ul>
    </article>
  );
}

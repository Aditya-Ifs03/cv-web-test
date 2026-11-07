import Badge from '../common/Badge';

export default function TimelineItem({ period, title, organization, type, description }) {
  return (
    <li className="timeline__item">
      <span className="timeline__marker" aria-hidden="true" />
      <p className="timeline__period">{period}</p>
      <div className="timeline__content">
        <div className="timeline__heading">
          <h3 className="timeline__title">{title}</h3>
          {type && <Badge variant="outline">{type}</Badge>}
        </div>
        <p className="timeline__org">{organization}</p>
        {description && <p className="timeline__description">{description}</p>}
      </div>
    </li>
  );
}

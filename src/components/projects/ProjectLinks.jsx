import Button from '../common/Button';

export default function ProjectLinks({ title, demo, github }) {
  if (!demo && !github) return null;
  return (
    <div className="project-links">
      {demo && (
        <Button
          href={demo}
          size="sm"
          icon="arrowUpRight"
          external
          aria-label={`View live demo of ${title} (opens in a new tab)`}
        >
          Live demo
        </Button>
      )}
      {github && (
        <Button
          href={github}
          size="sm"
          variant="secondary"
          icon="github"
          iconPosition="left"
          external
          aria-label={`View source code of ${title} on GitHub (opens in a new tab)`}
        >
          Source
        </Button>
      )}
    </div>
  );
}

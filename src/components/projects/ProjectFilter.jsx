import './ProjectFilter.css';

export default function ProjectFilter({ categories, active, onChange }) {
  return (
    <div className="project-filter" role="group" aria-label="Filter projects by category">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          className="project-filter__btn"
          aria-pressed={active === category}
          onClick={() => onChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

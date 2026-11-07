import { useMemo, useState } from 'react';
import { projects } from '../../data/projects';
import Reveal from '../common/Reveal';
import SectionTitle from '../common/SectionTitle';
import Section from '../layout/Section';
import ProjectCard from './ProjectCard';
import ProjectFilter from './ProjectFilter';
import './Projects.css';

const ALL = 'All';
const featured = projects.filter((p) => p.featured);
const others = projects.filter((p) => !p.featured);
const categories = [ALL, ...new Set(others.map((p) => p.category))];

export default function Projects() {
  const [category, setCategory] = useState(ALL);

  const visible = useMemo(
    () => (category === ALL ? others : others.filter((p) => p.category === category)),
    [category],
  );

  return (
    <Section id="projects" labelledBy="projects-title">
      <Reveal>
        <SectionTitle
          eyebrow="03 — Projects"
          title="Selected work"
          description="Things I've designed and built — from coursework to side projects."
          id="projects-title"
        />
      </Reveal>

      {featured.length > 0 && (
        <ul className="projects__featured">
          {featured.map((project) => (
            <Reveal as="li" key={project.id}>
              <ProjectCard project={project} variant="featured" />
            </Reveal>
          ))}
        </ul>
      )}

      {others.length > 0 && (
        <div className="projects__more">
          <div className="projects__more-header">
            <h3 className="projects__more-title">More projects</h3>
            {categories.length > 2 && (
              <ProjectFilter categories={categories} active={category} onChange={setCategory} />
            )}
          </div>

          <ul className="projects__grid" aria-live="polite">
            {visible.map((project) => (
              <li key={project.id} className="projects__grid-item">
                <ProjectCard project={project} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </Section>
  );
}

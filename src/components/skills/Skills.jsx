import { skillGroups } from '../../data/skills';
import Reveal from '../common/Reveal';
import SectionTitle from '../common/SectionTitle';
import Section from '../layout/Section';
import SkillCard from './SkillCard';
import './Skills.css';

export default function Skills() {
  return (
    <Section id="skills" className="section--alt" labelledBy="skills-title">
      <Reveal>
        <SectionTitle
          eyebrow="02 — Skills"
          title="Technologies I work with"
          description="A toolkit built through coursework, personal projects, and a lot of reading documentation."
          id="skills-title"
        />
      </Reveal>
      <div className="skills__grid">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 60}>
            <SkillCard {...group} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

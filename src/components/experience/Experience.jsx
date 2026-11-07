import { experience } from '../../data/experience';
import Reveal from '../common/Reveal';
import SectionTitle from '../common/SectionTitle';
import Section from '../layout/Section';
import TimelineItem from './TimelineItem';
import './Experience.css';

export default function Experience() {
  return (
    <Section id="experience" className="section--alt" labelledBy="experience-title">
      <Reveal>
        <SectionTitle
          eyebrow="04 — Experience"
          title="Experience & education"
          id="experience-title"
        />
      </Reveal>
      <Reveal as="ol" className="timeline">
        {experience.map(({ id, ...item }) => (
          <TimelineItem key={id} {...item} />
        ))}
      </Reveal>
    </Section>
  );
}

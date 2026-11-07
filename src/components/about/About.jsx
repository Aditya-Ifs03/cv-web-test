import { about, profile } from '../../data/profile';
import Reveal from '../common/Reveal';
import SectionTitle from '../common/SectionTitle';
import Section from '../layout/Section';
import './About.css';

export default function About() {
  return (
    <Section id="about" labelledBy="about-title">
      <div className="about">
        <Reveal className="about__media">
          {profile.photo ? (
            <img
              src={profile.photo}
              alt={`Portrait of ${profile.name}`}
              className="about__photo"
              width="480"
              height="640"
              loading="lazy"
              decoding="async"
            />
          ) : (
            <div className="about__photo about__photo--placeholder" role="img" aria-label="Profile photo placeholder">
              <span aria-hidden="true">{profile.shortName}</span>
            </div>
          )}
        </Reveal>

        <Reveal className="about__body" delay={80}>
          <SectionTitle eyebrow="01 — About" title="A little about me" id="about-title" />
          <div className="about__text">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <dl className="about__facts">
            {about.facts.map(({ label, value }) => (
              <div key={label} className="about__fact">
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}

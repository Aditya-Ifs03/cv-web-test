import { certificates } from '../../data/certificates';
import Icon from '../common/Icon';
import Reveal from '../common/Reveal';
import SectionTitle from '../common/SectionTitle';
import Section from '../layout/Section';
import './Certificates.css';

export default function Certificates() {
  if (!certificates.length) return null;

  return (
    <Section id="certificates" labelledBy="certificates-title">
      <Reveal>
        <SectionTitle eyebrow="05 — Recognition" title="Certificates & achievements" id="certificates-title" />
      </Reveal>
      <Reveal as="ul" className="certificates">
        {certificates.map(({ id, name, issuer, year, url }) => (
          <li key={id} className="certificate">
            <span className="certificate__icon">
              <Icon name="award" size={18} />
            </span>
            <div className="certificate__info">
              <h3 className="certificate__name">{name}</h3>
              <p className="certificate__issuer">
                {issuer} · {year}
              </p>
            </div>
            {url && (
              <a
                href={url}
                className="certificate__link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View credential for ${name} (opens in a new tab)`}
              >
                <Icon name="external" size={16} />
              </a>
            )}
          </li>
        ))}
      </Reveal>
    </Section>
  );
}

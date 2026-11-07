import { profile } from '../../data/profile';
import Button from '../common/Button';
import Reveal from '../common/Reveal';
import SocialLinks from '../common/SocialLinks';
import Section from '../layout/Section';
import CopyEmailButton from './CopyEmailButton';
import './Contact.css';

export default function Contact() {
  return (
    <Section id="contact" labelledBy="contact-title">
      <Reveal className="contact">
        <p className="contact__eyebrow">06 — Contact</p>
        <h2 id="contact-title" className="contact__title">
          Let&apos;s build something together.
        </h2>
        <p className="contact__text">
          Have a project, an internship opportunity, or just want to say hi? My inbox is always
          open — I&apos;ll get back to you as soon as I can.
        </p>

        <a href={`mailto:${profile.email}`} className="contact__email">
          {profile.email}
        </a>

        <div className="contact__actions">
          <Button href={`mailto:${profile.email}`} icon="mail" iconPosition="left">
            Send an email
          </Button>
          <CopyEmailButton email={profile.email} />
        </div>

        <SocialLinks className="contact__socials" />
      </Reveal>
    </Section>
  );
}

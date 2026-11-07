import { profile } from '../../data/profile';
import Button from '../common/Button';
import Icon from '../common/Icon';
import SocialLinks from '../common/SocialLinks';
import Container from '../layout/Container';
import HeroBackground from './HeroBackground';
import './Hero.css';

export default function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <HeroBackground />
      <Container>
        <div className="hero__content">
          {profile.availability && (
            <p className="hero__status">
              <span className="hero__status-dot" aria-hidden="true" />
              {profile.availability}
            </p>
          )}

          <h1 id="hero-title" className="hero__title">
            Hi, I&apos;m {profile.name}.
            <span className="hero__role">{profile.role}</span>
          </h1>

          <p className="hero__tagline">{profile.tagline}</p>

          <div className="hero__actions">
            <Button href="#projects" icon="arrowRight">
              View my projects
            </Button>
            {profile.cvUrl && (
              <Button href={profile.cvUrl} variant="secondary" icon="download" download>
                Download CV
              </Button>
            )}
          </div>

          <div className="hero__meta">
            <SocialLinks />
            <span className="hero__divider" aria-hidden="true" />
            <p className="hero__location">
              <Icon name="mapPin" size={16} />
              {profile.location}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

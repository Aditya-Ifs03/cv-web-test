import { profile } from '../../data/profile';
import SocialLinks from '../common/SocialLinks';
import Container from './Container';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container className="footer__inner">
        <div>
          <p>
            © {year} {profile.name}
          </p>
          <p className="footer__meta">Built with React &amp; Vite</p>
        </div>
        <SocialLinks size={18} />
      </Container>
    </footer>
  );
}

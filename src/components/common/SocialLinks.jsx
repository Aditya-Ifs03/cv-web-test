import { socials } from '../../data/social';
import Icon from './Icon';
import './SocialLinks.css';

export default function SocialLinks({ size = 20, className = '' }) {
  return (
    <ul className={`social-links ${className}`.trim()}>
      {socials.map(({ label, href, icon }) => (
        <li key={label}>
          <a
            href={href}
            className="social-links__link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${label} (opens in a new tab)`}
          >
            <Icon name={icon} size={size} />
          </a>
        </li>
      ))}
    </ul>
  );
}

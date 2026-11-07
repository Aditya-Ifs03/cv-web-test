import { useEffect, useState } from 'react';
import { navLinks } from '../../data/navigation';
import { profile } from '../../data/profile';
import useActiveSection from '../../hooks/useActiveSection';
import useScrolled from '../../hooks/useScrolled';
import useTheme from '../../hooks/useTheme';
import Icon from '../common/Icon';
import Container from './Container';
import './Navbar.css';

const sectionIds = navLinks.map((l) => l.id);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(sectionIds);
  const scrolled = useScrolled();
  const { theme, toggleTheme } = useTheme();

  // Close the mobile menu with Escape and lock page scroll while it's open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  const close = () => setOpen(false);
  const themeLabel = `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`;

  return (
    <header className={`navbar ${scrolled || open ? 'navbar--raised' : ''}`}>
      <Container className="navbar__inner">
        <a href="#top" className="navbar__logo" onClick={close}>
          {profile.name}
        </a>

        <nav aria-label="Primary">
          <ul id="nav-menu" className={`navbar__menu ${open ? 'is-open' : ''}`}>
            {navLinks.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="navbar__link"
                  aria-current={active === id ? 'location' : undefined}
                  onClick={close}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="navbar__actions">
          <button
            type="button"
            className="navbar__icon-btn"
            onClick={toggleTheme}
            aria-label={themeLabel}
            title={themeLabel}
          >
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={18} />
          </button>
          <button
            type="button"
            className="navbar__icon-btn navbar__toggle"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="nav-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            <Icon name={open ? 'close' : 'menu'} size={20} />
          </button>
        </div>
      </Container>
    </header>
  );
}

import { useEffect, useState } from 'react';

// Tracks which section (by id) is currently in the upper part of the viewport.
export default function useActiveSection(ids) {
  const [active, setActive] = useState('');

  useEffect(() => {
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      // A thin band ~35% from the top decides the active section.
      { rootMargin: '-35% 0px -60% 0px' },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

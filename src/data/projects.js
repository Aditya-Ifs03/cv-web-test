import pawcareImage from '../assets/images/pawcare.webp';

// To add a project, append an object to this array.
// - featured: true  → shown large at the top of the Projects section
// - image: import a screenshot from src/assets/images and assign it here;
//          leave null to show a neutral placeholder.
// - demo / github: leave empty ('') to hide the link.
// - status: optional short label, e.g. 'In progress'
// Non-featured projects appear in a filterable grid under "More projects".
export const projects = [
  {
    id: 'pawcare',
    title: 'PawCare',
    subtitle: 'Pet Adoption Web Application',
    description:
      'A web-based platform that allows users to discover pets and submit adoption applications.',
    image: pawcareImage,
    technologies: ['React', 'Vite', 'Node.js', 'Express', 'SQLite'],
    category: 'Web Development',
    github: '',
    demo: 'https://ifs24003-pabwe2026-proyek1-fe.vercel.app',
    featured: true,
    status: '',
  },
];

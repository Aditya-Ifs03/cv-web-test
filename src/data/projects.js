// To add a project, append an object to this array.
// - featured: true  → shown large at the top of the Projects section
// - image: import a screenshot from src/assets/images and assign it here;
//          leave null to show a neutral placeholder.
// - demo / github: leave empty ('') to hide the link.
// - status: optional short label, e.g. 'In progress'
export const projects = [
  {
    id: 'pawcare',
    title: 'PawCare',
    subtitle: 'Pet Adoption Web Application',
    description:
      'A web-based platform that allows users to discover pets and submit adoption applications.',
    image: null,
    technologies: ['React', 'Vite', 'Node.js', 'Express', 'SQLite'],
    category: 'Web Development',
    github: 'https://github.com/[YOUR GITHUB]/pawcare',
    demo: '',
    featured: true,
    status: '',
  },
  {
    id: 'project-two',
    title: '[PROJECT NAME]',
    subtitle: '[One-line summary]',
    description:
      '[Short description — the problem it solves, your role, and the outcome.]',
    image: null,
    technologies: ['Spring Boot', 'Java', 'PostgreSQL'],
    category: 'Backend',
    github: 'https://github.com/[YOUR GITHUB]/[REPO]',
    demo: '',
    featured: true,
    status: 'In progress',
  },
  {
    id: 'project-three',
    title: '[PROJECT NAME]',
    subtitle: '[One-line summary]',
    description: '[Short description of the project.]',
    image: null,
    technologies: ['Svelte', 'TypeScript'],
    category: 'Web Development',
    github: 'https://github.com/[YOUR GITHUB]/[REPO]',
    demo: 'https://[DEMO-URL]',
    featured: false,
    status: '',
  },
  {
    id: 'project-four',
    title: '[PROJECT NAME]',
    subtitle: '[One-line summary]',
    description: '[Short description of the project.]',
    image: null,
    technologies: ['Python', 'scikit-learn'],
    category: 'AI / Data',
    github: 'https://github.com/[YOUR GITHUB]/[REPO]',
    demo: '',
    featured: false,
    status: '',
  },
  {
    id: 'project-five',
    title: '[PROJECT NAME]',
    subtitle: '[One-line summary]',
    description: '[Short description of the project.]',
    image: null,
    technologies: ['Haskell'],
    category: 'Other',
    github: 'https://github.com/[YOUR GITHUB]/[REPO]',
    demo: '',
    featured: false,
    status: '',
  },
];

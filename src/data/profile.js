// Personal information. Replace every [PLACEHOLDER] with your own details.
export const profile = {
  name: '[YOUR NAME]',
  shortName: '[YN]',
  role: 'Informatics Student & Developer',
  tagline:
    'I build modern web applications and explore software engineering, AI, and technology.',
  location: '[YOUR CITY, COUNTRY]',
  email: '[YOUR EMAIL]',
  // Put your CV in /public (e.g. public/cv.pdf) and keep this path in sync.
  cvUrl: '/cv.pdf',
  // Import an image from src/assets/images and assign it here, e.g.
  // import photo from '../assets/images/profile.jpg'; photo: photo
  photo: null,
  availability: 'Open to internships & collaborations',
};

export const about = {
  paragraphs: [
    "I'm an informatics student who enjoys turning ideas into clean, usable software. I care about readable code, thoughtful interfaces, and learning how systems work under the hood.",
    'Right now I focus on full-stack web development while exploring software architecture and applied AI.',
  ],
  facts: [
    { label: 'Education', value: '[DEGREE] in Informatics, [UNIVERSITY NAME]' },
    { label: 'Focus', value: 'Full-stack web development' },
    { label: 'Interests', value: 'Software engineering, AI, functional programming' },
    { label: 'Based in', value: profile.location },
  ],
};

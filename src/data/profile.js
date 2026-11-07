import photo from '../assets/images/profile.webp';

// Personal information shown across the site.
export const profile = {
  name: 'Aditya Putera Keliat',
  shortName: 'AK',
  role: 'Informatics Student & Developer',
  tagline:
    'I build modern web applications and explore software engineering, AI, and technology.',
  location: 'Silaen, Indonesia',
  email: 'adityakeliat1@gmail.com',
  // Put your CV in /public (e.g. public/cv.pdf) and set cvUrl: '/cv.pdf'.
  // Leave empty to hide the "Download CV" button.
  cvUrl: '',
  photo,
  availability: 'Open to internships & collaborations',
};

export const about = {
  paragraphs: [
    "I'm an informatics undergraduate at Institut Teknologi Del who enjoys turning ideas into clean, usable software. I care about readable code, thoughtful interfaces, and learning how systems work under the hood.",
    'Right now I focus on full-stack web development while exploring software architecture and applied AI.',
  ],
  facts: [
    { label: 'Education', value: 'Undergraduate in Informatics, Institut Teknologi Del' },
    { label: 'Focus', value: 'Full-stack web development' },
    { label: 'Interests', value: 'Software engineering, AI, functional programming' },
    { label: 'Based in', value: profile.location },
  ],
};

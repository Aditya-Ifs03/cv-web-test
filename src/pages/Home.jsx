import About from '../components/about/About';
import Certificates from '../components/certificates/Certificates';
import Contact from '../components/contact/Contact';
import Experience from '../components/experience/Experience';
import Hero from '../components/hero/Hero';
import Projects from '../components/projects/Projects';
import Skills from '../components/skills/Skills';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certificates />
      <Contact />
    </>
  );
}

import { Header } from './components/header/Header';
import { Hero } from './components/hero/Hero';
import { About } from './components/about/About';
import { Projects } from './components/projects/Projects';
import { Skills } from './components/skills/Skills';
import { Contact } from './components/contact/Contact';
import { Footer } from './components/Footer';

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

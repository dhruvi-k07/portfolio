import React, { Suspense } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Lazy load the sections
const Hero = React.lazy(() => import('./components/Hero'));
const About = React.lazy(() => import('./components/About'));
const Experience = React.lazy(() => import('./components/Experience'));
const Projects = React.lazy(() => import('./components/Project'));
const Skills = React.lazy(() => import('./components/Skills'));
const Education = React.lazy(() => import('./components/Education'));
const Certificates = React.lazy(() => import('./components/Certificates'));
const Contact = React.lazy(() => import('./components/Contact'));

function App() {
  return (
    <div className="font-sans text-gray-800 bg-gray-100">
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Certificates />
        <Contact />
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;

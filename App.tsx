import React from 'react';
import Header from './src/components/Header';
import Hero from './src/components/Hero';
import About from './src/components/About';
import Skills from './src/components/Skills';
import Projects from './src/components/Projects';
import Certifications from './src/components/Certifications';
import Contact from './src/components/Contact';
import Footer from './src/components/Footer';

const GitHubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
);

const LinkedInIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>
    </svg>
);

const TwitterIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
    </svg>
);

const SocialSidebar: React.FC = () => (
    <div className="hidden md:flex fixed bottom-0 left-12 w-10 flex-col items-center z-10">
        <div className="flex flex-col items-center space-y-6">
            <a href="#" className="text-slate hover:text-green transition-transform hover:-translate-y-1"><GitHubIcon/></a>
            <a href="#" className="text-slate hover:text-green transition-transform hover:-translate-y-1"><LinkedInIcon/></a>
            <a href="#" className="text-slate hover:text-green transition-transform hover:-translate-y-1"><TwitterIcon/></a>
        </div>
        <div className="h-24 w-px bg-slate mt-6"></div>
    </div>
);

const EmailSidebar: React.FC = () => (
    <div className="hidden md:flex fixed bottom-0 right-12 w-10 flex-col items-center z-10">
        <a href="mailto:example@email.com" className="font-mono text-slate hover:text-green tracking-widest transition-transform hover:-translate-y-1" style={{ writingMode: 'vertical-rl' }}>
            example@email.com
        </a>
        <div className="h-24 w-px bg-slate mt-6"></div>
    </div>
);

const App: React.FC = () => {
  return (
    <div className="bg-navy font-sans text-slate leading-relaxed antialiased">
      <Header />
      <SocialSidebar />
      <EmailSidebar />
      <main className="container mx-auto px-6 md:px-10 lg:px-16">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
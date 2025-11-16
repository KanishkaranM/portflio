import React from 'react';
import AnimatedSection from './AnimatedSection';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center text-center md:justify-start md:text-left">
      <div>
        <AnimatedSection>
          <h1 className="text-green font-mono mb-4 text-lg">Hi, my name is</h1>
        </AnimatedSection>
        <AnimatedSection delay={100}>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-lightest-slate">M . Kanishkaran</h2>
        </AnimatedSection>
        <AnimatedSection delay={200}>
          <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate mt-2">Aspiring Cybersecurity Penetration Tester.</h3>
        </AnimatedSection>
        <AnimatedSection delay={300}>
          <p className="mt-6 max-w-xl text-lg mx-auto md:mx-0">
            I'm a cybersecurity student with a passion for Offensive security, cyber security, and building secure applications. Currently, I'm focused on deepening my knowledge in Network security and Web security.
          </p>
        </AnimatedSection>
        <AnimatedSection delay={400}>
          <a href="https://wa.me/+918220405679?text=Hello,%20I%20am%20contacting%20you%20from%20your%20website." target="_blank" rel="noopener noreferrer" title="Share on whatsapp" className="inline-block mt-8 border border-green text-green px-8 py-4 rounded font-mono hover:bg-green-tint transition-colors text-lg">
            Get In Touch
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Hero;
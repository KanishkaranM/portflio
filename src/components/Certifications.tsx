import React from 'react';
import { CERTIFICATIONS } from '../components/constants';
import AnimatedSection from './AnimatedSection';

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24">
      <AnimatedSection>
        <h2 className="text-2xl sm:text-3xl font-bold text-lightest-slate mb-8 font-mono flex items-center">
          <span className="text-green mr-4">04.</span>Certifications
          <span className="flex-grow h-px bg-lightest-navy ml-6"></span>
        </h2>
      </AnimatedSection>
      <div className="max-w-3xl mx-auto">
        {CERTIFICATIONS.map((cert, index) => (
          <AnimatedSection key={cert.name} delay={index * 100}>
            <div className="bg-light-navy p-4 rounded-md shadow-lg mb-4 hover:shadow-xl hover:bg-lightest-navy transition-all duration-300">
              <h3 className="font-bold text-lightest-slate text-lg">{cert.name}</h3>
              <p className="text-slate">{cert.issuer}</p>
              <p className="text-xs text-slate mt-1 font-mono">{cert.date}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
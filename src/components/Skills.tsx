import React from 'react';
import { SKILLS } from '../components/constants';
import AnimatedSection from './AnimatedSection';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24">
      <AnimatedSection>
        <h2 className="text-2xl sm:text-3xl font-bold text-lightest-slate mb-8 font-mono flex items-center">
          <span className="text-green mr-4">02.</span>Skills
          <span className="flex-grow h-px bg-lightest-navy ml-6"></span>
        </h2>
      </AnimatedSection>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {SKILLS.map((skill, index) => (
          <AnimatedSection key={skill.name} delay={index * 100}>
            <div className="bg-light-navy p-4 rounded-lg shadow-lg flex flex-col items-center justify-center text-center h-full hover:translate-y-[-5px] transition-transform duration-300">
              <div className="mb-2">{skill.icon}</div>
              <h3 className="font-mono text-lightest-slate">{skill.name}</h3>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
};

export default Skills;
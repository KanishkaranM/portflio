import React from 'react';
import { PROJECTS } from '../components/constants';
import AnimatedSection from './AnimatedSection';
import type { Project } from '../components/types';


const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const ExternalLinkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );

  const GitHubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
  );
  
  return (
    <div className="bg-light-navy rounded-lg shadow-lg overflow-hidden flex flex-col h-full group hover:-translate-y-2 transition-transform duration-300">
      <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold text-lightest-slate group-hover:text-green transition-colors">{project.title}</h3>
            <div className="flex items-center space-x-4 text-light-slate">
                {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-green"><GitHubIcon /></a>}
                {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="hover:text-green"><ExternalLinkIcon /></a>}
            </div>
        </div>
        <p className="text-slate mb-4 flex-grow">{project.description}</p>
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.map(tag => (
            <span key={tag} className="text-green text-sm font-mono bg-green/10 px-2 py-1 rounded">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24">
      <AnimatedSection>
        <h2 className="text-2xl sm:text-3xl font-bold text-lightest-slate mb-8 font-mono flex items-center">
          <span className="text-green mr-4">03.</span>Projects
          <span className="flex-grow h-px bg-lightest-navy ml-6"></span>
        </h2>
      </AnimatedSection>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project, index) => (
          <AnimatedSection key={project.title} delay={index * 150}>
            <ProjectCard project={project} />
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
};

export default Projects;
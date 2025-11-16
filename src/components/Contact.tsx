import React from 'react';
import AnimatedSection from './AnimatedSection';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 text-center">
      <AnimatedSection>
        <h2 className="text-green font-mono mb-2">05. What's Next?</h2>
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-lightest-slate mb-4">Get In Touch</h3>
        <p className="max-w-xl mx-auto mb-8">
          I'm currently seeking new opportunities and my inbox is always open. Whether you have a question or just want to say hi, I'll do my best to get back to you!
        </p>
        <a 
          href="mailto:kanishkaran.in@gmail.com?subject=Job Opportunity &body=I%20want%20to%20contact%20you" target="_blank" rel="noopener noreferrer" title="Send Email"
          className="inline-block border border-green text-green px-8 py-4 rounded font-mono hover:bg-green-tint transition-colors text-lg"
        >
          Say Hello
        </a>
      </AnimatedSection>
    </section>
  );
};

export default Contact;
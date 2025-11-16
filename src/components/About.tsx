import React from 'react';
import AnimatedSection from './AnimatedSection';
import profile from '../assets/profile.jpeg';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24">
      <AnimatedSection>
        <h2 className="text-2xl sm:text-3xl font-bold text-lightest-slate mb-8 font-mono flex items-center">
          <span className="text-green mr-4">01.</span>About Me
          <span className="flex-grow h-px bg-lightest-navy ml-6"></span>
        </h2>
      </AnimatedSection>
      <div className="grid md:grid-cols-5 gap-12 items-center">
        <div className="md:col-span-3">
          <AnimatedSection delay={100}>
            <p className="mb-4">
             Hello! I'm M. Kanishkaran, a passionate cybersecurity enthusiast currently pursuing B.Voc Software Development at Alagappa University, Karaikudi.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="mb-4">
              I aspire to become a Penetration Tester / Network Security and have skills in Vulnerability Scanning, Reconnaissance & Information Gathering, and security tools such as Kali Linux, Nmap, and Metasploit,OWASP Top 10,OpenVAS,Gobuster.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={300}>
            <p>
              I am seeking an internship or entry-level role where I can apply my skills, gain hands-on experience, and grow in the cybersecurity domain. I enjoy solving TryHackMe CTF challenges and working on security-focused projects to strengthen my practical knowledge.
            </p>
          </AnimatedSection>
        </div>
        <div className="md:col-span-2">
            <AnimatedSection delay={400}>
                <div className="relative group w-full max-w-xs mx-auto md:max-w-sm aspect-square">
                    <div className="absolute -inset-1 bg-gradient-to-r from-green to-light-navy rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                    <div className="relative rounded-full w-full h-full overflow-hidden">
                      <img
                          className="w-full h-full object-cover"
                          src={profile}
                          alt="M . Kanishkaran"
                      />
                    </div>
                </div>
            </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;
import React from 'react';
import type { Skill, Project, Certification } from './types';

// Skill Icons
const ShieldIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.944a11.955 11.955 0 019-2.611 11.955 11.955 0 019 2.611 12.02 12.02 0 00-2.618-12.016z" />
    </svg>
);
const KeyIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 0121 9z" />
    </svg>
);
const LockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
);
const ChartBarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
);
const FireIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7.014A8.003 8.003 0 0121 12c0 3-1.5 7-3.5 9-.429 .429-1.058 .585-1.554.434z" />
    </svg>
);
const CodeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
);
const TerminalSquareIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6.75 7.5l3 3-3 3m4.5 0h3M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);
const CloudIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
    </svg>
);

export const SKILLS: Skill[] = [
    { name: 'Network Security', icon: <ShieldIcon /> },
    { name: 'Penetration Testing (Basic)', icon: <KeyIcon /> },
    { name: 'Vulnerability Scanning', icon: <LockIcon /> },
    { name: 'Reconnaissance & Information Gathering', icon: <ChartBarIcon /> },
    { name: 'Web App Pentesting (OWASP Top 10)', icon: <FireIcon /> },
    { name: 'Python Scripting', icon: <CodeIcon /> },
    { name: 'Linux', icon: <TerminalSquareIcon /> },
    { name: 'Brute Force Attacks', icon: <CloudIcon /> },
];

export const PROJECTS: Project[] = [
  {
    title: ' Landing page',
    description: 'A responsive landing page for a cybersecurity services company, built with HTML, CSS, and JavaScript. Features include service descriptions, client testimonials, and a contact form.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    imageUrl: 'https://neobeautyacademy.com/images/Hero-image.jpg',
    githubUrl: 'https://github.com/KanishkaranM/Neabueady-landing_page.git',
    liveUrl: 'https://neabeauty.netlify.app/',
  },
  {
    title: 'Research Project Ideas on Cyber Security',
    description: 'A network vulnerability scanner developed in Python that checks for open ports, common vulnerabilities (CVEs), and misconfigurations.',
    tags: ['Python', 'Networking', 'Nmap', 'Security'],
    imageUrl: 'https://images.squarespace-cdn.com/content/v1/5f64f92ea72c0b6b11f3747c/1676998793409-VHT8ATZ2MMNBQS4KQTID/Cybersecurity-Defense-Image-Resized.jpg',
    githubUrl: '#',
  },
  {
    title: 'Secure File Encryption Tool',
    description: 'A command-line tool using AES-256 encryption to securely encrypt and decrypt files, ensuring data confidentiality.',
    tags: ['Go', 'Cryptography', 'CLI', 'AES-256'],
    imageUrl: 'https://picsum.photos/seed/encryption/400/300',
    githubUrl: '#',
    liveUrl: '#',
  },
];

export const CERTIFICATIONS: Certification[] = [
    {
        name: 'Introduction to Cybersecurity',
        issuer: 'Cisco',
        date: 'Issued: Sep 2025',
    },
    {
        name: ' Ethical Hacking for Beginners',
        issuer: 'HCL GUVI',
        date: 'Issued: Jun 2025',
    },
    {
        name: 'Vulnerability Scanning with Nmap: Network Scanning',
        issuer: 'Coursera',
        date: 'Issued: Dec 2024',
    },
    {
        name: ' Introduction to Programming Using Python ',
        issuer: 'HCL GUVI',
        date: 'Issued: Mar 2025',
    }
];

import React, { useState, useEffect, useRef } from 'react';

// Icons
const ShieldIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.944a11.955 11.955 0 019-2.611 11.955 11.955 0 019 2.611 12.02 12.02 0 00-2.618-12.016z" />
    </svg>
);

const MenuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
    </svg>
);

const XIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const navLinks = [
  { name: 'About', href: '#about', id: 'about' },
  { name: 'Skills', href: '#skills', id: 'skills' },
  { name: 'Projects', href: '#projects', id: 'projects' },
  { name: 'Certs', href: '#certifications', id: 'certifications' },
  { name: 'Contact', href: '#contact', id: 'contact' },
];

const Header: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const sectionRefs = useRef<{[key: string]: HTMLElement | null}>({});

    useEffect(() => {
        navLinks.forEach(link => {
            sectionRefs.current[link.id] = document.getElementById(link.id);
        });
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);

            let currentSection = '';
            // Offset to trigger highlight when section is more central in the viewport
            const scrollPosition = window.scrollY + window.innerHeight / 2.5;

            for (const id in sectionRefs.current) {
                const section = sectionRefs.current[id];
                if (section && section.offsetTop <= scrollPosition) {
                    currentSection = id;
                }
            }
            setActiveSection(currentSection);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
        return () => { document.body.style.overflow = 'unset'; }
    }, [isMobileMenuOpen]);

    const headerClasses = `
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled ? 'bg-light-navy/80 backdrop-blur-md shadow-glow-green' : 'bg-transparent'}
    `;
    
    const navLinkClasses = (id: string) => `
        transition-colors hover:text-green
        ${activeSection === id ? 'text-green' : 'text-slate'}
    `;

    return (
        <header className={headerClasses}>
            <div className="container mx-auto px-6 md:px-10 lg:px-16">
                <div className="flex items-center justify-between h-20">
                    <a href="#hero" className="transition-transform hover:scale-110" aria-label="Homepage">
                        <ShieldIcon />
                    </a>

                    <nav className="hidden md:flex items-center space-x-6 font-mono">
                        {navLinks.map((link, i) => (
                            <a key={link.id} href={link.href} className={navLinkClasses(link.id)}>
                                <span className="text-green mr-1">0{i + 1}.</span>
                                {link.name}
                            </a>
                        ))}
                         <a href="https://drive.google.com/file/d/1-niz_JXXkokVrg_0q5knwzycKtBh424-/view?usp=drive_link" target="blank" download className="border border-green text-green px-4 py-2 rounded hover:bg-green-tint transition-colors">
                            Resume
                        </a>
                    </nav>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-green p-2 focus:outline-none"
                            aria-label="Toggle menu"
                            aria-expanded={isMobileMenuOpen}
                        >
                            {isMobileMenuOpen ? <XIcon /> : <MenuIcon />}
                        </button>
                    </div>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className="md:hidden animate-fade-in-down absolute top-20 left-0 w-full bg-light-navy/95 backdrop-blur-md shadow-lg border-t border-lightest-navy/20">
                    <nav className="flex flex-col items-center space-y-6 py-8 font-mono text-lg">
                         {navLinks.map((link) => (
                            <a 
                                key={link.id} 
                                href={link.href} 
                                className={navLinkClasses(link.id)}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                         <a href="https://drive.google.com/file/d/1-niz_JXXkokVrg_0q5knwzycKtBh424-/view?usp=drive_link" target="blank" download className="border border-green text-green px-8 py-3 mt-4 rounded hover:bg-green-tint transition-colors">
                            Resume
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;

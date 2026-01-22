import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { title: 'Home', href: '#hero' },
        { title: 'About', href: '#about' },
        { title: 'Services', href: '#services' },
        { title: 'Work', href: '#work' },
        { title: 'Contact', href: '#contact' },
    ];

    return (
        <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`} style={{ height: 'var(--nav-height)', display: 'flex', alignItems: 'center' }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <a href="#" className="logo" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--text-main)' }}>
                    Sakthi<span style={{ color: 'var(--accent-color)' }}>.dev</span>
                </a>

                {/* Desktop Nav */}
                <nav className="desktop-nav" style={{ display: 'none' }}>
                    {/* We will need media queries in CSS to show/hide this, or use inline styles with window width check. 
               For simplicity in this setup, I'll rely on CSS module or global CSS for responsiveness if possible, 
               but since we are using vanilla CSS, I'll add a class 'desktop-menu' and handle it in index.css 
               OR just use inline styles with conditional rendering if we were using a hook.
               To follow the "Vanilla CSS" rule strictly without Tailwind classes (though I used some 'bg-slate' above by habit, I should fix that), 
               I will stick to standard classes defined in index.css.
           */}
                    <ul style={{ display: 'flex', gap: '2rem' }}>
                        {navLinks.map((link) => (
                            <li key={link.title}>
                                <a href={link.href} style={{ color: 'var(--text-secondary)', fontWeight: '500' }}>{link.title}</a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Since I am restricted to Vanilla CSS and avoiding Tailwind unless requested (and I haven't installed Tailwind), 
            I should fix the className usage above. 
            I will rewrite the return to be more "Vanilla CSS" friendly with inline styles or classes I defined.
        */}
            </div>
        </header>
    );
};

// Re-writing the component effectively to fix the classNames issue.
// I will just overwrite it in the next tool call properly or just fix it now.
// Let's fix it now in this same block.

const ValidHeader = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { title: 'Home', href: '#hero' },
        { title: 'About', href: '#about' },
        { title: 'Services', href: '#services' },
        { title: 'Work', href: '#work' },
        { title: 'Contact', href: '#contact' },
    ];

    const headerStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: 'var(--nav-height)',
        display: 'flex',
        alignItems: 'center',
        zIndex: 1000,
        transition: 'background 0.3s ease, box-shadow 0.3s ease',
        background: scrolled ? 'rgba(15, 23, 42, 0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        boxShadow: scrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none'
    };

    const navListStyle = {
        display: 'flex',
        gap: '2rem',
    };

    // Mobile styles would typically need a media query or a hook. 
    // I'll add a simple mobile toggle logic.

    return (
        <header style={headerStyle}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <a href="#" style={{ fontSize: '1.8rem', fontWeight: 'bold', color: 'var(--text-main)' }}>
                    Sakthi<span style={{ color: 'var(--accent-color)' }}>.dev &nbsp; &nbsp; &nbsp; &nbsp; </span>
                </a>

                {/* Mobile Toggle */}
                <div className="mobile-toggle" style={{ cursor: 'pointer', display: 'none' }} onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}
                </div>

                {/* Desktop Nav */}
                <nav className="nav-menu">
                    <ul style={navListStyle}>
                        {navLinks.map((link) => (
                            <li key={link.title}>
                                <a href={link.href} className="nav-link" style={{ color: 'var(--text-main)', opacity: 0.8 }}>{link.title}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            {/* Mobile Menu Overlay can be added later or here */}
        </header>
    );
};

export default ValidHeader;

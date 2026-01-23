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
        background: scrolled || isOpen ? 'rgba(15, 23, 42, 0.95)' : 'transparent',
        backdropFilter: scrolled || isOpen ? 'blur(10px)' : 'none',
        boxShadow: scrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none'
    };

    const navListStyle = {
        display: 'flex',
        gap: '2rem',
        listStyle: 'none'
    };

    const toggleMenu = () => setIsOpen(!isOpen);

    const closeMenu = () => setIsOpen(false);

    return (
        <header style={headerStyle}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <a href="#" style={{ fontSize: '1.8rem', fontWeight: 'bold', color: 'var(--text-main)', display: 'flex', alignItems: 'center' }}>
                    Sakthi<span style={{ color: 'var(--accent-color)' }}>.dev</span>
                </a>

                {/* Mobile Toggle */}
                <div className="mobile-toggle" style={{ cursor: 'pointer', color: 'var(--text-main)' }} onClick={toggleMenu}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </div>

                {/* Desktop Nav */}
                <nav className="nav-menu">
                    <ul style={navListStyle}>
                        {navLinks.map((link) => (
                            <li key={link.title}>
                                <a href={link.href} className="nav-link" style={{ color: 'var(--text-main)', opacity: 0.9, fontWeight: 500 }}>{link.title}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: '100vh' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        style={{
                            position: 'fixed',
                            top: 'var(--nav-height)',
                            left: 0,
                            right: 0,
                            background: 'rgba(13, 17, 23, 0.98)',
                            backdropFilter: 'blur(15px)',
                            zIndex: 999,
                            overflow: 'hidden',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderTop: '1px solid var(--border-color)'
                        }}
                    >
                        <motion.ul
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '2rem',
                                listStyle: 'none',
                                textAlign: 'center',
                                padding: 0
                            }}
                            initial="closed"
                            animate="open"
                            variants={{
                                open: {
                                    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
                                },
                                closed: {
                                    transition: { staggerChildren: 0.05, staggerDirection: -1 }
                                }
                            }}
                        >
                            {navLinks.map((link) => (
                                <motion.li
                                    key={link.title}
                                    variants={{
                                        open: { y: 0, opacity: 1, transition: { y: { stiffness: 1000, velocity: -100 } } },
                                        closed: { y: 50, opacity: 0, transition: { y: { stiffness: 1000 } } }
                                    }}
                                >
                                    <a
                                        href={link.href}
                                        onClick={closeMenu}
                                        style={{
                                            fontSize: '2rem',
                                            fontWeight: '600',
                                            color: 'var(--text-main)',
                                            display: 'block'
                                        }}
                                    >
                                        {link.title}
                                    </a>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;

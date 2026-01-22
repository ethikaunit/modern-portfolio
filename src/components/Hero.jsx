import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const words = ["WebDeveloper", "Photoshop Designer", "Editor", "VLE Operator", "Cyber Security Enthusiast", "Bug Bounty Hunter ", "Freelancer"];

    useEffect(() => {
        const handleType = () => {
            const i = loopNum % words.length;
            const fullText = words[i];

            setText(isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1)
            );

            setTypingSpeed(isDeleting ? 30 : 150);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 1000);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleType, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, typingSpeed]);

    return (
        <section id="hero" className="hero section" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 'var(--nav-height)'
        }}>
            <div className="container">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="terminal-window glass"
                        style={{
                            maxWidth: '800px',
                            width: '100%',
                            background: '#0d1117',
                            border: '1px solid #30363d',
                            borderRadius: '8px',
                            overflow: 'hidden',
                            boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
                        }}
                    >
                        {/* Terminal Header */}
                        <div style={{
                            background: '#161b22',
                            padding: '10px 15px',
                            display: 'flex',
                            gap: '8px',
                            borderBottom: '1px solid #30363d'
                        }}>
                            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }}></div>
                            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }}></div>
                            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }}></div>
                            <div style={{ marginLeft: 'auto', color: '#8b949e', fontSize: '12px', fontFamily: 'var(--font-mono)' }}>bash — sakthi@dev</div>
                        </div>

                        {/* Terminal Body */}
                        <div style={{ padding: '2rem', fontFamily: 'var(--font-mono)', minHeight: '300px' }}>
                            <div style={{ marginBottom: '1rem' }}>
                                <span style={{ color: '#27c93f' }}>sakthi@dev:~$</span> <span style={{ color: '#fff' }}>whoami</span>
                            </div>
                            <div style={{ marginBottom: '1.5rem', color: '#c9d1d9' }}>
                                Sakthivel K R
                            </div>

                            <div style={{ marginBottom: '1rem' }}>
                                <span style={{ color: '#27c93f' }}>sakthi@dev:~$</span> <span style={{ color: '#fff' }}>current_role</span>
                            </div>
                            <div style={{ marginBottom: '1.5rem', color: '#58a6ff' }}>
                                <span style={{ fontWeight: 600 }}>{text}</span>
                                <span className="cursor" style={{ animation: 'blink 1s infinite' }}>|</span>
                            </div>

                            <div style={{ marginTop: '2rem' }}>
                                <span style={{ color: '#27c93f' }}>sakthi@dev:~$</span> <span className="cursor-active" style={{ background: '#c9d1d9', width: '10px', height: '1.2em', display: 'inline-block', verticalAlign: 'middle' }}></span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        style={{ marginTop: '3rem', textAlign: 'center' }}
                    >
                        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', marginTop: '0px' }}>Building Digital Experiences</h1>
                        <p style={{ color: '#8b949e', maxWidth: '600px', margin: '0 auto 2rem' }}>
                            Frontend Developer specializing in React.js. Creating clean, efficient, and responsive web applications.
                        </p>
                        <a href="#about" className="btn btn-primary">Init Profile</a>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;

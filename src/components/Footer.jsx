import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{ background: '#0f172a', padding: '2rem 0', marginTop: '4rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
                    <a href="https://www.linkedin.com/in/sakthi-vel-1b394a268" target="_blank" rel="noreferrer">
                        <div className="social-icon" style={{ padding: '10px', background: 'rgba(255,255,255,0.05)', borderRadius: '50%', cursor: 'pointer' }}>
                            <Linkedin size={20} color="#fff" />
                        </div>
                    </a>
                    <a href="https://github.com/ethikaunit" target="_blank" rel="noreferrer">
                        <div className="social-icon" style={{ padding: '10px', background: 'rgba(255,255,255,0.05)', borderRadius: '50%', cursor: 'pointer' }}>
                            <Github size={20} color="#fff" />
                        </div>
                    </a>
                    <a href="https://twitter.com/EthikaUnit" target="_blank" rel="noreferrer">
                        <div className="social-icon" style={{ padding: '10px', background: 'rgba(255,255,255,0.05)', borderRadius: '50%', cursor: 'pointer' }}>
                            <Twitter size={20} color="#fff" />
                        </div>
                    </a>
                    <a href="mailto:sathi2000vel@gmail.com">
                        <div className="social-icon" style={{ padding: '10px', background: 'rgba(255,255,255,0.05)', borderRadius: '50%', cursor: 'pointer' }}>
                            <Mail size={20} color="#fff" />
                        </div>
                    </a>
                </div>
                <p className="copyright" style={{ color: '#94a3b8' }}>
                    &copy; Copyright <strong>Sakthi.dev</strong>. All Rights Reserved
                </p>
            </div>
        </footer>
    );
};

export default Footer;

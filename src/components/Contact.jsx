import React from 'react';
import { MapPin, Phone, Mail, Linkedin, Github, Twitter } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="section" style={{
            background: 'url(/assets/img/overlay-bg.jpg) fixed center center/cover',
            position: 'relative',
            paddingBottom: '3rem'
        }}>
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'rgba(15, 23, 42, 0.8)'
            }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div className="glass" style={{ padding: '3rem' }}>
                    <div className="row" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>

                        <div className="contact-form">
                            <h5 className="title-left" style={{ fontSize: '2rem', marginBottom: '2rem', position: 'relative' }}>
                                Send Message
                                <span style={{ content: '', position: 'absolute', left: 0, bottom: -10, width: '40px', height: '3px', background: 'var(--accent-color)' }}></span>
                            </h5>

                            <form>
                                <div style={{ marginBottom: '1.5rem' }}>
                                    <input type="text" placeholder="Your Name" style={{ position: 'relative', width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', borderRadius: '5px' }} />
                                </div>
                                <div style={{ marginBottom: '1.5rem' }}>
                                    <input type="email" placeholder="Your Email" style={{ position: 'relative', width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', borderRadius: '5px' }} />
                                </div>
                                <div style={{ marginBottom: '1.5rem' }}>
                                    <input type="text" placeholder="Subject" style={{ position: 'relative', width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', borderRadius: '5px' }} />
                                </div>
                                <div style={{ marginBottom: '1.5rem' }}>
                                    <textarea placeholder="Message" rows="5" style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', borderRadius: '5px' }}></textarea>
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <button type="submit" className="btn btn-primary">Send Message</button>
                                </div>
                            </form>
                        </div>

                        <div className="contact-info">
                            <h5 className="title-left" style={{ fontSize: '2rem', marginBottom: '2rem', position: 'relative' }}>
                                Get in Touch
                                <span style={{ content: '', position: 'absolute', left: 0, bottom: -10, width: '40px', height: '3px', background: 'var(--accent-color)' }}></span>
                            </h5>
                            <p style={{ color: '#94a3b8', lineHeight: '1.8', marginBottom: '2rem' }}>
                                Let's Connect! I'm eager to hear from you and explore opportunities for collaboration. Whether you have a project in mind, a question to ask, or just want to say hello, don't hesitate to reach out.
                            </p>

                            <ul style={{ marginBottom: '2rem' }}>
                                <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', color: '#94a3b8' }}>
                                    <MapPin style={{ marginRight: '1rem', color: 'var(--accent-color)' }} />
                                    Sozhanoor, L.Endathur,Uthiramerur , Tamil Nadu 603406
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', color: '#94a3b8' }}>
                                    <Phone style={{ marginRight: '1rem', color: 'var(--accent-color)' }} />
                                    (+91) 9363509182
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', color: '#94a3b8' }}>
                                    <Mail style={{ marginRight: '1rem', color: 'var(--accent-color)' }} />
                                    sathi2000vel@gmail.com
                                </li>
                            </ul>

                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <a href="https://www.linkedin.com/in/sakthi-vel-1b394a268" target="_blank" rel="noreferrer" className="glass" style={{ padding: '0.8rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Linkedin size={20} />
                                </a>
                                <a href="https://github.com/ethikaunit" target="_blank" rel="noreferrer" className="glass" style={{ padding: '0.8rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Github size={20} />
                                </a>
                                <a href="https://twitter.com/EthikaUnit" target="_blank" rel="noreferrer" className="glass" style={{ padding: '0.8rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Twitter size={20} />
                                </a>
                                <a href="mailto:sathi2000vel@gmail.com" className="glass" style={{ padding: '0.8rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Mail size={20} />
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

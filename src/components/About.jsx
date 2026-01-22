import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    const skills = [
        { name: 'React JS' },
        { name: 'Bootstrap' },
        { name: 'Tailwind' },
        { name: 'Javascript' },
        { name: 'ES6' },
        { name: 'Python' },
        { name: 'PHP' },
        { name: 'Figma' },
        { name: 'Git' }
    ];

    return (
        <section id="about" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Background Decor */}
            <div style={{ position: 'absolute', top: '10%', left: '-10%', width: '400px', height: '400px', background: '#58a6ff', filter: 'blur(150px)', opacity: 0.1, borderRadius: '50%' }}></div>
            <div style={{ position: 'absolute', bottom: '10%', right: '-10%', width: '400px', height: '400px', background: '#a371f7', filter: 'blur(150px)', opacity: 0.1, borderRadius: '50%' }}></div>

            <div className="container ">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center', marginTop: '-4rem' }}>

                    {/* Left Column: Profile Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="floating"
                        style={{ display: 'flex', justifyContent: 'center' }}
                    >
                        <div className="card-web3" style={{ padding: '2rem', width: '100%', maxWidth: '350px', textAlign: 'center', marginTop: '1rem' }}>
                            <div style={{ position: 'relative', width: '150px', height: '150px', margin: '0 auto 1.5rem' }}>
                                <div className="profile-glow-ring"></div>
                                <img
                                    src="/assets/img/hero.png"
                                    alt="Profile"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%', border: '4px solid rgba(255,255,255,0.1)', position: 'relative', zIndex: 1 }}
                                />
                                <div style={{ position: 'absolute', bottom: '10px', right: '10px', width: '20px', height: '20px', background: '#2ea043', borderRadius: '50%', border: '3px solid #161b22', zIndex: 2 }} title="Online"></div>
                            </div>

                            <h3 className="text-gradient" style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>Sakthivel K R</h3>
                            <p style={{ color: '#8b949e', marginBottom: '1.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}>
                                &lt;React_Developer /&gt;
                            </p>

                            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem' }}>
                                <div>
                                    <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff' }}>10+</div>
                                    <div style={{ fontSize: '0.8rem', color: '#8b949e' }}>Projects</div>
                                </div>
                                <div>
                                    <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff' }}>2+</div>
                                    <div style={{ fontSize: '0.8rem', color: '#8b949e' }}>Years Exp</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Bio & Skills */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="title" style={{ textAlign: 'left', marginBottom: '2rem' }}>&nbsp;</h2>

                        <div className="card-web3" style={{ padding: '2rem', marginBottom: '2rem' }}>
                            <p style={{ color: '#c9d1d9', lineHeight: '1.8', marginBottom: '1rem' }}>
                                Hello! I'm <span className="text-gradient" style={{ fontWeight: 600 }}>Sakthivel</span>. I specialize in building next-generation web applications. My mission is to bridge the gap between design and technology using modern tools like React and Framer Motion.
                            </p>
                            <p style={{ color: '#8b949e', fontSize: '0.95rem' }}>
                                Hash: <span style={{ fontFamily: 'var(--font-mono)', color: '#58a6ff' }}>0x7A...3F9e</span> (Verified Developer)
                            </p>
                        </div>

                        <div className="skills">
                            <h4 style={{ marginBottom: '1.5rem', fontFamily: 'var(--font-mono)', color: '#fff' }}>Skillset</h4>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                                {skills.map(skill => (
                                    <motion.div
                                        key={skill.name}
                                        whileHover={{ scale: 1.05, backgroundColor: 'rgba(88, 166, 255, 0.2)', borderColor: '#58a6ff' }}
                                        whileTap={{ scale: 0.95 }}
                                        style={{
                                            padding: '0.6rem 1.2rem',
                                            background: 'rgba(22, 27, 34, 0.6)',
                                            border: '1px solid var(--border-color)',
                                            borderRadius: '100px',
                                            color: '#c9d1d9',
                                            fontFamily: 'var(--font-mono)',
                                            fontSize: '0.9rem',
                                            cursor: 'default',
                                            transition: 'all 0.2s ease',
                                            boxShadow: '0 0 15px rgba(0,0,0,0.2)'
                                        }}
                                    >
                                        {skill.name}
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div style={{ marginTop: '2rem' }}>
                            <a href="#contact" className="btn btn-primary" style={{ marginRight: '1rem' }}>Connect Wallet</a>
                            <a href="https://drive.google.com/file/d/1kRJaPQss5ZkSBKezrpReUJPhK5Cza4UT/" className="btn btn-outline" download>Download CV</a>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;

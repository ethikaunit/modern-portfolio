import React from 'react';
import { PlusCircle, ExternalLink, Code2 } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'E-Aadhar Password Cracker',
            category: 'Python',
            date: '2025',
            link: 'https://github.com/ethikaunit/E-Aadhar_password_cracker'
        },
        {
            title: 'E-Pan Password Cracker',
            category: 'Python',
            date: '2025',
            link: 'https://github.com/ethikaunit/E-Pan_password_cracker'
        },
        {
            title: 'Google-keep clone',
            category: 'React',
            date: '2024',
            link: 'https://github.com/ethikaunit/Keep-Notes'
        },
        {
            title: 'To-do List',
            category: 'React',
            date: '2024',
            link: 'https://github.com/ethikaunit/Todo-List'
        },

        {
            title: 'Memory Game',
            category: 'React',
            date: '2024',
            link: 'https://github.com/ethikaunit/React-MemoryGame'
        },
        {
            title: 'Sketch Board',
            category: 'Vanilla JS',
            date: '2023',
            link: 'https://github.com/ethikaunit/DrawingBoard'
        },

    ];

    return (
        <section id="work" className="section">
            <div className="container">
                <div className="title">Portfolio</div>
                <p style={{ textAlign: 'center', color: '#8b949e', marginTop: '-2rem', marginBottom: '4rem', fontFamily: 'var(--font-mono)' }}>
          // selected_projects.json
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {projects.map((project, index) => (
                        <div key={index} className="glass project-card" style={{ overflow: 'hidden', border: '1px solid var(--border-color)' }}>
                            <div
                                className="img-box"
                                style={{
                                    height: '10px',
                                    overflow: 'hidden',
                                    position: 'relative',
                                    borderBottom: '1px solid var(--border-color)'
                                }}
                            >

                            </div>
                            <div style={{ padding: '1.5rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                                    <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#c9d1d9' }}>{project.title}</h3>
                                    <Code2 size={20} color="var(--accent-color)" />
                                </div>

                                <div className="code-block" style={{ fontSize: '0.8rem', color: '#8b949e', padding: '0.8rem' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <span>stack:</span>
                                        <span style={{ color: 'var(--accent-pink)' }}>"{project.category}"</span>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <span>year:</span>
                                        <span style={{ color: 'var(--accent-color)' }}>{project.date}</span>
                                    </div>
                                </div>

                                <a href={project.link} target="_blank" rel="noreferrer" className="btn btn-primary" style={{ marginTop: '1rem', width: '100%', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                                    <ExternalLink size={16} /> View Source
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

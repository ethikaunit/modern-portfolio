import React from 'react';
import { Layout, Code, FileText, Edit, Palette, Lightbulb } from 'lucide-react';

const Services = () => {
    const services = [
        {
            title: 'Web Design',
            desc: 'Expertise in web design with a keen focus on UI/UX to create visually appealing and user-friendly websites.',
            icon: <Layout size={40} />
        },
        {
            title: 'Web Development',
            desc: 'Creating responsive and visually engaging websites using both front-end and back-end excellence.',
            icon: <Code size={40} />
        },
        {
            title: 'Content Writing',
            desc: 'Crafting exceptional content driven by human creativity and AI-assisted precision.',
            icon: <FileText size={40} />
        },
        {
            title: 'Editing',
            desc: 'Refining content with a foundation of basic editing skills and attention to detail.',
            icon: <Edit size={40} />
        },
        {
            title: 'Graphic Design',
            desc: 'Visual storytelling through aesthetics, imagination, and design principles.',
            icon: <Palette size={40} />
        },
        {
            title: 'Motivator & Adviser',
            desc: 'Guiding individuals towards their fullest potential and igniting inspiration.',
            icon: <Lightbulb size={40} />
        }
    ];

    return (
        <section id="services" className="section">
            <div className="container">
                <div className="title">Services</div>
                <p style={{ textAlign: 'center', color: '#94a3b8', marginTop: '-2rem', marginBottom: '4rem' }}>
                    I am capable of offering the following services.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {services.map((service, index) => (
                        <div key={index} className="glass service-card" style={{ padding: '2.5rem', textAlign: 'center', transition: 'transform 0.3s ease' }}>
                            <div
                                className="icon-circle"
                                style={{
                                    width: '80px',
                                    height: '80px',
                                    borderRadius: '50%',
                                    background: 'rgba(56, 189, 248, 0.1)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    margin: '0 auto 1.5rem',
                                    color: 'var(--accent-color)'
                                }}
                            >
                                {service.icon}
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{service.title}</h3>
                            <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;

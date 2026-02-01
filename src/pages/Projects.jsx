import React from 'react';
import { motion } from 'framer-motion';
import styles from './Projects.module.scss';

const projectsData = [
    { id: 1, title: 'Entellus', category: 'Web Design', color: '#4CAF50' },
    { id: 2, title: 'Outlast', category: 'App Development', color: '#2196F3' },
    { id: 3, title: 'Tulum', category: 'Branding', color: '#FF9800' },
    { id: 4, title: 'Revive', category: 'E-commerce', color: '#E91E63' },
    { id: 5, title: 'Apex', category: 'Marketing', color: '#9C27B0' },
    { id: 6, title: 'Horizon', category: 'Web Design', color: '#00BCD4' },
];

const Projects = () => {
    return (
        <div className={styles.projectsContainer}>
            <section className={styles.pageHeader}>
                <div className={styles.overlay}></div>
                <div className={styles.content}>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Our Projects
                    </motion.h1>
                    <p>Explore our recent work and success stories.</p>
                </div>
            </section>

            <section className={styles.projectsGrid}>
                {projectsData.map((project, index) => (
                    <motion.div
                        key={project.id}
                        className={styles.projectCard}
                        style={{ backgroundColor: project.color }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <div className={styles.cardContent}>
                            <h3>{project.title}</h3>
                            <span>{project.category}</span>
                        </div>
                        {/* Placeholder for project image background if we had them */}
                    </motion.div>
                ))}
            </section>
        </div>
    );
};

export default Projects;

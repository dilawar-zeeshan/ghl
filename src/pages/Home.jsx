import React from 'react';
import { motion } from 'framer-motion';
import styles from './Home.module.scss';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className={styles.homeContainer}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroOverlay}></div>
                <div className={styles.heroContent}>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        Web Design And Development <br />
                        <span>Company For Growing Businesses</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    >
                        We build top-notch digital solutions that turn visitors into customers. Our expertise lies in creating appealing websites, feature-rich mobile apps, and effective digital marketing strategies for engaging user experiences.
                    </motion.p>
                    <motion.div
                        className={styles.heroButtons}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    >
                        <Link to="/contact-us" className={styles.primaryBtn}>Let's Talk</Link>
                    </motion.div>
                </div>
            </section>

            {/* Services/Info Section Placeholder */}
            <section className={styles.introSection}>
                <div className={styles.container}>
                    <h2>Transforming Ideas into Digital Reality</h2>
                    <p>
                        Digital4Design is a leading web design and development agency committed to delivering custom web solutions that drive business growth.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Home;

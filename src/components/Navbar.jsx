import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Navbar.module.scss';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Link to="/">
                        <h2>Digital<span>4</span>Design</h2>
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className={styles.desktopMenu}>
                    <ul className={styles.navLinks}>
                        <li><NavLink to="/" className={({ isActive }) => isActive ? styles.active : ''}>Home</NavLink></li>
                        <li><NavLink to="/projects" className={({ isActive }) => isActive ? styles.active : ''}>Projects</NavLink></li>
                        <li><NavLink to="/contact-us" className={({ isActive }) => isActive ? styles.active : ''}>Contact Us</NavLink></li>
                    </ul>
                    <Link to="/contact-us" className={styles.ctaButton}>Call Us</Link>
                </div>

                {/* Mobile Menu Button */}
                <div className={styles.mobileToggle} onClick={toggleMenu}>
                    <div className={`${styles.bar} ${isOpen ? styles.open : ''}`}></div>
                    <div className={`${styles.bar} ${isOpen ? styles.open : ''}`}></div>
                    <div className={`${styles.bar} ${isOpen ? styles.open : ''}`}></div>
                </div>

                {/* Mobile Dropdown */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            className={styles.mobileMenu}
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'tween', duration: 0.3 }}
                        >
                            <ul>
                                <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
                                <li><Link to="/projects" onClick={toggleMenu}>Projects</Link></li>
                                <li><Link to="/contact-us" onClick={toggleMenu}>Contact Us</Link></li>
                                <li><Link to="/contact-us" className={styles.mobileCta} onClick={toggleMenu}>Call Us</Link></li>
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default Navbar;

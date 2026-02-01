import React from 'react';
import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.column}>
                    <h3>Digital4Design</h3>
                    <p>
                        We are a team of passionate developers and designers creating digital experiences that matter.
                    </p>
                </div>

                <div className={styles.column}>
                    <h3>Services</h3>
                    <ul>
                        <li>Web Design</li>
                        <li>Web Development</li>
                        <li>Mobile Apps</li>
                        <li>Digital Marketing</li>
                    </ul>
                </div>

                <div className={styles.column}>
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/contact-us">Contact Us</Link></li>
                        <li><Link to="/contact-us">About Us</Link></li>
                    </ul>
                </div>

                <div className={styles.column}>
                    <h3>Contact Ofice</h3>
                    <p>123 Street Name, City, Country</p>
                    <p>+1 234 567 8900</p>
                    <p>info@digital4design.com</p>
                </div>
            </div>

            <div className={styles.copyright}>
                <p>© 2026 Digital4Design. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;

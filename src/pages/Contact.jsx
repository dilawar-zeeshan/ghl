import React from 'react';
import { motion } from 'framer-motion';
import styles from './Contact.module.scss';

const Contact = () => {
    return (
        <div className={styles.contactContainer}>
            <section className={styles.pageHeader}>
                <div className={styles.content}>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        Contact Us
                    </motion.h1>
                </div>
            </section>

            <div className={styles.container}>
                <motion.div
                    className={styles.infoSide}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2>Let's Talk About Your Project</h2>
                    <p>We are here to help you grow your business. Reach out to us for any queries.</p>

                    <div className={styles.contactDetails}>
                        <div className={styles.detailItem}>
                            <h4>Email</h4>
                            <p>hello@digital4design.com</p>
                        </div>
                        <div className={styles.detailItem}>
                            <h4>Phone</h4>
                            <p>+1 (123) 456-7890</p>
                        </div>
                        <div className={styles.detailItem}>
                            <h4>Address</h4>
                            <p>123 Tech Street, Silicon Valley, CA</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className={styles.formSide}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className={styles.formGroup}>
                            <label>Name</label>
                            <input type="text" placeholder="John Doe" />
                        </div>
                        <div className={styles.formGroup}>
                            <label>Email</label>
                            <input type="email" placeholder="john@example.com" />
                        </div>
                        <div className={styles.formGroup}>
                            <label>Phone</label>
                            <input type="tel" placeholder="+1 234 567 890" />
                        </div>
                        <div className={styles.formGroup}>
                            <label>Message</label>
                            <textarea placeholder="Tell us about your project..." rows="5"></textarea>
                        </div>
                        <button type="submit" className={styles.submitBtn}>Send Message</button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;

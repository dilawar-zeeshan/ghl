import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView, useSpring, useMotionValue, useTransform } from 'framer-motion';
import styles from './Home.module.scss';
import { Link } from 'react-router-dom';

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    animate: { opacity: 1, y: 0 }, // Added animate for parent propagation
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" }
};

const heroFadeIn = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
};

const staggerContainer = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

// Animated Number Component
const AnimatedNumber = ({ value, suffix = "" }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 });
    const rounded = useTransform(springValue, (latest) => Math.floor(latest));

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    return (
        <span ref={ref} style={{ display: "inline-flex" }}>
            <motion.span>{rounded}</motion.span>
            {suffix}
        </span>
    );
};

// Accordion Component for FAQ
const AccordionItem = ({ question, answer, isOpen, toggle }) => {
    return (
        <div className={styles.accordionItem}>
            <div className={`${styles.accordionHeader} ${isOpen ? styles.active : ''}`} onClick={toggle}>
                <h4>{question}</h4>
                <span className={styles.icon}>{isOpen ? '−' : '+'}</span>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className={styles.accordionBody}
                    >
                        <p>{answer}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const Home = () => {
    const [openFaq, setOpenFaq] = useState(0);

    return (
        <div className={styles.homeContainer}>
            {/* Hero Sectionvvv */}
            <section className={styles.hero}>
                <div className={styles.heroOverlay}></div>
                <div className={styles.heroContent}>
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={staggerContainer}
                    >
                        <motion.h1 variants={heroFadeIn}>
                            Expert GoHighLevel Services for <br />
                            <span>Agencies & Businesses</span>
                        </motion.h1>
                        <motion.p variants={heroFadeIn}>
                            Hire GoHighLevel services to automate your workflows, manage leads, and ensure scalability. We help agencies and businesses set up, customize, and optimize Go High Level CRM, automation, and white-label solutions for maximum growth.
                        </motion.p>
                        <motion.div className={styles.heroButtons} variants={heroFadeIn}>
                            <Link to="/contact-us" className={styles.primaryBtn}>Talk to Experts</Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Why Choose GoHighLevel - Grid */}
            <section className={styles.whyGhlSection}>
                <div className={styles.container}>
                    <motion.div className={styles.sectionHeader} {...fadeInUp}>
                        <h2>Why Choose GoHighLevel for Your Business?</h2>
                        <p>GoHighLevel provides you with the tools to automate marketing, close more deals, and scale faster — and we help you set it all up correctly.</p>
                    </motion.div>
                    <div className={styles.gridThree}>
                        {[
                            { title: "Everything in One Platform", desc: "No more juggling apps. Manage leads, campaigns, and clients from a single dashboard.", icon: "💎" },
                            { title: "Higher Conversions with Funnels", desc: "Build landing pages and sales funnels that guide users from the first click to purchase.", icon: "📈" },
                            { title: "Smart Workflow Automation", desc: "Automate follow-ups, reminders, and lead nurturing so you never miss a sale.", icon: "⚡" },
                            { title: "Easy to Scale for Agencies", desc: "Serve more clients effortlessly with white-label dashboards and multi-account support.", icon: "🚀" },
                            { title: "Better Lead Management", desc: "Track every interaction, assign leads to teams, and accelerate deal progression through your pipeline.", icon: "👥" },
                            { title: "More Results with Less Effort", desc: "Spend less time on manual tasks and more time on growth-focused strategies.", icon: "🎯" }
                        ].map((item, idx) => (
                            <motion.div key={idx} className={styles.card} {...fadeInUp} transition={{ delay: idx * 0.1 }}>
                                <div className={styles.iconWrapper}>{item.icon}</div>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section - Sticky Sidebar & Scrollable Cards */}
            <section className={styles.servicesSection}>
                <div className={styles.container}>
                    <div className={styles.servicesLayout}>
                        {/* Left Side - Sticky */}
                        <div className={styles.servicesSidebar}>
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <span className={styles.subTitle}>Our Services</span>
                                <h2>Our GoHighLevel Services</h2>
                                <p>At Digital4Design, we help agencies and businesses unlock the full power of GoHighLevel. From landing pages to automation and CRM setup, we build systems that save time, capture leads, and drive real growth.</p>
                                <div style={{ marginTop: '30px' }}>
                                    <Link to="/contact-us" className={styles.primaryBtn}>Hire Expert Designers</Link>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Side - Scrollable Cards */}
                        <div className={styles.servicesContent}>
                            {[
                                {
                                    title: "GoHighLevel Landing Page Design Services",
                                    desc: "We design landing pages that convert visitors into leads. Every page is optimized for performance and speed and built to align with your campaigns and generate results.",
                                    icon: "🎨",
                                    tag: "Design",
                                    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1000&auto=format&fit=crop"
                                },
                                {
                                    title: "GoHighLevel Marketing Automation",
                                    desc: "We automate your workflows and focus on growth while handling the setup. Our experts ensure every step from lead nurturing to follow-ups runs smoothly on autopilot.",
                                    icon: "⚙️",
                                    tag: "Automation",
                                    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop"
                                },
                                {
                                    title: "GoHighLevel Website Designing",
                                    desc: "We create modern, user-friendly websites within GoHighLevel that look great and perform even better. Your site will reflect your brand, load fast, and convince visitors to take action.",
                                    icon: "💻",
                                    tag: "Web",
                                    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1000&auto=format&fit=crop"
                                },
                                {
                                    title: "GoHighLevel CRM Services",
                                    desc: "Our team sets up and customizes your CRM so you can manage leads and clients with ease. Track every interaction, automate updates, and keep your sales pipeline organized from one dashboard.",
                                    icon: "💼",
                                    tag: "CRM",
                                    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop"
                                },
                                {
                                    title: "GoHighLevel Lead Management System",
                                    desc: "We help you attract and capture the right audience through optimized forms, pages, and campaigns. Our GoHighLevel setups are built to generate high-quality leads that actually convert.",
                                    icon: "👥",
                                    tag: "Leads",
                                    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000&auto=format&fit=crop"
                                },
                                {
                                    title: "GoHighLevel Sales Funnel Creation",
                                    desc: "We plan and build complete sales funnels that guide users from awareness to purchase. Every funnel is crafted to maximize conversions and support your marketing and sales goals.",
                                    icon: "🚀",
                                    tag: "Funnels",
                                    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop"
                                },
                                {
                                    title: "GoHighLevel Email Marketing",
                                    desc: "We design and automate emails inside GoHighLevel that drive responses, build relationships, and boost sales. We help you engage your audience with noticeable email campaigns.",
                                    icon: "📧",
                                    tag: "Email",
                                    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000&auto=format&fit=crop"
                                }
                            ].map((service, idx) => (
                                <motion.div
                                    key={idx}
                                    className={styles.serviceCard}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                >
                                    <div className={styles.cardContent}>
                                        <div className={styles.iconBadge}>{service.icon}</div>
                                        <h3>{service.title}</h3>
                                        <p>{service.desc}</p>
                                        <Link to="/contact-us" className={styles.learnMore}>
                                            Learn More <span>→</span>
                                        </Link>
                                    </div>
                                    <div className={styles.serviceImage}>
                                        <img src={service.image} alt={service.title} />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className={styles.whyUsSection}>
                <div className={styles.container}>
                    <div className={styles.cols}>
                        <div className={styles.colText}>
                            <span className={styles.subTitle}>Why Choose Us</span>
                            <h2>Your Go-To Partner for GoHighLevel Services</h2>
                            <p className={styles.introParam}>We provide end-to-end Gohighlevel services, including initial consultation to ongoing support and maintenance. Our Gohighlevel experts ensure your business utilizes the full potential of Gohighlevel for outstanding results.</p>

                            <ul className={styles.whyList}>
                                <li><strong>Proven Experience with GHL Ecosystem:</strong> We’ve helped agencies, startups, and small businesses successfully launch and scale using GoHighLevel.</li>
                                <li><strong>Certified GoHighLevel Experts:</strong> Our team includes certified GoHighLevel consultants and automation specialists.</li>
                                <li><strong>Affordable Prices:</strong> We believe in delivering maximum value without inflated Gohighlevel expert agency pricing.</li>
                                <li><strong>Agency-Centric Approach:</strong> We understand the real challenges, such as client tracking, lead follow-ups, and workflow bottlenecks.</li>
                            </ul>
                            <Link to="/contact-us" className={styles.primaryBtn}>Book Free Consultation</Link>
                        </div>
                        <div className={styles.colImage}>
                            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop" alt="Team" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className={styles.statsSection}>
                <div className={styles.container}>
                    <div className={styles.statsGrid}>
                        {[
                            { num: 15, suffix: "+", label: "Years Of Experience" },
                            { num: 1, suffix: "K+", label: "Successful Projects" },
                            { num: 98, suffix: "%", label: "Customers Satisfaction" },
                            { num: 150, suffix: "+", label: "Clients Worldwide" },
                            { num: 50, suffix: "+", label: "IT Expert" },
                            { num: 98, suffix: "%", label: "Success Score" }
                        ].map((stat, idx) => (
                            <div key={idx} className={styles.statItem}>
                                <h2 className={styles.statNumber}>
                                    <AnimatedNumber value={stat.num} suffix={stat.suffix} />
                                </h2>
                                <p>{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Success Stories */}
            <section className={styles.portfolioSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2>Our GoHighLevel Success Stories</h2>
                        <p>Take a look at the GoHighLevel-powered solutions we’ve designed to streamline marketing and boost performance.</p>
                    </div>
                    <div className={styles.portfolioGrid}>
                        <div className={styles.portfolioItem}>
                            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" alt="Project 1" />
                            <div className={styles.pOverlay}>
                                <h3>Marketing Automation Dashboard</h3>
                            </div>
                        </div>
                        <div className={styles.portfolioItem}>
                            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" alt="Project 2" />
                            <div className={styles.pOverlay}>
                                <h3>Sales Funnel Optimization</h3>
                            </div>
                        </div>
                    </div>
                    <div className={styles.centerBtn}>
                        <Link to="/projects" className={styles.secondaryBtn}>View Our Portfolio</Link>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className={styles.testimonialSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2>What People Say About Us!</h2>
                        <Link to="/reviews" className={styles.readMore}>Read More</Link>
                        <div className={styles.ratingBox}>
                            <span className={styles.stars}>⭐⭐⭐⭐⭐</span>
                            <p>Rated 5.0 out of 5 based on 41 verified reviews on Clutch</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className={styles.faqSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2>Frequently Asked Questions</h2>
                    </div>
                    <div className={styles.accordion}>
                        {[
                            { q: "What is a GoHighLevel landing page, and how does it work?", a: "A GoHighLevel landing page is a customizable page built to capture leads or promote offers within the GHL platform. You can use drag-and-drop templates, connect forms, and automate follow-ups. It makes it simple to run high-converting campaigns." },
                            { q: "What should I know about GoHighLevel pricing?", a: "GoHighLevel offers transparent pricing models suitable for agencies and small businesses. Contact us for a detailed breakdown of how our services align with GHL plans." },
                            { q: "Why should I work with a GoHighLevel expert?", a: "Working with an expert ensures your setup is done correctly from day one, saving you time and avoiding costly technical errors. We know the best practices to maximize ROI." },
                            { q: "What are the key GoHighLevel features businesses should know?", a: "Key features include the CRM, Pipeline Management, Marketing Automation, Funnel Builder, Website Builder, and Unified Inbox for all client communications." },
                            { q: "What makes GoHighLevel CRM and funnel builder ideal for marketing agencies?", a: "It combines all essential agency tools in one platform, allowing for white-labeling, sub-accounts for clients, and automated reporting." },
                            { q: "How can I hire a GoHighLevel automation consultant for small businesses?", a: "Simply book a free consultation with us! We'll assess your needs and propose a tailored automation strategy." },
                            { q: "Do you offer affordable GoHighLevel setup services for agencies?", a: "Yes, we have flexible packages designed specifically to help agencies scale without breaking the bank." }
                        ].map((faq, idx) => (
                            <AccordionItem
                                key={idx}
                                question={faq.q}
                                answer={faq.a}
                                isOpen={openFaq === idx}
                                toggle={() => setOpenFaq(idx === openFaq ? -1 : idx)}
                            />
                        ))}
                        <Link to="/contact-us" className={styles.viewMoreFaq}>View All FAQs</Link>
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className={styles.ctaSection}>
                <div className={styles.container}>
                    <h2>Your Digital Success Starts With the Right Strategy</h2>
                    <p>You need a website, a custom mobile app, or an effective marketing strategy? We at Digital4Design have got you covered. Get in touch to see how we can help your business grow and succeed.</p>
                    <Link to="/contact-us" className={styles.ctaBtn}>Get in touch</Link>
                </div>
            </section>
        </div>
    );
};

export default Home;

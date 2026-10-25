import React, { useState } from "react";
import "./Portfolio.css";
import Menu from "./Menu";
import { RiGithubLine, RiExternalLinkLine, RiCodeBoxLine } from "react-icons/ri";
import { motion } from "framer-motion";

const filterCategories = [
    { label: "All Projects", key: "All" },
    { label: "Freelancing", key: "Freelancing" },
    { label: "Full Stack", key: "Full Stack" },
    { label: "Enterprise & DB", key: "Database" },
    { label: "Frontend", key: "Frontend" },
    { label: "Backend & APIs", key: "Backend" }
];

const Portfolio = () => {
    const [items, setItems] = useState(Menu);
    const [activeFilter, setActiveFilter] = useState("All");

    const handleFilter = (categoryKey) => {
        setActiveFilter(categoryKey);
        if (categoryKey === "All") {
            setItems(Menu);
        } else {
            const filtered = Menu.filter((item) =>
                item.category.includes(categoryKey)
            );
            setItems(filtered);
        }
    };

    return (
        <section className="portfolio container section" id="portfolio">
            <span className="section__tag">05 // Project Arsenal</span>
            <h2 className="section__title">Featured Projects</h2>

            <div className="portfolio__filters">
                {filterCategories.map((f) => (
                    <button
                        key={f.key}
                        className={`portfolio__filter-btn ${activeFilter === f.key ? 'active' : ''}`}
                        onClick={() => handleFilter(f.key)}
                    >
                        {f.label}
                    </button>
                ))}
            </div>

            <div className="portfolio__container grid">
                {items.map((elem) => {
                    const { id, image, title, subtitle, stack, description, repositoryUrl, liveUrl, featured, badge } = elem;

                    return (
                        <motion.div
                            layout
                            animate={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: 20 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.3 }}
                            className={`portfolio__card ${featured ? 'portfolio__card--featured' : ''}`}
                            key={id}
                        >
                            <div className="portfolio__thumbnail">
                                <img src={image} alt={title} className="portfolio__img" />
                                <div className="portfolio__overlay">
                                    <a
                                        href={repositoryUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="portfolio__overlay-btn"
                                        title="View Source on GitHub"
                                    >
                                        <RiGithubLine /> GitHub Repo
                                    </a>
                                    {liveUrl && (
                                        <a
                                            href={liveUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="portfolio__overlay-btn portfolio__overlay-btn--live"
                                            title="Visit Live Website"
                                        >
                                            <RiExternalLinkLine /> Live Demo
                                        </a>
                                    )}
                                </div>
                                {featured && (
                                    <span className="featured-badge">Featured System</span>
                                )}
                                {badge && (
                                    <span className="badge--freelance">{badge}</span>
                                )}
                            </div>

                            <div className="portfolio__content">
                                <span className="portfolio__subtitle">{subtitle}</span>
                                <h3 className="portfolio__title">{title}</h3>
                                <p className="portfolio__description">{description}</p>

                                <div className="portfolio__stack">
                                    {stack && stack.map((tech, i) => (
                                        <span key={i} className="tech-badge">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="portfolio__actions">
                                    <a
                                        href={repositoryUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="portfolio__action-btn"
                                        title="View Source on GitHub"
                                    >
                                        <RiCodeBoxLine /> Repository
                                    </a>
                                    <a
                                        href={liveUrl || repositoryUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="portfolio__action-btn portfolio__action-btn--primary"
                                        title={liveUrl ? "Visit Live Website" : "View Project Details"}
                                    >
                                        <RiExternalLinkLine /> {liveUrl ? "Live Demo" : "Details"}
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};

export default Portfolio;

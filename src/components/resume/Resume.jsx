import React, { useState } from "react";
import "./Resume.css";
import { WorkExperience, EducationHistory, Certifications } from "./WorkExperience";
import ResumePDF from "../../assets/Ankitosh_Resume_BE.pdf";
import { FaGraduationCap } from "react-icons/fa";
import { 
    RiBriefcase2Line, 
    RiAwardLine, 
    RiDownloadLine, 
    RiBuilding4Line, 
    RiCalendarLine, 
    RiShieldCheckLine 
} from "react-icons/ri";

const Resume = () => {
    const [mainCategory, setMainCategory] = useState("experience"); // 'experience', 'education', 'certifications'
    const [selectedExpIndex, setSelectedExpIndex] = useState(0);

    return (
        <section className="resume container section" id="resume">
            <span className="section__tag">04 // Career & Background</span>
            <h2 className="section__title">Experience & Education</h2>

            <div className="resume__top-nav">
                <button 
                    className={`resume__nav-btn ${mainCategory === 'experience' ? 'active' : ''}`}
                    onClick={() => setMainCategory('experience')}
                >
                    <RiBriefcase2Line /> Work Experience
                </button>
                <button 
                    className={`resume__nav-btn ${mainCategory === 'education' ? 'active' : ''}`}
                    onClick={() => setMainCategory('education')}
                >
                    <FaGraduationCap /> Education
                </button>
                <button 
                    className={`resume__nav-btn ${mainCategory === 'certifications' ? 'active' : ''}`}
                    onClick={() => setMainCategory('certifications')}
                >
                    <RiAwardLine /> Certifications
                </button>
            </div>

            {/* Work Experience Tab */}
            {mainCategory === "experience" && (
                <div className="resume__container">
                    <div className="experience__tabs">
                        <div className="experience__company-list">
                            {WorkExperience.map((exp, index) => (
                                <button
                                    key={exp.id}
                                    className={`company-tab-btn ${selectedExpIndex === index ? 'is-active' : ''}`}
                                    onClick={() => setSelectedExpIndex(index)}
                                >
                                    <div className="company-tab-title">{exp.company}</div>
                                    <div className="company-tab-dates">{exp.yearsActive}</div>
                                    <span className="company-tab-badge">{exp.badge}</span>
                                </button>
                            ))}
                        </div>

                        <div className="experience__detail-card">
                            {(() => {
                                const current = WorkExperience[selectedExpIndex];
                                return (
                                    <div className="exp-card">
                                        <div className="exp-card__header">
                                            <div>
                                                <h3 className="exp-card__title">
                                                    {current.title}{" "}
                                                    <span className="exp-card__company">@ {current.company}</span>
                                                </h3>

                                                <div className="exp-card__meta">
                                                    <span className="meta-item">
                                                        <RiBuilding4Line /> <strong>Client:</strong> {current.client}
                                                    </span>
                                                    <span className="meta-item">
                                                        <RiCalendarLine /> {current.yearsActive}
                                                    </span>
                                                    <span className="meta-project-badge">
                                                        Project: {current.project}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="exp-card__stack">
                                            <span className="stack-label">Key Stack:</span>
                                            {current.techStack.map((tech, i) => (
                                                <span key={i} className="tech-badge">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        <ul className="exp-card__list">
                                            {current.information.map((info, idx) => (
                                                <li key={idx} className="exp-card__list-item">
                                                    {info}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                );
                            })()}
                        </div>
                    </div>
                </div>
            )}

            {/* Education Tab */}
            {mainCategory === "education" && (
                <div className="education__container grid">
                    {EducationHistory.map((edu) => (
                        <div className="education__card" key={edu.id}>
                            <div className="edu__header">
                                <div className="edu__icon-wrapper">
                                    <FaGraduationCap />
                                </div>
                                <div className="edu__title-wrapper">
                                    <span className="edu__badge">{edu.badge}</span>
                                    <h3 className="edu__degree">{edu.degree}</h3>
                                    <h4 className="edu__institution">{edu.institution}</h4>
                                </div>
                                <div className="edu__score-box">
                                    <span className="score-val">{edu.score}</span>
                                    <span className="score-label">{edu.duration}</span>
                                </div>
                            </div>

                            <ul className="edu__details-list">
                                {edu.details.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            )}

            {/* Certifications Tab */}
            {mainCategory === "certifications" && (
                <div className="certifications__container grid">
                    {Certifications.map((cert) => (
                        <div className="cert__card" key={cert.id}>
                            <div className="cert__icon-wrapper">
                                <RiShieldCheckLine />
                            </div>
                            <div className="cert__content">
                                <span className="cert__issuer">{cert.issuer}</span>
                                <h3 className="cert__name">{cert.name}</h3>
                                <p className="cert__focus">{cert.focus}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <div className="resume__download-bar">
                <div className="download-bar__info">
                    <strong>Need a comprehensive copy of my credentials?</strong>
                    <span>Download my detailed, ATS-friendly curriculum vitae.</span>
                </div>
                <a 
                    href={ResumePDF} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="btn"
                >
                    <RiDownloadLine /> Download Full Resume (PDF)
                </a>
            </div>
        </section>
    );
};

export default Resume;

import React, { useState } from 'react';
import './About.css';
import Image from '../../assets/avatar-1.jpg';
import ResumePDF from '../../assets/Ankitosh_Resume_BE.pdf';
import AboutBox from './AboutBox';
import { 
    RiTerminalBoxLine, 
    RiDownloadLine, 
    RiCodeBoxLine, 
    RiDatabase2Line, 
    RiStackLine, 
    RiToolsLine,
    RiShieldCheckLine
} from 'react-icons/ri';

const skillCategories = [
    {
        category: "Programming Languages",
        icon: <RiCodeBoxLine />,
        skills: [
            { name: "Java", level: "Advanced", tag: "Enterprise Core" },
            { name: "JavaScript (ES6+)", level: "Advanced", tag: "Full-Stack" },
            { name: "TypeScript", level: "Proficient", tag: "Type-Safe" },
            { name: "Python", level: "Intermediate", tag: "Scripting" },
            { name: "SQL", level: "Advanced", tag: "Query Tuning" }
        ]
    },
    {
        category: "Backend & APIs",
        icon: <RiStackLine />,
        skills: [
            { name: "Java Spring Boot", level: "Proficient", tag: "Enterprise Backend" },
            { name: "Spring Framework", level: "Proficient", tag: "REST Architecture" },
            { name: "Node.js", level: "Advanced", tag: "Runtime" },
            { name: "Express.js", level: "Advanced", tag: "API Framework" },
            { name: "REST APIs", level: "Advanced", tag: "Design & Debugging" },
            { name: "Prisma ORM", level: "Proficient", tag: "Database Client" }
        ]
    },
    {
        category: "Database Engineering",
        icon: <RiDatabase2Line />,
        skills: [
            { name: "Microsoft SQL Server (MSSQL)", level: "Advanced", tag: "Production DB" },
            { name: "PostgreSQL", level: "Proficient", tag: "Relational" },
            { name: "MySQL", level: "Proficient", tag: "Relational" },
            { name: "Oracle", level: "Working Knowledge", tag: "Enterprise" },
            { name: "Stored Procedures & Joins", level: "Advanced", tag: "Optimization" },
            { name: "Data Validation & Troubleshooting", level: "Advanced", tag: "Data Integrity" }
        ]
    },
    {
        category: "Frontend Development",
        icon: <RiCodeBoxLine />,
        skills: [
            { name: "React.js", level: "Advanced", tag: "Component Architecture" },
            { name: "Next.js", level: "Proficient", tag: "App Router / SSR" },
            { name: "HTML5 & CSS3", level: "Advanced", tag: "Responsive UI" },
            { name: "Framer Motion", level: "Proficient", tag: "Micro-animations" }
        ]
    },
    {
        category: "Developer Tools & Platforms",
        icon: <RiToolsLine />,
        skills: [
            { name: "Git & GitHub", level: "Proficient", tag: "Version Control" },
            { name: "SQL Server Management Studio (SSMS)", level: "Advanced", tag: "DB Admin" },
            { name: "Postman", level: "Advanced", tag: "API Testing" },
            { name: "VS Code", level: "Advanced", tag: "Primary IDE" },
            { name: "Vercel & pnpm", level: "Proficient", tag: "Deployments" }
        ]
    },
    {
        category: "Engineering Practices",
        icon: <RiShieldCheckLine />,
        skills: [
            { name: "Root Cause Analysis (RCA)", level: "Advanced", tag: "Diagnostic" },
            { name: "Application Support & Debugging", level: "Advanced", tag: "L2/L3 Engineering" },
            { name: "Defect Resolution", level: "Advanced", tag: "Production Fixes" },
            { name: "User Acceptance Testing (UAT)", level: "Proficient", tag: "Release QA" },
            { name: "Cross-Layer Troubleshooting", level: "Advanced", tag: "Backend + DB" }
        ]
    }
];

const terminalCommands = {
    help: "Available commands: whoami, skills, experience, education, certs, stack, clear",
    whoami: "Ankitosh Kumar - Application Support Engineer & Software Developer based in Patna, Bihar, India.",
    skills: "Core: Java, Spring Boot, React.js, Next.js, TypeScript, Node.js, Express, MSSQL, PostgreSQL, REST APIs.",
    experience: "1. Support Engineer @ E-Solutions IT Services (Client: CDSCO - ONDLS)\n2. Application Support Engineer @ Adecco India (Client: Tata Power TPPPL - AMISP)",
    education: "MCA: Rungta College of Engg & Tech, Bhilai (73.4%, 2022-2024)\nBCA: Maharashtra Institute of Technology (MIT), Pune (79.2%, 2018-2021)",
    certs: "1. Full Stack Java Development (KodNest)\n2. Java Spring Boot (Udemy)\n3. Core Java Programming",
    stack: "Languages: Java, JS, TS, Python, SQL | Frameworks: Spring Boot, Next.js, React, Express | DB: MSSQL, Postgres, MySQL"
};

const About = () => {
    const [terminalHistory, setTerminalHistory] = useState([
        { cmd: "whoami", res: terminalCommands.whoami },
        { cmd: "cat status.log", res: "Supporting CDSCO Online Drug Licensing System. Building WorkMate AI & Soft Tech Solution." }
    ]);
    const [activeTab, setActiveTab] = useState(0);

    const runCommand = (cmd) => {
        if (cmd === 'clear') {
            setTerminalHistory([]);
            return;
        }
        const output = terminalCommands[cmd] || `command not found: ${cmd}. Type 'help' for options.`;
        setTerminalHistory(prev => [...prev.slice(-4), { cmd, res: output }]);
    };

    return (
        <section className="about container section" id="about">
            <span className="section__tag">01 // Profile & Background</span>
            <h2 className="section__title">About Me</h2>

            <div className="about__container grid">
                <div className="about__image-col">
                    <div className="about__img-wrapper">
                        <img src={Image} alt="Ankitosh Kumar" className='about__img' />
                        <div className="about__experience-pill">
                            <span className="pill-years">2+ Years</span>
                            <span className="pill-label">Enterprise Experience</span>
                        </div>
                    </div>

                    <div className="about__quick-info">
                        <div className="info-item">
                            <span className="info-key">Degree:</span>
                            <span className="info-value">Master of Computer Applications (MCA)</span>
                        </div>
                        <div className="info-item">
                            <span className="info-key">Location:</span>
                            <span className="info-value">Patna, Bihar, India</span>
                        </div>
                        <div className="info-item">
                            <span className="info-key">Focus:</span>
                            <span className="info-value">Full Stack & Database Engineering</span>
                        </div>
                    </div>
                </div>

                <div className="about__content-col">
                    <div className="about__bio-text">
                        <p className="about__description">
                            Hello! I'm <strong>Ankitosh Kumar</strong>, an <strong>Application Support Engineer and Software Developer</strong> with strong expertise in supporting mission-critical enterprise platforms, developing full-stack web applications, and performing deep-level SQL database engineering and backend troubleshooting.
                        </p>

                        <p className="about__description">
                            Currently, I serve as a <strong>Support Engineer at E-Solutions IT Services Pvt. Ltd.</strong>, dedicated to supporting the <strong>Central Drugs Standard Control Organisation (CDSCO)</strong> for the <em>Online National Drug Licensing System (ONDLS)</em>. In this role, I actively investigate issues across Java/Spring backend services and the Microsoft SQL Server (MSSQL) database layer, implement code corrections, design stored procedures, and validate production deployments.
                        </p>

                        <p className="about__description">
                            Previously, as an <strong>Application Support Engineer at Adecco India</strong>, I supported enterprise operations for <strong>Tata Power Power Plus Ltd. (TPPPL)</strong> under the <em>AMISP Smart Metering</em> project. There, I engineered the <strong>Business Associate Management System (BAMS)</strong> with React, Node.js, Express, and MSSQL to manage technician lifecycles and automated ID card generation.
                        </p>
                    </div>

                    {/* Interactive Developer Console / Terminal */}
                    <div className="about__terminal">
                        <div className="terminal__topbar">
                            <div className="terminal__dots">
                                <span className="dot dot-red"></span>
                                <span className="dot dot-yellow"></span>
                                <span className="dot dot-green"></span>
                            </div>
                            <div className="terminal__title">
                                <RiTerminalBoxLine /> ankitosh@dev-station:~ (zsh)
                            </div>
                        </div>

                        <div className="terminal__screen">
                            {terminalHistory.map((item, index) => (
                                <div key={index} className="terminal__line-group">
                                    <div className="terminal__prompt">
                                        <span className="prompt-user">guest@ankitosh</span>
                                        <span className="prompt-char">$</span>
                                        <span className="prompt-command">{item.cmd}</span>
                                    </div>
                                    <div className="terminal__output">{item.res}</div>
                                </div>
                            ))}
                        </div>

                        <div className="terminal__quick-actions">
                            <span className="quick-label">Run command:</span>
                            {['whoami', 'skills', 'experience', 'education', 'certs', 'clear'].map(cmd => (
                                <button key={cmd} onClick={() => runCommand(cmd)} className="terminal__cmd-btn">
                                    {cmd}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="about__actions">
                        <a 
                            href={ResumePDF} 
                            target="_blank" 
                            rel="noreferrer" 
                            className="btn"
                        >
                            <RiDownloadLine /> Download CV (PDF)
                        </a>
                        <a href="#resume" className="btn btn-secondary">
                            View Work Experience
                        </a>
                    </div>
                </div>
            </div>

            <AboutBox />

            {/* Comprehensive Technical Skills Matrix */}
            <div className="skills__section">
                <span className="section__tag">02 // Technical Skills Matrix</span>
                <h3 className="skills__section-title">Core Technologies & Tools</h3>
                <p className="skills__subtitle">
                    Hands-on proficiencies cultivated across government enterprise platforms, production databases, and modern web application development.
                </p>

                <div className="skills__tabs">
                    {skillCategories.map((cat, idx) => (
                        <button
                            key={cat.category}
                            className={`skills__tab-btn ${activeTab === idx ? 'skills__tab-btn--active' : ''}`}
                            onClick={() => setActiveTab(idx)}
                        >
                            <span className="tab-icon">{cat.icon}</span>
                            <span>{cat.category}</span>
                        </button>
                    ))}
                </div>

                <div className="skills__grid">
                    {skillCategories[activeTab].skills.map((skill, index) => (
                        <div className="skill__card" key={index}>
                            <div className="skill__header">
                                <h4 className="skill__name">{skill.name}</h4>
                                <span className="skill__tag">{skill.tag}</span>
                            </div>
                            <div className="skill__meta">
                                <span className="skill__level">{skill.level}</span>
                                <div className="skill__indicator">
                                    <span 
                                        className="indicator-fill" 
                                        style={{ 
                                            width: skill.level === 'Advanced' ? '92%' : skill.level === 'Proficient' ? '82%' : '70%' 
                                        }}
                                    ></span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
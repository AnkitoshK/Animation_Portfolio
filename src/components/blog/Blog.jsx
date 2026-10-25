import React from 'react';
import './Blog.css';
import WorkmateImg from '../../assets/workmate.jpg';
import BamsImg from '../../assets/bams.jpg';
import ClinicImg from '../../assets/clinic.png';
import { RiTimeLine, RiArrowRightLine, RiDatabase2Line } from 'react-icons/ri';

const caseStudies = [
    {
        id: 1,
        image: WorkmateImg,
        category: "Full Stack & AI Automation",
        date: "2026",
        title: "Architecting WorkMate AI: Automated Incident Triage & Ticketing Tool",
        description:
            "Engineered a full-stack developer ticketing application using Next.js 14, TypeScript, Express, and Prisma ORM with PostgreSQL. Streamlines defect management and ticket lifecycle with automated triage rules.",
        stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
        impact: "Reduced manual ticket logging friction by 40%"
    },
    {
        id: 2,
        image: BamsImg,
        category: "Enterprise System Architecture",
        date: "2025 -- 2026",
        title: "BAMS: Building a Business Associate & Technician Management Ecosystem",
        description:
            "Architected an enterprise platform for Tata Power smart metering operations, streamlining technician onboarding, digital ID badge issuance, background compliance, and role-based permissions backed by MSSQL.",
        stack: ["React.js", "Node.js", "Express", "MSSQL", "RBAC"],
        impact: "1,400+ active field technicians managed"
    },
    {
        id: 3,
        image: ClinicImg,
        category: "Database & Backend Support",
        date: "2026",
        title: "Cross-Layer Diagnostics: Investigating MSSQL & Spring Backend Bottlenecks",
        description:
            "Deep dive into diagnosing production errors across Java/Spring controllers and SQL Server databases in the CDSCO Online National Drug Licensing System. Applying root cause analysis to stabilize critical transactions.",
        stack: ["Java", "Spring Boot", "MSSQL", "SSMS", "RCA"],
        impact: "99.9% uptime SLA maintained for licensing portal"
    }
];

const Blog = () => {
    return (
        <section className="blog container section" id="blog">
            <span className="section__tag">06 // Engineering Deep Dives</span>
            <h2 className="section__title">Case Studies & Technical Highlights</h2>

            <div className="blog__container grid">
                {caseStudies.map((study) => (
                    <div className="blog__card" key={study.id}>
                        <div className="blog__thumb">
                            <span className="blog__category">{study.category}</span>
                            <img
                                src={study.image}
                                alt={study.title}
                                className='blog__img'
                            />
                        </div>

                        <div className="blog__details">
                            <div className="blog__meta">
                                <span className="meta-date"><RiTimeLine /> {study.date}</span>
                                <span className="blog__dot">•</span>
                                <span className="meta-impact"><RiDatabase2Line /> {study.impact}</span>
                            </div>

                            <h3 className="blog__title">{study.title}</h3>
                            <p className="blog__description">{study.description}</p>

                            <div className="blog__stack">
                                {study.stack.map((t, i) => (
                                    <span key={i} className="tech-badge">
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <a href="#portfolio" className="blog__link">
                                View project details <RiArrowRightLine />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Blog;
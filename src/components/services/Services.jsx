import React from 'react';
import './Services.css';
import { 
    RiShieldCheckLine, 
    RiDatabase2Line, 
    RiCodeSSlashLine, 
    RiExchangeLine 
} from 'react-icons/ri';

const servicesData = [
    {
        id: 1,
        icon: <RiShieldCheckLine />,
        title: "Enterprise Application Support",
        subtitle: "L2/L3 Diagnostics & Defect Resolution",
        description:
            "Diagnosing and resolving production defects across enterprise and government-facing web platforms (CDSCO ONDLS, Tata Power AMISP). Conducting deep root cause analysis (RCA), defect triage, and deployment validation.",
        skills: ["Root Cause Analysis", "Java/Spring Debugging", "Production Support", "UAT Validation"]
    },
    {
        id: 2,
        icon: <RiDatabase2Line />,
        title: "Database Engineering & SQL",
        subtitle: "MSSQL & PostgreSQL Schema & Query Tuning",
        description:
            "Designing relational database structures, complex multi-table joins, stored procedures, and triggers. Auditing data validation issues, query troubleshooting, and performance tuning on Microsoft SQL Server and PostgreSQL.",
        skills: ["MSSQL & SSMS", "Stored Procedures", "Query Optimization", "Data Integrity"]
    },
    {
        id: 3,
        icon: <RiCodeSSlashLine />,
        title: "Full-Stack Web Development",
        subtitle: "Next.js, React, Node.js & TypeScript",
        description:
            "Developing clean, responsive, and accessible frontend interfaces integrated with scalable backend architectures. Engineering real tools like WorkMate AI (ticketing tool) and BAMS (technician management).",
        skills: ["Next.js & React", "TypeScript", "Node.js & Express", "Prisma ORM"]
    },
    {
        id: 4,
        icon: <RiExchangeLine />,
        title: "REST APIs & Backend Architecture",
        subtitle: "Java Spring Boot & Express.js Services",
        description:
            "Architecting RESTful APIs, implementing robust authentication, role-based access control (RBAC), request validation, and bridging frontend interfaces with persistent enterprise data layers.",
        skills: ["Java Spring Boot", "Express.js", "RESTful Contracts", "Postman Testing"]
    }
];

const Services = () => {
    return (
        <section className="services container section" id="services">
            <span className="section__tag">03 // Competencies</span>
            <h2 className="section__title">Engineering Domains</h2>

            <div className="services__container grid">
                {servicesData.map(({ id, icon, title, subtitle, description, skills }) => {
                    return (
                        <div className="services__card" key={id}>
                            <div className="services__icon-wrapper">
                                {icon}
                            </div>

                            <span className="services__subtitle">{subtitle}</span>
                            <h3 className="services__title">{title}</h3>
                            <p className="services__description">{description}</p>

                            <div className="services__tags">
                                {skills.map((skill, idx) => (
                                    <span key={idx} className="services__tag-pill">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Services;
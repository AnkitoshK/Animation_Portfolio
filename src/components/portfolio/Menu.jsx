import WorkmateImg from "../../assets/workmate.jpg";
import BamsImg from "../../assets/bams.jpg";
import SoftechImg from "../../assets/softech.jpg";
import ClinicImg from "../../assets/clinic.png";
import FourChakkaImg from "../../assets/4chakka.png";
import RestroImg from "../../assets/restro.png";
import JobImg from "../../assets/job.png";
import DataImg from "../../assets/data.png";

const Menu = [
    {
        id: 1,
        image: WorkmateImg,
        title: "WorkMate AI -- AI Ticketing Tool",
        subtitle: "Enterprise Incident & Ticket Workflow",
        category: ["Full Stack", "Frontend", "Backend"],
        stack: ["Next.js", "React", "TypeScript", "Node.js", "Express", "Prisma ORM", "PostgreSQL"],
        description: "Modern modular ticketing tool for creating, tracking, and resolving incidents with automated triage, Next.js frontend, and Prisma/PostgreSQL database persistence.",
        repositoryUrl: "https://github.com/AnkitoshK/WorkMate_AI",
        featured: true
    },
    {
        id: 2,
        image: SoftechImg,
        title: "Soft Tech Solution -- Digital Agency & Client Portal",
        subtitle: "Freelance Project • Co-Founder & Full Stack",
        category: ["Freelancing", "Full Stack", "Frontend"],
        stack: ["Next.js 14", "React", "JavaScript", "Supabase", "PostgreSQL", "Tailwind CSS", "Vercel"],
        description: "Production client freelancing web application and CRM built for Soft Tech Solution. Engineered with responsive service cataloging, automated inquiry workflows, candidate registration with GPS verification & QR code auditing, and a secure administrative dashboard.",
        repositoryUrl: "https://github.com/AnkitoshK/soft-tech-solution",
        liveUrl: "https://soft-tech-solution-ebon.vercel.app/",
        featured: true,
        badge: "Freelance Project"
    },
    {
        id: 3,
        image: BamsImg,
        title: "BAMS -- Business Associate Management",
        subtitle: "Enterprise Technician Onboarding & ID Issuance",
        category: ["Full Stack", "Enterprise", "Database"],
        stack: ["React.js", "Node.js", "Express.js", "MSSQL", "REST APIs", "SSMS"],
        description: "Internal enterprise application engineered for Tata Power smart metering operations, managing technician onboarding, automated digital ID card generation, and compliance verification.",
        repositoryUrl: "https://github.com/AnkitoshK",
        featured: true
    },
    {
        id: 4,
        image: ClinicImg,
        title: "Clinic Care Health System",
        subtitle: "Healthcare & Patient Management Platform",
        category: ["Frontend", "Full Stack"],
        stack: ["React.js", "Java", "REST APIs", "CSS3"],
        description: "Full-featured healthcare management platform for appointment scheduling, patient records, and doctor consultations.",
        repositoryUrl: "https://github.com/AnkitoshK/Clinic-Care",
        featured: false
    },
    {
        id: 5,
        image: FourChakkaImg,
        title: "4Chakka Logistics Web Application",
        subtitle: "Logistics & Fleet E-Commerce",
        category: ["Frontend", "React"],
        stack: ["React.js", "JavaScript", "Responsive UI", "REST APIs"],
        description: "Modern logistics web application for commercial vehicle spare parts, fleet operations, and transport cataloging.",
        repositoryUrl: "https://github.com/AnkitoshK/4Chakka-Web-Application",
        featured: false
    },
    {
        id: 6,
        image: RestroImg,
        title: "RestroScan Digital Dining",
        subtitle: "QR Code Menu & Table Ordering",
        category: ["Frontend", "React"],
        stack: ["React.js", "QR Tech", "Mobile-First UI", "State Management"],
        description: "Contactless digital restaurant application featuring instant table QR code menu scanning, order dispatch, and live kitchen tracking.",
        repositoryUrl: "https://github.com/AnkitoshK/RestroScan",
        featured: false
    },
    {
        id: 7,
        image: JobImg,
        title: "Job Portal Backend Engine",
        subtitle: "Recruitment & Candidate Workflow API",
        category: ["Backend", "Java"],
        stack: ["Java", "Spring Framework", "REST APIs", "PostgreSQL"],
        description: "Scalable backend architecture for job portal listings, candidate resume parsing, application status workflows, and recruiter administration.",
        repositoryUrl: "https://github.com/AnkitoshK/Job-Portal",
        featured: false
    },
    {
        id: 8,
        image: DataImg,
        title: "Suraksha Prahari & Safe Harbour DB",
        subtitle: "Safety & Daily Work Management (DWM)",
        category: ["Database", "Enterprise"],
        stack: ["MSSQL", "SQL Queries", "Stored Procedures", "Data Integrity"],
        description: "Workforce Daily Work Management (DWM) and Permit-to-Work (PTW) field safety platform with normalized relational database design, stored procedures, and audit validation.",
        repositoryUrl: "https://github.com/AnkitoshK/Vehicle-Insurance-Database",
        featured: false
    },
    {
        id: 9,
        image: DataImg,
        title: "Vehicle Insurance Relational DB",
        subtitle: "Relational Schema & Stored Procedures",
        category: ["Database", "Backend"],
        stack: ["MSSQL", "Database Schema", "Joins", "Stored Procedures"],
        description: "Normalized relational database design for vehicle insurance lifecycle management, policy records, claims tracking, and audit transaction integrity.",
        repositoryUrl: "https://github.com/AnkitoshK/Vehicle-Insurance-Database",
        featured: false
    }
];

export default Menu;

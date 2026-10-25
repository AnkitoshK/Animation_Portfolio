import React, { useState } from 'react';
import './Home.css';
import Me from '../../assets/avatar-1.jpg';
import ResumePDF from '../../assets/Ankitosh_Resume_BE.pdf';
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';
import Typewriter from './Typewriter';
import { RiCodeSSlashLine, RiFileCopyLine, RiCheckLine, RiDownloadLine, RiTerminalBoxLine } from 'react-icons/ri';

const Home = () => {
    const [copied, setCopied] = useState(false);

    const copyCodeSnippet = () => {
        const snippet = `const developer = {
  name: "Ankitosh Kumar",
  title: "Application Support Engineer & Full Stack Developer",
  education: "MCA (73.4%) | BCA (79.2%)",
  currentRole: "Support Engineer @ E-Solutions IT Services",
  client: "CDSCO (Online National Drug Licensing System)",
  previousClient: "Tata Power (AMISP Smart Metering - BAMS)",
  coreStack: ["Java", "Spring Boot", "TypeScript", "React", "Next.js", "MSSQL", "PostgreSQL"],
  portfolio: "https://ankitosh-portfolio.vercel.app/",
  contact: {
    email: "ankitoshgupta4379@gmail.com",
    phone: "+91 8271311102",
    location: "Patna, Bihar, India"
  }
};`;
        navigator.clipboard.writeText(snippet);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
    };

    return (
        <section className="home container" id="home">
            <div className="home__wrapper">
                <div className="intro">
                    <div className="hero__status">
                        <span className="status-dot"></span>
                        <span className="status-text">Application Engineer @ CDSCO Project</span>
                        <span className="status-badge">Open to Opportunities</span>
                    </div>

                    <div className="home__avatar-wrapper">
                        <img src={Me} alt="Ankitosh Kumar" className="home__img" />
                        <div className="home__avatar-badge">
                            <RiCodeSSlashLine /> MCA '24
                        </div>
                    </div>

                    <h1 className="home__name">Ankitosh Kumar</h1>
                    <h2 className="home__education">
                        <Typewriter 
                            words={[
                                "an Application Support Engineer",
                                "a Full Stack Software Developer",
                                "a Java & Spring Boot Specialist",
                                "a React & Next.js Developer",
                                "an Enterprise SQL & Database Specialist",
                                "a CDSCO Application Support Lead"
                            ]}
                            prefix="I'm "
                            typingSpeed={75}
                            deletingSpeed={35}
                            pauseDuration={2000}
                        />
                    </h2>

                    <p className="home__bio">
                        Computer Applications post-graduate (MCA) with hands-on experience supporting enterprise & government web applications (CDSCO & Tata Power), SQL database optimization, Java/Spring backends, and building modern full-stack web applications with React, Next.js & TypeScript.
                    </p>

                    <div className="home__tech-chips">
                        <span className="tech-chip">Java</span>
                        <span className="tech-chip">Spring Boot</span>
                        <span className="tech-chip">React.js</span>
                        <span className="tech-chip">Next.js</span>
                        <span className="tech-chip">TypeScript</span>
                        <span className="tech-chip">Node.js</span>
                        <span className="tech-chip">MSSQL</span>
                        <span className="tech-chip">PostgreSQL</span>
                    </div>

                    <HeaderSocials />

                    <div className="home__cta-buttons">
                        <a href="#portfolio" className="btn">
                            View Projects
                        </a>
                        <a href="#resume" className="btn btn-secondary">
                            Experience & Education
                        </a>
                        <a 
                            href={ResumePDF} 
                            target="_blank" 
                            rel="noreferrer" 
                            className="btn btn-resume"
                            title="Download Ankitosh Kumar Resume (PDF)"
                        >
                            <RiDownloadLine /> Download CV
                        </a>
                    </div>
                </div>

                {/* Developer Terminal / Code Preview Card */}
                <div className="hero__code-card">
                    <div className="code-card__header">
                        <div className="code-card__dots">
                            <span className="dot dot-red"></span>
                            <span className="dot dot-yellow"></span>
                            <span className="dot dot-green"></span>
                        </div>
                        <div className="code-card__tab">
                            <RiTerminalBoxLine className="tab-icon" /> ankitosh.dev.ts
                        </div>
                        <button 
                            className="code-card__copy" 
                            onClick={copyCodeSnippet}
                            title="Copy snippet"
                        >
                            {copied ? <><RiCheckLine /> Copied!</> : <><RiFileCopyLine /> Copy</>}
                        </button>
                    </div>

                    <pre className="code-card__body">
                        <code>
<span className="token-keyword">const</span> <span className="token-variable">softwareDeveloper</span>: <span className="token-type">EngineerProfile</span> = &#123;{'\n'}
{'  '}<span className="token-property">name</span>: <span className="token-string">"Ankitosh Kumar"</span>,{'\n'}
{'  '}<span className="token-property">location</span>: <span className="token-string">"Patna, Bihar, India"</span>,{'\n'}
{'  '}<span className="token-property">education</span>: &#123;{'\n'}
{'    '}<span className="token-property">mca</span>: <span className="token-string">"RCET Bhilai (73.4%) [2022-2024]"</span>,{'\n'}
{'    '}<span className="token-property">bca</span>: <span className="token-string">"MIT Pune (79.2%) [2018-2021]"</span>{'\n'}
{'  '}&#125;,{'\n'}
{'  '}<span className="token-property">currentRole</span>: &#123;{'\n'}
{'    '}<span className="token-property">company</span>: <span className="token-string">"E-Solutions IT Services Pvt. Ltd."</span>,{'\n'}
{'    '}<span className="token-property">client</span>: <span className="token-string">"CDSCO (Online National Drug Licensing)"</span>,{'\n'}
{'    '}<span className="token-property">focus</span>: <span className="token-string">"MSSQL, Java/Spring, Defect Resolution"</span>{'\n'}
{'  '}&#125;,{'\n'}
{'  '}<span className="token-property">highlightProjects</span>: [<span className="token-string">"WorkMate AI"</span>, <span className="token-string">"BAMS"</span>, <span className="token-string">"Clinic Care"</span>],{'\n'}
{'  '}<span className="token-property">portfolio</span>: <span className="token-string">"https://ankitosh-portfolio.vercel.app/"</span>,{'\n'}
{'  '}<span className="token-property">isReadyToCode</span>: <span className="token-boolean">true</span>{'\n'}
&#125;;
                        </code>
                    </pre>

                    <div className="code-card__footer">
                        <span className="footer-status">✓ Ready for Enterprise & Full-Stack Engineering</span>
                        <span className="footer-lang">TypeScript 5.x • Node.js</span>
                    </div>
                </div>
            </div>

            <ScrollDown />
            <Shapes />
        </section>
    );
};

export default Home;
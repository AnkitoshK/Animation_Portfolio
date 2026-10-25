import React from 'react';
import { RiFireLine, RiDatabase2Line, RiServerLine, RiAwardLine } from 'react-icons/ri';

const AboutBox = () => {
    return (
        <div className="about__boxes grid">
            <div className="about__box">
                <RiFireLine className='about__icon' />
                <div>
                    <h3 className="about__title">2+ Yrs</h3>
                    <span className="about__subtitle">Software & Support Exp</span>
                </div>
            </div>

            <div className="about__box">
                <RiServerLine className='about__icon' />
                <div>
                    <h3 className="about__title">5+</h3>
                    <span className="about__subtitle">Enterprise Platforms</span>
                </div>
            </div>

            <div className="about__box">
                <RiDatabase2Line className='about__icon' />
                <div>
                    <h3 className="about__title">100s+</h3>
                    <span className="about__subtitle">SQL Queries & Procs</span>
                </div>
            </div>

            <div className="about__box">
                <RiAwardLine className='about__icon' />
                <div>
                    <h3 className="about__title">73.4% / 79.2%</h3>
                    <span className="about__subtitle">MCA / BCA Academics</span>
                </div>
            </div>
        </div>
    );
};

export default AboutBox;
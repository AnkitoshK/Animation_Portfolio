import React from 'react';
import { FaGithub, FaHackerrank, FaLinkedinIn, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const HeaderSocials = () => {
    return (
        <div className='home__socials'>
            <a 
                href='https://github.com/AnkitoshK' 
                className='home__social-link' 
                target='_blank' 
                rel='noreferrer'
                title='GitHub Profile'
            >
                <FaGithub />
            </a>

            <a 
                href='https://www.linkedin.com/in/ankitosh-kumar-7682a91b6' 
                className='home__social-link' 
                target='_blank' 
                rel='noreferrer'
                title='LinkedIn Profile'
            >
                <FaLinkedinIn />
            </a>

            <a 
                href='https://www.hackerrank.com/profile/ankitosh_kumar' 
                className='home__social-link' 
                target='_blank' 
                rel='noreferrer'
                title='HackerRank Profile'
            >
                <FaHackerrank />
            </a>

            <a 
                href='mailto:ankitoshgupta4379@gmail.com' 
                className='home__social-link' 
                title='Send Email (ankitoshgupta4379@gmail.com)'
            >
                <FaEnvelope />
            </a>

            <a 
                href='tel:+918271311102' 
                className='home__social-link' 
                title='Call / WhatsApp (+91 8271311102)'
            >
                <FaPhoneAlt />
            </a>
        </div>
    );
};

export default HeaderSocials;

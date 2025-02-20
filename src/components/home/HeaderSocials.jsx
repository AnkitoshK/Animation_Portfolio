import React from 'react';
import { FaGithub, FaHackerrank, FaLinkedinIn } from 'react-icons/fa';
// import { SiHashnode } from 'react-icons/si'

const HeaderSocials = () => {
    return (
        <div className='home__socials'>
            <a href='https://github.com/AnkitoshK' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaGithub />
            </a>

            {/* <a href='https://hashnode.com/@gregsithole' className='home__social-link' target='_blank' rel='noreferrer'>
                <SiHashnode />
            </a> */}

            {/* <a href='https://dev.to/gregsithole' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaDev />
            </a> */}

            <a href='https://www.linkedin.com/in/ankitosh-kumar-7682a91b6/' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaLinkedinIn />
            </a>

            <a href='https://www.hackerrank.com/profile/ankitosh_kumar' className='home__social-link' target='_blank' rel='noreferrer'>
            <FaHackerrank />
            </a>

            {/* <a href='https://www.twitter.com/GregSithole' className='home__social-link' target='__blank' rel='noreferrer'>
                <FaTwitter />
            </a> */}
        </div>
    );
};

export default HeaderSocials;

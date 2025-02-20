import React from 'react';
import './Blog.css';

import Image1 from '../../assets/clinic.png';
import Image2 from '../../assets/data.png';

const Blog = () => {
    return (
        <section className="blog container section" id="blog">
            <h2 className="section__title">Latest Project</h2>

            <div className="blog__container grid">
                {/* First Project */}
                <div className="blog__card">
                    <div className="blog__thumb">
                        <a href="#"><span className="blog__category">React, Java</span></a>
                        <a href="#"><img src={Image1} alt="Clinic Care" className='blog__img' /></a>
                    </div>
                    <div className="blog__details">
                        <h3 className="blog__title">Clinic Care</h3>
                        <div className="blog__meta">
                            <span>10 January, 2025</span>
                            <span className="blog__dot">.</span>
                            <span>Ankitosh</span>
                        </div>
                    </div>
                </div>

                {/* Second Project */}
                <div className="blog__card">
                    <div className="blog__thumb">
                        <a href="#"><span className="blog__category">Vehicle Insurance</span></a>
                        <a href="#"><img src={Image2} alt="vehicle" className='blog__img' /></a>
                    </div>
                    <div className="blog__details">
                        <h3 className="blog__title">Vehicle Insurance</h3>
                        <div className="blog__meta">
                            <span>22 October, 2024</span>
                            <span className="blog__dot">.</span>
                            <span>Ankitosh</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Blog;

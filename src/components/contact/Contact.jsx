import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaHackerrank } from "react-icons/fa";
import { RiSendPlaneFill, RiTerminalBoxLine } from "react-icons/ri";

import "./Contact.css";
import "react-toastify/dist/ReactToastify.css";

const Contact = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const submitHandler = async (e) => {
        e.preventDefault();
        if (!name || !email || !subject || !message) {
            return toast.error("Please fill in all form fields.");
        }

        setLoading(true);

        const data = {
            name,
            email,
            subject,
            message,
        };

        emailjs
            .send(
                "service_oxs0vty",
                "template_rv353n4",
                data,
                "hLrhsvX71XUcmPBE0"
            )
            .then(
                (result) => {
                    setLoading(false);
                    toast.success("Thank you! Your message has been sent successfully.");
                    setName("");
                    setEmail("");
                    setSubject("");
                    setMessage("");
                },
                (error) => {
                    setLoading(false);
                    console.log(error);
                    toast.error("Message delivery failed. Please send an email directly to ankitoshgupta4379@gmail.com.");
                }
            );
    };

    return (
        <section className="contact container section" id="contact">
            <span className="section__tag">07 // Connect & Inquiries</span>
            <h2 className="section__title">Get In Touch</h2>

            <div className="contact__container grid">
                <div className="contact__info">
                    <h3 className="contact__title">Let's discuss engineering & opportunities</h3>
                    <p className="contact__details">
                        Whether you have an inquiry regarding full-stack software development, SQL database engineering, application support, or exciting career opportunities, feel free to drop a message or reach out directly!
                    </p>

                    <div className="contact__cards">
                        <a href="mailto:ankitoshgupta4379@gmail.com" className="contact__card">
                            <div className="contact__card-icon">
                                <FaEnvelope />
                            </div>
                            <div className="contact__card-content">
                                <span className="contact__card-label">Email</span>
                                <span className="contact__card-val">ankitoshgupta4379@gmail.com</span>
                            </div>
                        </a>

                        <a href="tel:+918271311102" className="contact__card">
                            <div className="contact__card-icon">
                                <FaPhoneAlt />
                            </div>
                            <div className="contact__card-content">
                                <span className="contact__card-label">Phone & WhatsApp</span>
                                <span className="contact__card-val">+91 8271311102</span>
                            </div>
                        </a>

                        <div className="contact__card">
                            <div className="contact__card-icon">
                                <FaMapMarkerAlt />
                            </div>
                            <div className="contact__card-content">
                                <span className="contact__card-label">Location</span>
                                <span className="contact__card-val">Patna, Bihar, India</span>
                            </div>
                        </div>
                    </div>

                    <div className="contact__social-strip">
                        <span className="strip-title">Developer Handles:</span>
                        <div className="strip-links">
                            <a href="https://github.com/AnkitoshK" target="_blank" rel="noreferrer" className="strip-btn" title="GitHub">
                                <FaGithub /> GitHub
                            </a>
                            <a href="https://www.linkedin.com/in/ankitosh-kumar-7682a91b6" target="_blank" rel="noreferrer" className="strip-btn" title="LinkedIn">
                                <FaLinkedinIn /> LinkedIn
                            </a>
                            <a href="https://www.hackerrank.com/profile/ankitosh_kumar" target="_blank" rel="noreferrer" className="strip-btn" title="HackerRank">
                                <FaHackerrank /> HackerRank
                            </a>
                        </div>
                    </div>
                </div>

                <div className="contact__form-wrapper">
                    <form onSubmit={submitHandler} className="contact__form">
                        <div className="form__header">
                            <RiTerminalBoxLine className="form__header-icon" />
                            <span>Quick Message Dispatcher</span>
                        </div>

                        <div className="contact__form-group">
                            <div className="contact__form-div">
                                <label className="form-label">Your Name</label>
                                <input
                                    type="text"
                                    className="contact__form-input"
                                    placeholder="e.g. John Doe"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>

                            <div className="contact__form-div">
                                <label className="form-label">Your Email</label>
                                <input
                                    type="email"
                                    className="contact__form-input"
                                    placeholder="e.g. john@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="contact__form-div">
                            <label className="form-label">Subject</label>
                            <input
                                type="text"
                                className="contact__form-input"
                                placeholder="e.g. Opportunity Discussion / Project Collaboration"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                            />
                        </div>

                        <div className="contact__form-div contact__form-area">
                            <label className="form-label">Message</label>
                            <textarea
                                cols="30"
                                rows="6"
                                className="contact__form-input"
                                placeholder="Hi Ankitosh, I'd like to talk about..."
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            ></textarea>
                        </div>

                        <button type="submit" className="btn btn-send" disabled={loading}>
                            <RiSendPlaneFill /> {loading ? "Dispatching..." : "Send Message"}
                        </button>
                    </form>
                </div>
            </div>

            <footer className="footer">
                <div className="footer__content">
                    <p className="footer__text">
                        Designed & Developed by <strong>Ankitosh Kumar</strong> • Built with React & TypeScript
                    </p>
                    <p className="footer__subtext">
                        MCA '24 | Application Engineer @ CDSCO Project | Patna, Bihar, India
                    </p>
                </div>
            </footer>

            <ToastContainer position="bottom-right" theme={props.theme} />
        </section>
    );
};

export default Contact;

import React, { useState, useEffect } from 'react';
import './Typewriter.css';

const DEFAULT_WORDS = [
    "an Application Support Engineer",
    "a Full Stack Software Developer",
    "a Java & Spring Boot Specialist",
    "a React & Next.js Developer",
    "an Enterprise SQL & Database Specialist",
    "a CDSCO Application Support Lead"
];

const Typewriter = ({
    words = DEFAULT_WORDS,
    typingSpeed = 75,
    deletingSpeed = 35,
    pauseDuration = 2000,
    prefix = "I'm "
}) => {
    const [wordIndex, setWordIndex] = useState(0);
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return;

        const currentWord = words[wordIndex % words.length];

        let timer;
        if (!isDeleting) {
            // Typing forward
            if (text.length < currentWord.length) {
                timer = setTimeout(() => {
                    setText(currentWord.substring(0, text.length + 1));
                }, typingSpeed);
            } else {
                // Word completely typed out, pause before deleting
                timer = setTimeout(() => {
                    setIsDeleting(true);
                }, pauseDuration);
            }
        } else {
            // Deleting backward
            if (text.length > 0) {
                timer = setTimeout(() => {
                    setText(currentWord.substring(0, text.length - 1));
                }, deletingSpeed);
            } else {
                // Deletion finished, advance to next word
                setIsDeleting(false);
                setWordIndex((prev) => (prev + 1) % words.length);
            }
        }

        return () => clearTimeout(timer);
    }, [text, isDeleting, wordIndex, isPaused, words, typingSpeed, deletingSpeed, pauseDuration]);

    return (
        <span 
            className="typewriter"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            title="Hover to pause animation"
            aria-label={`${prefix}${words.join(', ')}`}
        >
            {prefix && <span className="typewriter__static">{prefix}</span>}
            <span className="typewriter__dynamic">{text}</span>
            <span className="typewriter__cursor" aria-hidden="true">|</span>
        </span>
    );
};

export default Typewriter;

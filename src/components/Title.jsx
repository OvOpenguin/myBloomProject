import React, { useEffect, useRef } from 'react';
import '../sass/title.scss';

const AnimatedTitle = ({ text, tag, className }) => {
    const titleRef = useRef(null);
    const Tag = tag || 'h2'; // 設定預設標籤為 h2

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (titleRef.current) {
            observer.observe(titleRef.current);
        }

        return () => {
            if (titleRef.current) {
                observer.unobserve(titleRef.current);
            }
        };
    }, []);

    const spans = text.split('').map((char, index) => (
        <span key={index} style={{ animationDelay: `${index * 0.1}s` }}>
            {char}
        </span>
    ));

    return (
        <Tag ref={titleRef} className={`animated-title ${className || ''}`}>
            {spans}
        </Tag>
    );
};

export default AnimatedTitle;
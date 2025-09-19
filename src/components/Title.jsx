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

    const spans = text.split('').map((char, index) => {
        // 如果字元是空白，則替換為不換行空白字元 `\u00A0`
        const content = char === ' ' ? '\u00A0' : char;
        return (
            <span key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                {content}
            </span>
        );
    });

    return (
        <Tag ref={titleRef} className={`animated-title ${className || ''}`}>
            {spans}
        </Tag>
    );
};

export default AnimatedTitle;
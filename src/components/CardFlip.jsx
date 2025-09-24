import React, { useState } from 'react';
import '../sass/card.scss';

const Card = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div
            className={`card-container ${isFlipped ? 'is-flipped' : ''}`}
            onClick={handleFlip}
        >
            <div className="card-inner">
                <div className="card-front"><img src="/wall/wall3-sm.jpg" alt="冠軍圖片" /></div>
                <div className="card-back">
                    <h3>陽光下的金色詩篇</h3>
                    <p>
                        攝影者：Emma
                        <br />每次拿起相機，我都想捕捉大自然中最純粹、最動人的時刻。這一天，我遇見了這片盛開的加州罌粟。
                        <br />它們在湛藍的天空下，如同跳動的火焰，又似灑落在大地上的黃金。
                        我選擇了這個低角度，讓花朵在畫面中充滿生命力，而背後模糊的藍天則烘托出它們的鮮活。每一朵花都向著陽光伸展，仿佛在訴說著生命的喜悅與希望。
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Card;
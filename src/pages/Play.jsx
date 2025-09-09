import React, { useState } from "react";
// My sass
import "../sass/play.scss"

// 圖片匯入
import 開始遊戲 from "../images/play/play-start.svg"
import 結束遊戲 from "../images/play/play-end.svg"
import 蝴蝶 from "../images/play/butterfly-og.png"
import 橘線 from "../images/play/play-line-orange.svg"
import t2 from "../images/play/t2.svg"
import t7 from "../images/play/t7.svg"
import t12 from "../images/play/t12.svg"
import l1 from "../images/play/play-line-1.svg"
import l2 from "../images/play/play-line-2.svg"





// 建立題庫陣列物件資料
const questions = [
    {
        id: 1,
        silhouette: "./play/桃花shadow.svg",
        image: "./play/桃花real.svg",
        options: ["玫瑰", "桃花", "牡丹"],
        answer: "桃花",
    },
    {
        id: 2,
        silhouette: "./play/茶花shadow.svg",
        image: "./play/茶花real.svg",
        options: ["鬱金香", "茶花", "菊花"],
        answer: "茶花",
    },
    {
        id: 3,
        silhouette: "./play/國蘭shadow.svg",
        image: "./play/國蘭real.svg",
        options: ["鬱金香", "國蘭", "菊花"],
        answer: "國蘭",
    },
    {
        id: 4,
        silhouette: "./play/play-flowerBlack-1.png",
        image: "./play/play-flowerReal-1.png",
        options: ["鬱金香", "向日葵", "菊花"],
        answer: "向日葵",
    },
    {
        id: 5,
        silhouette: "./play/play-flowerBlack-1.png",
        image: "./play/play-flowerReal-1.png",
        options: ["鬱金香", "向日葵", "菊花"],
        answer: "向日葵",
    },
];

// 隨機抽題亂數
const getRandomQuestion = () => {
    const index = Math.floor(Math.random() * questions.length);
    return index;
};



const Play = () => {

    const [gameStarted, setGameStarted] = useState(false);
    const [currentQ, setCurrentQ] = useState(getRandomQuestion());
    const [showAnswer, setShowAnswer] = useState(false);
    const [wrongAnswers, setWrongAnswers] = useState([]);

    return (
        <>
            <div className='playWrap'>

                {/* 裝飾 */}
                <div className="t l1"><img src={l1} alt="黃線" /></div>
                <div className="t l2"><img src={l2} alt="紫線" /></div>
                <div className="t t2"><img src={t2} alt="t2" /></div>
                <div className="t t7"><img src={t7} alt="t7" /></div>
                <div className="t t12"><img src={t12} alt="t12" /></div>


                {/* 說明遊戲 */}
                <div className="playExplain">

                    {/* 裝飾 */}
                    <div className="pButterfly"><img src={蝴蝶} alt="蝴蝶" /></div>
                    {/* <div className="pBline"><img src={l3} alt="蝴蝶軌跡" /></div> */}
                    <svg
                        className="pBline"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 113 101"
                        fill="none">
                        <filter id="rough">
                            <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="4" result="noise" />
                            <feDisplacementMap in2="noise" in="SourceGraphic" scale="5" />
                        </filter>
                        <path d="M0 2C40 18.5 46.4619 29.1748 56 55.9999C64.1781 78.9999 45.5234 88.9999 28.4998 55.9999C5.02787 10.4999 86 48.5 112.5 101"
                            stroke="#69C9A0"
                            stroke-width="5" />
                    </svg>


                    <div><h2>看花影 猜花卉</h2></div>
                    <div><h3>Hide & seek</h3></div>
                    <p>花的姿態千變萬化，有些光靠剪影也能辨認。
                        <br />透過這個互動遊戲，挑戰你的植物觀察力！
                        <br />仔細看花瓣形狀、葉序特徵，
                        <br />你是否能從黑影中，一眼認出這朵花的名字？</p>

                    {/* 下方開始/結束按鍵 */}
                    <div className='playBtn'>
                        {!gameStarted
                            ? (<div className="start-btn" onClick={() => {
                                setGameStarted(true);
                                setCurrentQ(getRandomQuestion());
                                setShowAnswer(false);
                                setWrongAnswers([]);
                            }}><img src={開始遊戲} alt="開始遊戲" /></div>)
                            : (<div className="end-btn" onClick={() => {
                                setGameStarted(false);  // 回到開始畫面
                                setShowAnswer(false);   // 重置狀態
                                setWrongAnswers([]);    // 清空錯誤答案
                            }}><img src={結束遊戲} alt="結束遊戲" /></div>)}
                    </div>
                </div>


                {/* 遊戲圖片+選項 */}
                <div className='questions'>
                    {/* 剪影圖片載入區 */}
                    {/* showAnswer代表是否已有答案顯示，初始為不顯示false，!反轉後為true => 顯示剪影 */}
                    {/* 未答對 => 顯示剪影 */}
                    <figure>
                        {!showAnswer ? (
                            <img src={questions[currentQ].silhouette} alt="剪影" />
                        ) : (
                            <img src={questions[currentQ].image} alt="真實花" />
                        )}
                    </figure>

                    {/* 裝飾 */}
                    <div className="p-line-o"><img src={橘線} alt="橘線" /></div>

                    {/* 選項區 */}
                    {/* 當gameStarted為true時，選項才會出現。 */}
                    <div className="answer">
                        {gameStarted ? (
                            <>
                                {!showAnswer &&
                                    questions[currentQ].options.map((opt, i) => (
                                        <div
                                            key={i}
                                            className={`option ${wrongAnswers.includes(opt) ? "crayon" : ""}`}
                                            onClick={() => {
                                                if (opt === questions[currentQ].answer) {
                                                    setShowAnswer(true);
                                                } else {
                                                    setWrongAnswers([...wrongAnswers, opt]);
                                                }
                                            }}
                                        >
                                            {opt}
                                        </div>
                                    ))}
                                {showAnswer && (
                                    <div
                                        className="next"
                                        onClick={() => {
                                            setCurrentQ(getRandomQuestion());
                                            setShowAnswer(false);
                                            setWrongAnswers([]);
                                        }}
                                    >
                                        下一題
                                    </div>
                                )}
                            </>
                        ) : (
                            <div className="placeholder"></div>)}
                    </div>



                </div>
            </div >
        </>

    )
}

export default Play
import React, { useState } from "react";
import Nav from '../components/Nav'

import Title from "../components/Title";


// My sass
import "../sass/play.scss"

// 圖片匯入
import playStart from "../images/play/play-start.svg"
import playEnd from "../images/play/play-end.svg"
import playbutterfly from "../images/play/butterfly-og.png"
import orangeline from "../images/play/play-line-orange.svg"
import t2 from "../images/play/t2.svg"
import t7 from "../images/play/t7.svg"
import t12 from "../images/play/t12.svg"
import l1 from "../images/play/play-line-1.svg"
import l2 from "../images/play/play-line-2.svg"





// 建立題庫陣列物件資料
const questions = [
    {
        id: 1,
        silhouette: "./play/ps1.png",
        image: "./play/pr1.png",
        options: ["菊花", "波斯菊", "咸豐草"],
        answer: "波斯菊",
    },
    {
        id: 2,
        silhouette: "./play/ps2.png",
        image: "./play/pr2.png",
        options: ["洛神", "扶桑", "阿勒勃"],
        answer: "扶桑",
    },
    {
        id: 3,
        silhouette: "./play/ps3.png",
        image: "./play/pr3.png",
        options: ["櫻花", "桃花", "梅花"],
        answer: "梅花",
    },
    {
        id: 4,
        silhouette: "./play/ps4.png",
        image: "./play/pr4.png",
        options: ["蓮花", "杜鵑", "木蓮"],
        answer: "蓮花",
    },
    {
        id: 5,
        silhouette: "./play/ps5.png",
        image: "./play/pr5.png",
        options: ["芍藥", "水仙", "萱草"],
        answer: "萱草",
    },
    {
        id: 6,
        silhouette: "./play/ps6.png",
        image: "./play/pr6.png",
        options: ["桃花", "九重葛", "山櫻花"],
        answer: "山櫻花",
    },
    {
        id: 7,
        silhouette: "./play/ps7.png",
        image: "./play/pr7.png",
        options: ["茶花", "菊花", "曇花 "],
        answer: "菊花",
    },
    {
        id: 8,
        silhouette: "./play/ps8.png",
        image: "./play/pr8.png",
        options: ["阿勒勃", "羽扇豆", "風信子 "],
        answer: "羽扇豆",
    },
    {
        id: 9,
        silhouette: "./play/ps9.png",
        image: "./play/pr9.png",
        options: ["韭菜", "大蔥", "洋蔥"],
        answer: "韭菜",
    },
    {
        id: 10,
        silhouette: "./play/ps10.png",
        image: "./play/pr10.png",
        options: ["雛菊", "澎蜞菊", "向日葵"],
        answer: "向日葵",
    },
    {
        id: 11,
        silhouette: "./play/ps11.png",
        image: "./play/pr11.png",
        options: ["桃花", "梨花", "海棠"],
        answer: "桃花",
    },
    {
        id: 12,
        silhouette: "./play/ps12.png",
        image: "./play/pr12.png",
        options: ["芍藥", "玫瑰", "茶花"],
        answer: "茶花",
    },
    {
        id: 13,
        silhouette: "./play/ps13.png",
        image: "./play/pr13.png",
        options: ["杏花", "秋海棠", "波斯菊"],
        answer: "波斯菊",
    },
    {
        id: 14,
        silhouette: "./play/ps14.png",
        image: "./play/pr14.png",
        options: ["國蘭", "小精靈", "水仙"],
        answer: "國蘭",
    },
    {
        id: 15,
        silhouette: "./play/ps15.png",
        image: "./play/pr15.png",
        options: ["百O怪", "鬱金香", "一攤水"],
        answer: "鬱金香",
    },
    {
        id: 16,
        silhouette: "./play/ps16.png",
        image: "./play/pr16.png",
        options: ["梅花", "杏花", "百O怪"],
        answer: "百O怪",
    }
];

// 隨機抽題函式，避免選到同一題
const getRandomQuestion = (previousIndex) => {
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * questions.length);
    } while (newIndex === previousIndex); // 只要新索引和上一題的索引相同，就繼續產生
    return newIndex;
};



const Play = () => {

    const [gameStarted, setGameStarted] = useState(false);
    const [currentQ, setCurrentQ] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);
    const [wrongAnswers, setWrongAnswers] = useState([]);

    // 處理遊戲開始的邏輯
    const startGame = () => {
        const initialIndex = getRandomQuestion(-1); // 第一次開始時，傳入一個不可能的索引，例如 -1
        setGameStarted(true);
        setCurrentQ(initialIndex);
        setShowAnswer(false);
        setWrongAnswers([]);
    };

    // 處理下一題的邏輯
    const nextQuestion = () => {
        const newIndex = getRandomQuestion(currentQ); // 傳入目前題目的索引，讓函式避開它
        setCurrentQ(newIndex);
        setShowAnswer(false);
        setWrongAnswers([]);
    };

    // 處理playEnd的邏輯
    const endGame = () => {
        setGameStarted(false);
        setShowAnswer(false);
        setWrongAnswers([]);
    };


    return (
        <>
            <Nav></Nav>
            <div id='playWrap'>

                {/* 裝飾 */}
                <div className="t l1"><img src={l1} alt="黃線" /></div>
                {/* <div className="t l2"><img src={l2} alt="紫線" /></div> */}
                <div className="t t2"><img src={t2} alt="t2" /></div>
                <div className="t t7"><img src={t7} alt="t7" /></div>
                <div className="t t12"><img src={t12} alt="t12" /></div>


                {/* 說明遊戲 */}
                <div className="playExplain">

                    {/* 裝飾 */}
                    <div className="pButterfly"><img src={playbutterfly} alt="playbutterfly" /></div>
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

                    <Title text="看花影 猜花卉" tag="h2" className="h2-style" />
                    <Title text="HIDE & SEEK" tag="h3" className="h3-style" />
                    <p>花的姿態千變萬化，有些光靠剪影也能辨認。
                        <br />透過這個互動遊戲，挑戰你的植物觀察力！
                        <br />仔細看花瓣形狀、葉序特徵，
                        <br />你是否能從黑影中，一眼認出這朵花的名字？</p>

                    {/* 下方開始/結束按鍵 */}
                    <div className='playBtn'>
                        {!gameStarted
                            ? (<div className="start-btn" onClick={startGame}><img src={playStart} alt="playStart" /></div>)
                            : (<div className="end-btn" onClick={endGame}><img src={playEnd} alt="playEnd" /></div>)}
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
                            <>
                                <img src={questions[currentQ].image} alt="真實花" />
                                <figcaption className="correct-answer">
                                    正確答案：{questions[currentQ].answer}
                                </figcaption>
                            </>
                        )}
                    </figure>

                    {/* 裝飾 */}
                    <div className="p-line-o"><img src={orangeline} alt="orangeline" /></div>

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
                                        onClick={nextQuestion}
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
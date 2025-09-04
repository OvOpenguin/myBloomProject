
import "../sass/play.scss"

// 圖片匯入
import 開始遊戲 from "../images/play/play-start.svg"
import 結束遊戲 from "../images/play/play-end.svg"
import 蝴蝶 from "../images/play/butterfly-og.png"
import 橘線 from "../images/play/play-line-orange.svg"
import t2 from "../images/play/t2.svg"
import t7 from "../images/play/t7.svg"
import t12 from "../images/play/t12.svg"
import p1 from "../images/home/homewall1.avif"
import p2 from "../images/home/homewall2.avif"
import p3 from "../images/home/homewall3.avif"
import p4 from "../images/home/homewall4.avif"
import p5 from "../images/home/homewall5.avif"
import p6 from "../images/home/homewall6.avif"
import p7 from "../images/home/homewall7.avif"

// 呼叫useState
import React, { useState } from "react";


// 建立題庫陣列物件資料
const questions = [
    {
        id: 1,
        silhouette: "./play/play-flowerBlack-1.png",
        image: "./play/play-flowerReal-1.png",
        options: ["玫瑰", "百合", "牡丹"],
        answer: "玫瑰",
    },
    {
        id: 2,
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
            
                {/* 說明遊戲 */}
                <div className="playExplain">

                    {/* 裝飾 */}
                    <div className="pButterfly"><img src={蝴蝶} alt="蝴蝶" /></div>
                    <div className="t t2"><img src={t2} alt="t2" /></div>
                    <div className="t t7"><img src={t7} alt="t7" /></div>
                    <div className="t t12"><img src={t12} alt="t12" /></div>

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
                    {gameStarted && (<div className="answer">
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

                        {/* 下一題按鈕 */}
                        {showAnswer && (<div className="next" onClick={() => {
                            setCurrentQ(getRandomQuestion());
                            setShowAnswer(false);
                            setWrongAnswers([]);
                        }}>下一題</div>)}
                    </div>)}

                </div>

                {/* 右側裝飾 */}
                <div className="playwall">
                    <div className="p p1"><img src={p1} alt="p1" /></div>
                    <div className="p p2"><img src={p2} alt="p2" /></div>
                    <div className="p p5"><img src={p5} alt="p5" /></div>
                </div>



            </div >
        </>

    )
}

export default Play
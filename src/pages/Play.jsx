import "../sass/play.scss"
import Nav from '../components/Nav'
import Footer from '../components/Footer'

import 剪影 from "../images/play/play-flowerBlack-1.webp"
import 開始遊戲 from "../images/play/play-start.svg"
import 結束遊戲 from "../images/play/play-end.svg"
import 背景 from "../images/play/play-bg-yg.svg"
import 蝴蝶 from "../images/play/butterfly-og.png"


const Play = () => {
    return (
        <>
            <div className='playWrap'>

                {/* 說明遊戲 */}
                <div className="playExplain">
                    {/* 裝飾 */}
                    <div className="pButterfly"><img src={蝴蝶} alt="蝴蝶" /></div>
                        <div><h2>看花影 猜花卉</h2></div>
                        <div><h3>Hide & seek</h3></div>
                        <p>花的姿態千變萬化，有些光靠剪影也能辨認。
                            <br />透過這個互動遊戲，挑戰你的植物觀察力！
                            <br />仔細看花瓣形狀、葉序特徵，
                            <br />你是否能從黑影中，一眼認出這朵花的名字？</p>
                    {/* 下方開始/結束按鍵 */}
                    <div className='playBtn'>
                        <div><img src={開始遊戲} alt="開始遊戲" /></div>
                        <div><img src={結束遊戲} alt="結束遊戲" /></div>

                    </div>
                </div>

                {/* 遊戲圖片+選項 */}
                <div className='questions'>
                    {/* 剪影圖片載入 */}
                    <figure><img src={剪影} alt="花" /></figure>

                    {/* 圖片按鍵 */}
                    <div className='answer'>
                        {/* 選項項目 */}
                        <div className='a1'>玫瑰</div>
                        <div className='a2'>雛菊</div>
                        <div className='a3'>百合</div>
                        <div className="next">下一題</div>
                    </div>
                    {/* 下一題 */}

                </div>
            </div>
        </>

    )
}

export default Play
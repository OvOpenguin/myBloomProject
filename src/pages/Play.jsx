import "../sass/play.scss"
import Nav from '../components/Nav'
import Footer from '../components/Footer'

import 剪影 from "../images/play/play-flowerBlack-1.webp"
import 開始遊戲 from "../images/play/play-start.svg"
import 結束遊戲 from "../images/play/play-stop.svg"
import 背景 from "../images/play/play-bg-yg.svg"

const Play = () => {
    return (
        <>
            <Nav></Nav>
            <div className='playWrap'>
                {/* 說明遊戲 */}
                
                <div className="playExplain">

                    <div className="playH2">看花影 猜花卉</div>

                    {/* 為了標題定位使用給上方一個div */}
                    <div className="playRule">
                        {/* 上方說明 */}
                        <div className="rule">
                            {/* 說明遊戲規則 */}
                            <p>花的姿態千變萬化，有些光靠剪影也能辨認。
                                <br />透過這個互動遊戲，挑戰你的植物觀察力！
                                <br />仔細看花瓣形狀、葉序特徵，
                                <br />你是否能從黑影中，一眼認出這朵花的名字？</p>
                        </div>
                    </div>

                    {/* 下方開始/結束按鍵 */}
                    <div className='playBtn'>
                        <div c><img src={開始遊戲} alt="開始遊戲" /></div>
                        <div><img src={結束遊戲} alt="結束遊戲" /></div>
                    </div>
                </div>

                {/* 遊戲圖片+選項 */}
                <div className='questions'>

                    {/* 圖片載入 */}
                    <div className="play-bg"><img src={背景} alt="背景" /></div>
                    <figure><img src={剪影} alt="花" /></figure>

                    {/* 圖片按鍵 */}
                    <div className='answer'>
                        {/* 選項項目 */}
                        
                        <div className='a1'>玫瑰</div>
                        <div className='a2'>雛菊</div>
                        <div className='a3'>百合</div>
                        {/* 下一題 */}
                        <div className="next">下一題</div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>

    )
}

export default Play
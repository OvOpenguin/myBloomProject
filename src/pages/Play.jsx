import "../sass/play.scss"
import Nav from '../components/Nav'
import Footer from '../components/Footer'

import 剪影 from "../images/互動遊戲-圖片-花卉剪影.svg"
const Play = () => {
    return (
        <>
            <Nav></Nav>
            <div className='playWrap'>
                {/* 說明遊戲 */}
                <div className="playH2">看花影 猜花卉</div>

                <div className="playExplain">

                    {/* 為了標題定位使用給上方一個div */}
                    <div className="upExplain">
                        {/* 上方說明 */}
                        <div className="rules">
                            {/* 說明遊戲規則 */}
                            <p>花的姿態千變萬化，有些光靠剪影也能辨認。
                                <br />透過這個互動遊戲，挑戰你的植物觀察力！
                                <br />仔細看花瓣形狀、葉序特徵，
                                <br />你是否能從黑影中，一眼認出這朵花的名字？</p>
                        </div>
                    </div>

                    {/* 下方開始/結束按鍵 */}
                    <div className='startBtn'>
                        <div className="btnS">開始遊戲</div>
                        <div className="btnE">結束遊戲</div>
                    </div>

                </div>

                {/* 遊戲圖片+選項 */}
                <div className='questions'>

                    {/* 圖片載入 */}
                    <figure><img src={剪影} alt="花" /></figure>

                    {/* 圖片按鍵 */}
                    <div className='answer'>
                        {/* 選項項目 */}
                        <div className='a1'>1</div>
                        <div className='a2'>2</div>
                        <div className='a3'>3</div>
                        {/* 下一題 */}
                        <div>下一題</div>
                    </div>

                </div>
            </div>
            <Footer></Footer>
        </>

    )
}

export default Play
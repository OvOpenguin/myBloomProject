import "../sass/home.scss"
import 北花冊 from "../images/北花冊.webp"
import 大花 from "../images/heroFlower.svg"
import 貼紙花1 from "../images/首頁-貼紙花.webp"
import 活動照片 from "../images/首頁-最新消息-活動圖片.webp"
import 花卉介紹 from "../images/底圖_花卉介紹.png"
import 花卉遊戲 from "../images/底圖_花卉遊戲.png"
import 書 from "../images/書.svg"
import 票選1 from '../images/首頁-票選1-框.png'
import 票選2 from '../images/首頁-票選2-框.png'
import 票選3 from '../images/首頁-票選3-框.png'
import 票選4 from '../images/首頁-票選4-框.png'
import 王冠 from '../images/王冠.svg'
import 首頁消息花 from '../images/首頁消息-花.svg'



const App = () => {
    return (
        <>
            <main>
                <section className="hero">
                    <div className="name"><img src={北花冊} alt="北花冊" /><p>Bloomchure</p></div>
                    <div className="heroFlower"><img src={大花} alt="大花" /></div>
                    <p className="slogan">北區賞花季，一頁收藏所有花事</p>
                </section>

                <section className="activity1">
                    <h2>近期活動</h2>
                    <h3>recent events</h3>
                    {/* 近期活動切換 */}
                    <div className="gallery">
                        <div className="icon">left 切換鍵</div>

                        <div>
                            <div></div>
                            <img className="f1" src={貼紙花1} alt="花1" />
                            <h4>花季活動名稱</h4>
                        </div>
                        <div>
                            <img className="f2" src={貼紙花1} alt="花1" />
                            <h4>花季活動名稱</h4>
                        </div>
                        <div>
                            <img className="f1" src={貼紙花1} alt="花1" />
                            <h4>花季活動名稱</h4>
                        </div>

                        <div className="icon">right切換鍵</div>

                    </div>

                    <div className="btn">地圖搜尋→</div>
                </section>

                <section>
                    <div className="IndexNews">
                        <div className="newsF"><img src={首頁消息花} alt="花" /></div>
                        {/* 左側-消息列表 */}
                        <div className="newsList">
                            <h2>最新消息 News </h2>
                            <ul>
                                <li>
                                    <div className="tag">活動</div>
                                    <div className="listContent">
                                        <a href="#">荷與睡蓮誰美? 北投公園一次看</a>
                                        <time>2025-12-31</time>
                                    </div>
                                </li>
                                <li>
                                    <div className="tag">活動</div>
                                    <div className="listContent">
                                        <a href="#">荷與睡蓮誰美? 北投公園一次看</a>
                                        <time >2025-12-31</time>
                                    </div>
                                </li>
                                <li>
                                    <div className="tag">活動</div>
                                    <div className="listContent">
                                        <a href="#">荷與睡蓮誰美? 北投公園一次看</a>
                                        <time >2025-12-31</time>
                                    </div>
                                </li>
                            </ul>
                            <div className="btn">更多活動</div>
                        </div>

                    </div>

                </section>


                <section>
                    <div className="IndexIntroFlower">
                        {/* 左側-圖片按鈕 */}
                        <div className="click">

                            <div className="leftPic"><a href="#"><img src={花卉介紹} alt="花卉介紹" /></a></div>

                            <div className="rightPic"><a href="#"><img src={花卉遊戲} alt="花卉遊戲" /></a></div>
                        </div>

                        {/* 右側-標題圖示 */}
                        <div className="intro">
                            <h2>認識花卉</h2>
                            <h3>Flower Story</h3>
                            <div className="book"><img src={書} alt="書" /></div>
                        </div>
                    </div>
                </section>

                <section className="IndexVote">
                    {/* 左側-標題圖示 */}
                    <div className="voteTitle">
                        <h2>花牆票選</h2>
                        <h3>Popularity vote</h3>
                        <div className="arrow" >按鈕</div>
                        <div className="crown"><img src={王冠} alt="王冠" /></div>
                    </div>

                    {/* 右側-花牆切換 */}

                    <div className="wall">
                        <figure><img src={票選1} alt="票選1" /></figure>
                        <figure><img src={票選2} alt="票選2" /></figure>
                        <figure><img src={票選3} alt="票選3" /></figure>
                        <figure><img src={票選4} alt="票選4" /></figure>
                    </div>
                </section>
            </main >
        </>
    )
}

export default App
import "../css/home.css"
import 北花冊 from "../images/北花冊.svg"
import 大花 from "../images/heroFlower.svg"
import 貼紙花1 from "../images/貼紙花1.svg"
import 活動照片 from "../images/活動照片.svg"
import 花卉介紹 from "../images/底圖_花卉介紹.svg"
import 花卉遊戲 from "../images/底圖_花卉遊戲.svg"
import 書 from "../images/書.svg"



const App = () => {
    return (
        <>
            <main>
                <section className="hero">
                    <div className="name"><img src={北花冊} alt="北花冊" /><p>Bloomchure</p></div>
                    <div className="heroFlower"><img src={大花} alt="大花" /></div>
                    <p className="slogan">北區賞花季，一頁收藏所有花事</p>
                </section>

                <section className="activity">
                    <h2>近期活動</h2>
                    <h3>recent events</h3>
                    {/* 近期活動切換 */}
                    <div className="gallery">
                        <div className="icon">left 切換鍵</div>

                        <div className="pic p1">
                            <img className="f1" src={貼紙花1} alt="花1" />
                            <h4>花季活動名稱</h4>
                        </div>
                        <div className="pic p2">
                            <img className="f1" src={貼紙花1} alt="花1" />
                            <h4>花季活動名稱</h4>
                        </div>
                        <div className="pic p3">
                            <img className="f1" src={貼紙花1} alt="花1" />
                            <h4>花季活動名稱</h4>
                        </div>

                        <div className="icon">right切換鍵</div>

                    </div>

                    <div className="btn">地圖搜尋→</div>
                </section>

                <section className="news">
                    {/* 左側-消息列表 */}
                    <div className="newsList">
                        <h2>最新消息 NEWS</h2>

                        <ul>
                            <li>
                                <div className="tag">活動</div>
                                <a href="#">荷與睡蓮誰美? 北投公園一次看</a>
                                <time datetime="2025-12-31">2025-12-31</time>
                            </li>
                            <li>
                                <div className="tag">活動</div>
                                <a href="#">荷與睡蓮誰美? 北投公園一次看</a>
                                <time datetime="2025-12-31">2025-12-31</time>
                            </li>
                            <li>
                                <div className="tag">活動</div>
                                <a href="#">荷與睡蓮誰美? 北投公園一次看</a>
                                <time datetime="2025-12-31">2025-12-31</time>
                            </li>
                            <li>
                                <div className="tag">活動</div>
                                <a href="#">荷與睡蓮誰美? 北投公園一次看</a>
                                <time datetime="2025-12-31">2025-12-31</time>
                            </li>
                        </ul>
                        <div className="btn">更多活動</div>
                    </div>


                    {/* 右側-消息圖片 */}
                    <div className="newsPic"><img src={活動照片} alt="活動照片" /></div>
                </section>

                <section className="introFlower">

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
                </section>

                <section className="vote">
                    {/* 左側-標題圖示 */}
                    <div className="voteTitle">
                        <h2>花牆票選</h2>
                        <h3>Popularity vote</h3>
                        <div>按鈕</div>
                        <div className="crown"><img src="#" alt="王冠" /></div>
                    </div>

                    {/* 右側-花牆切換 */}
                    <div className="wall">
                        <div><img src="#" alt="花圖1" /></div>
                        <div><img src="#" alt="花圖1" /></div>
                        <div><img src="#" alt="花圖1" /></div>
                        <div><img src="#" alt="花圖1" /></div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default App
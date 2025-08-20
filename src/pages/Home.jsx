import "../sass/home.scss"
import 北花冊 from "../images/home/北花冊.webp"
import 大花 from "../images/home/heroFlower.svg"
import 貼紙花1 from "../images/home/首頁-貼紙花.webp"
import 活動照片 from "../images/home/首頁-最新消息-活動圖片.webp"
import 花卉介紹 from "../images/home/底圖_花卉介紹.png"
import 花卉遊戲 from "../images/home/底圖_花卉遊戲.png"
import 書 from "../images/home/書.svg"
import 票選1 from '../images/home/首頁-票選1-框.png'
import 票選2 from '../images/home/首頁-票選2-框.png'
import 票選3 from '../images/home/首頁-票選3-框.png'
import 票選4 from '../images/home/首頁-票選4-框.png'
import 王冠 from '../images/home/王冠.svg'
import 首頁消息花 from '../images/home/首頁消息-花.svg'
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";



const App = () => {
    return (
        <>
            <main>
                {/* Hero 區 */}
                <section className="hero">
                    <div className="name"><img src={北花冊} alt="北花冊" /><p>Bloomchure</p></div>
                    <div className="heroFlower"><img src={大花} alt="大花" /></div>
                    <p className="slogan">北區賞花季，一頁收藏所有花事</p>
                </section>

                {/* 近期活動 */}
                <section className="indexActivity">
                    {/* 主副標 */}
                    <h2>近期活動</h2>
                    <h3>Recent vents</h3>

                    {/* 近期活動切換 */}
                    <div className="gallery">
                        <IoIosArrowDropleft className="eventicon" />
                        
                        {/* 圖片放置區 */}
                        <div>
                            {/* 日期 */}
                            <div className="eventTime">
                                2025<br />07.01<br />｜<br />09.23
                            </div>
                            {/* 花圖+名稱 */}
                            <img className="f1" src={貼紙花1} alt="花1" />
                            <h4>花季活動名稱</h4>
                        </div>

                        <div>
                            <div className="eventTime">
                                2025<br />07.01<br />｜<br />09.23
                            </div>
                            <img className="f2" src={貼紙花1} alt="花1" />
                            <h4>花季活動名稱</h4>
                        </div>

                        <div>
                            <div className="eventTime">
                                2025<br />07.01<br />｜<br />09.23
                            </div>
                            <img className="f1" src={貼紙花1} alt="花1" />
                            <h4>花季活動名稱</h4>
                        </div>

                        {/* <div>
                            <div className="eventTime">
                                2025<br />07.01<br />｜<br />09.23
                            </div>
                            <img className="f2" src={貼紙花1} alt="花1" />
                            <h4>花季活動名稱</h4>
                        </div> */}

                        <IoIosArrowDropright className="eventicon" />

                    </div>

                    {/* 地圖搜尋btn */}
                    <div className="btn">地圖搜尋→</div>
                </section>




                {/* 最新消息+花卉科普 */}
                <section>
                    <div className="IndexNsp">
                        {/* 左側-最新消息 */}
                        <div className="Inews">
                            <h2>最新消息</h2>
                            <h3>News</h3>
                            <ul>
                                <li><div className="tag">活動</div><p>我是一大串的活頁消息標題</p><div className="">2025-10-15</div></li>
                                <li><div>活動</div><div>我是一大串的活頁消息標題</div><div>2025-10-15</div></li>
                                <li><div>活動</div><div>我是一大串的活頁消息標題</div><div>2025-10-15</div></li>
                                <li><div>活動</div><div>我是一大串的活頁消息標題</div><div>2025-10-15</div></li>
                            </ul>
                            <div className="btn">更多消息</div>
                        </div>


                        {/* 右側-花卉科普 */}
                        <div className="Isp">
                            <div className="Istory"><a href="#"><img src={花卉介紹} alt="花卉介紹" /></a></div>
                            <div className="Iplay"><a href="#"><img src={花卉遊戲} alt="花卉遊戲" /></a></div>
                            {/* 花卉科普的標題 */}
                            <div className="Istoryicon">
                                <h2>認識花卉</h2>
                                <h3>Flower Story</h3>
                                <div className="book"><img src={書} alt="書" /></div>
                            </div>

                        </div>

                    </div>
                </section>






                {/* 花牆票選 */}
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
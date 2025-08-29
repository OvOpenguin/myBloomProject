import "../sass/home2.scss"
import 北花冊 from "../images/home/北花冊.webp"
import 大花 from "../images/home/heroFlower.svg"
import 貼紙花1 from "../images/home/首頁-貼紙花.webp"
import 花卉介紹 from "../images/home/homeStory.png"
import 花卉遊戲 from "../images/home/homeGame.png"
import 花卉介紹2 from "../images/home/homeStory.svg"
import 花卉遊戲2 from "../images/home/homeGame2.svg"
import 書 from "../images/home/書.svg"
import 票選1 from '../images/home/首頁-票選1-框.png'
import 票選2 from '../images/home/首頁-票選2-框.png'
import 票選3 from '../images/home/首頁-票選3-框.png'
import 票選4 from '../images/home/首頁-票選4-框.png'
import 王冠 from '../images/home/王冠.svg'
import 首頁消息花 from '../images/home/首頁消息-花.svg'
// 最新消息-裝飾花
import hfw1 from '../images/home/homefwro1.svg'
import hfw2 from '../images/home/homefwro2.svg'
import pink from '../images/home/pink-p1.png'
import orange from '../images/home/orange-p2.png'
import purple from '../images/home/purple-p3.png'
import yellow from '../images/home/yellow-p4.png'
// react icon
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"



const App = () => {

    // 建立活動陣列資料
    const events = [
        {
            id: 1,
            title: "花季活動名稱 1",
            year: "2025",
            start: "07.01",
            end: "09.23",
            image: 貼紙花1,
        },
        {
            id: 2,
            title: "花季活動名稱 2",
            year: "2025",
            start: "07.01",
            end: "09.23",
            image: 貼紙花1,
        },
        {
            id: 3,
            title: "花季活動名稱 3",
            year: "2025",
            start: "07.01",
            end: "09.23",
            image: 貼紙花1,
        },
        {
            id: 4,
            title: "花季活動名稱 4",
            year: "2025",
            start: "07.01",
            end: "09.23",
            image: 貼紙花1,
        },
        {
            id: 5,
            title: "花季活動名稱 5",
            year: "2025",
            start: "07.01",
            end: "09.23",
            image: 貼紙花1,
        },
        {
            id: 6,
            title: "花季活動名稱 6",
            year: "2025",
            start: "07.01",
            end: "09.23",
            image: 貼紙花1,
        },

    ];

    // 設定活動的陣列索引
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(4); // 預設桌機 4 張

    // 監聽螢幕寬度 → 決定一次顯示幾張
    useEffect(() => {
        const updateVisible = () => {
            if (window.innerWidth <= 820) {
                setVisibleCount(1);
            } else if (window.innerWidth <= 1024) {
                setVisibleCount(2);
            } else if (window.innerWidth <= 1440) {
                setVisibleCount(3);
            } else {
                setVisibleCount(4);
            }
        };
        updateVisible();
        window.addEventListener("resize", updateVisible);
        return () => window.removeEventListener("resize", updateVisible);
    }, []);

    // 右鍵設定
    const nextSlide = () => {
        const maxIndex = events.length - visibleCount;
        if (currentIndex < maxIndex) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    // 左鍵設定
    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };


    return (
        <>
            <main>
                {/* Hero 區 */}
                <section>
                    {/* <div className="name"><img src={北花冊} alt="北花冊" /><p>Bloomchure</p></div> */}
                    <div className="hero">
                        <div className="heroFlower">
                            <img src={大花} alt="大花" className="bigFlower" />
                            <div className="t t2"><img src="./home/t2.svg" alt="" /></div>
                            <div className="t t3"><img src="./home/t3.svg" alt="" /></div>
                            <div className="t t4"><img src="./home/t3.svg" alt="" /></div>
                            <div className="t t12"><img src="./home/t12.svg" alt="" /></div>


                        </div>
                    </div>

                </section>

                {/* 近期活動 */}
                <section className="indexActivity">

                    {/* 主副標 */}
                    <h2>近期活動</h2>
                    <h3>Recent vents</h3>

                    {/* 近期活動切換 */}
                    <div className="galleryWrap">
                        <IoIosArrowDropleft className="eventicon left" onClick={prevSlide} />

                        <div className="gallery">
                            {/* <IoIosArrowDropleft className="eventicon left" onClick={prevSlide} /> */}
                            <ul style={{ transform: `translateX(-${currentIndex * (100 / visibleCount)}%)` }}>
                                {
                                    events.map((e) => (
                                        <li key={e.id}>
                                            {/* 日期 */}
                                            <div className="eventTime">
                                                {e.year}<br />{e.start}<br />｜<br />{e.end}
                                            </div>
                                            {/* 花圖+名稱 */}
                                            <figure><img className="f1" src={e.image} alt={e.title} /></figure>
                                            <h4>{e.title}</h4>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <IoIosArrowDropright className="eventicon right" onClick={nextSlide} />
                    </div>





                    {/* 地圖搜尋btn */}
                    <Link to="./map"><div className="homeBtn">地圖搜尋→</div></Link>

                </section>

                {/* 最新消息+花卉科普 */}
                <section>
                    <div className="IndexNsp">
                        {/* 左側-最新消息 */}
                        <div className="Inews">

                            {/* 裝飾花 */}
                            {/* <div className="newsF"> */}
                            {/*
                            <div className="iflower">
                                <div className="p pink"><img src={pink} alt="粉辦" /></div>
                                <div className="p purple"><img src={purple} alt="紫辦" /></div>
                                <div className="p orange"><img src={orange} alt="橘辦" /></div>
                                <div className="p yellow"><img src={yellow} alt="黃中心" /></div>
                                {/* <img src={首頁消息花} alt="" /> 
                            </div>*/}

                            <div className="h-n-fw">
                                <div className="p fw1"><img src={hfw1} alt="" /></div>
                                <div className="p fw2"><img src={hfw2} alt="" /></div>
                            </div>
                            {/* </div> */}

                            {/* 列表標題 */}
                            <h2>最新消息</h2>
                            <h3>News</h3>
                            {/* 消息列表 */}
                            <ul>
                                <li><div><p><span className="tag1">活動</span>我是一大串的活頁消息標題消我xfkdxhksdhgkjs</p></div><time className="itime">2025-10-15</time></li>
                                <li><div><p><span className="tag2">活動</span>我是一大串的活頁消息標題消我</p></div><time className="itime">2025-10-15</time></li>
                                <li><div><p><span className="tag1">活動</span>我是一大串的活頁消息標題消我</p></div><time className="itime">2025-10-15</time></li>
                                <li><div><p><span className="tag1">活動</span>我是一大串的活頁消息標題消我</p></div><time className="itime">2025-10-15</time></li>
                            </ul>
                            <Link to="./news"><div className="homeBtn">更多消息</div></Link>
                        </div>


                        {/* 右側-花卉科普 */}
                        {/* <div className="Isp">
                            <div className="st">
                                <Link to="./story"><div className="Istory"><a href="./story"><img src={花卉介紹} alt="花卉介紹" /></a></div></Link>
                                <div className="Istitle"><h2>認識花卉</h2><h3>Flower Story</h3></div>
                            </div>

                            <div className="pb">
                                <div className="Ibook"><img src={書} alt="書" /></div>
                                <Link to="./play"> <div className="Iplay"><a href="#"><img src={花卉遊戲} alt="花卉遊戲" /></a></div></Link>
                            </div>
                        </div> */}
                        <div className="home-story">
                            <div className="home-s-btn">
                                <div className="home-s-title"><h2 >認識花卉</h2><h3>Flower Story</h3></div>
                                <div className="home-s-img">
                                    <Link to="./story"><img className="btnstory" src={花卉介紹2} alt="" /></Link>
                                    <Link to="./play"><img className="btngame" src={花卉遊戲2} alt="" /></Link>
                                </div>
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
                        <Link to='./wall'> <BsArrowUpRightCircleFill className="arrow" /></Link>
                        <div className="crown"><img src={王冠} alt="王冠" /></div>
                    </div>

                    {/* 右側-花牆切換 */}

                    <ul className="wall">
                        <li><img src={票選1} alt="票選1" /></li>
                        <li><img src={票選2} alt="票選2" /></li>
                        <li><img src={票選3} alt="票選3" /></li>
                        <li><img src={票選4} alt="票選4" /></li>
                    </ul>
                </section>
            </main >
        </>
    )
}

export default App
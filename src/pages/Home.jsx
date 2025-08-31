import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import "../sass/home2.scss"
import $ from "jquery";

// 圖片管理區
import 北花冊 from "../images/home/北花冊.webp"
import 大花定位2 from "../images/home/大花定位2.png"
import 貼紙花1 from "../images/home/首頁-貼紙花.webp"
import 花卉介紹2 from "../images/home/homeStory.svg"
import 花卉遊戲2 from "../images/home/homeGame2.svg"
import 票選1 from '../images/home/首頁-票選1-框.png'
import 票選2 from '../images/home/首頁-票選2-框.png'
import 票選3 from '../images/home/首頁-票選3-框.png'
import 票選4 from '../images/home/首頁-票選4-框.png'
import 王冠 from '../images/home/王冠.svg'
// 最新消息-裝飾花
import hfw1 from '../images/home/homefwro1.svg'
import hfw2 from '../images/home/homefwro2.svg'
// react icon
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
import { BsArrowUpRightCircleFill } from "react-icons/bs";






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

    // 裝飾花(滑鼠滾輪)
    const [rotated, setRotated] = useState(false);
    useEffect(() => {
        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                setRotated((prev) => prev + 10);
                ticking = true;
                requestAnimationFrame(() => {
                    ticking = false;
                });
            }
        };

        window.addEventListener("wheel", handleScroll);

        return () => window.removeEventListener("wheel", handleScroll);
    }, []);

    //首頁花入場 (邏輯：初始為scatter狀態=> 延遲0.5s後 => 清除scatter狀態 => 變成合成狀態)
    useEffect(() => {
        setTimeout(() => {
            $(".heroFlower .t").removeClass("scatter");
        }, 500); // 延遲 0.5 秒，避免一開始就瞬間定位
    }, []);


    return (
        <>
            <main>
                {/* Hero 區 */}
                <section>
                    {/* <div className="name"><img src={北花冊} alt="北花冊" /><p>Bloomchure</p></div> */}
                    <div className="hero">

                        <div className="heroFlower">
                            {/* 定位用大花 */}
                            <img src={大花定位2} alt="大花" className="bigFlower" />
                            <div className="t t11 scatter"><img src="./home/t11.svg" alt="藍紫花瓣" /></div>
                            <div className="t t12 scatter"><img src="./home/t12.svg" alt="紫色花瓣" /></div>
                            <div className="t t2r scatter"><img src="./home/t2.svg" alt="粉色花瓣右" /></div>
                            <div className="t t6 scatter"><img src="./home/t6.svg" alt="藍色花瓣" /></div>
                            <div className="t t9 scatter"><img src="./home/t9.svg" alt="橘色花瓣" /></div>
                            <div className="t t2l scatter"><img src="./home/t2.svg" alt="粉色花瓣左" /></div>
                            <div className="t t3l scatter"><img src="./home/t3.svg" alt="黃色花瓣左" /></div>
                            <div className="t t7 scatter"><img src="./home/t7.svg" alt="黃白花瓣" /></div>
                            <div className="t t10 scatter"><img src="./home/t10.svg" alt="藍紅花瓣" /></div>
                            <div className="t t4u scatter"><img src="./home/t4.svg" alt="淺粉花瓣上" /></div>
                            <div className="t t3r scatter"><img src="./home/t3.svg" alt="黃色花瓣右" /></div>
                            <div className="t t4d scatter"><img src="./home/t4.svg" alt="淺粉花瓣下" /></div>
                            <div className="t t5 scatter"><img src="./home/t5.svg" alt="綠黃花瓣" /></div>
                            <div className="t t8d scatter"><img src="./home/t8.svg" alt="淺黃花瓣下" /></div>
                            <div className="t t8l scatter"><img src="./home/t8.svg" alt="淺黃花瓣左" /></div>
                            <div className="t t8u scatter"><img src="./home/t8.svg" alt="淺黃花瓣上" /></div>
                            <div className="t t8r scatter"><img src="./home/t8.svg" alt="淺黃花瓣右" /></div>
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
                            {/* 裝飾花(旋轉) */}
                            <div className="h-n-fw">
                                <div className="t fw2" style={{ transform: `rotate(${rotated}deg)` }} ><img src={hfw2} alt="" /></div>
                                <div className="t fw1"><img src={hfw1} alt="" /></div>
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
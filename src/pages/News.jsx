import "../sass/news.scss"
import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import Nav from '../components/Nav'
import 'swiper/css';
import 'swiper/css/pagination';
import fornews from '../json/fornews.json';

import flower10 from '../images/wall/wall-f10.webp'
import ban1 from '../images/news/newsban2.webp'
import ban2 from '../images/news/newsban3.png'
import hscroll from '../images/home/homescroll.svg'
import { Link } from "react-router-dom";
import cban01 from '../images/news/newscb01.png'
import cban02 from '../images/news/newscb02.png'
import cban03 from '../images/news/newscb03.webp'
import cban04 from '../images/news/newscb04.webp'
import GotopBtn from '../components/GotopBtn'

import FavoriteButton from '../components/FavoriteButton';




const News = () => {

    const [visibleCount, setVisibleCount] = useState(6);

    const Newscard = ({ id, lable, date, title, img }) => {
        const CardContent = (
            <>
                {/* 文字 */}
                <div className="txtwrap">
                    <div className="news-labledate">
                        <div className="news-lable">{lable}</div>
                        <p>{date}</p>
                    </div>
                    <p className="news-cardTitle">{title}</p>
                </div>

                {/* 圖片 */}
                <div className="news-imgwrap">
                    <figure className="news-img">
                        <img src={img} alt="活動圖片" />
                    </figure>

                    {/* 收藏按鈕-取消 */}
                    {/* <FavoriteButton card={{ id, lable, date, title, img }} /> */}
                </div>
            </>
        );

        return lable === '活動' ? (
            <Link to={`/info/${id}`} className="news-Card">
                {CardContent}
            </Link>
        ) : (
            <div className="news-Card">
                {CardContent}
            </div>
        );
    };

    // 選單
    const [selectedlocation, setSelectedLocation] = useState("");
    const oplocation = ['臺北市', '新北市', '基隆市', '桃園市', '新竹市', '新竹縣', '宜蘭縣']

    // 解析 start 字串成 Date
    function parseStartDate(startStr) {
        const [month, day] = startStr.split('.').map(Number);
        return new Date(2025, month - 1, day); // 假設年份固定
    }
    // 先排序
    const sortedNews = [...fornews].sort(
        (a, b) => parseStartDate(a.start) - parseStartDate(b.start)
    );
    // 再篩選
    const filtered = sortedNews.filter((item) => {
        return (
            (selectedlocation === "" || item.location === selectedlocation)
        );
    });

    // more按鈕
    const newsHandlerMore = () => {
        setVisibleCount((prev) => { return prev + 6 }) // 每次最多顯示6張
    }

    return (
        <>
            <Nav></Nav>
            {/* 圖片banner */}
            <section className="newsBanner">
                <div className="bannerswiper">
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        pagination={{ clickable: true }}
                        autoplay={{
                            delay: 10000,
                            disableOnInteraction: false, // 滑動後仍繼續自動播
                        }}
                        className="mySwiper">
                        <SwiperSlide> <img src={ban1} alt="" /> </SwiperSlide>
                        <SwiperSlide> <img src={ban2} alt="" /> </SwiperSlide>
                    </Swiper>
                </div >
            </section >
            {/* 內容 */}
            < section className="news-content" >
                <div className="news-news">
                    <div className="news-ts">
                        <h2>最新消息 NEWS</h2>
                        <div className="news-select">
                            <select name="" id="" value={selectedlocation} onChange={(e) => { setSelectedLocation(e.target.value); }}>
                                <option value="" >地區</option>
                                {
                                    oplocation.map((item, index) => {
                                        return <option key={item} value={oplocation[index]}>{item}</option>
                                    })
                                }
                            </select>
                        </div>
                    </div>
                    <div className="news-CardWarp">
                        {filtered.slice(0, visibleCount).map((item) => {
                            return <Newscard
                                key={item.id} id={item.id} lable={item.lable} date={item.date} title={item.title} img={item.img}
                            />
                        })}
                    </div>
                    {visibleCount < filtered.length && (
                        <div className="news-more" onClick={newsHandlerMore}> more <img src={hscroll} alt="" /></div>
                    )}
                </div>

                <div className="news-discount">
                    <div >
                        <h2>優惠專區</h2>
                        <div className="imgwrap">
                            <img src={cban03} className="a-img" alt="優惠專區1" />
                            <img src={cban04} className="a-img" alt="優惠專區2" />
                        </div>
                    </div >
                    <div>
                        <h2>熱門活動</h2>
                        <div className="imgwrap">
                            <img src={cban01} className="a-img" alt="熱門活動1" />
                            <img src={cban02} className="a-img" alt="熱門活動2" />
                        </div>
                    </div>
                </div>
            </section >
            <GotopBtn></GotopBtn>

        </>
    )
}

export default News
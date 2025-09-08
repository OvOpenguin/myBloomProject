import "../sass/news.scss"
import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import FlowerEvent from '../json/FlowerEvent.json';

import flower10 from '../images/wall/wall-f10.webp'
import ban1 from '../images/news/newsban2.webp'


const News = () => {

    const Newscard = ({ lable, date, title, img }) => {
        return (
            <div className="news-Card">
                <div className="txtwrap">
                    <div className="news-labledate">
                        <div className="news-lable">{lable}</div>
                        <p>{date}</p>
                    </div>
                    <p className="news-cardTitle">{title}</p>
                </div>
                <img src={img} className="news-img" alt="" />
            </div>
        )
    }

    const [selectedlocation, setSelectedLocation] = useState("");
    const oplocation = ['臺北市', '新北市', '基隆市', '桃園市', '新竹市', '新竹縣', '宜蘭縣']

     const filtered = FlowerEvent.filter((item) => {
    
        return (
          (selectedlocation === "" || item.location === selectedlocation)
        );
      });
    
    return (
        <>
            {/* 圖片bar */}
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
                        <SwiperSlide> <img src={ban1} alt="" /> </SwiperSlide>
                    </Swiper>
                </div >
            </section >
            {/* 內容 */}
            < section className="news-content" >
                <div className="news-news">
                    <div>
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
                        {filtered.map((item, index) => {
                            return <Newscard key={index} lable={item.lable} date={item.date} title={item.title} img={item.img} />
                        })}
                    </div>
                    <div className="news-page"> 頁碼區 </div>
                </div>

                <div className="news-discount">
                    <div >
                        <h2>優惠專區</h2>
                        <div className="imgwrap">
                            <img src="https://cdn.pixabay.com/photo/2020/04/14/03/57/pear-5040797_1280.jpg" className="a-img" alt="" />
                            <img src="https://cdn.pixabay.com/photo/2020/04/14/03/57/pear-5040797_1280.jpg" className="a-img" alt="" />
                        </div>
                    </div >
                    <div>
                        <h2>熱門活動</h2>
                        <div className="imgwrap">
                            <img src="https://cdn.pixabay.com/photo/2020/04/14/03/57/pear-5040797_1280.jpg" className="a-img" alt="" />
                            <img src="https://cdn.pixabay.com/photo/2020/04/14/03/57/pear-5040797_1280.jpg" className="a-img" alt="" />
                        </div>
                    </div>
                </div>
            </section >

        </>
    )
}

export default News
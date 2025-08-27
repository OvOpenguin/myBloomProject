import "../sass/news.scss"
import { useState } from "react";

import flower10 from '../images/wall/wall-f10.webp'


const News = () => {

    const newsinfo = [
        {
            id: 1,
            lable: '活動',
            date: '2025.07.28',
            title: '標題',
            img: flower10,
        },
        {
            id: 2,
            lable: '活動',
            date: '2025.07.28',
            title: '標題',
            img: flower10,
        },
        {
            id: 3,
            lable: '活動',
            date: '2025.07.28',
            title: '標題',
            img: flower10,
        },
        {
            id: 4,
            lable: '活動',
            date: '2025.07.28',
            title: '標題',
            img: flower10,
        },
        {
            id: 5,
            lable: '活動',
            date: '2025.07.28',
            title: '標題',
            img: flower10,
        },
        {
            id: 6,
            lable: '活動',
            date: '2025.07.28',
            title: '標題',
            img: flower10,
        },
    ]

    const Newscard = ({lable, date, title, img}) => {
        return (
            <div className="news-Card">
                <div className="news-labledate">
                    <div className="news-lable">{lable}</div>
                    <p>{date}</p>
                </div>
                <p className="news-cardTitle">{title}</p>
                <img src={img} className="news-img" alt="" />
            </div>
        )
    }

    const [selectedlocation, setSelectedLocation] = useState("");
    const oplocation = ['臺北市', '新北市', '基隆市', '桃園市', '新竹市', '新竹縣', '宜蘭縣']

    return (
        <>
            {/* 圖片bar */}
            <section className="newsBanner">
                <div className="news-bannerimg">
                    <img src="https://www.gotoju.co.jp/wp-content/themes/main/img/main/img_01.jpg" alt="" />
                </div>
                <div className="news-bannerimg">
                    <img src="https://www.gotoju.co.jp/wp-content/themes/main/img/main/img_01.jpg" alt="" />
                </div>
                <div className="news-bannerimg">
                    <img src="https://www.gotoju.co.jp/wp-content/themes/main/img/main/img_01.jpg" alt="" />
                </div>
            </section>
            {/* 內容 */}
            <section className="news-content">
                <div className="news-news">
                    <div>
                        <h2>最新活動 NEWS</h2>
                        <div className="news-select">
                            <select name="" id="" value={selectedlocation} onChange={(e) => { setSelectedLocation(e.target.value); }}>
                                <option value="" disabled>選擇</option>
                                {
                                    oplocation.map((item, index) => {
                                        return <option key={item} value={oplocation[index]}>{item}</option>
                                    })
                                }
                            </select>
                        </div>
                    </div>
                    <div className="news-CardWarp">
                        {newsinfo.map((item, index)=>{
                            return <Newscard key={index} lable={item.lable} date={item.date} title={item.title} img={item.img} />
                        })}
                        {/* <div className="news-Card">
                            <div className="news-labledate">
                                <div className="news-lable">活動</div>
                                <p>2025.07.28</p>
                            </div>
                            <p className="news-cardTitle">標題</p>
                            <img src="https://cdn.pixabay.com/photo/2020/04/14/03/57/pear-5040797_1280.jpg" className="news-img" alt="" />
                        </div> */}
                        
                    </div>
                    <div className="news-page"> 頁碼區 </div>
                </div>

                <div className="news-discount">
                    <div >
                        <h2>優惠專區</h2>
                        <img src="https://cdn.pixabay.com/photo/2020/04/14/03/57/pear-5040797_1280.jpg" className="a-img" alt="" />
                        <img src="https://cdn.pixabay.com/photo/2020/04/14/03/57/pear-5040797_1280.jpg" className="a-img" alt="" />
                        <h2>熱門活動</h2>
                        <img src="https://cdn.pixabay.com/photo/2020/04/14/03/57/pear-5040797_1280.jpg" className="a-img" alt="" />
                        <img src="https://cdn.pixabay.com/photo/2020/04/14/03/57/pear-5040797_1280.jpg" className="a-img" alt="" />
                    </div>
                </div>
            </section>

        </>
    )
}

export default News
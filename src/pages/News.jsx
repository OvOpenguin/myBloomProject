import "../sass/news.scss"
import { useState } from "react";

function MapLocation({ name = "selectedlocation", value, onChange }) {
    return (
        <select name={name} value={value} onChange={(e) => onChange(e.target.value)}>
            <option value="" disabled>地區</option>
            <option value="臺北市">臺北市</option>
            <option value="新北市">新北市</option>
            <option value="基隆市">基隆市</option>
            <option value="桃園市">桃園市</option>
            <option value="新竹市">新竹市</option>
            <option value="新竹縣">新竹縣</option>
            <option value="宜蘭縣">宜蘭縣</option>
        </select>
    );
}


const News = () => {

    const [selectedlocation, setSelectedLocation] = useState("");

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
                        <h2>最新活動 News</h2>
                        <div className="news-select">
                            <MapLocation value={selectedlocation} onChange={setSelectedLocation} />
                        </div>
                    </div>
                    <div className="news-CardWarp">
                        <div className="news-Card">
                            <div className="news-labledate">
                                <div className="news-lable">活動</div>
                                <p>2025.07.28</p>
                            </div>
                            <p className="news-cardTitle">標題</p>
                            <img src="https://cdn.pixabay.com/photo/2020/04/14/03/57/pear-5040797_1280.jpg" className="news-img" alt="" />
                        </div>
                        <div className="news-Card">
                            <div className="news-labledate">
                                <div className="news-lable">活動</div>
                                <p>2025.07.28</p>
                            </div>
                            <p className="news-cardTitle">標題</p>
                            <img src="https://cdn.pixabay.com/photo/2020/04/14/03/57/pear-5040797_1280.jpg" className="news-img" alt="" />
                        </div>
                        <div className="news-Card">
                            <div className="news-labledate">
                                <div className="news-lable">活動</div>
                                <p>2025.07.28</p>
                            </div>
                            <p className="news-cardTitle">標題</p>
                            <img src="https://cdn.pixabay.com/photo/2020/04/14/03/57/pear-5040797_1280.jpg" className="news-img" alt="" />
                        </div>
                        <div className="news-Card">
                            <div className="news-labledate">
                                <div className="news-lable">活動</div>
                                <p>2025.07.28</p>
                            </div>
                            <p className="news-cardTitle">標題</p>
                            <img src="https://cdn.pixabay.com/photo/2020/04/14/03/57/pear-5040797_1280.jpg" className="news-img" alt="" />
                        </div>
                        <div className="news-Card">
                            <div className="news-labledate">
                                <div className="news-lable">活動</div>
                                <p>2025.07.28</p>
                            </div>
                            <p className="news-cardTitle">標題</p>
                            <img src="https://cdn.pixabay.com/photo/2020/04/14/03/57/pear-5040797_1280.jpg" className="news-img" alt="" />
                        </div>
                        <div className="news-Card">
                            <div className="news-labledate">
                                <div className="news-lable">活動</div>
                                <p>2025.07.28</p>
                            </div>
                            <p className="news-cardTitle">標題</p>
                            <img src="https://cdn.pixabay.com/photo/2020/04/14/03/57/pear-5040797_1280.jpg" className="news-img" alt="" />
                        </div>
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
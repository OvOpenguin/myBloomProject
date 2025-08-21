import { useState, useRef, useEffect } from "react";
import "../sass/info.scss";
import 活動照片 from "../images/info/活動照片.jpg";
import TagSummer from "../images/info/tag-summer.svg";
import TagTaipeicity from "../images/info/tag-taipeicity.svg";
import icon無障礙 from "../images/info/icon-無障礙.svg";
import icon哺乳室 from "../images/info/icon-哺乳室.svg";
import icon停車場 from "../images/info/icon-停車場.svg";
import date from "../images/info/date.svg";
import weather from "../images/info/weather.svg";
import bgpink from "../images/info/food-background-pink.svg";
import ptopink from "../images/info/food-photo-pink.png";

const tabs = ["活動介紹", "交通資訊", "周邊推薦"];
const tabContents = [
  <div>這是活動介紹內容，可以放文字或圖片描述活動細節</div>,
  <div>這是交通資訊內容，例如捷運、公車、停車場說明</div>,

  <div className="surrounding-content">
    <div className="food-section">
      <div className="info-container">
        <h3>美食小點</h3>

        <div className="food-groups">
          {[1, 2, 3].map((_, index) => (
            <div className="food-group" key={index}>
              <img src={bgpink} alt="背景粉色" className="bgpink" />
              <div className="ptopink-wrapper">
                <img src={ptopink} alt="前景粉色" className="ptopink" />
                <div className="ptopink-overlay">
                  <p>李記車輪餅</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="attraction-section">
      <div className="info-container">
        <h3>附近景點</h3>

        <div className="food-groups">
          {[1, 2, 3].map((_, index) => (
            <div className="food-group" key={index}>
              <img src={bgpink} alt="背景粉色" className="bgpink" />
              <div className="ptopink-wrapper">
                <img src={ptopink} alt="前景粉色" className="ptopink" />
                <div className="ptopink-overlay">
                  <p>景點名稱</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>,
];



const Info = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef([]);
  const lineContainerRef = useRef(null);
  const [lineStyle, setLineStyle] = useState({ width: 0, left: 0 });

  useEffect(() => {
    if (tabRefs.current[activeIndex] && lineContainerRef.current) {
      const tab = tabRefs.current[activeIndex];
      const container = lineContainerRef.current;
      const left = tab.getBoundingClientRect().left - container.getBoundingClientRect().left;
      setLineStyle({ width: tab.offsetWidth, left });
    }
  }, [activeIndex]);

  return (
    <section>
      {/* Banner */}
      <div className='info-benner'>
        <img src={活動照片} alt="" />
      </div>

      {/* Info wrapper */}
      <div className='info-wrapper'>
        <div className='info-basic'>
          <p>2025</p>
          <h2>樟樹步道花海</h2>
          <p>台北市士林區二二路一段123號</p>
          <div className='info-tag-wrapper'>
            <div className='info-tag'>
              <img src={TagSummer} alt="" />
              <img src={TagTaipeicity} alt="" />
            </div>
            <div className="info-date">
              <img src={date} alt="日期" />
            </div>
          </div>
        </div>

        <div className="info-about">
          <div className='info-icon'>
            <div className="info-item">
              <img src={icon無障礙} alt="" />
              <p>無障礙設施</p>
            </div>
            <div className="info-item">
              <img src={icon哺乳室} alt="" />
              <p>哺乳室</p>
            </div>
            <div className="info-item">
              <img src={icon停車場} alt="" />
              <p>停車場</p>
            </div>
          </div>

          <div className="info-price">
            <h3>票價</h3>
            <div className="price-items">
              <p>成人$300</p>
              <div className="divider"></div>
              <p>兒童$100</p>
              <div className="divider"></div>
              <p>愛心票$50</p>
            </div>
          </div>

          <div className="info-time">
            <h3>開放時間</h3>
            <div className="time-items">
              <p>週一至週六 0800~1700</p>
              <div className="divider-vertical"></div>
              <p>週日未開放</p>
            </div>
          </div>
        </div>

        <div className="info-weather">
          <img src={weather} alt="天氣" />
        </div>
      </div>

      {/* Tabs */}
      <div className="info-tabs-wrapper">
        <div className="info-tabs">
          {tabs.map((tab, index) => (
            <div
              key={index}
              ref={(el) => (tabRefs.current[index] = el)}
              className={`tab ${activeIndex === index ? "active" : ""}`}
              onClick={() => setActiveIndex(index)}
            >
              {tab}
            </div>
          ))}
        </div>

        {/* 灰色線 + 紫色線 */}
        <div className="tab-line-container" ref={lineContainerRef}>
          <div className="tab-line"></div> {/* 灰色線 */}
          <div
            className="tab-line-highlight"
            style={{
              width: `${lineStyle.width}px`,
              transform: `translateX(${lineStyle.left}px)`,
            }}
          /> {/* 紫色線 */}
        </div>

        {/* Tab contents */}
        <div className="tab-contents">
          {tabContents.map((content, index) => (
            <div
              key={index}
              className={`tab-content ${activeIndex === index ? "show" : ""}`}
            >
              {content}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Info;

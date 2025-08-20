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

const tabs = ["活動介紹", "交通資訊", "周邊推薦"];
const tabContents = [
  <div>這是活動介紹內容，可以放文字或圖片描述活動細節</div>,
  <div>這是交通資訊內容，例如捷運、公車、停車場說明</div>,
  <div>這是周邊推薦內容，例如附近餐廳、景點、商店介紹</div>,
];

const Info = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef([]);
  const [lineStyle, setLineStyle] = useState({ width: 0, left: 0 });

  useEffect(() => {
    if (tabRefs.current[activeIndex]) {
      const tab = tabRefs.current[activeIndex];
      setLineStyle({ width: tab.offsetWidth, left: tab.offsetLeft });
    }
  }, [activeIndex]);

  return (
    <section>
      <div className='info-benner'>
        <img src={活動照片} alt="" />
      </div>

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

      {/* 選單 */}
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
        <div className="tab-line">
          <div
            className="tab-line-highlight"
            style={{
              width: `${lineStyle.width}px`,
              transform: `translateX(${lineStyle.left}px)`,
            }}
          ></div>
        </div>

        {/* tab 對應內容 */}
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

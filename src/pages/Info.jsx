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
import foodbgpink from "../images/info/food-background-pink.svg";
import foodptopink from "../images/info/food-photo-pink.png";
import arrowlf from "../images/info/arrow-left.svg";
import arrowri from "../images/info/arrow-right.svg";
import attbgblu from "../images/info/attractions-background-blue.svg";
import attptoblu from "../images/info/attractions-photo-blue.png";
import bus from "../images/info/bus.png";
import mrt from "../images/info/mrt.png";
import car from "../images/info/car.png";
import mrtyuanshan from "../images/info/mrt-yuanshan.png";
import flower1 from "../images/info/flower1.png";
import flowerbg from "../images/info/flower-background.svg";
import FloralVarieties from "../images/info/FloralVarieties.svg";
import FlowerGra from "../images/info/FlowerGra.jpg";
import Point from "../images/info/Point.svg";
import PointMask from "../images/info/point-mask.svg";
import flowerg1 from "../images/info/flowerg1.png";
import flowerg2 from "../images/info/flowerg2.png";
import flowerg3 from "../images/info/flowerg3.png";
import flowerg from "../images/info/flowerg.svg";
import phone from "../images/info/phone.svg";
import fbicon from "../images/info/fbicon.png";
import igicon from "../images/info/igicon.png";
import threadicon from "../images/info/threadicon.png";





const tabs = ["活動介紹", "交通資訊", "周邊推薦"];

// Google 地圖元件
function MapIframe() {
  return (
    <iframe
      title="Google Map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4298.543421308874!2d121.51861719589644!3d25.04663600089511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a96da144d9f9%3A0xc7aaab18623bf211!2z5Lqs56uZ5pmC5bCa5buj5aC0!5e0!3m2!1szh-TW!2stw!4v1755233965825!5m2!1szh-TW!2stw"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
}

const Info = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef([]);
  const lineContainerRef = useRef(null);
  const [lineStyle, setLineStyle] = useState({ width: 0, left: 0 });
  const foodGroupsRef = useRef([]);

  useEffect(() => {
    if (tabRefs.current[activeIndex] && lineContainerRef.current) {
      const tab = tabRefs.current[activeIndex];
      const container = lineContainerRef.current;
      const left =
        tab.getBoundingClientRect().left -
        container.getBoundingClientRect().left;
      setLineStyle({ width: tab.offsetWidth, left });
    }
  }, [activeIndex]);

  return (
    <section>
      {/* Banner */}
      <div className="info-benner">
        <img src={活動照片} alt="" />
      </div>

      {/* Info wrapper */}
      <div className="info-wrapper">
        <div className="info-basic">
          <p>2025</p>
          <h2>樟樹步道花海</h2>
          <p>台北市士林區二二路一段123號</p>
          <div className="info-tag-wrapper">
            <div className="info-tag">
              <img src={TagSummer} alt="" />
              <img src={TagTaipeicity} alt="" />
            </div>
            <div className="info-date">
              <img src={date} alt="日期" />
            </div>
          </div>
        </div>

        <div className="info-about">
          <div className="info-icon">
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

        <div className="tab-line-container" ref={lineContainerRef}>
          <div className="tab-line"></div>
          <div
            className="tab-line-highlight"
            style={{
              width: `${lineStyle.width}px`,
              transform: `translateX(${lineStyle.left}px)`,
            }}
          />
        </div>

{/* 活動介紹 */}
        <div className="tab-contents">
          {activeIndex === 0 && (
  <div className="activity-intro">
   {/* 區塊一：花卉種類 */}
<div className="section-floral">
  {/* 標題 */}
  <div className="floral-header">
    <h3>花卉種類</h3>
    <img src={FloralVarieties} alt="Floral Varieties" className="floral-icon" />
  </div>

  {/* 花卉展示區 */}
  <div className="floral-gallery">
    {/* 第一組：櫻花 */}
    <div className="flower-group">
      <div className="flower-stack">
        <img src={flowerbg} alt="背景" className="flower-bg" />
        <img src={flower1} alt="花卉1" className="flower-main" />
      </div>
      <p className="flower-text sakura">櫻花</p>
    </div>

    {/* 第二組：鬱金香 */}
    <div className="flower-group">
      <div className="flower-stack">
        <img src={flowerbg} alt="背景" className="flower-bg" />
        <img src={flower1} alt="花卉2" className="flower-main" />
      </div>
      <p className="flower-text tulip">鬱金香</p>
    </div>

    {/* 第三組：薰衣草 */}
    <div className="flower-group">
      <div className="flower-stack">
        <img src={flowerbg} alt="背景" className="flower-bg" />
        <img src={flower1} alt="花卉3" className="flower-main" />
      </div>
      <p className="flower-text lavender">薰衣草</p>
    </div>
  </div>
</div>


    {/* 區塊二：活動亮點 */}
<div className="section-highlight">
  {/* 標題區 */}
  <div className="highlight-header">
    <img src={Point} alt="裝飾" className="highlight-icon" />
    <h3>活動亮點</h3>
  </div>

  {/* 活動亮點圖組 */}
  <div className="highlight-gallery">
    

    {/* 三組活動亮點 */}
    <div className="highlight-groups">
  <div className="highlight-group">
    <img src={flowerg} alt="底層背景" className="highlight-bg" />
    <img src={flowerg1} alt="活動 1" className="highlight-image" />
    <p className="highlight-text">攝影比賽</p>
  </div>

  <div className="highlight-group">
    <img src={flowerg} alt="底層背景" className="highlight-bg" />
    <img src={flowerg2} alt="活動 2" className="highlight-image" />
    <p className="highlight-text">花卉市集</p>
  </div>

  <div className="highlight-group">
    <img src={flowerg} alt="底層背景" className="highlight-bg" />
    <img src={flowerg3} alt="活動 3" className="highlight-image" />
    <p className="highlight-text">燈光秀</p>
  </div>


      {/* 第二組 */}
      <div className="highlight-group">
        <img src={flowerg} alt="底層背景" className="highlight-bg" />
        <img src={flowerg2} alt="活動二" className="highlight-image" />
        <p className="highlight-text">花卉市集</p>
      </div>

      {/* 第三組 */}
      <div className="highlight-group">
        <img src={flowerg} alt="底層背景" className="highlight-bg" />
        <img src={flowerg3} alt="活動三" className="highlight-image" />
        <p className="highlight-text">燈光秀</p>
      </div>
    </div>

    
  </div>
</div>


    {/* 官方聯絡資訊區塊 */}
<div className="contact-section">
  {/* 社群圖示 */}
  <div className="social-icons">
    <img src={threadicon} alt="Thread" />
    <img src={igicon} alt="Instagram" />
    <img src={fbicon} alt="Facebook" />
  </div>

  {/* 標題 + phone 圖標 */}
  <div className="contact-header">
    <h2>官方聯絡資訊</h2>
    <img src={phone} alt="Phone" className="phone-icon" />
  </div>

  {/* 聯絡資訊文字 */}
  <div className="contact-info">
    <div className="contact-item">
      <p className="title">電子郵件</p>
      <p className="value">1237894@tmu.edu.tw</p>
    </div>

    <div className="contact-item">
      <p className="title">連絡電話</p>
      <p className="value">(02) 2345-1244</p>
    </div>
  </div>
</div>
</div>

)}

{/* 交通資訊 */}
          {activeIndex === 1 && (
            <div className="transport-section">
              <div className="transport-container">
                <div className="transport-left">
                  {[
                    {
                      icon: car,
                      lines: ["汽車圖標文字1", "走路約 3 分鐘", "查看位置 >"],
                    },
                    {
                      icon: mrt,
                      lines: [
                        <img src={mrtyuanshan} alt="MRT Yuanshan" />,
                        "走路約 3 分鐘",
                        "查看位置 >",
                      ],
                    },
                    {
                      icon: bus,
                      lines: ["公車圖標文字1", "走路約 3 分鐘", "查看位置 >"],
                    },
                  ].map((item, idx) => (
                    <div className="transport-item" key={idx}>
                      <img className="icon" src={item.icon} alt="" />
                      <div className="item-content">
                        {/* 原本三組文字 */}
                        <div className="text-block">
                          <div className="line1">{item.lines[0]}</div>
                          <div className="line2">{item.lines[1]}</div>
                          <div className="line3">
                            <a href="#">{item.lines[2]}</a>
                          </div>
                        </div>
                        <div className="divider"></div>
                        <div className="text-block-right">
                          <div className="line1">{item.lines[0]}</div>
                          <div className="line2">{item.lines[1]}</div>
                          <div className="line3">
                            <a href="#">{item.lines[2]}</a>
                          </div>
                        </div>
                        <div className="divider"></div>
                        <div className="text-block-extra">
                          <div className="line1">{item.lines[0]}</div>
                          <div className="line2">{item.lines[1]}</div>
                          <div className="line3">
                            <a href="#">{item.lines[2]}</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="transport-right">
                  <MapIframe />
                </div>
              </div>
            </div>
          )}

          {activeIndex === 2 && (
            <div className="surrounding-content">
              {/* 美食小點 */}
              <div className="food-section">
                <div className="info-container">
                  <h3>美食小點</h3>
                  <div className="food-carousel">
                    <button className="arrow arrow-left">
                      <img src={arrowlf} alt="左箭頭" />
                    </button>
                    <div
                      className="food-groups"
                      ref={(el) => (foodGroupsRef.current[1] = el)}
                    >
                      {[1, 2, 3].map((_, index) => (
                        <div className="food-group" key={index}>
                          <img
                            src={foodbgpink}
                            alt="背景粉色"
                            className="foodbgpink"
                          />
                          <div className="foodptopink-wrapper">
                            <img
                              src={foodptopink}
                              alt="前景粉色"
                              className="foodptopink"
                            />
                            <div className="foodptopink-overlay">
                              <p>景點名稱</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <button className="arrow arrow-right">
                      <img src={arrowri} alt="右箭頭" />
                    </button>
                  </div>
                </div>
              </div>

              {/* 附近景點 */}
              <div className="attraction-section">
                <div className="info-container">
                  <h3>附近景點</h3>
                  <div className="food-carousel">
                    <button className="arrow arrow-left">
                      <img src={arrowlf} alt="左箭頭" />
                    </button>
                    <div
                      className="food-groups"
                      ref={(el) => (foodGroupsRef.current[0] = el)}
                    >
                      {[1, 2, 3].map((_, index) => (
                        <div className="food-group" key={index}>
                          <img
                            src={attbgblu}
                            alt="背景藍色"
                            className="foodbgpink"
                          />
                          <div className="foodptopink-wrapper">
                            <img
                              src={attptoblu}
                              alt="前景藍色"
                              className="foodptopink"
                            />
                            <div className="foodptopink-overlay">
                              <p>李記車輪餅</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <button className="arrow arrow-right">
                      <img src={arrowri} alt="右箭頭" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Info;

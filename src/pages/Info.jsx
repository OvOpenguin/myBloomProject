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

        <div className="tab-contents">
          {activeIndex === 0 && (
            <div>這是活動介紹內容，可以放文字或圖片描述活動細節</div>
          )}

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

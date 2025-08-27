import "../sass/map.scss";
import FlowerEvent from '../json/FlowerEvent.json';
import { useState } from "react";

import 春 from "../images/map/花卉地圖-春季標籤-黃.svg"
import 夏 from "../images/map/花卉地圖-夏季標籤-綠.svg"
import 秋 from "../images/map/花卉地圖-秋季標籤-橘.svg"
import 冬 from "../images/map/花卉地圖-冬季標籤-藍.svg"

// google地圖
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

const Map = () => {

  const [selectedlocation, setSelectedLocation] = useState("");
  const oplocation = ['臺北市', '新北市', '基隆市', '桃園市', '新竹市', '新竹縣', '宜蘭縣']
  const [selectmonth, setSelectMonth] = useState("");
  const opmonth = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
  const [selectedflower, setSelectedFlower] = useState("");
  const opflower = ['玫瑰', '櫻花', '梅花', '木棉花', '茶花'];

  const filtered = FlowerEvent.filter((item) => {
    return (
      (selectmonth === "" || item.month === selectmonth) &&
      (selectedlocation === "" || item.location === selectedlocation) &&
      (selectedflower === "" || item.flower === selectedflower)
    );
  });

  const Mapcard = (({ lable, img, date, title }) => {
    return (
      <a href="#" className="map-card">
        <p className="map-lable">{lable}</p>
        <img src={img} className="map-img" alt="" />
        <div className="map-date">{date}</div>
        <h3 className="map-title">{title}</h3>
      </a>
    );
  });

  const fourseason = [
    { name: "春", img: 春 },
    { name: "夏", img: 夏 },
    { name: "秋", img: 秋 },
    { name: "冬", img: 冬 },
  ]

  // 定義月份對應的季節
  const monthToSeason = (month) => {
    if (["3月", "4月", "5月"].includes(month)) return "春";
    if (["6月", "7月", "8月"].includes(month)) return "夏";
    if (["9月", "10月", "11月"].includes(month)) return "秋";
    if (["12月", "1月", "2月"].includes(month)) return "冬";
    return "";
  };

  const season = monthToSeason(selectmonth);

  return (
    <>
      <section className="map-inner">
        <div className="map-search">
          <h2>花卉地圖 MAP</h2>
          <div className="map-selectAll">
            <div className="map-season">
              {season ? (
                <img
                  src={ season === "春" ? 春 :
                      season === "夏" ? 夏 :
                        season === "秋" ? 秋 : 冬 }
                  alt={season} className="season-icon"
                />
              ) : (
                <div className="empty-box"></div> // 先放空的佔位
              )}
              <div className="map-four">
                {fourseason.map((s) => (
                  <div key={s.name}>
                    {season === s.name ? (
                      <div className="empty-slot" /> // 被選中的季節變空白
                    ) : (
                      <img src={s.img} alt={s.name}/>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="map-select">
              <select name="" id="" value={selectmonth} onChange={(e) => { setSelectMonth(e.target.value); }}>
                <option value="" >月份</option>
                {
                  opmonth.map((item, index) => {
                    return <option key={item} value={opmonth[index]}>{item}</option>
                  })
                }
              </select>
              <select name="" id="" value={selectedlocation} onChange={(e) => { setSelectedLocation(e.target.value); }}>
                <option value="">地區</option>
                {
                  oplocation.map((item, index) => {
                    return <option key={item} value={oplocation[index]}>{item}</option>
                  })
                }
              </select>
              <select name="" id="" value={selectedflower} onChange={(e) => { setSelectedFlower(e.target.value); }}>
                <option value="">品種</option>
                {
                  opflower.map((item, index) => {
                    return <option key={item} value={opflower[index]}>{item}</option>
                  })
                }
              </select>
            </div>
          </div>
          <div className="map-map">
            <MapIframe />
          </div>
        </div>

        <div className="map-event">
          <div className="map-e-title">
            <h2 >賞花活動 EVENT</h2>
          </div>
          <div className="map-cardWarp">
            {filtered.map((item, index) => {
              return <Mapcard key={index} lable={item.lable} img={item.img} date={item.date} title={item.title} />
            })}

            {/* <a href="#" className="map-card">
              <p className="map-lable">台北</p>
              <img src="https://cdn.pixabay.com/photo/2020/04/14/03/57/pear-5040797_1280.jpg" className="map-img" alt="" />
              <div className="map-date">07.01 — 09.23</div>
              <h3 className="map-title">樟樹步道花海</h3>
            </a> */}

          </div>
        </div>
      </section>



    </>
  )
}

export default Map
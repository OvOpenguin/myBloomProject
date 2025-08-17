import "../sass/map.scss"
import { useState } from "react";


import 春 from "../images/花卉地圖-春季標籤-黃.svg"
import 夏 from "../images/花卉地圖-夏季標籤-綠.svg"
import 秋 from "../images/花卉地圖-秋季標籤-橘.svg"
import 冬 from "../images/花卉地圖-冬季標籤-藍.svg"
import mapby from "../images/map-bc-y.svg"

// 月份選單
function MapMonth({ name = "selectedmonth", value, onChange }) {
  return (
    <select name={name} value={value} onChange={(e) => onChange(e.target.value)}>
      <option value="" disabled>月份</option>
      <option value="1月">1月</option>
      <option value="2月">2月</option>
      <option value="3月">3月</option>
      <option value="4月">4月</option>
      <option value="5月">5月</option>
      <option value="6月">6月</option>
      <option value="7月">7月</option>
      <option value="8月">8月</option>
      <option value="9月">9月</option>
      <option value="10月">10月</option>
      <option value="11月">11月</option>
      <option value="21月">12月</option>
    </select>
  );
}
// 地區選單
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
// 品種選單
function MapFlower({ name = "selectedflower", value, onChange }) {
  return (
    <select name={name} value={value} onChange={(e) => onChange(e.target.value)}>
      <option value="" disabled>品種</option>

    </select>
  );
}
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

  const [selectedmonth, setSelectedMonth] = useState("");
  const [selectedlocation, setSelectedLocation] = useState("");
  const [selectedflower, setSelectedFlower] = useState("");

  return (
    <>
      <section className="map-inner">
        <div className="map-search">
          <h2>花卉地圖 MAP</h2>
          <div className="map-selectAll">
            <div className="map-season">
              <img src={夏} alt="" />
              <div className="map-four">
                <img src={春} alt="" />
                <img src={秋} alt="" />
                <img src={夏} alt="" />
                <img src={冬} alt="" />
              </div>
            </div>
            <div className="map-select">
              <MapMonth value={selectedmonth} onChange={setSelectedMonth} />
              <MapLocation value={selectedlocation} onChange={setSelectedLocation} />
              <MapFlower value={selectedflower} onChange={setSelectedFlower} />
            </div>
          </div>
          <div className="map-map">
            <MapIframe />
            {/* <img src={mapby} alt="" /> */}
          </div>
        </div>

        <div className="map-event">
          <h2>賞花活動 EVENT</h2>
          <div className="map-cardWarp">
            <div className="map-card">
              <div className="map-lable">台北</div>
              <img src="https://cdn.pixabay.com/photo/2020/04/14/03/57/pear-5040797_1280.jpg" className="map-img" alt="" />
              <div className="map-date">07.01-09.23</div>
              <div className="map-title">樟樹步道花海</div>
            </div>
            <div className="map-card">
              <div className="map-lable">台北</div>
              <img src="https://cdn.pixabay.com/photo/2020/04/14/03/57/pear-5040797_1280.jpg" className="map-img" alt="" />
              <div className="map-date">07.01-09.23</div>
              <div className="map-title">樟樹步道花海</div>
            </div>
            <div className="map-card">
              <div className="map-lable">台北</div>
              <img src="https://cdn.pixabay.com/photo/2020/04/14/03/57/pear-5040797_1280.jpg" className="map-img" alt="" />
              <div className="map-date">07.01-09.23</div>
              <div className="map-title">樟樹步道花海</div>
            </div>
            <div className="map-card">
              <div className="map-lable">台北</div>
              <img src="https://cdn.pixabay.com/photo/2020/04/14/03/57/pear-5040797_1280.jpg" className="map-img" alt="" />
              <div className="map-date">07.01-09.23</div>
              <div className="map-title">樟樹步道花海</div>
            </div>

          </div>
        </div>
      </section>



    </>
  )
}

export default Map
import "../sass/map.scss"
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
  const opflower = ['玫瑰'];

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
              <select name="" id="" value={selectmonth} onChange={(e) => { setSelectMonth(e.target.value); }}>
                <option value="" disabled>選擇</option>
                {
                  opmonth.map((item, index) => {
                    return <option key={item} value={opmonth[index]}>{item}</option>
                  })
                }
              </select>
              <select name="" id="" value={selectedlocation} onChange={(e) => { setSelectedLocation(e.target.value); }}>
                <option value="" disabled>選擇</option>
                {
                  oplocation.map((item, index) => {
                    return <option key={item} value={oplocation[index]}>{item}</option>
                  })
                }
              </select>
              <select name="" id="" value={selectedflower} onChange={(e) => { setSelectedFlower(e.target.value); }}>
                <option value="" disabled>選擇</option>
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
            {/* <img src={mapby} alt="" /> */}
          </div>
        </div>

        <div className="map-event">
          <div className="map-e-title">

          <h2 >賞花活動 EVENT</h2>
          </div>
          <div className="map-cardWarp">
            <a  href="#" className="map-card">
              <p className="map-lable">台北</p>
              <img src="https://cdn.pixabay.com/photo/2020/04/14/03/57/pear-5040797_1280.jpg" className="map-img" alt="" />
              <div className="map-date">07.01 — 09.23</div>
              <h3 className="map-title">樟樹步道花海</h3>
            </a>
            <a  href="#" className="map-card">
              <p className="map-lable">台北</p>
              <img src="https://cdn.pixabay.com/photo/2020/04/14/03/57/pear-5040797_1280.jpg" className="map-img" alt="" />
              <div className="map-date">07.01 — 09.23</div>
              <h3 className="map-title">樟樹步道花海</h3>
            </a>
            <a  href="#" className="map-card">
              <p className="map-lable">台北</p>
              <img src="https://cdn.pixabay.com/photo/2020/04/14/03/57/pear-5040797_1280.jpg" className="map-img" alt="" />
              <div className="map-date">07.01 — 09.23</div>
              <h3 className="map-title">樟樹步道花海</h3>
            </a>
            <a  href="#" className="map-card">
              <p className="map-lable">台北</p>
              <img src="https://cdn.pixabay.com/photo/2020/04/14/03/57/pear-5040797_1280.jpg" className="map-img" alt="" />
              <div className="map-date">07.01 — 09.23</div>
              <h3 className="map-title">樟樹步道花海</h3>
            </a>
            <a  href="#" className="map-card">
              <p className="map-lable">台北</p>
              <img src="https://cdn.pixabay.com/photo/2020/04/14/03/57/pear-5040797_1280.jpg" className="map-img" alt="" />
              <div className="map-date">07.01 — 09.23</div>
              <h3 className="map-title">樟樹步道花海</h3>
            </a>
            <a  href="#" className="map-card">
              <p className="map-lable">台北</p>
              <img src="https://cdn.pixabay.com/photo/2020/04/14/03/57/pear-5040797_1280.jpg" className="map-img" alt="" />
              <div className="map-date">07.01 — 09.23</div>
              <h3 className="map-title">樟樹步道花海</h3>
            </a>

          </div>
        </div>
      </section>



    </>
  )
}

export default Map
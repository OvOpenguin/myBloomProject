import { useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

import FlowerEvent from '../json/FlowerEvent.json';
import "leaflet/dist/leaflet.css";
import "../sass/map.scss";
import Nav from '../components/Nav'

import 春 from "../images/map/花卉地圖-春季標籤-黃.svg"
import 夏 from "../images/map/花卉地圖-夏季標籤-綠.svg"
import 秋 from "../images/map/花卉地圖-秋季標籤-橘.svg"
import 冬 from "../images/map/花卉地圖-冬季標籤-藍.svg"
import { Link } from "react-router-dom";
import L from "leaflet";



// 活動卡片
const Mapcard = ({ item, onClick }) => (
  <Link to={`/info/${item.id}`} key={item.id}>
    <button className="map-card" onClick={() => onClick(item.id)}>
      <p className="map-lable">{item.lable}</p>
      <img src={item.img} className="map-img" alt="" />
      <div className="map-date">{item.date}</div>
      <h3 className="map-title">{item.title}</h3>
    </button>
  </Link>
);

const Map = () => {

  const [selectedlocation, setSelectedLocation] = useState("");
  const oplocation = ["臺北市", "新北市", "基隆市", "桃園市", "新竹市", "新竹縣", "宜蘭縣"];
  const [selectmonth, setSelectMonth] = useState("");
  const opmonth = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
  const [selectedflower, setSelectedFlower] = useState("");
  const opflower = ["玫瑰", "鬱金香", "鼠尾草", "大波斯菊", "杜鵑花", "仙草花", "海芋", "韭菜花", "孤挺花", "天南星科植物", "秋石斛", "繡球花", "菊花", "荷花"];

  const [activeId, setActiveId] = useState(null); // 目前選中的活動 ID
  const markerRefs = useRef({}); // 存放 marker 的 ref

  // 選單篩選
  const filtered = FlowerEvent.filter((item) => {
    const months = Array.isArray(item.month) ? item.month : [item.month]; // 轉陣列用includes
    const flowers = Array.isArray(item.flower) ? item.flower : [item.flower]; // 轉陣列用includes
    return (
      (selectmonth === "" || months.includes(selectmonth)) &&
      (selectedlocation === "" || item.location === selectedlocation) &&
      (selectedflower === "" || flowers.includes(selectedflower))
    );

  });

  // 當點擊卡片 → zoom 到該 marker & 打開 popup
  // const FlyToMarker = ({ lat, lng, id }) => {
  //   const map = useMap();
  //   if (lat && lng && id) {
  //     map.flyTo([lat, lng], 12, { duration: 1.5 });
  //     // 延遲一點打開 popup
  //     setTimeout(() => {
  //       markerRefs.current[id]?.openPopup();
  //     }, 800);
  //   }
  //   return null;
  // };

  // const activeItem = FlowerEvent.find((f) => f.id === activeId);

  // 四季更換圖片
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

  // 自定義地標
  const locationlogo = L.icon({
    iconUrl: './map/locationlogo2.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    shadowSize: [41, 41],
    shadowAnchor: [12, 43]
  });


  // 主結構
  return (
    <>
      <Nav></Nav>
      <section className="map-inner">

        {/* 左側活動欄位 */}
        <div className="map-search">
          <h2>花卉地圖 MAP</h2>
          <div className="map-selectAll">

            {/* 四季更換圖片 */}
            <div className="map-season">
              {season ? (
                <img
                  src={season === "春" ? 春 :
                    season === "夏" ? 夏 :
                      season === "秋" ? 秋 : 冬}
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
                      <img src={s.img} alt={s.name} />
                    )}
                  </div>
                ))}
              </div>
            </div>
            {/* 選擇器 */}
            <div className="map-select">
              <select value={selectmonth} onChange={(e) => setSelectMonth(e.target.value)}>
                <option value="">月份</option>
                {opmonth.map((item) => (
                  <option key={item} value={item}>{item}</option>
                ))}
              </select>
              <select value={selectedlocation} onChange={(e) => setSelectedLocation(e.target.value)}>
                <option value="">地區</option>
                {oplocation.map((item) => (
                  <option key={item} value={item}>{item}</option>
                ))}
              </select>
              <select value={selectedflower} onChange={(e) => setSelectedFlower(e.target.value)}>
                <option value="">品種</option>
                {opflower.map((item) => (
                  <option key={item} value={item}>{item}</option>
                ))}
              </select>
            </div>
          </div>

          {/* 地圖 */}
          <div className="map-map">
            <div className="padmap">
              <MapContainer className="leafmap" center={[25.07, 121.45]} zoom={10}>
                <TileLayer
                  url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                  attribution='Positron'
                />
                {filtered.map((item) => (
                  <Marker
                    key={item.id}
                    position={[item.lat, item.lng]}
                    icon={locationlogo}
                    ref={(ref) => { markerRefs.current[item.id] = ref; }}
                  >
                    <Popup>
                      <div>
                        <h3>{item.title}</h3>
                        <p>{item.lable} | {item.date}</p>
                        <Link to='/info'><img src={item.img} alt={item.title} width="150" /></Link>
                      </div>
                    </Popup>
                  </Marker>
                ))}

                {/* 飛到 & 打開 popup */}
                {/* {activeItem && <FlyToMarker lat={activeItem.lat} lng={activeItem.lng} id={activeItem.id} />} */}
              </MapContainer>
            </div>
          </div>
        </div>

        {/*右側活動欄位 */}
        <div className="map-event">
          <div className="map-e-title">
            <h2>賞花活動 EVENT</h2>
          </div>
          <div className="map-cardWarp">
            {filtered.map((item) => (

              <Mapcard key={item.id} item={item} onClick={(id) => setActiveId(id)} />

            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Map;

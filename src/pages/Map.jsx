// import "../sass/map.scss";
// import FlowerEvent from '../json/FlowerEvent.json';
// import { useState } from "react";

// import 春 from "../images/map/花卉地圖-春季標籤-黃.svg"
// import 夏 from "../images/map/花卉地圖-夏季標籤-綠.svg"
// import 秋 from "../images/map/花卉地圖-秋季標籤-橘.svg"
// import 冬 from "../images/map/花卉地圖-冬季標籤-藍.svg"

// // google地圖
// function MapIframe() {
//   return (
//     <iframe
//       title="Google Map"
//       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4298.543421308874!2d121.51861719589644!3d25.04663600089511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a96da144d9f9%3A0xc7aaab18623bf211!2z5Lqs56uZ5pmC5bCa5buj5aC0!5e0!3m2!1szh-TW!2stw!4v1755233965825!5m2!1szh-TW!2stw"
//       style={{ border: 0 }}
//       allowFullScreen=""
//       loading="lazy"
//       referrerPolicy="no-referrer-when-downgrade"
//     ></iframe>
//   );
// }

// const Map = () => {
//   const [selectedlocation, setSelectedLocation] = useState("");
//   const oplocation = ['臺北市', '新北市', '基隆市', '桃園市', '新竹市', '新竹縣', '宜蘭縣']
//   const [selectmonth, setSelectMonth] = useState("");
//   const opmonth = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
//   const [selectedflower, setSelectedFlower] = useState("");
//   const opflower = ['玫瑰', '櫻花', '梅花', '木棉花', '茶花'];

//   const filtered = FlowerEvent.filter((item) => {
//     return (
//       (selectmonth === "" || item.month === selectmonth) &&
//       (selectedlocation === "" || item.location === selectedlocation) &&
//       (selectedflower === "" || item.flower === selectedflower)
//     );
//   });

//   const Mapcard = (({ lable, img, date, title }) => {
//     return (
//       <a href="#" className="map-card">
//         <p className="map-lable">{lable}</p>
//         <img src={img} className="map-img" alt="" />
//         <div className="map-date">{date}</div>
//         <h3 className="map-title">{title}</h3>
//       </a>
//     );
//   });

//   const fourseason = [
//     { name: "春", img: 春 },
//     { name: "夏", img: 夏 },
//     { name: "秋", img: 秋 },
//     { name: "冬", img: 冬 },
//   ]

//   // 定義月份對應的季節
//   const monthToSeason = (month) => {
//     if (["3月", "4月", "5月"].includes(month)) return "春";
//     if (["6月", "7月", "8月"].includes(month)) return "夏";
//     if (["9月", "10月", "11月"].includes(month)) return "秋";
//     if (["12月", "1月", "2月"].includes(month)) return "冬";
//     return "";
//   };
//   const season = monthToSeason(selectmonth);



//   // 主程式結構
//   return (
//     <>
//       <section className="map-inner">

//         {/* 左側活動欄位 */}
//         <div className="map-search">
//           <h2>花卉地圖 MAP</h2>
//           <div className="map-selectAll">
//             <div className="map-season">
//               {season ? (
//                 <img
//                   src={ season === "春" ? 春 :
//                       season === "夏" ? 夏 :
//                         season === "秋" ? 秋 : 冬 }
//                   alt={season} className="season-icon"
//                 />
//               ) : (
//                 <div className="empty-box"></div> // 先放空的佔位
//               )}
//               <div className="map-four">
//                 {fourseason.map((s) => (
//                   <div key={s.name}>
//                     {season === s.name ? (
//                       <div className="empty-slot" /> // 被選中的季節變空白
//                     ) : (
//                       <img src={s.img} alt={s.name}/>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <div className="map-select">
//               <select name="" id="" value={selectmonth} onChange={(e) => { setSelectMonth(e.target.value); }}>
//                 <option value="" >月份</option>
//                 {
//                   opmonth.map((item, index) => {
//                     return <option key={item} value={opmonth[index]}>{item}</option>
//                   })
//                 }
//               </select>
//               <select name="" id="" value={selectedlocation} onChange={(e) => { setSelectedLocation(e.target.value); }}>
//                 <option value="">地區</option>
//                 {
//                   oplocation.map((item, index) => {
//                     return <option key={item} value={oplocation[index]}>{item}</option>
//                   })
//                 }
//               </select>
//               <select name="" id="" value={selectedflower} onChange={(e) => { setSelectedFlower(e.target.value); }}>
//                 <option value="">品種</option>
//                 {
//                   opflower.map((item, index) => {
//                     return <option key={item} value={opflower[index]}>{item}</option>
//                   })
//                 }
//               </select>
//             </div>
//           </div>

//           <div className="map-map">
//             <MapIframe />
//           </div>
//         </div>

//         {/* 右側活動欄位 */}
//         <div className="map-event">
//           <div className="map-e-title">
//             <h2 >賞花活動 EVENT</h2>
//           </div>
//           <div className="map-cardWarp">
//             {filtered.map((item, index) => {
//               return <Mapcard key={index} lable={item.lable} img={item.img} date={item.date} title={item.title} />
//             })}

//             {/* <a href="#" className="map-card">
//               <p className="map-lable">台北</p>
//               <img src="https://cdn.pixabay.com/photo/2020/04/14/03/57/pear-5040797_1280.jpg" className="map-img" alt="" />
//               <div className="map-date">07.01 — 09.23</div>
//               <h3 className="map-title">樟樹步道花海</h3>
//             </a> */}

//           </div>
//         </div>

//       </section>
//     </>
//   )
// }

// export default Map


// Map.jsx
import { useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../sass/map.scss";

import 春 from "../images/map/花卉地圖-春季標籤-黃.svg"
import 夏 from "../images/map/花卉地圖-夏季標籤-綠.svg"
import 秋 from "../images/map/花卉地圖-秋季標籤-橘.svg"
import 冬 from "../images/map/花卉地圖-冬季標籤-藍.svg"



// 假活動資料
const FlowerEvent = [
  {
    id: 1,
    lable: "台北",
    month: "3月",
    location: "臺北市",
    flower: "櫻花",
    lat: 25.033,
    lng: 121.5654,
    img: "https://placehold.co/200x120",
    date: "03.01 — 03.31",
    title: "陽明山櫻花祭",
  },
  {
    id: 2,
    lable: "新北",
    month: "4月",
    location: "新北市",
    flower: "玫瑰",
    lat: 25.012,
    lng: 121.4628,
    img: "https://placehold.co/200x120",
    date: "04.01 — 04.30",
    title: "淡水玫瑰園",
  },
  {
    id: 3,
    lable: "宜蘭",
    month: "6月",
    location: "宜蘭縣",
    flower: "木棉花",
    lat: 24.757,
    lng: 121.754,
    img: "https://placehold.co/200x120",
    date: "06.01 — 06.15",
    title: "羅東木棉花道",
  },
];

// 活動卡片
const Mapcard = ({ item, onClick }) => (
  <button className="map-card" onClick={() => onClick(item.id)}>
    <p className="map-lable">{item.lable}</p>
    <img src={item.img} className="map-img" alt="" />
    <div className="map-date">{item.date}</div>
    <h3 className="map-title">{item.title}</h3>
  </button>
);

const Map = () => {

  const [selectedlocation, setSelectedLocation] = useState("");
  const oplocation = ["臺北市", "新北市", "基隆市", "桃園市", "新竹市", "新竹縣", "宜蘭縣"];
  const [selectmonth, setSelectMonth] = useState("");
  const opmonth = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
  const [selectedflower, setSelectedFlower] = useState("");
  const opflower = ["玫瑰", "櫻花", "梅花", "木棉花", "茶花"];

  const [activeId, setActiveId] = useState(null); // 目前選中的活動 ID
  const markerRefs = useRef({}); // 存放 marker 的 ref

  // 選單篩選
  const filtered = FlowerEvent.filter((item) => {
    return (
      (selectmonth === "" || item.month === selectmonth) &&
      (selectedlocation === "" || item.location === selectedlocation) &&
      (selectedflower === "" || item.flower === selectedflower)
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

  const activeItem = FlowerEvent.find((f) => f.id === activeId);


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



  // 主結構
  return (
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
            <MapContainer className="leafmap" center={[25.0, 121.53]} zoom={13}>
              <TileLayer
                url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {filtered.map((item) => (
                <Marker
                  key={item.id}
                  position={[item.lat, item.lng]}
                  ref={(ref) => { markerRefs.current[item.id] = ref; }}
                >
                  <Popup>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.lable} | {item.date}</p>
                      <img src={item.img} alt={item.title} width="150" />
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
  );
};

export default Map;

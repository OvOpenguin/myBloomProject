import "../sass/map.scss"


import 春 from "../images/花卉地圖-春季標籤-黃.svg"
import 夏 from "../images/花卉地圖-夏季標籤-綠.svg"
import 秋 from "../images/花卉地圖-秋季標籤-橘.svg"
import 冬 from "../images/花卉地圖-冬季標籤-藍.svg"

const Map = () => {
  return (
    <>
      <section className="map-inner">
        <div className="map-search">
          <h2>花卉地圖 MAP</h2>
          <div className="map-select">
            <div className="map-season">
              <img src="" alt="" />
              <div className="map-four">
                <img src={春} alt="" />
                <img src={夏} alt="" />
                <img src={秋} alt="" />
                <img src={冬} alt="" />
              </div>
            </div>
            <div>地區</div>
            <div>月份</div>
            <div>品種</div>
          </div>
          <div className="map-map">
            地圖
          </div>
        </div>
        <div className="map-event">
          <h2>賞花活動 EVENT</h2>
          <div className="map-cardWarp">
            <div className="map-card">
              <div className="map-lable">台北</div>
              <img src="" alt="" />
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
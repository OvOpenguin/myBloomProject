import { useState, useRef, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { motion } from "framer-motion";

import "../sass/info.scss";
import Nav from '../components/Nav'

import locationlogo from '/map/locationlogo2.svg'
import icon無障礙 from "../images/info/icon-03.svg";
import icon哺乳室 from "../images/info/icon-01.svg";
import icon停車場 from "../images/info/icon-02.svg";
import weatherbg from "../images/info/weatherbg.svg";
import bgpin from "../images/info/bgpin.svg";
import bgor from "../images/info/bgor.svg";
import bgblu from "../images/info/bgblu.svg";
import bgyel from "../images/info/bgyel.svg";

import attbgpin from "../images/info/attbgpin.svg";
import attbgor from "../images/info/attbgor.svg";
import attbgblu from "../images/info/attbgblu.svg";
import attbgyel from "../images/info/attbgyel.svg";

import coffeeshop1 from "../images/info/coffeeshop1.png";
import coffeeshop2 from "../images/info/coffeeshop2.png";
import coffeeshop3 from "../images/info/coffeeshop3.png";
import coffeeshop4 from "../images/info/coffeeshop4.png";

import arrowlf from "../images/info/arrow-left.svg";
import arrowri from "../images/info/arrow-right.svg";
import attpto1 from "../images/info/attpto1.png";
import attpto2 from "../images/info/attpto2.png";
import attpto3 from "../images/info/attpto3.png";
import attpto4 from "../images/info/attpto4.png";

import bus from "../images/info/bus.png";
import mrt from "../images/info/mrt.png";
import car from "../images/info/car.png";
import mrtyuanshan from "../images/info/mrtyuanshan.svg";
import mrtminquanwest from "../images/info/mrtminquanwest.svg";
import mrtzhongshan from "../images/info/mrtzhongshan.svg";
import flowerbg from "../images/info/flower-background.svg";
import FloralVarieties from "../images/info/FloralVarieties.svg";
import Point from "../images/info/Point.svg";
import highlightcultural from "../images/info/highlightcultural.png";
import highlightlight from "../images/info/highlightlight.png";
import highlightmar from "../images/info/highlightmar.png";
import highlightpho from "../images/info/highlightpho.png";
import highlightdiy from "../images/info/highlightdiy.png";
import highlightmusic from "../images/info/highlightmusic.png";
import highlightchild from "../images/info/highlightchild.png";
import umbrella from "../images/info/umbrella.svg";
import raining from "../images/info/raining.svg";
import sunny from "../images/info/sunny.svg";
import cloudy from "../images/info/cloudy.svg";

import flowerg from "../images/info/flowerg.svg";
import phone from "../images/info/phone.svg";
import fbicon from "../images/info/fbicon.png";
import igicon from "../images/info/igicon.png";
import threadicon from "../images/info/threadicon.png";
import sunflower from "../images/info/sunflower.png";
import SulphurCosmos from "../images/info/SulphurCosmos.png";
import Zinnia from "../images/info/Zinnia.png";
import Daylily from "../images/info/Daylily.png";

import TabGreen from "../images/info/tabsgreen.svg";
import TabBlue from "../images/info/tabsblue.svg";
import TabPink from "../images/info/tabsipnk.svg";

import BnBg from "../images/info/BnBg.png";

import { IoIosArrowDropright } from "react-icons/io";
import { IoIosArrowDropleft } from "react-icons/io";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

import { fetchWeather } from "../api/weather.js";
import FlowerEvent from '../json/FlowerEvent.json';
import GotopBtn from '../components/GotopBtn'
import { Link } from "react-router-dom";


const tabIcons = [TabGreen, TabBlue, TabPink];

const tabs = ["活動介紹", "交通資訊", "周邊推薦"];

// Google 地圖元件
function MapIframe() {
  return (
    <iframe
      title="Google Map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1806.8980727789026!2d121.53579949152474!3d25.074897607626365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a95490469cfb%3A0x92031888eea032b5!2z6Iqx5Y2a5aSn5L2z5rKz5r-x5YWs5ZyS5Y2A!5e0!3m2!1szh-TW!2stw!4v1758009010848!5m2!1szh-TW!2stw"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
}

const Info = () => {
  const { id } = useParams();
  const event = FlowerEvent.find(item => item.id.toString() === id);

  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    if (event && event.location) {
      fetchWeather(event.location).then((data) => setWeatherData(data));
    }
  }, [event]);

  // 路由設定

  if (!event) {
    return <div>找不到該活動。</div>;
  }

  // Info.jsx
  const getWeatherIcon = (data) => {
    if (!data) return cloudy;

    const rainProb = parseInt(
      data.records.location[0].weatherElement
        .find(el => el.elementName === "PoP")
        .time[0].parameter.parameterName
    );

    if (rainProb >= 60) return raining;
    if (rainProb <= 10) return sunny;
    return cloudy;
  };

  const getTemperature = (data) => {
    if (!data) return "-";
    return data.records.location[0].weatherElement
      .find(el => el.elementName === "MaxT")
      .time[0].parameter.parameterName;
  };

  const getCity = (data) => {
    if (!data) return "-";
    return data.records.location[0].locationName;
  };

  const getRainProbability = (data) => {
    if (!data) return "-";
    return data.records.location[0].weatherElement
      .find(el => el.elementName === "PoP")
      .time[0].parameter.parameterName;
  };

  const getDate = (data) => {
    if (!data) return "-";
    const time = data.records.location[0].weatherElement[0].time[0].startTime;
    return new Date(time).toLocaleDateString("zh-TW", { month: "2-digit", day: "2-digit" });
  };

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
  const slideFood = (index, direction) => {
    const container = foodGroupsRef.current[index];
    if (!container) return;

    const cardWidth = container.children[0].offsetWidth + 20; // 20 是 gap

    if (direction === "right") {
      container.scrollBy({ left: cardWidth, behavior: "smooth" });
      // 如果滑到底，延遲跳回最前
      if (container.scrollLeft + container.offsetWidth >= container.scrollWidth) {
        setTimeout(() => {
          container.scrollTo({ left: 0, behavior: "smooth" });
        }, 300);
      }
    } else {
      container.scrollBy({ left: -cardWidth, behavior: "smooth" });
      // 如果滑到最左，跳回最末
      if (container.scrollLeft === 0) {
        setTimeout(() => {
          container.scrollTo({ left: container.scrollWidth, behavior: "smooth" });
        }, 300);
      }
    }
  };

  return (
    <>
      <Nav></Nav>
      <section id="infopage">
        {/* Banner */}

        <div className="info-banner">
          <div className="banner-mask">
            <img src={BnBg} alt="Banner Background" />
          </div>
          <Swiper
            breakpoints={{
              0: {       // 手機螢幕
                slidesPerView: 1, spaceBetween: 10
              },
              640: {     // 平板
                slidesPerView: 2, spaceBetween: 20
              },
              820: {     // 平板
                slidesPerView: 2, spaceBetween: 30
              },
              1024: {    // 桌機
                slidesPerView: 3, spaceBetween: 30
              },
              1440: {    // 桌機
                slidesPerView: 3, spaceBetween: 30
              },
              1920: {    // 桌機
                slidesPerView: 3, spaceBetween: 30
              }

            }}
            centeredSlides={true}
            pagination={{ type: "bullets", clickable: true }}
            loop={true}
            initialSlide={1}
            navigation={{
              prevEl: ".info-custom-prev",
              nextEl: ".info-custom-next",
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {/* 自訂箭頭 */}
            <div className="info-custom-prev">
              <IoIosArrowDropleft size={50} />
            </div>
            <div className="info-custom-next">
              <IoIosArrowDropright size={50} />
            </div>

            {event.banner.map((img, index) => (
              <SwiperSlide key={index}>
                <figure><img src={img} alt={`Banner ${index + 1}`} /></figure>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>



        {/* Info wrapper */}
        <div className="info-wrapper">

          <div className="info-basic">
            <div className="info-bread">
              <img src={locationlogo} alt="locationlogo" /><Link to="/map">花卉地圖</Link> \ {event.title}
            </div>
            <div>
              <p>2025</p>
              <h2>{event.title}</h2>
              <p>{event.address}</p>
            </div>
            <div className="info-tag-wrapper">
              <div className="info-tag">
                <div className="tags season">{event.season}</div><div className="tags location">{event.location}</div>
              </div>
              <div className="info-date">
                <div className="start"><p className="month">{event.startMonth}</p><div className="date"><span className="day">{event.startDate}</span><span className="week">{event.startWeek}</span></div></div>
                <div className="arr"></div>
                <div className="end"><p className="month">{event.endMonth}</p><div className="date"><span className="day">{event.endDate}</span><span className="week">{event.endWeek}</span></div></div>
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
            <img src={weatherbg} alt="天氣背景" className="weather-bg" />

            {/* 天氣 icon */}
            <div className="weather-icon">
              <img src={getWeatherIcon(weatherData)} alt="天氣圖示" />
            </div>

            {/* 溫度、縣市、降雨 */}
            <div className="weather-info">
              <div className="temp-city">
                <div className="temperature">{getTemperature(weatherData)}°C</div>
                <div className="city-rain">
                  <span className="city">{getCity(weatherData)}</span>
                  <img src={umbrella} alt="降雨圖示" className="rain-icon" />
                  <span className="rain-prob">{getRainProbability(weatherData)}%</span>
                </div>
              </div>

              {/* 日期 */}
              <div className="date-time">
                <div className="date">{getDate(weatherData)}</div>
              </div>
            </div>
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
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                {/* SVG 動畫 */}
                {activeIndex === index && (
                  <motion.img
                    src={tabIcons[index]}
                    alt={`${tab} icon`}
                    initial={{ rotate: 0, opacity: 0 }}
                    animate={{ rotate: 100, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="tab-icon"
                  />
                )}

                {/* Tab 文字 */}
                <span>{tab}</span>
              </div>
            ))}
          </div>



          {/* 活動介紹 */}
          <div className="tab-contents">
            {activeIndex === 0 && (
              <div className="activity-intro">
                {/* 區塊一：花卉種類 */}
                <div className="section-floral">
                  {/* 標題 */}
                  <div className="floral-header">
                    <svg
                      className="floral-line"
                      xmlns="http://www.w3.org/2000/svg"
                      width="65"
                      height="59"
                      viewBox="0 0 65 59"
                      fill="none"
                    >
                      <filter id="rough">
                        <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="4" result="noise" />
                        <feDisplacementMap in2="noise" in="SourceGraphic" scale="4" />
                      </filter>
                      <path
                        d="M1.57361 58.2578C9.40361 52.5745 27.4609 40.337 32.1041 30.6031C33.0651 28.5884 33.2045 27.3432 33.3436 26.0026C33.4827 24.662 33.4827 23.1495 32.2677 22.3703C31.0527 21.5911 28.6227 21.5911 26.9659 22.1583C25.3091 22.7255 24.4991 23.8599 24.0818 25.3896C23.1976 28.631 23.9345 31.8922 24.8836 33.9891C29.414 43.9982 46.8191 34.9745 50.6522 30.775C54.4556 26.6082 56.1136 19.712 56.9318 9.97812C57.4718 7.8526 58.5518 6.71823 59.5132 5.75573C60.4745 4.79323 61.2845 4.03698 64.5736 3.25781"
                        stroke="#FFD700"
                        strokeWidth="5"
                      />
                    </svg>

                    <h3>花卉種類</h3>
                    <img src={FloralVarieties} alt="Floral Varieties" className="floral-icon" />
                    <svg
                      className="floral-line-right"
                      xmlns="http://www.w3.org/2000/svg"
                      width="65"
                      height="59"
                      viewBox="0 0 65 59"
                      fill="none"
                    >
                      <filter id="rough-right">
                        <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="4" result="noise" />
                        <feDisplacementMap in2="noise" in="SourceGraphic" scale="4" />
                      </filter>
                      <path
                        d="M3.65753 1C2.97911 5.87969 2.43147 15.1241 4.05191 19.7198C6.8161 27.5592 16.4494 21.4383 18.5602 20.4881C20.9293 19.4217 20.5444 14.6501 20.2808 11.8363C20.2034 11.0104 18.3783 11.2171 16.7477 11.4194C11.7422 12.0404 10.0657 21.9573 10.125 27.7464C13.4496 33 20.1071 37.2217 25.8225 39.5369C28.1663 40.3686 29.3801 40.5034 31.4481 40.6424"
                        stroke="#7DC5E4"
                        strokeWidth="5"
                        filter="url(#rough-right)"
                        className="draw-line"
                      />
                    </svg>
                  </div>


                  {/* 花卉展示區 */}
                  <div className="floral-gallery">
                    <Swiper
                      // modules={[Pagination]}
                      // pagination={{ 
                      //   clickable: true 
                      // }}
                      autoHeight={true}   // 🔹 Swiper 自動根據每個 slide 的內容高度調整

                      breakpoints={{
                        0: {
                          slidesPerView: 1,
                        },
                        640: {
                          slidesPerView: 1,
                        },
                        820: {
                          slidesPerView: 2,
                        },
                        1000: {
                          slidesPerView: 3,
                        },
                        1440: {
                          slidesPerView: 4, // 🔹 全部顯示

                        },
                      }}
                      className="floral-swiper"
                    >
                      <SwiperSlide>
                        <div className="flower-group">
                          <div className="flower-stack">
                            <img src={flowerbg} alt="背景" className="flower-bg" />
                            <img src={sunflower} alt="花卉1" className="flower-main" />
                          </div>
                          <p className="flower-text a">葵花</p>
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className="flower-group">
                          <div className="flower-stack">
                            <img src={flowerbg} alt="背景" className="flower-bg" />
                            <img src={SulphurCosmos} alt="花卉2" className="flower-main" />
                          </div>
                          <p className="flower-text b">黃秋英</p>
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className="flower-group">
                          <div className="flower-stack">
                            <img src={flowerbg} alt="背景" className="flower-bg" />
                            <img src={Zinnia} alt="花卉3" className="flower-main" />
                          </div>
                          <p className="flower-text c">百日菊</p>
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className="flower-group">
                          <div className="flower-stack">
                            <img src={flowerbg} alt="背景" className="flower-bg" />
                            <img src={Daylily} alt="花卉4" className="flower-main" />
                          </div>
                          <p className="flower-text d">金針花</p>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>

                </div>


                {/* 區塊二：活動亮點 */}
                <div className="section-highlight">

                  {/* 標題區 */}

                  <div className="highlight-header">
                    {/* 左側線段 */}
                    <svg
                      className="highlight-line-left"
                      xmlns="http://www.w3.org/2000/svg"
                      width="65"
                      height="59"
                      viewBox="0 0 65 59"
                      fill="none"
                    >
                      <filter id="rough-left">
                        <feTurbulence type="fractalNoise" baseFrequency="2" numOctaves="2" result="noise" />
                        <feDisplacementMap in2="noise" in="SourceGraphic" scale="4" />
                      </filter>
                      <path
                        d="M13.9097 7.71699C14.2967 8.23269 13.5304 12.6772 12.0441 15.5175C11.0986 17.3244 8.3749 18.5979 5.27659 20.5052C4.30916 21.1008 3.46327 21.2316 3.26588 21.4284C1.28789 23.4008 10.9139 20.708 13.3891 21.6213C15.5738 22.4274 14.9392 26.7311 15.1985 28.9671C15.4665 31.278 16.1004 33.5572 16.9383 35.2677C17.1325 35.664 17.2615 36.0531 17.455 35.994C20.4188 35.0897 20.2108 24.0384 22.5466 20.3202C23.9556 18.0774 26.2874 18.0862 27.8376 17.2339C28.5739 16.829 29.3877 16.6414 29.7767 16.5095C31.3577 15.9735 24.1277 17.9523 21.2074 16.7123C18.6741 15.6365 18.1749 12.7166 17.395 10.8722C16.2174 8.08731 16.6229 3.65436 15.9784 3.1918C13.9998 1.77156 14.0413 8.62242 13.8458 11.1202C13.7819 11.6497 13.6542 12.0394 13.5246 12.4351C13.3949 12.8307 13.2672 13.2204 12.7485 14.4093"
                        stroke="#FFA8B5"
                        strokeWidth="3"
                        filter="url(#rough-left)"
                        className="draw-line"
                      />
                    </svg>

                    {/* 右側線段 */}
                    <svg
                      className="highlight-line-right"
                      xmlns="http://www.w3.org/2000/svg"
                      width="65"
                      height="59"
                      viewBox="0 0 65 59"
                      fill="none"
                    >
                      <filter id="rough-right">
                        <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="4" result="noise" />
                        <feDisplacementMap in2="noise" in="SourceGraphic" scale="4" />
                      </filter>
                      <path
                        d="M13.9097 7.71699C14.2967 8.23269 13.5304 12.6772 12.0441 15.5175C11.0986 17.3244 8.3749 18.5979 5.27659 20.5052C4.30916 21.1008 3.46327 21.2316 3.26588 21.4284C1.28789 23.4008 10.9139 20.708 13.3891 21.6213C15.5738 22.4274 14.9392 26.7311 15.1985 28.9671C15.4665 31.278 16.1004 33.5572 16.9383 35.2677C17.1325 35.664 17.2615 36.0531 17.455 35.994C20.4188 35.0897 20.2108 24.0384 22.5466 20.3202C23.9556 18.0774 26.2874 18.0862 27.8376 17.2339C28.5739 16.829 29.3877 16.6414 29.7767 16.5095C31.3577 15.9735 24.1277 17.9523 21.2074 16.7123C18.6741 15.6365 18.1749 12.7166 17.395 10.8722C16.2174 8.08731 16.6229 3.65436 15.9784 3.1918C13.9998 1.77156 14.0413 8.62242 13.8458 11.1202C13.7819 11.6497 13.6542 12.0394 13.5246 12.4351C13.3949 12.8307 13.2672 13.2204 12.7485 14.4093"
                        stroke="#FFA8B5"
                        strokeWidth="5"
                        filter="url(#rough-right)"
                        className="draw-line"
                      />
                    </svg>
                    <img src={Point} alt="裝飾" className="highlight-icon" />
                    <h3>活動亮點</h3>

                  </div>

                  <div className="highlight-gallery">
                    <div className="highlight-track">
                      {[
                        { img: highlightpho, text: "攝影比賽" },
                        { img: highlightmar, text: "花卉市集" },
                        { img: highlightlight, text: "燈光秀" },
                        { img: highlightdiy, text: "DIY 手作" },
                        { img: highlightmusic, text: "音樂演出" },
                        { img: highlightchild, text: "親子遊樂" },
                        { img: highlightcultural, text: "文創攤位" },
                        { img: highlightpho, text: "攝影比賽" },
                        { img: highlightmar, text: "花卉市集" },
                        { img: highlightlight, text: "燈光秀" },
                        { img: highlightdiy, text: "DIY 手作" },
                        { img: highlightmusic, text: "音樂演出" },
                        { img: highlightchild, text: "親子遊樂" },
                        { img: highlightcultural, text: "文創攤位" },
                      ]
                        // 為了無限輪播，把這組複製兩次
                        .concat([
                          { img: highlightpho, text: "攝影比賽" },
                          { img: highlightmar, text: "花卉市集" },
                          { img: highlightlight, text: "燈光秀" },
                          { img: highlightdiy, text: "DIY 手作" },
                          { img: highlightmusic, text: "音樂演出" },
                          { img: highlightchild, text: "親子遊樂" },
                          { img: highlightcultural, text: "文創攤位" },
                        ])
                        .map((item, i) => (
                          <div className="highlight-group" key={i}>
                            <img src={flowerg} alt="背景" className="highlight-bg" />
                            <img src={item.img} alt={item.text} className="highlight-image" />
                            <p className="highlight-text">{item.text}</p>
                          </div>
                        ))}
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
                    {/* 線段1 */}
                    <svg
                      className="contact-line-1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="65"
                      height="59"
                      viewBox="0 0 65 59"
                      fill="none"
                    >
                      <filter id="rough-right">
                        <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="4" result="noise" />
                        <feDisplacementMap in2="noise" in="SourceGraphic" scale="4" />
                      </filter>
                      <path
                        d="M1.27832 43.4495C1.44499 42.4491 1.61096 41.4512 1.77922 40.4569C3.04205 33.1725 4.28817 25.8684 7.2776 19.856L6.84533 20.4913C7.95429 19.3803 9.09712 18.2927 10.263 17.2232C16.2475 11.7884 22.6671 6.64668 29.5171 1.901L29.3204 1.96629C29.8983 1.76809 30.5312 1.60719 31.1673 1.41522C32.1552 1.1226 33.1497 0.724734 33.9731 0.128906C32.9976 0.42392 32.0175 0.483167 31.0281 0.475463C30.3887 0.473034 29.737 0.446498 29.0462 0.48207L28.8495 0.547361C20.7692 3.30454 13.2712 7.73295 6.88307 13.5386C5.63718 14.6816 4.43907 15.885 3.30467 17.1529L2.8724 17.7883C-0.293578 25.2709 -0.0819959 33.0677 0.829384 40.4395C0.960948 41.446 1.11165 42.4491 1.27832 43.4495Z"
                        stroke="#69C9A0"
                        strokeWidth="5"
                        filter="url(#rough-right)"
                        className="draw-line"
                      />
                    </svg>
                    {/* 線段2 */}
                    <svg
                      className="contact-line-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width="65"
                      height="59"
                      viewBox="0 0 65 59"
                      fill="none"
                    >
                      <filter id="rough-right">
                        <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="4" result="noise" />
                        <feDisplacementMap in2="noise" in="SourceGraphic" scale="4" />
                      </filter>
                      <path
                        d="M0.173584 27.814C0.445207 27.2346 0.78968 26.6998 1.12764 26.1683C2.55352 23.9802 4.0204 21.8308 5.33126 19.5794C6.7995 17.1847 8.51554 14.7813 10.1666 12.3843C11.7781 10.0683 13.3775 7.73987 15.0446 5.47501L14.7276 5.74016C15.8071 4.77425 17.0631 3.87164 18.4139 3.18919C19.2548 2.76547 20.2039 2.43784 21.2055 2.15533C21.8121 1.98322 22.436 1.82486 23.0599 1.6582C22.436 1.4916 21.8118 1.33292 21.1712 1.20595C20.1167 0.996218 19.0048 0.875657 17.8485 0.960937C15.9987 1.10525 14.2302 1.64693 12.56 2.50499L12.2431 2.77013C9.84236 4.73457 7.79838 7.03374 6.05838 9.53422C4.27123 12.1355 2.76835 14.915 1.81642 18.091C1.12671 20.5956 0.513077 23.1787 0.229085 25.8599C0.1688 26.5049 0.117333 27.1707 0.173584 27.814Z"
                        stroke="#69C9A0"
                        strokeWidth="5"
                        filter="url(#rough-right)"
                        className="draw-line"
                      />
                    </svg>
                    {/* 線段3 */}
                    <svg
                      className="contact-line-3"
                      xmlns="http://www.w3.org/2000/svg"
                      width="65"
                      height="59"
                      viewBox="0 0 65 59"
                      fill="none"
                    >
                      <filter id="rough-right">
                        <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="4" result="noise" />
                        <feDisplacementMap in2="noise" in="SourceGraphic" scale="4" />
                      </filter>
                      <path
                        d="M1.4342 17.7175C1.60091 17.2723 1.76647 16.8333 1.92967 16.3956C3.42191 12.5246 4.57026 8.58989 6.01018 5.89319C6.21277 5.53195 6.41963 5.21904 6.60959 4.98037L5.74675 5.5674C7.30991 4.81829 9.226 4.23735 11.298 3.47985L11.5175 3.43476C12.9454 2.63548 13.6859 1.95956 14.9278 1.26499C15.325 1.02857 15.7342 0.791582 16.1468 0.552734C15.6785 0.462942 15.2063 0.389346 14.7331 0.33516C13.413 0.130941 11.6967 0.35116 10.6654 0.40072L10.8848 0.35563C8.71612 0.154742 6.33271 0.144324 3.90582 1.00627L3.04298 1.5933C2.44974 2.18036 2.00696 2.81284 1.65153 3.44326C-0.630207 7.92828 -0.15749 12.2644 0.9801 16.367C1.1165 16.8226 1.26757 17.2722 1.4342 17.7175Z"
                        stroke="#69C9A0"
                        strokeWidth="5"
                        filter="url(#rough-right)"
                        className="draw-line"
                      />
                    </svg>
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
                        blocks: [
                          ["花博公園停車場", "走路約 3 分鐘"],
                          ["美術館停車場", "步行約 5 分鐘"],
                          ["兒育中心停車場", "步行約 7 分鐘"],
                        ],
                      },
                      {
                        icon: mrt,
                        blocks: [
                          [<img src={mrtyuanshan} alt="MRT Yuanshan" />, "走路約 3 分鐘"],
                          [<img src={mrtminquanwest} alt="MRT Yuanshan" />, "步行約 4 分鐘"],
                          [<img src={mrtzhongshan} alt="MRT Yuanshan" />, "步行約 6 分鐘"],
                        ],
                      },
                      {
                        icon: bus,
                        blocks: [
                          ["圓山新城二", "走路約 2 分鐘"],
                          ["通北街口", "步行約 5 分鐘"],
                          ["忠烈祠", "步行約 6 分鐘"],
                        ],
                      },
                    ].map((item, idx) => (
                      <div className="transport-item" key={idx}>
                        <img className="icon" src={item.icon} alt="" />
                        <div className="item-content">
                          {item.blocks.map((block, i) => (
                            <div className={`text-block-${i}`} key={i}>
                              <div className="line1">{block[0]}</div>
                              <div className="line2">{block[1]}</div>
                              <div className="line3">
                                <a href="#">{block[2]}</a>
                              </div>
                            </div>
                          ))}
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


            {/* 周邊推薦 */}
            {activeIndex === 2 && (
              <div className="surrounding-content">

                {/* 美食小點區塊 */}
                <div className="surrounding-section food-section">

                  <h3 className="section-title">
                    {/* 左邊線條 */}
                    <svg
                      className="title-line left-line"
                      xmlns="http://www.w3.org/2000/svg"
                      width="510"
                      height="39"
                      viewBox="0 0 510 39"
                      fill="none"
                    >
                      <filter id="rough">
                        <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="4" result="noise" />
                        <feDisplacementMap in2="noise" in="SourceGraphic" scale="4" />
                      </filter>
                      <path className="line-path1"
                        d="M509.277 16.5356C469.766 33.3299 397.778 51.428 393.24 21.9952C389.014 -5.41389 424.126 5.21915 416.029 21.7065C399.681 54.998 329.074 19.6808 327.24 18.9985C299.803 8.78678 235.06 -7.12786 196.83 7.00513C149.043 24.6714 111.988 22.4173 107.767 13.2884C103.546 4.15941 146.597 -5.77915 130.245 13.9723C117.164 29.7734 69.1885 24.1103 46.836 19.3035L0.755716 17.8978"
                        stroke="black"
                        strokeWidth="2"
                        filter="url(#rough)"
                      />
                    </svg>
                    咖啡廳
                    {/* 右邊線條 */}
                    <svg
                      className="title-line right-line"
                      xmlns="http://www.w3.org/2000/svg"
                      width="509"
                      height="39"
                      viewBox="0 0 509 39"
                      fill="none"
                    >
                      <path className="line-path1"
                        d="M0.184501 16.778C39.7591 33.4213 111.816 51.2443 116.241 21.7943C120.363 -5.63074 85.2919 5.13638 93.4512 21.5927C109.927 54.8214 180.399 19.2348 182.229 18.5455C209.627 8.22901 274.309 -7.93288 312.592 6.05396C360.447 23.5375 397.493 21.1419 401.679 11.9969C405.865 2.85186 362.776 -6.92214 379.203 12.7667C392.345 28.5177 440.299 22.6713 462.633 17.7792L508.707 16.1975"
                        stroke="black"
                        strokeWidth="2"
                        filter="url(#rough)"
                      />
                    </svg>
                  </h3>
                  <div className="swiper-wrapper-relative">
                    <Swiper
                      slidesPerView={4}
                      spaceBetween={0}
                      loop={true}
                      navigation={{
                        prevEl: ".food-prev",
                        nextEl: ".food-next",
                      }}
                      modules={[Navigation, Pagination]}
                      className="food-swiper"
                    >
                      {[
                        { img: coffeeshop1, text: "貴賓咖啡廳", bg: bgpin },
                        { img: coffeeshop2, text: "DW Café", bg: bgor },
                        { img: coffeeshop3, text: "王吉 Cafe", bg: bgblu },
                        { img: coffeeshop4, text: "英一咖啡", bg: bgyel },
                        { img: coffeeshop1, text: "貴賓咖啡廳", bg: bgpin },
                        { img: coffeeshop2, text: "DW Café", bg: bgor },
                        { img: coffeeshop3, text: "王吉 Cafe", bg: bgblu },
                        { img: coffeeshop4, text: "英一咖啡", bg: bgyel },
                      ].map((item, idx) => (
                        <SwiperSlide key={idx}>
                          <div className="card food-card">
                            {/* 底圖 (每張不一樣) */}
                            <img src={item.bg} alt="food bg" className="bg-icon" />

                            {/* 主圖 */}
                            <img src={item.img} alt={`Food ${idx + 1}`} className="main-img" />

                            {/* 文字 */}
                            <p className="overlay-text">{item.text}</p>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>

                    {/* 美食小點箭頭 */}
                    <img src={arrowlf} alt="prev" className="arrow food-prev" />
                    <img src={arrowri} alt="next" className="arrow food-next" />

                  </div>
                </div>

                {/* 附近景點區塊 */}
                <div className="surrounding-section nearby-section">
                  <h3 className="section-title">
                    {/* 左邊線條 */}
                    <svg
                      className="title-line left-line"
                      xmlns="http://www.w3.org/2000/svg"
                      width="510"
                      height="39"
                      viewBox="0 0 510 39"
                      fill="none"
                    >
                      <filter id="rough">
                        <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="4" result="noise" />
                        <feDisplacementMap in2="noise" in="SourceGraphic" scale="4" />
                      </filter>
                      <path className="line-path2"
                        d="M509.277 16.5356C469.766 33.3299 397.778 51.428 393.24 21.9952C389.014 -5.41389 424.126 5.21915 416.029 21.7065C399.681 54.998 329.074 19.6808 327.24 18.9985C299.803 8.78678 235.06 -7.12786 196.83 7.00513C149.043 24.6714 111.988 22.4173 107.767 13.2884C103.546 4.15941 146.597 -5.77915 130.245 13.9723C117.164 29.7734 69.1885 24.1103 46.836 19.3035L0.755716 17.8978"
                        stroke="black"
                        strokeWidth="2"
                        filter="url(#rough)"
                      />
                    </svg>
                    附近景點
                    {/* 右邊線條 */}
                    <svg
                      className="title-line right-line"
                      xmlns="http://www.w3.org/2000/svg"
                      width="509"
                      height="39"
                      viewBox="0 0 509 39"
                      fill="none"
                    >
                      <path className="line-path2"
                        d="M0.184501 16.778C39.7591 33.4213 111.816 51.2443 116.241 21.7943C120.363 -5.63074 85.2919 5.13638 93.4512 21.5927C109.927 54.8214 180.399 19.2348 182.229 18.5455C209.627 8.22901 274.309 -7.93288 312.592 6.05396C360.447 23.5375 397.493 21.1419 401.679 11.9969C405.865 2.85186 362.776 -6.92214 379.203 12.7667C392.345 28.5177 440.299 22.6713 462.633 17.7792L508.707 16.1975"
                        stroke="black"
                        strokeWidth="2"
                        filter="url(#rough)"
                      />
                    </svg>
                  </h3>

                  <div className="swiper-wrapper-relative">
                    <Swiper
                      slidesPerView={4}
                      spaceBetween={20}
                      loop={true}
                      navigation={{
                        prevEl: ".nearby-prev",
                        nextEl: ".nearby-next",
                      }}
                      modules={[Navigation, Pagination]}
                      className="nearby-swiper"
                    >
                      {[
                        { img: attpto1, text: "圓山自然景觀公園", bg: attbgpin },
                        { img: attpto2, text: "圓山水神社", bg: attbgor },
                        { img: attpto3, text: "花博公園", bg: attbgblu },
                        { img: attpto4, text: "台北市立美術館", bg: attbgyel },
                        { img: attpto1, text: "圓山自然景觀公園", bg: attbgpin },
                        { img: attpto2, text: "圓山水神社", bg: attbgor },
                        { img: attpto3, text: "花博公園", bg: attbgblu },
                        { img: attpto4, text: "台北市立美術館", bg: attbgyel },
                      ].map((item, idx) => (
                        <SwiperSlide key={idx}>
                          <div className="card nearby-card">
                            {/* 底圖 (每張不一樣) */}
                            <img src={item.bg} alt="spot bg" className="bg-icon" />

                            {/* 主圖 */}
                            <img src={item.img} alt={`Spot ${idx + 1}`} className="main-img" />

                            {/* 文字 */}
                            <p className="overlay-text">{item.text}</p>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>

                    {/* 附近景點箭頭 */}
                    <img src={arrowlf} alt="prev" className="arrow nearby-prev" />
                    <img src={arrowri} alt="next" className="arrow nearby-next" />
                  </div>
                </div>




              </div>
            )}
          </div>

        </div>

        <GotopBtn></GotopBtn>
      </section>
    </>
  );
};

export default Info;

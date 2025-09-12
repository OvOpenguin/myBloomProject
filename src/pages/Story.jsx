import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import $ from 'jquery'
// 安裝插建
import { motion } from "framer-motion";
import Nav from '../components/Nav'
// 匯入陣列物件資料
import flowers from '../json/StoryInfo.json';
// 匯入sass
import "../sass/story.scss"
// 匯入圖片
import tape from '../images/story/tape-y.png'
import tape2 from '../images/story/title-tape.svg'
import book from '../images/story/book.svg'
import butterfly from '../images/story/story-butterfly.svg'
import circletxt from '../images/story/story-circle-txt.png'



const Story = () => {
  // 呼叫useState
  const [index, setIndex] = useState(0);
  // 滾輪偵測
  const handleWheel = (e) => {
    if (e.deltaY > 0) {
      // 滾輪往下 -> 下一朵
      setIndex((prev) => (prev + 1) % flowers.length);
    } else if (e.deltaY < 0) {
      // 滾輪往上 -> 上一朵
      setIndex((prev) => (prev - 1 + flowers.length) % flowers.length);
    }
  };

  const selectedFlower = flowers[index];

  // 花的清單切換
  useEffect(() => {
    $('.sMenuBtn').on("click", function () {
      $('.sleft').toggleClass('show');
    });

    // 卸載元件時，移除事件監聽器，避免記憶體洩漏
    return () => {
      $('.sMenuBtn').off("click");
    };
  }, []);







  return (
    <>
    <Nav></Nav>
      <div className='story'>

        <div className="sleft show">
          {/* 其他品種 */}
          <div className="sother">
            <h3>其他花種</h3>
            <h4>Others</h4>
          </div>
          {/* 左側-選單 */}
          <div className="sList" style={{ background: `${selectedFlower.color}` }}>
            {/* 裝飾書 */}
            <div className="sbook">
              <img src={book} alt="book" />
            </div>
            {/* menu */}
            <div className='sMenu'>
              <ul>
                {
                  // 利用.map(()=>())跑回圈
                  flowers.map((flower, i) => (
                    <li
                      key={flower.id}
                      onClick={() => setIndex(i)}>
                      {/* 花名 */}
                      {flower.name}
                    </li>
                  ))
                }
              </ul>
              {/* 膠帶 */}
              <div className="tape"><img src={tape} alt="膠帶裝飾" /></div>
            </div>
          </div>




          {/* 放入Link才能切換頁面 */}

          <Link to="/play">
            <button className="h-btn-map">
              <span className="circle">
                <span className="icon arrow"></span>
              </span>
              <span className="btn-text">前往遊戲</span>
            </button>
          </Link>

        </div>

        {/* 中間-內容介紹 */}
        <div className="sContent-wrap">
          <motion.div
            className='sContent'
            key={selectedFlower.description}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* 標題 */}
            <div className='sflowerName'>
              <div className="tape2"><img src={tape2} alt="" /></div>
              <h2>
                {/* 白玫瑰  Rosa alba */}
                {selectedFlower.name}
              </h2>
              <p>
                {/* #純潔　#純高貴　#天真　#尊敬　#誠心敬愛 */}
                {selectedFlower.meaning}
              </p>
              {/* 季節tag */}
              <div className="seasontag">
                <div
                  className="tag1"
                  style={{ backgroundImage: `url(./story/${selectedFlower.season1}-bg.svg)` }}>
                  {/* 春 */}
                  {selectedFlower.season1}
                </div>
                <div
                  className="tag2"
                  style={{ backgroundImage: `url(./story/${selectedFlower.season2}-bg.svg)` }}>
                  {/* 夏 */}
                  {selectedFlower.season2}
                </div>
              </div>
            </div>

            {/* 中間介紹 */}
            <div
              className='sflowerIntro' style={{ background: `${selectedFlower.color}` }}>
              {/* 科屬分類 */}
              <div className="sclass">
                <div className="classtxt">
                  <div className="family">科</div><div className="ftxt">
                    {/* 薔薇科 Rosaceae */}
                    {selectedFlower.family}
                  </div>
                </div>
                <div className="classtxt">
                  <div className="genus">屬</div><div className="gtxt">
                    {/* 薔薇屬 Rosaceae */}
                    {selectedFlower.genus}
                  </div>
                </div>
              </div>
              {/* 內文介紹 */}
              <div className="introtxt">
                {selectedFlower.description}
              </div>
            </div>
          </motion.div>

          {/* 蝴蝶裝飾 */}
          <div className="sbutterfly"><img src={butterfly} alt="蝴蝶裝飾" /></div>
          {/* 線條裝飾 */}
          <svg className="sline"
            width="280"
            height="68"
            viewBox="0 0 272 68"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              pathLength="1"
              d="M2.12256 3.46928C2.12256 5.14083 2.12256 8.78783 2.48534 13.5661C2.91602 19.2385 10.8953 22.0251 18.3929 26.3855C29.8397 33.0426 42.3806 32.1726 49.5539 31.054C56.3946 29.9873 57.4417 24.5915 59.2831 20.3704C61.2939 15.7609 58.2112 8.85537 54.9022 4.32616C54.2525 3.43687 53.44 2.64195 52.5221 2.48999C51.6041 2.33803 50.5158 2.89521 49.5923 4.01802C47.459 6.61189 47.1958 15.2207 47.5585 26.8836C48.0361 42.2359 59.2446 56.0301 66.5937 62.9695C70.198 66.3729 80.1102 65.9411 86.9371 64.8226C93.4644 63.7531 95.9188 58.3601 99.5851 55.5404C103.533 52.5043 104.714 47.6723 108.198 37.1492C110.943 28.8629 108.396 22.8947 107.484 21.2104C107.01 20.3355 106.209 19.5262 105.109 19.235C104.01 18.9437 102.559 19.2223 101.63 20.0623C95.1597 25.9129 100.69 39.4497 103.977 48.8753C106.385 55.7814 110.584 60.0232 112.409 61.5681C113.374 62.3847 114.959 62.8344 116.977 62.7036C125.771 62.1331 129.625 57.5159 135.121 50.9183C142.538 42.0165 140.992 33.6246 141.377 22.5021C141.484 19.4122 138.452 18.108 136.259 16.9852C135.154 16.4195 134.066 15.8623 133.324 16.2718C125.39 20.6498 134.748 38.3016 138.249 43.9789C139.267 45.629 140.266 47.36 141.91 48.9049C143.553 50.4493 146.126 51.0239 149.045 51.446C153.343 52.0676 157.482 51.0323 160.044 49.7702C166.248 46.713 168.102 30.2984 168.498 13.507C168.557 11.0048 166.321 11.0672 165.392 11.6244C160.513 14.5505 163.353 35.6676 166.64 49.8673C168.123 56.2732 174.335 60.5804 177.809 62.9695C180.573 64.8707 183.866 65.0969 186.609 64.8183C193.668 64.1013 198.51 51.083 201.28 42.7506C203.146 37.1375 204.402 31.0751 205.315 26.0014C205.864 22.9456 205.139 20.362 204.045 18.6778C202.773 16.7195 198.565 15.2967 193.991 14.0304C192.007 13.4809 190.507 13.5999 189.759 14.7142C185.396 21.2187 191.562 28.7619 199.422 39.4497C204.35 46.1499 214.252 48.4828 230.897 50.4582C240.834 51.6377 248.354 50.1881 253.466 47.9509C265.581 36.1573 269.264 25.7143 269.445 22.9073C269.626 21.4933 269.989 20.1003 269.264 18.6651"
              stroke="#FF61B0"
              strokeWidth="2" />
          </svg>

        </div>

        {/* 右側-主花區 */}
        <div
          className='sImg'
          onWheel={handleWheel}
        >
          {/* 安裝套件的淡入淡出效果 */}
          <motion.img
            key={selectedFlower.image}
            src={selectedFlower.image}
            alt={selectedFlower.name}
            initial={{ opacity: 0.5, rotate: 0 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 0.8 }}
          />

          <img className='circletxt' src={circletxt} alt="底圖txt" />
        </div>

        <button className="sMenuBtn">Click!</button>

      </div>
    </>
  )
}

export default Story
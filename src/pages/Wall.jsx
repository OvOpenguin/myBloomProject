
import { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

import Title from "../components/Title";
import Nav from '../components/Nav';
import CardFlip from '../components/CardFlip';
import GotopBtn from '../components/GotopBtn'

import heart0 from '../images/wall/wall-icon.svg'
import votebotton1 from '../images/wall/wall-votebutton1.svg'
import votebotton2 from '../images/wall/wall-votebotton2.svg'
import abotton from '../images/wall/wall-abotton.svg'
import flower01 from '../images/wall/wall-flower01.png'
import flower02 from '../images/wall/wall-flower02.png'
import flower03 from '../images/wall/wall-f1.webp'
import flower04 from '../images/wall/wall-f3.webp'
import flower05 from '../images/wall/wall-f4.webp'
import flower06 from '../images/wall/wall-f5.webp'
import flower07 from '../images/wall/wall-f7.webp'
import flower08 from '../images/wall/wall-f8.webp'
import flower09 from '../images/wall/wall-f9.webp'
import flower10 from '../images/wall/wall-f10.webp'

import "../sass/wall.scss"



const Wall = () => {

  // 花牆照片物件
  const flowerwalls = [
    {
      id: 1,
      count: 111,
      img: flower01,
      heart: heart0,
      state: '花開見喜',

    },
    {
      id: 2,
      count: 464,
      img: flower02,
      heart: heart0,
      state: '花語綻放',
    },
    {
      id: 3,
      count: 56,
      img: flower03,
      heart: heart0,
      state: '春日花語',
    },
    {
      id: 4,
      count: 379,
      img: flower04,
      heart: heart0,
      state: '花香盈路',
    },
    {
      id: 5,
      count: 807,
      img: flower05,
      heart: heart0,
      state: "花落有詩",
    },
  ];
  const flowerwalls2 = [
    {
      id: 6,
      count: 567,
      img: flower06,
      heart: heart0,
      state: '花落有詩',
    },
    {
      id: 7,
      count: 365,
      img: flower07,
      heart: heart0,
      state: '花開如夢',
    },
    {
      id: 8,
      count: 206,
      img: flower08,
      heart: heart0,
      state: '花開見喜',
    },
    {
      id: 9,
      count: 704,
      img: flower09,
      heart: heart0,
      state: '心隨花舞',
    },
    {
      id: 10,
      count: 88,
      img: flower10,
      heart: heart0,
      state: '花香盈路',
    },
  ];

  // 複製一份作接捕用
  const fws = [...flowerwalls, { id: "special", type: "special" }, ...flowerwalls]
  const fws2 = [...flowerwalls2, { id: "special2", type: "special2" }, ...flowerwalls2]

  // 文章物件
  const articles = [
    {
      id: 1,
      img: "./wall/wall02-sm.jpg",
      label: '花語',
      date: '2025.09.16',
      title: '與四季共舞的美好時光',
    },
    {
      id: 2,
      img: "./wall/wall07-sm.jpg",
      label: '活動',
      date: '2025.09.09',
      title: '櫻之舞：春日限定的粉色浪漫',
    },
    {
      id: 3,
      img: "./wall/wall04-sm.jpg",
      label: '園藝',
      date: '2025.09.09',
      title: '5種花卉打造你的陽台小花園',
    },
    {
      id: 4,
      img: "./wall/wall05-sm.jpg",
      label: '活動',
      date: '2025.08.28',
      title: '陽光盛宴：充滿活力的黃色花卉',
    },
    {
      id: 5,
      img: "./wall/wall06-sm.jpg",
      label: '園藝',
      date: '2025.08.25',
      title: '輕鬆上手的園藝入門指南',
    }
  ];

  // 文章元件
  const Article = ({ img, label, date, title }) => {
    return (
      <Link to="/article" className="a-card">
        <div className="a-img-box"><img src={img} alt="圖卡" /></div>
        <div className="wall-content">
          <p className='wall-lable'>{label}</p>
          <p className='wall-date'>{date}</p>
          {title}
        </div>
      </Link>
    )
  };

  const listRef1 = useRef(null);
  const listRef2 = useRef(null);

  // 計算輪播長度
  useEffect(() => {
    const ul1 = listRef1.current;
    const ul2 = listRef2.current;

    const setScrollWidth = (ul) => {
      if (!ul) return;
      const totalWidth = ul.scrollWidth / 2;
      ul.style.setProperty("--scrollWidth", `-${totalWidth}px`);
    };

    setScrollWidth(listRef1.current);
    setScrollWidth(listRef2.current);

    // if (ul1) {
    //   const totalWidth = ul1.scrollWidth / 2; // 一份的寬度
    //   ul1.style.setProperty("--scrollWidth", `-${totalWidth}px`);
    // }
    // if (ul2) {
    //   const totalWidth = ul2.scrollWidth / 2;
    //   ul2.style.setProperty("--scrollWidth", `-${totalWidth}px`);
    // }
  }, []);

  // 點愛心
  const Flowerwall = ({ count, img, heart, state }) => {
    const [likeCount, setLikeCount] = useState(count);
    const [liked, setLiked] = useState(false);

    const handleLike = () => {
      if (!liked) {
        setLikeCount(likeCount + 1);
        setLiked(true);
      } else {
        setLikeCount(likeCount - 1); //取消讚-1
        setLiked(false);
      }
    };

    return (
      <li className="v-item">
        <p className="v-count">{likeCount}</p>
        <div className="v-img-wrap">
          <img className="v-item-img" src={img} alt="fw" />
          <div className="v-item-de"><p>{state}</p></div>
        </div>
        <div className="icon-heart" onClick={handleLike} style={{ cursor: "pointer" }}>
          <img src={liked ? "./wall/wall-icon2.svg" : heart} alt="heart" />
        </div>
      </li>
    );
  };

  // 前往投票
  const voteRef = useRef(null);
  function gotvote() {
    voteRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }

  //滑到文章列表 
  const location = useLocation();

  useEffect(() => {
    // 檢查 URL 中是否有錨點 (hash)
    if (location.hash) {
      setTimeout(() => {
        const targetElement = document.getElementById(location.hash.substring(1));
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location.hash]);

  const [isOpen, setIsOpen] = useState(false);
  const openBtnRef = useRef(null); // 開啟按鈕的 ref
  const closeBtnRef = useRef(null); // 關閉按鈕的 ref

  const openPopup = () => {
    setIsOpen(true);
    setTimeout(() => {
      closeBtnRef.current?.focus(); // 聚焦到關閉按鈕
    }, 0);
  };

  const closePopup = () => {
    setIsOpen(false);
    setTimeout(() => {
      openBtnRef.current?.focus(); // 聚焦回開啟按鈕
    }, 0);
  };


  return (
    <>
      <Nav></Nav>

      {/* 冠軍區 */}
      <section className="wall-c-inner">
        <div className="wall-c-title">

          <div className="wcrown"><img src="./wall/wall-c-c.png" alt="王冠" /></div>
          <Title text="上季冠軍" tag="h2" className="h2-style" />
          <Title text="CHAMPION" tag="h3" className="h3-style" />

          <p>
            我們正在尋找北區最耀眼的花卉明星！你的一票至關重要。<br />登入會員，每人一票，用你的選擇為它加冕。
          </p>
          <button className="w-btn-vote" onClick={gotvote}>
            <span className="circle">
              <span className="icon arrow"></span>
            </span>
            <span className="btn-text">前往投票</span>
          </button>
        </div>

        <div className="wall-c-photo">
          <CardFlip/>
        </div>
      </section>

      {/* 點讚投票區 */}
      <section className="wall-v-inner">
        <header className="v-title">
          <Title text="花牆票選" tag="h2" className="h2-style" />
          <Title text="VOTING" tag="h3" className="h3-style" />

        </header>
        <div className="v-photowarp" ref={voteRef}>
          <ul className="v-photos left" ref={listRef1} >
            {fws.map((item, index) => {
              // 參加賽事按鈕
              if (item.type == 'special') {
                return (
                  <li className="v-item" key={`special2-${index}`}>
                    <Link to={"/member"}>
                      <h3>參加賽事</h3>
                    </Link>
                    <img src={votebotton1} alt="" />
                  </li>
                );
              }
              return <Flowerwall key={index} count={item.count} img={item.img} heart={item.heart} state={item.state} />
            })}
          </ul>
          <ul className="v-photos right" ref={listRef2}>
            {fws2.map((item, index) => {
              // 參加賽事按鈕
              if (item.type == 'special2') {
                return (
                  <li className="v-item" key={`special2-${index}`}>
                    <Link to={"/member"}>
                      <h3>參加賽事</h3>
                    </Link>
                    <img src={votebotton2} alt="" />
                  </li>
                );
              }
              return <Flowerwall key={index} count={item.count} img={item.img} heart={item.heart} state={item.state}/>
            })}
          </ul>
        </div>
      </section>
      {/* 文章列表區 */}
      <section id="alink" className="wall-a-inner">
        <header className="a-title">

          <Title text="文章列表" tag="h2" className="h2-style" />
          <Title text="ARTICLES" tag="h3" className="h3-style" />

        </header>

        <div className="a-cardwarp">

          {articles.map((item, index) => {
            return <Article key={index} img={item.img} label={item.label} date={item.date} title={item.title} />
          })}

        </div>

        <div
          // id="openMyPopup"
          ref={openBtnRef}
          onClick={openPopup}
          aria-controls="myPopup"
          aria-label="Open popup"
          className="a-button"
        >
          <p>前往投搞</p>
          <img src={abotton} alt="button" />
        </div>

        {isOpen && (
          <div
            className="popup"
            // id="myPopup"
            aria-hidden={!isOpen}
            onClick={(e) => {
              if (e.target === e.currentTarget) closePopup(); // 點背景關閉
            }}
          >
            <div
              className="wrapper"
              aria-labelledby="popupTitle"
              aria-describedby="popupText"
              aria-modal="true"
            >
              <h2>🌸尋找最美的花海故事：徵文活動開跑！🌸</h2>
              <p>
                春天是花的季節，百花齊放的景象總是令人心曠神怡。<br />
                你是否也曾沉浸在盛開的花海中，感受那份浪漫與美好？<br />
                無論是令人讚嘆的花展、一望無際的花海，還是巷弄中不經意發現的小花園，都值得被記錄下來。<br />
                我們現在向所有熱愛花卉、喜歡拍照、善於分享的你，發出最誠摯的邀請！<br />
                快來分享你的賞花體驗吧！<br />
              </p>
              <h3>徵稿主題與內容</h3>
              <p>
                只要是與花展或賞花體驗相關的內容，我們都歡迎！你可以分享：<br />
                ．行程分享：介紹你的賞花路線、交通方式、必訪景點、周邊美食。<br />
                ．教戰守則：提供實用的賞花小技巧，例如如何避開人潮、最佳拍照時機、穿搭建議等。<br />
                ．心得分享：記錄你與花海之間的獨特故事，可以是感動、驚喜，或是與家人朋友的美好回憶。<br />
              </p>
              <h3>投稿規範</h3>
              <p>
                1. 文章內容：主題需與花展或花海體驗相關，文體不拘。<br />
                2. 圖片要求：每篇投稿需附上<span>至少2張</span>與文章內容相關的清晰照片。<br />
                3. 投稿方式：請將文章內容及照片寄至 Flower@gmail.com，信件主旨請註明<span>「花海徵文：【你的文章標題】」</span> 。<br />
                4. 活動截止日期：2025/10/01<br />
              </p>
              <h3>投稿小提醒</h3>
              <p>
                為了讓更多人能感受到你的花海故事，請務必在投稿中附上詳細的文字描述與美麗的圖片。<br />
                文字內容 <span>300-1000 字</span> 為佳，但我們更重視您的真心分享，字數不嚴格限制。<br />
                期待看到你的分享，一起讓這個春天更加繽紛多彩！<br />
              </p>
              <button className="closePopup" ref={closeBtnRef} onClick={closePopup}>
                <span className="bar"></span>
                <span className="bar"></span>
              </button>
            </div>
          </div>
        )}

        {/* <button className="gotop" onClick={backtop}>
          <span className="circle">
            <span className="icon arrow"></span>
          </span>
          <span className="btn-text">TOP</span>
        </button> */}
        <GotopBtn></GotopBtn>

      </section>

    </>
  )
}

export default Wall
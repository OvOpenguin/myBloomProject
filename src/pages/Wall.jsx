import "../sass/wall.scss"
import { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

import Nav from '../components/Nav'

import wall_vote_one from '../images/home/首頁-票選1-框.png'
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



const Wall = () => {

  // 花牆照片物件
  const flowerwalls = [
    {
      id: 1,
      count: 111,
      img: flower01,
      heart: heart0,

    },
    {
      id: 2,
      count: 464,
      img: flower02,
      heart: heart0,

    },
    {
      id: 3,
      count: 56,
      img: flower03,
      heart: heart0,
    },
    {
      id: 4,
      count: 379,
      img: flower04,
      heart: heart0,
    },
    {
      id: 5,
      count: 807,
      img: flower05,
      heart: heart0,

    },
  ];
  const flowerwalls2 = [
    {
      id: 6,
      count: 567,
      img: flower06,
      heart: heart0,
    },
    {
      id: 7,
      count: 365,
      img: flower07,
      heart: heart0,
    },
    {
      id: 8,
      count: 206,
      img: flower08,
      heart: heart0,
    },
    {
      id: 9,
      count: 704,
      img: flower09,
      heart: heart0,
    },
    {
      id: 10,
      count: 88,
      img: flower10,
      heart: heart0,
    },
  ];

  // 複製一份作接捕用
  const fws = [...flowerwalls, { id: "special", type: "special" }, ...flowerwalls]
  const fws2 = [...flowerwalls2, { id: "special2", type: "special2" }, ...flowerwalls2]

  // 文章物件
  const articles = [
    {
      id: 1,
      img: flower01,
      label: '活動',
      date: '2025.09.16',
      title: '四季花語：與自然共舞的美好時光',
    },
    {
      id: 2,
      img: flower01,
      label: '活動',
      date: '2025.07.28',
      title: '荷與睡蓮誰美？北投公園一次看',
    },
    {
      id: 3,
      img: flower01,
      label: '活動',
      date: '2025.07.28',
      title: '荷與睡蓮誰美？北投公園一次看',
    },
    {
      id: 4,
      img: flower01,
      label: '活動',
      date: '2025.07.28',
      title: '荷與睡蓮誰美？北投公園一次看',
    },
    {
      id: 5,
      img: flower01,
      label: '活動',
      date: '2025.07.28',
      title: '荷與睡蓮誰美？北投公園一次看',
    }
  ];

  // 文章元件
  const Article = ({ img, label, date, title }) => {
    return (
      <a href="#" className="a-card">
        <img src={img} alt="" />
        <div>
          <p className='wall-lable'>{label}</p>
          <p className='wall-date'>{date}</p>
          <p className='wall-title'>{title}</p>
        </div>
      </a>
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
  const Flowerwall = ({ count, img, heart }) => {
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
        <p>{likeCount}</p>
        <img src={img} alt="fw" />
        <div className="icon-heart" onClick={handleLike} style={{ cursor: "pointer" }}>
          <img src={liked ? "./wall/wall-icon2.svg" : heart} alt="heart" />
        </div>
      </li>
    );
  };

  // 前往投票
  const voteRef = useRef(null);
  function gotvote() {
    window.scrollTo({
      top: voteRef.current.offsetTop,
      // 轉場
      behavior: 'smooth'
    })
  };


  // 回到最上層
  function backtop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
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


  return (
    <>
      <Nav></Nav>
      <div className="wall-c-inner">
        <div className="wall-c-title">
          <h2>上季冠軍</h2>
          <h2>CHAMPION</h2>
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
          <div>
            <img src={wall_vote_one} alt="" />
          </div>
        </div>
      </div>

      <section className="wall-v-inner">
        <header className="v-title" ref={voteRef}>
          <h2>花牆票選</h2>
          <h2>VOTING</h2>
        </header>
        <div className="v-photowarp">
          <ul className="v-photos left" ref={listRef1}>
            {fws.map((item, index) => {
              // 參加賽事按鈕
              if (item.type == 'special') {
                return (
                  <li className="v-item" key={`special2-${index}`}>
                    <h3>參加賽事</h3>
                    <img src={votebotton1} alt="" />
                  </li>
                );
              }
              return <Flowerwall key={index} count={item.count} img={item.img} heart={item.heart} />
            })}
          </ul>
          <ul className="v-photos right" ref={listRef2}>
            {fws2.map((item, index) => {
              // 參加賽事按鈕
              if (item.type == 'special2') {
                return (
                  <li className="v-item" key={`special2-${index}`}>
                    <h3>參加賽事</h3>
                    <img src={votebotton2} alt="" />
                  </li>
                );
              }
              return <Flowerwall key={index} count={item.count} img={item.img} heart={item.heart} />
            })}
          </ul>
        </div>
      </section>

      <section id="alink" className="wall-a-inner">
        <header className="a-title">
          <h2>文章列表</h2>
          <h2>ARTICLES</h2>
        </header>
        <Link to="/article">
          <div className="a-cardwarp">
            {articles.map((item, index) => {
              return <Article key={index} img={item.img} label={item.label} date={item.date} title={item.title} />
            })}
          </div>
        </Link>

        <a href="#" className="a-button">
          <p>前往投搞</p>
          <img src={abotton} alt="" />
        </a>

        {/* <button className="gotop" onClick={backtop}></button> */}
        <button className="gotop" onClick={backtop}>
          <span className="circle">
            <span className="icon arrow"></span>
          </span>
          <span className="btn-text">TOP</span>
        </button>

      </section>

    </>
  )
}

export default Wall
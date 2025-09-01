import "../sass/wall.scss"
import { useEffect, useRef } from "react";

import wall_vote_one from '../images/home/首頁-票選1-框.png'
import heart0 from '../images/wall/wall-icon.svg'
import heart2 from '../images/wall/wall-iconhover.svg'
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
      count: 999,
      img: flower01,
      heart: heart0,
    },
    {
      id: 2,
      count: 999,
      img: flower02,
      heart: heart0,
    },
    {
      id: 3,
      count: 999,
      img: flower03,
      heart: heart0,
    },
    {
      id: 4,
      count: 999,
      img: flower04,
      heart: heart0,
    },
    {
      id: 5,
      count: 999,
      img: flower05,
      heart: heart0,
    },
  ];
  const flowerwalls2 = [
    {
      id: 6,
      count: 999,
      img: flower06,
      heart: heart0,
    },
    {
      id: 7,
      count: 999,
      img: flower07,
      heart: heart0,
    },
    {
      id: 8,
      count: 999,
      img: flower08,
      heart: heart0,
    },
    {
      id: 9,
      count: 999,
      img: flower09,
      heart: heart0,
    },
    {
      id: 10,
      count: 999,
      img: flower10,
      heart: heart0,
    },
  ];

  // 複製一份作接捕用
  const fws = [...flowerwalls, { id: "special", type: "special" }, ...flowerwalls,{ id: "special", type: "special" }]
  const fws2 = [...flowerwalls2, { id: "special2", type: "special2" }, ...flowerwalls2,{ id: "special2", type: "special2" }]

  // 花牆照片元件
  const Flowerwall = ({ count, img, heart }) => {
    return (
      <li className="v-item">
        <p>{count}</p>
        <img src={img} alt="fw" />
        <div className="icon-heart">
          <img src={heart} alt="heart" />
        </div>
      </li>
    )
  };

  // 文章物件
  const articles = [
    {
      id: 1,
      img: flower01,
      label: '活動',
      date: '2025.07.28',
      title: '荷與睡蓮誰美？北投公園一次看',
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


  return (
    <>
      <div className="wall-c-inner">
        <div className="wall-c-title">
          <h2>上季冠軍</h2>
          <h2>CHAMPION</h2>
          <p>
            我們正在尋找北區最耀眼的花卉明星！你的一票至關重要。登入會員，每人一票，用你的選擇為它加冕。
          </p>
          <button>前往投票</button>
        </div>

        <div className="wall-c-photo">
          <div>
            <img src={wall_vote_one} alt="" />
          </div>
        </div>
      </div>

      <section className="wall-v-inner">
        <header className="v-title">
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

      <section className="wall-a-inner">
        <header className="a-title">
          <h2>文章列表</h2>
          <h2>ARTICLES</h2>
        </header>
        <div className="a-cardwarp">
          {articles.map((item, index) => {
            return <Article key={index} img={item.img} label={item.label} date={item.date} title={item.title} />
          })}
        </div>
        <a href="#" className="a-button">
          <p>前往投票</p>
          <img src={abotton} alt="" />
        </a>


      </section>

    </>
  )
}

export default Wall
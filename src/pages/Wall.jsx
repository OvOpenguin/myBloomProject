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
  // 複製一份作接捕用
  const fws = [...flowerwalls, ...flowerwalls]

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
          <ul className="v-photos">
            {fws.map((item) => {
              return <Flowerwall key={item.id} count={item.count} img={item.img} heart={item.heart} />
            })}
            {/* <li className="v-item">
              <p>999</p>
              <img src={flower01} alt="" />
              <div className="icon-heart">
                <img src={heart0} alt="" />
              </div>
            </li>
            <li className="v-item">
              <p>999</p>
              <img src={flower02} alt="" />
              <div className="icon-heart">
                <img src={heart0} alt="" />
              </div>
            </li>
            <li className="v-item">
              <h3>參加賽事</h3>
              <img src={votebotton1} alt="" />
            </li> */}


          </ul>
          {/* <ul className="v-photos">
            <li className="v-item">
              <p>999</p>
              <img src={flower06} alt="" />
              <div className="icon-heart">
                <img src={heart0} alt="" />
              </div>
            </li>
            <li className="v-item">
              <p>999</p>
              <img src={flower09} alt="" />
              <div className="icon-heart">
                <img src={heart0} alt="" />
              </div>
            </li>
            <li className="v-item">
              <p>999</p>
              <img src={flower10} alt="" />
              <div className="icon-heart">
                <img src={heart0} alt="" />
              </div>
            </li>
            <li className="v-item">
              <p>999</p>
              <img src={flower06} alt="" />
              <div className="icon-heart">
                <img src={heart0} alt="" />
              </div>
            </li>
            <li className="v-item">
              <h3>參加賽事</h3>
              <img src={votebotton2} alt="" />
            </li>
            <li className="v-item">
              <p>999</p>
              <img src={flower07} alt="" />
              <div className="icon-heart">
                <img src={heart0} alt="" />
              </div>
            </li>
            <li className="v-item">
              <p>999</p>
              <img src={flower08} alt="" />
              <div className="icon-heart">
                <img src={heart0} alt="" />
              </div>
            </li>
            <li className="v-item">
              <p>999</p>
              <img src={flower01} alt="" />
              <div className="icon-heart">
                <img src={heart0} alt="" />
              </div>
            </li>
            <li className="v-item">
              <p>999</p>
              <img src={flower02} alt="" />
              <div className="icon-heart">
                <img src={heart0} alt="" />
              </div>
            </li>

          </ul> */}
        </div>
      </section>

      <section className="wall-a-inner">
        <header className="a-title">
          <h2>文章列表</h2>
          <h2>ARTICLES</h2>
        </header>
        <div className="a-cardwarp">
          <a href="#" className="a-card">
            <img src="https://cdn.pixabay.com/photo/2020/04/14/03/57/pear-5040797_1280.jpg" alt="" />
            <div>
              <p className='wall-lable'>標籤</p>
              <p className='wall-date'>2025.07.28</p>
              <p className='wall-title'>荷與睡蓮誰美？北投公園一次看</p>
            </div>
          </a>
          <a href="#" className="a-card">
            <img src="https://cdn.pixabay.com/photo/2020/04/14/03/57/pear-5040797_1280.jpg" alt="" />
            <div>
              <p className='wall-lable'>標籤</p>
              <p className='wall-date'>2025.07.28</p>
              <p className='wall-title'>荷與睡蓮誰美？北投公園一次看</p>
            </div>
          </a>
          <a href="#" className="a-card">
            <img src="https://cdn.pixabay.com/photo/2020/04/14/03/57/pear-5040797_1280.jpg" alt="" />
            <div>
              <p className='wall-lable'>標籤</p>
              <p className='wall-date'>2025.07.28</p>
              <p className='wall-title'>荷與睡蓮誰美？北投公園一次看</p>
            </div>
          </a>
          <a href="#" className="a-card">
            <img src="https://cdn.pixabay.com/photo/2020/04/14/03/57/pear-5040797_1280.jpg" alt="" />
            <div>
              <p className='wall-lable'>標籤</p>
              <p className='wall-date'>2025.07.28</p>
              <p className='wall-title'>荷與睡蓮誰美？北投公園一次看</p>
            </div>
          </a>
          <a href="#" className="a-card">
            <img src="https://cdn.pixabay.com/photo/2020/04/14/03/57/pear-5040797_1280.jpg" alt="" />
            <div>
              <p className='wall-lable'>標籤</p>
              <p className='wall-date'>2025.07.28</p>
              <p className='wall-title'>荷與睡蓮誰美？北投公園一次看</p>
            </div>
          </a>
          <a href="#" className="a-card">
            <img src="https://cdn.pixabay.com/photo/2020/04/14/03/57/pear-5040797_1280.jpg" alt="" />
            <div>
              <p className='wall-lable'>標籤</p>
              <p className='wall-date'>2025.07.28</p>
              <p className='wall-title'>荷與睡蓮誰美？北投公園一次看</p>
            </div>
          </a>
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
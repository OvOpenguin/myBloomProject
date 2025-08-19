import "../sass/wall.scss"

import wall_vote_one from '../images/home/首頁-票選1-框.png'
import heart0 from '../images/wall/wall-icon.svg'
import heart2 from '../images/wall/wall-iconhover.svg'
import votebotton1 from '../images/wall/wall-votebutton1.svg'
import flower01 from '../images/wall/wall-flower01.png'
import flower02 from '../images/wall/wall-flower02.png'

const Wall = () => {
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
          <figure><img src={wall_vote_one} alt="" /></figure>
        </div>
      </div>

      <section className="wall-v-inner">
        <header className="v-title">
          <h2>花牆票選</h2>
          <h2>VOTING</h2>
        </header>
        <div className="v-photowarp">
          <ul className="v-photos">
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
            <li className="v-item">
              <h3>參加賽事</h3>
              <img src={votebotton1} alt="" />
            </li>
          </ul>
          <ul className="v-photos">
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
            <li className="v-item">
              <h3>參加賽事</h3>
              <img src={votebotton1} alt="" />
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2></h2>
        <h2></h2>
        <div>
          <a href="#">
            {/* <img src="https://cdn.pixabay.com/photo/2020/04/14/03/57/pear-5040797_1280.jpg" alt="" /> */}
            <div className='wall-lable'>標籤</div>
            <p className='wall-date'></p>
            <p className='wall-title'></p>
          </a>
        </div>
      </section>

    </>
  )
}

export default Wall
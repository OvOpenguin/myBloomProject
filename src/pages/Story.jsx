import "../sass/story.scss"
import 白玫瑰 from '../images/story/whiterose.png'

const Story = () => {
  return (
    <>
      <div className='story'>

        {/* 左側-選單 */}
        
        <div className="sList">
          <h3>其他花種</h3>
          <h4>Others</h4>
          <div className='sMenu'>
            <ul>
              <li><a href="#">玻斯菊</a></li>
              <li><a href="#">玻斯菊</a></li>
              <li><a href="#">玻斯菊</a></li>
              <li><a href="#">玻斯菊</a></li>
              <li><a href="#">玻斯菊</a></li>
            </ul>
            <ul>
              <li><a href="#">玻斯菊</a></li>
              <li><a href="#">玻斯菊</a></li>
              <li><a href="#">玻斯菊</a></li>
              <li><a href="#">玻斯菊</a></li>
              <li><a href="#">玻斯菊</a></li>
            </ul>
          </div>
          <a className="btn-play" href="#">前往遊戲</a>
        </div>

        {/* 中間-內容介紹 */}
        <div className='sContent'>
          <div className='sflowerName'>
            <h2>白玫瑰  Rosa alba</h2>
            <p>#純潔　#純高貴　 #天真　 #尊敬　 #誠心敬愛</p>
          </div>
          <div className='sflowerIntro'>

            {/* 科屬分類 */}
            <div className="sclass">
              <div className="classtxt">
                <div className="family">科</div><div className="ftxt">薔薇科 Rosaceae</div>
              </div>
              <div className="classtxt">
                <div className="genus">屬</div><div className="gtxt">薔薇科 Rosaceae</div>
              </div>
            </div>
            {/* 內文介紹 */}
            <div className="introtxt">
              白玫瑰是薔薇科薔薇屬玫瑰下一個品種，直立灌木，莖粗壯，叢生；小枝疏生鉤狀皮刺，較為密集的分佈著絨毛，有時混有刺毛。花排成傘房狀，花瓣倒卵形，白色或略帶紅色，花瓣有三種類型，不重疊、半重疊以及重疊，聞起來有一股芳香味。
              <br />
              果實長卵圓形，鮮紅色。花期5-6月，果實期8-9月。
              <br />
              白玫瑰原產中國華北以及日本和朝鮮，現中國各地均有栽培。喜通風環境和疏鬆土壤，適應性較強。白玫瑰性喜陽光、耐旱、耐寒、不耐澇，積水會導致落葉，甚至死亡。白玫瑰的主要繁殖方法為扦插繁殖法。

            </div>

          </div>
        </div>

        {/* 右側-主花區 */}
        <div className='sImg'>
          <img className='mainFlower' src={白玫瑰} alt="主花" />
        </div>

      </div>
    </>
  )
}

export default Story
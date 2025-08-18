import "../sass/story.scss"
import 白玫瑰 from '../images/story/whiterose.png'

const Story = () => {
  return (
    <>
      <div className='story'>
        {/* 左側-選單 */}
        <div className="sList">
          <h2>其他花種</h2>
          <h3>Others</h3>
          <div className='sMenu'>

          </div>
        </div>

        {/* 中間-內容介紹 */}
        <div className='sContent'>
          <div className='sflowerName'>
            <h2>白玫瑰  Rosa alba</h2>
            <p>#純潔</p>
          </div>
          <div className='sflowerIntro'>
            <p>白玫瑰是薔薇科薔薇屬玫瑰下一個品種，直立灌木，莖粗壯，叢生；小枝疏生鉤狀皮刺，較為密集的分佈著絨毛，有時混有刺毛。花排成傘房狀，花瓣倒卵形，白色或略帶紅色，花瓣有三種類型，不重疊、半重疊以及重疊，聞起來有一股芳香味。
              果實長卵圓形，鮮紅色。花期5-6月，果實期8-9月。
              白玫瑰原產中國華北以及日本和朝鮮，現中國各地均有栽培。喜通風環境和疏鬆土壤，適應性較強。白玫瑰性喜陽光、耐旱、耐寒、不耐澇，積水會導致落葉，甚至死亡。白玫瑰的主要繁殖方法為扦插繁殖法。</p>
          </div>
        </div>

        {/* 右側-主花區 */}
        <div className='sImg'>
          <figure><img className='mainFlower' src={白玫瑰} alt="主花" /></figure>
        </div>

      </div>
    </>
  )
}

export default Story
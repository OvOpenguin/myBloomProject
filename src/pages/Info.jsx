import "../sass/info.scss"
import 活動照片 from "../images/info/活動照片.jpg"
import TagSummer from "../images/info/tag-summer.svg"
import TagTaipeicity from "../images/info/tag-taipeicity.svg"




const Info = () => {
  return (
    <section>
      <div className='info-benner'>
        <img src={活動照片} alt="" />
      </div>

      <div className='info-basic'>
        <p>2025</p>
        <h2>樟樹步道花海</h2>
        <p>台北市士林區二二路一段123號</p>
        <div className='info-tag'>
          <img src={TagSummer} alt="" />
          <img src={TagTaipeicity} alt="" />
        </div>
      </div>

    </section>
  )
}

export default Info
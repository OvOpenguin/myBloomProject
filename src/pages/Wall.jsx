import "../sass/wall.scss"

const Wall = () => {
  return (
    <>
    <section className="wall-champion">
      <div className="wall-c-title">
        <h2>上季冠軍</h2>
        <h2>CHAMPION</h2>
        <p>我們正在尋找北區最耀眼的花卉明星！你的一票至關重要。登入會員，每人一票，用你的選擇為它加冕。票數即時更新，讓你隨時掌握戰況。快來加入這場充滿挑戰又好玩的任務，用你的品味，為花卉界帶來一場華麗的革命吧！</p>
        <button>前往投票</button>
      </div>
      <div className=".wall-c-bg">
        <p>123</p>
      </div>
    </section>

    <section>
      <h2>花牆票選</h2>
      <h2>VOTING</h2>
      <div>
      </div>
    </section>

    <section>
      <h2></h2>
      <h2></h2>
      <div>
        <a href="#">
          <img src="https://cdn.pixabay.com/photo/2020/04/14/03/57/pear-5040797_1280.jpg" alt="" />
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
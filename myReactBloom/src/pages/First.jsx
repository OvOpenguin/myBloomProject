import "../css/first.css"
import 北花冊 from "../images/北花冊.svg"
import 大花 from "../images/heroFlower.svg"
import 貼紙花1 from "../images/貼紙花1.svg"
import 活動照片 from "../images/活動照片.svg"



const App = () => {
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li><a href="#">花卉地圖</a></li>
                        <li><a href="#">賞花快訊</a></li>
                        <li><a href="#">花牆分享</a></li>
                        <li><a href="#">花卉故事</a></li>
                        <li><a href="#">登入/註冊</a></li>
                    </ul>
                </nav>
            </header>
            <main>
                <section className="hero">
                    <div className="name"><img src={北花冊} alt="北花冊" /><p>Bloomchure</p></div>
                    <div className="heroFlower"><img src={大花} alt="大花" /></div>
                    <p className="slogan">北區賞花季，一頁收藏所有花事</p>
                </section>

                <section className="activity">
                    <h2>近期活動</h2>
                    <h3>recent events</h3>
                    <div className="gallery">
                        <div className="pic p1">
                            <figure><img className="f1" src={貼紙花1} alt="花1" /></figure>
                            <h4>花季活動名稱</h4>
                        </div>
                        <div className="pic p2">
                            <figure><img className="f1" src={貼紙花1} alt="花1" /></figure>
                            <h4>花季活動名稱</h4>
                        </div>
                        <div className="pic p3"><figure><img className="f1" src={貼紙花1} alt="花1" /></figure>
                            <h4>花季活動名稱</h4>
                        </div>
                        <div className="pic p4"><figure><img className="f1" src={貼紙花1} alt="花1" /></figure>
                            <h4>花季活動名稱</h4>
                        </div>
                    </div>
                    <div className="btn">地圖搜尋→</div>
                </section>

                <section className="news">
                    <div className="newsList">
                        <h2>最新消息 NEWS</h2>
                        <ul>
                            <li>活動 荷與睡蓮誰美? 北投公園一次看</li>
                            <li>消息 荷與睡蓮誰美? 北投公園一次看</li>
                            <li>活動 荷與睡蓮誰美? 北投公園一次看</li>
                        </ul>
                        <div className="btn">更多活動</div>
                    </div>
                    <div className="newsPic"><figure><img src={活動照片} alt="活動照片" /></figure></div>
                </section>
                <section className="introFlower"></section>
                <section className="vote"></section>
            </main>


        </>
    )
}

export default App
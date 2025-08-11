import "../css/first.css"
import 北花冊 from "../images/北花冊.svg"
import 大花 from "../images/heroFlower.svg"
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
                        <div className="pic p1"></div>
                        <div className="pic p2"></div>
                        <div className="pic p3"></div>
                        <div className="pic p4"></div>
                    </div>

                </section>
                <section className="news"></section>
                <section className="introFlower"></section>
                <section className="vote"></section>
            </main>


        </>
    )
}

export default App
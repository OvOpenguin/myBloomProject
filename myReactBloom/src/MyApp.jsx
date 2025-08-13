import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Map from './pages/Map'
import News from './pages/News'
import Wall from './pages/Wall'
import Member from './pages/Member'
import Story from './pages/Story'
import Nav from './component/Nav'
import Footer from './component/Footer'


const MyApp = () => {
    return (
        <div className='wrap'>
            {/* 選單 */}
            <Nav></Nav>
            
            {/* 內容區 (抽換區) */}
            <Routes>
                {/* 首頁 */}
                <Route path="/" element={<Home />}></Route>
                {/* About */}
                <Route path="/map" element={<Map />} ></Route>
                {/* About */}
                <Route path="/news" element={<News />} ></Route>
                {/* 花牆分享 */}
                <Route path="/wall" element={<Wall />} ></Route>
                {/* 花卉故事  */}
                <Route path="/story" element={<Story />} ></Route>
                {/* 個人中心 */}
                <Route path="/member" element={<Member />} ></Route>
            </Routes>

            {/* <li><Link to="/">首頁</Link></li>
                <li><Link to="/map">花卉地圖</Link></li>
                <li><Link to="/news">賞花快訊</Link></li>
                <li><Link to="/wall">花牆分享</Link></li>
                <li><Link to="/story">花卉故事</Link></li>
                <li><Link to="/member">個人中心</Link></li> */}

            {/* footer區 */}
            <Footer></Footer>

        </div>

    )
}

export default MyApp
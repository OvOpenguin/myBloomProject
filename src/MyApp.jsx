import { Route, Routes } from 'react-router-dom'
import React, { useState, useEffect } from "react";

import ScrollToTop from './components/ScrollToTop'

import Nav from './components/Nav'
import Footer from './components/Footer'
import Loading from "./components/Loading";

import Home from './pages/Home'
import Map from './pages/Map'
import News from './pages/News'
import Wall from './pages/Wall'
import Story from './pages/Story'
import Member from './pages/Member'
import Info from './pages/Info'
import Play from './pages/Play'



const MyApp = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 3000);
        return () => clearTimeout(timer);
    }, []);

    if (loading) return <Loading />;
    return (

        <div className="wrap">
            <ScrollToTop />
            {/* 選單 */}
            <Nav></Nav>

            {/* 內容區：通過Routes和Route連結，這裡的path="/"和 Link to="/"(Nav.jsx)的引號內需相同，否則抓不到。*/}
            <Routes>
                {/* 首頁 */}
                <Route path="/" element={<Home />}></Route>
                {/* 花卉地圖 */}
                <Route path="/map" element={<Map />}></Route>
                {/* 賞花快訊 */}
                <Route path="/news" element={<News />}></Route>
                {/* 花牆分享 */}
                <Route path="/wall" element={<Wall />}></Route>
                {/* 花卉故事 */}
                <Route path="/story" element={<Story />}></Route>
                {/* 個人中心 */}
                <Route path="/member" element={<Member />}></Route>
                {/* 資訊頁 */}
                <Route path="/info" element={<Info />}></Route>
                {/* 遊戲頁 */}
                <Route path="/play" element={<Play />}></Route>
            </Routes>

            {/* 頁尾區 */}
            <Footer></Footer>
        </div>


    )
}

export default MyApp
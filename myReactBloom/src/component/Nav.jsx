import { Link } from 'react-router-dom'
import '../scss/layout.scss'

const Nav = () => {
    return (
        <header>
            <ul>
                {/* 原先：<li><a href="#">News</a></li> */}
                <li><Link to="/">首頁</Link></li>
                <li><Link to="/map">花卉地圖</Link></li>
                <li><Link to="/news">賞花快訊</Link></li>
                <li><Link to="/wall">花牆分享</Link></li>
                <li><Link to="/story">花卉故事</Link></li>
                <li><Link to="/member">個人中心</Link></li>
            </ul>
        </header>
    )
}

export default Nav
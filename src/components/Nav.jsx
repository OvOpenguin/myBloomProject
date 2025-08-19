import { Link } from 'react-router-dom'
// Link 要在切換選單的jsx檔import

const Nav = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">首頁</Link></li>
                    <li><Link to="/map">花卉地圖</Link></li>
                    <li><Link to="/news">賞花快訊</Link></li>
                    <li><Link to="/wall">花牆分享</Link></li>
                    <li><Link to="/story">花卉故事</Link></li>
                    <li><Link to="/member">個人中心</Link></li>
                    <li><Link to="/info">資訊頁</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav
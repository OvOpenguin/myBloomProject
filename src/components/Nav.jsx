import { Link } from 'react-router-dom'
// Link 要在切換選單的jsx檔import

const Nav = () => {
    return (
        <header>
            <nav>
                <ul className='nav'>
                    <li><Link to="/">首頁</Link></li>
                    <li className='nav-blue'><Link to="/map"><span className='nav-blue t'>花</span>卉地圖</Link></li>
                    <li className='nav-pink'><Link to="/news"><span className='nav-pink t'>賞</span>花快訊</Link></li>
                    <li className='nav-orange'><Link to="/wall"><span className='nav-orange t'>花</span>牆分享</Link></li>
                    <li className='nav-green'><Link to="/story"><span className='nav-green t'>花</span>卉故事</Link></li>
                    <li className='nav-purple'><Link to="/member"><span className='nav-purple t'>個</span>人中心</Link></li>
                    <li><Link to="/info">資訊頁</Link></li>
                    <li><Link to="/play">遊戲頁</Link></li>

                </ul>
            </nav>
        </header>
    )
}

export default Nav
import { Link } from 'react-router-dom'
// Link 要在切換選單的jsx檔import

const Nav = () => {
    return (
        <header>
            <nav>
                <ul className='nav'>
                    <li><Link to="/">首頁</Link></li>
                    <li className='nav-blue'><Link to="/map"><span className='nav-blue t'>花</span>卉地圖</Link>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 12">
                            <path class="line" pathLength="1" d="M1.23438 10.8483C2.2423 10.6635 2.5682 10.5264 11.0128 9.01727C19.4573 7.50811 35.7811 4.94844 43.5731 5.07659C51.365 5.20474 50.1304 8.09828 50.8662 9.64454C51.602 11.1908 54.3455 11.3021 63.029 9.74571C71.7126 8.18934 86.2532 4.96193 101.234 1.63672" />
                        </svg>
                    </li>
                    <li className='nav-pink'><Link to="/news"><span className='nav-pink t'>賞</span>花快訊</Link>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 12">
                            <path class="line" pathLength="1" d="M1.23438 10.8483C2.2423 10.6635 2.5682 10.5264 11.0128 9.01727C19.4573 7.50811 35.7811 4.94844 43.5731 5.07659C51.365 5.20474 50.1304 8.09828 50.8662 9.64454C51.602 11.1908 54.3455 11.3021 63.029 9.74571C71.7126 8.18934 86.2532 4.96193 101.234 1.63672" />
                        </svg>
                    </li>
                    <li className='nav-orange'><Link to="/wall"><span className='nav-orange t'>花</span>牆分享</Link>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 12">
                            <path class="line" pathLength="1" d="M1.23438 10.8483C2.2423 10.6635 2.5682 10.5264 11.0128 9.01727C19.4573 7.50811 35.7811 4.94844 43.5731 5.07659C51.365 5.20474 50.1304 8.09828 50.8662 9.64454C51.602 11.1908 54.3455 11.3021 63.029 9.74571C71.7126 8.18934 86.2532 4.96193 101.234 1.63672" />
                        </svg>
                    </li>
                    <li className='nav-green'><Link to="/story"><span className='nav-green t'>花</span>卉故事</Link>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 12">
                            <path class="line" pathLength="1" d="M1.23438 10.8483C2.2423 10.6635 2.5682 10.5264 11.0128 9.01727C19.4573 7.50811 35.7811 4.94844 43.5731 5.07659C51.365 5.20474 50.1304 8.09828 50.8662 9.64454C51.602 11.1908 54.3455 11.3021 63.029 9.74571C71.7126 8.18934 86.2532 4.96193 101.234 1.63672" />
                        </svg></li>
                    <li className='nav-purple'><Link to="/member"><span className='nav-purple t'>個</span>人中心</Link>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 12">
                            <path class="line" pathLength="1" d="M1.23438 10.8483C2.2423 10.6635 2.5682 10.5264 11.0128 9.01727C19.4573 7.50811 35.7811 4.94844 43.5731 5.07659C51.365 5.20474 50.1304 8.09828 50.8662 9.64454C51.602 11.1908 54.3455 11.3021 63.029 9.74571C71.7126 8.18934 86.2532 4.96193 101.234 1.63672" />
                        </svg></li>
                    <li><Link to="/info">資訊頁</Link></li>
                    <li><Link to="/play">遊戲頁</Link></li>

                </ul>
            </nav>
        </header>
    )


}

export default Nav
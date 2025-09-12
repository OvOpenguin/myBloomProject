
import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import $ from 'jquery';
import logo from '../images/home/logo.png'



const Nav = () => {

    useEffect(() => {
        $('.hamburger').on("click", function () {
            console.log("click");
            $(this).toggleClass('is-active');
            $('.menu').toggleClass('show');
        });

        // 卸載元件時，移除事件監聽器，避免記憶體洩漏
        return () => {
            $('.hamburger').off("click");
        };
    }, []);


    return (
        <header>

            {/* 漢堡按鈕 */}
            <button className="hamburger">
                <span className="bar">
                </span><span className="bar">
                </span><span className="bar"></span>
            </button>

            {/* 導覽列 */}
            <nav>
                <ul className='menu'>
                    <li className='nav-logo'><Link to="/"><img src={logo} alt="" /></Link></li>
                    <li className='nav-blue'><NavLink to="/map" className={({ isActive }) => isActive ? "nav-blue active" : ""}><span className='nav-blue t'>花</span>卉地圖
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 12">
                            <path className="line" pathLength="1" d="M1.23438 10.8483C2.2423 10.6635 2.5682 10.5264 11.0128 9.01727C19.4573 7.50811 35.7811 4.94844 43.5731 5.07659C51.365 5.20474 50.1304 8.09828 50.8662 9.64454C51.602 11.1908 54.3455 11.3021 63.029 9.74571C71.7126 8.18934 86.2532 4.96193 101.234 1.63672" />
                        </svg></NavLink>
                    </li>
                    <li className='nav-pink'><NavLink to="/news" className={({ isActive }) => isActive ? "nav-pink active" : ""}><span className='nav-pink t'>賞</span>花快訊
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 102 16">
                            <path className="line" pathLength="1" d="M1 15C10.7879 12.4263 24.4697 7.62617 27.8826 4.9358C28.6587 4.32396 28.7727 3.63999 28.9015 2.93972C29.0303 2.23945 29.0303 1.44939 28.2803 1.14115C27.5303 0.832912 26.0303 1.03042 24.5076 1.72471C22.9848 2.419 21.4848 3.60408 20.5871 4.70836C19.6894 5.81264 19.4394 6.80021 19.8106 7.60522C20.5767 9.26667 23.2121 9.81079 25.2273 10.11C29.2049 10.7007 32.803 8.82322 35.9621 7.72193C39.6385 6.44033 42.6515 5.6271 48.697 6.01614C54.4108 6.38384 63.5606 10.3973 74.6591 12.4922C85.0485 14.4532 89.8636 11.6123 93.6629 10.6158C94.6742 10.2178 95.9242 9.62524 96.9432 9.12248C97.9621 8.61972 98.7121 8.2247 101 6.62065" />
                        </svg></NavLink>
                    </li>
                    <li className='nav-orange'><NavLink to="/wall" className={({ isActive }) => isActive ? "nav-orange active" : ""}><span className='nav-orange t'>花</span>牆分享
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 102 15">
                            <path className="line" pathLength="1" d="M1 7.71279C1.26613 9.92801 1.93548 11.5726 3.14113 12.5872C3.77885 13.1238 4.6129 13.6017 5.95565 13.8611C9.0794 14.4645 15.6048 13.0128 22.7258 11.2339C25.8925 10.4429 26.8024 10.0531 27.6069 9.95089C30.6761 9.56088 35.9234 12.8969 42.744 13.0525C47.3045 13.1566 54.0887 12.3019 60.4456 11.4369C66.8024 10.5718 72.5242 9.46421 77.1351 8.44051C85.0726 6.51059 89.9637 4.97275 93.5121 3.60426C95.5968 2.83991 98.2581 1.93369 101 1" />
                        </svg></NavLink>
                    </li>
                    <li className='nav-green'><NavLink to="/story" className={({ isActive }) => isActive ? "nav-green active" : ""}><span className='nav-green t'>花</span>卉故事
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 102 10">
                            <path className="line" pathLength="1" d="M1 9C2.52308 8.41473 4.04615 7.82945 10.9231 6.65003C17.8 5.47062 29.9846 3.71479 40.5769 2.61519C51.1692 1.51558 59.8 1.1254 65.7058 1.02194C79.0798 0.787653 82.5346 2.49399 83.1115 3.0837C83.372 3.34997 83.3077 3.67341 82.6096 4.26312C78.3851 7.8318 72.6846 8.5034 68.8981 8.8522C68.0614 8.92927 67.4231 8.60982 67.0327 8.31422C66.6423 8.01863 66.5154 7.62845 66.7673 7.18358C68.0525 4.91415 74.8 3.59064 84.1981 2.06391C89.0269 1.51262 93.9769 1.41508 96.7808 1.4136C99.5846 1.41212 100.092 1.50967 101 1.61017" />
                        </svg></NavLink></li>
                    <li className='nav-purple'><NavLink to="/member" className={({ isActive }) => isActive ? "nav-purple active" : ""}><span className='nav-purple t'>個</span>人中心
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 102 15">
                            <path className="line" pathLength="1" d="M5.0172 6.70368C3.64207 8.05219 1.48245 10.7696 1.09252 12.1996C-0.405758 17.6942 16.692 9.01774 23.4501 7.3209C24.8527 6.96872 25.312 6.8422 25.6235 6.9746C25.935 7.10701 26.0873 7.51034 26.0134 7.98701C25.8495 9.04519 25.169 9.95885 25.1667 10.6372C25.1515 15.0915 39.4603 8.20293 43.3803 7.18238C44.6927 6.84072 45.6207 6.70368 46.2367 6.90534C46.8793 7.11569 46.0868 8.32923 46.3152 9.07478C46.4327 9.45822 47.0004 9.68589 47.5404 9.68996C50.1913 9.70996 55.8881 7.12738 60.6849 5.68924C63.1861 4.93937 65.1541 4.25924 66.0009 4.52813C66.8644 4.80233 65.6248 6.2922 65.4679 6.90331C64.9932 8.75226 70.6824 6.1659 73.3796 5.41628C76.3979 4.57739 79.1455 3.72147 80.9982 3.37517C81.9328 3.20048 81.4666 5.06998 81.5404 5.74831C81.7697 7.85522 86.9902 5.48146 89.4544 4.73795C92.0567 3.95276 94.8349 3.17555 97.2991 2.29351C97.9175 2.08777 98.5266 1.95333 99.0688 1.74963C99.611 1.54592 100.068 1.27704 101 1" />
                        </svg></NavLink></li>
                    {/* <li><Link to="/info">資訊頁</Link></li> */}
                    {/* <li><Link to="/play">遊戲頁</Link></li> */}

                </ul>
            </nav>


        </header>
    )


}

export default Nav
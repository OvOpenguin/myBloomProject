import React, { useRef, useState, useEffect } from "react";
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";


// Json
import FlowerEvent from '../json/FlowerEvent.json';

// 圖片
import arrowd from '../images/member/member-arrow-lightgreen.svg'
import arrowh from '../images/member/member-arrow-green.svg'
import favtab from '../images/member/member-tab-blue.svg'
import walltab from '../images/member/member-tab-orange.svg'
import newstab from '../images/member/member-tab-yellow.svg'
import prftab from '../images/member/member-tab-green.svg'
import heart0 from '../images/wall/wall-icon.svg'
import votebotton1 from '../images/wall/wall-votebutton1.svg'
import flower01 from '../images/wall/wall-flower01.png'
import flower02 from '../images/wall/wall-flower02.png'
import sign1 from '../images/member/member-sign-1.svg'
import sign2 from '../images/member/member-sign-2.svg'
import logo from '../images/home/北花冊.webp'


// 裝飾
import hfwr1 from '../images/home/h-w-de1.svg'
import hfwr2 from '../images/home/h-w-de2.svg';
import hfwr3 from '../images/member/member-decoline-line.svg';

// sass
import "../sass/member.scss"

<defs>
    <filter id="rough">
        <feTurbulence type="fractalNoise" baseFrequency="15" numOctaves="2" result="noise" />
        <feDisplacementMap in2="noise" in="SourceGraphic" scale="10" />
    </filter>
</defs>


// 左側選單
function SidebarItem({ label, onClick, active = false, danger = false }) {
    return (
        <div className="sidebar-item">
            <button type="button" onClick={onClick}>
                <p>{label}</p>
                <div className="arrow-box">
                    <img className="ard" src={arrowd} alt="" />
                    <img className="arh" src={arrowh} alt="" />
                </div>
            </button>
        </div>
    );
}

// 右側面板 => 各分頁元件
// 我的收藏
const Favorites = () => {
    return (
        <div className="fav-wrap">
            <div className="tab">
                <h2>我的收藏</h2>
                <img src={favtab} alt="" />
            </div>
            <div className="content">
                <div className="map-cardWrap">
                    <a href="#" className="map-card">
                        <p className="map-lable">台北</p>
                        <img src="https://cdn.pixabay.com/photo/2020/04/14/03/57/pear-5040797_1280.jpg" className="map-img" alt="" />
                        <div className="map-date">07.01 — 09.23</div>
                        <h3 className="map-title">樟樹步道花海</h3>
                    </a>
                    <a href="#" className="map-card">
                        <p className="map-lable">台北</p>
                        <img src="https://cdn.pixabay.com/photo/2020/04/14/03/57/pear-5040797_1280.jpg" className="map-img" alt="" />
                        <div className="map-date">07.01 — 09.23</div>
                        <h3 className="map-title">樟樹步道花海</h3>
                    </a>
                </div>
            </div>

        </div>
    );
}

// 我的花牆
const Wall = () => {
    return (
        <div className="wall-wrap">
            <div className="tab">
                <h2>我的花牆</h2>
                <img src={walltab} alt="" />
            </div>
            <div className="content">
                <div>
                    <ul className="v-photos">
                        <li className="v-item">
                            <p>999</p>
                            <img src={flower01} alt="" />
                            <div className="icon-heart">
                                <img src={heart0} alt="" />
                            </div>
                        </li>
                        <li className="v-item">
                            <p>999</p>
                            <img src={flower02} alt="" />
                            <div className="icon-heart">
                                <img src={heart0} alt="" />
                            </div>
                        </li>
                        <li className="v-item">
                            <h3>上傳</h3>
                            <img src={votebotton1} alt="" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    );
}

// 我的花訊
const News = () => {


    return (
        <div className="news-wrap">
            <div className="tab">
                <h2>我的花訊</h2>
                <img src={newstab} alt="" />
            </div>
            <div className="content">
                <div>
                    <div className="news-Card">
                        <div className="txtwrap">
                            <div className="news-labledate">
                                <div className="news-lable">活動</div>
                                <p>2025.07.28</p>
                            </div>
                            <p className="news-cardTitle">標題</p>
                        </div>
                        <img src="https://cdn.pixabay.com/photo/2020/04/14/03/57/pear-5040797_1280.jpg" className="news-img" alt="" />
                    </div>
                    <div className="news-Card">
                        <div className="txtwrap">
                            <div className="news-labledate">
                                <div className="news-lable">活動</div>
                                <p>2025.07.28</p>
                            </div>
                            <p className="news-cardTitle">標題</p>
                        </div>
                        <img src="https://cdn.pixabay.com/photo/2020/04/14/03/57/pear-5040797_1280.jpg" className="news-img" alt="" />
                    </div><div className="news-Card">
                        <div className="txtwrap">
                            <div className="news-labledate">
                                <div className="news-lable">活動</div>
                                <p>2025.07.28</p>
                            </div>
                            <p className="news-cardTitle">標題</p>
                        </div>
                        <img src="https://cdn.pixabay.com/photo/2020/04/14/03/57/pear-5040797_1280.jpg" className="news-img" alt="" />
                    </div>

                </div>
            </div>
        </div>
    );
}


// 個人中心
const Profile = ({ username }) => {

    // 建立 ref 綁定密碼
    const passwordRef = useRef(null);
    // 設定密碼是否顯示
    const [show, setShow] = useState(false);

    // 處理點擊事件的函式
    function togglePassword() {

        // 切換 show 的狀態
        setShow(prevShow => !prevShow);
        // 根據 show 的狀態 => 更新 type
        if (passwordRef.current) {
            passwordRef.current.type = show ? "text" : "password";
        }
    }

    return (
        <div className="prf-wrap">
            <div className="tab">
                <h2>個人中心</h2>
                <img src={prftab} alt="" />
            </div>
            <div className="content">
                <div className="user-wrap">

                    {/* 帳號 */}
                    <div className="user-box">
                        <div className="label">
                            <label htmlFor="text">帳號</label>
                        </div>
                        <div>
                            {username ? (
                                <p>{username}</p>
                            ) : (
                                <p>{username}</p>
                            )}
                        </div>
                    </div>

                    {/* 密碼 */}
                    <div className="user-box">
                        <div className="label">
                            <label htmlFor="password">密碼</label>
                        </div>
                        <input
                            type={show ? 'text' : 'password'}
                            className="inputId"
                            placeholder="Default"
                            ref={passwordRef}
                            required />

                        {/* 查看密碼 */}
                        <button
                            className="show-btn"
                            type="button"
                            onClick={togglePassword}>
                            {show ? <VscEye />

                                : <VscEyeClosed />
                            }

                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}

// 登入畫面
function SignIn({ onLogin }) {

    // 輸入帳號&密碼
    const [username, setUsername] = useState('');

    // 追蹤 input 資料
    const handleInputChange = (e) => {
        setUsername(e.target.value);
    };

    const handleLoginClick = () => {
        if (username.trim() !== '') {
            onLogin(username);
        }
    }

    return (
        <div className="signin-wrap">
            <img src={logo} alt="" />
            <form action="" method="post"

                onSubmit={(e) => {
                    e.preventDefault();
                    onLogin(); // 假設直接登入成功
                }}
            >
                {/* 帳號 */}
                <div className="sign-box">
                    <label htmlFor="username">帳號</label>
                    <input type="text" className="username" placeholder="請輸入電子郵件"
                        required
                        autoFocus
                        value={username}
                        onChange={handleInputChange} />
                </div>

                {/* 密碼 */}
                <div className="sign-box">
                    <label htmlFor="userid">密碼</label>
                    <input type="password" className="userid" placeholder="請輸入密碼"
                        // onChange={(e) => setUsername(e.target.value)} // 更新狀態
                        required
                    />
                </div>

                {/* 登入 */}
                <button className="m-btn-sign" type="submit">
                    <span className="circle">
                        <span className="icon arrow"></span>
                    </span>
                    <span className="btn-text">登入</span>
                </button>
                {/* 註冊/忘記密碼 */}
                <button className="register" type="submit">
                    註冊/忘記密碼
                </button>

            </form>
        </div>
    );
}

// 切換各分頁的陣列
export default function MemberCenter() {

    // 登入
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // 檢查 localStorage 是否有登入紀錄
    useEffect(() => {
        const savedLogin = localStorage.getItem("isLoggedIn");
        if (savedLogin === "true") {
            setIsLoggedIn(true);
        }
    }, []);

    // 宣告變數 => 顯示目前分頁
    const [activeKey, setActiveKey] = useState("favorites");

    const TABS = [
        { key: "favorites", label: "我的收藏", view: <Favorites /> },
        { key: "wall", label: "我的花牆", view: <Wall /> },
        { key: "news", label: "我的花訊", view: <News /> },
        { key: "profile", label: "個人中心", view: <Profile /> },
        { key: "logout", label: "登出", danger: true },
    ];

    // 將分頁設定為目前狀態
    const handleSelect = (key) => {
        if (key === "logout") {
            setIsLoggedIn(false); // 登出
            setActiveKey("favorites"); // 重置 activeKey
            localStorage.removeItem("isLoggedIn"); //清除登入紀錄
        } else {
            setActiveKey(key);
        }
    };

    // 根據選擇狀態搜尋渲染分頁
    const activeTab = isLoggedIn
        ? TABS.find((t) => t.key === activeKey)
        : null;

    // 檢查是否已登入
    if (!isLoggedIn) {

        // 未登入 => 渲染登入元件
        return (
            <div className="sign-in">
                <SignIn onLogin={() => {
                    setIsLoggedIn(true)
                    localStorage.setItem("isLoggedIn", "true"); // 登入成功存入
                }} />
            </div>
        );
    }

    // 登入 => 渲染會員中心介面
    return (
        <section className="wrapper">
            <div className="padding-top">
                <img className="dc3" src={hfwr3} alt="" />

            </div>
            <div className="padding-left"></div>
            {/* 左側選單 */}
            <div className="left-sidebar">
                {TABS.map((t) => (
                    <SidebarItem
                        key={t.key}
                        label={t.label}
                        active={activeKey === t.key}
                        danger={t.danger}
                        onClick={() => handleSelect(t.key)}
                    />
                ))}
            </div>

            {/* 右側面板 */}
            <div className="right-panel">
                {activeTab?.view}
            </div>

            <div className="padding-right"></div>
            <div className="padding-bottom">
                <img className="dc1" src={hfwr1} alt="" />
                <img className="dc2" src={hfwr2} alt="" />
            </div>

        </section>
    );
}

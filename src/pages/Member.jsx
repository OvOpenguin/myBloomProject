import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom"
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";
import Nav from '../components/Nav'
import FavoriteButton from "../components/FavoriteButton";

// 圖片
import arrowd from '../images/member/member-arrow-lightgreen.svg'
import arrowh from '../images/member/member-arrow-green.svg'
import favtab from '../images/member/member-tab-blue.svg'
import walltab from '../images/member/member-tab-orange.svg'
import newstab from '../images/member/member-tab-yellow.svg'
import prftab from '../images/member/member-tab-green.svg'
import votebotton1 from '../images/wall/wall-votebutton1.svg'
import flower01 from '../images/wall/wall-flower01.png'
import flower02 from '../images/wall/wall-flower02.png'
import logo from '../images/home/logo.png'


// 裝飾
import hfwr1 from '../images/home/h-w-de1.svg'
import hfwr2 from '../images/home/h-w-de2.svg';
import hfwr3 from '../images/member/member-decoline-line.svg';
import dc1 from '../images/member/member-sign-3.svg';

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
                    <img className="ard" src={arrowd} alt="按鈕" />
                    <img className="arh" src={arrowh} alt="hover按鈕" />
                </div>
            </button>
        </div>
    );
}

// 右側面板 => 各分頁元件
// 我的收藏
const Favorites = () => {

    const [favorites, setFavorites] = useState(() => {
        const saved = localStorage.getItem("favorites");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        const handleStorageChange = () => {
            const saved = localStorage.getItem("favorites");
            setFavorites(saved ? JSON.parse(saved) : []);
        };
        window.addEventListener("storage", handleStorageChange);
        return () => window.removeEventListener("storage", handleStorageChange);
    }, []);

    if (favorites.length === 0) {
        return (
            <div className="fav-wrap">
                <div className="tab">
                    <h2>我的收藏</h2>
                    <img src={favtab} alt="tab裝飾" />
                </div>

                <div className="content">
                    <p>尚未收藏任何活動，快去<Link to='/map'>「花卉地圖」</Link>逛逛吧！</p>
                </div>

            </div>
        );
    }



    return (
        <div className="fav-wrap">
            <div className="tab">
                <h2>我的收藏</h2>
                <img src={favtab} alt="tab裝飾" />
            </div>
            <div className="content">
                {/* 收藏卡片 */}
                <div className="map-cardWrap">
                    {favorites.map((item) => (
                        <Link to={`/info/${item.id}`} key={item.id}>
                            <div className="map-card">
                                <p className="map-label">{item.lable}</p>
                                <img src={item.img} className="map-img" alt="活動圖片" />
                                <div className="map-date">{item.date}</div>
                                <h3 className="map-title">{item.title}</h3>
                                <FavoriteButton card={item} />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

        </div>
    );
}

// 我的花牆
const Wall = () => {

    // 用來儲存圖片預覽的 URL
    const [previewUrls, setPreviewUrls] = useState([]);

    const handleUpload = (e) => {
        const files = Array.from(e.target.files);

        // 檢查是否有選取檔案 => // 建立新的 Promise 陣列
        if (files.length > 0) {
            const promises = files.map(file => {
                return new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.onloadend = () => {
                        resolve(reader.result);
                    };

                    reader.onerror = reject;
                    reader.readAsDataURL(file);
                });
            });

            // 當所有的 Promise 都完成後，更新 state
            Promise.all(promises)
                .then(urls => {
                    // 將新的 URL 陣列合併到舊的陣列中
                    setPreviewUrls(prevUrls => [...prevUrls, ...urls]);
                    { openPopup() }
                })
                .catch(error => {
                    console.error("檔案讀取失敗", error);
                });
        }
    };

    // 上傳彈出視窗
    const [isOpen, setIsOpen] = useState(false);
    const openBtnRef = useRef(null); // 開啟按鈕的 ref
    const closeBtnRef = useRef(null); // 關閉按鈕的 ref

    const openPopup = () => {
        setIsOpen(true);
        setTimeout(() => {
            closeBtnRef.current?.focus(); // 聚焦到關閉按鈕
        }, 0);
    };

    const closePopup = () => {
        setIsOpen(false);
        setTimeout(() => {
            openBtnRef.current?.focus(); // 聚焦回開啟按鈕
        }, 0);
    };


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

                        </li>
                        <li className="v-item">
                            <p>999</p>
                            <img src={flower02} alt="" />

                        </li>

                        {/* 當 previewUrls 陣列有內容時才顯示 */}
                        {previewUrls.map((url, index) => (
                            <li key={index} className="v-item">
                                <p>0</p>
                                <img

                                    src={url}
                                    alt={`上傳圖片 ${index + 1}`}
                                />

                            </li>
                        ))}

                        <li className="v-item">
                            <label
                                htmlFor="upload"
                                className="upload-btn">
                                <h3>作品上傳</h3>
                            </label>
                            <img src={votebotton1} alt="" />
                            <input
                                type="file"
                                className="upload-input"
                                id="upload"
                                accept="image/*"
                                onChange={handleUpload}
                                multiple
                            />

                        </li>


                    </ul>

                    {/* 上傳成功彈出視窗 */}
                    {isOpen && (
                        <div
                            className="popup"
                            // id="myPopup"
                            aria-hidden={!isOpen}
                            onClick={(e) => {
                                if (e.target === e.currentTarget) closePopup(); // 點背景關閉
                            }}
                        >
                            <div
                                className="wrapper"
                                aria-labelledby="popupTitle"
                                aria-describedby="popupText"
                                aria-modal="true"
                            >
                                <h2>上傳成功！<br />
                                    快來看看你的曠世巨作！</h2>

                                <button className="closePopup" ref={closeBtnRef} onClick={closePopup}>
                                    <span className="bar"></span>
                                    <span className="bar"></span>
                                </button>
                            </div>
                        </div>
                    )}
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
                                <div className="news-lable">新北</div>
                                <p>05.10 — 05.25</p>
                            </div>
                            <p className="news-cardTitle">新北河濱蝶戀季</p>
                        </div>
                        <img src="./activity/activity02.jpg" className="news-img" alt="" />
                    </div>
                    <div className="news-Card">
                        <div className="txtwrap">
                            <div className="news-labledate">
                                <div className="news-lable">桃園</div>
                                <p>11.23 — 12.08</p>
                            </div>
                            <p className="news-cardTitle">桃園仙草花節</p>
                        </div>
                        <img src="./activity/activity04.jpg" className="news-img" alt="" />
                    </div><div className="news-Card">
                        <div className="txtwrap">
                            <div className="news-labledate">
                                <div className="news-lable">桃園</div>
                                <p>08.30 — 09.30</p>
                            </div>
                            <p className="news-cardTitle">大溪韭菜花季</p>
                        </div>
                        <img src="./activity/activity06.jpg" className="news-img" alt="" />
                    </div>

                </div>
            </div>
        </div>
    );
}

// 個人中心
const Profile = ({ username, userid }) => {

    // 建立 ref 綁定密碼
    const passwordRef = useRef(null);
    // 設定密碼是否顯示
    const [show, setShow] = useState(false);

    // 處理點擊事件的函式
    function togglePassword() {
        setShow(prevShow => !prevShow);  // 切換 show 的狀態

    }

    return (
        <div className="prf-wrap">
            <div className="tab">
                <h2>個人中心</h2>
                <img src={prftab} alt="" />
            </div>
            <div className="content">
                <form className="user-wrap">

                    {/* 帳號 */}
                    <div className="user-box">
                        <div className="label">
                            <p>帳號</p>
                        </div>
                        <div className="inputId" style={{ fontSize: '1rem', backgroundColor: '#fff', lineHeight: '30px', padding: '0 10px' }}>
                            {username || ''}
                        </div>
                    </div>

                    {/* 密碼 */}
                    <div className="user-box">
                        <label htmlFor="inputId" className="label">
                            <p>密碼</p>
                        </label>
                        <input
                            id="inputId"
                            className="inputId"
                            type={show ? 'text' : 'password'}
                            placeholder="Default"
                            ref={passwordRef}
                            value={userid || ''}
                            required
                            readOnly
                            style={{ width: '50%' }}
                        />

                        {/* 查看密碼 */}
                        <button
                            className="show-btn"
                            type="button"
                            onClick={togglePassword}>
                            {show ? <VscEye size={24} /> : <VscEyeClosed size={24} />}
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
}

// 登入畫面
const SignIn = ({ onLogin }) => {

    // 輸入帳號
    const [username, setUserName] = useState('');
    const [userid, setUserId] = useState('');

    // 追蹤 Name & Id 資料
    const handleNameChange = (e) => {
        setUserName(e.target.value);
    };
    const handleIdChange = (e) => {
        setUserId(e.target.value);
    };

    // 檢查輸入條件
    const handleLoginClick = (e) => {
        e.preventDefault();
        if (username.trim() !== '' && userid.trim() !== '') {
            onLogin(username, userid);  // 回傳父層的參數
        } else {
            alert('使用者名稱和密碼為必填！');
        }
    };

    return (
        <>
            <Nav />
            <div className="signin-wrap">
                <img className="form-logo" src={logo} alt="" />
                <form className='form' onSubmit={handleLoginClick}>

                    {/* 帳號 */}
                    <div className="sign-box">
                        <label htmlFor="username">帳號</label>
                        <input
                            id="username"
                            type="text"
                            className="username"
                            placeholder="請輸入電子郵件"
                            required
                            autoFocus
                            value={username}
                            onChange={handleNameChange} />
                    </div>

                    {/* 密碼 */}
                    <div className="sign-box">
                        <label htmlFor="userid">密碼</label>
                        <input
                            id="userid"
                            type="password"
                            className="userid"
                            placeholder="請輸入密碼"
                            required
                            value={userid}
                            onChange={handleIdChange}
                        />
                    </div>

                    {/* 登入 */}
                    <button className="m-btn-sign"
                        type="submit">
                        <span className="circle">
                            <span className="icon arrow"></span>
                        </span>
                        <span className="btn-text">登入</span>
                    </button>
                    {/* 註冊/忘記密碼 */}
                    <button className="register" type="button">
                        註冊/忘記密碼
                    </button>

                </form>
                <div>
                    <img className="sign-dc" src={dc1} alt="" />
                </div>
            </div>
        </>
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
            const savedUser = localStorage.getItem("credentials");
            if (savedUser) {
                setCredentials(JSON.parse(savedUser));
            }
            setIsLoggedIn(true);
        }
    }, []);

    // 由 SignIn 帶回的登入資訊
    const [credentials, setCredentials] = useState({
        username: '',
        userid: ''
    });

    const handleLogin = (username, userid) => {
        // 登入成功後，更新狀態為使用者名稱
        const userData = { username, userid };
        setCredentials({ username, userid });
        setIsLoggedIn(true);
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("credentials", JSON.stringify(userData));
    };

    // 宣告變數 => 顯示目前分頁
    const [activeKey, setActiveKey] = useState("favorites");

    const TABS = [
        { key: "favorites", label: "我的收藏", view: <Favorites /> },
        { key: "wall", label: "我的花牆", view: <Wall /> },
        { key: "news", label: "我的花訊", view: <News /> },
        {
            key: "profile", label: "個人中心", view: (
                <Profile
                    username={credentials.username}
                    userid={credentials.userid} />)
        },
        { key: "logout", label: "登出", danger: true },
    ];

    // 將分頁設定為目前狀態
    const handleSelect = (key) => {
        if (key === "logout") {
            setIsLoggedIn(false); // 登出
            setActiveKey("favorites"); // 重置 activeKey
            setCredentials({ username: '', userid: '' });
            localStorage.removeItem("isLoggedIn");
            localStorage.removeItem("credentials");
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
                <SignIn onLogin={handleLogin} />
            </div>
        );
    }



    // 登入 => 渲染會員中心介面
    return (
        <>    <Nav></Nav>
            <section className="wrapper">
                {/* <div className="padding-top">
                    <img className="dc3" src={hfwr3} alt="" />
                </div>
                <div className="padding-left"></div> */}

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

                {/* <div className="padding-right"></div>
                <div className="padding-bottom">
                    <img className="dc1" src={hfwr1} alt="" />
                    <img className="dc2" src={hfwr2} alt="" />
                </div> */}

            </section>
        </>
    );
}

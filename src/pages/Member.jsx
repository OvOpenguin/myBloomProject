import React, { useRef, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom"
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
import flower01 from '../images/wall/wall-flower01.jpg'
import flower02 from '../images/wall/wall-flower02.jpg'
import logo from '../images/home/logo.png'


// 裝飾
import hfwr1 from '../images/home/h-w-de1.svg'
import hfwr2 from '../images/home/h-w-de2.svg';
import hfwr3 from '../images/member/member-decoline-line.svg';
import dc1 from '../images/member/member-sign-3.svg';

// sass
import "../sass/member.scss"
import { figure } from "framer-motion/client";

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
const MemberWall = () => {

    // 用來儲存圖片預覽的 URL
    const [previewUrls, setPreviewUrls] = useState([]);
    // 用來儲存使用者選擇的檔案
    const [selectedFiles, setSelectedFiles] = useState([]);

    // 上傳彈出視窗
    const [isOpen, setIsOpen] = useState(false);
    const openBtnRef = useRef(null); // 開啟按鈕的 ref
    const closeBtnRef = useRef(null); // 關閉按鈕的 ref

    // 儲存使用者檔案
    const fileInputRef = useRef(null);

    const handleUpload = (e) => {

        const file = e.target.files[0]; // 只取第一個
        if (!file) return;

        setSelectedFiles([file]);

        const reader = new FileReader();
        reader.onloadend = () => {
            setPreviewUrls([reader.result]); // 覆蓋舊的，只保留一張
            openPopup();
        };
        reader.readAsDataURL(file);
    }


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

    // 處理表單提交
    const handleSubmit = (e) => {
        e.preventDefault();
        // 在這裡可以加入將圖片與表單資料發送到後端的邏輯
        console.log("表單提交成功！");
        console.log("上傳的檔案：", selectedFiles);

        // 提交後關閉彈窗
        closePopup();
    };

    // 取消上傳
    const handleReset = () => {
        // 1. 清除 React State (清除圖片預覽)
        setPreviewUrls([]);
        setSelectedFiles([]);

        // 2. 清除原生 input type="file" 的值 (關鍵步驟！)
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
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

                        {/* 上傳按鈕 */}
                        <li className="v-item">
                            <div
                                ref={openBtnRef}
                                onClick={openPopup}
                                aria-controls="myPopup"
                                aria-label="Open popup"
                                className="a-button">

                                <h3>作品上傳</h3>
                                <img src={votebotton1} alt="button" />
                            </div>
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
                                <h2>上傳作品</h2>
                                <form
                                    className="uploadform"
                                    id="uploadform"
                                    onSubmit={handleSubmit}
                                    onReset={handleReset}
                                >
                                    <div>
                                        <label htmlFor="picname"><h3>作者暱稱</h3></label>
                                        <input className="picname" type="text" name="username" id="username" title="作品名稱" placeholder="請輸入您的大名" required autoFocus></input>
                                    </div>

                                    <div>
                                        <label htmlFor="picname"><h3>作品名稱</h3></label>
                                        <input className="picname" type="text" name="username" id="username" title="作品名稱" placeholder="請輸入作品名稱" required autoFocus></input>
                                    </div>

                                    <div>
                                        <label htmlFor="picdesc"><h3>作品說明</h3></label>
                                        <textarea id="picdesc" rows="3" placeholder="請向我們介紹您的攝影作品！"></textarea>
                                    </div>

                                    <div className="upload">

                                        <div className="btn-box">
                                            <label
                                                htmlFor="upload-input"
                                                className="upload-btn">

                                                <h4>上傳檔案</h4>

                                            </label>
                                        </div>
                                        <input
                                            type="file"
                                            id="upload-input"
                                            accept="image/*"
                                            onChange={handleUpload}
                                            ref={fileInputRef}
                                        />
                                        {previewUrls.length > 0 && (
                                            <figure>
                                                {previewUrls.map((url, index) => (
                                                    <img key={index} src={url} alt={`預覽圖 ${index + 1}`}/>
                                                ))}
                                            </figure>
                                        )}
                                    </div>

                                    <button className="reset" type="reset" value="提交表單" onReset={handleReset} >
                                        重新上傳
                                    </button>

                                    <button className="submit" type="submit" value="提交表單" >
                                        提交
                                    </button>

                                    <button className="closePopup" ref={closeBtnRef} onClick={closePopup}>
                                        <span className="bar"></span>
                                        <span className="bar"></span>
                                    </button>

                                </form>

                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>

    );
}

// 個人中心
const Profile = ({ username }) => {

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

                    {/* 信箱 */}
                    <div className="user-box">
                        <div className="label">
                            <p>信箱</p>
                        </div>
                        <input className="inputId" type="email" name="email" id="email" title="E-mail欄位" required multiple placeholder="請輸入E-mail" />

                    </div>

                    {/* 主題 */}
                    <div className="user-box">
                        <fieldset>
                            <div className="prompt">
                                <div className="label">
                                    <p>主題</p>
                                    {/* <legend></legend> */}
                                </div>
                                <span>請選擇感興趣的主題，讓我們推薦合適的內容給您（可複選）</span>
                            </div>
                            <input type="checkbox" className="select" name="theme" id="theme-A" />
                            <label className="s-label" htmlFor="theme-A">室內展場</label>

                            <input type="checkbox" className="select" name="theme" id="theme-B" />
                            <label className="s-label" htmlFor="theme-B">戶外展區</label>

                            <input type="checkbox" className="select" name="theme" id="theme-C" />
                            <label className="s-label" htmlFor="theme-C">熱門展覽</label>

                            <input type="checkbox" className="select" name="theme" id="theme-D" />
                            <label className="s-label" htmlFor="theme-D">攝影技巧</label>

                            <input type="checkbox" className="select" name="theme" id="theme-E" />
                            <label className="s-label" htmlFor="theme-E">懶人包＆攻略</label>
                        </fieldset>
                    </div>

                    {/* 儲存 */}
                    <button className="h-btn-news m-submit"
                        type="submit">
                        <span className="circle">
                            <span className="icon arrow"></span>
                        </span>
                        <span className="btn-text">儲存</span>
                    </button>

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
    const handleIdChange = (e) => setUserId(e.target.value);

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
                            placeholder="請輸入您的帳號"
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
                    <div className="me-sbtn">
                        <button className="h-btn-news"
                            type="submit">
                            <span className="circle">
                                <span className="icon arrow"></span>
                            </span>
                            <span className="btn-text">登入</span>
                        </button>
                    </div>

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
    const location = useLocation();
    const initialTab = location.state?.tab || "favorites";
    // 宣告變數 => 顯示目前分頁
    const [activeKey, setActiveKey] = useState(initialTab);
    // 由 SignIn 帶回的登入資訊
    const [credentials, setCredentials] = useState({
        username: '',
        userid: ''
    });

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



    const handleLogin = (username, userid) => {
        // 登入成功後，更新狀態為使用者名稱
        const userData = { username, userid };
        setCredentials({ username, userid });
        setIsLoggedIn(true);
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("credentials", JSON.stringify(userData));
    };



    const TABS = [
        { key: "favorites", label: "我的收藏", view: <Favorites /> },
        { key: "memberwall", label: "我的花牆", view: <MemberWall /> },
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
        </>
    );
}

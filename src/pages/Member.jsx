import React, { useState } from "react";
import arrow from '../images/member/member-arrow-green.svg'
import favtab from '../images/member/member-tab-blue.svg'
import walltab from '../images/member/member-tab-orange.svg'
import newstab from '../images/member/member-tab-yellow.svg'
import prftab from '../images/member/member-tab-green.svg'
import heart0 from '../images/wall/wall-icon.svg'
import votebotton1 from '../images/wall/wall-votebutton1.svg'
import flower01 from '../images/wall/wall-flower01.png'
import flower02 from '../images/wall/wall-flower02.png'
import logo from '../images/home/北花冊.webp'
import "../sass/member.scss";

// 左側選單
function SidebarItem({ label, onClick, active = false, danger = false }) {
    return (
        <div className="sidebar-item">
            <button type="button" onClick={onClick}>
                <p>{label}</p>
                <div className="hover">
                    <img src={arrow} alt="" />
                </div>
            </button>
        </div>
    );
}

// 右側面板 => 各分頁元件
// 我的收藏
function Favorites() {
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
function Wall() {
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
                            <h3>參加賽事</h3>
                            <img src={votebotton1} alt="" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    );
}

// 我的花訊
function News() {
    return (
        <div className="news-wrap">
            <div className="tab">
                <h2>我的花訊</h2>
                <img src={newstab} alt="" />
            </div>
            <div className="content">
                <div className="news-Card">
                    <div className="news-labledate">
                        <div className="news-lable">活動</div>
                        <p>2025.07.28</p>
                    </div>
                    <p className="news-cardTitle">標題</p>
                    <img src="https://cdn.pixabay.com/photo/2020/04/14/03/57/pear-5040797_1280.jpg" className="news-img" alt="" />
                </div>
                <div className="news-Card">
                    <div className="news-labledate">
                        <div className="news-lable">活動</div>
                        <p>2025.07.28</p>
                    </div>
                    <p className="news-cardTitle">標題</p>
                    <img src="https://cdn.pixabay.com/photo/2020/04/14/03/57/pear-5040797_1280.jpg" className="news-img" alt="" />
                </div>
            </div>
        </div>
    );
}

// 個人資料
function Profile() {
    return (
        <div className="prf-wrap">
            <div className="tab">
                <h2>個人資料</h2>
                <img src={prftab} alt="" />
            </div>
            <div className="content">
                <div>
                    <form action="" method="post">
                        {/* 帳號 */}
                        <label htmlFor="username">帳號</label>
                        <input type="text" className="username" placeholder="請輸入電子郵件"
                            onChange={(e) => setUsername(e.target.value)} // 更新狀態
                            required
                            autoFocus />
                        {/* 密碼 */}
                        <label htmlFor="userid">密碼</label>
                        <input type="text" className="userid" placeholder="請輸入密碼"
                            onChange={(e) => setUsername(e.target.value)} // 更新狀態
                            required
                            autoFocus />
                        {/* 登入 */}
                        <button class="btn-animation" type="submit">
                            <span>登入</span>
                        </button>
                        {/* 註冊/忘記密碼 */}
                        <button class="btn-animation" type="submit">
                            <span>註冊/忘記密碼</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

// 登入畫面
function SignIn() {
    return (
        <div className="signin-wrap">
            <img src={logo} alt="" />
            <form action="" method="post">
                {/* 帳號 */}
                <div className="name">
                    <label htmlFor="username">帳號</label>
                    <input type="text" className="username" placeholder="請輸入電子郵件"
                        onChange={(e) => setUsername(e.target.value)} // 更新狀態
                        required
                        autoFocus />
                </div>

                {/* 密碼 */}
                <div className="id">
                    <label htmlFor="userid">密碼</label>
                    <input type="text" className="userid" placeholder="請輸入密碼"
                        onChange={(e) => setUsername(e.target.value)} // 更新狀態
                        required
                        autoFocus />
                </div>

                {/* 登入 */}
                    <button class="btn-animation" type="submit">
                        <span>登入</span>
                    </button>
                    {/* 註冊/忘記密碼 */}
                    <button class="btn-animation" type="submit">
                        <span>註冊/忘記密碼</span>
                    </button>
            </form>
        </div>
    );
}

// 切換各分頁的陣列
export default function MemberCenter() {
    const TABS = [
        { key: "favorites", label: "我的收藏", view: <Favorites /> },
        { key: "wall", label: "我的花牆", view: <Wall /> },
        { key: "news", label: "我的花訊", view: <News /> },
        { key: "profile", label: "會員資料", view: <Profile /> },
        { key: "logout", label: "登出", danger: true },
    ];

    // 宣告變數 => 顯示目前分頁
    const [activeKey, setActiveKey] = useState("logout");

    // 將分頁設定為目前狀態
    const handleSelect = (key) => { setActiveKey(key); };

    // 根據選擇狀態搜尋渲染分頁
    const activeTab = TABS.find((t) => t.key === activeKey);

    return (
        <section className="wrapper">
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
                {activeTab?.view ?? <SignIn />}
            </div>
        </section>


    )

}

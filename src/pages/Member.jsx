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
                <div className="arrow-box">
                    <svg className="bg"
                        xmlns="http://www.w3.org/2000/svg" width="63" height="64" viewBox="0 0 63 64" fill="none">
                        <path d="M42.9996 1.23745C39.1717 0.541481 34.6914 0.62848 32.9514 0.62848C29.2106 0.584982 25.9047 1.36795 22.2943 2.45541C18.336 3.62986 11.1588 7.10973 7.8964 11.7206C4.63402 16.3314 2.80709 21.5077 2.02412 24.7266C1.54564 26.684 1.45863 28.6414 1.19764 30.6423C0.849653 33.7307 0.371187 40.299 1.89363 44.9533C3.41607 49.6076 6.46096 53.218 8.0704 54.3489C11.0718 56.3934 13.8557 58.3073 17.1181 59.8297C18.6405 60.5257 20.1629 61.3087 21.7289 61.8741C23.5993 62.5266 25.5567 62.8746 27.4707 63.3096C32.9515 64.5711 47.6974 61.5697 50.3073 60.3082C52.9172 59.0468 57.267 54.3924 58.224 52.5655C59.5724 49.9556 62.7043 37.4281 62.7478 35.9926C62.7913 33.7742 62.1823 24.6396 61.3994 22.3777C59.3549 16.5054 54.9181 10.0676 53.3522 8.1537C51.8297 6.19627 46.8709 1.93343 42.9996 1.23745Z" fill="#69C9A0" />
                    </svg>

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

// 個人中心
function Profile() {
    return (
        <div className="prf-wrap">
            <div className="tab">
                <h2>個人中心</h2>
                <img src={prftab} alt="" />
            </div>
            <div className="content">
                <div className="user-wrap">
                    <div className="username">
                        {/* 帳號 */}
                        <label htmlFor="">帳號</label>
                        <input type="text" className="inputName" placeholder="123@gmail.com"
                            disabled />
                    </div>
                    <div className="userid">
                        {/* 密碼 */}
                        <label htmlFor="">密碼</label>
                        <input type="text" className="inputId" placeholder="Default"
                            onChange={(e) => setUsername(e.target.value)} // 更新狀態
                            required
                            autoFocus />
                    </div>
                    {/* 登入 */}
                    <button class="btn-animation" type="submit">
                        <span>修改密碼</span>
                    </button>
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

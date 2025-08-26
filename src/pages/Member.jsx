import React, { useState } from "react";
import "../sass/member.scss";

// 左側選單
function SidebarItem({ label, onClick, active = false, danger = false }) {
    return (
        <div>
            <button type="button" onClick={onClick}>
                {label}
            </button>
        </div>
    );
}

// 各分頁元件

// 我的收藏
function FavoritesView() {
    return (
        <div className="fav-wrap">
            <div className="fav-tab">
                <img src="" alt="" />
            </div>
            <div className="fav-content">
                <h2>我的收藏</h2>
                <div>
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
function WallView() {
    return (
        <div>
            <h2>我的花牆</h2>
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
    );
}

// 我的花訊
function NewsView() {
    return (
        <div>
            <h2>我的花訊</h2>
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
    );
}

// 個人資料
function ProfileView() {
    return (
        <div>
            <h2>個人資料</h2>
            <div>
                <h4>用戶名稱</h4>
                <h4>密碼</h4>
            </div>
        </div>
    );
}

// 切換各分頁的陣列
export default function MemberCenter() {
    const TABS = [
        { key: "favorites", label: "我的收藏", view: <FavoritesView /> },
        { key: "wall", label: "我的花牆", view: <WallView /> },
        { key: "news", label: "我的花訊", view: <NewsView /> },
        { key: "profile", label: "會員資料", view: <ProfileView /> },
        { key: "logout", label: "登出", danger: true },
    ];

    const [activeKey, setActiveKey] = useState("favorites");

    const handleSelect = (key) => { setActiveKey(key); };

    const activeTab = TABS.find((t) => t.key === activeKey);

    return (
        <div className="wrapper">
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
            <section className="right-panel">
                {activeTab?.view ?? <p>請選擇分頁</p>}
            </section>
        </div>


    )

}

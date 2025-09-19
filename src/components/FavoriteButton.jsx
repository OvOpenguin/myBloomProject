import { useState, useEffect } from "react";
import heart0 from '../images/wall/wall-icon.svg';   // 未收藏
import heart1 from '../images/wall/wall-icon2.svg';   // 已收藏
import '../sass/fav.scss';

const FavoriteButton = ({ card }) => {
    const [isFavorite, setIsFavorite] = useState(() => {
        const saved = localStorage.getItem("favorites");
        if (!saved) return false;
        const arr = JSON.parse(saved);
        return arr.some(item => item.id === card.id);
    });

    const [showTip, setShowTip] = useState(false);
    const [tipText, setTipText] = useState("");

    const toggleFavorite = () => {
        const saved = localStorage.getItem("favorites");
        const arr = saved ? JSON.parse(saved) : [];
        let updated;

        if (isFavorite) {
            updated = arr.filter(item => item.id !== card.id);
            setTipText("已取消！");
        } else {
            updated = [...arr, card];
            setTipText("已收藏！");
        }

        localStorage.setItem("favorites", JSON.stringify(updated));
        setIsFavorite(!isFavorite);

        // 顯示提示文字
        setShowTip(true);
        setTimeout(() => setShowTip(false), 1500);

        // 🔔 觸發 storage 事件同步其他頁面
        window.dispatchEvent(new Event("storage"));
    };

    return (
        <div>
            <button
                className={`fav-btn ${isFavorite ? "active" : ""}`}
                onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    toggleFavorite();
                }}
            >
                <img src={isFavorite ? heart1 : heart0} alt="收藏" />
            </button>

            {/* 提示文字 */}
            {showTip && <span className="fav-tip">{tipText}</span>}
        </div>
    );
};

export default FavoriteButton;
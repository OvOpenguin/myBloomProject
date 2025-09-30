import "../sass/article.scss";
import React, { useState, useEffect, useRef } from 'react';

import Nav from '../components/Nav';
import { Link } from "react-router-dom";
import CherryArticle from '../images/article/CherryArticle.png';
import Lotus from '../images/article/Lotus.png';
import Chrysanthemum from '../images/article/Chrysanthemum.png';
import Plum from '../images/article/Plum.png';
import share from '../images/article/share.svg';
import shareHover from '../images/article/shareHover.svg';
import GotopBtn from '../components/GotopBtn'
import pointflow from '../images/article/pointflow.svg'

const Article = () => {
    const [showToast, setShowToast] = useState(false);
    const [hover, setHover] = useState(false);

    // 右側推薦區塊狀態 - 簡化版本
    const [sidebarVisible, setSidebarVisible] = useState(false);

    const articleRef = useRef(null);
    const activitySectionRef = useRef(null);

    const handleShare = () => {
        navigator.clipboard.writeText(window.location.href);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 2000);
    };

    // 簡化的滾動監聽邏輯
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;

            // 簡化觸發條件 - 滾動 300px 後顯示，直接固定在右下角
            const triggerPosition = 300;

            // 當滾動超過觸發位置時顯示側邊欄
            if (scrollPosition > triggerPosition) {
                setSidebarVisible(true);
            } else {
                setSidebarVisible(false);
                return;
            }

            // 檢查活動推薦區域是否進入視窗
            if (activitySectionRef.current) {
                const activityTop = activitySectionRef.current.offsetTop;
                const activityInView = scrollPosition + windowHeight > activityTop - 100;

                if (activityInView) {
                    setSidebarVisible(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        // 初始執行一次
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <Nav />
            <section id='article' ref={articleRef}>
                <div className="apic">
                    <img src="./wall/wall02-lg.jpg" alt="圖" />
                </div>

                <div className="aWrap">
                    <header className="article-header">
                        <h2>四季花語：與自然共舞的美好時光</h2>
                        <div className="share-container">
                            <button
                                className="share-btn"
                                onClick={handleShare}
                                onMouseEnter={() => setHover(true)}
                                onMouseLeave={() => setHover(false)}
                            >
                                <img src={hover ? shareHover : share} alt="share" width={20} height={20} />
                            </button>
                            <div className={`toast ${showToast ? "show" : ""}`}>
                                複製連結成功
                            </div>
                        </div>
                    </header>

                    {/* 春 */}
                    <div className="acard">
                        <p className="first">
                            花卉與生活的哲學<br />
                            花卉不僅僅是裝飾，更是生活的老師。從花開花落的循環中，我們學會了時間的珍貴；從花朵的堅韌中，我們領悟了生命的力量；從花香的飄散中，我們體會分享的美好。<br />
                            每一朵花都有它的故事，每個季節都有它的主角。讓我們在忙碌中，記得停下來聞聞花香，感受大自然的禮物。
                        </p>
                        <p className="first-author">作者：Charlie <time dateTime="2025/09/16">2025/09/16</time></p>

                        <br />
                        <h3>春之序章：新生的希望</h3>
                        <h4>櫻花 - 短暫而永恆的美麗</h4>
                        <p>春天的腳步總是由櫻花來宣告。粉嫩的花瓣如雪花般飄落，日本人稱之為「花吹雪」。櫻花的花期雖然短暫，通常只有一到兩週，但正是這種稍縱即逝的美，讓人更加珍惜當下的每一個瞬間。</p>
                        <br />
                        <img src={CherryArticle} alt="櫻花文章插圖" />
                        <p>圖片來源:freepik</p>
                        <div className="guide-section">
                            {/* 第一行：短線 + 標題 + 長線 */}
                            <div className="guide-header">
                                <div className="line-short"></div>
                                <img src={pointflow} alt="櫻花文章插圖" />
                                <h5>櫻花觀賞指南</h5>
                                <div className="line-long"></div>
                            </div>

                            {/* 第二行：內容列表 */}
                            <div className="guide-content">
                                <ul>
                                    <li><span className="highlight">最佳觀賞時間：</span>清晨或傍晚，光線柔和</li>
                                    <li><span className="highlight">攝影技巧：</span>逆光拍攝能捕捉花瓣的透明感</li>
                                    <li><span className="highlight">文化體驗：</span>準備野餐墊，體驗日式賞花文化</li>
                                </ul>
                            </div>

                            {/* 第三行 */}
                            <div className="guide-footer">
                                <div className="line-full"></div>

                            </div>
                        </div>

                    </div>

                    {/* 夏 */}
                    <div className="acard">
                        <h3>夏之熱情：燦爛的生命力</h3>
                        <h4>荷花 - 出淤泥而不染</h4>
                        <p>「蓮花出淤泥而不染，濯清漣而不妖」，荷花在佛教文化中象徵純淨和智慧。夏日的荷塘，粉色的花瓣在綠葉的襯托下格外清雅脫俗。</p>
                        <br />
                        <img src={Lotus} alt="荷花文章插圖" />
                        <p>圖片來源:freepik</p>
                        <div className="guide-section">
                            {/* 第一行：短線 + 標題 + 長線 */}
                            <div className="guide-header">
                                <div className="line-short"></div>
                                <img src={pointflow} alt="櫻花文章插圖" />
                                <h5>荷花觀賞指南</h5>
                                <div className="line-long"></div>
                            </div>

                            {/* 第二行：內容列表 */}
                            <div className="guide-content">
                                <ul>
                                    <li><span className="highlight">最佳時間：</span>清晨 6-8 點，花朵最為飽滿</li>
                                    <li><span className="highlight">最佳地點：</span>古典園林或公園荷花池</li>
                                    <li><span className="highlight">攝影要點：</span>利用荷葉作為前景或背景</li>
                                </ul>
                            </div>

                            {/* 第三行 */}
                            <div className="guide-footer">
                                <div className="line-full"></div>

                            </div>
                        </div>



                    </div>

                    {/* 秋 */}
                    <div className="acard">
                        <h3>秋之韻味：成熟的優雅</h3>
                        <h4>菊花 - 高潔的品格</h4>
                        <p>菊花是秋天的象徵，也是中國傳統文化中「四君子」之一。它們在寒風中依然綻放，展現出堅韌不拔的品格。黃色的菊花代表高貴，白色象徵純潔，紫色則代表深沉的愛。</p>
                        <br />
                        <img src={Chrysanthemum} alt="菊花文章插圖" />
                        <p>圖片來源:unsplash</p>
                        <div className="guide-section">
                            {/* 第一行：短線 + 標題 + 長線 */}
                            <div className="guide-header">
                                <div className="line-short"></div>
                                <img src={pointflow} alt="櫻花文章插圖" />
                                <h5>菊花觀賞指南</h5>
                                <div className="line-long"></div>
                            </div>

                            {/* 第二行：內容列表 */}
                            <div className="guide-content">
                                <ul>
                                    <li><span className="highlight">最佳時間：</span>秋季的10月至11月</li>
                                    <li><span className="highlight">最佳地點：</span>菊花展或花卉園、社區綠地</li>
                                    <li><span className="highlight">攝影要點：</span>利用清晨或傍晚的逆光，可以讓菊花的花瓣呈現透明感，拍出如夢似幻的效果。</li>
                                </ul>
                            </div>

                            {/* 第三行 */}
                            <div className="guide-footer">
                                <div className="line-full"></div>

                            </div>
                        </div>


                    </div>

                    {/* 冬 */}
                    <div className="acard">
                        <h3>冬之堅韌：不屈的精神</h3>
                        <h4>梅花 - 傲雪凌霜</h4>
                        <p>「梅花香自苦寒來」，梅花在嚴寒中綻放，是堅強意志的象徵。它的花朵雖然素雅，但那股傲然挺立的氣質，讓人肅然起敬。</p>
                        <br />
                        <img src={Plum} alt="梅花文章插圖" />
                        <p>圖片來源:freepik</p>
                        <div className="guide-section">
                            {/* 第一行：短線 + 標題 + 長線 */}
                            <div className="guide-header">
                                <div className="line-short"></div>
                                <img src={pointflow} alt="櫻花文章插圖" />
                                <h5>梅花觀賞指南</h5>
                                <div className="line-long"></div>
                            </div>

                            {/* 第二行：內容列表 */}
                            <div className="guide-content">
                                <ul>
                                    <li><span className="highlight">最佳時間：</span>1月至2月是梅花盛開的主要時期，建議在晴朗的早晨前往，梅花上的露珠還未蒸發，晶瑩剔透。</li>
                                    <li><span className="highlight">最佳地點：</span>古寺廟或園林，梅花與古樸的建築相互映襯，增添禪意與詩意。</li>
                                    <li><span className="highlight">攝影要點：</span>梅花的美在於清雅與孤傲，透過留白構圖突出主體，更具意境。</li>
                                </ul>
                            </div>

                            {/* 第三行 */}
                            <div className="guide-footer">
                                <div className="line-full"></div>

                            </div>
                        </div>

                        <br />
                    </div>

                    {/* 活動推薦區塊 */}
                    <div className="acard" ref={activitySectionRef}>
                        <h3>2025年活動推薦</h3>
                        <p className="activity-single">
                            <a href="https://ovopenguin.github.io/myBloomProject/#/info/5">
                                春季 | 台北北投 | 陽明山海芋季
                            </a>
                        </p>
                        <p className="activity-single">
                            <a href="https://ovopenguin.github.io/myBloomProject/#/info/11">
                                夏季 | 新北樹林 | 山佳荷花池
                            </a>
                        </p>
                        <p className="activity-single">
                            <a href="https://ovopenguin.github.io/myBloomProject/#/info/16">
                                秋季 | 台北中山 | 向日葵大佳河濱花海
                            </a>
                        </p>
                        <p className="activity-single">
                            <a href="https://ovopenguin.github.io/myBloomProject/#/info/4">
                                冬季 | 桃園楊梅 | 桃園仙草花節
                            </a>
                        </p>
                    </div>
                </div>

                <div className="a-btn-box">
                    <Link to="/wall#alink">
                        {/* <button>回到列表</button> */}
                        <button className="h-btn-news">
                            <span className="circle">
                                <span className="icon arrow"></span>
                            </span>
                            <span className="btn-text">回到列表</span>
                        </button>
                    </Link>
                </div>

                {/* 右側固定推薦區塊 - 簡化版本 */}
                <div
                    className={`sidebar-recommendations ${sidebarVisible ? 'visible' : ''}`}
                >
                    <div className="sidebar-header">
                        <span className="sidebar-title">你可能有興趣</span>
                        <div className="sidebar-line"></div>
                    </div>
                    <div className="sidebar-content">
                        <Link to="/info/5" className="sidebar-link">春季 | 台北北投 | 陽明山海芋季</Link>
                        <Link to="/info/11" className="sidebar-link">夏季 | 新北樹林 | 山佳荷花池</Link>
                        <Link to="/info/16" className="sidebar-link">秋季 | 台北中山 | 向日葵大佳河濱花海</Link>
                        <Link to="/info/4" className="sidebar-link">冬季 | 桃園楊梅 | 桃園仙草花節</Link>
                    </div>
                </div>
                <GotopBtn></GotopBtn>
            </section>
        </>
    );
}

export default Article;
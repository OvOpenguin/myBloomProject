import { useEffect, useState, useRef } from "react";
import butterfly from "../images/story/story-butterfly.svg";
import "../sass/butterfly.scss";

function ButterflyCursor() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [butterflyPos, setButterflyPos] = useState({ x: 0, y: 0 });
    const [isClicking, setIsClicking] = useState(false);
    const [trails, setTrails] = useState([]);

    const animationRef = useRef();
    const trailIntervalRef = useRef();
    const trailIdRef = useRef(0);

    // 鼠標移動監聽
    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    // 點擊監聽
    useEffect(() => {
        const handleClick = () => {
            setIsClicking(true);
            setTimeout(() => setIsClicking(false), 400);
        };
        window.addEventListener("click", handleClick);
        return () => window.removeEventListener("click", handleClick);
    }, []);

    // 平滑跟隨動畫
    useEffect(() => {
        const animate = () => {
            setButterflyPos(prev => {
                const targetX = mousePos.x + 15; // 偏移避免遮擋鼠標
                const targetY = mousePos.y + 15;

                return {
                    x: prev.x + (targetX - prev.x) * 0.08,
                    y: prev.y + (targetY - prev.y) * 0.08
                };
            });
            animationRef.current = requestAnimationFrame(animate);
        };
        animate();

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [mousePos]);

    // 軌跡生成
    useEffect(() => {
        const createTrail = () => {
            const trailId = trailIdRef.current++;
            const newTrail = {
                id: trailId,
                x: butterflyPos.x,
                y: butterflyPos.y
            };

            setTrails(prev => [...prev, newTrail]);

            // 1.2秒後移除軌跡
            setTimeout(() => {
                setTrails(prev => prev.filter(t => t.id !== trailId));
            }, 1200);
        };

        trailIntervalRef.current = setInterval(createTrail, 80);

        return () => {
            if (trailIntervalRef.current) {
                clearInterval(trailIntervalRef.current);
            }
        };
    }, [butterflyPos]);

    return (
        <>
            {/* 軌跡點 */}
            {trails.map(trail => (
                <div
                    key={trail.id}
                    className="trail-dot"
                    style={{
                        left: trail.x,
                        top: trail.y,
                    }}
                />
            ))}

            {/* 蝴蝶 */}
            <img
                src={butterfly}
                alt="butterfly cursor"
                className={`butterfly-cursor ${isClicking ? 'clicking' : ''}`}
                style={{
                    left: butterflyPos.x,
                    top: butterflyPos.y,
                }}
            />
        </>
    );
}

export default ButterflyCursor;
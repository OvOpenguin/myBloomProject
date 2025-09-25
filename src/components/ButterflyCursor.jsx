import { useEffect, useState, useRef } from "react";
import butterfly from "../images/story/story-butterfly.svg";
import "../sass/butterfly.scss";

function ButterflyCursor() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [butterflyPos, setButterflyPos] = useState({ x: 0, y: 0 });
    const animationRef = useRef();


    // 鼠標移動監聽
    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);


    // 平滑跟隨動畫
    useEffect(() => {
        const animate = () => {
            setButterflyPos(prev => {
                const targetX = mousePos.x + 15;
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



    return (
        <>
            <img
                src={butterfly}
                alt="butterfly cursor"
                className="butterfly-cursor"
                style={{
                    left: butterflyPos.x,
                    top: butterflyPos.y,
                }}
            />
        </>
    );
}

export default ButterflyCursor;
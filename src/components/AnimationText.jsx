// src/components/AnimatedText.jsx
import { motion } from "framer-motion";


// 父容器 h2 的動畫變數
const container = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
        },
    },
};

// 子元件 span 的動畫變數
const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0, opacity: 1,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
};

// 接收 children 作為 prop，這樣就能傳入任何文字
const AnimatedText = ({ text, as: Tag = "h2", ...rest }) => {
    const AnimatedComponent = motion.create(Tag);
    const words = text.split("");

    return (
        <AnimatedComponent
            variants={container}
            initial="hidden"
            whileInView="visible" //滑到才出現的設定!
            viewport={{ once: true }}
            {...rest}
        >
            {words.map((word, index) => (
                <motion.span
                    key={index}
                    variants={item}
                    style={{ display: "inline-block" }}
                >
                    {word === " " ? "\u00A0" : word} {/* 處理空格，保持間距 */}
                </motion.span>
            ))}

        </AnimatedComponent>
    );
};

export default AnimatedText;
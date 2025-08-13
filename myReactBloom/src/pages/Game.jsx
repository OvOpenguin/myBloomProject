import React, { useState, useEffect, useCallback } from 'react';
import './css/game.css'

// 花朵資料陣列，包含名稱、剪影圖片URL和真實圖片URL
// 您可以替換這些URL為您自己的花朵圖片
const flowers = [
  {
    name: "玫瑰",
    silhouette: "https://placehold.co/400x400/000/fff?text=🌹+剪影",
    real: "https://placehold.co/400x400/FF007F/fff?text=🌹+玫瑰"
  },
  {
    name: "鬱金香",
    silhouette: "https://placehold.co/400x400/000/fff?text=🌷+剪影",
    real: "https://placehold.co/400x400/FFD700/fff?text=🌷+鬱金香"
  },
  {
    name: "百合",
    silhouette: "https://placehold.co/400x400/000/fff?text=🌸+剪影",
    real: "https://placehold.co/400x400/DAA520/fff?text=🌸+百合"
  },
  {
    name: "向日葵",
    silhouette: "https://placehold.co/400x400/000/fff?text=🌻+剪影",
    real: "https://placehold.co/400x400/FFBF00/fff?text=🌻+向日葵"
  },
  {
    name: "櫻花",
    silhouette: "https://placehold.co/400x400/000/fff?text=🌺+剪影",
    real: "https://placehold.co/400x400/FFC0CB/fff?text=🌺+櫻花"
  },
  {
    name: "蘭花",
    silhouette: "https://placehold.co/400x400/000/fff?text=🌼+剪影",
    real: "https://placehold.co/400x400/8A2BE2/fff?text=🌼+蘭花"
  },
  {
    name: "菊花",
    silhouette: "https://placehold.co/400x400/000/fff?text=🏵️+剪影",
    real: "https://placehold.co/400x400/FFA500/fff?text=🏵️+菊花"
  },
];

// Helper function to shuffle an array (Fisher-Yates shuffle)
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

// 主要的應用程式元件
export default function App() {
  // 遊戲狀態變數
  const [gameStarted, setGameStarted] = useState(false); // 遊戲是否開始
  const [currentFlower, setCurrentFlower] = useState(null); // 當前題目花朵物件
  const [options, setOptions] = useState([]); // 當前選項陣列
  const [wronglyGuessedOptionNames, setWronglyGuessedOptionNames] = useState(new Set()); // 儲存錯誤點擊的選項名稱
  const [showRealImage, setShowRealImage] = useState(false); // 是否顯示真實圖片
  const [gameOver, setGameOver] = useState(false); // 遊戲是否結束

  // 設置新一輪遊戲的函數
  const setupNewQuestion = useCallback(() => {
    // 重置選項狀態
    setWronglyGuessedOptionNames(new Set()); // 清空錯誤選項紀錄
    setShowRealImage(false);

    // 隨機選擇一朵花作為正確答案
    const randomFlower = flowers[Math.floor(Math.random() * flowers.length)];
    setCurrentFlower(randomFlower);

    // 準備選項：包含正確答案和兩個隨機的錯誤答案
    let incorrectOptions = flowers.filter(f => f.name !== randomFlower.name);
    incorrectOptions = shuffleArray(incorrectOptions).slice(0, 2); // 隨機取兩個不重複的錯誤答案

    const currentOptions = shuffleArray([
      { name: randomFlower.name, isCorrect: true },
      ...incorrectOptions.map(f => ({ name: f.name, isCorrect: false }))
    ]);
    setOptions(currentOptions);
  }, []);

  // 遊戲開始邏輯
  const startGame = useCallback(() => {
    setGameStarted(true);
    setGameOver(false);
    setupNewQuestion();
  }, [setupNewQuestion]);

  // 結束遊戲邏輯
  const endGame = useCallback(() => {
    setGameStarted(false);
    setGameOver(true);
    setShowRealImage(true); // 顯示真實圖片
    setWronglyGuessedOptionNames(new Set()); // 清空錯誤選項紀錄
  }, []);

  // 處理選項點擊事件
  const handleOptionClick = (optionName, isCorrect) => {
    if (showRealImage) return; // 如果已經顯示真實圖片（表示已答對），則不處理

    if (isCorrect) {
      setShowRealImage(true); // 答對了，顯示真實圖片
      // 當答對時，可以選擇禁用所有選項按鈕，防止重複點擊
      // 這會在按鈕的 `disabled` 屬性中處理
    } else {
      // 答錯了，將此選項名稱加入錯誤清單
      setWronglyGuessedOptionNames(prevNames => new Set(prevNames).add(optionName));
    }
  };

  // 處理「下一題」按鈕點擊事件
  const handleNextQuestion = useCallback(() => {
    setupNewQuestion();
  }, [setupNewQuestion]);

  // 遊戲啟動時的初始化
  useEffect(() => {
    // 首次載入或遊戲結束後，顯示預設畫面
    if (!gameStarted && !gameOver) {
      setCurrentFlower(null); // 清除花朵顯示
      setOptions([]); // 清除選項
      setShowRealImage(false);
      setWronglyGuessedOptionNames(new Set());
    }
  }, [gameStarted, gameOver]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-blue-200 flex flex-col items-center justify-center p-4 font-sans text-gray-800">
      <div className="bg-white p-8 rounded-3xl shadow-xl max-w-lg w-full text-center">
        <h1 className="text-4xl font-extrabold mb-8 text-indigo-700">猜花剪影</h1>

        <div className="mb-8 h-64 flex items-center justify-center">
          {currentFlower && (
            <img
              id="flower-image"
              src={showRealImage ? currentFlower.real : currentFlower.silhouette}
              alt="Flower"
              className="flower-image w-full h-full object-contain"
              onError={(e) => {
                e.target.onerror = null; // Prevent infinite loop if placeholder also fails
                e.target.src = "https://placehold.co/400x400/cccccc/000?text=圖片載入失敗";
              }}
            />
          )}
          {!gameStarted && !gameOver && (
            <p className="text-xl text-gray-500">點擊「開始遊戲」開始猜花！</p>
          )}
          {gameOver && (
            <p className="text-xl text-gray-500">遊戲結束。</p>
          )}
        </div>

        <div className="options-container grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {options.map((option, index) => {
            const isWronglyGuessed = wronglyGuessedOptionNames.has(option.name);
            const isDisabled = !gameStarted || showRealImage || isWronglyGuessed;

            return (
              <button
                key={index}
                className={`
                  option-button
                  relative
                  py-3 px-6
                  rounded-full
                  text-lg font-semibold
                  transition-all duration-200
                  ${gameStarted && !showRealImage ? 'cursor-pointer' : 'cursor-not-allowed'}
                  ${showRealImage && option.isCorrect ? 'bg-green-500 text-white shadow-lg' : // 正確答案顯示綠色
                    (isWronglyGuessed ? 'bg-red-500 text-white wrong-answer' : // 錯誤答案顯示紅色並劃掉
                    'bg-indigo-100 hover:bg-indigo-200 text-indigo-800') // 預設樣式
                  }
                  ${isDisabled && 'opacity-60'}
                `}
                onClick={() => handleOptionClick(option.name, option.isCorrect)}
                disabled={isDisabled}
              >
                {option.name}
              </button>
            );
          })}
        </div>

        <div className="control-buttons flex flex-col sm:flex-row justify-center gap-4">
          {!gameStarted && (
            <button
              className="px-8 py-3 bg-blue-600 text-white rounded-full font-bold text-xl shadow-lg hover:bg-blue-700 transition-colors duration-200"
              onClick={startGame}
            >
              開始遊戲
            </button>
          )}

          {gameStarted && showRealImage && (
            <button
              className="px-8 py-3 bg-purple-600 text-white rounded-full font-bold text-xl shadow-lg hover:bg-purple-700 transition-colors duration-200"
              onClick={handleNextQuestion}
            >
              下一題
            </button>
          )}

          {gameStarted && (
            <button
              className="px-8 py-3 bg-red-600 text-white rounded-full font-bold text-xl shadow-lg hover:bg-red-700 transition-colors duration-200"
              onClick={endGame}
            >
              結束遊戲
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

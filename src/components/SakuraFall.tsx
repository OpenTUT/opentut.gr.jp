import React from 'react';

type SakuraProps = {
    style: React.CSSProperties;
};
  
const Sakura: React.FC<SakuraProps> = ({ style }) => {
    return (
        <div style={style} className="sakura text-3xl">🌸</div>
    );
};

const SakuraFall: React.FC = () => {
    const numPetals = 50; // 花びらの数
    const petals = Array.from({ length: numPetals }, (_, i) => ({
        id: i,
        style: {
            animationDelay: `${-Math.random() * 5}s`,  // マイナス値を設定してアニメーションを即時開始
            animationDuration: `${5 + Math.random() * 5}s`, // アニメーションの継続時間をランダム化
            top: `0px`,
            left: `${Math.random() * 100}%` // 左の位置はランダムに画面全体
        }
    }));

    return (
        <div className="sakura-container">
            {petals.map(petal => (
                <Sakura key={petal.id} style={petal.style} />
            ))}
        </div>
    );
};

export default SakuraFall;

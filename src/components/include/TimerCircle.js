import React, {useState, useEffect} from 'react';

/*
    1. value와 maxValue를 지정하면 그 값을 백분율로 계산해 타이머의 길이를 계산합니다.
    2. useEffect에서 매초마다 타이머를 진행시킵니다.
*/
const TimerCircle2 = ({value, maxValue}) => {
    const [percentage, setPercentage] = useState(0);

    // 백분율로 계산
    useEffect(() => {
        if (maxValue > 0) {
            const newPercentage = (value / maxValue) * 100;
            setPercentage(newPercentage);
        }
    }, [value, maxValue]);

    /* 타이머 */
    useEffect(() => {
        const interval = setInterval(() => {
            setPercentage((prev) => (prev + 1) % 101);
        }, 1000);

        return() => clearInterval(interval);
    }, []);

    const size = 332;
    const stroke = 7;
    const radius = (size / 2) - stroke;
    const circumference = 2 * Math.PI * radius;
    const strokeDasharray = `${ (percentage / 100) * circumference} ${circumference}`;

    const angle = (percentage / 100) * 360;
    const angleRad = (angle - 90) * (Math.PI / 180);
    const pointX = size / 2 + radius * Math.cos(angleRad); // X coordinate
    const pointY = size / 2 + radius * Math.sin(angleRad); // Y coordinate

    return (
        <div
            className='timer__circle'
            style={{
                position: 'relative',
                width: `${size}px`,
                height: `${size}px`
            }}>
            <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
                {/* Background circle */}
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="transparent"
                    stroke="#FFEEC2"
                    strokeWidth={stroke}/> {/* Progress path */}
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="transparent"
                    stroke="#FFC123"
                    strokeWidth={stroke}
                    strokeDasharray={strokeDasharray}
                    transform={`rotate(-90 ${size / 2} ${size / 2})`}/>
            </svg>
            {/* Rotating point */}
            <div
                style={{
                    position: 'absolute',
                    width: '25px',
                    height: '25px',
                    borderRadius: '50%',
                    backgroundColor: '#FFC123',
                    top: `${pointY - 12.5}px`,
                    left: `${pointX - 12.5}px`
                }}/>
        </div>
    );
};

export default TimerCircle2;

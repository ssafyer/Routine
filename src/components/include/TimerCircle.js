import React, { useEffect, useState } from 'react';

function TimerCircle() {
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        setPercentage(0)
        const interval = setInterval(() => {
            setPercentage((prevPercentage) => (prevPercentage + 1) % 101);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const degrees = (percentage / 100) * 360;

    const pointStyle = {
        transform: `translate(-50%, 0) rotate(${degrees}deg)`,
        transformOrigin: '50% 175px',
    };

    return (
        <div className="timer__circle">
            <div id="circle-container">
                <div id="rotating-point" style={{ ...pointStyle}}></div>
            </div>
        </div>
    )
}

export default TimerCircle;

import React, { useState } from 'react';

function ToggleSwitch() {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className={isActive?"toggleSwitch active":'toggleSwitch'} 
        onClick={() => setIsActive(isActive?false:true)}>
            <span></span>
        </div>
    );
}

export default ToggleSwitch;

import React, { useState } from 'react';

function ToggleSwitch({ switchValue, setSwitchValue}) {

    return (
        <div className={switchValue?"toggleSwitch active":'toggleSwitch'} 
            onClick={() => setSwitchValue(switchValue?false:true)}>
            <span></span>
        </div>
    );
}

export default ToggleSwitch;

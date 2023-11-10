import React from 'react';
import icoCheckBlue from '../assets/images/ico_check_blue.png'


function EndRoutine() {
    return (
        <div className="page__end__routine">
            <img src={icoCheckBlue} alt="check" />
            <p>
            아침 루틴 5일차를<br />
            완료했어요!
            </p>
        </div>
    );
}

export default EndRoutine;

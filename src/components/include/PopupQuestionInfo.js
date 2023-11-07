import React from 'react';

function PopupQuestionInfo({title, comment, posTop, posLeft, isShow, setIsShow}) {
    return (
        <>
        {
            isShow &&
            <div
                className="popup__question__info"
                style={{top:posTop, left:posLeft}}
                onClick={() => setIsShow(false)}
            >
                <div className="popup__question__info__inner">
                    <h4>{title}</h4>
                    <p>{comment}</p>
                </div>
            </div>
        }
        </>
    );
}

export default PopupQuestionInfo;

import React from 'react';
import popupClose from '../../assets/images/popup__close.svg'

function PopupBtmWrapper({children, className, title, isShow, setIsShow}) {
    return (
        <div className={isShow?`popup btm ${className} active`:`popup btm ${className}`}>
            <div className="content">
                <div className="head">
                    {
                        title&&
                        <h5>{title}</h5>
                    }
                    <button className='btn__close' onClick={() => setIsShow(false)}>
                        <img src={popupClose} alt="close" />
                    </button>
                </div>
                    {children}
                </div>
            <div className="bg" onClick={() => setIsShow(false)}></div>
        </div>
    );
}

export default PopupBtmWrapper;

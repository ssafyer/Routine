import React from 'react';
import { Link } from 'react-router-dom';

function PopupToast({classname, title, msg, btnLeft, btnRight, isShow, setIsShow}) {
    return (
        isShow &&
            <div className={`popup ended ${classname}`}>
                <div className="content">
                    <h3>{title}</h3>
                    <p>{msg}</p>

                    <div className="btnbox">
                        <Link onClick={() => setIsShow(false)}>{btnLeft}</Link>
                        <Link to="/" className='add'>{btnRight}</Link>
                    </div>
                </div>
                <div className="bg" onClick={() => setIsShow(false)}></div>
            </div>
    );
}

export default PopupToast;

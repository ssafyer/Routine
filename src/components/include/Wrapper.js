import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Wrapper({children, isRemovePadding, setIsRemovePadding}) {

    /* 페이지마다 패딩값 변경하기 */
    const location = useLocation();
    useEffect(() => {
        if( location.pathname=='/daily_board' ){
            setIsRemovePadding(true);
        }else{
            setIsRemovePadding(false);
        }
    }, [location]);

    return (
        <div className={isRemovePadding?"wrapper removePadding":"wrapper"}>
            {children}
        </div>
    );
}

export default Wrapper;
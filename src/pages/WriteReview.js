import React from 'react';
import icoCheckBlue from '../assets/images/ico_check_blue.png'


function WriteReview() {
    return (
        <div className="page__write__review">
                <div className="page__write__review__inner">
                <h2>
                    오늘 루틴 실천이 어땠는지<br />
                    이야기 해주세요.
                </h2>
                <textarea name="" id="" placeholder='루틴 실천 중, 실천 후의 느낌을 적어주세요.'></textarea>
                {/* <textarea name="" id="" placeholder='회고를 위해 실천하면서, 실천하고 난 후의 느낌을 적어주세요.'></textarea> */}

                <div className="btnbox">
                    <button className='inputType1'>건너뛰기</button>
                    <button className='inputType1 active'>완료하기</button>
                </div>
            </div>
        </div>
    );
}

export default WriteReview;

import { useState } from 'react';
import imgBack from '../assets/images/LeftArrow.svg'
import icoPlay from '../assets/images/ico_play.svg'
import icoWrite from '../assets/images/ico_write.svg'
import { Link, useNavigate } from 'react-router-dom';


function GoalNone() {
    const navigate = useNavigate()
    const [ended, setEnded] = useState(false); // 최종 완료 버튼

    return (
        <>
            <header className='header__routine'>
                <button className="btn__back" onClick={() => navigate(-1)}>
                    <img src={imgBack} alt="뒤로가기" />
                </button>
                <h1>내 목표</h1>
            </header>
            <div className="">
                <div className="action__btnbox">
                    <button className='inputType1 mainColor'>추가하기</button>
                    <button className='inputType1'>
                        <img src={icoWrite} alt="write" />
                    </button>
                </div>

                <p className='action__none'>
                    아직 등록한 하루의 목표가 없어요.<br />
                    매일 실행할 목표를 추가해 보세요 !
                </p>

                {
                    ended ? (
                        <Link to="/" className='btn__next play active'>
                            <img src={icoPlay} alt="play" />
                        </Link>
                    ):(
                        <Link className='btn__next play'>
                            <img src={icoPlay} alt="play" />
                        </Link>
                    )
                }
            </div>
        </>
    );
}
export default GoalNone;
import { useState } from 'react';
import imgBack from '../assets/images/LeftArrow.svg'
import icoPlay from '../assets/images/ico_play.svg'
import { Link, useNavigate } from 'react-router-dom';


function AddActionNoneList() {
    const navigate = useNavigate()
    const [ended, setEnded] = useState(false); // 최종 완료 버튼

    return (
        <>
            <header className='header__routine'>
                <button className="btn__back" onClick={() => navigate(-1)}>
                    <img src={imgBack} alt="뒤로가기" />
                </button>
                <h1>루틴 이름</h1>
            </header>
            <div className="page__add__action">
                <div className="actiontime">
                    오전 2시 33분 시작
                </div>

                <div className="action__btnbox">
                    <button className='inputType1'>추천 행동</button>
                    <button className='inputType1'>행동 추가</button>
                </div>

                <p className='action__none'>
                    아직 등록한 루틴에서 실행할 행동이 없어요.<br />
                    실행할 행동을 찾아보거나 직접 추가해 보세요 !
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
export default AddActionNoneList;
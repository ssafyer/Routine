import { useState } from 'react';
import imgBack from '../assets/images/LeftArrow.svg'
import icoPlay from '../assets/images/ico_play.svg'
import icoWrite from '../assets/images/ico_write.svg'
import icoMove from '../assets/images/ico_move.svg'
import imgEdit1 from '../assets/images/img_edit1.png'
import imgEdit2 from '../assets/images/img_edit2.png'
import imgEdit3 from '../assets/images/img_edit3.png'
import icoTimer from '../assets/images/ico_timer.svg'
import icoConcen from '../assets/images/ico_concen.svg'
import { Link, useNavigate } from 'react-router-dom';


function AddActionBeforeEdit() {
    const navigate = useNavigate()
    const [ended, setEnded] = useState(true); // 최종 완료 버튼

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
                    <button className='inputType1'>직접 추가</button>
                    <button className='inputType1'>
                        <img src={icoWrite} alt="write" />
                    </button>
                </div>

                <div className="editbox">
                    <button>
                        <div className="left">
                            <img src={icoMove} alt="move" />
                            <img src={imgEdit1} alt="edit" />
                            <span>행동 이름</span>
                        </div>
                        <div className="right">
                            <img src={icoTimer} alt="move" />
                            <span>3분</span>
                        </div>
                    </button>
                    <button>
                        <div className="left">
                            <img src={icoMove} alt="move" />
                            <img src={imgEdit2} alt="edit" />
                            <span>행동 이름</span>
                        </div>
                        <div className="right"></div>
                    </button>
                    <button>
                        <div className="left">
                            <img src={icoMove} alt="move" />
                            <img src={imgEdit3} alt="edit" />
                            <span>행동 이름</span>
                        </div>
                        <div className="right">
                            <img src={icoConcen} alt="concen" />
                            <span>30분</span>
                        </div>
                    </button>
                </div>

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
export default AddActionBeforeEdit;
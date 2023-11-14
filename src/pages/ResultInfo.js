import { useState } from 'react';
import imgBack from '../assets/images/LeftArrow.svg'
import icoShare from '../assets/images/ico_share.svg'
import icoTimer from '../assets/images/ico_timer.svg'
import icoConcen from '../assets/images/ico_concen.svg'
import icoCheckGold from '../assets/images/ico_check_gold.svg'
import icoCheckOff from '../assets/images/ico_check_off_gold.svg'
import imgEdit1 from '../assets/images/img_edit1.png'
import imgEdit2 from '../assets/images/img_edit2.png'
import imgEdit3 from '../assets/images/img_edit3.png'
import arrowDown from '../assets/images/arrow_down.svg'
import { Link, useNavigate } from 'react-router-dom';
import PopupBtmWrapper from 'components/include/PopupBtmWrapper';


function ResultInfo() {
    const navigate = useNavigate()
    const [ended, setEnded] = useState(true); // 최종 완료 버튼
    const [isShowRoutinePopup, setsShowRoutinePopup] = useState(false);
    const [choiceRoutine, setChoiceRoutine] = useState(0);

    return (
        <>
            <header className='header__routine'>
                <button className="btn__back" onClick={() => navigate(-1)}>
                    <img src={imgBack} alt="뒤로가기" />
                </button>
                <h1>
                    루틴 이름
                    <button onClick={() => setsShowRoutinePopup(true)}>
                        <img src={arrowDown} className='title_arrow' alt="down" />
                    </button>
                    <PopupBtmWrapper
                        className={'routineChoice'}
                        isShow={isShowRoutinePopup}
                        setIsShow={setsShowRoutinePopup}
                        title={'루틴 선택'}
                    >
                        <div className="top__btn">
                            <button
                                onClick={() => setsShowRoutinePopup(false)}
                            >취소</button>
                            <button className='mainColor'
                                onClick={() => setsShowRoutinePopup(false)}
                            >완료</button>
                        </div>
                        <div className="btnbox">
                            <button
                                onClick={() => setChoiceRoutine(0)}
                                className={choiceRoutine==0?'active':''}>
                                    아침 기상
                            </button>
                            <button
                                onClick={() => setChoiceRoutine(1)}
                                className={choiceRoutine==1?'active':''}>
                                    오전 업무
                            </button>
                            <button
                                onClick={() => setChoiceRoutine(2)}
                                className={choiceRoutine==2?'active':''}>
                                    오후 업무
                            </button>
                        </div>
                    </PopupBtmWrapper>
                </h1>

                <button className='btn__share'>
                    <img src={icoShare} alt="share" />
                </button>
            </header>
            <div className="page__add__action">
                <div className="actiontime">
                    00 : 00 - 00 : 00
                </div>

                <div className="result__data">
                    <div>
                        <h3>연속</h3>
                        <strong>n일</strong>
                    </div>
                    <div>
                        <h3>누적</h3>
                        <strong>n일</strong>
                    </div>
                    <div>
                        <h3>집중도</h3>
                        <strong>n%</strong>
                    </div>
                </div>

                <div className="formbox paddingCommon result__actionbox">
                    <h2>목록</h2>

                    <div className="inputType1 flexBetween">
                        <div className="left">
                            <img src={imgEdit1} alt="img" />
                            <div className="text">
                                <h3 className="name">행동 이름</h3>
                                <div className="btm">
                                    <img src={icoCheckGold} alt="check" />
                                    <b>완료</b>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <img src={icoCheckOff} alt="check" />
                        </div>
                    </div>

                    <div className="inputType1 flexBetween">
                        <div className="left">
                            <img src={imgEdit1} alt="img" />
                            <div className="text">
                                <h3 className="name">행동 이름</h3>
                                <div className="btm">
                                    <img src={icoCheckGold} alt="check" />
                                    <b>완료</b>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                        </div>
                    </div>

                    <div className="inputType1 flexBetween">
                        <div className="left">
                            <img src={imgEdit2} alt="img" />
                            <div className="text">
                                <h3 className="name">행동 이름</h3>
                                <div className="btm">
                                    <img src={icoTimer} alt="timer" />
                                    <b>19분 20초</b>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                        </div>
                    </div>

                    <div className="inputType1 flexBetween">
                        <div className="left">
                            <img src={imgEdit3} alt="img" />
                            <div className="text">
                                <h3 className="name">행동 이름</h3>
                                <div className="btm">
                                    <img src={icoConcen} alt="check" />
                                    <b>1시간 25분 20초</b>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="mark">87%</div>
                        </div>
                    </div>

                    <div className="processbtmbox">
                        <span className='active'></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <div className="h25"></div>

                <div className="formbox retrospect">
                    <h2>회고</h2>
                    <h3 className='mainColor'>[루틴 이름]</h3>
                    <div className="comment">
                        <p className='mainColor txtLeft'>"</p>
                        <p className='txtIndent'>
                            해당 루틴이 끝나고 사용자가 적은 회고 내용이 들어갑니다.<br />
                            텍스트의 색상 및 크기도 조정이 필요한 것 같습니다.
                        </p>
                        <p className='mainColor txtRight'>"</p>
                    </div>
                </div>

                {
                    ended ? (
                        <Link to="/" className='btn__next active'>
                            메인으로
                        </Link>
                    ):(
                        <Link className='btn__next'>
                            메인으로
                        </Link>
                    )
                }
            </div>
        </>
    );
}
export default ResultInfo;
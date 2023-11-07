import { useEffect, useRef, useState } from 'react';
import imgBack from '../assets/images/LeftArrow.svg'
import icoQuestion from '../assets/images/ico_question.svg'
import { Link, useNavigate } from 'react-router-dom';
import TimePicker from 'components/include/TimePicker';
import icoArrow from '../assets/images/Arrow.svg'
import icoArrow2 from '../assets/images/RightArrow2.svg'
import ToggleSwitch from 'components/include/ToggleSwitch';

const routineData = [
    '주중',
    '주말',
    '매일',
    '직접 선택',
]

const alarmData = [
    '한번만 알림',
    '3분 후 다시 알림',
    '5분 후 다시 알림',
    '10분 후 다시 알림',
]


function AddRoutine() {
    const navigate = useNavigate()
    const [routineType, setToutineType] = useState(0);
    const [timeKind, setTimeKind] = useState(0);
    const [showFakeSelect, setShowFakeSelect] = useState(false);
    const [alarm, setAlarm] = useState(alarmData[0]);
    const handleRoutineType = (index) => {
        setToutineType(index)
    }

    const clickFakeSelect = () => {
        setShowFakeSelect(showFakeSelect?false:true)
    }
    const handleFakeSelectOption = (item) => {
        setAlarm(item)
    }

    return (
        <>
            <header className='header__routine'>
                <button className="btn__back" onClick={() => navigate(-1)}>
                    <img src={imgBack} alt="뒤로가기" />
                </button>
                <h1>루틴 이름</h1>
            </header>
            <div className="page__add__routine">
                <div className="formbox">
                    <h2>반복 주기</h2>
                    <div className="radio__wrap">
                        {
                            routineData.map((item, index) => (
                                <label
                                    key={index}
                                    onClick={() => handleRoutineType(index)}
                                    className={routineType==index?'inputType1 active':'inputType1'}
                                >
                                    <input type="radio" name="routineType" />
                                    <span>{item}</span>
                                </label>
                            ))
                        }
                    </div>
                </div>

                <div className="h25"></div>

                <div className="formbox timepicker">
                    <h2>시작 조건</h2>
                    <div className="timepicker__outer">
                        <div className="timepickerLabel">
                            <label className={timeKind==0?'active':''} onClick={() => setTimeKind(0)}>
                                <input type="radio" name='timeKind' defaultChecked={timeKind==0?true:false} />
                                <i></i>
                                <span>임의 시작</span>
                            </label>
                            <label className={timeKind==1?'active':''} onClick={() => setTimeKind(1)}>
                                <input type="radio" name='timeKind' defaultChecked={timeKind==1?true:false} />
                                <i></i>
                                <span>시간 설정</span>
                            </label>
                        </div>
                        <div className="timepickerbox">
                            <TimePicker />
                        </div>
                    </div>
                </div>

                <div className="h25"></div>

                <div className="formbox">
                    <h2>알림</h2>
                    <ul className='alarmlist'>
                        <li>
                            <div className="left">
                                <span>알림 받기</span>
                                <img src={icoQuestion} alt="알림" />
                            </div>
                            <div className="right">
                                <ToggleSwitch />
                            </div>
                        </li>
                        <li>
                            <div className="left">
                                <span>빈도</span>
                            </div>
                            <div className="right">
                                <div className="fakeSelect__wrap">
                                    <button className='fakeSelect' onClick={() => clickFakeSelect()}>
                                        <span>{alarm}</span>
                                        <img src={icoArrow} alt="선택" style={showFakeSelect ? {transform:'rotate(180deg)'} : {}} />
                                    </button>
                                    {
                                        showFakeSelect &&
                                        <div className="fakeSelect__options">
                                            {
                                                alarmData.map((item, index) =>
                                                    <span key={index} onClick={() => handleFakeSelectOption(item)}>{item}</span>
                                                )
                                            }
                                        </div>
                                    }
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="left">
                                <span>알림 메모</span>
                            </div>
                            <div className="right">
                                <button className='btn__write__memo'>
                                    <span>알림과 함께 읽을 메모 입력</span>
                                    <img src={icoArrow2} alt="입력" />
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>

                <Link to="/" className='btn__next'>
                    완료
                </Link>
            </div>
        </>
    );
}
export default AddRoutine;
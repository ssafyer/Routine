import { useEffect, useRef, useState } from 'react';
import imgBack from '../assets/images/LeftArrow.svg'
import icoQuestion from '../assets/images/ico_question.svg'
import { Link, useNavigate } from 'react-router-dom';
import TimePicker from 'components/include/TimePicker';
import icoArrow from '../assets/images/Arrow.svg'
import icoArrow2 from '../assets/images/RightArrow2.svg'
import popupClose from '../assets/images/popup__close.svg'
import ToggleSwitch from 'components/include/ToggleSwitch';
import PopupQuestionInfo from 'components/include/PopupQuestionInfo';

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
const dayData = [
    '월',
    '화',
    '수',
    '목',
    '금',
    '토',
    '일',
]


function AddRoutine() {
    const navigate = useNavigate()
    const [routineType, setToutineType] = useState(null); // 반복주기
    const [timeKind, setTimeKind] = useState(null); // 시작조건
    const [showFakeSelect, setShowFakeSelect] = useState(false); // 빈도 셀렉트
    const [alarm, setAlarm] = useState(alarmData[0]); // 빈도 셀렉트 옵션
    const [showAlarmPopup, setShowAlarmPopup] = useState(false); // 알람받기 팝업
    const [ended, setEnded] = useState(false); // 최종 완료 버튼
    const [showPopup, setShowPopup] = useState(false);

    // 반복주기 클릭
    const handleRoutineType = (index) => {
        setToutineType(index)
        if( index==3 ){ // 직접선택
            setShowroutineDay(true)
        }else{
            setShowroutineDay(false)
        }
    }
    // 반복주기 - 직접 선택
    const [showroutineDay, setShowroutineDay] = useState(false);
    const [checkedItems, setCheckedItems] = useState([]); // 직접선택한 요일 (인덱스로 담기)
    const handleCheckboxChange = (event, index) => {
        if (event.target.checked) {
            setCheckedItems([...checkedItems, index]);
        } else {
            setCheckedItems(checkedItems.filter(item => item !== index));
        }
    };
    // 직접선택 - 인덱스로 담기는 것 확인
    /* useEffect(() => {
        console.log(checkedItems)
    }, [checkedItems]); */


    // 빈도 셀렉트박스
    const clickFakeSelect = () => setShowFakeSelect(showFakeSelect?false:true)
    // 빈도 셀렉트박스 옵션
    const handleFakeSelectOption = (item) => {
        setAlarm(item)
        setShowFakeSelect(false)
    }

    useEffect(() => {
        setEnded(false)
        if(routineType==null) return
        if(timeKind==null) return
        setEnded(true)
    }, [routineType, timeKind]);


    return (
        <>
            <header className='header__routine'>
                <button className="btn__back" onClick={() => navigate(-1)}>
                    <img src={imgBack} alt="뒤로가기" />
                </button>
                <h1>루틴 이름</h1>
            </header>
            <div className="page__add__routine">
                <div className="formbox routineTime">
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
                    <div className="checkbox__wrap__day">
                        {showroutineDay &&
                            dayData.map((item, index) => (
                                <label
                                    key={index}
                                    checked={checkedItems.includes(item)}
                                    onChange={(event) => handleCheckboxChange(event, index)}
                                    className={checkedItems.includes(index)?'active':''}
                                >
                                    <input type="checkbox" name="routineDay" />
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
                            <div className="left" onClick={() => setShowAlarmPopup(showAlarmPopup?false:true)}>
                                <span>알림 받기</span>
                                <img src={icoQuestion} alt="알림" />
                                <PopupQuestionInfo
                                    title={'알림 받기란?'}
                                    comment={'루틴을 더 잘 실천할 수 있도록 웹 푸시로 제공하고 있어요. 인터넷, 크롬, 사파리에서만 사용이 가능하 며 최초1회에 한하여 알림 권한을 요청합니다.'}
                                    isShow={showAlarmPopup}
                                    setIsShow={setShowAlarmPopup}
                                />
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
                                <button className='btn__write__memo' onClick={() => setShowPopup(true)}>
                                    <span>알림과 함께 읽을 메모 입력</span>
                                    <img src={icoArrow2} alt="입력" />
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>

                {
                    ended ? (
                        <Link to="/" className='btn__next active'>
                            완료
                        </Link>
                    ):(
                        <Link className='btn__next'>
                            완료
                        </Link>
                    )
                }

                <div className={showPopup?"popup btm writeMemo active":"popup btm writeMemo"}>
                    <div className="content">
                        <div className="head">
                            <h5>메모 입력</h5>
                            <button className='btn__close' onClick={() => setShowPopup(false)}>
                                <img src={popupClose} alt="close" />
                            </button>
                        </div>
                        <div className="body">
                            <h6>알림과 함께 읽을 메모를 입력해주세요.</h6>

                            <textarea placeholder='메모 입력'></textarea>

                            <div className="btnbox">
                                <button onClick={() => setShowPopup(false)}>취소</button>
                                <button className='active'>완료</button>
                            </div>
                        </div>
                    </div>
                    <div className="bg" onClick={() => setShowPopup(false)}></div>
                </div>
            </div>
        </>
    );
}
export default AddRoutine;
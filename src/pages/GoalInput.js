import { useEffect, useState } from 'react';
import imgBack from '../assets/images/LeftArrow.svg'
import imgAction from '../assets/images/img_action.png'
import { Link, useNavigate } from 'react-router-dom';
import icoQuestion from '../assets/images/ico_question.svg'
import icoArrow2 from '../assets/images/RightArrow2.svg'
import emoji1 from '../assets/images/emoji1.svg'
import emoji2 from '../assets/images/emoji2.svg'
import emoji3 from '../assets/images/emoji3.svg'
import ToggleSwitch from 'components/include/ToggleSwitch';
import PopupQuestionInfo from 'components/include/PopupQuestionInfo';
import TimePickerHour from 'components/include/TimePickerHour';
import PopupBtmWrapper from 'components/include/PopupBtmWrapper';
import icoArrow from '../assets/images/Arrow.svg'
import TimePicker from 'components/include/TimePicker';


const actionData = [
    '완료 체크',
    '수치 입력',
]

const selectData = [
    '단위1',
    '단위2',
    '단위3',
    '단위4',
]

function GoalInput() {
    const navigate = useNavigate()
    const [actionType, setActionType] = useState(null);
    const [showActionTypePopup, setShowActionTypePopup] = useState(false);
    const [showFakeSelect, setShowFakeSelect] = useState(false); // 셀렉트
    const [selectValue, setSelectValue] = useState(null); // 셀렉트 옵션
    const [showAutoPopup, setShowAutoPopup] = useState(false);
    const [showMemoPopup, setShowMemoPopup] = useState(false);
    const [timeKind, setTimeKind] = useState(null); // 시작조건
    const [toggleSwitchValue1, setToggleSwitchValue1] = useState(false);


    // 빈도 셀렉트박스
    const clickFakeSelect = () => setShowFakeSelect(showFakeSelect?false:true)
    // 빈도 셀렉트박스 옵션
    const handleFakeSelectOption = (item) => {
        setShowFakeSelect(false)
    }

    useEffect(() => {

    }, []);

    return (
        <>
            <header className='header__routine action'>
                <button className="btn__back" onClick={() => navigate(-1)}>
                    <img src={imgBack} alt="뒤로가기" />
                </button>
                <div className="centerbox">
                    <div className='imgAction'>
                        <img src={imgAction} alt="img" />
                    </div>
                    <div className="h20"></div>
                    <h1>목표 이름</h1>
                </div>
            </header>
            <div className="page__add__action">

                <div className="formbox actionType">
                    <h2 className='addIco' onClick={() => setShowActionTypePopup(showActionTypePopup?false:true)}>
                        <b>달성 유형</b>
                    </h2>
                    <div className="radioCommonLabel">
                        {
                            actionData.map((item, index) =>
                                <label className={actionType==index?'inputType1 active':'inputType1'} key={index} onClick={() => setActionType(index)}>
                                    <input type="radio" name="actionType" />
                                    <span>{item}</span>
                                </label>
                            )
                        }
                    </div>
                    {
                        actionType==1 &&
                        <>
                            <div className="h25"></div>
                            <div className="goal__input__unit">
                                <input type="text" className='inputType1' placeholder='목표 수치를 입력해주세요' />
                                <div className="fakeSelect__wrap">
                                    <button className='fakeSelect' onClick={() => clickFakeSelect()}>
                                        <span>{selectValue?selectValue:'단위 설정'}</span>
                                        <img src={icoArrow} alt="선택" style={showFakeSelect ? {transform:'rotate(180deg)'} : {}} />
                                    </button>
                                    {
                                        showFakeSelect &&
                                        <div className="fakeSelect__options">
                                            {
                                                selectData.map((item, index) =>
                                                    <span key={index} onClick={() => handleFakeSelectOption(item)}>{item}</span>
                                                )
                                            }
                                        </div>
                                    }
                                </div>
                            </div>
                        </>
                    }
                </div>

                <div className="h25"></div>

                <div className="formbox actionType">
                    <h2>알림</h2>

                    <div className="flexBetween">
                        <h2 className='addIco' onClick={() => setShowAutoPopup(showAutoPopup?false:true)}>
                            <b>알림 받기</b>
                            <img src={icoQuestion} alt="알림 받기" />
                        </h2>
                        <PopupQuestionInfo
                            title={'알림 받기란?'}
                            comment={'목표를 더 잘 달성할 수 있도록 웹 푸시로 제공하고 있어요. 인터넷, 크롬, 사파리에서만 사용이 가능하며 최초1회에 한하여 알림 권한을 요청합니다.'}
                            posTop={90}
                            posLeft={45}
                            isShow={showAutoPopup}
                            setIsShow={setShowAutoPopup}
                        />
                        <ToggleSwitch switchValue={toggleSwitchValue1} setSwitchValue={setToggleSwitchValue1}  />
                    </div>

                    <div className={toggleSwitchValue1?'alramitems active':'alramitems'}>
                        <div className="h25"></div>

                        <div className="flexBetween">
                            <h2>시간 설정</h2>
                            <TimePicker />
                        </div>

                        <div className="h25"></div>

                        <div className="flexBetween">
                            <h2>알림 메모</h2>
                            <button className='btn__write__memo' onClick={() => setShowMemoPopup(true)}>
                                <span>알림과 함께 읽을 메모 입력</span>
                                <img src={icoArrow2} alt="입력" />
                            </button>
                        </div>
                    </div>



                    <PopupBtmWrapper
                        className={'writeMemo'}
                        isShow={showMemoPopup}
                        setIsShow={setShowMemoPopup}
                        title={'메모 입력'}
                    >
                        <div className="body">
                            <h6>알림과 함께 읽을 메모를 입력해주세요.</h6>

                            <textarea placeholder='메모 입력'></textarea>

                            <div className="btnbox">
                                <button onClick={() => setShowMemoPopup(false)}>취소</button>
                                <button className='active'>완료</button>
                            </div>
                        </div>
                    </PopupBtmWrapper>
                </div>
            </div>
        </>
    );
}
export default GoalInput;
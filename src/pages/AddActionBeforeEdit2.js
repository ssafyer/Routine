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

const actionData = [
    '완료 체크',
    '행동 타이머',
    '몰입도 확인',
]


const categoryData = [
    '전체',
    '아침',
    '저녁',
    '집중 시간',
    '건강',
    '건강',
    '건강',
    '건강',
]

const emojiData = [
    emoji1,
    emoji2,
    emoji3,
    emoji1,
    emoji2,
    emoji3,
    emoji1,
    emoji2,
    emoji3,
    emoji1,
    emoji2,
    emoji3,
]


function AddActionAfterEdit2() {
    const navigate = useNavigate()
    const [actionType, setActionType] = useState(null);
    const [ended, setEnded] = useState(false); // 최종 완료 버튼
    const [showActionTypePopup, setShowActionTypePopup] = useState(false);
    const [showAutoPopup, setShowAutoPopup] = useState(false);
    const [isShowEmojiPopup, setIsShowEmojiPopup] = useState(false);
    const [categoryChoice, setCategoryChoice] = useState(0);
    const [toggleSwitchValue1, setToggleSwitchValue1] = useState(false);
    const [toggleSwitchValue2, setToggleSwitchValue2] = useState(false);

    useEffect(() => {

    }, []);

    return (
        <>
            <header className='header__routine action'>
                <button className="btn__back" onClick={() => navigate(-1)}>
                    <img src={imgBack} alt="뒤로가기" />
                </button>
                <div className="centerbox">
                    <div className='imgAction' onClick={() => setIsShowEmojiPopup(true)}>
                        <img src={imgAction} alt="img" />
                    </div>
                    <h1>행동 이름</h1>
                </div>
                <button className='btn__recommand__action'>추천 행동</button>
            </header>
            <div className="page__add__action">
                <div className="actiontime">
                    아침 기상
                </div>

                <div className="h25"></div>

                <div className="formbox actionType">
                    <h2 className='addIco' onClick={() => setShowActionTypePopup(showActionTypePopup?false:true)}>
                        <b>실천 유형</b>
                        <img src={icoQuestion} alt="실천 유형" />
                    </h2>
                    <PopupQuestionInfo
                        title={'실천 유형이란?'}
                        comment={'루틴을 실행하여 행동을 완료할 때 더 잘 실천하고 집중할 수 있도록 하는 방법이에요.'}
                        posTop={50}
                        posLeft={45}
                        isShow={showActionTypePopup}
                        setIsShow={setShowActionTypePopup}
                    />
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
                </div>

                <div className="h25"></div>

                <div className="formbox flexBetween paddingCommon">
                    <h2>진행 시간</h2>
                    <TimePickerHour />
                </div>

                <div className="h25"></div>

                <div className="formbox disabled flexBetween paddingCommon">
                    <h2>진행 시간</h2>
                    <button className='flexBetween settime'>
                        <span>시간 설정</span>
                        <img src={icoArrow2} alt="입력" />
                    </button>
                </div>

                <div className="h25"></div>

                <div className="formbox flexBetween paddingCommon">
                <h2 className='addIco' onClick={() => setShowAutoPopup(showAutoPopup?false:true)}>
                        <b>자동 넘김</b>
                        <img src={icoQuestion} alt="자동 넘김" />
                    </h2>
                    <PopupQuestionInfo
                        title={'실천 유형이란?'}
                        comment={'루틴을 실행하여 행동을 완료할 때 더 잘 실천하고 집중할 수 있도록 하는 방법이에요.'}
                        posTop={50}
                        posLeft={45}
                        isShow={showAutoPopup}
                        setIsShow={setShowAutoPopup}
                    />
                    <ToggleSwitch switchValue={toggleSwitchValue1} setSwitchValue={setToggleSwitchValue1} />
                </div>

                <div className="h25"></div>

                <div className="formbox flexBetween paddingCommon">
                    <h2>완료 알림</h2>
                    <ToggleSwitch switchValue={toggleSwitchValue2} setSwitchValue={setToggleSwitchValue2} />
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

                <PopupBtmWrapper
                    className={'emoji'}
                    isShow={isShowEmojiPopup}
                    setIsShow={setIsShowEmojiPopup}
                >
                    <div className="action__category">
                        {
                            categoryData.map((item, index) =>
                                <label
                                    key={index}
                                    className={categoryChoice==index?'active':''}
                                    onClick={() => setCategoryChoice(index)}
                                >
                                    <input type="radio" name="category" />
                                    {item}
                                </label>
                            )
                        }
                    </div>
                    <div className="emoji__outer">
                        {
                            emojiData.map((item,index) =>
                                <div className="emoji__inner">
                                    <img key={index} src={item} alt="emoji" />
                                </div>
                            )
                        }
                    </div>
                </PopupBtmWrapper>

            </div>
        </>
    );
}
export default AddActionAfterEdit2;
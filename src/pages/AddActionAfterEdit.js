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
import icoRemoveAction from '../assets/images/ico_remove_action.svg'
import { Link, useNavigate } from 'react-router-dom';
import PopupBtmWrapper from 'components/include/PopupBtmWrapper';
import PopupToast from 'components/include/PopupToast';


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

const actionlistData = [
    {
        name:'행동이름',
        img:imgEdit1
    },
    {
        name:'행동이름',
        img:imgEdit2
    },
    {
        name:'행동이름',
        img:imgEdit3
    },
    {
        name:'행동이름',
        img:imgEdit1
    },
    {
        name:'행동이름',
        img:imgEdit1
    },
    {
        name:'행동이름',
        img:imgEdit1
    },
    {
        name:'행동이름',
        img:imgEdit2
    },
    {
        name:'행동이름',
        img:imgEdit3
    },
    {
        name:'행동이름',
        img:imgEdit1
    },
    {
        name:'행동이름',
        img:imgEdit1
    },
    {
        name:'행동이름',
        img:imgEdit3
    },
    {
        name:'행동이름',
        img:imgEdit1
    },
    {
        name:'행동이름',
        img:imgEdit1
    },
]


function AddActionAfterEdit() {
    const navigate = useNavigate()
    const [ended, setEnded] = useState(true); // 최종 완료 버튼
    const [showPopup, setShowPopup] = useState(true);// 행동삭제 팝업
    const [categoryChoice, setCategoryChoice] = useState(0);
    const [isShowActionPopup, setIsShowActionPopup] = useState(false); // 행동추천리스트 팝업

    const activeEnded = () => {
        // handlePopup('show')
    }
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
                    <button className='inputType1' onClick={() => setIsShowActionPopup(true)}>추천 행동</button>
                    <button className='inputType1'>직접 추가</button>
                    <button className='inputType1 mainColor'>
                        완료
                    </button>
                </div>

                <div className="editbox">
                    <button>
                        <div className="left">
                            <img src={icoRemoveAction} alt="remove" />
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
                            <img src={icoRemoveAction} alt="remove" />
                            <img src={imgEdit2} alt="edit" />
                            <span>행동 이름</span>
                        </div>
                        <div className="right"></div>
                    </button>
                    <button>
                        <div className="left">
                            <img src={icoRemoveAction} alt="remove" />
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
                        <Link to="/" className='btn__next comment active'>
                            <span>선택하신 행동이 삭제되었습니다.</span>
                        </Link>
                    ):(
                        <Link className='btn__next comment'>
                            <span>선택하신 행동이 삭제되었습니다.</span>
                        </Link>
                    )
                }

                {/* popup */}
                {showPopup &&
                    <PopupToast
                        classname={'isRemove'}
                        title={'행동을 삭제하시겠습니까?'}
                        msg={'한번 삭제된 행동은 복구할 수 없습니다.'}
                        btnLeft={'취소하기'}
                        btnRight={'삭제하기'}
                        isShow={showPopup}
                        setIsShow={setShowPopup}
                    />
                }


                {/* 추천행동 팝업 */}
                <PopupBtmWrapper
                    className={'actionRecommand'}
                    isShow={isShowActionPopup}
                    setIsShow={setIsShowActionPopup}
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
                    <div className="action__list">
                        {
                            actionlistData.map((item, index) =>
                                <button>
                                    <img src={item.img} alt="icon" />
                                    <span>{item.name}</span>
                                </button>
                            )
                        }
                    </div>
                </PopupBtmWrapper>
            </div>
        </>
    );
}
export default AddActionAfterEdit;
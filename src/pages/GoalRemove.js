import { useState } from 'react';
import imgBack from '../assets/images/LeftArrow.svg'
import icoWrite from '../assets/images/ico_write.svg'
import imgGoal1 from '../assets/images/img_goal1.svg'
import imgGoal2 from '../assets/images/img_goal2.svg'
import imgGoal3 from '../assets/images/img_goal3.svg'
import imgGoal4 from '../assets/images/img_goal4.svg'
import imgGoal5 from '../assets/images/img_goal5.svg'
import icoPlus from '../assets/images/ico_plus_goal.svg'
import icoMinus from '../assets/images/ico_minus_goal.svg'
import icoCheck from '../assets/images/ico_check.svg'
import icoRemove from '../assets/images/ico_goal_remove.svg'
import { Link, useNavigate } from 'react-router-dom';
import PopupToast from 'components/include/PopupToast';

const goalData = [
    {
        img:imgGoal1,
        name:'물 마시기',
        text:'600ml'
    },
    {
        img:imgGoal2,
        name:'비타민 섭취',
        text:'미완료/완료'
    },
    {
        img:imgGoal3,
        name:'수면 시간',
        text:'8시간'
    },
    {
        img:imgGoal4,
        name:'책 읽기',
        text:'1권'
    },
    {
        img:imgGoal5,
        name:'런닝 또는 산책하기',
        text:'2.5KM'
    },
]

function GoalRmove() {
    const navigate = useNavigate()
    const [ended, setEnded] = useState(false); // 최종 완료 버튼
    const [showisRemovePopup, setShowisRemovePopup] = useState(false);
    const [showisSavePopup, setShowisSavePopup] = useState(false);

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
                    <button className='inputType1 mainColor' onClick={() => setShowisSavePopup(true)}>완료</button>
                </div>
                <div className="goal__list">
                    {
                        goalData.map((item, index) =>
                            <div key={index} className='goal__item'>
                                <h6>{item.name}</h6>
                                <img src={item.img} alt="goal img" />
                                <div className="flexBetween">
                                    <b>{item.text}</b>
                                    <div className="btnbox flexBetween">
                                        {
                                            index==1 &&
                                            <button>
                                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M14.7085 1.20986C14.6155 1.11613 14.5049 1.04174 14.3831 0.990969C14.2612 0.940201 14.1305 0.914062 13.9985 0.914062C13.8665 0.914062 13.7358 0.940201 13.6139 0.990969C13.492 1.04174 13.3814 1.11613 13.2885 1.20986L5.83849 8.66986L2.70849 5.52986C2.61196 5.43662 2.49802 5.36331 2.37317 5.3141C2.24831 5.2649 2.11499 5.24077 1.98081 5.24309C1.84663 5.24541 1.71422 5.27414 1.59114 5.32763C1.46806 5.38113 1.35672 5.45834 1.26348 5.55486C1.17025 5.65138 1.09693 5.76532 1.04773 5.89018C0.998524 6.01503 0.974394 6.14836 0.976715 6.28254C0.979037 6.41672 1.00776 6.54913 1.06126 6.67221C1.11475 6.79529 1.19196 6.90662 1.28848 6.99986L5.12849 10.8399C5.22145 10.9336 5.33205 11.008 5.45391 11.0588C5.57577 11.1095 5.70647 11.1357 5.83849 11.1357C5.9705 11.1357 6.1012 11.1095 6.22306 11.0588C6.34492 11.008 6.45552 10.9336 6.54849 10.8399L14.7085 2.67986C14.81 2.58622 14.891 2.47257 14.9464 2.34607C15.0018 2.21957 15.0304 2.08296 15.0304 1.94486C15.0304 1.80676 15.0018 1.67015 14.9464 1.54365C14.891 1.41715 14.81 1.3035 14.7085 1.20986Z" fill="#9E9E9E"/>
                                                </svg>
                                            </button>
                                        }
                                        {
                                            index!=1 &&
                                            <>
                                                <button>
                                                    <svg width="12" height="4" viewBox="0 0 12 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="0.5" y="0.899414" width="11" height="2.2" rx="0.5" fill="#9E9E9E"/>
                                                    </svg>
                                                </button>
                                                <button>
                                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="0.5" y="4.89941" width="11" height="2.2" rx="0.5" fill="#9E9E9E"/>
                                                        <rect x="4.89844" y="11.5" width="11" height="2.2" rx="0.5" transform="rotate(-90 4.89844 11.5)" fill="#9E9E9E"/>
                                                    </svg>
                                                </button>
                                            </>
                                        }
                                    </div>
                                </div>
                                <button className='btn__remove' onClick={() => setShowisRemovePopup(true)}>
                                    <img src={icoRemove} alt="remove" />
                                </button>
                            </div>
                        )
                    }
                </div>
            </div>

            <PopupToast
                classname={'isRemove'}
                title={'목표를 삭제하시겠습니까?'}
                msg={'한번 삭제된 목표는 복구할 수 없습니다.'}
                btnLeft={'취소하기'}
                btnRight={'삭제하기'}
                isShow={showisRemovePopup}
                setIsShow={setShowisRemovePopup}
            />

            <PopupToast
                classname={'isRemove'}
                title={'변경한 목표치가 있습니다.'}
                msg={'이대로 저장하고 다른 페이지로 갈까요? '}
                btnLeft={'취소하기'}
                btnRight={'저장하기'}
                isShow={showisSavePopup}
                setIsShow={setShowisSavePopup}
            />
        </>
    );
}
export default GoalRmove;
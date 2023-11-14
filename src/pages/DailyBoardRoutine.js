import { Link, useNavigate } from 'react-router-dom';
import icoSmile from '../assets/images/ico_smile.png'
import icoNotSmile from '../assets/images/ico_not_smile.png'
import icoCal from '../assets/images/ico_cal_white.svg'
import LeftArrow from '../assets/images/LeftArrow.svg'
import RightArrow from '../assets/images/RightArrow.svg'
import imgEmoji from '../assets/images/img_goal1.svg'
import prevButton from '../assets/images/LeftArrow.svg'
import nextButton from '../assets/images/RightArrow.svg'
import { useEffect, useState } from 'react';
import NavBar from 'components/navigation/NavBar';
import PopupBtmWrapper from 'components/include/PopupBtmWrapper';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const categoryData = [
    '전체',
    '루틴',
    '목표',
]

function DailyBoardRoutine({setIsRemovePadding}) {
    setIsRemovePadding(true)
    const navigate = useNavigate()
    const [categoryChoice, setCategoryChoice] = useState(1);
    const [isShowDailyPopup, setIsShowDailyPopup] = useState(false);
    const [dailyCalendar, setDailyCalendar] = useState(new Date());
    const formatDay = (locale, date) => {
        return date.getDate().toString(); // This will just return the day number
    };

    useEffect(() => {
        if( categoryChoice==0 ) navigate('/daily_board')
        if( categoryChoice==1 ) navigate('/daily_board_routine')
        if( categoryChoice==2 ) navigate('/daily_board_goal')
    }, [categoryChoice]);

    /* 퍼센트계산기 */
    const percentToDegrees = (percent) => {
        const degreesPerPercent = 360 / 100;
        return percent * degreesPerPercent;
    }

    const formatMonthYear = (locale, date) => {
        return `${date.getFullYear()}.${date.getMonth() + 1}`;
    };

    const prevButton = <img src={LeftArrow} alt="Prev" />;
    const nextButton = <img src={RightArrow} alt="Next" />;

    return (
        <div className='page__daliyboard'>
            <div className="board__head">
                <div className="flexBetween top">
                    <h2>데일리 보드</h2>
                    <button className='btn__calendar' onClick={() => setIsShowDailyPopup(true)}>
                        <img src={icoCal} alt="calendar" />
                    </button>
                </div>
                <div className="flexBetween cal__day">
                    <span>월</span>
                    <span>화</span>
                    <span>수</span>
                    <span className='active'>목</span>
                    <span>금</span>
                    <span>토</span>
                    <span>일</span>
                </div>
                <div className="flexBetween cal__date">
                    <span>4</span>
                    <span>5</span>
                    <span>6</span>
                    <span>7</span>
                    <span>8</span>
                    <span>9</span>
                    <span>10</span>
                </div>
            </div>
            <div className="board__body">
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

                <div className="formbox__item2">
                    <div className="formbox">
                        <h2>몰입도</h2>
                        <div className="routinechart">
                            <div className="routinechart__bar"
                                style={{
                                    background:
                                    `conic-gradient(var(--POINT-COLOR2) ${percentToDegrees(78)}deg,
                                    var(--BACK-COLOR7) 50deg)`
                                }}
                            >
                                <span>78%</span>
                            </div>
                        </div>
                    </div>
                    <div className="formbox">
                        <h2>목표 달성률</h2>
                        <div className="routinechart">
                            <div className="routinechart__bar"
                                style={{
                                    background:
                                    `conic-gradient(var(--POINT-COLOR2) ${percentToDegrees(58)}deg,
                                    var(--BACK-COLOR7) 50deg)`
                                }}
                            >
                                <span>58%</span>
                            </div>
                        </div>
                    </div>
                    <div className="formbox goal">
                        <h2>목표의 이름이 들어갑니다.</h2>
                        <img src={imgEmoji} alt="emoji" />
                        <div className="btm goal__list">
                            <div className="flexBetween goal__item">
                                <b>목표 수치</b>
                                <div className="btnbox">
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
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="formbox goal">
                        <h2>목표의 이름이 들어갑니다.</h2>
                        <img src={imgEmoji} alt="emoji" />
                        <div className="btm goal__list">
                            <div className="flexBetween goal__item">
                                <b>목표 수치</b>
                                <div className="btnbox">
                                    <button>
                                        <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.7085 1.20986C14.6155 1.11613 14.5049 1.04174 14.3831 0.990969C14.2612 0.940201 14.1305 0.914062 13.9985 0.914062C13.8665 0.914062 13.7358 0.940201 13.6139 0.990969C13.492 1.04174 13.3814 1.11613 13.2885 1.20986L5.83849 8.66986L2.70849 5.52986C2.61196 5.43662 2.49802 5.36331 2.37317 5.3141C2.24831 5.2649 2.11499 5.24077 1.98081 5.24309C1.84663 5.24541 1.71422 5.27414 1.59114 5.32763C1.46806 5.38113 1.35672 5.45834 1.26348 5.55486C1.17025 5.65138 1.09693 5.76532 1.04773 5.89018C0.998524 6.01503 0.974394 6.14836 0.976715 6.28254C0.979037 6.41672 1.00776 6.54913 1.06126 6.67221C1.11475 6.79529 1.19196 6.90662 1.28848 6.99986L5.12849 10.8399C5.22145 10.9336 5.33205 11.008 5.45391 11.0588C5.57577 11.1095 5.70647 11.1357 5.83849 11.1357C5.9705 11.1357 6.1012 11.1095 6.22306 11.0588C6.34492 11.008 6.45552 10.9336 6.54849 10.8399L14.7085 2.67986C14.81 2.58622 14.891 2.47257 14.9464 2.34607C15.0018 2.21957 15.0304 2.08296 15.0304 1.94486C15.0304 1.80676 15.0018 1.67015 14.9464 1.54365C14.891 1.41715 14.81 1.3035 14.7085 1.20986Z" fill="#9E9E9E"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <NavBar />

            <PopupBtmWrapper
                className={'daily__calendar'}
                isShow={isShowDailyPopup}
                setIsShow={setIsShowDailyPopup}
            >
                {/* https://projects.wojtekmaj.pl/react-calendar/ */}
                <button className='btn__calendar__today' onClick={() => setDailyCalendar(new Date())}>오늘</button>
                <Calendar
                    value={dailyCalendar}
                    onChange={setDailyCalendar}
                    maxDate={new Date(2023,11,30)}  // month는 + 1 로 계산
                    minDate={new Date(2023,5,1)}    // month는 + 1 로 계산
                    formatDay={formatDay}
                    formatMonthYear={formatMonthYear}
                    prev2Label={null} // Removes 'jump to first' arrow
                    next2Label={null} // Removes 'jump to last' arrow
                    prevLabel={prevButton} // Custom previous button
                    nextLabel={nextButton} // Custom next button
                />
            </PopupBtmWrapper>
        </div>
    );
}
export default DailyBoardRoutine;
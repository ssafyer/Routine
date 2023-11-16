import { useEffect, useState } from 'react';
import imgBack from '../assets/images/LeftArrow.svg'
import imgAction from '../assets/images/img_action.png'
import { Link, useNavigate } from 'react-router-dom';
import icoExecCheckOn from '../assets/images/ico_exec_check_on.svg'
import icoExecNext from '../assets/images/ico_exec_next.svg'
import icoExecList from '../assets/images/ico_exec_list.svg'
import icoExecMemo from '../assets/images/ico_exec_memo.svg'
import icoExecPlay from '../assets/images/ico_exec_play.svg'
import icoExecPause from '../assets/images/ico_exec_pause.svg'
import icoExecPauseOn from '../assets/images/ico_exec_pause_on.svg'
import icoExecPauseOnPlay from '../assets/images/ico_exec_pause_on_play.svg'
import icoWrite from '../assets/images/ico_write.svg'

import TimerCircle from 'components/include/TimerCircle';
import PopupQuestionInfo from 'components/include/PopupQuestionInfo';
import PopupToast from 'components/include/PopupToast';
import PopupBtmWrapper from 'components/include/PopupBtmWrapper';

import imgEdit1 from '../assets/images/img_edit1.png'
import imgEdit2 from '../assets/images/img_edit2.png'
import imgEdit3 from '../assets/images/img_edit3.png'
import icoTimer from '../assets/images/ico_timer.svg'
import icoConcen from '../assets/images/ico_concen.svg'
import icoMove from '../assets/images/ico_move.svg'
import icoCheckOff from '../assets/images/ico_check2_off.svg'
import icoCheckOn from '../assets/images/ico_check2_on.svg'


const actionlistData = [
    {
        name:'행동이름',
        img:imgEdit1, // 이모지 이미지
        icon:icoTimer, // 오른쪽 노란 아이콘
        text:'3분',
        isCheck:true, //체크됐는지
        isActive:true, // 현재 선택한 루틴 (글자 bold된 요소)
        leftCheckIcon:icoCheckOff,
    },
    {
        name:'행동이름',
        img:imgEdit2,
        isCheck:false,
        leftCheckIcon:icoCheckOn,
    },
    {
        name:'행동이름',
        img:imgEdit3,
        icon:icoConcen,
        text:'30분',
        isCheck:false,
        leftCheckIcon:icoCheckOn,
    },
    {
        name:'행동이름',
        img:imgEdit1,
        isCheck:false,
        leftCheckIcon:icoCheckOn,
    },
    {
        name:'행동이름',
        img:imgEdit1,
        isCheck:false,
        leftCheckIcon:icoCheckOn,
    },
    {
        name:'행동이름',
        img:imgEdit1,
        isCheck:false,
        leftCheckIcon:icoCheckOn,
    },
    {
        name:'행동이름',
        img:imgEdit2,
        isCheck:false,
        leftCheckIcon:icoCheckOn,
    },
    {
        name:'행동이름',
        img:imgEdit3,
        isCheck:false,
        leftCheckIcon:icoCheckOff,
    },
    {
        name:'행동이름',
        img:imgEdit1,
        isCheck:false,
        leftCheckIcon:icoCheckOff,
    },
    {
        name:'행동이름',
        img:imgEdit1,
        isCheck:false,
        leftCheckIcon:icoCheckOff,
    },
    {
        name:'행동이름',
        img:imgEdit3,
        isCheck:false,
        leftCheckIcon:icoCheckOn,
    },
    {
        name:'행동이름',
        img:imgEdit1,
        isCheck:false,
        leftCheckIcon:icoCheckOn,
    },
    {
        name:'행동이름',
        img:imgEdit1,
        isCheck:false,
        leftCheckIcon:icoCheckOn,
    },
]


function ExecutionConfirm() {
    const navigate = useNavigate()
    const [showPopup, setShowPopup] = useState(false);
    const [isShowListPopup, setIsShowListPopup] = useState(false);
    const [showMemoPopup, setShowMemoPopup] = useState(false);

    /******************************************
     *  타이머
     * ****************************************/
    const [isTimeReset, setIsTimeReset] = useState(true);
    const [isTimePause, setIsTimePause] = useState(true);

    const [totalTime, setTotalTime] = useState(10);  // 초기 타이머 시간설정
    const [elapsedTime, setElapsedTime] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [timerEnded, setTimerEnded] = useState(false);

    // 경과 시간을 업데이트
    useEffect(() => {
        let interval;
        if (!isPaused && elapsedTime < totalTime) {
            interval = setInterval(() => {
                setElapsedTime((prevTime) => prevTime + 1);
            }, 1000);
        } else if (elapsedTime >= totalTime) {
            clearInterval(interval);
            setTimerEnded(true);
        }
        return () => clearInterval(interval);
    }, [elapsedTime, isPaused, totalTime]);

    const handleStart = () => {
        setIsPaused(false);
        setIsTimeReset(true)
    };
    const handleReset = () => {
        setElapsedTime(0);
        setIsPaused(true);
        setTimerEnded(false);
        setIsTimeReset(false)
    };

    const handlePause = () => {
        setIsPaused(!isPaused);
        setIsTimePause(isTimePause?false:true)
    };

    const formatTime = (time) => {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    /******************************************
     *  // 타이머
     * ****************************************/

    /******************************************
     *  드래그
     *  참고: https://velog.io/@whljm1003/React-%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC-%EC%97%86%EC%9D%B4-drag-and-drop-%EA%B8%B0%EB%8A%A5-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0
      ******************************************/
    const [list, setList] = useState(actionlistData);
    const [isDraggable, setIsDraggable] = useState(false);

    // drag
    const [dragAndDrop, setDragAndDrop] = useState({
        draggedFrom: null,
        draggedTo: null,
        isDragging: false,
        originalOrder: actionlistData,
        updatedOrder: actionlistData,
    });
    // 사용자가 객체(object)를 드래그하려고 시작할 때 발생함.
    const onDragStart = (event, item) => {
        if( item.isCheck ) return
        event.currentTarget.style.opacity = "0.4";
        const initialPosition = parseInt(event.currentTarget.dataset.position);
        setDragAndDrop({
            ...dragAndDrop,
            draggedFrom: initialPosition,
            originalOrder: list,
        });
    };
    // 드래그하면서 마우스가 대상 객체의 위에 자리 잡고 있을 때 발생함.
    const onDragOver = (event, item) => {
        if( item.isCheck ) return
        event.preventDefault();
        let newList = dragAndDrop.originalOrder;
        const draggedFrom = dragAndDrop.draggedFrom; // 드래그 되는 항목의 인덱스(시작)
        const draggedTo = parseInt(event.currentTarget.dataset.position); // 놓을 수 있는 영역의 인덱스(끝)
        const itemDragged = newList[draggedFrom];
        const remainingItems = newList.filter( // draggedFrom(시작) 항목 제외한 배열 목록
                (item, index) => index !== draggedFrom);

        if (!itemDragged) return;

        newList = [
            // 드래그 시작, 끝 인덱스를 활용해 새로운 배열로 반환해줌
            ...remainingItems.slice(0, draggedTo),
            itemDragged,
            ...remainingItems.slice(draggedTo)
        ];
        if (draggedTo !== dragAndDrop.draggedTo) { // 놓을 수 있는 영역이 변경 되면 객체를 변경해줌
            setDragAndDrop({
                ...dragAndDrop,
                updatedOrder: newList,
                draggedTo: draggedTo
            });
        }
    };
    const onDrop = (event, item) => {
        if( item.isCheck ) return
        setList(dragAndDrop.updatedOrder);
        setDragAndDrop({
            ...dragAndDrop,
            draggedFrom: null,
            draggedTo: null
        });
    };
    const onDragLeave = (event, item) => {
        if( item.isCheck ) return
        event
            .currentTarget
            .classList
            .remove("over");
        setDragAndDrop({
            ...dragAndDrop,
            draggedTo: null
        });
    };
    // 잡은 Item이 다른 Item이랑 겹쳤을 때 발생<겹쳐졌을 때>
    const onDragEnter = (event, item) => {
        if( item.isCheck ) return
        event.currentTarget.classList.add("over");
    };
    // 잡은 Item을 놓았을 때 발생
    const onDragEnd = (event, item) => {
        if( item.isCheck ) return
        event.currentTarget.style.opacity = "1";
        const listItens = document.querySelectorAll(".draggable");
        listItens.forEach((item) => {
            item.classList.remove("over");
        });
    };
    /******************************************
     *  // 드래그
     *******************************************/


    return (
        <>
            <header className='header__routine exec'>
                <button className="btn__back" onClick={() => navigate(-1)}>
                    <img src={imgBack} alt="뒤로가기" />
                </button>
                <div className="centerbox">
                    <h1>집중 업무시간</h1>

                    <div className="h50"></div>

                    <div className='setEmojibox' style={{background:'#e4e4e4'}}>
                        <img src={imgAction} alt="img" />
                    </div>

                    <div className="timer__circle">
                        <TimerCircle value={elapsedTime} 
                            maxValue={totalTime} isPaused={isPaused} 
                            isTimeReset={isTimeReset} timerEnded={timerEnded} 
                        />
                    </div>
                </div>
            </header>
            <div className="page__exec">
                <div className="timeText">{formatTime(totalTime - elapsedTime)}</div>
                <div className="subtimeText">+ {formatTime(elapsedTime)}</div>


                <div className="exec__btnbox">
                    {
                        !isTimeReset &&
                        <button className='btn__time__start' onClick={() => handleStart()}>
                            <img src={icoExecPlay} alt="check" />
                        </button>
                    }
                    {
                        isTimeReset &&
                        <button className='btn__time__reset' onClick={() => handleReset()}>
                            <img src={icoExecPause} alt="check" />
                        </button>
                    }
                    <button className='btn__time__pause' onClick={() => handlePause()}>
                        {
                            isTimePause
                            ? <img src={icoExecPauseOn} alt="check" />
                            : <img src={icoExecPauseOnPlay} alt="check" />
                        }
                    </button>
                    <button className='btn__time__check'>
                        <img src={icoExecCheckOn} alt="check" />
                    </button>
                    <button className='btn__time__next' onClick={() => setShowPopup(true)}>
                        <img src={icoExecNext} alt="next" />
                    </button>
                </div>

                <p className='text__nextroutine'>다음 루틴 : 휴식하기</p>

                <div className="btnbtmbox">
                    <button onClick={() => setIsShowListPopup(true)}>
                        <img src={icoExecList} alt="list" />
                    </button>
                    <button onClick={() => setShowMemoPopup(true)}>
                        <img src={icoExecMemo} alt="memo" />
                    </button>
                </div>

                <PopupQuestionInfo />

                {/* popup */}
                {showPopup &&
                    <PopupToast
                        classname={''}
                        title={'현재 행동을 패스할까요?'}
                        msg={'현재 진행중인 행동에 대한 기록은 사라지고 다음 행동으로 넘어갑니다.'}
                        btnLeft={'나중에 하기'}
                        btnRight={'행동 추가하기'}
                        isShow={showPopup}
                        setIsShow={setShowPopup}
                    />
                }

                <PopupBtmWrapper
                    className={'exec'}
                    isShow={isShowListPopup}
                    setIsShow={setIsShowListPopup}
                    title={'mm월 dd일 [진행중인 루틴]'}
                >
                    <div className="action__btnbox">
                        <div className="actiontime other">
                            오전 2시 33분 시작
                        </div>
                        <button className='inputType1' onClick={() => setIsDraggable(isDraggable?false:true)}>
                            {
                                !isDraggable
                                ? <img src={icoWrite} alt="write" />
                                : <b className='mainColor'>완료</b>
                            }
                        </button>
                    </div>
                    <div className="action__list">
                        {
                            dragAndDrop.updatedOrder.map((item, index) => {
                                return <button className='flexBetween draggable'
                                            key={index}
                                            draggable={isDraggable?true:false}
                                            data-position={index}
                                            onDragStart={(e)=> onDragStart(e, item)}
                                            onDragOver={(e)=> onDragOver(e, item)}
                                            onDragLeave={(e)=> onDragLeave(e, item)}
                                            onDrop={(e)=> onDrop(e, item)}
                                            onDragEnter={(e)=> onDragEnter(e, item)}
                                            onDragEnd={(e)=> onDragEnd(e,item)}
                                        >
                                            <div>
                                                {
                                                    (!item.isCheck&& isDraggable) &&
                                                    <img src={icoMove} className='ico__move' alt="move" />
                                                }
                                                {
                                                    (!item.isCheck&& isDraggable) &&
                                                    <img src={item.leftCheckIcon} className='ico__left__check' alt="img" />
                                                }
                                                <img src={item?.img} alt="icon" />
                                                <span className={item.isActive?'active':''}>{item.name}</span>
                                            </div>
                                            <div className='flexBetween'>
                                                {
                                                    item.icon&&
                                                    <img src={item.icon} className='ico_action' alt="icon" />
                                                }
                                                {
                                                    item.text&&item.text
                                                }
                                                {
                                                    item.isCheck&&
                                                    <i className='ico__check'>
                                                        <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M14.7085 1.20986C14.6155 1.11613 14.5049 1.04174 14.3831 0.990969C14.2612 0.940201 14.1305 0.914062 13.9985 0.914062C13.8665 0.914062 13.7358 0.940201 13.6139 0.990969C13.492 1.04174 13.3814 1.11613 13.2885 1.20986L5.83849 8.66986L2.70849 5.52986C2.61196 5.43662 2.49802 5.36331 2.37317 5.3141C2.24831 5.2649 2.11499 5.24077 1.98081 5.24309C1.84663 5.24541 1.71422 5.27414 1.59114 5.32763C1.46806 5.38113 1.35672 5.45834 1.26348 5.55486C1.17025 5.65138 1.09693 5.76532 1.04773 5.89018C0.998524 6.01503 0.974394 6.14836 0.976715 6.28254C0.979037 6.41672 1.00776 6.54913 1.06126 6.67221C1.11475 6.79529 1.19196 6.90662 1.28848 6.99986L5.12849 10.8399C5.22145 10.9336 5.33205 11.008 5.45391 11.0588C5.57577 11.1095 5.70647 11.1357 5.83849 11.1357C5.9705 11.1357 6.1012 11.1095 6.22306 11.0588C6.34492 11.008 6.45552 10.9336 6.54849 10.8399L14.7085 2.67986C14.81 2.58622 14.891 2.47257 14.9464 2.34607C15.0018 2.21957 15.0304 2.08296 15.0304 1.94486C15.0304 1.80676 15.0018 1.67015 14.9464 1.54365C14.891 1.41715 14.81 1.3035 14.7085 1.20986Z" fill="#fff"/>
                                                        </svg>
                                                    </i>
                                                }
                                            </div>
                                        </button>
                            })
                        }
                    </div>
                </PopupBtmWrapper>



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
        </>
    );
}
export default ExecutionConfirm;
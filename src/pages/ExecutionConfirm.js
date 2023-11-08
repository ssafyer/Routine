import { useEffect, useState } from 'react';
import imgBack from '../assets/images/LeftArrow.svg'
import imgAction from '../assets/images/img_action.png'
import { Link, useNavigate } from 'react-router-dom';
import icoExecCheckOn from '../assets/images/ico_exec_check_on.svg'
import icoExecNext from '../assets/images/ico_exec_next.svg'
import icoExecList from '../assets/images/ico_exec_list.svg'
import icoExecMemo from '../assets/images/ico_exec_memo.svg'
import icoExecPause from '../assets/images/ico_exec_pause.svg'
import icoExecPauseOn from '../assets/images/ico_exec_pause_on.svg'
import TimerCircle from 'components/include/TimerCircle';
import TimerCircle2 from 'components/include/TimerCircle2';


function ExecutionConfirm() {
    const navigate = useNavigate()


    return (
        <>
            <header className='header__routine action exec'>
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
                        {/* <TimerCircle /> */}
                        <TimerCircle2 />
                    </div>
                </div>
            </header>
            <div className="page__exec">
                <div className="timeText">00:15:00</div>
                <div className="subtimeText">+ 00:18:12</div>

                <div className="exec__btnbox">
                    <button>
                        <img src={icoExecPause} alt="check" />
                    </button>
                    <button>
                        <img src={icoExecPauseOn} alt="check" />
                    </button>
                    <button>
                        <img src={icoExecCheckOn} alt="check" />
                    </button>
                    <button>
                        <img src={icoExecNext} alt="next" />
                    </button>
                </div>

                <p className='text__nextroutine'>다음 루틴 : 휴식하기</p>

                <div className="btnbtmbox">
                    <button>
                        <img src={icoExecList} alt="list" />
                    </button>
                    <button>
                        <img src={icoExecMemo} alt="memo" />
                    </button>
                </div>
            </div>
        </>
    );
}
export default ExecutionConfirm;
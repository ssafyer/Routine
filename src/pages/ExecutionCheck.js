import { useEffect, useState } from 'react';
import imgBack from '../assets/images/LeftArrow.svg'
import imgAction from '../assets/images/img_action.png'
import { Link, useNavigate } from 'react-router-dom';
import icoExecCheckOn from '../assets/images/ico_exec_check_on.svg'
import icoExecNext from '../assets/images/ico_exec_next.svg'
import icoExecList from '../assets/images/ico_exec_list.svg'
import icoExecMemo from '../assets/images/ico_exec_memo.svg'


function ExecutionCheck() {
    const navigate = useNavigate()


    return (
        <>
            <header className='header__routine action'>
                <button className="btn__back" onClick={() => navigate(-1)}>
                    <img src={imgBack} alt="뒤로가기" />
                </button>
                <div className="centerbox">
                    <h1>미라클 모닝</h1>

                    <div className="h50"></div>

                    <div className='setEmojibox' style={{background:'#e4e4e4'}}>
                        <img src={imgAction} alt="img" />
                    </div>
                </div>
            </header>
            <div className="page__exec">
                <div className="timeText"></div>
                <div className="subtimeText"></div>

                <div className="exec__btnbox">
                    <button>
                        <img src={icoExecCheckOn} alt="check" />
                    </button>
                    <button>
                        <img src={icoExecNext} alt="next" />
                    </button>
                </div>
                <p className='text__nextroutine'>다음 루틴 : 세안하기</p>

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
export default ExecutionCheck;
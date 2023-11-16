import { useEffect, useState } from 'react';
import imgBack from '../assets/images/LeftArrow.svg'
import imgAction from '../assets/images/img_action.png'
import { Link, useNavigate } from 'react-router-dom';
import icoExecCheckOn from '../assets/images/ico_exec_check_on.svg'
import icoExecNext from '../assets/images/ico_exec_next.svg'
import icoExecList from '../assets/images/ico_exec_list.svg'
import icoExecMemo from '../assets/images/ico_exec_memo.svg'
import icoExecPause from '../assets/images/ico_exec_pause.svg'
import PopupBtmWrapper from 'components/include/PopupBtmWrapper';
import emoji1 from '../assets/images/emoji1.svg'
import emoji2 from '../assets/images/emoji2.svg'
import emoji3 from '../assets/images/emoji3.svg'
import icoExecPlay from '../assets/images/ico_exec_play.svg'


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


function ExecutionTimer() {
    const navigate = useNavigate()
    const [isShowEmojiPopup, setIsShowEmojiPopup] = useState(false);
    const [categoryChoice, setCategoryChoice] = useState(0);


    /******************************************
     *  타이머
     * ****************************************/
    const [totalTime, setTotalTime] = useState(12); // 초기 타이머 시간설정 
    const [elapsedTime, setElapsedTime] = useState(0);
    const [isPaused, setIsPaused] = useState(true);
    const [isTimeReset, setIsTimeReset] = useState(false);

    useEffect(() => {
        let interval;
        if (!isPaused && elapsedTime < totalTime) {
            interval = setInterval(() => {
                setElapsedTime((prevTime) => prevTime + 1);
            }, 1000);
        } else if (elapsedTime >= totalTime) {
            clearInterval(interval);
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
        setIsTimeReset(false)
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
    return (
        <>
            <header className='header__routine action'>
                <button className="btn__back" onClick={() => navigate(-1)}>
                    <img src={imgBack} alt="뒤로가기" />
                </button>
                <div className="centerbox">
                    <h1>아침 식사</h1>

                    <div className="h50"></div>

                    <div className='setEmojibox' style={{background:'#e4e4e4'}} onClick={() => setIsShowEmojiPopup(true)}>
                        <img src={imgAction} alt="img" />
                    </div>
                </div>
            </header>
            <div className="page__exec">
            <div className="timeText">{formatTime(totalTime - elapsedTime)}</div>
                <div className="subtimeText"></div>

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
                    <button>
                        <img src={icoExecCheckOn} alt="check" />
                    </button>
                    <button>
                        <img src={icoExecNext} alt="next" />
                    </button>
                </div>
                <p className='text__nextroutine'>다음 루틴 : 양치하기</p>

                <div className="btnbtmbox">
                    <button>
                        <img src={icoExecList} alt="list" />
                    </button>
                    <button>
                        <img src={icoExecMemo} alt="memo" />
                    </button>
                </div>
            </div>

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
        </>
    );
}
export default ExecutionTimer;
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
import { Link, useNavigate } from 'react-router-dom';

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

function Goal() {
    const navigate = useNavigate()
    const [ended, setEnded] = useState(false); // 최종 완료 버튼

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
                    <button className='inputType1'>
                        <img src={icoWrite} alt="write" />
                    </button>
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
                                        <button>
                                            <img src={icoMinus} alt="minus" />
                                        </button>
                                        <button>
                                            <img src={icoPlus} alt="plus" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>

                <Link to="/" className='btn__next active'>
                    메인으로
                </Link>
            </div>
        </>
    );
}
export default Goal;
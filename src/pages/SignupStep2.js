import imgBack from '../assets/images/LeftArrow.svg'
import signupVisual from '../assets/images/signup_visual.png'
import icoArrowright from '../assets/images/arrow_right.png'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';


const listItems = [
    '중요한 일에 시간과 에너지를 집중하고 싶어요.',
    '지금보다 더 많은 일을 해내고 싶어요.',
    '하는 일에 더 몰입하고 싶어요.',
    '노력을 통해 성공하고 싶어요.',
    '불필요한 의사결정 시간을 줄이고 싶어요.',
    '건강한 생활을 하고 싶어요.',
    '규칙적인 생활을 하고 싶어요.',
];

function SignupStep2() {
    const navigate = useNavigate()
    const [reason, setReason] = useState(null);

    const handleClickReason = (index) => {
        setReason(index)
    }

    return (
        <>
            <button className="btn__back" onClick={() => navigate(-1)}>
                <img src={imgBack} alt="뒤로가기" />
            </button>
            <div className="page__signup step2">
                <div className="step__number">
                    <span>1</span>
                    <span className='active'>2</span>
                    <span>3</span>
                </div>
                <h1>
                    루틴을 실천하고 싶은 이유를<br />
                    알려주세요!
                </h1>

                <div className="checkboxWrap">
                    {listItems.map((item, index) => (
                        <label key={index} onClick={() => handleClickReason(index)} className={reason==index ? 'active':''}>
                            <input type="radio" name="reason" />
                            <span>{item}</span>
                        </label>
                    ))}
                </div>

                {
                    reason==null
                    ? (
                        <Link className='btn__next'>
                            선택 완료
                        </Link>
                    ):(
                        <Link to="/signup_step3" className='btn__next active'>
                            선택 완료
                        </Link>
                    )
                }
            </div>
        </>
    );
}
export default SignupStep2;
import imgBack from '../assets/images/LeftArrow.svg'
import signupVisual from '../assets/images/signup_visual.png'
import icoArrowright from '../assets/images/arrow_right.png'
import { Link, useNavigate } from 'react-router-dom';

function SignupStep1() {
    const navigate = useNavigate()

    return (
        <>
            <button className="btn__back" onClick={() => navigate(-1)}>
                <img src={imgBack} alt="뒤로가기" />
            </button>
            <div className="page__signup step1">
                <div className="step__number">
                    <span className='active'>1</span>
                    <span>2</span>
                    <span>3</span>
                </div>
                <h1>
                    <b>루틴</b>은 어떤 목적을 갖고 <b>실행하는</b><br />
                    <b>행동들의 순서</b>에요!
                </h1>
                <h2>예시) 공부 루틴</h2>

                <img src={signupVisual} alt="회원가입" className='signupVisual' />

                <p className='step2__process'>
                    <span>공부 준비하기</span>
                    <img src={icoArrowright} alt="다음" />
                    <span>집중 공부시간</span>
                    <img src={icoArrowright} alt="다음" />
                    <span>휴식</span><br />
                    <img src={icoArrowright} alt="다음" />
                    <span>집중 공부시간</span>
                    <img src={icoArrowright} alt="다음" />
                    <span>휴식</span>
                    <img src={icoArrowright} alt="다음" />
                    <span>마무리</span>
                </p>
                <Link to="/signup_step2" className='btn__next active'>
                    다음
                </Link>
            </div>
        </>
    );
}
export default SignupStep1;
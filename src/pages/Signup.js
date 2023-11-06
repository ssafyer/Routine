import imgBack from '../assets/images/LeftArrow.svg'
import signupVisual from '../assets/images/signup_visual.png'
import icoKakao from '../assets/images/ico_kakao.svg'
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
    const navigate = useNavigate()

    return (
        <>
            <button className="btn__back" onClick={() => navigate(-1)}>
                <img src={imgBack} alt="뒤로가기" />
            </button>
            <div className="page__signup">
                <h1>
                    내일의 나에게 맡기는 거 그만!<br />
                    루틴과 환경으로 변화하는 나
                </h1>
                <h2>루틴을 통해 몰입의 순간을 경험하세요.</h2>

                <img src={signupVisual} alt="회원가입" className='signupVisual' />

                <Link to="/signup_step1" className='btn__kakao'>
                    <img src={icoKakao} alt="kakao" />
                    <span>카카오 계정으로 로그인</span>
                </Link>
                <button className='btn__login__contact'>로그인 문의하기</button>
            </div>
        </>
    );
}
export default Signup;
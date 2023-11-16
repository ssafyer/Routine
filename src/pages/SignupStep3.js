import { Link, useNavigate } from 'react-router-dom';
import imgBack from '../assets/images/LeftArrow.svg'
import { useEffect, useState } from 'react';
import icoArrow from '../assets/images/Arrow.svg'


function SignupStep3() {
    const navigate = useNavigate()
    const [name, setName] = useState('');
    const [gender, setGender] = useState(null); // M, F
    const [age, setAge] = useState(null);
    const [ended, setEnded] = useState(false);
    const [showFakeSelect, setShowFakeSelect] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    const handleName = (e) => {
        setName(e)
    }
    const handleGender = (e) => {
        setGender(e)
    }
    const handleAge = (e) => {
        setAge(e)
        setShowFakeSelect(false)
    }
    const clickFakeSelect = () => {
        setShowFakeSelect(showFakeSelect?false:true)
    }
    const activeEnded = () => {
        handlePopup('show')
    }

    useEffect(() => {
        setEnded(false)
        if(!name) return
        if(!gender) return
        if(!age) return
        setEnded(true)
    }, [name,gender,age]);

    const handlePopup = (param) => {
        if( param == 'hide' ) {
            setShowPopup(false)
        }else{
            setShowPopup(true)
        }
    }


    return (
        <>
            <button className="btn__back" onClick={() => navigate(-1)}>
                <img src={imgBack} alt="뒤로가기" />
            </button>
            <div className="page__signup step3">
                <div className="step__number">
                    <span>1</span>
                    <span>2</span>
                    <span className='active'>3</span>
                </div>

                <div className="formbox name">
                    <h2>이름</h2>
                    <input type="text" className='inputType1 w100' value={name} placeholder='이름을 적어주세요.' onChange={(e) => handleName(e.target.value)} />
                </div>

                <div className="formbox default">
                    <h2>기본 정보</h2>
                    <div className="default__gender">
                        <h3>성별</h3>
                        <div className="radio__wrap">
                            <label className={gender=='F' ? 'inputType1 active':'inputType1'} onClick={() => handleGender('F')}>
                                <input type="radio" name="gender" />
                                <span>여성</span>
                            </label>
                            <label className={gender=='M' ? 'inputType1 active':'inputType1'} onClick={() => handleGender('M')}>
                                <input type="radio" name="gender" />
                                <span>남성</span>
                            </label>
                        </div>
                    </div>

                    <div className="default__age flexBetween">
                        <h3>나이</h3>
                        <div className="fakeSelect__wrap">
                            <button className='fakeSelect' onClick={() => clickFakeSelect()}>
                                <span>{age==null?'나이를 선택해 주세요.':age}</span>
                                <img src={icoArrow} alt="선택" style={showFakeSelect ? {transform:'rotate(180deg)'} : {}} />
                            </button>
                            {
                                showFakeSelect &&
                                <div className="fakeSelect__options" >
                                    <span onClick={() => handleAge('20')}>20</span>
                                    <span onClick={() => handleAge('19')}>19</span>
                                    <span onClick={() => handleAge('18')}>18</span>
                                    <span onClick={() => handleAge('17')}>17</span>
                                    <span onClick={() => handleAge('17')}>17</span>
                                    <span onClick={() => handleAge('17')}>17</span>
                                    <span onClick={() => handleAge('17')}>17</span>
                                    <span onClick={() => handleAge('17')}>17</span>
                                    <span onClick={() => handleAge('17')}>17</span>
                                </div>
                            }
                        </div>
                    </div>
                </div>

                <div className="formbox add">
                    <h2>추가 정보</h2>
                    <div className="add__call flexBetween">
                        <h3>전화번호</h3>
                        <input type="number" className='inputType1' placeholder='필수 아님 (이벤트 헤택 제공용)' />
                    </div>
                    <div className="add__call flexBetween">
                        <h3>이메일</h3>
                        <input type="email" className='inputType1' placeholder='필수 아님 (이벤트 헤택 제공용)' />
                    </div>
                </div>

                {
                    ended==false
                    ? (
                        <Link className='btn__next'>
                            완료
                        </Link>
                    ):(
                        <Link className='btn__next active' onClick={() => activeEnded()}>
                            완료
                        </Link>
                    )
                }

            </div>

            {showPopup &&
                <div className="popup ended">
                    <div className="content">
                        <h3>회원가입이 완료되었습니다.</h3>
                        <p>
                            루텐션을 이용할 수 있어요. 같이 루틴을<br />
                            만들고 실천해볼까요?
                        </p>

                        <div className="btnbox">
                            <Link to="/">메인으로 가기</Link>
                            <Link to="/" className='add'>루틴 추가하기</Link>
                        </div>
                    </div>
                    <div className="bg" onClick={()=> handlePopup('hide')}></div>
                </div>
            }
        </>
    );
}
export default SignupStep3;
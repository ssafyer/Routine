import imgRequest from '../assets/images/img_request.jpg'
import icoBack from '../assets/images/ico_back_white.svg'
import icoCall from '../assets/images/ico_call_gold.svg'
import { useNavigate } from 'react-router-dom'

function Request({setIsRemovePadding}) {
    const navigate = useNavigate()
    setIsRemovePadding(true)

	return (
        <section className="page__request">
            <div className="request__visual">
                <div className="text">
                    <button onClick={() => navigate(-1)}><img src={icoBack} alt="back" /></button>
                    <h2>탄력 순찰 요청</h2>
                </div>
                <img src={imgRequest} alt="request" className='img__request' />
            </div>
            <div className="request__outer">
                <div className="formbox request actionType">
                    <h2>
                        <b className='mainColor'>탄력순찰</b>
                        <span>이 무엇인가요?</span>
                    </h2>
                    <p>
                        그동안 경찰은 각종 범죄·112신고 등 치안 통계를 바탕으로
                        경찰 중심의 순찰시간과 장소를 선정해왔어요.
                    </p>
                    <p>
                        <b className='mainColor'>탄력순찰</b>은 유성구 <b className='mainColor'>시민이 순찰을 희망하는 시간과 장소를
                        선택</b>하면 경찰이 순찰 서비스를 제공하는 새로운 방식이에요.
                    </p>
                </div>

                <div className="h25"></div>

                <div className="formbox request actionType">
                    <h2>
                        이런 상황에 <b className='mainColor'>탄력순찰 요청</b>하면 돼요!
                    </h2>
                    <p>
                    1.  동네 주변 절도 등 범죄 발생 우려로 불안한 지역
                    </p>
                    <p>
                    2. 가로등이 없어 밤길 통행이 불안한 지역
                    </p>
                    <p>
                    3.  우범 청소년이 자주 모여 통행이 불안한 지역
                    </p>
                </div>

                <div className="h25"></div>
                <div className="formbox request actionType">
                    <h2>
                        <b className='mainColor'>탄력순찰 신청 후 어떤 조치</b>가 이루어지나요?
                    </h2>
                    <p>
                    신청자에게 순찰 결과에 대하여 월 1회 이메일 발송
                    </p>
                    <p>
                    정책자문단에게 치안정보 공유를 통해 치안 정책에 반영
                    </p>
                </div>

                <div className="h25"></div>

                <h3>전화로 신청하기</h3>

                <div className="formbox__item2 type2 other">
                    <div className="formbox">
                        <img src={icoCall} alt="call" />
                        <h2>유성 지구대</h2>
                    </div>
                    <div className="formbox">
                        <img src={icoCall} alt="call" />
                        <h2>도룡 지구대</h2>
                    </div>
                    <div className="formbox">
                        <img src={icoCall} alt="call" />
                        <h2>노은 파출소</h2>
                    </div>
                    <div className="formbox">
                        <img src={icoCall} alt="call" />
                        <h2>구즉 파출소</h2>
                    </div>
                    <div className="formbox">
                        <img src={icoCall} alt="call" />
                        <h2>진잠 파출소</h2>
                    </div>
                </div>

                <button className='btn__btm__request'>탄력순찰 신청하기</button>
            </div>
        </section>
    )
}

export default Request;

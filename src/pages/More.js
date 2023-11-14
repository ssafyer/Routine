import NavBar from 'components/navigation/NavBar';
import icoArrowRight from '../assets/images/ico_arr_right_gold.svg'
import icoCustomer from '../assets/images/ico_customer.svg'
import icoInstagram from '../assets/images/ico_instagram.svg'
import icoEvent1 from '../assets/images/ico_event1.svg'
import icoEvent2 from '../assets/images/ico_event2.svg'
import icoSafe1 from '../assets/images/ico_safe1.svg'
import icoSafe2 from '../assets/images/ico_safe2.svg'
import icoSafe3 from '../assets/images/ico_safe3.svg'
import icoSetting from '../assets/images/ico_setting.svg'
import icoCopy from '../assets/images/copy_mini.svg'


function More() {

	return (
        <section className="page__more">
			<h2>더보기</h2>
			<div className="formbox actionType summary userinfo">
				<div className="flexBetween top">
					<h3>회원 정보</h3>
					<button><img src={icoSetting} alt="img" /></button>
				</div>
				<p className="name">0000님</p>
				<div className="id__copy">
					<span>ID : 0000000</span>
					<button><img src={icoCopy} alt="copy" /></button>
				</div>

			</div>

			<div className="h25"></div>

			<div className="formbox actionType summary userinfo">
				<div className="flexBetween top">
					<h3>루틴 요약</h3>
				</div>
				<h3 className="userinfo__title">
					<span>로그인 / 회원가입 후 이용 가능합니다.</span>
					<img src={icoArrowRight} alt="arrow" />
				</h3>
				<div className="userinfo__subtext">루틴을 통해 몰입의 순간을 경험하세요.</div>
			</div>
			<div className="formbox__item2 type2">
				<div className="formbox">
					<img src={icoCustomer} alt="img" />
					<h2>고객센터</h2>
				</div>
				<div className="formbox">
					<img src={icoInstagram} alt="img" />
					<h2>인스타그램</h2>
				</div>
			</div>

			<div className="h25"></div>

			<div className="formbox eventsafe">
				<h2>이벤트</h2>
				<ul>
					<li>
						<img src={icoEvent1} alt="event" />
						<p>
							<b className='mainColor'>10만원 증정)</b>
							<span>서비스의 새 이름을 지어주세요!</span>
						</p>
					</li>
					<li>
						<img src={icoEvent2} alt="event" />
						<p>
							<span>미라클데이 갓생챌린지 커뮤니티 입장하기</span>
						</p>
					</li>
				</ul>
			</div>

			<div className="h25"></div>

			<div className="formbox eventsafe">
				<h2>지역과 안전</h2>
				<ul>
					<li>
						<img src={icoSafe1} alt="safe" />
						<p>
							<span>재난에 대한 생활 속</span>
							<b className='mainColor'>안전 진단</b>
							<span>및 교육</span>
						</p>
					</li>
					<li>
						<img src={icoSafe2} alt="safe" />
						<p>
							<span>유성구</span>
							<b className='mainColor'>탄력 순찰 요청</b>
						</p>
					</li>
					<li>
						<img src={icoSafe3} alt="safe" />
						<p>
							<b className='mainColor'>마음이 불편하신가요?</b>
							<span> 우리 지역 마음 건강 센터</span>
						</p>
					</li>
				</ul>
			</div>

			<NavBar />
        </section>
    )
}

export default More;

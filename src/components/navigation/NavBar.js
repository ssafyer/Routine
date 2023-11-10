import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { NAV_DAILY, NAV_MAIN, NAV_MORE, NAV_RECOM } from '../../assets/images';
import { PLUS } from '../../assets/images';
import { ACTION, ROUTINE, TARGET } from '../../assets/images';
import WithTextButton from 'components/button/WithTextButton';
import icoArrow from '../../assets/images/Arrow.svg'

const actionAddData = [
	'아침 기상',
	'오전 업무',
	'오후 업무',
	'+ 루틴 선택하기',
]

const NavBar = () => {
	const userId = useSelector((state) => {
		return state.user.value.userId;
	});
	const path = useLocation().pathname;
	const navigate = useNavigate();
	const [isClickPlus, setIsClickPlus] = useState(false);
	const [activePlusPopup, setActivePlusPopup] = useState(false);
	const [showFakeSelect, setShowFakeSelect] = useState(false);
	const [actionAdd, setActionAdd] = useState(actionAddData[0]);

    const handleFakeSelectOption = (item) => {
		setActionAdd(item)
        setShowFakeSelect(false)
    }

	const AddSelectModalClick = () => {
		setIsClickPlus(false)
		setActivePlusPopup(true)
	}

	return (
		<>
			{/* AddSelectModal */}
			{isClickPlus && (
				<div className='AddSelectModal' onClick={() => setIsClickPlus(false)}>
					<div className='inner'>
						<WithTextButton idx={0} icon={TARGET} name="목표" xco="-230%" yco="-80%" top="2px" left="5px" />
						<WithTextButton idx={1} icon={ROUTINE} name="루틴" xco="-50%" yco="-160%" top="-4px" left="7px" />
						<WithTextButton idx={2} icon={ACTION} name="행동" xco="130%" yco="-80%" onClick={AddSelectModalClick} />
						<button className='plusbutton'
							onClick={() => setIsClickPlus(isClickPlus?false:true)}
							style={{ transform: `translate(-50%, 0) rotate(${isClickPlus ? '45deg' : '0'})`}}
						>
							<img src={PLUS} alt="plus" />
						</button>
					</div>
				</div>
			)}

			{/* AddActionModal */}
			{activePlusPopup &&
				<>
					<div className='AddActionModal'>
						<h2>행동 추가</h2>
						<p>행동을 추가할 루틴을 선택해주세요.</p>

						<div className="fakeSelect__wrap mainNavbar">
							<button className='fakeSelect' onClick={() => setShowFakeSelect(showFakeSelect?false:true)}>
								<span>{actionAdd?actionAdd:'루틴 선택하기'}</span>
								<img src={icoArrow} alt="선택" style={showFakeSelect ? {transform:'rotate(180deg)'} : {}} />
							</button>
							{
								showFakeSelect &&
								<div className="fakeSelect__options">
									{
										actionAddData.map((item, index) =>
											<span key={index} className={index==3?'mainColor':''} onClick={() => handleFakeSelectOption(item)}>{item}</span>
										)
									}
								</div>
							}
						</div>

						<button className='mainColor addNew'>새 루틴 만들기</button>
					</div>
					<div className="AddActionModal__bg" onClick={() => setActivePlusPopup(false)}></div>
				</>
			}

			{/* navbar */}
			<div className='navbar'>
				<div className='navbar__inner'>
					<NAV_MAIN color={path === '/' ? '#575757' : '#ADADAD'} onClick={() => navigate('/')} />
					<NAV_RECOM
						color={path === '/recommend' ? '#575757' : '#ADADAD'}
						onClick={() => navigate('/recommend')}
					/>
				</div>
				<button className={isClickPlus?'button__add active':'button__add'} onClick={() => setIsClickPlus(isClickPlus?false:true)}>
					<img src={PLUS} width={40} height={40} />
				</button>
				<div className='navbar__inner'>
					<NAV_DAILY
						color={path === '/daily' ? '#575757' : '#ADADAD'}
						onClick={() => {
							if (userId !== '') {
								navigate('/');
							} else {
								navigate('/login');
							}
						}}
					/>
					<NAV_MORE
						color={path === '/more' ? '#575757' : '#ADADAD'}
						onClick={() => navigate('/more')}
					/>
				</div>
			</div>
		</>
	);
};
export default NavBar;

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { LOGO } from 'assets/images';
import NavBar from 'components/navigation/NavBar';
import icoArrow from '../assets/images/Arrow.svg'
import icoArrowRight from '../assets/images/ico_arrow_right.svg'


const DUMMY_DATA = [
	{
		id: 1,
		name: '아침 기상',
		time: '오전 7:00 - 오전 8:00',
		days: ['월', '화', '수', '목', '금'],
		complete: true,
		pass: false,
		alarm: true,
		timer: true,
		concentrate: false,
	},
	{
		id: 2,
		name: '오전 업무',
		time: '오전 9:00 - 오전 11:55',
		days: ['월', '화', '수', '목', '금'],
		complete: false,
		pass: true,
		alarm: true,
		timer: true,
		concentrate: true,
	},
	{
		id: 3,
		name: '오후 업무',
		time: '오후 1:00 - 오후 5:55',
		days: ['월', '화', '수', '목', '금'],
		complete: false,
		pass: true,
		alarm: false,
		timer: true,
		concentrate: true,
	},
	{
		id: 4,
		name: '테스트',
		time: '오후 1:00 - 오후 5:55',
		days: ['월', '화', '수', '목', '금'],
		complete: false,
		pass: false,
		alarm: false,
		timer: true,
		concentrate: true,
	},
];

const selectValueData = [
	'오늘',
	'전체',
]


function MainNoneList() {
    const userId = useSelector((state) => {
		return state.user.value.userId;
	});
	const [routineList, setRoutineList] = useState([]);
	const [selectValue, setSelectValue] = useState('오늘');
	const [showFakeSelect, setShowFakeSelect] = useState(false);

    const clickFakeSelect = () => setShowFakeSelect(showFakeSelect?false:true)
    const handleFakeSelectOption = (item) => {
        setShowFakeSelect(false)
    }

	useEffect(() => {
		setRoutineList(DUMMY_DATA);
	}, []);


	return (
        <section className="page__main">
            <header className='main__header'>
                <img src={LOGO} className='header__logo' />
                <div className='flexDiv inner topSideButton'>
                    <button>튜토리얼</button>
                    <div className="fakeSelect__wrap">
						<button className='fakeSelect' onClick={() => clickFakeSelect()}>
							<span>{selectValue}</span>
							<img src={icoArrow} alt="선택" style={showFakeSelect ? {transform:'rotate(180deg)'} : {}} />
						</button>
						{
							showFakeSelect &&
							<div className="fakeSelect__options">
								{
									selectValueData.map((item, index) =>
										<span key={index} onClick={() => handleFakeSelectOption(item)}>{item}</span>
									)
								}
							</div>
						}
					</div>
                </div>
            </header>

			{/* main__none__list */}
			<div className="main__none__list">
				<div className="box">
					<div className="left">
						<i className="icon"></i>
					</div>
					<div className="right">
						<div className="text__slogan">
							슬로건이 들어갑니다(첫줄)
						</div>
						<div className="text__slogan">
							슬로건이 들어갑니다(첫줄)
						</div>
						<button className="btn__add__routine">
							<span>루틴 추가하기</span>
							<img src={icoArrowRight} alt="arrow" />
						</button>
					</div>
				</div>

				<div className="box">
					<div className="left">
						<i className="icon"></i>
					</div>
					<div className="right">
						<div className="text__slogan">
							슬로건이 들어갑니다(첫줄)
						</div>
						<div className="text__slogan">
							슬로건이 들어갑니다(첫줄)
						</div>
						<button className="btn__add__routine">
							<span>루틴 추가하기</span>
							<img src={icoArrowRight} alt="arrow" />
						</button>
					</div>
				</div>
			</div>{/* // main__none__list */}

			<NavBar />
        </section>
    )
}

export default MainNoneList;

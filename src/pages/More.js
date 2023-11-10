import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { LOGO } from 'assets/images';
import NavBar from 'components/navigation/NavBar';
import icoArrow from '../assets/images/Arrow.svg'


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


function More() {
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
			<NavBar />
        </section>
    )
}

export default More;

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { LOGO } from 'assets/images';
import NavBar from 'components/navigation/NavBar';
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


function Main() {
    const userId = useSelector((state) => {
		return state.user.value.userId;
	});
	const [routineList, setRoutineList] = useState([]);
	const [selected, setSelected] = useState('오늘');

	useEffect(() => {
		setRoutineList(DUMMY_DATA);
	}, []);
	return (
        <section className="page__main">
            <header className='main__header'>
                <img src={LOGO} className='header__logo' />
                <div className='FlexDiv inner'>
                    <button>튜토리얼</button>
                    <div>오늘</div>
                </div>
            </header>
			{/* <NavBar /> */}
        </section>
    )
}

export default Main;

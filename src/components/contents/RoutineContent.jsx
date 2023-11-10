import { ACTIVE_PASS, ALARM, CHECK, CONCENTRATE, MORE, TIMER } from 'assets/images';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RoutineContent = ({ routine, selectedDay }) => {
	const [open, setOpen] = useState({ more: false, delete: false, snack: false });
	const [snackMessage, setSnackMessage] = useState('');

	const navigate = useNavigate();

	const choiceItem = (id, value) => {
		setOpen(false);
		if (value === 'setting') {
			navigate(`routine/${id}`);
			return;
		} else if (value === 'copy') {
			// 복사하기
			setSnackMessage('선택하신 루틴이 복사되었습니다.');
		} else if (value === 'delete') {
			setOpen((prevValue) => ({ ...prevValue, delete: true }));
			return;
		} else if (value === 'passOn') {
			//패스하기
			setSnackMessage('선택하신 루틴을 오늘 패스합니다.');
		} else if (value === 'passOff') {
			//패스 해제
			setSnackMessage('선택하신 루틴을 오늘 진행합니다.');
		} else if (value === 'alarmOn') {
			//알림 켜기
			setSnackMessage('선택하신 루틴의 알림을 켰습니다.');
		} else {
			// 알림 끄기
			setSnackMessage('선택하신 루틴의 알림을 껐습니다.');
		}
		setOpen((prevValue) => ({ ...prevValue, snack: true }));
	};

	const deleteRoutine = (id) => {
		// 삭제하기
		console.log(id)
		setSnackMessage('선택하신 루틴이 삭제되었습니다.')
		setOpen((prevValue) => ({ ...prevValue, delete: false, snack: true }))
	};

	return (
		<div className='RoutineContentWrap'>
			<div className='flexBetween'>
				<div className='flexBetween'>
					<h3 className='title'>
						{routine.name}
					</h3>
					{(routine.complete || routine.pass) && (
						<img src={routine.complete ? CHECK : ACTIVE_PASS} />
					)}
				</div>
				<img
					src={MORE}
					onClick={() => setOpen((prevValue) => ({ ...prevValue, more: true }))}
					style={{ cursor: 'pointer' }}
				/>
			</div>
			<p className='text__date' style={{ marginBottom: '16px', fontWeight:'400', fontSize:14 }}>
				{routine.time}
			</p>
			<div style={{ height: '24px', justifyContent: 'space-between' }}>
				<div className='routine__day__outer'>
					{routine.days.map((day, i) => (
						<div className='routine__day' key={i}>
							<span className={day === selectedDay?'active':''}>{day}</span>
						</div>
					))}
				</div>
				<div>
					<ALARM color={routine.alarm ?true:false} />
					<TIMER color={routine.timer ?true:false} />
					<CONCENTRATE color={routine.concentrate ?true:false} />
				</div>
			</div>
			{/* {open.more && (
				<MoreModal
					id={routine.id}
					pass={routine.pass}
					alarm={routine.alarm}
					closeModal={() => setOpen(false)}
					choice={choiceItem}
				/>
			)}
			{open.snack && (
				<SnackBar
					message={snackMessage}
					setSnack={() => {
						setOpen((prevValue) => ({ ...prevValue, snack: false }));
						setSnackMessage('');
					}}
				/>
			)}
			{open.delete && (
				<DeleteModal
					id={routine.id}
					closeModal={() => setOpen((prevValue) => ({ ...prevValue, delete: false }))}
					deleteRoutine={deleteRoutine}
				/>
			)} */}
		</div>
	);
};
export default RoutineContent;

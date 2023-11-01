import { ACTIVE_PASS, ALARM, CHECK, CONCENTRATE, MORE, TIMER } from 'assets/images';
import { FlexDiv } from 'components/div/Div';
import { Icon } from 'components/icon';
import { DeleteModal, MoreModal } from 'components/modal';
import { Text } from 'components/text';
import { MAIN_COLOR1, TEXT_COLOR2, TEXT_COLOR3 } from 'constants/color';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { SnackBar } from '.';

const ContentDiv = styled.div`
	width: 100%;
	height: auto;
	border-radius: 16px;
	box-sizing: border-box;
	padding: 16px 12px 22px;
	margin-bottom: 24px;
	box-shadow: 0 2px 4px 1px rgba(0, 0, 0, 0.25);
	position: relative;
`;

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
		console.log(id);
		setSnackMessage('선택하신 루틴이 삭제되었습니다.');
		setOpen((prevValue) => ({ ...prevValue, delete: false, snack: true }));
	};

	return (
		<ContentDiv>
			<FlexDiv style={{ height: '24px', marginBottom: '8px', justifyContent: 'space-between' }}>
				<FlexDiv>
					<Text tag="MEDIUM20_FONT" paragraph={routine.name} style={{ marginRight: '4px' }} />
					{(routine.complete || routine.pass) && (
						<Icon src={routine.complete ? CHECK : ACTIVE_PASS} color={MAIN_COLOR1} />
					)}
				</FlexDiv>
				<Icon
					src={MORE}
					onClick={() => setOpen((prevValue) => ({ ...prevValue, more: true }))}
					style={{ cursor: 'pointer' }}
				/>
			</FlexDiv>
			<Text
				tag="REGULAR14_FONT"
				paragraph={routine.time}
				color={TEXT_COLOR2}
				style={{ marginBottom: '16px' }}
			/>
			<FlexDiv style={{ height: '24px', justifyContent: 'space-between' }}>
				<FlexDiv>
					{routine.days.map((day, i) => (
						<Text
							width={20}
							height={20}
							key={i}
							tag="MEDIUM12_FONT"
							color={day === selectedDay ? MAIN_COLOR1 : TEXT_COLOR3}
							paragraph={day}
							style={{
								border: `1px solid ${TEXT_COLOR3}`,
								marginRight: '4px',
								borderRadius: '10px',
								textAlign: 'center',
								...(day === selectedDay ? { border: `1px solid ${MAIN_COLOR1}` } : {}),
							}}
						/>
					))}
				</FlexDiv>
				<FlexDiv>
					<ALARM color={routine.alarm ? MAIN_COLOR1 : TEXT_COLOR3} />
					<TIMER color={routine.timer ? MAIN_COLOR1 : TEXT_COLOR3} />
					<CONCENTRATE color={routine.concentrate ? MAIN_COLOR1 : TEXT_COLOR3} />
				</FlexDiv>
			</FlexDiv>
			{open.more && (
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
			)}
		</ContentDiv>
	);
};
export default RoutineContent;

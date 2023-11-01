import { DimDiv } from 'components/div/Div';
import { RoutineSelect } from 'components/select';
import { Text } from 'components/text';
import { MAIN_COLOR1, TEXT_COLOR2 } from 'constants/color';
import styled from 'styled-components';

const ModalDiv = styled.div`
	width: 296px;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: white;
	border-radius: 16px;
	z-index: 101;
	display: flex;
	flex-direction: column;
	align-items: center;
	box-sizing: border-box;
	padding: 32px 24px;
`;

const DUMMY = [
	{
		id: 1,
		name: '아침 기상',
	},
	{
		id: 2,
		name: '오전 업무',
	},
	{
		id: 3,
		name: '오후 업무',
	},
];

const AddActionModal = ({ onClick, selectAction }) => {
	return (
		<>
			<DimDiv onClick={onClick} />
			<ModalDiv>
				<Text tag="BOLD22_FONT" paragraph="행동 추가" style={{ marginBottom: '16px' }} />
				<Text
					color={TEXT_COLOR2}
					tag="MEDIUM16_FONT"
					paragraph="행동을 추가할 루틴을 선택해주세요."
					style={{ marginBottom: '24px' }}
				/>
				<RoutineSelect options={DUMMY} />
				<Text
					color={MAIN_COLOR1}
					tag="BOLD18_FONT"
					paragraph="새 루틴 만들기"
					style={{ marginTop: '32px', cursor: 'pointer' }}
				/>
			</ModalDiv>
		</>
	);
};

export default AddActionModal;

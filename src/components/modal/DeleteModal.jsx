import { DimDiv, FlexDiv } from 'components/div/Div';
import { Text } from 'components/text';
import { ERROR_COLOR, MAIN_COLOR1, TEXT_COLOR2, TEXT_COLOR3 } from 'constants/color';
import styled from 'styled-components';

const ModalDiv = styled.div`
	width: 296px;
	box-sizing: border-box;
	padding: 32px 0;
	border-radius: 16px;
	background: white;
	display: flex;
	flex-direction: column;
	align-items: center;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 999;
`;

const DeleteModal = ({ id, closeModal, deleteRoutine }) => {
	return (
		<>
			<DimDiv onClick={closeModal} />
			<ModalDiv>
				<Text tag="BOLD22_FONT" color={MAIN_COLOR1} paragraph="루틴을 삭제하시겠습니까?" />
				<Text
					tag="BOLD16_FONT"
					color={TEXT_COLOR2}
					paragraph="한번 삭제된 루틴은 복구할 수 없습니다."
					style={{ margin: '16px 0 40px' }}
				/>
				<FlexDiv>
					<Text
						tag="BOLD16_FONT"
						color={TEXT_COLOR3}
						paragraph="취소하기"
						style={{ marginRight: '56px' }}
						onClick={closeModal}
					/>
					<Text
						tag="BOLD16_FONT"
						color={ERROR_COLOR}
						paragraph="삭제하기"
						onClick={() => deleteRoutine(id)}
					/>
				</FlexDiv>
			</ModalDiv>
		</>
	);
};

export default DeleteModal;

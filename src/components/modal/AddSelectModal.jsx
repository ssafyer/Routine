import { ACTION, ROUTINE, TARGET } from 'assets/images';
import { AddButton, WithTextButton } from 'components/button';
import { DimDiv } from 'components/div/Div';
import styled from 'styled-components';

const ModalDiv = styled.div`
	width: 100%;
	min-width: 320px;
	max-width: 480px;
	height: 100vh;
	overflow-x: hidden;
	margin: auto;
	position: relative;
`;

const AddSelectModal = ({ open, onClick, addAction }) => {
	return (
		<>
			<DimDiv onClick={onClick}>
				<ModalDiv>
					<WithTextButton icon={TARGET} name="목표" xco="-230%" yco="-80%" top="2px" left="5px" />
					<WithTextButton icon={ROUTINE} name="루틴" xco="-50%" yco="-160%" top="-4px" left="7px" />
					<WithTextButton icon={ACTION} name="행동" xco="130%" yco="-80%" onClick={addAction} />
					<AddButton open={open} setOpen={onClick} />
				</ModalDiv>
			</DimDiv>
		</>
	);
};

export default AddSelectModal;

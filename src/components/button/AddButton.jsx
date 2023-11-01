import { PLUS } from 'assets/images';
import { Icon } from 'components/icon';
import { MAIN_COLOR1 } from 'constants/color';
import styled from 'styled-components';

const Plusbutton = styled.div`
	width: 60px;
	height: 60px;
	z-index: 101;
	background-color: ${MAIN_COLOR1};
	border-radius: 30px;
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.25);
	position: fixed;
	bottom: 32px;
	left: 50%;
	transition: transform 0.3s;
	cursor: pointer;
`;

const AddButton = ({ open, setOpen }) => {
	return (
		<Plusbutton
			onClick={() => setOpen(true)}
			style={{ transform: `translate(-50%, 0) rotate(${open ? '45deg' : '0'})` }}
		>
			<Icon src={PLUS} width={40} height={40} />
		</Plusbutton>
	);
};

export default AddButton;

import { Icon } from 'components/icon';
import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, 0);
  }
  to {
    opacity: 1;
    transform: translate(var(--xco), var(--yco));
  }
`;

const AnimatedBox = styled.div`
	text-align: center;
	color: white;
	font-size: 14px;
	font-family: BoldFont;
	position: absolute;
	bottom: 32px;
	left: 50%;
	transform: translate(-50%, 0);
	cursor: pointer;
	opacity: 0; // 초기에 숨김
	animation: ${slideIn} 0.3s ease-in-out forwards;
	--xco: ${({ xco }) => xco}; // Initialize the CSS variable for xco
	--yco: ${({ yco }) => yco}; // Initialize the CSS variable for yco
`;

const IconBack = styled.div`
	width: 74px;
	height: 74px;
	background: white;
	border-radius: 40px;
	margin-bottom: 8px;
	position: relative;
`;

const WithTextButton = ({ icon, name, xco, yco, top = 0, left = 0, ...props }) => {
	return (
		<AnimatedBox xco={xco} yco={yco} {...props}>
			<IconBack>
				<Icon
					src={icon}
					width={74}
					height={74}
					style={{
						position: 'absolute',
						top: top,
						left: left,
					}}
				/>
			</IconBack>
			{name}
		</AnimatedBox>
	);
};

export default WithTextButton;

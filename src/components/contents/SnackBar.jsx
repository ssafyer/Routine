import { MAIN_COLOR1 } from 'constants/color';
import { useEffect } from 'react';
import styled from 'styled-components';

const SnackDiv = styled.div`
	width: 220px;
	text-align: center;
	padding: 10px 0;
	border-radius: 20px;
	background: ${MAIN_COLOR1};
	color: white;
	position: fixed;
	bottom: 232px;
	left: 50%;
	transform: translateX(-50%);
	font-size: 14px;
	font-family: 'BoldFont';
	line-height: 20px;
	z-index: 999;
`;

const SnackBar = ({ message, setSnack }) => {
	useEffect(() => {
		const timer = setTimeout(() => {
			setSnack(false);
		}, 3000);
		return () => {
			clearTimeout(timer);
		};
	}, [setSnack]);
	return <SnackDiv>{message}</SnackDiv>;
};

export default SnackBar;

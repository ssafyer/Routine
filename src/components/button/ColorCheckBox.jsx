import styled from 'styled-components';
import { MAIN_COLOR1, TEXT_COLOR1 } from 'constants/color';
import { fonts } from 'constants/font';

const StyledDiv = styled.div`
	display: inline-block;
	${({ $columnspace }) => `
		margin: ${$columnspace}px 0;
	`}
	line-height: 16px;
`;

const StyledLabel = styled.label`
	cursor: pointer;
	display: flex;
	margin-right: 16px;
	color: ${TEXT_COLOR1};
	svg {
		width: 16px;
		height: 16px;
		margin-right: 4px;
	}
	font-size: ${fonts.REGULAR14_FONT.fontSize};
	font-family: ${fonts.REGULAR14_FONT.fontFamily};
`;

const StyledCheckBox = styled.input`
	position: relative;
	display: none;

	cursor: pointer;
`;

const ColorCheckBox = ({ id, name, value, columnSpace, onClick, ...props }) => {
	return (
		<StyledDiv $columnspace={columnSpace} {...props}>
			<StyledCheckBox type="checkbox" id={id} onClick={() => onClick(value)} />
			<StyledLabel htmlFor={id}>
				{value ? (
					<svg
						width="16"
						height="16"
						viewBox="0 0 16 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M6.75556 11.7333L13.0222 5.46667L11.7778 4.22222L6.75556 9.24444L4.22222 6.71111L2.97778 7.95556L6.75556 11.7333ZM1.77778 16C1.28889 16 0.870223 15.8258 0.521779 15.4773C0.173335 15.1289 -0.000591083 14.7105 1.50915e-06 14.2222V1.77778C1.50915e-06 1.28889 0.174224 0.870223 0.522668 0.521779C0.871113 0.173335 1.28948 -0.000591083 1.77778 1.50915e-06H14.2222C14.7111 1.50915e-06 15.1298 0.174224 15.4782 0.522668C15.8267 0.871113 16.0006 1.28948 16 1.77778V14.2222C16 14.7111 15.8258 15.1298 15.4773 15.4782C15.1289 15.8267 14.7105 16.0006 14.2222 16H1.77778Z"
							fill={MAIN_COLOR1}
						/>
						<path
							d="M6.75556 11.7333L13.0222 5.46667L11.7778 4.22222L6.75556 9.24444L4.22222 6.71111L2.97778 7.95556L6.75556 11.7333Z"
							fill="white"
						/>
					</svg>
				) : (
					<svg
						width="16"
						height="16"
						viewBox="0 0 16 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M1.77778 16C1.28889 16 0.870223 15.8258 0.521779 15.4773C0.173335 15.1289 -0.000591083 14.7105 1.50915e-06 14.2222V1.77778C1.50915e-06 1.28889 0.174224 0.870223 0.522668 0.521779C0.871112 0.173335 1.28948 -0.000591083 1.77778 1.50915e-06H14.2222C14.7111 1.50915e-06 15.1298 0.174224 15.4782 0.522668C15.8267 0.871112 16.0006 1.28948 16 1.77778V14.2222C16 14.7111 15.8258 15.1298 15.4773 15.4782C15.1289 15.8267 14.7105 16.0006 14.2222 16H1.77778ZM1.77778 14.2222H14.2222V1.77778H1.77778V14.2222Z"
							fill="black"
						/>
					</svg>
				)}
				{name}
			</StyledLabel>
		</StyledDiv>
	);
};
export default ColorCheckBox;

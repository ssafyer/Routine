import { fonts } from 'constants/font';
import styled from 'styled-components';

const Label = styled.label`
	position: relative;
	height: ${({ height }) => height || '100%'};
	padding-left: 25px;
	display: flex;
	align-items: center;
	line-height: normal;
	font-family: ${fonts.MEDIUM14_FONT.fontFamily};
	font-size: ${fonts.MEDIUM14_FONT.fontSize};
	white-space: nowrap;
	cursor: pointer;
	margin-right: 16px;
`;

const RadioButton = ({ id, selected, height, value, children, text, onChange, ...props }) => {
	return (
		<Label htmlFor={id} height={height} {...props}>
			<input
				id={id}
				type="radio"
				data-value={text}
				value={value}
				checked={selected === text}
				onChange={onChange}
			/>
			<span className="on" />
			{children || text}
		</Label>
	);
};
export default RadioButton;

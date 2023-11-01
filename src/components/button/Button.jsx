import styled from 'styled-components';

import { Icon } from 'components/icon';

const ButtonText = styled.p`
	display: inline-block;
	margin: 0;
	white-space: nowrap;
	padding: 0;
`;

const Button = ({ id, theme, text, img, iconSize, iconAlt, onClick, disabled, ...props }) => {
	return (
		<button
			data-id={id}
			style={
				disabled ? { ...theme, ...props.style } : { ...theme, ...props.style, cursor: 'pointer' }
			}
			onClick={onClick}
			disabled={disabled}
		>
			{img && (
				<Icon
					src={img}
					width={iconSize}
					height={iconSize}
					alt={iconAlt}
					style={{ marginRight: '2px' }}
				/>
			)}
			<ButtonText>{text}</ButtonText>
		</button>
	);
};

export default Button;

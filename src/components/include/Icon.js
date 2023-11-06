import styled from 'styled-components';

const IconImg = styled.img`
	width: ${({ width }) => (typeof width === 'string' ? width : width + 'px')};
	height: ${({ height }) => (typeof height === 'string' ? height : height + 'px')};
	${({ $color }) => ($color ? `filter: invert(1) hue-rotate(${$color});` : '')}
	display: inline-block;
	margin: 0;
	${({ $flipped }) => $flipped && 'transform: rotate(180deg);'}
`;

const Icon = ({
	src,
	width = 19,
	height = 24,
	alt = 'icon',
	onClick = null,
	flipped = false,
	color,
	...props
}) => {
	return (
		<img
			src={src}
			width={width}
			height={height}
			alt={alt}
			onClick={onClick}
			$flipped={flipped}
			$color={color}
			{...props}
		/>
	);
};

export default Icon;

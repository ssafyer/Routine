import styled from 'styled-components';
import PropTypes from 'prop-types';
import { fonts } from 'constants/font';
import { TEXT_COLOR1 } from 'constants/color';

const StyledP = styled.p`
	box-sizing: border-box;
	margin: 0;
	width: ${({ width }) => (typeof width === 'string' ? width : width ? `${width}px` : 'auto')};
	height: ${({ height }) =>
		typeof height === 'string' ? height : height ? `${height}px` : 'auto'};
	${({ $tag }) =>
		$tag &&
		`
		font-family: ${$tag.fontFamily};
		font-size: ${$tag.fontSize};
		line-height: ${$tag.lineHeight};
	`}
	${({ $color }) =>
		$color &&
		`
		color: ${$color};
	`}
	${({ $lineheight }) =>
		$lineheight &&
		`
		line-height: ${$lineheight}px;
	`}
	${({ $underline }) =>
		$underline &&
		`
		text-decoration: underline;
	`}
	${({ $ellipsis }) => $ellipsis && 'overflow: hidden; text-overflow: ellipsis;'}
	${({ $whitespace }) => $whitespace && 'white-space: pre-wrap;'}
	${({ $letterspacing }) =>
		$letterspacing &&
		(typeof $letterspacing === 'string'
			? `letter-spacing: ${$letterspacing};`
			: `letter-spacing: ${$letterspacing}px`)}
`;

const Text = ({
	width,
	height,
	color = TEXT_COLOR1,
	tag,
	paragraph,
	center,
	lineheight,
	letterspacing,
	underline,
	children,
	ellipsis,
	whitespace,
	...props
}) => {
	const font = fonts[tag];

	return (
		<StyledP
			width={width}
			height={height}
			$tag={font}
			$color={color}
			$lineheight={lineheight}
			$underline={underline}
			$ellipsis={ellipsis}
			$whitespace={whitespace}
			$letterspacing={letterspacing}
			{...props}
		>
			{children}
			{paragraph}
		</StyledP>
	);
};

Text.propTypes = {
	tag: PropTypes.string.isRequired,
	paragraph: PropTypes.string.isRequired,
};

export default Text;

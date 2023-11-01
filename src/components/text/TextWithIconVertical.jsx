import Icon from 'components/icon/Icon';
import styled from 'styled-components';
import Text from 'components/text/Text';

const TextDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	cursor: pointer;
`;

const TextWithIconVertical = ({
	src,
	size,
	content,
	textWidth,
	textHeight,
	tag,
	lineheight,
	marge,
	color,
	...props
}) => {
	return (
		<TextDiv {...props}>
			<Icon
				src={src}
				width={size}
				height={size}
				alt={content}
				color={color}
				style={{ marginBottom: marge }}
			/>
			<Text
				width={textWidth}
				height={textHeight}
				tag={tag}
				paragraph={content}
				lineheight={lineheight}
				color={color}
			/>
		</TextDiv>
	);
};

export default TextWithIconVertical;

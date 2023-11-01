import { useState } from 'react';
import styled from 'styled-components';
import { ARROW } from 'assets/images';
import Icon from 'components/icon/Icon';
import { BACK_COLOR2, BACK_COLOR4, MAIN_COLOR1, TEXT_COLOR4 } from 'constants/color';
import Text from 'components/text/Text';

const Selectbox = styled.div`
	width: ${({ width }) => (typeof width === 'string' ? width : width ? `${width}px` : 'auto')};
	box-sizing: border-box;
	position: relative;
	cursor: pointer;
`;

const SelectedLabel = styled.div`
	box-sizing: border-box;
	height: 32px;
	padding: ${({ $shape }) => ($shape ? '0 8px' : '0 12px')};
	border-radius: ${({ $shape }) => ($shape ? '8px' : '16px')};
	display: flex;
	align-items: center;
	justify-content: space-between;
	cursor: pointer;
	background: ${({ $shape }) => ($shape ? BACK_COLOR2 : BACK_COLOR4)};
	box-shadow: ${({ $shape }) => ($shape ? 'none' : `0 0 8px 1px rgba(0, 0, 0, 0.25)`)};
`;

const OptionList = styled.div`
	width: 100%;
	position: absolute;
	top: ${({ $shape }) => ($shape ? 'calc(100% + 8px)' : 'calc(100% + 16px)')};
	border-radius: ${({ $shape }) => ($shape ? '8px' : '16px')};
	padding: ${({ $shape }) => ($shape ? '8px' : '16px 12px')};
	box-sizing: border-box;
	background: ${BACK_COLOR4};
	z-index: 999;
	transition: 0.2s ease-in-out;
	box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.25);
`;

const OptionItem = styled.div`
	height: 24px;
	display: flex;
	align-items: center;
	&:hover {
		background: ${MAIN_COLOR1};
	}
`;

const Select = ({
	width,
	height,
	shape = false,
	color = TEXT_COLOR4,
	tag = 'BOLD14_FONT',
	options,
	selected,
	changeSelect,
}) => {
	const [active, setActive] = useState(false);
	const selectItem = (fil) => {
		if (fil !== selected) {
			changeSelect(fil);
		}
	};

	return (
		<Selectbox width={width} onClick={() => setActive(!active)}>
			<SelectedLabel value={selected} height={height} $shape={shape}>
				<Text tag={tag} paragraph={selected} color={color} />
				<Icon src={ARROW} flipped={active} />
			</SelectedLabel>
			{active && (
				<OptionList $shape={shape}>
					{options.map((option, i) => (
						<OptionItem key={i} onClick={() => selectItem(option)}>
							<Text tag="BOLD16_FONT" paragraph={option} />
						</OptionItem>
					))}
				</OptionList>
			)}
		</Selectbox>
	);
};

export default Select;

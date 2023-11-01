import { useState } from 'react';
import styled from 'styled-components';
import { ARROW, COLOR_PLUS } from 'assets/images';
import Icon from 'components/icon/Icon';
import { BACK_COLOR3, MAIN_COLOR1, TEXT_COLOR2 } from 'constants/color';
import Text from 'components/text/Text';

const Selectbox = styled.div`
	width: 100%;
	position: relative;
	cursor: pointer;
`;

const SelectedLabel = styled.div`
	box-sizing: border-box;
	height: 52px;
	padding: 14px 12px;
	border-radius: 16px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: ${BACK_COLOR3};
`;

const OptionList = styled.div`
	width: 100%;
	box-sizing: border-box;
	padding: 8px 0;
	position: absolute;
	top: calc(100% + 16px);
	border-radius: 16px;
	background: white;
	transition: 0.3s ease-in-out;
	box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.25);
`;

const OptionItem = styled.div`
	height: 19px;
	padding: 8px 12px;
	margin-bottom: 16px;
	display: flex;
	align-items: center;
	&:hover {
		background: ${BACK_COLOR3};
	}
`;

const Select = ({ options }) => {
	const [active, setActive] = useState(false);
	const selectItem = (fil) => {
		console.log(fil);
	};

	return (
		<Selectbox onClick={() => setActive(!active)}>
			<SelectedLabel value="루틴 선택하기">
				<Text tag="BOLD16_FONT" paragraph="루틴 선택하기" color={TEXT_COLOR2} />
				<Icon width={20} height={20} className="icon" src={ARROW} flipped={active} />
			</SelectedLabel>
			{active && (
				<OptionList>
					{options.map((option, i) => (
						<OptionItem key={i} onClick={() => selectItem(option)}>
							<Text tag="BOLD16_FONT" paragraph={option.name} />
						</OptionItem>
					))}
					<OptionItem>
						<Icon src={COLOR_PLUS} />
						<Text
							tag="BOLD16_FONT"
							paragraph="루틴 선택하기"
							color={MAIN_COLOR1}
							style={{ marginLeft: '4px', whiteSpace: 'nowrap' }}
						/>
					</OptionItem>
				</OptionList>
			)}
		</Selectbox>
	);
};

export default Select;

import { ALARM, ALARM_OFF, PASS_OFF, PASS_ON } from 'assets/images';
import { DimDiv, FlexDiv } from 'components/div/Div';
import { Icon } from 'components/icon';
import { Text } from 'components/text';
import { TEXT_COLOR3 } from 'constants/color';
import { MORE_MODAL_CONTENTS } from 'constants/contents';
import styled from 'styled-components';

const ModalDiv = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	padding: 0 24px;
	z-index: 101;
	background-color: white;
	border-radius: 16px;
`;

const MoreModal = ({ id, pass, alarm, closeModal, choice }) => {
	return (
		<>
			<ModalDiv>
				{MORE_MODAL_CONTENTS.map((content, i) => (
					<FlexDiv
						key={i}
						style={{ margin: '16px 0', cursor: 'pointer' }}
						onClick={() => choice(id, content.value)}
					>
						<Icon src={content.icon} />
						<Text
							paragraph={content.name}
							tag="BOLD14_FONT"
							color={TEXT_COLOR3}
							style={{ marginLeft: '24px', flexGrow: 1, textAlign: 'center' }}
						/>
					</FlexDiv>
				))}
				<FlexDiv
					style={{ margin: '16px 0', cursor: 'pointer' }}
					onClick={() => {
						if (pass) {
							choice(id, 'passOff');
						} else {
							choice(id, 'passOn');
						}
					}}
				>
					<Icon src={pass ? PASS_OFF : PASS_ON} />
					<Text
						paragraph={pass ? '패스 해제' : '오늘 패스'}
						tag="BOLD14_FONT"
						color={TEXT_COLOR3}
						style={{ marginLeft: '24px', flexGrow: 1, textAlign: 'center' }}
					/>
				</FlexDiv>
				<FlexDiv
					style={{ margin: '16px 0', cursor: 'pointer' }}
					onClick={() => {
						if (alarm) {
							choice(id, 'alarmOff');
						} else {
							choice(id, 'alarmOn');
						}
					}}
				>
					{alarm ? <Icon src={ALARM_OFF} /> : <ALARM />}
					<Text
						paragraph={alarm ? '알림 끄기' : '알림 켜기'}
						tag="BOLD14_FONT"
						color={TEXT_COLOR3}
						style={{ marginLeft: '24px', flexGrow: 1, textAlign: 'center' }}
					/>
				</FlexDiv>
			</ModalDiv>
			<DimDiv onClick={closeModal} />
		</>
	);
};

export default MoreModal;

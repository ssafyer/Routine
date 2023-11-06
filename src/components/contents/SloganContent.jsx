import { RIGHT_ARROW } from 'assets/images';
import { FlexDiv } from 'components/div/Div';
import { Icon } from 'components/icon';
import { Text } from 'components/text';
import { BACK_COLOR1, TEXT_COLOR2 } from 'constants/color';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const SloganDiv = styled.div`
	width: 100%;
	box-sizing: border-box;
	padding: 24px 16px;
	border-radius: 16px;
	background: ${BACK_COLOR1};
	display: flex;
`;

const SloganContent = () => {
	const userId = useSelector((state) => {
		return state.user.value.userId;
	});
	const navigate = useNavigate();

	return (
		<SloganDiv>
			<Icon src="" style={{ borderRadius: '12px' }} />
			<div>
				<Text
					tag="BOLD18_FONT"
					paragraph={`슬로건이 들어갑니다(첫줄)\n슬로건이 들어갑니다(두번째줄)`}
					whitespace={true}
				/>
				<FlexDiv
					onClick={() => {
						if (userId) {
							navigate('/addRoutine');
						} else {
							navigate('/login');
						}
					}}
					style={{ marginTop: '16px' }}
				>
					<Text
						paragraph={userId ? '루틴 추가하기' : '로그인하기'}
						color={TEXT_COLOR2}
						style={{ marginRight: '4px' }}
					/>
					<Icon src={RIGHT_ARROW} width={18} height={18} />
				</FlexDiv>
			</div>
		</SloganDiv>
	);
};

export default SloganContent;

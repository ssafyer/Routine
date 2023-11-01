import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AddButton } from 'components/button';
import { useEffect, useState } from 'react';
import { AddActionModal, AddSelectModal } from 'components/modal';
import { FlexDiv } from 'components/div/Div';
import { NAV_DAILY, NAV_MAIN, NAV_MORE, NAV_RECOM } from 'assets/images';

const NavigationDiv = styled.div`
	width: 100%;
	max-width: 480px;
	height: 93px;
	background-color: white;
	border-radius: 30px 30px 0 0;
	box-shadow: 0px -1px 5px 2px rgba(0, 0, 0, 0.2);
	position: fixed;
	z-index: 99;
	bottom: 0;
	left: 50%;
	transform: translate(-50%, 0);
	display: flex;
	justify-content: space-between;
	align-items: center;
	box-sizing: border-box;
	padding: 24px 28px 39px;
`;

const NavBar = () => {
	const userId = useSelector((state) => {
		return state.user.value.userId;
	});
	const path = useLocation().pathname;
	const navigate = useNavigate();
	const [plus, setPlus] = useState(false);
	const [action, setAction] = useState(false);

	useEffect(() => {
		console.log(path);
	}, [path]);

	return (
		<>
			{plus && (
				<AddSelectModal
					open={plus}
					onClick={() => setPlus(false)}
					addAction={() => {
						setAction(true);
						setPlus(false);
					}}
				/>
			)}
			{action && <AddActionModal onClick={() => setAction(false)} />}
			<NavigationDiv>
				<FlexDiv style={{ width: 'calc(50% - 69px)', justifyContent: 'space-between' }}>
					<NAV_MAIN color={path === '/' ? '#575757' : '#ADADAD'} onClick={() => navigate('/')} />
					<NAV_RECOM
						color={path === '/recommend' ? '#575757' : '#ADADAD'}
						onClick={() => navigate('/recommend')}
					/>
				</FlexDiv>
				<AddButton open={plus} setOpen={setPlus} />
				<FlexDiv style={{ width: 'calc(50% - 69px)', justifyContent: 'space-between' }}>
					<NAV_DAILY
						color={path === '/daily' ? '#575757' : '#ADADAD'}
						onClick={() => {
							if (userId !== '') {
								navigate('/');
							} else {
								navigate('/login');
							}
						}}
					/>
					<NAV_MORE
						color={path === '/more' ? '#575757' : '#ADADAD'}
						onClick={() => navigate('/more')}
					/>
				</FlexDiv>
			</NavigationDiv>
		</>
	);
};
export default NavBar;

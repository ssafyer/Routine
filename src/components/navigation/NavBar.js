import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
/* import { AddActionModal, AddSelectModal } from 'components/modal'; */
import { NAV_DAILY, NAV_MAIN, NAV_MORE, NAV_RECOM } from 'assets/images';
import { PLUS } from 'assets/images';
import { ACTION, ROUTINE, TARGET } from 'assets/images';

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
			{/* {plus && (
				<div className='AddSelectModal'
					open={plus}
					onClick={() => setPlus(false)}
					addAction={() => {
						setAction(true);
						setPlus(false);
					}}
				>
				<div className='inner'>
					<button className='btn__target'>
						
					</button>
					<WithTextButton icon={TARGET} name="목표" xco="-230%" yco="-80%" top="2px" left="5px" />
					<WithTextButton icon={ROUTINE} name="루틴" xco="-50%" yco="-160%" top="-4px" left="7px" />
					<WithTextButton icon={ACTION} name="행동" xco="130%" yco="-80%" onClick={addAction} />
					<AddButton open={open} setOpen={onClick} />
				</div>
				</div>
			)}
			{action && <AddActionModal onClick={() => setAction(false)} />}
			<div className='navbar'>
				<div className='navbar__inner'>
					<NAV_MAIN color={path === '/' ? '#575757' : '#ADADAD'} onClick={() => navigate('/')} />
					<NAV_RECOM
						color={path === '/recommend' ? '#575757' : '#ADADAD'}
						onClick={() => navigate('/recommend')}
					/>
				</div>
				<button className={plus?'button__add active':'button__add'} onClick={() => setPlus(true)}>
					<img src={PLUS} width={40} height={40} />
				</button>
				<div className='navbar__inner'>
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
				</div>
			</div> */}
		</>
	);
};
export default NavBar;

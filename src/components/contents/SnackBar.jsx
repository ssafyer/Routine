import { useEffect } from 'react';

const SnackBar = ({ message, setSnack }) => {
	useEffect(() => {
		const timer = setTimeout(() => {
			setSnack(false);
		}, 3000);
		return () => {
			clearTimeout(timer);
		};
	}, [setSnack]);
	return <div className='SnackBar'>{message}</div>;
};

export default SnackBar;


import { Icon } from 'components/icon';

const Button = ({ id, theme, text, img, iconSize, iconAlt, onClick, disabled, ...props }) => {
	return (
		<button >
			{img && (
				<Icon
					src={img}
					width={iconSize}
					height={iconSize}
					alt={iconAlt}
					style={{ marginRight: '2px' }}
				/>
			)}
			<div className='ButtonText'>{text}</div>
		</button>
	);
};

export default Button;

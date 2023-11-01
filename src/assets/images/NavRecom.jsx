const NavDaily = ({ color, ...props }) => {
	return (
		<svg
			width="30"
			height="30"
			viewBox="0 0 30 30"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			style={{ cursor: 'pointer' }}
			{...props}
		>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M15 26.3077C21.2451 26.3077 26.3077 21.2451 26.3077 15C26.3077 8.75493 21.2451 3.69231 15 3.69231C8.75493 3.69231 3.69231 8.75493 3.69231 15C3.69231 21.2451 8.75493 26.3077 15 26.3077ZM15 29C22.732 29 29 22.732 29 15C29 7.26801 22.732 1 15 1C7.26801 1 1 7.26801 1 15C1 22.732 7.26801 29 15 29Z"
				fill={color}
			/>
			<rect
				x="13.6133"
				y="11.9082"
				width="6"
				height="2"
				rx="1"
				transform="rotate(48.9637 13.6133 11.9082)"
				fill={color}
			/>
			<path
				d="M12.966 12.2842L21.4889 10.0005L17.0758 17.3947L8.55291 19.6784L12.966 12.2842Z"
				stroke={color}
				stroke-width="2"
				stroke-linejoin="round"
			/>
		</svg>
	);
};

export default NavDaily;

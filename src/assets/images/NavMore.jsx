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
				d="M3 5.34149C3 4.60061 3.59695 4 4.33333 4H25.6667C26.403 4 27 4.60061 27 5.34149C27 6.08238 26.403 6.68298 25.6667 6.68298H4.33333C3.59695 6.68298 3 6.08238 3 5.34149Z"
				fill={color}
			/>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M3 14.9997C3 14.2588 3.59695 13.6582 4.33333 13.6582H25.6667C26.403 13.6582 27 14.2588 27 14.9997C27 15.7406 26.403 16.3412 25.6667 16.3412H4.33333C3.59695 16.3412 3 15.7406 3 14.9997Z"
				fill={color}
			/>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M3 24.6579C3 23.917 3.59695 23.3164 4.33333 23.3164H25.6667C26.403 23.3164 27 23.917 27 24.6579C27 25.3988 26.403 25.9994 25.6667 25.9994H4.33333C3.59695 25.9994 3 25.3988 3 24.6579Z"
				fill={color}
			/>
		</svg>
	);
};

export default NavDaily;

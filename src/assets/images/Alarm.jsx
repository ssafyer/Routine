const Alarm = ({ color }) => {
	const fillColor = color==true?'#FFB800':'#BABABA'

	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			style={{ marginRight: '8px' }}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M10.3125 5V4.5C10.3125 3.68 11.0775 3 12 3C12.9225 3 13.6875 3.68 13.6875 4.5V5C16.9275 5.68 18.75 8.24 18.75 11.32V16.3176H21V16.45V18V18.0203H3V18V16.45V16.3176H5.25V11.32C5.25 8.24 7.095 5.68 10.3125 5ZM16.8649 16.3176H7.13514V10.7838C7.13514 8.43284 9.31321 6.52702 12 6.52702C14.6868 6.52702 16.8649 8.43284 16.8649 10.7838V16.3176ZM14.25 19C14.25 20.1 13.2375 21 12 21C10.7625 21 9.75 20.1 9.75 19H14.25Z"
				fill={fillColor}
			/>
		</svg>
	);
};

export default Alarm;

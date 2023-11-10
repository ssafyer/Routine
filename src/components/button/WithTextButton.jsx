const WithTextButton = ({ idx, icon, name, xco, yco, top = 0, left = 0, onClick }) => {

	return (
		<button className="withTextButton"
			style={{transform:`translate(${xco},${yco})`, animation:`slideIn${idx} 0.3s ease-in-out forwards`}}
			onClick={onClick}
		>
			<div className="iconBack">
				<img
					src={icon}
					width={19}
					height={24}
					alt="icon"
					style={{
						position: 'absolute',
						top: top,
						left: left,
					}}
				/>
			</div>
			{name}
		</button>
	);
};

export default WithTextButton;
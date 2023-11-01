const Image = ({ src, width = 'auto', height = 'auto', alt = '', onClick = null, ...props }) => {
	return (
		<img
			src={src}
			width={width}
			height={height}
			alt={alt}
			onClick={onClick}
			style={{ ...props.style, objectFit: 'contain' }}
		/>
	);
};
export default Image;

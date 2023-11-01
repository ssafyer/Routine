import styled from 'styled-components';

export const DeviceDiv = styled.div`
	width: 100%;
	height: 100%;
	padding-top: 28px;
	box-sizing: border-box;
	position: relative;
`;

export const WithNavigationDiv = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
	overflow-x: hidden;
	padding: 28px 16px 93px;
	box-sizing: border-box;
`;

export const FlexDiv = styled.div`
	display: flex;
	align-items: center;
	box-sizing: border-box;
`;

export const DimDiv = styled.div`
	width: 100vw;
	height: 100vh;
	background: rgba(0, 0, 0, 0.45);
	position: fixed;
	z-index: 100;
	top: 0;
	left: 0;
`;

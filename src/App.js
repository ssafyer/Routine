import styled from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DailyPage, LoginPage, MainPage, MorePage, RecomPage } from 'pages';

const AppDiv = styled.div`
	width: 100%;
	min-width: 320px;
	max-width: 480px;
	height: 100vh;
	overflow-x: hidden;
	margin: auto;
`;

const App = () => {
	return (
		<BrowserRouter>
			<AppDiv className="App">
				<Routes>
					<Route path="/" element={<MainPage />}></Route>
					<Route path="/login" element={<LoginPage />}></Route>
					<Route path="/recommend" element={<RecomPage />}></Route>
					<Route path="/daily" element={<DailyPage />}></Route>
					<Route path="/more" element={<MorePage />}></Route>
				</Routes>
			</AppDiv>
		</BrowserRouter>
	);
};

export default App;

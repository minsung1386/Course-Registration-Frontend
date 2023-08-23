import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from 'pages/LandingPage';
import MainPage from 'pages/MainPage';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<LandingPage />} />
				<Route exact path="/main" element={<MainPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;

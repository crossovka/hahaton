import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Dashboard from './pages/dashboard';
import './scss/null.scss';

function App() {
	return (
		<Routes>
			<Route exact path="/" element={<Home />} />
			<Route path="/new-page" element={<Dashboard />} />
		</Routes>
	);
}

export default App;

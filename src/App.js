import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Files from './pages/Files/files';
import './scss/null.scss';

// function App() {
// 	return (
// 		<Router>
// 			<Routes>
// 				<Route exact path="/" component={Home} />
// 				<Route path="/login" component={Login} />
// 				<Route path="/dashboard" component={Dashboard} />
// 			</Routes>
// 		</Router>
// 	);
// };

function App() {
	return (
		<Routes>
			<Route exact path="/" element={<Home />} />
			<Route path="/new-page" element={<Files />} />
		</Routes>
	);
}

export default App;

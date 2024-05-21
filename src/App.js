import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Login from './components/Login';
import Dashboard from './pages/dashboard';

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
			<Route path="/new-page" element={<Dashboard />} />
		</Routes>
	);
}

export default App;

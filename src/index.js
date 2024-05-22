import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import Login from './components/Login';
import Dashboard from './pages/dashboard';
import Files from './pages/Files/files';

import App from './App';
import './scss/index.scss';

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Routes>
				<Route exact path="/" element={<App />} />
				<Route path="/login" element={<Login />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/files" element={<Files />} />
			</Routes>
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

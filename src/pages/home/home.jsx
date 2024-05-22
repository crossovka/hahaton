import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Login from '../../components/Login';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Uslugi from '../../components/Uslugi';
import Hero from '../../components/Hero';

function Home() {
	const navigate = useNavigate();
	const [showLogin, setShowLogin] = useState(false);

	const handleOpenLogin = () => {
		setShowLogin(true);
	};

	const handleCloseLogin = () => {
		setShowLogin(false);
	};

	const handleLoginSuccess = () => {
		// Handle login success here
		// After successful login, navigate to the dashboard
		navigate('/dashboard');
	};

	return (
		<div className="wrapper">
			<Header />
			<main>
			<Hero/>
			<Uslugi/>
				<button onClick={handleOpenLogin}>Open Login Modal</button>
				<Login
					visible={showLogin}
					onClose={handleCloseLogin}
					onLoginSuccess={handleLoginSuccess}
					/>
			</main>
				<Footer/>
		</div>
	);
}

export default Home;

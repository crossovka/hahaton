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
		<div>
			<header className={styles.header}>
				<div className={styles.header__container}>
					<img src="./logo.png" alt="logo" />
					<ul className={styles.menu}>
						<li>Home</li>
						<li>Find a doctor</li>
						<li>Apps</li>
						<li>Testimonials</li>
						<li>About us</li>
					</ul>
					<div
						className={`${styles.burger__navigation} ${
							this.state.isActive ? styles.active : ''
						}`}
						ref={this.headerNavigationRef}
					>
						<ul>
							<li>Home</li>
							<li>Find a doctor</li>
							<li>Apps</li>
							<li>Testimonials</li>
							<li>About us</li>
						</ul>
					</div>
					<div
						id="burger"
						className={`${styles.header__burger} ${
							this.state.isActive ? styles.active : ''
						}`}
						ref={this.headerBurgerRef}
						onClick={this.handleBurgerClick}
					>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
			</header>
			<div className={styles.hero}>
				<div className={styles.hero__text}>
					<h1>Virtual healthcare for you</h1>
					<p>
						Trafalgar provides progressive, and affordable healthcare,
						accessible on mobile and online for everyone
					</p>
					<button>Consult today</button>
				</div>
				<div className={styles.hero__img}>
					<img src="./illustration.png" alt="#" />
				</div>
			</div>
			<button onClick={handleOpenLogin}>Open Login Modal</button>
			<Login
				visible={showLogin}
				onClose={handleCloseLogin}
				onLoginSuccess={handleLoginSuccess}
			/>
		</div>
	);
}

export default Home;

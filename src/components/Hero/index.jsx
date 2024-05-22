import React from 'react';
import styles from './hero.module.css';

const Hero = () => {
	return (
		<div className={styles.hero}>
			<div className={styles.hero__text}>
				<h1>Virtual healthcare for you</h1>
				<p>
					Trafalgar provides progressive, and affordable healthcare, accessible
					on mobile and online for everyone
				</p>
				<button>Consult today</button>
			</div>
			<div className={styles.hero__img}>
				<img src="/img/illustration.png" alt="Img" />
			</div>
		</div>
	);
};

export default Hero;

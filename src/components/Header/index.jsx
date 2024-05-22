// import styles from './Card.module.scss';
// <div className={styles.card}>

import React, { Component, createRef } from 'react';
import styles from './header.module.scss';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
    this.headerNavigationRef = createRef();
    this.headerBurgerRef = createRef();
    this.handleBurgerClick = this.handleBurgerClick.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  }

  handleBurgerClick() {
    this.setState((prevState) => ({
      isActive: !prevState.isActive,
    }));
  }

  handleClickOutside(event) {
    if (
      this.headerNavigationRef.current &&
      !this.headerNavigationRef.current.contains(event.target) &&
      this.headerBurgerRef.current &&
      !this.headerBurgerRef.current.contains(event.target)
    ) {
      this.setState({ isActive: false });
    }
  }

  render() {
    return (
      <header className={styles.header}>
        <div className={styles.header__container}>
        <img src="./assets/logo.png" alt="logo" />
            <ul className={styles.menu}>
              <li>Home</li>
              <li>Find a doctor</li>
              <li>Apps</li>
              <li>Testimonials</li>
              <li>About us</li>
            </ul>
          <div className={`${styles.burger__navigation} ${this.state.isActive ? styles.active : ''}`} ref={this.headerNavigationRef}>
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
            className={`${styles.header__burger} ${this.state.isActive ? styles.active : ''}`}
            ref={this.headerBurgerRef}
            onClick={this.handleBurgerClick}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>
    );
  }
}

class App extends Component {
  render() {
    return (
			<Header />
    );
  }
}

export default App;

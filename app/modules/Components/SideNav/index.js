import React, { Component } from 'react';
import { Link } from 'react-router';
import { action } from 'mobx';
import { observer } from 'mobx-react';
import NavItem from './components/NavItem';
import styles from './styles.css';

export default class SideNav extends Component {
	componentDidMount() {
		let children = this._rootElement.childNodes;
		children.forEach((item) => {
			item.style.height = `calc(100%/${children.length})`;
		}, this);

	}

	render() {
		return (
			<aside className={styles.sideNav} ref={(c) => this._rootElement = c}>
				<NavItem icon="home" title="Home" to="/" ></NavItem>
				<NavItem icon="info" title="Home" to="/info" ></NavItem>
				<NavItem icon="about_us" title="Home" to="/about-us" ></NavItem>
			</aside>
		);
	}
}

import React, { Component } from 'react';
import { default as mobx, observable, action, autorun, transaction } from 'mobx';
import { observer } from 'mobx-react';
import SVGInline from 'react-svg-inline';
import styles from './styles.css';

@observer
export default class TopBar extends Component {

	@observable timeStr = '00:00:00';

	constructor(props) {
		super(props);
		let diff = (new Date()).getTimezoneOffset() / 60 * -1;
		this.utcStr = `UTC +${diff}`;
	}

	componentDidMount() {
		this.timer = setInterval(this.updateTime.bind(this), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}

	updateTime() {
		let time = new Date();
		this.timeStr = `${this.addLeadingZeros(time.getHours())}:${this.addLeadingZeros(time.getMinutes())} :${this.addLeadingZeros(time.getSeconds())}`;
	}
	addLeadingZeros(val) {
		return ("00" + val).slice(-2);
	}

	render() {
		return (
			<nav role="main" className={styles.topBar}>
				<div className={styles.content}>
					<span className={styles.time}>{this.timeStr} </span>
					<span className={styles.utc}>{this.utcStr}</span>
				</div>
			</nav>
		);
	}
}

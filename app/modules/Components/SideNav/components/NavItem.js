import React, { Component } from 'react';
import { Link } from 'react-router';

import styles from '../styles.css';

export default class NavItem extends Component {
    render() {
        return (
            <Link className={styles.linkItem} to={this.props.to}  activeClassName={styles.linkItem__active} >
                <div className={styles.centerVerically}>
                    <img src={`/static/icons/menu_${this.props.icon}.svg`} className={styles.linkItemIcon} />
                    <div className={styles.linkItemText}>{this.props.title}</div>
                </div>
            </Link>
        );
    }
}

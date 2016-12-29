import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import styles from './styles.css';

@inject(['AppStateStore'])
@observer
export default class PageHome extends Component {
    constructor(props) {
        super(props);
        this.appState = this.props.AppStateStore;
    }

    onValueChange(item) {
        return function (value) {
            const ret = {};
            ret[item] = value;
            this.appState.setValue(ret);
        }.bind(this);
    }

    render() {
        return (
            <div className={styles.root}>
                HOME
	        </div>
        );
    }
}

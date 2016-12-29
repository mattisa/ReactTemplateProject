import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { observable, action } from 'mobx';

import styles from './styles.css';

@observer
export default class Button extends Component {

    @observable clicked = 'not clicked';

    constructor(props) {
        super(props);
        this._onClick = this._onClick.bind(this);
    }

    @action
    _onClick() {
        this.clicked = 'clicked';
        this.props.onClick();
    }

    render() {
        return (
            <button onClick={this._onClick}>{this.clicked}</button>
        );
    }
}
Button.propTypes = {
    onClick: React.PropTypes.func.isRequired
}

// Button.defaultProps = {
// }

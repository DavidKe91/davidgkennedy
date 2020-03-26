import React, { Component } from 'react';
import classNames from 'classnames';
import './MenuButton.css';

class MenuButtonClose extends Component {
    state = {
        open: this.props.open ? this.props.open : false,
        color: this.props.color ? this.props.color : 'black',
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.open !== this.state.open) {
            this.setState({ open: nextProps.open });
        }
    }

    handleClick() {
        this.setState({ open: !this.state.open });
    }

    render() {
        let toggleHamburger = classNames({
            hamburger: true,
            'is-active': this.state.open,
        });
        return (

            <div className={toggleHamburger} onClick={this.props.onClick ? this.props.onClick :
                () => { this.handleClick(); }}>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
            </div>
        );
    }
}

export default MenuButtonClose;
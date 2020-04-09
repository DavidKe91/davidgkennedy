import React, { Component } from 'react';
import './Menu.css'
import Icons from '../../Icons/Icons';

class Menu extends Component {
    state = {
        open: this.props.open ? this.props.open : false,
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.open !== this.state.open) {
            this.setState({
                open: nextProps.open
            })
        }
    }

    render() {
        return (
            <div className="sidebar">
                {
                    this.state.open ?
                        <div className="menu-items">
                            {this.props.children}
                        </div> : null
                }
                <Icons />
            </div>
        );
    }
}

export default Menu;
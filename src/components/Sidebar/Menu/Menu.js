import React, { Component } from 'react';
import './Menu.css';
import MenuItems from './MenuItems';
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
                        <ul className="menu-items">
                            <MenuItems />
                        </ul> : null
                }
                <Icons />
            </div>
        );
    }
}

export default Menu;
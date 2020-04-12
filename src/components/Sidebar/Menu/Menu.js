import React, { Component } from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';
import MenuItem from '../MenuItem/MenuItem';
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

        const menu = [{ label: 'Home', anchor: '/' }, { label: 'About', anchor: '/about' }, { label: 'Experience', anchor: '/experience' }, { label: 'Portfolio', anchor: '/portfolio' }];
        const menuItems = menu.map((val, index) => {
            return (
                <Link to={val.anchor} key={index}>
                    <MenuItem
                        delay={`${index * 1}s`}>
                        {val.label}
                    </MenuItem>
                </Link>
            )
        });

        return (
            <div className="sidebar">
                {
                    this.state.open ?
                        <ul className="menu-items">
                            {menuItems}
                        </ul> : null
                }
                <Icons />
            </div>
        );
    }
}

export default Menu;
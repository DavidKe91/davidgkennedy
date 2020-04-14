import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MenuItem from '../MenuItem/MenuItem';

class MenuItems extends Component {
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
        return (<div>
            {menuItems}
        </div>
        );
    }
}

export default MenuItems;
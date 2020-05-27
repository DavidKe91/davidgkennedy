import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MenuItem from '../MenuItem/MenuItem';

class MenuItems extends Component {
    render() {
        const menu = [{ label: 'Home', anchor: '/' }, { label: 'About', anchor: '/about' }, { label: 'Experience', anchor: '/experience' }, { label: 'Portfolio', anchor: '/portfolio' }, { label: 'Freelance', anchor: '/freelance' }];
        const menuItems = menu.map((val, index) => {
            return (

                <MenuItem
                    delay={`${index * 1}s`}
                    key={index}>
                    <Link to={val.anchor} >
                        {val.label}
                    </Link>
                </MenuItem>

            )
        });
        return (<div>
            {menuItems}
        </div>
        );
    }
}

export default MenuItems;
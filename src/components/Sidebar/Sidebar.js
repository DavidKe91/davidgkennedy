import React, { Component } from 'react';
import classes from './Sidebar.module.css';
import Menu from './Menu/Menu';
import MenuItem from './MenuItem/MenuItem';
import MenuButton from './MenuItem/MenuItem';

class Sidebar extends Component {


    render() {
        const menu = ['Home', 'About Me', 'Experience', 'Portfolio'];
        const menuItems = menu.map((val, index) => {
            return (
                <MenuItem
                    key={index}
                    delay={`${index * 0.1}s`}
                    onClick={() => { this.props.anchorClick(); }}>{val}</MenuItem>
            )
        });

        return (
            <>
                <MenuButton
                    id="open-sidebar"
                    className={classes.sidebarBtn}
                    open={this.props.open}
                    onClick={() => this.props.menuClick}>
                    <i className="fas fa-bars"></i>
                </MenuButton>
                <Menu
                    open={this.props.open}>
                    {menuItems}
                </Menu>
                <nav id="slide-menu" className={classes.sidebarNav}>
                    <div id="close-sidebar">
                        <i className="fas fa-times"></i>
                    </div>
                    <ul>
                        <li>Home</li>
                        <li>About Me</li>
                        <li>Portfolio</li>
                    </ul>
                </nav>
            </>
        );
    }
}

export default Sidebar;
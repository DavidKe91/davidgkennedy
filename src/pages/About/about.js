import React from "react";
import classNames from 'classnames';
import AboutMe from '../../components/AboutMe/AboutMe';
import Menu from '../../components/Sidebar/Menu/Menu';
import MenuItem from '../../components/Sidebar/MenuItem/MenuItem';
import classes from './About.module.css';
import MenuButtonClose from '../../components/Sidebar/MenuButtons/MenuButtonClose';
import Footer from '../../components/Footer/Footer';

class About extends React.Component {
    state = {
        loading: true,
        blogPosts: [],
        menuOpen: false,
    };

    handleMenuClick() {
        this.setState({
            menuOpen: !this.state.menuOpen
        });
    }

    handleAnchorClick() {
        this.setState({
            menuOpen: false
        });
    }

    render() {

        let { loading } = this.state;
        let { blogPosts } = this.state;
        let toggleClasses = classNames({
            main: true,
            'toggled': this.state.menuOpen,
        });
        const menu = ['Home', 'About Me', 'Experience', 'Portfolio'];
        const menuItems = menu.map((val, index) => {
            return (
                <MenuItem
                    key={index}
                    delay={`${index * 1}s`}
                    onClick={() => { this.props.anchorClick(); }}>{val}
                </MenuItem>
            )
        });

        return (
            <div className={toggleClasses}>
                <div className={classes.topOuter}>
                    {/* <MenuButtonOpen
                    open={this.state.menuOpen}
                    onClick={() => this.handleMenuClick()}>
                    <i className="fas fa-bars"></i>
                </MenuButtonOpen> */}
                    <MenuButtonClose
                        open={this.state.menuOpen}
                        onClick={() => this.handleMenuClick()}>
                        <i className="fas fa-bars"></i>
                    </MenuButtonClose>
                    <Menu
                        open={this.state.menuOpen}>
                        {menuItems}
                    </Menu>
                    <div className="row no-gutters">
                        <div className="col-6">
                            <header className={classes.appHeader}>
                                <div className="container">
                                </div>
                            </header>
                        </div>
                        <div className="col-6">
                            <div className={classes.titleContainer}>
                                <h1 className="white">About Me</h1>
                                <div className={classes.projectInfo}>
                                    <div className='row no-gutters'>
                                        <div className="col">
                                            <i className="far fa-calendar-alt white"></i>
                                            <h4 className={`${classes.projectHeading} white`}>Test</h4>
                                            <p><small className="white">Test</small></p>
                                        </div>
                                        <div className="col">
                                            <i className="fas fa-link white"></i>
                                            <h4 className={`${classes.projectHeading} white`}>Website Link</h4>
                                            <div className="col">
                                                <i className="fas fa-user white"></i>
                                                <h4 className={`${classes.projectHeading} white`}>Client</h4><p><small className="white">Test</small></p></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
};

export default About;
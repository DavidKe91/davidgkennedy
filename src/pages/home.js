import React from "react";
import { getFirebase } from "../firebase";
import classNames from 'classnames';
import Icons from '../components/Icons/Icons';
import Introduction from '../components/Introduction/Introduction';
import AboutMe from '../components/AboutMe/AboutMe';
import Work from '../components/Work/Work';
import Menu from '../components/Sidebar/Menu/Menu';
import MenuItem from '../components/Sidebar/MenuItem/MenuItem';
// import MenuButtonOpen from '../components/Sidebar/MenuButtons/MenuButtonOpen';
import MenuButtonClose from '../components/Sidebar/MenuButtons/MenuButtonClose';

class Home extends React.Component {
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

        if (loading && !blogPosts.length) {
            getFirebase()
                .database()
                .ref("/posts")
                .orderByChild("dateFormatted")
                .once("value")
                .then(snapshot => {
                    let posts = [];
                    const snapshotVal = snapshot.val();
                    for (let slug in snapshotVal) {
                        posts.push(snapshotVal[slug]);
                    }

                    const newestFirst = posts.reverse();
                    this.setState({ blogPosts: newestFirst });
                    this.setState({ loading: false });
                });
        }

        if (loading) {
            return <h1>Loading...</h1>;
        }

        const menu = ['Home', 'About Me', 'Experience', 'Portfolio'];
        const menuItems = menu.map((val, index) => {
            return (
                <MenuItem
                    key={index}
                    delay={`${index * 0.1}s`}
                    onClick={() => { this.props.anchorClick(); }}>{val}
                </MenuItem>
            )
        });

        return (
            <div className={toggleClasses}>
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
                <Icons />
                <Introduction />
                <AboutMe />
                <Work />
            </div>
        );
    }
};

export default Home;
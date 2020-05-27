import React from "react";
import { getFirebase } from "../../firebase";
import classNames from 'classnames';
import Introduction from '../../components/Freelance/Introduction/Introduction';
import Bespoke from '../../components/Freelance/Bespoke/Bespoke';
import Experience from '../../components/Experience/Experience';
import Work from '../../components/Work/Work';
import Menu from '../../components/Sidebar/Menu/Menu';
import MenuButtonClose from '../../components/Sidebar/MenuButtons/MenuButtonClose';
import Form from '../../components/Form/Form';
import Footer from '../../components/Footer/Footer';

class Freelance extends React.Component {
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
                .limitToLast(2)
                .once("value")
                .then(snapshot => {
                    let posts = [];
                    const snapshotVal = snapshot.val();
                    for (let slug in snapshotVal) {
                        posts.push(snapshotVal[slug]);
                    }

                    this.setState({ blogPosts: posts });
                    this.setState({ loading: false });
                });
        }

        if (loading) {
            return (<div className="spinnerContainer"><div className="spinner">
                <div className="double-bounce1"></div>
                <div className="double-bounce2"></div>
            </div>
            </div>);
        }

        return (
            <>
                <div className={toggleClasses}>
                    <MenuButtonClose
                        open={this.state.menuOpen}
                        onClick={() => this.handleMenuClick()}>
                        <i className="fas fa-bars"></i>
                    </MenuButtonClose>
                    <Menu
                        open={this.state.menuOpen}>
                    </Menu>
                    <Introduction />
                    <Bespoke />
                    <Experience />
                    <Work />
                    <Form />
                </div>
                <Footer />
            </>
        );
    }
};

export default Freelance;
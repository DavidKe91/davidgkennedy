import React from "react";
import { getFirebase } from "../../firebase";
import { Link } from "react-router-dom";
import classes from './Portfolio.module.css';
import classNames from 'classnames';
import Menu from '../../components/Sidebar/Menu/Menu';
import MenuButtonClose from '../../components/Sidebar/MenuButtons/MenuButtonClose';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Footer from '../../components/Footer/Footer';
import parse from 'html-react-parser';

class Portfolio extends React.Component {
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
                    <div className={classes.topOuter}>
                        <MenuButtonClose
                            open={this.state.menuOpen}
                            onClick={() => this.handleMenuClick()}>
                            <i className="fas fa-bars"></i>
                        </MenuButtonClose>
                        <Menu
                            open={this.state.menuOpen}>
                        </Menu>
                        <header className={classes.appHeader}>
                            <div className="container">
                                <div className={classes.headerWrapper}>
                                    <h1>Portfolio</h1>
                                </div>
                            </div>
                        </header>
                        <section className={classes.portfolioPage}>
                            <div className="container">
                                <div className="row portfolioRow">
                                    {blogPosts.map(blogPost => (
                                        <div className="col-sm-12 col-md-6" key={blogPost.slug}>
                                            <div className={classes.workCard}>
                                                <Link to={`/${blogPost.slug}`}>
                                                    <img className="img-fluid" src={blogPost.previewImage} alt={blogPost.coverImageAlt} />
                                                </Link>
                                                <div className={classes.cardContent}>
                                                    <p className={classes.category}>
                                                        Tech Stack: <small className={classes.categoryLink}>{blogPost.tech}</small>
                                                    </p>
                                                    <h2 className={classes.caption}>
                                                        {parse(blogPost.title)}
                                                    </h2>
                                                    <p className={classes.previewText}>{blogPost.content.substring(0, 190)}...<Link to={`/${blogPost.slug}`}>Read More</Link></p>
                                                    <Link to={`/${blogPost.slug}`}>
                                                        <button>Read More <FontAwesomeIcon icon={faArrowRight} /></button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                <Footer />
            </>
        );
    };
};
export default Portfolio;
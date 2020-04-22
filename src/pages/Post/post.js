import React, { useState } from "react";
import { getFirebase } from "../../firebase";
import { Redirect } from "react-router-dom";
import './Post.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faLink, faUser, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Footer from '../../components/Footer/Footer';
import Menu from '../../components/Sidebar/Menu/Menu';
import MenuButtonClose from '../../components/Sidebar/MenuButtons/MenuButtonClose';
import parse from 'html-react-parser';
import classNames from 'classnames';
import { Responsive } from "responsive-react";

const Post = ({ match }) => {

    const slug = match.params.slug;
    const [loading, setLoading] = useState(true);
    const [currentPost, setCurrentPost] = useState();
    const [nextPost, setNextPost] = useState();
    const [allPosts, setAllPosts] = useState([]);
    const [menuOpen, setMenuOpen] = useState(false);

    if (loading && !currentPost && !nextPost) {

        getFirebase()
            .database()
            .ref("/posts")
            .limitToLast(10)
            .once("value")
            .then(snapshotTwo => {
                let posts = [];
                const snapshotVal = snapshotTwo.val();
                for (let slug in snapshotVal) {
                    posts.push(snapshotVal[slug]);
                }
                const all = posts;
                setAllPosts(all);
                function isSlug(a) {
                    return a.slug === slug;
                }
                let currentIndex = allPosts.findIndex(isSlug);
                let prevPost = allPosts[currentIndex - 1];
                let nxtPost = allPosts[currentIndex + 1];
                setNextPost(nxtPost);
                console.log(nextPost);
            });

        getFirebase()
            .database()
            .ref()
            .child(`/posts/${slug}`)
            .once("value")
            .then(snapshot => {
                if (snapshot.val()) {
                    setCurrentPost(snapshot.val());
                }
                setLoading(false);
            });
    }

    console.log(nextPost);

    if (loading) {
        return <h1>Loading...</h1>;
    }

    const postDoesNotExist = !currentPost;
    if (postDoesNotExist) {
        return <Redirect to="/404" />;
    }

    const backgroundStyle = {
        backgroundImage: 'url(' + currentPost.coverImage + ')'
    }


    let toggleClasses = classNames({
        main: true,
        'toggled': menuOpen,
    });

    return (
        <>
            <div className={toggleClasses}>
                <div className="topOuter">
                    <MenuButtonClose
                        open={menuOpen}
                        onClick={() => setMenuOpen(!menuOpen)}>
                        <i className="fas fa-bars"></i>
                    </MenuButtonClose>
                    <Menu
                        open={menuOpen}>
                    </Menu>
                    <div className="row no-gutters">
                        <div className="col-12">
                            <Responsive displayIn={["Tablet", "Laptop"]}>
                                <header className="appHeader" style={backgroundStyle}>
                                    <div className="blogHeaderWrapper">
                                        <h1 className="blogHeading">
                                            {parse(currentPost.title)}</h1>
                                    </div>
                                </header>
                            </Responsive>
                            <Responsive displayIn={["Mobile"]}>
                                <img className="img-fluid" src={currentPost.mobileCoverImage} alt={currentPost.slug + " Mobile Cover Image"} />
                                <div className="blogHeaderWrapper">
                                    <h1 className="blogHeading">
                                        {parse(currentPost.title)}</h1>
                                </div>
                            </Responsive>
                        </div>
                    </div>
                </div>
                <div className="blogContent">
                    <div className="container">
                        <div className="row">
                            <Responsive displayIn={["Tablet", "Laptop"]}>
                                <div className="col-12 col-md-8">
                                    <img src={currentPost.introImage} className="img-fluid" alt="Intro" />

                                </div>
                                <div className="col-12 col-md-4">
                                    <div className="columnsLeft">
                                        <div className="projectInfo">
                                            <div className='row no-gutters'>
                                                <div className="info">
                                                    <FontAwesomeIcon icon={faCalendarAlt} />
                                                    <h4 className="projectHeading">Project Completed</h4>
                                                    <p><small className="">{currentPost.datePretty}</small></p>
                                                </div>
                                                <div className="info">
                                                    <FontAwesomeIcon icon={faUser} />
                                                    <h4 className="projectHeading">Client</h4><p><small className="">{currentPost.client}</small></p></div>
                                                <div className="info">
                                                    <FontAwesomeIcon icon={faLink} />
                                                    <h4 className="projectHeading">Website Link</h4>
                                                    <button><a className="externalLink" href={currentPost.url} target="_blank" rel="noopener noreferrer">Click Here</a><FontAwesomeIcon icon={faArrowRight} /></button></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Responsive>
                            <Responsive displayIn={["Mobile"]}>
                                <div className="col-12 col-md-8">
                                    <img src={currentPost.introImage} className="img-fluid" alt="Intro" />

                                </div>
                                <div className="col-12 col-md-4">
                                    <div className="columnsLeft">
                                        <div className="projectInfo">
                                            <div className='row no-gutters'>
                                                <div className="info">
                                                    <FontAwesomeIcon icon={faCalendarAlt} />
                                                    <h4 className="projectHeading">Project Completed</h4>
                                                    <p><small className="">{currentPost.datePretty}</small></p>
                                                </div>
                                                <div className="info">
                                                    <FontAwesomeIcon icon={faUser} />
                                                    <h4 className="projectHeading">Client</h4><p><small className="">{currentPost.client}</small></p></div>
                                                <div className="info">
                                                    <FontAwesomeIcon icon={faLink} />
                                                    <h4 className="projectHeading">Website Link</h4>
                                                    <button><a className="externalLink" href={currentPost.url} target="_blank" rel="noopener noreferrer">Click Here</a><FontAwesomeIcon icon={faArrowRight} /></button></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Responsive>
                        </div>
                        <div className="row mt-5">
                            <div className="container">
                                <div className="projectDescription">
                                    <h3 className="mt-2">Description</h3>
                                    <p className="mt-2 my-5">{currentPost.content}</p>
                                </div>
                                <div className="row my-5">
                                    <div className="col-6">
                                        <img src={currentPost.desktopMockup} className="img-fluid" alt="Desktop Mockup" />
                                    </div>
                                    <div className="col-6">
                                        <img src={currentPost.mobileMockup} className="img-fluid" alt="Mobile Mockup" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Post;

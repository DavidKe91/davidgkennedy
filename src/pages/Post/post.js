import React, { useState } from "react";
import { getFirebase } from "../../firebase";
import { Redirect } from "react-router-dom";
import './Post.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faLink, faUser, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Footer from '../../components/Footer/Footer';
import classes from '../../components/Introduction/Introduction.module.css';
const Post = ({ match }) => {



    const slug = match.params.slug;
    const [loading, setLoading] = useState(true);
    const [currentPost, setCurrentPost] = useState();

    if (loading && !currentPost) {
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

    return (
        <>
            <div className="main">
                <div className="blog-container">
                    <div className="topOuter">
                        <div className="row no-gutters">
                            <div className="col-12">
                                <header className="appHeader" style={backgroundStyle}>
                                    <div className={classes.headerWrapper}>
                                        <h1 className="blogHeading">
                                            {currentPost.title}</h1>
                                    </div>
                                </header>
                            </div>
                        </div>
                    </div>
                    <div className="blogContent">
                        <div className="container">
                            <div className="row">
                                <div className="col-8">
                                    <img src={currentPost.introImage} className="img-fluid" />

                                </div>
                                <div className="col-4">
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
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="container">
                                <div className="projectDescription">
                                    <h3 className="mt-5">Description</h3>
                                    <p className="m-5">{currentPost.content}</p>
                                </div>
                                <div className="row">
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

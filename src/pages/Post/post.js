import React, { useState } from "react";
import { getFirebase } from "../../firebase";
import { Redirect } from "react-router-dom";
import classes from './Post.module.css';

const Post = ({ match }) => {

    const slug = match.params.slug;
    const postSlugs = ["my-first-blog-post", "my-second-blog-post"];
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
            <div className="blog-container">
                <div className={classes.topOuter}>
                    <div className="row no-gutters">
                        <div className="col-6">
                            <header className={classes.appHeader} style={backgroundStyle}>
                                <div className="container">
                                </div>
                            </header>
                        </div>
                        <div className="col-6">
                            <div className={classes.titleContainer}>
                                <h1 className="white">{currentPost.title}</h1>
                                <div className={classes.projectInfo}>
                                    <div className='row no-gutters'>
                                        <div className="col">
                                            <i className="far fa-calendar-alt white"></i>
                                            <h4 className={`${classes.projectHeading} white`}>Project Completed</h4>
                                            <p><small className="white">{currentPost.datePretty}</small></p>
                                        </div>
                                        <div className="col">
                                            <i className="fas fa-link white"></i>
                                            <h4 className={`${classes.projectHeading} white`}>Website Link</h4>
                                            <a className="externalLink white" href={currentPost.url} target="_blank" rel="noopener noreferrer">Click Here</a></div>
                                        <div className="col">
                                            <i className="fas fa-user white"></i>
                                            <h4 className={`${classes.projectHeading} white`}>Client</h4><p><small className="white">{currentPost.client}</small></p></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.blogContent}>
                    <div className="container">
                        <div className={classes.aboutMeCols}>
                            <div className="col-4">
                                <h3 className="text-right">The Project</h3>
                            </div>
                            <div className="col-8">
                                <div className={classes.columnsLeft}>
                                    <p>{currentPost.content}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row no-gutter">
                <div className="col-6">
                    <img src={currentPost.desktopMockup} class="img-fluid" alt="Desktop Mockup" />
                </div>
                <div className="col-6">
                    <img src={currentPost.mobileMockup} class="img-fluid" alt="Mobile Mockup" />
                </div>
            </div>
        </>
    );
};

export default Post;

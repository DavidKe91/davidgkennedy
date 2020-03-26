import React, { useState } from "react";
import { getFirebase } from "../../firebase";
import { Link } from "react-router-dom";
import classes from '../Work/Work.module.css';
import classNames from 'classnames';

const Work = () => {
    const [loading, setLoading] = useState(true);
    const [blogPosts, setBlogPosts] = useState([]);

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
                setBlogPosts(newestFirst);
                setLoading(false);
            });
    }


    if (loading) {
        return <h1>Loading...</h1>;
    }

    let cardClasses = classNames('col-6', 'workCard');

    return (
        <section>
            <div className="container">
                <div className={classes.headerWrapper}>
                    <h3 className="text-center">Recent Work<sup>2</sup></h3>
                </div>
                <div className="row">
                    {blogPosts.map(blogPost => (
                        <div key={blogPost.slug} className={cardClasses}>
                            <img className="img-fluid" src={blogPost.previewImage} alt={blogPost.coverImageAlt} />
                            <div className="card-content">
                                <h2>
                                    {blogPost.title} &mdash;{" "}

                                    <span style={{ color: "#5e5e5e" }}>{blogPost.datePretty}</span>
                                </h2>
                                <p
                                    dangerouslySetInnerHTML={{
                                        __html: `${blogPost.content.substring(0, 200)}...`
                                    }}
                                ></p>
                                <Link to={`/${blogPost.slug}`}>Continue reading...</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Work;
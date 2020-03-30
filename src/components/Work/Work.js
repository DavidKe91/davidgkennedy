import React, { useState } from "react";
import { getFirebase } from "../../firebase";
import { Link } from "react-router-dom";
import classes from '../Work/Work.module.css';

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

    console.log(blogPosts);

    if (loading) {
        return <h1>Loading...</h1>;
    }

    return (
        <section className={classes.workSection}>
            <div className="container">
                <div className={classes.headerWrapper}>
                    <h3 className="text-center white">Recent Work<sup>3</sup></h3>
                </div>
                <div className="row portfolioRow">
                    {blogPosts.map(blogPost => (
                        <div className="col-6" key={blogPost.slug}>
                            <Link to={`/${blogPost.slug}`}>
                                <div className={classes.workCard}>
                                    <img className="img-fluid" src={blogPost.previewImage} alt={blogPost.coverImageAlt} />
                                    <div className={classes.cardContent}>
                                        <h2 className={classes.caption}>
                                            {blogPost.title}
                                        </h2>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Work;
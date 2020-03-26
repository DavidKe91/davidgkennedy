import React, { Component } from 'react';
import classes from './AboutMe.module.css';
import ReactIcon from '../../images/ReactIcon.png';
import ReduxIcon from '../../images/ReduxIcon.png';

class AboutMe extends Component {
    render() {
        return (
            <section className="about">
                <div className="container">
                    <div className={classes.headerWrapper}>
                        <h3 className="text-center">About Me<sup>1</sup></h3>
                    </div>
                    <div className="row">
                        <div className={classes.iconRow}>
                            <div className="col-3">
                                {<img src={ReactIcon} alt="React Icon" className="img-fluid" />}
                            </div>
                            <div className="col-3">
                                {<img src={ReduxIcon} alt="Redux Icon" className="img-fluid" />}
                            </div>
                            <div className="col-3">3</div>
                            <div className="col-3">4</div>
                        </div>
                        <div className={classes.aboutMeCols}>
                            <div className="col-4">
                                <h4 className="text-right">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam urna eros, malesuada ullamcorper ligula ut, varius sodales ipsum.</h4>
                                <button>Download My CV</button>
                            </div>
                            <div className="col-8">
                                <div className={classes.columnsJustify}>
                                    <p>During college, I spent a great deal of time learning and mastering Adobe's Creative Suite before moving on to learn HTML, CSS and Javascript. After completing an internship in The Netherlands as a graphic designer, I began working as a full time Front-End Web Designer. It was here that I began to understand the truly complex process of UX design. I can proudly say that I was at the forefront of the entire process. Defining business goals, wireframing, information architecture planning, coding, reviewing and incremental improvement are some of the many responsibilities that my position demanded.</p>
                                    <p>As a designer, I always strive to make clean, fast and functional websites that operate across all browsers and devices. The content that I produce not only relies on creativity and technical skills, but understanding the user and how they will interact with it. I am proud to work in such a versatile industry that challenges me everyday.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default AboutMe;
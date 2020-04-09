import React, { Component } from 'react';
import classes from './AboutMe.module.css';
import Experience from '../Experience/Experience';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faTerminal, faPaintBrush } from "@fortawesome/free-solid-svg-icons";

class AboutMe extends Component {
    render() {
        return (
            <>
                <section className="about">
                    <div className="container">
                        <div className={classes.headerWrapper}>
                            <h3 className="text-center">About Me<sup>1</sup></h3>
                        </div>
                        <div className="row">
                            <div className={classes.aboutMeCols}>
                                <div className="row mb-5">
                                    <div className="col-4">
                                        <div className={classes.categories}>
                                            <FontAwesomeIcon icon={faCode} />
                                            <h4>Development</h4>
                                            <p>Fugiat do incididunt fugiat dolor minim ea ea veniam proident labore labore magna sint ullamco.</p>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className={classes.categories}>
                                            <FontAwesomeIcon icon={faTerminal} />
                                            <h4>DevOps</h4>
                                            <p>Fugiat do incididunt fugiat dolor minim ea ea veniam proident labore labore magna sint ullamco.</p>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className={classes.categories}>
                                            <FontAwesomeIcon icon={faPaintBrush} />
                                            <h4>UX Design</h4>
                                            <p>Fugiat do incididunt fugiat dolor minim ea ea veniam proident labore labore magna sint ullamco.</p>
                                        </div>
                                    </div>
                                </div>
                                <p className="mb-5">Hi! My name is David Kennedy and I am a Frontend Developer based in Berlin. My main area of expertise is building responsive React applications. Having initially worked as a graphic designer, I later transitioned to Frontend web development and I am now looking for me next opportunity.</p>
                                <button>Learn More About Me</button>
                            </div>
                            {/* <div className={classes.iconRow}>
                            <div className="col-3">
                                {<img src={ReactIcon} alt="React Icon" className="img-fluid" />}
                            </div>
                            <div className="col-3">
                                {<img src={ReduxIcon} alt="Redux Icon" className="img-fluid" />}
                            </div>
                            <div className="col-3">3</div>
                            <div className="col-3">4</div>
                        </div> */}
                            {/* <div className={classes.aboutMeCols}>
                                <div className="row">
                                    <div className="col-4">
                                        <h4>Hi! My name is David Kennedy and I am a Frontend Developer based in Berlin. My main area of expertise is building responsive React applications.</h4>
                                    </div>
                                    <div className="col-4">
                                        <p className={classes.AboutMeCopy}>Having worked as both a freelance designer and a full-time Frontend Web Designer, I have been responsible for crafting user friendly, intuitive interfaces that feel clear and natural to both new and existing users. Some tools that help me develop these interfaces include wireframing, accessibility testing, user flow diagrams and A/B testing.</p>
                                        <button>Download My CV</button>
                                    </div>
                                    <div className="col-4">
                                        <p className={classes.AboutMeCopy}>Over the past year and a half, I have become highly proficient in React.js. I have built up a large portfolio of projects that incorporate React features such as Router, Redux and Enzyme.</p>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </section>
                {/* <Experience /> */}
            </>
        );
    }
}

export default AboutMe;
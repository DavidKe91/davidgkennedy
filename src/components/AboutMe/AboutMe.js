import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './AboutMe.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faTerminal, faPaintBrush, faArrowRight } from "@fortawesome/free-solid-svg-icons";

class AboutMe extends Component {
    render() {
        return (
            <>
                <section className="about">
                    <div className="row">
                        <div className="headerWrapper"><h3 className="text-center">About Me<sup>1</sup></h3></div>
                        <div className="container">
                            <div className="aboutMeCols">
                                <p className="mb-5">Hi! My name is David Kennedy and I am a Frontend Developer based in Berlin. My main area of expertise is building responsive React applications. Having initially worked as a graphic designer, I later transitioned to Frontend web development and I am now looking for me next opportunity.</p>
                            </div>
                            <div className="aboutMeCols">
                                <div className="row mb-5">
                                    <div className="col-12 col-md-4">
                                        <div className="categories">
                                            <FontAwesomeIcon icon={faCode} />
                                            <h4>Development</h4>
                                            <p>I have over 6 years of experience working in web development. The primary language that I work with is Javascript. I use this Javascript experience to work with frameworks like React and Vue.</p>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-4">
                                        <div className="categories">
                                            <FontAwesomeIcon icon={faTerminal} />
                                            <h4>DevOps</h4>
                                            <p>Throughout my career I have worked with many DevOps processes and tools that greatly simplify and shorten the development lifecycle. Tools such as Jenkins, Git and Docker help with the continuous delivery of high quality code.</p>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-4">
                                        <div className="categories">
                                            <FontAwesomeIcon icon={faPaintBrush} />
                                            <h4>UX Design</h4>
                                            <p>My previous experience as a graphic designer enables me to work with designers to create seamless user interfaces. I am proficient in tools such as Adobe's Creative Suite and Sketch which makes converting mockups to code effortless.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <Link to="/about"><button>Learn More About Me <FontAwesomeIcon icon={faArrowRight} /></button></Link>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <Experience /> */}
            </>
        );
    }
}

export default AboutMe;
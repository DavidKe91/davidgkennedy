import React, { Component } from 'react';
import classes from './_bespoke.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

class Bespoke extends Component {
    render() {
        return (
            <section className={classes.bespoke}>
                <div className="row no-gutters">
                    <div className="col-6">
                        <img className="img-fluid" src="https://via.placeholder.com/625x565" alt="Placeholder" />
                    </div>
                    <div className="col-6">
                        <div className={`${classes.features}`}>
                            <h3 className="text-center">Bespoke Design</h3>
                            <p>Cras mush pardon you knees up he lost his bottle it's all gone to pot faff about porkies arse, barney argy-bargy cracking goal loo cheers spend.!</p>
                            <div className="buttonRow">
                                <a href="/experience">
                                    <button className="alt-btn">Get Started <FontAwesomeIcon icon={faArrowRight} /></button>
                                </a>
                                <a href="https://s3-eu-west-1.amazonaws.com/davidgkennedy.com/Portfolio+Images/CV/David-Kennedy-CV.pdf" target="_blank" rel="noopener noreferrer">
                                    <button className={classes.transparentBtn}>Learn More <FontAwesomeIcon icon={faArrowRight} /></button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="aboutMeCols">
                        <div className="row mb-5">
                            <div className="col-12 col-md-4">
                                <div className="categories">
                                    {/* <FontAwesomeIcon icon={faCode} /> */}
                                    <h4>Development</h4>
                                    <p>I have over 6 years of experience working in web development. The primary language that I work with is Javascript. I use this Javascript experience to work with frameworks like React and Vue.</p>
                                </div>
                            </div>
                            <div className="col-12 col-md-4">
                                <div className="categories">
                                    {/* <FontAwesomeIcon icon={faTerminal} /> */}
                                    <h4>Dev Tools</h4>
                                    <p>Throughout my career I have worked with many development processes and tools that greatly simplify and shorten the development lifecycle. Tools such as Jenkins, Git and Docker help with the continuous delivery of high quality code.</p>
                                </div>
                            </div>
                            <div className="col-12 col-md-4">
                                <div className="categories">
                                    {/* <FontAwesomeIcon icon={faPaintBrush} /> */}
                                    <h4>UX Design</h4>
                                    <p>My previous experience as a graphic designer enables me to work with designers to create seamless user interfaces. I am proficient in tools such as Adobe's Creative Suite and Sketch which makes converting mockups to code effortless.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <Link to="/about"><button className="aboutBtn">Learn More About Me <FontAwesomeIcon icon={faArrowRight} /></button></Link>
                    </div>
                </div>
            </section>
        );
    }
}

export default Bespoke;
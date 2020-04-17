import React, { Component } from 'react';
import './Experience.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faArrowRight, faBook, faBriefcase, faTools } from "@fortawesome/free-solid-svg-icons";
import Tabs from '../Tabs/Tabs';

class Experience extends Component {
    render() {
        return (
            <section className="experience">
                <div className="container">
                    <div className="headerWrapper">
                        <h3 className="text-center">Experience<sup>2</sup></h3>
                    </div>
                    <div className="experienceRow">
                        <div className="row">
                            <div className="col-12 col-md-4">
                                <FontAwesomeIcon icon={faBook} />
                                <h4>Education</h4>
                                <h5>Digital Media (International)</h5>
                                <p><small>Maynooth University, Co. Kildare</small><small>2010 - 2014</small></p>
                                <h5>Media En Cultuur</h5>
                                <p><small>Universitiet van Amsterdam, Amsterdam</small><small>2012 - 2013</small></p>
                                <h5>Leaving Certificate</h5>
                                <p><small>St. Patrick's Classical School, Co. Meath</small><small>2004 - 2010</small></p>
                            </div>
                            <div className="col-12 col-md-4">
                                <FontAwesomeIcon icon={faBriefcase} />
                                <h4>Experience</h4>
                                <h5>KAX Media</h5>
                                <p><small>Frontend Web Developer</small><small>2019 - 2020</small></p>
                                <h5>Originate</h5>
                                <p><small>Web Developer</small><small>2017 - 2019</small></p>
                                <h5>Harvey Norman</h5>
                                <p><small>Frontend / UI / UX Designer</small><small>2014 - 2017</small></p>
                            </div>
                            <div className="col-12 col-md-4">
                                <FontAwesomeIcon icon={faTools} />
                                <h4>Skills</h4>
                                <h5>Frontend Development</h5>
                                <p><small>HTML, CSS, Javascript, React, Redux, VueJS, JQuery</small></p>
                                <h5>Development Tools</h5>
                                <p><small>Git, Jenkins, AWS, WHM, Linux Shell, Docker</small></p>
                                <h5>UX Design</h5>
                                <p><small>Adobe Creative Suite, Sketch, Invision, Figma</small></p>
                            </div>
                        </div>
                        <div className="buttonRow">
                            <Link to="/experience"><button>Learn More <FontAwesomeIcon icon={faArrowRight} /></button></Link>
                            <Link to="https://s3-eu-west-1.amazonaws.com/davidgkennedy.com/Portfolio+Images/CV/David-Kennedy-CV.pdf"><button className="alt-btn">Download CV <FontAwesomeIcon icon={faArrowRight} /></button></Link>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Experience;
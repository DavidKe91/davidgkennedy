import React, { Component } from 'react';
import './Experience.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faReact, faSass, faGit, faLaravel, faPhp, faWordpress, faJenkins, faAws, faLinux, faAdobe, faSketch, faInvision, faFigma } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight, faBook, faBriefcase, faTools } from "@fortawesome/free-solid-svg-icons";
import Tabs from '../Tabs/Tabs';

class Experience extends Component {
    render() {
        return (
            <section className="experience">
                <div className="container">
                    <div className="headerWrapper">
                        <h3 className="text-center">Profile<sup>2</sup></h3>
                    </div>
                    <div className="row">
                        <div className="experienceRow">
                            <p>Voluptate voluptate proident labore aliqua est pariatur fugiat occaecat in eiusmod nisi proident pariatur. Voluptate nostrud dolor eiusmod nulla. Aute aliquip aliqua aute qui sint elit ullamco anim labore velit.</p>
                        </div>
                    </div>
                    <div className="experienceRow">
                        <div className="row">
                            <div className="col-4">
                                <FontAwesomeIcon icon={faBook} />
                                <h4>Education</h4>
                                <h5>Digital Media (International)</h5>
                                <p><small>Maynooth University, Co. Kildare</small><small>2010 - 2014</small></p>
                                <h5>Media En Cultuur</h5>
                                <p><small>Universitiet van Amsterdam, Amsterdam</small><small>2012 - 2013</small></p>
                                <h5>Leaving Certificate</h5>
                                <p><small>St. Patrick's Classical School, Co. Meath</small><small>2004 - 2010</small></p>
                            </div>
                            <div className="col-4">
                                <FontAwesomeIcon icon={faBriefcase} />
                                <h4>Experience</h4>
                                <h5>KAX Media</h5>
                                <p><small>Frontend Web Developer</small><small>2019 - 2020</small></p>
                                <h5>Originate</h5>
                                <p><small>Web Developer</small><small>2017 - 2019</small></p>
                                <h5>Leaving Certificate</h5>
                                <p><small>Frontend / UI / UX Designer</small><small>2014 - 2017</small></p>
                            </div>
                            <div className="col-4">
                                <FontAwesomeIcon icon={faTools} />
                                <h4>Skills</h4>
                                <h5>Frontend Development</h5>
                                <p><small>HTML, CSS, Javascript, React, Redux, VueJS, JQuery</small></p>
                                <h5>DevOps</h5>
                                <p><small>Git, Jenkins, AWS, WHM, Linux Shell, Docker</small></p>
                                <h5>UX Design</h5>
                                <p><small>Adobe Creative Suite, Sketch, Invision, Figma</small></p>
                            </div>
                        </div>
                        <Link to="/experience"><button>Learn More <FontAwesomeIcon icon={faArrowRight} /></button></Link>
                        <Link to="/experience"><button className="alt-btn">Download CV <FontAwesomeIcon icon={faArrowRight} /></button></Link>
                    </div>
                    {/* <Tabs>
                            <div label="Development">
                                <div className="col-4 tab-content-item mb-4">
                                    <FontAwesomeIcon icon={faReact} />
                                    <h4>React / Redux</h4>
                                    <p>Ad cupidatat aute qui laborum tempor id eu minim. Nisi ullamco sunt ipsum voluptate amet amet voluptate deserunt do irure ex do.</p>
                                </div>
                                <div className="col-4 tab-content-item mb-4">
                                    <FontAwesomeIcon icon={faSass} />
                                    <h4>CSS / SASS</h4>
                                    <p>Ad cupidatat aute qui laborum tempor id eu minim. Nisi ullamco sunt ipsum voluptate amet amet voluptate deserunt do irure ex do.</p>
                                </div>
                                <div className="col-4 tab-content-item mb-4">
                                    <FontAwesomeIcon icon={faLaravel} />
                                    <h4>Laravel</h4>
                                    <p>Ad cupidatat aute qui laborum tempor id eu minim. Nisi ullamco sunt ipsum voluptate amet amet voluptate deserunt do irure ex do.</p>
                                </div>
                                <div className="col-4 tab-content-item mb-4">
                                    <img className="img-fluid" src="https://s3-eu-west-1.amazonaws.com/davidgkennedy.com/Portfolio+Images/GraphQL_Logo.svg.png" alt="GraphQL Logo" />
                                    <h4>GraphQL</h4>
                                    <p>Ad cupidatat aute qui laborum tempor id eu minim. Nisi ullamco sunt ipsum voluptate amet amet voluptate deserunt do irure ex do.</p>
                                </div>
                                <div className="col-4 tab-content-item mb-4">
                                    <FontAwesomeIcon icon={faPhp} />
                                    <h4>PHP</h4>
                                    <p>Ad cupidatat aute qui laborum tempor id eu minim. Nisi ullamco sunt ipsum voluptate amet amet voluptate deserunt do irure ex do.</p>
                                </div>
                                <div className="col-4 tab-content-item mb-4">
                                    <FontAwesomeIcon icon={faWordpress} />
                                    <h4>Wordpress</h4>
                                    <p>Ad cupidatat aute qui laborum tempor id eu minim. Nisi ullamco sunt ipsum voluptate amet amet voluptate deserunt do irure ex do.</p>
                                </div>
                            </div>
                            <div label="DevOps">
                                <div className="col-4 tab-content-item mb-4">
                                    <FontAwesomeIcon icon={faJenkins} />
                                    <h4>Continuous Integration</h4>
                                    <p>Ad cupidatat aute qui laborum tempor id eu minim. Nisi ullamco sunt ipsum voluptate amet amet voluptate deserunt do irure ex do.</p>
                                </div>
                                <div className="col-4 tab-content-item mb-4">
                                    <FontAwesomeIcon icon={faAws} />
                                    <h4>AWS</h4>
                                    <p>Ad cupidatat aute qui laborum tempor id eu minim. Nisi ullamco sunt ipsum voluptate amet amet voluptate deserunt do irure ex do.</p>
                                </div>
                                <div className="col-4 tab-content-item mb-4">
                                    <FontAwesomeIcon icon={faGit} />
                                    <h4>Version Control</h4>
                                    <p>Ad cupidatat aute qui laborum tempor id eu minim. Nisi ullamco sunt ipsum voluptate amet amet voluptate deserunt do irure ex do.</p>
                                </div>
                                <div className="col-4 tab-content-item mb-4">
                                    <FontAwesomeIcon icon={faLinux} />
                                    <h4>Linux Shell &amp; WHM</h4>
                                    <p>Ad cupidatat aute qui laborum tempor id eu minim. Nisi ullamco sunt ipsum voluptate amet amet voluptate deserunt do irure ex do.</p>
                                </div>
                            </div>
                            <div label="UX">
                                <div className="col-4 tab-content-item mb-4">
                                    <FontAwesomeIcon icon={faAdobe} />
                                    <h4>Adobe Creative Suite</h4>
                                    <p>Ad cupidatat aute qui laborum tempor id eu minim. Nisi ullamco sunt ipsum voluptate amet amet voluptate deserunt do irure ex do.</p>
                                </div>
                                <div className="col-4 tab-content-item mb-4">
                                    <FontAwesomeIcon icon={faSketch} />
                                    <h4>Sketch</h4>
                                    <p>Ad cupidatat aute qui laborum tempor id eu minim. Nisi ullamco sunt ipsum voluptate amet amet voluptate deserunt do irure ex do.</p></div>
                                <div className="col-4 tab-content-item mb-4">
                                    <FontAwesomeIcon icon={faInvision} />
                                    <h4>InVision</h4>
                                    <p>Ad cupidatat aute qui laborum tempor id eu minim. Nisi ullamco sunt ipsum voluptate amet amet voluptate deserunt do irure ex do.</p></div>
                                <div className="col-4 tab-content-item mb-4">
                                    <FontAwesomeIcon icon={faFigma} />
                                    <h4>Figma</h4>
                                    <p>Ad cupidatat aute qui laborum tempor id eu minim. Nisi ullamco sunt ipsum voluptate amet amet voluptate deserunt do irure ex do.</p></div>
                            </div>
                        </Tabs> */}
                </div>
            </section>
        );
    }
}

export default Experience;
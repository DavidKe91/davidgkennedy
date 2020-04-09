import React, { Component } from 'react';
import './Experience.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faSass, faGit, faLaravel, faPhp, faWordpress, faJenkins, faAws, faLinux, faAdobe, faSketch, faInvision, faFigma } from '@fortawesome/free-brands-svg-icons';
import Tabs from './Tabs';

class Experience extends Component {
    render() {
        return (
            <section className="experience">
                <div className="container">
                    {/* <div className="headerWrapper">
                        <h3 className="text-center">Experience<sup>3</sup></h3>
                        <p>Aliquip ex ut anim eu do id. Ullamco esse mollit anim occaecat. Est occaecat deserunt elit pariatur ullamco officia deserunt sunt anim ullamco ut.</p>
                    </div> */}
                    <div className="row mt-5">
                        <Tabs>
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
                                    <img class="img-fluid" src="https://s3-eu-west-1.amazonaws.com/davidgkennedy.com/Portfolio+Images/GraphQL_Logo.svg.png" />
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
                        </Tabs>
                    </div>
                </div>
            </section>
        );
    }
}

export default Experience;
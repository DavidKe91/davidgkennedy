import React, { Component } from 'react';
import '../_freelance.scss';
import './_services.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faPencilRuler, faStore, faNetworkWired } from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faWordpress } from '@fortawesome/free-brands-svg-icons';

class Services extends Component {
    render() {
        return (
            <section className="freelanceFeature servicesSection">
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <div className="services-block">
                                <h2>My Services</h2>
                                <p>Pariatur non pariatur consequat aliquip magna aliqua enim consectetur mollit amet enim. Officia irure velit cupidatat nisi et. Nisi commodo anim ut id.</p>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="services-block">
                                <div className="services-list">
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faCode} />
                                    </div>
                                    <h3>Web Development</h3>
                                    <p>Occaecat cillum do reprehenderit id.</p>
                                </div>
                                <div className="services-list">
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faPencilRuler} />
                                    </div>
                                    <h3>Graphic Design</h3>
                                    <p>Occaecat cillum do reprehenderit id.</p>
                                </div>
                                <div className="services-list">
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faStore} />
                                    </div>
                                    <h3>E-Commerce Setup / Logistics</h3>
                                    <p>Occaecat cillum do reprehenderit id.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="services-block">
                                <div className="services-list">
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faGoogle} />
                                    </div>
                                    <h3>Search Engine Optimisation</h3>
                                    <p>Occaecat cillum do reprehenderit id.</p>
                                </div>
                                <div className="services-list">
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faNetworkWired} />
                                    </div>
                                    <h3>Web Hosting / Domain Name Management</h3>
                                    <p>Occaecat cillum do reprehenderit id.</p>
                                </div>
                                <div className="services-list">
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faWordpress} />
                                    </div>
                                    <h3>Wordpress Setup / Training</h3>
                                    <p>Occaecat cillum do reprehenderit id.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        );
    }
}

export default Services;
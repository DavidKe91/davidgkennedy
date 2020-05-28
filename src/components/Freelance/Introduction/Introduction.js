import React, { Component } from 'react';
import classes from './Introduction.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

class Introduction extends Component {
    render() {
        return (
            <header className={classes.appHeader}>
                <div className="container">
                    <div className={classes.headerWrapper}>
                        <h1>Go Digital</h1>
                        <p>Since the Covid-19 outbreak, many businesses are struggling to stay afloat since the Covid-19 outbreak. I can assist your business by to selling online. I offer many services including web development, graphic design, search engine optimisation, domain name management, hosting and e-commerce setup.</p>
                        <ul>
                            <li>Attract new customers both nationally and internationally.</li>
                            <li>Sell anything from anywhere through my e-commerce solutions.</li>
                            <li>Boost your Google ranking position and enhance your online presence.</li>
                            <li>Customise and manage your website with an easy to use content management system.</li>
                        </ul>
                        <div className="buttonRow">
                            <a href="/experience">
                                <button className="alt-btn">Book a free consulation <FontAwesomeIcon icon={faArrowRight} /></button>
                            </a>
                            <a href="https://s3-eu-west-1.amazonaws.com/davidgkennedy.com/Portfolio+Images/CV/David-Kennedy-CV.pdf" target="_blank" rel="noopener noreferrer">
                                <button className={classes.transparentBtn}>Learn More <FontAwesomeIcon icon={faArrowRight} /></button>
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Introduction;
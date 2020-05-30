import React, { Component } from 'react';
import classes from './_introduction.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

class Introduction extends Component {
    render() {
        return (
            <header className="appHeader">
                <div className="container">
                    <div className="headerWrapper">
                        <h1>Go Digital</h1>
                        <p>Since the Covid-19 outbreak, many businesses are struggling to stay afloat. I can assist your business by transitioning to selling online. I offer many services including web development, graphic design, search engine optimisation, domain name management, hosting and e-commerce setup.</p>
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
                                <button className="transparentBtn">Learn More <FontAwesomeIcon icon={faArrowRight} /></button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mockups">
                    <img className="img-fluid iphone" src="https://s3-eu-west-1.amazonaws.com/davidgkennedy.com/Portfolio+Images/iPhone.png" alt="iPhone Mockup" />
                    <img className="img-fluid macbook" src="https://s3-eu-west-1.amazonaws.com/davidgkennedy.com/Portfolio+Images/Macbook.png" alt="MacBook Mockup" />
                </div>
            </header>
        );
    }
}

export default Introduction;
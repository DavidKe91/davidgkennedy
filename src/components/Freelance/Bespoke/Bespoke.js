import React, { Component } from 'react';
import '../_freelance.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

class Bespoke extends Component {
    render() {
        return (
            <section className="freelanceFeature">
                <div className="row no-gutters">
                    <div className="col-6">
                        <img className="img-fluid" src="https://s3-eu-west-1.amazonaws.com/davidgkennedy.com/Portfolio+Images/Bespoke-Inline.png" alt="Bespoke Design" />
                    </div>
                    <div className="col-6">
                        <div className="features">
                            <h3 className="text-center">Bespoke Design</h3>
                            <p>Your website will use a custom design that has been tailored to meet your business needs. As both a graphic designer and a web developer with over 6 years of experience, I know how to help your business stand out in a competitive market.</p>
                            <div className="buttonRow">
                                <a href="/experience">
                                    <button className="alt-btn">Get Started <FontAwesomeIcon icon={faArrowRight} /></button>
                                </a>
                                <a href="https://s3-eu-west-1.amazonaws.com/davidgkennedy.com/Portfolio+Images/CV/David-Kennedy-CV.pdf" target="_blank" rel="noopener noreferrer">
                                    <button className="transparentBtn">Learn More <FontAwesomeIcon icon={faArrowRight} /></button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Bespoke;
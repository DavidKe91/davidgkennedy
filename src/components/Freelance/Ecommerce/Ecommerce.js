import React, { Component } from 'react';
import '../_freelance.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

class Ecommerce extends Component {
    render() {
        return (
            <section className="freelanceFeature">
                <div className="row no-gutters">
                    <div className="col-6">
                        <div className="features">
                            <h3 className="text-center">E-Commerce Setup</h3>
                            <p>I can build a fully functioning, easy to use e-commerce website so that you can sell and ship your products from the comfort of your own home. Using the best e-commerce platforms on the market (WooCommerce or Shopify), you can manage transactions securely and easily. Customer transactions can be carried out using traditional credit / debit cards, PayPal or Stripe.</p>
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
                    <div className="col-6">
                        <img className="img-fluid" src="https://s3-eu-west-1.amazonaws.com/davidgkennedy.com/Portfolio+Images/E-Commerce+Inline.png" alt="Bespoke Design" />
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

export default Ecommerce;
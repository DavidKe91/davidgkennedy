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
                    <div className="col-12">
                        <Link to="/about"><button className="aboutBtn">Learn More About Me <FontAwesomeIcon icon={faArrowRight} /></button></Link>
                    </div>
                </div>
            </section>
        );
    }
}

export default Ecommerce;
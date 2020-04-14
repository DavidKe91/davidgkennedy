import React, { Component } from 'react';
import './Footer.css';
import { faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MenuItems from '../Sidebar/Menu/MenuItems';

class Footer extends Component {
    footerYear = () => {
        let currentDate = new Date();
        let currentYear = currentDate.getFullYear();
        return currentYear;
    }
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-3">
                            <h3 className="footerName">David <span>Kennedy</span></h3>
                        </div>
                        <div className="col-12 col-md-3">
                            <ul className="footerMenu">
                                <MenuItems />
                            </ul>
                        </div>
                        <div className="col-12 col-md-3">
                            <div className="contact">
                                <p>Phone: <a href="tel:+353857402604">085 740 2604</a></p>
                                <p>Email: <a href="tel:+353857402604">davidgkennedy@hotmail.com</a></p>
                            </div>
                            <div className="icons">
                                <a href="https://www.instagram.com/dave_tripper/" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                                <a href="https://github.com/DavidKe91" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                                <a href="https://www.linkedin.com/in/davidky/" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                            </div>
                        </div>
                        <div className="col-12 col-md-3">
                            <small className="copyright">Copyright &copy; {this.footerYear()} by David Kennedy</small>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
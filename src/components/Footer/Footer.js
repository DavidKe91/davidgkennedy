import React, { Component } from 'react';
import classes from './Footer.module.css';
import { faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Footer extends Component {
    footerYear = () => {
        let currentDate = new Date();
        let currentYear = currentDate.getFullYear();
        return currentYear;
    }
    render() {
        return (
            <footer className={classes.footer}>
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <h3 className={classes.footerName}>David <span>Kennedy</span></h3>
                            <small className={classes.copyright}>Copyright &copy; {this.footerYear()} by David Kennedy</small>
                        </div>
                        <div className="col-3">
                            <ul className={classes.footerMenu}>
                                {this.props.footerMenu}
                            </ul>
                        </div>
                        <div className="col-6">
                            <div className={classes.contact}>
                                <p>Phone: <a href="tel:+353857402604">085 740 2604</a></p>
                                <p>Email: <a href="tel:+353857402604">davidgkennedy@hotmail.com</a></p>
                            </div>
                            <div className={classes.icons}>
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
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
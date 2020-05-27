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
                        <p>Sint irure consectetur elit dolore dolor anim cillum mollit. Veniam mollit veniam mollit labore nostrud mollit dolore reprehenderit aliquip mollit culpa nostrud. Laborum nulla duis quis laborum culpa cupidatat velit. Proident aliquip aliquip incididunt minim eu sunt pariatur ex commodo ea.</p>
                        <div className="buttonRow">
                            <a href="/experience">
                                <button className="alt-btn">Get Started <FontAwesomeIcon icon={faArrowRight} /></button>
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
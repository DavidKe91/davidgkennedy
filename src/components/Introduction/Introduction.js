import React, { Component } from 'react';
import classes from './Introduction.module.css';

class Introduction extends Component {
    render() {
        return (
            <header className={classes.appHeader}>
                <div className="container">
                    <div className={classes.introTitle}>
                        <h1>David<span>Kennedy</span></h1>
                        <h2>Frontend Developer</h2>
                    </div>
                </div>
            </header>
        );
    }
}

export default Introduction;
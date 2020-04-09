import React, { Component } from 'react';
import classes from './Introduction.module.css';

class Introduction extends Component {
    render() {
        return (
            <header className={classes.appHeader}>
                <svg width="0" height="0">
                    <defs>
                        <clipPath id="myCurve" clipPathUnits="objectBoundingBox">
                            <path
                                d="M0,1.02v-1h1v0.48c0,0.09-0.02,0.19-0.11,0.25C0.66,0.89,0.01,0.89,0,1.02z"
                            />
                        </clipPath>
                    </defs>
                </svg>
                <div className="container">
                    <div className={classes.headerWrapper}>
                        <h1>David <span>Kennedy</span></h1>
                        <h2>Frontend Developer</h2>
                    </div>
                </div>
            </header>
        );
    }
}

export default Introduction;
import React, { Component } from 'react';
import classes from './Experience.module.css';

class Experience extends Component {
    render() {
        return (
            <section className="experience">
                <div className="container">
                    <div className="row">
                        <p>By adding more color-stop points on the gradient line, you can create a highly customized transition between multiple colors.</p>
                        <button className="btn intro-btn">Download CV</button>
                        <button className="btn intro-btn">Contact Me</button>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <img src="https://picsum.photos/800/800" className="img-fluid" alt="placeholder"></img>
                        </div>
                        <div className="col-md-6">
                            <small>Intro</small>
                            <h2>About Me</h2>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Experience;
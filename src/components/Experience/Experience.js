import React, { Component } from 'react';
import './Experience.css';
import Tabs from './Tabs';

class Experience extends Component {
    render() {
        return (
            <section className="experience">
                <div className="container">
                    <div className="headerWrapper">
                        <h3 className="text-center">Experience<sup>2</sup></h3>
                        <p>Aliquip ex ut anim eu do id. Ullamco esse mollit anim occaecat. Est occaecat deserunt elit pariatur ullamco officia deserunt sunt anim ullamco ut.</p>
                    </div>
                    <div className="row mt-5">
                        <Tabs>
                            <div label="Development">
                                <div className="col-6 tab-content-item mb-4">
                                    <i className="fab fa-react"></i>
                                    <h4>React / Redux</h4>
                                    <p>Ad cupidatat aute qui laborum tempor id eu minim. Nisi ullamco sunt ipsum voluptate amet amet voluptate deserunt do irure ex do.</p>
                                </div>
                                <div className="col-6 tab-content-item mb-4">
                                    <i className="fab fa-sass"></i>
                                    <h4>CSS / SASS</h4>
                                    <p>Ad cupidatat aute qui laborum tempor id eu minim. Nisi ullamco sunt ipsum voluptate amet amet voluptate deserunt do irure ex do.</p>
                                </div>
                                <div className="col-6 tab-content-item mb-4">
                                    <i className="fab fa-laravel"></i>
                                    <h4>Laravel</h4>
                                    <p>Ad cupidatat aute qui laborum tempor id eu minim. Nisi ullamco sunt ipsum voluptate amet amet voluptate deserunt do irure ex do.</p>
                                </div>
                                <div className="col-6 tab-content-item mb-4">
                                    <i className="fas fa-project-diagram"></i>
                                    <h4>GraphQL</h4>
                                    <p>Ad cupidatat aute qui laborum tempor id eu minim. Nisi ullamco sunt ipsum voluptate amet amet voluptate deserunt do irure ex do.</p>
                                </div>
                            </div>
                            <div label="DevOps">
                                <div className="col-6 tab-content-item mb-4">
                                    <i className="fab fa-jenkins"></i>
                                    <h4>Continuous Integration</h4>
                                    <p>Ad cupidatat aute qui laborum tempor id eu minim. Nisi ullamco sunt ipsum voluptate amet amet voluptate deserunt do irure ex do.</p>
                                </div>
                                <div className="col-6 tab-content-item mb-4">
                                    <i className="fab fa-aws"></i>
                                    <h4>AWS</h4>
                                    <p>Ad cupidatat aute qui laborum tempor id eu minim. Nisi ullamco sunt ipsum voluptate amet amet voluptate deserunt do irure ex do.</p>
                                </div>
                                <div className="col-6 tab-content-item mb-4">
                                    <i className="fab fa-git"></i>
                                    <h4>Version Control</h4>
                                    <p>Ad cupidatat aute qui laborum tempor id eu minim. Nisi ullamco sunt ipsum voluptate amet amet voluptate deserunt do irure ex do.</p>
                                </div>
                                <div className="col-6 tab-content-item mb-4">
                                    <i className="fab fa-linux"></i>
                                    <h4>Linux Shell &amp; WHM</h4>
                                    <p>Ad cupidatat aute qui laborum tempor id eu minim. Nisi ullamco sunt ipsum voluptate amet amet voluptate deserunt do irure ex do.</p>
                                </div>
                            </div>
                            <div label="UX">
                                Nothing to see here, this tab is <em>extinct</em>!
                            </div>
                        </Tabs>
                    </div>
                </div>
            </section>
        );
    }
}

export default Experience;
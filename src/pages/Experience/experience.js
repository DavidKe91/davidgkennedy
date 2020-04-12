import React from "react";
import classNames from 'classnames';
import Menu from '../../components/Sidebar/Menu/Menu';
import MenuItem from '../../components/Sidebar/MenuItem/MenuItem';
import './Experience.css';
import MenuButtonClose from '../../components/Sidebar/MenuButtons/MenuButtonClose';
import Footer from '../../components/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faUser, faBuilding, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import Tabs from '../../components/Tabs/Tabs';

class Experience extends React.Component {
    state = {
        menuOpen: false,
    };

    handleMenuClick() {
        this.setState({
            menuOpen: !this.state.menuOpen
        });
    }

    handleAnchorClick() {
        this.setState({
            menuOpen: false
        });
    }

    render() {
        let toggleClasses = classNames({
            main: true,
            'toggled': this.state.menuOpen,
        });
        const menu = ['Home', 'About Me', 'Experience', 'Portfolio'];
        const menuItems = menu.map((val, index) => {
            return (
                <MenuItem
                    key={index}
                    delay={`${index * 1}s`}
                    onClick={() => { this.props.anchorClick(); }}>{val}
                </MenuItem>
            )
        });

        return (
            <>
                <div className={toggleClasses}>
                    <div className="topOuter">
                        <MenuButtonClose
                            open={this.state.menuOpen}
                            onClick={() => this.handleMenuClick()}>
                            <i className="fas fa-bars"></i>
                        </MenuButtonClose>
                        <Menu
                            open={this.state.menuOpen}>
                            {menuItems}
                        </Menu>
                        <header className="appHeader">
                            <div className="container">
                                <div className="headerWrapper">
                                    <h1>Experience</h1>
                                </div>
                            </div>
                        </header>
                        <section className="about">
                            <div className="container">
                                <div className="row">
                                    <Tabs>
                                        <div label="KAX Media">
                                            <div className="col-9">
                                                <div className="aboutMeRow">
                                                    <h2>KAX Media</h2>
                                                    <p>My main responsibility at KAX was to develop and maintain the PPC website on behalf of the Growth Marketing team. This involved the constant expansion of the site, which was made possible by Laravel, an MVC PHP framework. This website consumed multiple internal APIs which significantly simplifies the large volume of data it has access to from our database.</p>
                                                    <h3>Responsibilities</h3>
                                                    <ul>
                                                        <li><FontAwesomeIcon icon={faArrowRight} />Incididunt consectetur cillum mollit ea commodo qui Lorem eu aliquip.</li>
                                                        <li><FontAwesomeIcon icon={faArrowRight} />Irure cupidatat ipsum sit non cillum do ea Lorem ex.</li>
                                                        <li><FontAwesomeIcon icon={faArrowRight} />Aliqua mollit sit est consequat duis consectetur reprehenderit culpa sunt sint aliquip irure.</li>
                                                        <li><FontAwesomeIcon icon={faArrowRight} />Elit commodo laborum incididunt veniam ut cupidatat.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div className="jobDetails">
                                                    <h3>Job Details</h3>
                                                    <h4><FontAwesomeIcon icon={faUser} />Title</h4>
                                                    <p>Frontend Web Developer</p>
                                                    <h4><FontAwesomeIcon icon={faBuilding} />Department</h4>
                                                    <p>Growth Marketing</p>
                                                    <h4><FontAwesomeIcon icon={faCalendarAlt} />Time</h4>
                                                    <p>March 2019 - March 2020</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div label="Originate">
                                            <div className="col-9">
                                                <div className="aboutMeRow">
                                                    <h2>Originate</h2>
                                                    <p>There were many dimensions to my role here at Originate. First and foremost, I was responsible for developing responsive, corporate websites for a wide variety of clients. I was involved in every aspect of the web development process which includes building the site from a mock-up or wireframe, search engine optimisation, analytics tracking and cross browser / device testing.
                                        Most importantly, working at a busy agency such as Originate encouraged me to improve my time management, communication and problem-solving skills. I believe that these three characteristics are vital for working effectively.</p>
                                                    <h3>Responsibilities</h3>
                                                    <ul>
                                                        <li><FontAwesomeIcon icon={faArrowRight} />Incididunt consectetur cillum mollit ea commodo qui Lorem eu aliquip.</li>
                                                        <li><FontAwesomeIcon icon={faArrowRight} />Irure cupidatat ipsum sit non cillum do ea Lorem ex.</li>
                                                        <li><FontAwesomeIcon icon={faArrowRight} />Aliqua mollit sit est consequat duis consectetur reprehenderit culpa sunt sint aliquip irure.</li>
                                                        <li><FontAwesomeIcon icon={faArrowRight} />Elit commodo laborum incididunt veniam ut cupidatat.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div className="jobDetails">
                                                    <h3>Job Details</h3>
                                                    <h4><FontAwesomeIcon icon={faUser} />Title</h4>
                                                    <p>Web Developer</p>
                                                    <h4><FontAwesomeIcon icon={faBuilding} />Department</h4>
                                                    <p>Digital</p>
                                                    <h4><FontAwesomeIcon icon={faCalendarAlt} />Time</h4>
                                                    <p>January 2017 - March 2019</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div label="Harvey Norman">
                                            <div className="col-9">
                                                <div className="aboutMeRow">
                                                    <h2>Harvey Norman</h2>
                                                    <p>As a Front End / UI / UX Designer, my primary role was to create seamless user journeys for Harvey Norman Ireland website. This includes conducing user research, prototyping, designing wireframes and developing the content for the site. My role was all-inclusive since I was involved in every step of the design process.</p>
                                                    <h3>Responsibilities</h3>
                                                    <ul>
                                                        <li><FontAwesomeIcon icon={faArrowRight} />Incididunt consectetur cillum mollit ea commodo qui Lorem eu aliquip.</li>
                                                        <li><FontAwesomeIcon icon={faArrowRight} />Irure cupidatat ipsum sit non cillum do ea Lorem ex.</li>
                                                        <li><FontAwesomeIcon icon={faArrowRight} />Aliqua mollit sit est consequat duis consectetur reprehenderit culpa sunt sint aliquip irure.</li>
                                                        <li><FontAwesomeIcon icon={faArrowRight} />Elit commodo laborum incididunt veniam ut cupidatat.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div className="jobDetails">
                                                    <h3>Job Details</h3>
                                                    <h4><FontAwesomeIcon icon={faUser} />Title</h4>
                                                    <p>Frontend Web Developer</p>
                                                    <h4><FontAwesomeIcon icon={faBuilding} />Department</h4>
                                                    <p>Digital / E-Commerce</p>
                                                    <h4><FontAwesomeIcon icon={faCalendarAlt} />Time</h4>
                                                    <p>December 2014 - January 2017</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Tabs>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                <Footer />
            </>
        );
    }
};

export default Experience;
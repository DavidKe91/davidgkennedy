import React from "react";
import classNames from 'classnames';
import Menu from '../../components/Sidebar/Menu/Menu';
import MenuItem from '../../components/Sidebar/MenuItem/MenuItem';
import './Experience.css';
import MenuButtonClose from '../../components/Sidebar/MenuButtons/MenuButtonClose';
import Footer from '../../components/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faUser, faBuilding, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { faReact, faSass, faGit, faLaravel, faPhp, faWordpress, faJenkins, faAws, faLinux, faAdobe, faSketch, faInvision, faFigma } from '@fortawesome/free-brands-svg-icons';
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
                    <div className="">
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
                        <section className="experience">
                            <div className="container">
                                <div className="row">
                                    <p className="intro">Upon finishing secondary school I attended Maynooth University where I studied Digital Media for four years. The course was a combination of media theory, computer science and creative media projects. I opted to take an optional Erasmus year abroad where I studied at the University of Amsterdam. During this time I also worked as a graphic design intern. Whilst working in design, I discovered my passion for web development</p>
                                </div>
                                <div className="row">
                                    <Tabs>
                                        <div label="Development">
                                            <div className="col-4 tab-content-item mb-4">
                                                <FontAwesomeIcon icon={faReact} />
                                                <h4>React / Redux</h4>
                                                <p>Over the past year and a half I have built a personal portfolio of React projects using Redux as a tool to manage the state.</p>
                                            </div>
                                            <div className="col-4 tab-content-item mb-4">
                                                <FontAwesomeIcon icon={faSass} />
                                                <h4>CSS / SASS</h4>
                                                <p>I have used CSS since I began working as a web developer. Over the past 6 years I have kept up to date with changes to CSS such as mastering Flexbox, converting to SASS for better efficiency and I am now experimenting with PostCSS</p>
                                            </div>
                                            <div className="col-4 tab-content-item mb-4">
                                                <FontAwesomeIcon icon={faLaravel} />
                                                <h4>Laravel</h4>
                                                <p>During my time at KAX Media I worked almost exclusively with Laravel applications. The MVC pattern simplified the complexity of development significantly.</p>
                                            </div>
                                            <div className="col-4 tab-content-item mb-4">
                                                <img className="img-fluid" src="https://s3-eu-west-1.amazonaws.com/davidgkennedy.com/Portfolio+Images/GraphQL_Logo.svg.png" alt="GraphQL Logo" />
                                                <h4>GraphQL</h4>
                                                <p>I recently completed several projects using GraphQL to easily query databases. GraphQL made it very easy to query exactly what I want and customise the related data returned.</p>
                                            </div>
                                            <div className="col-4 tab-content-item mb-4">
                                                <FontAwesomeIcon icon={faPhp} />
                                                <h4>PHP</h4>
                                                <p>Throughout my career I have consistently used PHP. My most recent experience with PHP was using it through the Laravel framework to consume Rest APIs.</p>
                                            </div>
                                            <div className="col-4 tab-content-item mb-4">
                                                <FontAwesomeIcon icon={faWordpress} />
                                                <h4>Wordpress</h4>
                                                <p>I have almost four years of experience working with Wordpress. I have used this system mostly for the convenient CMS interface for clients to take ownership of the project to make regular updates to the site.</p>
                                            </div>
                                        </div>
                                        <div label="Development Tools">
                                            <div className="col-4 tab-content-item mb-4">
                                                <FontAwesomeIcon icon={faJenkins} />
                                                <h4>Continuous Integration</h4>
                                                <p>In my previous role at KAX Media, I used Jenkins extensively to deploy my code to different environments depending on where the project was in it's lifecycle. Using Jenkins dramatically improved my efficiency.</p>
                                            </div>
                                            <div className="col-4 tab-content-item mb-4">
                                                <FontAwesomeIcon icon={faAws} />
                                                <h4>AWS</h4>
                                                <p>I have experience working with S3 for hosting static content and EC2 for computing resources. This very website is hosted on S3. The flexibility and scalability of the plans make it far more efficient than a regular server.</p>
                                            </div>
                                            <div className="col-4 tab-content-item mb-4">
                                                <FontAwesomeIcon icon={faGit} />
                                                <h4>Version Control</h4>
                                                <p>I use Git to easily share and manage my code. Git is essential for working in teams but also for deploying your code. Using Git with Jenkins to divide your branchs into their relevant environments is a great way of simplifying the development process. Visit my GitHub profile <a href="https://github.com/DavidKe91" target="_blank">here</a>.</p>
                                            </div>
                                            <div className="col-4 tab-content-item mb-4">
                                                <FontAwesomeIcon icon={faLinux} />
                                                <h4>Linux Shell &amp; WHM</h4>
                                                <p>Ad cupidatat aute qui laborum tempor id eu minim. Nisi ullamco sunt ipsum voluptate amet amet voluptate deserunt do irure ex do.</p>
                                            </div>
                                        </div>
                                        <div label="UX Design">
                                            <div className="col-4 tab-content-item mb-4">
                                                <FontAwesomeIcon icon={faAdobe} />
                                                <h4>Adobe Creative Suite</h4>
                                                <p>Ad cupidatat aute qui laborum tempor id eu minim. Nisi ullamco sunt ipsum voluptate amet amet voluptate deserunt do irure ex do.</p>
                                            </div>
                                            <div className="col-4 tab-content-item mb-4">
                                                <FontAwesomeIcon icon={faSketch} />
                                                <h4>Sketch</h4>
                                                <p>Ad cupidatat aute qui laborum tempor id eu minim. Nisi ullamco sunt ipsum voluptate amet amet voluptate deserunt do irure ex do.</p></div>
                                            <div className="col-4 tab-content-item mb-4">
                                                <FontAwesomeIcon icon={faInvision} />
                                                <h4>InVision</h4>
                                                <p>Ad cupidatat aute qui laborum tempor id eu minim. Nisi ullamco sunt ipsum voluptate amet amet voluptate deserunt do irure ex do.</p></div>
                                            <div className="col-4 tab-content-item mb-4">
                                                <FontAwesomeIcon icon={faFigma} />
                                                <h4>Figma</h4>
                                                <p>Ad cupidatat aute qui laborum tempor id eu minim. Nisi ullamco sunt ipsum voluptate amet amet voluptate deserunt do irure ex do.</p></div>
                                        </div>
                                    </Tabs>
                                </div><div className="row mt-5">
                                    <Tabs>
                                        <div label="KAX Media">
                                            <div className="col-8">
                                                <div className="aboutMeRow">
                                                    <h2>KAX Media</h2>
                                                    <p>My main responsibility at KAX was to develop and maintain the PPC website on behalf of the Growth Marketing team. This involved the constant expansion of the site, which was made possible by Laravel, an MVC PHP framework. This website consumed multiple internal APIs which significantly simplifies the large volume of data it has access to from our database.</p>
                                                    <h3>Responsibilities</h3>
                                                    <ul>
                                                        <li><FontAwesomeIcon icon={faArrowRight} />Developing and maintaining the company's main PPC site using Laravel and Twig.</li>
                                                        <li><FontAwesomeIcon icon={faArrowRight} />Configuring and executing A/B and multivariate tests.</li>
                                                        <li><FontAwesomeIcon icon={faArrowRight} />Creating new features, sections and landing pages for various websites that we managed.</li>
                                                        <li><FontAwesomeIcon icon={faArrowRight} />Working with various internal APIs to deliver dynamic, real time content to websites.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-4">
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
                                            <div className="col-8">
                                                <div className="aboutMeRow">
                                                    <h2>Originate</h2>
                                                    <p>Originate is a small Branding agency in south Dublin with clients from a wide variety of industries. My role here was to develop websites to coexist with the branding identity being created by the art directors and designers in Originate.</p>
                                                    <h3>Responsibilities</h3>
                                                    <ul>
                                                        <li><FontAwesomeIcon icon={faArrowRight} />Developing responsive websites and landing pages for our clients primarily using Wordpress and / or PHP.</li>
                                                        <li><FontAwesomeIcon icon={faArrowRight} />Using effective Search Engine Optimisation techniques to give ourc clients websites a strong organic online presence.</li>
                                                        <li><FontAwesomeIcon icon={faArrowRight} />Using Google Analytics for continuous insights into the performance of our sites.</li>
                                                        <li><FontAwesomeIcon icon={faArrowRight} />Managing a virtual server (WHM) with over 60 websites.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-4">
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
                                            <div className="col-8">
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
                                            <div className="col-4">
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
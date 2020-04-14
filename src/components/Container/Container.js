import React from "react";
import styled from "styled-components";
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Home from "../../pages/home";
import About from "../../pages/About/about";
import Experience from "../../pages/Experience/experience";
import Portfolio from "../../pages/Portfolio/portfolio";
import Post from "../../pages/Post/post";
import NoMatch from "../../pages/no-match";

function Container({ location }) {
    return (
        <Wrapper>
            <TransitionGroup className="transition-group">
                <CSSTransition
                    key={location.key}
                    timeout={{ enter: 1000, exit: 1000 }}
                    classNames={'fade'}
                >
                    <section className="route-section">
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/about" component={About} />
                            <Route exact path="/experience" component={Experience} />
                            <Route exact path="/portfolio" component={Portfolio} />
                            <Route path="/404" component={NoMatch} />
                            <Route path="/:slug" component={Post} />
                        </Switch>
                    </section>
                </CSSTransition>
            </TransitionGroup>
        </Wrapper>
    );
}

const Wrapper = styled.div`

    div.transition-group {
        position: relative;
    }
    section.route-section {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    padding-top: 0px;
    }

    .fade-enter {
        opacity: 0.01;
    }

    .fade-enter.fade-enter-active {
        opacity: 1;
        transition: opacity 1000ms ease-in;
    }

    .fade-exit {
        opacity: 1;
    }

    .fade-exit.fade-exit-active {
        opacity: 0.01;
        transition: opacity 1000ms ease-in;
    }
`;

export default withRouter(Container);
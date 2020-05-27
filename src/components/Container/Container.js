import React from "react";
import styled from "styled-components";
import { Switch, Route, withRouter } from "react-router-dom";
import Home from "../../pages/home";
import About from "../../pages/About/about";
import Experience from "../../pages/Experience/experience";
import Portfolio from "../../pages/Portfolio/portfolio";
import Freelance from "../../pages/Freelance/freelance";
import Post from "../../pages/Post/post";
import NoMatch from "../../pages/no-match";

function Container({ location }) {
    return (
        <Wrapper>
            <section className="route-section">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/experience" component={Experience} />
                    <Route exact path="/portfolio" component={Portfolio} />
                    <Route exact path="/freelance" component={Freelance} />
                    <Route path="/404" component={NoMatch} />
                    <Route path="/:slug" component={Post} />
                </Switch>
            </section>
        </Wrapper>
    );
}

const Wrapper = styled.div`
section.route-section {
    padding: 0px;
}
    div.transition-group {
        position: relative;
    }
`;

export default withRouter(Container);
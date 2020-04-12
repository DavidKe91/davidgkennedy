import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Home from "./pages/home";
import About from "./pages/About/about";
import Experience from "./pages/Experience/experience";
import Post from "./pages/Post/post";
import NoMatch from "./pages/no-match";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/experience" component={Experience} />
                <Route path="/404" component={NoMatch} />
                <Route path="/:slug" component={Post} />
            </Switch>
        </Router>
    );
}

export default App;

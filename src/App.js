import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Container from './components/Container/Container';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import ReactGA from 'react-ga';
ReactGA.initialize('UA-000000-01');
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
    return (
        <Router>
            <ScrollToTop>
                <Container />
            </ScrollToTop>
        </Router>
    );
}

export default App;
